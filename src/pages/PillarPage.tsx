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

  return (
    <div className="space-y-8 pb-16">
      {/* Banner */}
      <section className="bg-hero text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link to="/learn" className="inline-flex items-center gap-1.5 text-xs text-navy-200 hover:text-white mb-4">
            <ArrowLeft size={14} />
            {t({ en: 'Back to All Pillars', te: 'అన్ని స్తంభాలకు వెనుకకు' })}
          </Link>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-teal-400/20 border border-teal-300/30 flex items-center justify-center text-teal-300">
              <Icon size={32} />
            </div>
            <div>
              <span className="badge badge-teal mb-1">{t(pillar.tagline)}</span>
              <h1 className="text-3xl sm:text-4xl font-extrabold font-display">{t(pillar.title)}</h1>
            </div>
          </div>
          <p className="text-navy-100 text-sm mt-3 max-w-2xl leading-relaxed">
            {t(pillar.description)}
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Modules & Lessons */}
        <div className="lg:col-span-2 space-y-6">
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
