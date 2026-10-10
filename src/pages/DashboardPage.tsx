import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  Clock3,
  Flame,
  ShieldCheck,
  Sparkles,
  Target,
} from 'lucide-react';
import { useApp, useT } from '@/context/AppContext';
import { LESSONS } from '@/content/lessons';
import { PILLARS } from '@/content/curriculum/pillars';

export function DashboardPage() {
  const t = useT();
  const { progress, isLessonCompleted } = useApp();

  const completedLessons = LESSONS.filter(lesson => isLessonCompleted(lesson.id));
  const activeLessons = LESSONS
    .filter(lesson => progress.lessonsProgress[lesson.id] && !isLessonCompleted(lesson.id))
    .sort((a, b) => {
      const aActivity = progress.lessonsProgress[a.id]?.lastAttemptAt ?? '';
      const bActivity = progress.lessonsProgress[b.id]?.lastAttemptAt ?? '';
      return bActivity.localeCompare(aActivity);
    });
  const nextLesson = LESSONS.find(lesson => !isLessonCompleted(lesson.id));
  const featuredLesson = activeLessons[0] ?? nextLesson;
  const featuredPillar = featuredLesson
    ? PILLARS.find(pillar => pillar.id === featuredLesson.pillarId)
    : undefined;
  const completedObjectives = Object.values(progress.lessonsProgress)
    .reduce((total, lessonProgress) => total + lessonProgress.objectivesEvidenced.length, 0);
  const totalObjectives = LESSONS.reduce((total, lesson) => total + lesson.learningObjectives.length, 0);
  const completionRate = LESSONS.length
    ? Math.round((completedLessons.length / LESSONS.length) * 100)
    : 0;
  const estimatedMinutes = completedLessons.reduce((total, lesson) => total + lesson.estimatedMinutes, 0);
  const lessonPath = featuredLesson && featuredPillar
    ? `/learn/${featuredPillar.slug}/${featuredLesson.slug}`
    : '/learn';

  return (
    <div className="pb-16">
      <section className="bg-hero text-white px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="badge badge-teal mb-3 inline-flex items-center gap-1.5">
              <Sparkles size={13} />
              {t({ en: 'Learner dashboard', te: 'విద్యార్థి డ్యాష్‌బోర్డ్' })}
            </span>
            <h1 className="font-display text-3xl font-extrabold sm:text-4xl">
              {t({ en: 'Your learning, at a glance', te: 'మీ అభ్యాసం ఒక్క చూపులో' })}
            </h1>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-navy-100">
              {t({
                en: 'Pick up where you left off, see what you have mastered, and choose what to explore next.',
                te: 'మీరు ఆపిన చోటు నుంచి కొనసాగించండి, సాధించిన అంశాలను చూడండి, తర్వాత ఏమి నేర్చుకోవాలో ఎంచుకోండి.',
              })}
            </p>
          </div>

          <div className="w-full rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm lg:max-w-md">
            <div className="mb-2 flex items-center justify-between gap-4 text-sm">
              <span className="font-semibold text-white">
                {t({ en: 'Overall curriculum', te: 'మొత్తం పాఠ్యాంశాలు' })}
              </span>
              <span className="font-bold text-teal-300">{completionRate}%</span>
            </div>
            <div
              className="h-2.5 overflow-hidden rounded-full bg-white/20"
              role="progressbar"
              aria-label={t({ en: 'Overall curriculum completion', te: 'మొత్తం పాఠ్యాంశాల పూర్తి స్థాయి' })}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={completionRate}
            >
              <div className="h-full rounded-full bg-teal-400 transition-all" style={{ width: `${completionRate}%` }} />
            </div>
            <p className="mt-2 text-xs text-navy-100">
              {completedLessons.length} {t({ en: 'of', te: 'లో' })} {LESSONS.length} {t({ en: 'lessons completed', te: 'పాఠాలు పూర్తయ్యాయి' })}
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto mt-8 max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
        <section aria-label={t({ en: 'Learning statistics', te: 'అభ్యాస గణాంకాలు' })} className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl border border-navy-100 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wide text-navy-400">{t({ en: 'Lessons completed', te: 'పూర్తయిన పాఠాలు' })}</span>
              <CheckCircle2 size={19} className="text-teal-500" />
            </div>
            <p className="mt-3 text-3xl font-extrabold text-navy-700">{completedLessons.length}<span className="ml-1 text-base font-semibold text-navy-300">/ {LESSONS.length}</span></p>
          </div>
          <div className="rounded-2xl border border-navy-100 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wide text-navy-400">{t({ en: 'In progress', te: 'కొనసాగుతున్నవి' })}</span>
              <BookOpen size={19} className="text-coral-500" />
            </div>
            <p className="mt-3 text-3xl font-extrabold text-navy-700">{activeLessons.length}</p>
          </div>
          <div className="rounded-2xl border border-navy-100 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wide text-navy-400">{t({ en: 'Objectives demonstrated', te: 'నిరూపించిన లక్ష్యాలు' })}</span>
              <Target size={19} className="text-teal-500" />
            </div>
            <p className="mt-3 text-3xl font-extrabold text-navy-700">{completedObjectives}<span className="ml-1 text-base font-semibold text-navy-300">/ {totalObjectives}</span></p>
          </div>
          <div className="rounded-2xl border border-navy-100 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wide text-navy-400">{t({ en: 'Learning streak', te: 'అభ్యాస పరంపర' })}</span>
              <Flame size={19} className="text-coral-500" />
            </div>
            <p className="mt-3 text-3xl font-extrabold text-navy-700">{progress.streakDays}<span className="ml-1 text-base font-semibold text-navy-300">{t({ en: 'days', te: 'రోజులు' })}</span></p>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="flex flex-col justify-between gap-6 rounded-3xl border border-teal-200 bg-gradient-to-br from-cream-50 to-white p-6 sm:p-8">
            <div>
              <span className="badge badge-teal mb-3">
                {activeLessons.length
                  ? t({ en: 'Continue your journey', te: 'మీ ప్రయాణాన్ని కొనసాగించండి' })
                  : t({ en: completedLessons.length === LESSONS.length ? 'Journey complete' : 'Your next step', te: completedLessons.length === LESSONS.length ? 'ప్రయాణం పూర్తయింది' : 'మీ తదుపరి అడుగు' })}
              </span>
              <h2 className="font-display text-2xl font-extrabold text-navy-700">
                {featuredLesson
                  ? t(featuredLesson.title)
                  : t({ en: 'Explore the learning library', te: 'అభ్యాస గ్రంథాలయాన్ని అన్వేషించండి' })}
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-navy-400">
                {featuredLesson
                  ? `${t(featuredPillar?.title)} · ${featuredLesson.estimatedMinutes} ${t({ en: 'minutes', te: 'నిమిషాలు' })}`
                  : t({ en: 'Practice a skill or revisit any topic from the curriculum.', te: 'ఒక నైపుణ్యాన్ని అభ్యసించండి లేదా పాఠ్యాంశంలోని అంశాన్ని మళ్లీ చూడండి.' })}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to={featuredLesson ? lessonPath : '/learn'} className="btn-primary">
                {featuredLesson
                  ? t({ en: activeLessons.length ? 'Resume lesson' : completedLessons.length === LESSONS.length ? 'Browse lessons' : 'Start next lesson', te: activeLessons.length ? 'పాఠాన్ని కొనసాగించండి' : completedLessons.length === LESSONS.length ? 'పాఠాలను చూడండి' : 'తదుపరి పాఠం ప్రారంభించండి' })
                  : t({ en: 'Explore lessons', te: 'పాఠాలను అన్వేషించండి' })}
                <ArrowRight size={16} />
              </Link>
              <Link to="/progress" className="btn-secondary">
                {t({ en: 'Detailed progress', te: 'వివరణాత్మక పురోగతి' })}
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-navy-100 bg-white p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-coral-50 text-coral-500">
                <Clock3 size={20} />
              </div>
              <div>
                <h2 className="font-display text-lg font-bold text-navy-700">{t({ en: 'Time invested', te: 'వెచ్చించిన సమయం' })}</h2>
                <p className="text-xs text-navy-400">{t({ en: 'Estimated time for completed lessons', te: 'పూర్తయిన పాఠాలకు అంచనా సమయం' })}</p>
              </div>
            </div>
            <p className="mt-6 text-4xl font-extrabold text-navy-700">{estimatedMinutes}<span className="ml-2 text-base font-semibold text-navy-400">{t({ en: 'min', te: 'నిమి' })}</span></p>
            <div className="mt-4 flex items-start gap-2 rounded-xl bg-teal-50 p-3 text-xs leading-relaxed text-navy-500">
              <ShieldCheck size={16} className="mt-0.5 shrink-0 text-teal-600" />
              <p>{t({ en: 'Your progress stays in this browser. No account or personal profile is needed.', te: 'మీ పురోగతి ఈ బ్రౌజర్‌లోనే ఉంటుంది. ఖాతా లేదా వ్యక్తిగత ప్రొఫైల్ అవసరం లేదు.' })}</p>
            </div>
          </div>
        </section>

        <section aria-labelledby="learning-paths-heading">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="section-eyebrow">{t({ en: 'Four pillars', te: 'నాలుగు స్తంభాలు' })}</p>
              <h2 id="learning-paths-heading" className="section-title mt-1">{t({ en: 'Your learning paths', te: 'మీ అభ్యాస మార్గాలు' })}</h2>
            </div>
            <Link to="/learn" className="inline-flex items-center gap-1 text-sm font-semibold text-teal-600 hover:text-teal-700">
              {t({ en: 'View full curriculum', te: 'పూర్తి పాఠ్యాంశాలను చూడండి' })}<ArrowRight size={15} />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {PILLARS.map(pillar => {
              const lessons = LESSONS.filter(lesson => lesson.pillarId === pillar.id);
              const completed = lessons.filter(lesson => isLessonCompleted(lesson.id)).length;
              const percent = lessons.length ? Math.round((completed / lessons.length) * 100) : 0;
              return (
                <Link
                  key={pillar.id}
                  to={`/learn/${pillar.slug}`}
                  className="group rounded-2xl border border-navy-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-base font-bold text-navy-700 group-hover:text-teal-700">{t(pillar.title)}</h3>
                      <p className="mt-1 text-xs text-navy-400">{t(pillar.tagline)}</p>
                    </div>
                    <span className="rounded-full bg-teal-50 px-2.5 py-1 text-xs font-bold text-teal-700">{percent}%</span>
                  </div>
                  <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-navy-50">
                    <div className="h-full rounded-full bg-teal-400" style={{ width: `${percent}%` }} />
                  </div>
                  <div className="mt-3 flex items-center justify-between text-xs text-navy-400">
                    <span>{completed} / {lessons.length} {t({ en: 'lessons', te: 'పాఠాలు' })}</span>
                    <ArrowRight size={14} className="text-navy-300 transition group-hover:translate-x-0.5 group-hover:text-teal-600" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="flex flex-col gap-4 rounded-2xl border border-navy-100 bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-coral-50 text-coral-500"><Award size={20} /></div>
            <div>
              <h2 className="font-bold text-navy-700">{t({ en: 'Ready to put it into practice?', te: 'నేర్చుకున్నది అభ్యసించడానికి సిద్ధంగా ఉన్నారా?' })}</h2>
              <p className="mt-1 text-sm text-navy-400">{t({ en: 'Try a safe, hands-on activity with fictional money.', te: 'కల్పిత డబ్బుతో సురక్షితమైన ప్రాయోగిక కార్యకలాపాన్ని ప్రయత్నించండి.' })}</p>
            </div>
          </div>
          <Link to="/practice" className="btn-secondary shrink-0">{t({ en: 'Go to practice', te: 'అభ్యాసానికి వెళ్లండి' })}<ArrowRight size={15} /></Link>
        </section>
      </div>
    </div>
  );
}

export default DashboardPage;
