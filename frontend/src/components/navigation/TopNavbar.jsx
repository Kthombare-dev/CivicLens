import { useState } from 'react'
import { motion } from 'framer-motion'
import { Languages } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { INDIAN_LANGUAGES, DEFAULT_LANGUAGE } from '../../utils/languages'
import { cn } from '../../lib/utils'
import { useTranslation } from '../../context/TranslationContext'
import { useNavigate } from 'react-router-dom'

const TopNavbar = () => {
  const { t, currentLanguage, changeLanguage } = useTranslation()
  const navigate = useNavigate()

  const selectedLangData = INDIAN_LANGUAGES.find(lang => lang.code === currentLanguage) || INDIAN_LANGUAGES[0]

  const handleLogin = () => {
    navigate('/login')
  }

  const handleSignup = () => {
    navigate('/signup')
  }

  // Different light shade colors for dropdown items
  const lightShades = [
    'bg-blue-50 hover:bg-blue-100',
    'bg-indigo-50 hover:bg-indigo-100',
    'bg-purple-50 hover:bg-purple-100',
    'bg-pink-50 hover:bg-pink-100',
    'bg-rose-50 hover:bg-rose-100',
    'bg-orange-50 hover:bg-orange-100',
    'bg-amber-50 hover:bg-amber-100',
    'bg-yellow-50 hover:bg-yellow-100',
    'bg-lime-50 hover:bg-lime-100',
    'bg-green-50 hover:bg-green-100',
    'bg-emerald-50 hover:bg-emerald-100',
    'bg-teal-50 hover:bg-teal-100',
    'bg-cyan-50 hover:bg-cyan-100',
    'bg-sky-50 hover:bg-sky-100',
    'bg-violet-50 hover:bg-violet-100',
    'bg-fuchsia-50 hover:bg-fuchsia-100',
    'bg-stone-50 hover:bg-stone-100',
    'bg-neutral-50 hover:bg-neutral-100',
    'bg-slate-50 hover:bg-slate-100',
    'bg-gray-50 hover:bg-gray-100',
    'bg-zinc-50 hover:bg-zinc-100',
    'bg-red-50 hover:bg-red-100',
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className="sticky top-0 z-50 w-full border-b border-blue-800 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 backdrop-blur supports-[backdrop-filter]:bg-blue-50/90 shadow-lg transition-all duration-300 hover:shadow-xl"
    >
      <div className="container mx-auto px-4">
        <div className="flex h-12 items-center justify-between">
          {/* Left side: CivicLens + Punchline */}
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold text-blue-900" style={{ fontFamily: 'Georgia, serif' }}>
              {t('civiclens')}
            </span>
            <span className="text-sm font-medium text-blue-700 italic" style={{ fontFamily: 'cursive' }}>
              {t('punchline')}
            </span>
          </div>

          {/* Right side: Language Selector only */}
          <div className="flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium text-blue-700 hover:bg-blue-100/50 transition-all duration-300 hover:scale-105"
                >
                  <Languages className="h-4 w-4" />
                  <span className="hidden sm:inline">{selectedLangData.name}</span>
                </motion.button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="max-h-[400px] w-64 overflow-y-auto">
                {INDIAN_LANGUAGES.map((language, index) => (
                  <DropdownMenuItem
                    key={language.code}
                    onClick={() => changeLanguage(language.code)}
                    className={cn(
                      lightShades[index % lightShades.length],
                      "cursor-pointer"
                    )}
                  >
                    <div className="flex w-full items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-blue-900">{language.name}</span>
                        <span className="text-xs text-blue-700">{language.nativeName}</span>
                      </div>
                      {currentLanguage === language.code && (
                        <span className="text-primary">✓</span>
                      )}
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default TopNavbar