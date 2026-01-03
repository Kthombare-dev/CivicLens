import fs from 'node:fs/promises'
import path from 'node:path'

const ROOT = process.cwd()
const DIR = path.join(ROOT, 'src', 'translations')

const enPath = path.join(DIR, 'en.json')
const en = JSON.parse(await fs.readFile(enPath, 'utf8'))

const files = (await fs.readdir(DIR)).filter((f) => f.endsWith('.json') && f !== 'en.json')

let updated = 0
let failed = 0

for (const file of files) {
  const filePath = path.join(DIR, file)
  try {
    const obj = JSON.parse(await fs.readFile(filePath, 'utf8'))

    let changed = false
    for (const [k, v] of Object.entries(en)) {
      if (!(k in obj)) {
        obj[k] = v
        changed = true
      }
    }

    if (changed) {
      await fs.writeFile(filePath, JSON.stringify(obj), { encoding: 'utf8' })
      updated += 1
    }
  } catch (err) {
    failed += 1
    console.error(`Failed: ${file} -> ${err?.message || err}`)
  }
}

console.log(`Done. Updated=${updated}, Failed=${failed}`)
if (failed > 0) process.exit(1)
