import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useT } from '@/context/AppContext';
import { GLOSSARY } from '@/content/glossary/glossary';
import { PILLARS } from '@/content/curriculum/pillars';
import { Search, Compass, BookOpen, ArrowRight } from 'lucide-react';
import clsx from 'clsx';

export function ExplorePage() {
  const t = useT();
  const [search, setSearch] = useState('');
  const [selectedPillar, setSelectedPillar] = useState<string>('all');

  const filtered = GLOSSARY.filter(item => {
    const matchesSearch =
      t(item.term).toLowerCase().includes(search.toLowerCase()) ||
      t(item.shortDefinition).toLowerCase().includes(search.toLowerCase());
    const matchesPillar = selectedPillar === 'all' || item.pillarId === selectedPillar;
    return matchesSearch && matchesPillar;
  });

  return (
    <div className="space-y-8 pb-16">
      {/* Banner */}
      <section className="bg-hero text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <span className="badge badge-teal mb-2">{t({ en: 'Concept Explorer', te: 'కాన్సెప్ట్ ఎక్స్‌ప్లోరర్' })}</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-display">
            {t({ en: 'Explore Financial Concepts', te: 'ఆర్థిక భావనలను అన్వేషించండి' })}
          </h1>
          <p className="text-navy-100 text-sm mt-2 max-w-xl">
            {t({
              en: 'Search definitions, understand connections, and jump directly into relevant interactive lessons.',
              te: 'నిర్వచనాలను వెతకండి, సంబంధాలను అర్థం చేసుకోండి మరియు నేరుగా పాఠాలను ప్రారంభించండి.',
            })}
          </p>

          {/* Search Box */}
          <div className="mt-8 max-w-md">
            <div className="relative">
              <Search size={18} className="absolute left-3.5 top-3.5 text-navy-300" />
              <input
                type="text"
                placeholder={t({ en: 'Search any financial term (e.g. SIP, NAV, Inflation)...', te: 'ఏదైనా పదం వెతకండి (ఉదా: SIP, NAV, ద్రవ్యోల్బణం)...' })}
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white text-navy-600 placeholder-navy-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          <button
            onClick={() => setSelectedPillar('all')}
            className={clsx(
              'px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border',
              selectedPillar === 'all'
                ? 'bg-navy-600 text-white border-navy-600 shadow-sm'
                : 'bg-white text-navy-500 border-navy-100 hover:border-teal-300'
            )}
          >
            {t({ en: 'All Pillars', te: 'అన్ని స్తంభాలు' })} ({GLOSSARY.length})
          </button>
          {PILLARS.map(p => (
            <button
              key={p.id}
              onClick={() => setSelectedPillar(p.id)}
              className={clsx(
                'px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border',
                selectedPillar === p.id
                  ? 'bg-navy-600 text-white border-navy-600 shadow-sm'
                  : 'bg-white text-navy-500 border-navy-100 hover:border-teal-300'
              )}
            >
              {t(p.title)}
            </button>
          ))}
        </div>

        {/* Concept Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filtered.map(item => (
            <Link
              key={item.id}
              to={`/explore/glossary/${item.slug}`}
              className="card-hover p-5 bg-white border border-navy-100 rounded-2xl block"
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="font-bold text-lg text-navy-600">{t(item.term)}</span>
                <span className="badge badge-teal text-[10px] uppercase">{item.pillarId}</span>
              </div>
              <p className="text-xs text-navy-400 line-clamp-2 leading-relaxed">
                {t(item.shortDefinition)}
              </p>
              <div className="mt-4 pt-3 border-t border-navy-50 flex items-center justify-between text-xs text-teal-600 font-semibold">
                <span>{t({ en: 'Read explanation', te: 'వివరణ చదవండి' })}</span>
                <ArrowRight size={13} />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ExplorePage;
