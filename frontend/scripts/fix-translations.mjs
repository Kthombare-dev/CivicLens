import fs from 'node:fs/promises'
import path from 'node:path'

const ROOT = process.cwd()
const DIR = path.join(ROOT, 'src', 'translations')

const decodePossiblyEncodedJson = (buf) => {
  // Detect BOM
  if (buf.length >= 2 && buf[0] === 0xff && buf[1] === 0xfe) {
    // UTF-16 LE
    return buf.slice(2).toString('utf16le')
  }

  if (buf.length >= 2 && buf[0] === 0xfe && buf[1] === 0xff) {
    // UTF-16 BE
    // Node doesn't have utf16be; swap bytes then decode as LE
    const swapped = Buffer.allocUnsafe(buf.length - 2)
    for (let i = 2; i < buf.length; i += 2) {
      swapped[i - 2] = buf[i + 1]
      swapped[i - 1] = buf[i]
    }
    return swapped.toString('utf16le')
  }

  if (
    buf.length >= 3 &&
    buf[0] === 0xef &&
    buf[1] === 0xbb &&
    buf[2] === 0xbf
  ) {
    // UTF-8 BOM
    return buf.slice(3).toString('utf8')
  }

  // Heuristic: if buffer has a lot of null bytes, it's likely UTF-16LE without BOM
  let nulCount = 0
  const sampleLen = Math.min(buf.length, 4096)
  for (let i = 0; i < sampleLen; i += 1) {
    if (buf[i] === 0x00) nulCount += 1
  }

  if (sampleLen > 0 && nulCount / sampleLen > 0.1) {
    return buf.toString('utf16le')
  }

  return buf.toString('utf8')
}

const extractJsonObjectText = (text) => {
  const cleaned = text.replace(/^\uFEFF/, '').replace(/\u0000/g, '')

  const firstObj = cleaned.indexOf('{')
  const lastObj = cleaned.lastIndexOf('}')

  const firstArr = cleaned.indexOf('[')
  const lastArr = cleaned.lastIndexOf(']')

  // Prefer object if present
  if (firstObj !== -1 && lastObj !== -1 && lastObj > firstObj) {
    return cleaned.slice(firstObj, lastObj + 1)
  }

  if (firstArr !== -1 && lastArr !== -1 && lastArr > firstArr) {
    return cleaned.slice(firstArr, lastArr + 1)
  }

  return cleaned
}

const files = (await fs.readdir(DIR)).filter((f) => f.endsWith('.json'))

let fixed = 0
let failed = 0

for (const file of files) {
  const filePath = path.join(DIR, file)
  try {
    const buf = await fs.readFile(filePath)

    const decoded = decodePossiblyEncodedJson(buf)
    const jsonText = extractJsonObjectText(decoded)
    const obj = JSON.parse(jsonText)

    // Write back as clean UTF-8 JSON (keep it compact to match existing style)
    const out = JSON.stringify(obj)
    await fs.writeFile(filePath, out, { encoding: 'utf8' })

    fixed += 1
  } catch (err) {
    failed += 1
    console.error(`Failed: ${file} -> ${err?.message || err}`)
  }
}

console.log(`Done. OK=${fixed}, Failed=${failed}`)
if (failed > 0) process.exit(1)
