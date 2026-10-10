import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useT } from '@/context/AppContext';
import { GLOSSARY } from '@/content/glossary/glossary';
import { PILLARS } from '@/content/curriculum/pillars';
import { Search, BookOpen, ChevronRight } from 'lucide-react';

export function GlossaryPage() {
  const t = useT();
  const [search, setSearch] = useState('');

  const filtered = GLOSSARY.filter(item =>
    t(item.term).toLowerCase().includes(search.toLowerCase()) ||
    t(item.shortDefinition).toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8 pb-16">
      <section className="bg-hero text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <span className="badge badge-teal mb-2">{t({ en: 'Reference Dictionary', te: 'పద నిఘంటువు' })}</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-display">
            {t({ en: 'Financial Terms Glossary', te: 'ఆర్థిక పదకోశం' })}
          </h1>
          <p className="text-navy-100 text-sm mt-2 max-w-xl">
            {t({
              en: 'Clear, jargon-free definitions for Indian students in English and Telugu.',
              te: 'భారతీయ విద్యార్థుల కోసం సరళమైన తెలుగు మరియు ఇంగ్లీష్ నిర్వచనాలు.',
            })}
          </p>

          <div className="mt-6 max-w-md">
            <div className="relative">
              <Search size={18} className="absolute left-3.5 top-3.5 text-navy-300" />
              <input
                type="text"
                placeholder={t({ en: 'Search terms...', te: 'పదాలను వెతకండి...' })}
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white text-navy-600 placeholder-navy-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map(item => (
            <Link
              key={item.id}
              to={`/explore/glossary/${item.slug}`}
              className="card-hover p-5 bg-white border border-navy-100 rounded-2xl flex items-start justify-between gap-4"
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-base text-navy-600">{t(item.term)}</h3>
                  <span className="badge badge-navy text-[10px] uppercase">{item.pillarId}</span>
                </div>
                <p className="text-xs text-navy-400 leading-relaxed mt-1">{t(item.shortDefinition)}</p>
              </div>
              <ChevronRight size={18} className="text-navy-300 shrink-0 mt-1" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default GlossaryPage;
