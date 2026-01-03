import HeroSlider from '../components/HeroSlider'
import { useTranslation } from '../context/TranslationContext'

const LandingPage = () => {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen">
      {/* Hero Slider Section */}
      <HeroSlider />

      {/* What is CivicLens Section */}
      <section id="what-is-civiclens" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-3xl font-bold text-center">{t('what_is_civiclens')}</h2>
          <p className="mx-auto max-w-3xl text-center text-muted-foreground">
            {t('what_is_civiclens_description')}
          </p>
        </div>
      </section>

      {/* The Problem Section */}
      <section id="the-problem" className="bg-slate-900 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-3xl font-bold text-center text-white">{t('the_problem')}</h2>
          <div className="mx-auto max-w-4xl grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-slate-800 p-6 border border-slate-700">
              <div className="mb-3 text-2xl text-red-400">✕</div>
              <h3 className="mb-2 text-xl font-semibold text-white">{t('problem_fragmented_reporting_title')}</h3>
              <p className="text-slate-300">
                {t('problem_fragmented_reporting_desc')}
              </p>
            </div>
            <div className="rounded-lg bg-slate-800 p-6 border border-slate-700">
              <div className="mb-3 text-2xl text-red-400">✕</div>
              <h3 className="mb-2 text-xl font-semibold text-white">{t('problem_slow_response_title')}</h3>
              <p className="text-slate-300">
                {t('problem_slow_response_desc')}
              </p>
            </div>
            <div className="rounded-lg bg-slate-800 p-6 border border-slate-700">
              <div className="mb-3 text-2xl text-red-400">✕</div>
              <h3 className="mb-2 text-xl font-semibold text-white">{t('problem_lack_transparency_title')}</h3>
              <p className="text-slate-300">
                {t('problem_lack_transparency_desc')}
              </p>
            </div>
            <div className="rounded-lg bg-slate-800 p-6 border border-slate-700">
              <div className="mb-3 text-2xl text-red-400">✕</div>
              <h3 className="mb-2 text-xl font-semibold text-white">{t('problem_no_accountability_title')}</h3>
              <p className="text-slate-300">
                {t('problem_no_accountability_desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-3xl font-bold text-center">{t('how_it_works')}</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
                1
              </div>
              <h3 className="mb-2 text-xl font-semibold">{t('how_step1_title')}</h3>
              <p className="text-muted-foreground">
                {t('how_step1_desc')}
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
                2
              </div>
              <h3 className="mb-2 text-xl font-semibold">{t('how_step2_title')}</h3>
              <p className="text-muted-foreground">
                {t('how_step2_desc')}
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
                3
              </div>
              <h3 className="mb-2 text-xl font-semibold">{t('how_step3_title')}</h3>
              <p className="text-muted-foreground">
                {t('how_step3_desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="bg-gradient-to-b from-amber-50 to-orange-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-3xl font-bold text-center">{t('benefits')}</h2>
          
          {/* For Citizens */}
          <div className="mb-12">
            <h3 className="mb-8 text-2xl font-semibold text-center">{t('benefits_for_citizens')}</h3>
            <div className="mx-auto max-w-4xl grid gap-6 md:grid-cols-3">
              <div className="rounded-lg bg-white/80 backdrop-blur-sm border border-amber-200 p-6 shadow-sm">
                <h4 className="mb-3 text-lg font-semibold text-slate-800">{t('benefit_transparent_communication_title')}</h4>
                <p className="text-slate-600">
                  {t('benefit_transparent_communication_desc')}
                </p>
              </div>
              <div className="rounded-lg bg-white/80 backdrop-blur-sm border border-amber-200 p-6 shadow-sm">
                <h4 className="mb-3 text-lg font-semibold text-slate-800">{t('benefit_faster_resolution_title')}</h4>
                <p className="text-slate-600">
                  {t('benefit_faster_resolution_desc')}
                </p>
              </div>
              <div className="rounded-lg bg-white/80 backdrop-blur-sm border border-amber-200 p-6 shadow-sm">
                <h4 className="mb-3 text-lg font-semibold text-slate-800">{t('benefit_community_impact_title')}</h4>
                <p className="text-slate-600">
                  {t('benefit_community_impact_desc')}
                </p>
              </div>
            </div>
          </div>

          {/* For Authorities */}
          <div>
            <h3 className="mb-8 text-2xl font-semibold text-center">{t('benefits_for_authorities')}</h3>
            <div className="mx-auto max-w-4xl grid gap-6 md:grid-cols-3">
              <div className="rounded-lg bg-white/80 backdrop-blur-sm border border-amber-200 p-6 shadow-sm">
                <h4 className="mb-3 text-lg font-semibold text-slate-800">{t('benefit_data_driven_insights_title')}</h4>
                <p className="text-slate-600">
                  {t('benefit_data_driven_insights_desc')}
                </p>
              </div>
              <div className="rounded-lg bg-white/80 backdrop-blur-sm border border-amber-200 p-6 shadow-sm">
                <h4 className="mb-3 text-lg font-semibold text-slate-800">{t('benefit_improved_efficiency_title')}</h4>
                <p className="text-slate-600">
                  {t('benefit_improved_efficiency_desc')}
                </p>
              </div>
              <div className="rounded-lg bg-white/80 backdrop-blur-sm border border-amber-200 p-6 shadow-sm">
                <h4 className="mb-3 text-lg font-semibold text-slate-800">{t('benefit_citizen_engagement_title')}</h4>
                <p className="text-slate-600">
                  {t('benefit_citizen_engagement_desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage