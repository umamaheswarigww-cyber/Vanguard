import { useParams, Link, Navigate } from 'react-router-dom';
import { useT } from '@/context/AppContext';
import { getGlossaryBySlug, GLOSSARY } from '@/content/glossary/glossary';
import { ArrowLeft, BookOpen, ExternalLink, ShieldCheck } from 'lucide-react';

export function GlossaryTermPage() {
  const { slug } = useParams<{ slug: string }>();
  const t = useT();

  const entry = slug ? getGlossaryBySlug(slug) : undefined;
  if (!entry) {
    return <Navigate to="/explore/glossary" replace />;
  }

  const related = entry.relatedTermIds
    .map(id => GLOSSARY.find(g => g.id === id))
    .filter(Boolean);

  return (
    <div className="pb-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Link
        to="/explore/glossary"
        className="inline-flex items-center gap-1.5 text-xs text-navy-400 hover:text-teal-600 transition-colors"
      >
        <ArrowLeft size={14} />
        {t({ en: 'Back to Glossary', te: 'పదకోశానికి వెనుకకు' })}
      </Link>

      <div className="card p-6 md:p-8 bg-white border border-navy-100 shadow-card">
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="badge badge-teal uppercase text-[10px]">{entry.pillarId}</span>
          <span className="badge badge-navy text-[10px]">{entry.contentStatus}</span>
        </div>

        <h1 className="text-3xl font-extrabold text-navy-600 font-display">
          {t(entry.term)}
        </h1>

        <p className="text-base text-teal-700 font-medium mt-3 bg-teal-50 p-4 rounded-xl border border-teal-100">
          {t(entry.shortDefinition)}
        </p>

        <div className="prose prose-navy max-w-none text-navy-600 leading-relaxed text-sm mt-6 pt-6 border-t border-navy-50">
          <h3 className="text-sm font-bold uppercase tracking-wider text-navy-500 mb-2">
            {t({ en: 'Detailed Educational Explanation', te: 'సవివరమైన వివరణ' })}
          </h3>
          <p className="whitespace-pre-line">{t(entry.explanation)}</p>
        </div>

        {/* Source References */}
        {entry.sourceRefs && entry.sourceRefs.length > 0 && (
          <div className="mt-8 pt-6 border-t border-navy-50 text-xs text-navy-400">
            <span className="font-bold text-navy-500 block mb-2">
              {t({ en: 'Authoritative Sources & Regulatory Disclosures:', te: 'అధికారిక మూలాలు:' })}
            </span>
            <ul className="space-y-1">
              {entry.sourceRefs.map(src => (
                <li key={src.id} className="flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-teal-500" />
                  <a href={src.url} target="_blank" rel="noopener noreferrer" className="hover:text-teal-600 underline">
                    {src.title} ({src.publisher})
                  </a>
                  <span className="text-[10px] text-navy-300">| Reviewed {src.lastReviewedAt}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Related Terms */}
      {related.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-navy-500">
            {t({ en: 'Related Financial Concepts', te: 'సంబంధిత ఆర్థిక భావనలు' })}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {related.map(r => r && (
              <Link
                key={r.id}
                to={`/explore/glossary/${r.slug}`}
                className="card-hover p-4 bg-white border border-navy-100 rounded-xl block"
              >
                <div className="font-bold text-sm text-navy-600">{t(r.term)}</div>
                <div className="text-xs text-navy-400 mt-1 line-clamp-1">{t(r.shortDefinition)}</div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default GlossaryTermPage;
