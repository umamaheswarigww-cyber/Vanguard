import { useParams, Link, Navigate } from 'react-router-dom';
import { useT } from '@/context/AppContext';
import { getLessonBySlug } from '@/content/lessons';
import { PILLARS } from '@/content/curriculum/pillars';
import { LessonEngine } from '@/components/learning/LessonEngine';
import { ArrowLeft, Clock } from 'lucide-react';

export function LessonPage() {
  const { pillarSlug, lessonSlug } = useParams<{ pillarSlug: string; lessonSlug: string }>();
  const t = useT();

  const lesson = lessonSlug ? getLessonBySlug(lessonSlug) : undefined;
  const pillar = PILLARS.find(p => p.slug === pillarSlug);

  if (!lesson) {
    return <Navigate to="/learn" replace />;
  }

  return (
    <div className="pb-16 bg-cream-100 min-h-[calc(100vh-64px)]">
      {/* Top Breadcrumb Nav */}
      <div className="bg-white border-b border-navy-50 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between text-xs text-navy-400">
          <Link
            to={pillar ? `/learn/${pillar.slug}` : '/learn'}
            className="flex items-center gap-1.5 text-navy-500 hover:text-teal-600 font-medium transition-colors"
          >
            <ArrowLeft size={14} />
            <span>{t({ en: 'Back to Modules', te: 'మాడ్యూల్స్‌కు వెనుకకు' })}</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-navy-500">
              <Clock size={13} />
              <span>{lesson.estimatedMinutes} {t({ en: 'mins', te: 'నిమిషాలు' })}</span>
            </span>
            <span className="badge badge-navy text-[10px] uppercase">
              {lesson.level}
            </span>
          </div>
        </div>
      </div>

      {/* Lesson Engine Container */}
      <div className="py-6">
        <LessonEngine
          key={lesson.id}
          lesson={lesson}
          onComplete={() => {
            // Optional callback
          }}
        />
      </div>
    </div>
  );
}

export default LessonPage;
