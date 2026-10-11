import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { HomePage } from '@/pages/HomePage';
import { LearnPage } from '@/pages/LearnPage';
import { LessonPage } from '@/pages/LessonPage';
import { MoneyLabPage } from '@/pages/MoneyLabPage';
import { ExplorePage } from '@/pages/ExplorePage';
import { PracticePage } from '@/pages/PracticePage';
import { ProgressPage } from '@/pages/ProgressPage';
import { DashboardPage } from '@/pages/DashboardPage';
import { GlossaryPage } from '@/pages/GlossaryPage';
import { GlossaryTermPage } from '@/pages/GlossaryTermPage';
import { PillarPage } from '@/pages/PillarPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

import { InvestingMadeSimplePage } from '@/pages/InvestingMadeSimplePage';
import { SpotTheScamPage } from '@/pages/SpotTheScamPage';

export default function App() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
      try {
        window.scrollTo({ top: 0, behavior: 'instant' });
      } catch {
        // Fallback for environments where scrollTo options are not supported
      }
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-cream-50 text-navy-800">
      <Navigation />
      <main key={location.pathname} className="flex-1 animate-fade-in">
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/investing-made-simple" element={<InvestingMadeSimplePage />} />
          <Route path="/spot-the-scam" element={<SpotTheScamPage />} />
          <Route path="/learn/stay-financially-safe/spot-the-scam" element={<SpotTheScamPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
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
