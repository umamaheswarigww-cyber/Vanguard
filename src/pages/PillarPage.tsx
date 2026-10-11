import { useParams, Link, Navigate } from 'react-router-dom';
import { useT, useApp } from '@/context/AppContext';
import { PILLARS, getModulesByPillar } from '@/content/curriculum/pillars';
import { LESSONS } from '@/content/lessons';
import {
  Wallet, PiggyBank, TrendingUp, Shield,
  ArrowLeft, CheckCircle2, Clock, ChevronRight
} from 'lucide-react';

export function PillarPage() {
  const { pillarSlug } = useParams<{ pillarSlug: string }>();
  const t = useT();
  const { isLessonCompleted } = useApp();

  const pillar = PILLARS.find(p => p.slug === pillarSlug);
  if (!pillar) {
    return <Navigate to="/learn" replace />;
  }

  const modules = getModulesByPillar(pillar.id);
  const pillarLessons = LESSONS.filter(l => l.pillarId === pillar.id);

  const Icon = pillar.id === 'budget' ? Wallet : pillar.id === 'save' ? PiggyBank : pillar.id === 'invest' ? TrendingUp : Shield;

  const pillarImages: Record<string, string> = {
    budget: '/images/hero_students.jpg',
    save: '/images/sip_journey.jpg',
    invest: '/images/stock_market.jpg',
    safe: '/images/cyber_safety.jpg',
  };
  const bannerImg = pillarImages[pillar.id] || '/images/hero_students.jpg';

  return (
    <div className="space-y-8 pb-16">
      {/* Banner with realistic background image */}
      <section className="relative overflow-hidden bg-navy-900 text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-navy-700">
        <div className="absolute inset-0 opacity-25">
          <img
            src={bannerImg}
            alt={pillar.slug}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/90 to-navy-950/70" />

        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/learn" className="inline-flex items-center gap-1.5 text-xs text-blue-200 hover:text-white mb-4 transition-colors">
            <ArrowLeft size={14} />
            {t({ en: 'Back to All Pillars', te: 'అన్ని స్తంభాలకు వెనుకకు' })}
          </Link>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-teal-400/20 border border-teal-300/40 backdrop-blur-md flex items-center justify-center text-teal-300 shadow-lg">
              <Icon size={32} />
            </div>
            <div>
              <span className="badge badge-teal mb-1">{t(pillar.tagline)}</span>
              <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-white">{t(pillar.title)}</h1>
            </div>
          </div>
          <p className="text-blue-100 text-sm sm:text-base mt-3 max-w-2xl leading-relaxed">
            {t(pillar.description)}
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Modules & Lessons */}
        <div className="lg:col-span-2 space-y-6">
          {pillar.id === 'safe' && (
            <div className="card p-6 bg-gradient-to-r from-navy-900 to-rose-950 text-white border border-rose-500/40 rounded-3xl shadow-xl space-y-3 card-interactive mb-6">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold border border-rose-500/30 uppercase">
                  <Shield size={13} className="text-rose-400" />
                  FEATURED SIMULATOR
                </span>
                <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2.5 py-0.5 rounded-full font-bold border border-emerald-500/30">
                  Interactive Lab
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                Spot the Mutual Fund Scam
              </h3>
              <p className="text-xs sm:text-sm text-navy-100 leading-relaxed font-normal">
                {t({
                  en: 'Step into real-world Telegram and WhatsApp scam simulations. Learn to identify high-pressure fraud, fake OTP demands, verify SEBI credentials, and earn your official Scam Spotter 🛡️ badge.',
                  te: 'వాస్తవిక టెలిగ్రామ్ మరియు వాట్సాప్ మోసాలను గుర్తించండి మరియు స్కామ్ స్పాటర్ బ్యాడ్జ్‌ను గెలుచుకోండి.',
                })}
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  to="/spot-the-scam"
                  className="btn-coral text-xs py-2.5 px-5 shadow-md shadow-coral-500/25 inline-flex items-center gap-1.5"
                >
                  <span>{t({ en: 'Launch Scam Simulator & Quiz →', te: 'సిమ్యులేటర్ & క్విజ్ ప్రారంభించండి →' })}</span>
                </Link>
                <Link
                  to="/spot-the-scam#quiz"
                  className="btn-secondary text-xs py-2.5 px-4 bg-white/10 text-white border-white/20 hover:bg-white/20"
                >
                  <span>{t({ en: 'Take Fraud Quiz', te: 'క్విజ్ రాయండి' })}</span>
                </Link>
              </div>
            </div>
          )}

          <h2 className="text-xl font-bold text-navy-600 font-display">
            {t({ en: 'Modules & Interactive Lessons', te: 'మాడ్యూల్స్ మరియు పాఠాలు' })}
          </h2>

          <div className="space-y-4">
            {modules.map(module => {
              const modLessons = pillarLessons.filter(l => module.lessonIds.includes(l.id));

              return (
                <div key={module.id} className="card p-6 border border-navy-100 rounded-2xl bg-white">
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <h3 className="text-lg font-bold text-navy-600 font-display">
                      {t(module.title)}
                    </h3>
                    <span className="badge badge-navy text-[10px] uppercase">{module.level}</span>
                  </div>
                  <p className="text-xs text-navy-400 mb-4">{t(module.description)}</p>

                  <div className="space-y-2">
                    {modLessons.map(les => {
                      const completed = isLessonCompleted(les.id);
                      return (
                        <Link
                          key={les.id}
                          to={`/learn/${pillar.slug}/${les.slug}`}
                          className="flex items-center justify-between p-3 rounded-xl bg-cream-50/50 hover:bg-teal-50 text-sm font-semibold text-navy-600 transition-colors group"
                        >
                          <div className="flex items-center gap-2.5">
                            {completed ? (
                              <CheckCircle2 size={18} className="text-teal-500" />
                            ) : (
                              <Clock size={18} className="text-navy-300" />
                            )}
                            <span className="group-hover:text-teal-600">{t(les.title)}</span>
                          </div>
                          <span className="text-xs text-teal-600 font-bold flex items-center gap-1">
                            {t({ en: 'Start', te: 'ప్రారంభించు' })}
                            <ChevronRight size={14} />
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Sidebar: Key Concepts */}
        <div className="space-y-6">
          <div className="card p-6 border border-navy-100 rounded-2xl bg-white">
            <h3 className="font-bold text-navy-600 text-sm uppercase tracking-wider mb-4">
              {t({ en: 'Quick Reference Labs', te: 'త్వరిత ల్యాబ్‌లు' })}
            </h3>
            <div className="space-y-3">
              <Link to="/money-lab" className="btn-secondary text-xs w-full justify-center">
                {t({ en: 'Open All Simulators', te: 'అన్ని సిమ్యులేటర్‌లు' })}
              </Link>
              <Link to="/explore/glossary" className="btn-ghost text-xs w-full justify-center">
                {t({ en: 'Browse Glossary Terms', te: 'పదకోశం చూడండి' })}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PillarPage;
