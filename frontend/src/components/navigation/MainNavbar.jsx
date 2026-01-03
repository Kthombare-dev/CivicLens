import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate, useLocation } from 'react-router-dom'
import { Menu, X, User, LogOut } from 'lucide-react'
import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { useAuth } from '../../context/AuthContext'
import { useTranslation } from '../../context/TranslationContext'
import { cn } from '../../lib/utils'

const NAV_LINKS = [
  { label: 'what_is_civiclens', path: '#what-is-civiclens' },
  { label: 'the_problem', path: '#the-problem' },
  { label: 'how_it_works', path: '#how-it-works' },
  { label: 'benefits', path: '#benefits' },
]

const navHoverClassByLabel = {
  what_is_civiclens: 'hover:bg-pink-100 hover:text-foreground',
  how_it_works: 'hover:bg-yellow-100 hover:text-foreground',
  the_problem: 'hover:bg-red-100 hover:text-foreground',
  benefits: 'hover:bg-purple-100 hover:text-foreground',
}

const MainNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { user, logout, isAuthenticated } = useAuth()
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleReportIssue = () => {
    if (isAuthenticated) {
      navigate('/report')
    } else {
      navigate('/login', { state: { from: '/report' } })
    }
  }

  const handleLogin = () => {
    navigate('/login')
  }

  const handleSignup = () => {
    navigate('/signup')
  }

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className={cn(
        "sticky top-12 z-40 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Logo + CivicLens */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate('/')}
          >
            <img
  src="/images/logo/civiclens-logo.png"
  alt="CivicLens Logo"
  className="h-16 w-auto object-contain"
/>

            <span className="hidden sm:block text-xl font-bold text-foreground">{t('civiclens')}</span>
          </motion.div>

          {/* Center: Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link, index) => (
              <motion.a
                key={link.path}
                href={link.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className={cn(
                  "px-4 py-2 text-sm font-medium text-foreground rounded-md",
                  "transition-colors duration-200",
                  navHoverClassByLabel[link.label]
                )}
              >
                {t(link.label)}
              </motion.a>
            ))}
          </div>

          {/* Right: Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Login/Profile */}
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <div className="px-2 py-1.5">
                    <p className="text-sm font-medium">{user?.name || t('user')}</p>
                    <p className="text-xs text-muted-foreground">{user?.email || ''}</p>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate('/profile')}>
                    {t('profile')}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout} className="text-destructive">
                    <LogOut className="mr-2 h-4 w-4" />
                    {t('logout')}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleLogin}
                  className="hidden sm:flex relative overflow-hidden group bg-gradient-to-r from-orange-500 to-red-500 text-white border-none hover:from-orange-600 hover:to-red-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <span className="relative z-10 transition-all duration-300 group-hover:translate-x-1">
                    {t('login')}
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleSignup}
                  className="hidden sm:flex relative overflow-hidden group bg-gradient-to-r from-green-500 to-blue-500 text-white border-none hover:from-green-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <span className="relative z-10 transition-all duration-300 group-hover:translate-x-1">
                    {t('signup')}
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Button>
              </>
            )}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border py-4"
          >
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-2 text-sm font-medium text-foreground rounded-md",
                    "transition-colors duration-200",
                    navHoverClassByLabel[link.label]
                  )}
                >
                  {t(link.label)}
                </a>
              ))}
              <div className="flex flex-col gap-2 px-4 pt-2 border-t border-border mt-2">
                {isAuthenticated ? (
                  <>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        navigate('/profile')
                        setMobileMenuOpen(false)
                      }}
                      className="w-full justify-start"
                    >
                      <User className="mr-2 h-4 w-4" />
                      {t('profile')}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        handleLogout()
                        setMobileMenuOpen(false)
                      }}
                      className="w-full justify-start text-destructive"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      {t('logout')}
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        handleLogin()
                        setMobileMenuOpen(false)
                      }}
                      className="w-full relative overflow-hidden group bg-gradient-to-r from-orange-500 to-red-500 text-white border-none hover:from-orange-600 hover:to-red-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      <span className="relative z-10 transition-all duration-300 group-hover:translate-x-1">
                        {t('login')}
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        handleSignup()
                        setMobileMenuOpen(false)
                      }}
                      className="w-full relative overflow-hidden group bg-gradient-to-r from-green-500 to-blue-500 text-white border-none hover:from-green-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      <span className="relative z-10 transition-all duration-300 group-hover:translate-x-1">
                        {t('signup')}
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default MainNavbar