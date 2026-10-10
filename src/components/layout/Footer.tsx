import { Link } from 'react-router-dom';
import { Shield, BookOpen, Heart, ExternalLink } from 'lucide-react';
import { useT } from '@/context/AppContext';

export function Footer() {
  const t = useT();

  return (
    <footer className="bg-navy-600 text-white mt-auto">
      {/* Disclaimer banner */}
      <div className="bg-navy-700 px-4 py-3 text-center text-xs text-navy-200 border-b border-navy-500">
        <Shield size={12} className="inline mr-1.5 text-teal-400" />
        {t({
          en: 'FinQuest India is an educational platform. All simulations use fictional data and hypothetical assumptions. Nothing here is investment advice or a product recommendation.',
          te: 'FinQuest India ఒక విద్యాపర వేదిక. అన్ని సిమ్యులేషన్‌లు కల్పిత డేటాను ఉపయోగిస్తాయి. ఇక్కడ ఏదీ పెట్టుబడి సలహా లేదా ఉత్పత్తి సిఫార్సు కాదు.',
        })}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-navy-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm font-display">FQ</span>
              </div>
              <span className="font-bold text-xl font-display">FinQuest <span className="text-teal-400">India</span></span>
            </div>
            <p className="text-navy-300 text-sm leading-relaxed max-w-xs">
              {t({
                en: 'Building genuine financial understanding for Grade 11–12 students across India, starting from Hyderabad.',
                te: 'హైదరాబాద్ నుండి ప్రారంభించి, భారతదేశంలో గ్రేడ్ 11-12 విద్యార్థులకు నిజమైన ఆర్థిక అవగాహన నిర్మించడం.',
              })}
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              <span className="badge badge-teal">{t({ en: 'Educational Only', te: 'విద్యాపర మాత్రమే' })}</span>
              <span className="badge badge-navy">{t({ en: 'No Investment Advice', te: 'పెట్టుబడి సలహా లేదు' })}</span>
              <span className="badge badge-coral">{t({ en: 'Fictional Simulations', te: 'కల్పిత సిమ్యులేషన్‌లు' })}</span>
            </div>
          </div>

          {/* Learn */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-navy-300 mb-4">
              {t({ en: 'Learn', te: 'నేర్చుకోండి' })}
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { to: '/learn/plan-and-budget', label: { en: 'Plan & Budget', te: 'ప్రణాళిక & బడ్జెట్' } },
                { to: '/learn/save-and-manage', label: { en: 'Save & Manage', te: 'పొదుపు & నిర్వహణ' } },
                { to: '/learn/understand-investing', label: { en: 'Understand Investing', te: 'పెట్టుబడులు అర్థం చేసుకోండి' } },
                { to: '/learn/stay-financially-safe', label: { en: 'Stay Safe', te: 'సురక్షితంగా ఉండండి' } },
              ].map(item => (
                <li key={item.to}>
                  <Link to={item.to} className="text-navy-300 hover:text-teal-400 transition-colors">
                    {t(item.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-navy-300 mb-4">
              {t({ en: 'Resources', te: 'వనరులు' })}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://investor.sebi.gov.in" target="_blank" rel="noopener noreferrer"
                  className="text-navy-300 hover:text-teal-400 transition-colors flex items-center gap-1">
                  SEBI Investor Education <ExternalLink size={10} />
                </a>
              </li>
              <li>
                <a href="https://www.amfiindia.com/mutual-fund" target="_blank" rel="noopener noreferrer"
                  className="text-navy-300 hover:text-teal-400 transition-colors flex items-center gap-1">
                  AMFI Mutual Fund Education <ExternalLink size={10} />
                </a>
              </li>
              <li>
                <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer"
                  className="text-navy-300 hover:text-teal-400 transition-colors flex items-center gap-1">
                  Cyber Crime Reporting <ExternalLink size={10} />
                </a>
              </li>
              <li>
                <Link to="/explore/glossary" className="text-navy-300 hover:text-teal-400 transition-colors">
                  {t({ en: 'Financial Glossary', te: 'ఆర్థిక పదకోశం' })}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-navy-500 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-navy-400">
          <p>
            {t({
              en: '© 2026 FinQuest India. Built for the Vanguard India Financial Literacy Hackathon. Not affiliated with or endorsed by Vanguard.',
              te: '© 2026 FinQuest India. Vanguard India Financial Literacy Hackathon కోసం నిర్మించబడింది.',
            })}
          </p>
          <p className="flex items-center gap-1">
            {t({ en: 'Made with', te: 'తో తయారు చేయబడింది' })}
            <Heart size={12} className="text-coral-400 fill-coral-400" />
            {t({ en: 'for students', te: 'విద్యార్థుల కోసం' })}
          </p>
        </div>
      </div>
    </footer>
  );
}
