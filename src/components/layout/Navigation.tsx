import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  Menu, X, Globe, BookOpen, FlaskConical, Compass,
  Dumbbell, BarChart3, LayoutDashboard, Sparkles, ArrowRight
} from 'lucide-react';
import { useApp, useT } from '@/context/AppContext';
import clsx from 'clsx';

// The 6 clean primary destinations for desktop navigation
const primaryNavItems = [
  { to: '/dashboard', label: { en: 'Dashboard', te: 'డ్యాష్‌బోర్డ్' }, icon: LayoutDashboard },
  { to: '/learn', label: { en: 'Learn', te: 'నేర్చుకోండి' }, icon: BookOpen },
  { to: '/money-lab', label: { en: 'Money Lab', te: 'మనీ లాబ్' }, icon: FlaskConical },
  { to: '/explore', label: { en: 'Explore', te: 'అన్వేషించండి' }, icon: Compass },
  { to: '/practice', label: { en: 'Practice', te: 'అభ్యాసం' }, icon: Dumbbell },
  { to: '/progress', label: { en: 'Progress', te: 'పురోగతి' }, icon: BarChart3 },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useApp();
  const t = useT();
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-navy-100 shadow-sm transition-colors duration-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-[68px]">
          {/* ========================================================= */}
          {/* LEFT: BRAND IDENTITY (Strictly single line, balanced typography) */}
          {/* ========================================================= */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded-xl px-1 py-1 shrink-0"
            aria-label="FinQuest India — Home"
          >
            <div className="w-9 h-9 bg-gradient-to-br from-teal-400 to-navy-600 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow transition-shadow">
              <span className="text-white font-extrabold text-sm font-display tracking-tight">FQ</span>
            </div>
            <div className="flex items-baseline whitespace-nowrap">
              <span className="font-extrabold text-lg sm:text-xl font-display text-navy-800 tracking-tight">
                FinQuest
              </span>
              <span className="font-bold text-lg sm:text-xl font-display text-teal-600 ml-1">
                India
              </span>
            </div>
          </Link>

          {/* ========================================================= */}
          {/* CENTER: PRIMARY NAVIGATION (6 core links, never wrapping) */}
          {/* ========================================================= */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {primaryNavItems.map(item => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }: { isActive: boolean }) => clsx(
                    'flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-150',
                    isActive
                      ? 'bg-teal-50 text-teal-700 shadow-xs ring-1 ring-teal-200/60'
                      : 'text-navy-600 hover:text-navy-900 hover:bg-navy-50/80 active:bg-navy-100/60'
                  )}
                >
                  <Icon size={16} className="shrink-0 text-current opacity-80" />
                  <span>{t(item.label)}</span>
                </NavLink>
              );
            })}
          </div>

          {/* ========================================================= */}
          {/* RIGHT: UTILITY ACTIONS (Language toggle & Primary CTA) */}
          {/* ========================================================= */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Language Selector */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'te' : 'en')}
              className="h-10 px-3 rounded-xl border border-navy-200 text-navy-700 hover:border-teal-400 hover:text-teal-600 hover:bg-teal-50/40 bg-white font-semibold text-xs sm:text-sm flex items-center gap-1.5 transition-all shadow-xs active:scale-[0.98]"
              aria-label={`Switch language to ${language === 'en' ? 'Telugu' : 'English'}`}
            >
              <Globe size={15} className="text-teal-500" />
              <span>{language === 'en' ? 'తెలుగు' : 'English'}</span>
            </button>

            {/* Start Learning Primary CTA */}
            <Link
              to="/learn"
              className="hidden sm:inline-flex h-10 px-4 rounded-xl bg-teal-500 hover:bg-teal-600 active:scale-[0.98] text-white font-bold text-xs sm:text-sm items-center gap-1.5 shadow-sm transition-all shrink-0"
            >
              <span>{t({ en: 'Start Learning', te: 'ప్రారంభించండి' })}</span>
              <ArrowRight size={15} />
            </Link>

            {/* Mobile menu hamburger toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden h-10 w-10 flex items-center justify-center rounded-xl text-navy-700 hover:bg-navy-50 border border-navy-200 transition-colors"
              aria-expanded={open}
              aria-label="Toggle navigation menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* ========================================================= */}
        {/* RESPONSIVE MOBILE MENU (Slide down overlay) */}
        {/* ========================================================= */}
        {open && (
          <div className="lg:hidden py-4 border-t border-navy-100 bg-white animate-slide-up space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 px-1">
              {primaryNavItems.map(item => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }: { isActive: boolean }) => clsx(
                      'flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors',
                      isActive
                        ? 'bg-teal-50 text-teal-700 ring-1 ring-teal-200/50'
                        : 'text-navy-700 hover:bg-navy-50'
                    )}
                  >
                    <Icon size={18} className="text-teal-600" />
                    <span>{t(item.label)}</span>
                  </NavLink>
                );
              })}
            </div>

            {/* Special Highlight for Investing Made Simple in Mobile Drawer */}
            <div className="px-1 pt-1">
              <Link
                to="/investing-made-simple"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-teal-500 to-navy-700 text-white shadow-sm"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                    <Sparkles size={16} className="text-teal-200" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-teal-200">Featured Masterclass</div>
                    <div className="text-sm font-bold">{t({ en: 'Investing Made Simple', te: 'సులభమైన పెట్టుబడులు' })}</div>
                  </div>
                </div>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Mobile CTAs */}
            <div className="pt-2 px-1 flex flex-col gap-2">
              <Link
                to="/learn"
                onClick={() => setOpen(false)}
                className="w-full h-11 rounded-xl bg-teal-500 hover:bg-teal-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm"
              >
                <span>{t({ en: 'Start Learning Now', te: 'ఇప్పుడే నేర్చుకోండి' })}</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
