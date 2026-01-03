import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from './ui/button'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useTranslation } from '../context/TranslationContext'

const slideBackgrounds = [
  '/slider/slide1.png',
  '/slider/slide2.png',
  '/slider/slide3.png',
  '/slider/slide4.png',
  '/slider/slide5.png',
]

const slides = [
  {
    id: 1,
    headline_key: 'slide1_headline',
    subtext_key: 'slide1_subtext',
  },
  {
    id: 2,
    headline_key: 'slide2_headline',
    subtext_key: 'slide2_subtext',
  },
  {
    id: 3,
    headline_key: 'slide3_headline',
    subtext_key: 'slide3_subtext',
  },
  {
    id: 4,
    headline_key: 'slide4_headline',
    subtext_key: 'slide4_subtext',
  },
  {
    id: 5,
    headline_key: 'slide5_headline',
    subtext_key: 'slide5_subtext',
  },
]

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const navigate = useNavigate()
  const { isAuthenticated } = useAuth()
  const { t } = useTranslation()

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 2000) // Auto-slide every 2 seconds

    return () => clearInterval(interval)
  }, [isPaused])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const handleReportIssue = () => {
    if (isAuthenticated) {
      navigate('/report')
    } else {
      navigate('/login', { state: { from: '/report' } })
    }
  }

  return (
    <section
      className="relative min-h-[588px] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      <div className="relative h-full min-h-[588px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="absolute inset-0">
              <img
                src={slideBackgrounds[currentSlide]}
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-center"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/75" />
            </div>
            <div className="container mx-auto px-4 py-20">
              <div className="relative z-10 mx-auto max-w-4xl text-center">
                <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl"
                >
                  {t(slides[currentSlide].headline_key)}
                </motion.h1>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="mx-auto mb-8 max-w-2xl text-lg text-white/90 md:text-xl"
                >
                  {t(slides[currentSlide].subtext_key)}
                </motion.p>
                {currentSlide === slides.length - 1 && (
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    <Button
                      size="lg"
                      onClick={handleReportIssue}
                      className="text-lg px-8 py-6"
                    >
                      {t('report_issue')}
                    </Button>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow-lg backdrop-blur-sm transition-all hover:bg-background hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow-lg backdrop-blur-sm transition-all hover:bg-background hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? 'w-8 bg-primary'
                : 'w-2 bg-primary/30 hover:bg-primary/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroSlider

