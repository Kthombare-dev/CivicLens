import { createContext, useContext, useState, useEffect } from 'react'
import { DEFAULT_LANGUAGE } from '../utils/languages'
 
const FALLBACK_LANGUAGE = 'en'

// Dynamic translation loading
const loadTranslation = async (langCode) => {
  try {
    const module = await import(`../translations/${langCode}.json`)
    return module.default
  } catch (error) {
    console.error(`Failed to load translation for ${langCode}:`, error)
    // Fallback to English
    try {
      const englishModule = await import('../translations/en.json')
      return englishModule.default
    } catch (fallbackError) {
      console.error('Failed to load English translation:', fallbackError)
      return {}
    }
  }
}

const TranslationContext = createContext()

export const TranslationProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(DEFAULT_LANGUAGE)
  const [translations, setTranslations] = useState({})
  const [englishTranslations, setEnglishTranslations] = useState({})

  useEffect(() => {
    const init = async () => {
      const en = await loadTranslation(FALLBACK_LANGUAGE)
      setEnglishTranslations(en)

      const savedLang = localStorage.getItem('language') || DEFAULT_LANGUAGE
      await loadLanguage(savedLang)
    }

    init()
  }, [])

  const loadLanguage = async (lang) => {
    try {
      const data = await loadTranslation(lang)
      setTranslations(data)
      setCurrentLanguage(lang)
      localStorage.setItem('language', lang)
    } catch (error) {
      console.error('Language load failed', error)

      const en = await loadTranslation(FALLBACK_LANGUAGE)
      setTranslations(en)
      setCurrentLanguage(FALLBACK_LANGUAGE)
      localStorage.setItem('language', FALLBACK_LANGUAGE)
    }
  }

  const t = (key) => translations[key] || englishTranslations[key] || key

  return (
    <TranslationContext.Provider
      value={{ t, currentLanguage, changeLanguage: loadLanguage }}
    >
      {children}
    </TranslationContext.Provider>
  )
}

export const useTranslation = () => useContext(TranslationContext)
