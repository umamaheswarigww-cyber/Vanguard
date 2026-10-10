import { Routes, Route } from 'react-router-dom';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { HomePage } from '@/pages/HomePage';
import { LearnPage } from '@/pages/LearnPage';
import { LessonPage } from '@/pages/LessonPage';
import { MoneyLabPage } from '@/pages/MoneyLabPage';
import { ExplorePage } from '@/pages/ExplorePage';
import { PracticePage } from '@/pages/PracticePage';
import { ProgressPage } from '@/pages/ProgressPage';
import { GlossaryPage } from '@/pages/GlossaryPage';
import { GlossaryTermPage } from '@/pages/GlossaryTermPage';
import { PillarPage } from '@/pages/PillarPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/learn/:pillarSlug" element={<PillarPage />} />
          <Route path="/learn/:pillarSlug/:lessonSlug" element={<LessonPage />} />
          <Route path="/money-lab" element={<MoneyLabPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/explore/glossary" element={<GlossaryPage />} />
          <Route path="/explore/glossary/:slug" element={<GlossaryTermPage />} />
          <Route path="/practice" element={<PracticePage />} />
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
