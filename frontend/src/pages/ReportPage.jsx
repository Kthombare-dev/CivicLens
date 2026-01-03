import { useAuth } from '../context/AuthContext'
import { Button } from '../components/ui/button'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from '../context/TranslationContext'

const ReportPage = () => {
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()
  const { t } = useTranslation()

  if (!isAuthenticated) {
    navigate('/login', { state: { from: '/report' } })
    return null
  }

  return (
    <div className="container mx-auto min-h-screen px-4 py-12">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-8 text-4xl font-bold">{t('report_issue')}</h1>
        <div className="rounded-lg border bg-background p-8 shadow-sm">
          <p className="text-muted-foreground">
            {t('report_page_placeholder')}
          </p>
          <Button
            onClick={() => navigate('/')}
            variant="outline"
            className="mt-6"
          >
            {t('back_to_home')}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ReportPage


