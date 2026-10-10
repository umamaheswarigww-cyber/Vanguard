import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  Menu, X, Globe, BookOpen, FlaskConical, Compass,
  Dumbbell, BarChart3, ChevronDown
} from 'lucide-react';
import { useApp, useT } from '@/context/AppContext';
import clsx from 'clsx';

const navItems = [
  { to: '/learn', label: { en: 'Learn', te: 'నేర్చుకోండి' }, icon: BookOpen },
  { to: '/money-lab', label: { en: 'Money Lab', te: 'మనీ లాబ్' }, icon: FlaskConical },
  { to: '/explore', label: { en: 'Explore', te: 'అన్వేషించండి' }, icon: Compass },
  { to: '/practice', label: { en: 'Practice', te: 'అభ్యాసం' }, icon: Dumbbell },
  { to: '/progress', label: { en: 'My Progress', te: 'నా పురోగతి' }, icon: BarChart3 },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage } = useApp();
  const t = useT();
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 transition-all duration-300',
        scrolled || !isHome
          ? 'bg-white/95 backdrop-blur-md shadow-nav border-b border-navy-50'
          : 'bg-transparent',
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded-lg px-1"
            aria-label="FinQuest India — Home"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-navy-500 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
              <span className="text-white font-bold text-sm font-display">FQ</span>
            </div>
            <div className="hidden sm:block">
              <span className={clsx(
                'font-bold text-lg font-display transition-colors',
                scrolled || !isHome ? 'text-navy-600' : 'text-white'
              )}>
                FinQuest
              </span>
              <span className={clsx(
                'font-semibold text-lg font-display transition-colors ml-1',
                scrolled || !isHome ? 'text-teal-400' : 'text-teal-300'
              )}>
                India
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }: { isActive: boolean }) => clsx(
                  'flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                  isActive
                    ? 'bg-teal-50 text-teal-600'
                    : scrolled || !isHome
                      ? 'text-navy-500 hover:text-navy-700 hover:bg-navy-50'
                      : 'text-white/90 hover:text-white hover:bg-white/10',
                )}
              >
                <item.icon size={15} />
                {t(item.label)}
              </NavLink>
            ))}
          </div>

          {/* Language toggle + Mobile menu */}
          <div className="flex items-center gap-2">
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'te' : 'en')}
              className={clsx(
                'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all border',
                scrolled || !isHome
                  ? 'border-navy-100 text-navy-500 hover:border-teal-400 hover:text-teal-500 bg-white'
                  : 'border-white/30 text-white/90 hover:bg-white/10'
              )}
              aria-label={`Switch to ${language === 'en' ? 'Telugu' : 'English'}`}
            >
              <Globe size={14} />
              <span>{language === 'en' ? 'తె' : 'EN'}</span>
            </button>

            {/* CTA - desktop */}
            <Link
              to="/learn"
              className="hidden md:inline-flex btn-primary text-sm py-2 px-4"
            >
              {t({ en: 'Start Learning', te: 'నేర్చుకోవడం ప్రారంభించండి' })}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setOpen(!open)}
              className={clsx(
                'md:hidden p-2 rounded-lg transition-colors',
                scrolled || !isHome
                  ? 'text-navy-500 hover:bg-navy-50'
                  : 'text-white hover:bg-white/10'
              )}
              aria-expanded={open}
              aria-label="Toggle mobile menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 pt-2 border-t border-navy-100 bg-white animate-slide-up">
            <div className="space-y-1 px-1">
              {navItems.map(item => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }: { isActive: boolean }) => clsx(
                    'flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-colors',
                    isActive
                      ? 'bg-teal-50 text-teal-600'
                      : 'text-navy-600 hover:bg-navy-50'
                  )}
                >
                  <item.icon size={18} />
                  {t(item.label)}
                </NavLink>
              ))}
              <div className="pt-2">
                <Link to="/learn" className="btn-primary w-full justify-center">
                  {t({ en: 'Start Learning', te: 'నేర్చుకోవడం ప్రారంభించండి' })}
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
