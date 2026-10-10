import { Link } from 'react-router-dom';
import { useT } from '@/context/AppContext';
import { Compass, ArrowRight } from 'lucide-react';

export function NotFoundPage() {
  const t = useT();

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
      <div className="card p-8 md:p-12 text-center max-w-md w-full bg-white border border-navy-100 shadow-card">
        <div className="w-16 h-16 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mx-auto mb-4">
          <Compass size={32} />
        </div>
        <h1 className="text-3xl font-extrabold text-navy-600 font-display">404</h1>
        <h2 className="text-lg font-bold text-navy-600 mt-2">
          {t({ en: 'Lost in the Financial Markets?', te: 'పేజీ కనుగొనబడలేదు' })}
        </h2>
        <p className="text-navy-400 text-xs mt-2 leading-relaxed">
          {t({
            en: 'The page or simulator you are looking for does not exist or has been relocated.',
            te: 'మీరు వెతుకుతున్న పేజీ అందుబాటులో లేదు.',
          })}
        </p>

        <div className="mt-6">
          <Link to="/" className="btn-primary text-xs py-2.5 px-5">
            {t({ en: 'Return to Homepage', te: 'హోమ్‌పేజీకి తిరిగి వెళ్లండి' })}
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
