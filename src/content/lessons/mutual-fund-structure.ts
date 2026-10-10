import type { Lesson } from '@/types/content';

export const mutualFundStructureLesson: Lesson = {
  id: 'mutual-fund-structure',
  slug: 'mutual-fund-structure',
  title: {
    en: 'How a Mutual Fund is Organised: The 5 Pillars of Trust',
    te: 'మ్యూచువల్ ఫండ్ ఎలా నిర్వహించబడుతుంది: 5 నమ్మకమైన స్తంభాలు',
  },
  pillarId: 'invest',
  conceptIds: ['mutual-fund', 'amc', 'nav'],
  level: 'core',
  estimatedMinutes: 16,
  prerequisites: ['mutual-fund-basics'],
  contentStatus: 'implemented',
  lastReviewedAt: '2026-10-10',
  learningObjectives: [
    {
      id: 'obj-mfs-1',
      description: {
        en: 'Identify the five entities in India\'s mutual fund three-tier trust structure: Sponsor, AMC, Trustee, Custodian, and RTA.',
        te: 'భారతీయ మ్యూచువల్ ఫండ్ మూడు అంచెల నిర్మాణంలోని ఐదు ప్రధాన సంస్థలను గుర్తించడం: స్పాన్సర్, AMC, ట్రస్టీ, కస్టోడియన్ మరియు RTA.',
      },
      evidenceType: 'identify',
    },
    {
      id: 'obj-mfs-2',
      description: {
        en: 'Explain why mutual fund assets are ring-fenced from the AMC itself.',
        te: 'మ్యూచువల్ ఫండ్ ఆస్తులు AMC ఆస్తులతో కలవకుండా స్వతంత్రంగా ఎందుకు ఉంటాయో వివరించడం.',
      },
      evidenceType: 'explain',
    },
  ],
  stages: [
    {
      id: 'stg-mfs-hook',
      type: 'hook',
      title: { en: 'Where Does Your Money Actually Go?', te: 'మీ డబ్బు నిజంగా ఎక్కడికి వెళుతుంది?' },
      content: {
        en: 'When you transfer ₹1,000 into an "SBI", "HDFC", or "ICICI" mutual fund scheme, does that money sit in the bank\'s personal balance sheet? If the fund manager makes a bad personal decision or the company goes bankrupt, can they run away with your investment? India has one of the world\'s most stringently protected mutual fund structures. Let\'s see how it works.',
        te: 'మీరు మ్యూచువల్ ఫండ్‌లో ₹1,000 పెట్టుబడి పెట్టినప్పుడు, ఆ డబ్బు ఎక్కడ ఉంటుంది? ఫండ్ మేనేజర్ లేదా కంపెనీ నష్టపోతే మీ డబ్బు తీసుకుని పారిపోవచ్చా? భారతదేశంలో మ్యూచువల్ ఫండ్ నిర్మాణం అత్యంత పటిష్టమైన చట్టబద్ధ రక్షణలతో ఏర్పాటు చేయబడింది. అది ఎలా పనిచేస్తుందో తెలుసుకుందాం.',
      },
    },
    {
      id: 'stg-mfs-entities',
      type: 'discovery',
      title: { en: 'The 5 Essential Entities', te: 'ఐదు కీలక సంస్థలు' },
      content: {
        en: 'Under SEBI (Mutual Funds) Regulations, 1996, every mutual fund is organized as a **Public Trust** with a strict separation of powers:\n\n1. **The Sponsor:** The promoter who sets up the mutual fund trust (e.g., State Bank of India, HDFC Bank).\n2. **The Board of Trustees:** Independent fiduciaries holding legal custody of the trust. Their sole legal duty is protecting unit holders. At least 50% must be completely independent of the sponsor.\n3. **The AMC (Asset Management Company):** The operating company appointed by trustees to research securities, hire fund managers, and make daily investment decisions.\n4. **The Custodian:** An independent financial institution (e.g., HDFC Bank Custody, Deutsche Bank, Stock Holding Corporation) that physically and electronically holds the underlying shares and bonds in its vault. The AMC never touches the securities!\n5. **The RTA (Registrar & Transfer Agent):** Companies like CAMS and KFin Technologies that handle investor applications, unit allotments, KYC records, and redemption payouts.',
        te: 'సెబీ నిబంధనల ప్రకారం మ్యూచువల్ ఫండ్ ఒక పబ్లిక్ ట్రస్ట్‌గా నిర్వహించబడుతుంది:\n1. స్పాన్సర్: ఫండ్‌ను ప్రారంభించే ప్రధాన సంస్థ.\n2. ట్రస్టీల బోర్డు: పెట్టుబడిదారుల ప్రయోజనాలను కాపాడే స్వతంత్ర ధర్మకర్తలు.\n3. AMC: పెట్టుబడి నిర్ణయాలు తీసుకునే మేనేజ్‌మెంట్ కంపెనీ.\n4. కస్టోడియన్: కొనుగోలు చేసిన షేర్లు మరియు బాండ్లను భద్రపరిచే స్వతంత్ర సంస్థ.\n5. RTA (CAMS & KFintech): ఖాతాదారుల రికార్డులు మరియు స్టేట్‌మెంట్‌లను నిర్వహించే సంస్థ.',
      },
    },
    {
      id: 'stg-mfs-protection',
      type: 'mechanism',
      title: { en: 'The Golden Shield: Ring-Fenced Assets', te: 'బంగారు కవచం: రింగ్-ఫెన్స్‌డ్ ఆస్తులు' },
      content: {
        en: 'The most important design feature for student safety:\n\n• **Total Legal Separation:** The AMC is purely a management contractor. All scheme securities are held in trust by the independent **Custodian** in the scheme’s name.\n• **If the AMC Collapses:** If an AMC defaults on loans or goes into insolvency, the creditors of the AMC **CANNOT touch** the fund’s investments! SEBI will simply transfer the fund management mandate to another certified AMC or appoint liquidators to return the net assets to unit holders at current NAV.',
        te: 'చట్టబద్ధమైన పూర్తి విభజన:\nAMC అనేది కేవలం ఒక మేనేజరు మాత్రమే. ఫండ్‌లోని షేర్లు మరియు బాండ్లు అన్నీ స్వతంత్ర కస్టోడియన్ వద్ద సురక్షితంగా ఉంటాయి. ఒకవేళ AMC కంపెనీ దివాళా తీసినా, వారి రుణదాతలు మీ ఫండ్ డబ్బును తాకలేరు! సెబీ ఆ ఫండ్‌ను మరొక కంపెనీకి బదిలీ చేస్తుంది.',
      },
    },
    {
      id: 'stg-mfs-misconception',
      type: 'misconception',
      title: { en: 'Can the Fund Manager Steal My Units?', te: 'అపోహ: ఫండ్ మేనేజర్ నా డబ్బుతో పారిపోవచ్చా?' },
      content: {
        en: '❌ **Misconception:** "The fund manager can withdraw cash from the mutual fund and flee the country!"\n\n✅ **Truth:** The fund manager never has direct access to cash or demat balances. When the manager decides to buy 10,000 shares of Infosys, they send an instruction to the **Custodian** and the exchange clearing house. The cash moves directly from the Custodian bank account to the clearing corporation. The manager cannot transfer cash into any personal account.',
        te: '❌ అపోహ: "ఫండ్ మేనేజర్ మ్యూచువల్ ఫండ్ డబ్బును తన సొంత ఖాతాకు మళ్ళించవచ్చు!"\n✅ వాస్తవం: ఫండ్ మేనేజర్‌కు నగదు లేదా డీమ్యాట్ ఖాతాలను తాకే అధికారం ఉండదు. ఆర్డర్ అమలు కేవలం స్వతంత్ర కస్టోడియన్ మరియు క్లియరింగ్ కార్పొరేషన్ ద్వారా మాత్రమే జరుగుతుంది.',
      },
    },
    {
      id: 'stg-mfs-mastery',
      type: 'mastery_check',
      title: { en: 'Mutual Fund Structure Quiz', te: 'నిర్మాణ నైపుణ్య క్విజ్' },
      content: {
        en: 'Confirm your understanding of the Indian mutual fund structure.',
        te: 'మ్యూచువల్ ఫండ్ నిర్మాణంపై మీ అవగాహనను పరీక్షించండి.',
      },
      questions: [
        {
          id: 'q-mfs-1',
          question: {
            en: 'Who physically and electronically holds the underlying shares of a mutual fund?',
            te: 'మ్యూచువల్ ఫండ్‌లోని షేర్లను భద్రపరిచే స్వతంత్ర సంస్థ ఏది?',
          },
          type: 'mcq',
          options: [
            { en: 'The Independent Custodian', te: 'స్వతంత్ర కస్టోడియన్ (Custodian)' },
            { en: 'The Fund Manager personally', te: 'ఫండ్ మేనేజర్ వ్యక్తిగతంగా' },
            { en: 'The Stock Broker', te: 'స్టాక్ బ్రోకర్' },
          ],
          correctIndex: 0,
          explanation: {
            en: 'The Custodian holds all scheme securities separately from the AMC to prevent misappropriation.',
            te: 'కస్టోడియన్ అన్ని సెక్యూరిటీలను AMC తో సంబంధం లేకుండా సురక్షితంగా ఉంచుతుంది.',
          },
          objectiveId: 'obj-mfs-1',
        },
        {
          id: 'q-mfs-2',
          question: {
            en: 'What happens to investors\' investments if an AMC goes into corporate bankruptcy?',
            te: 'ఒకవేళ AMC కంపెనీ దివాళా తీస్తే పెట్టుబడిదారుల డబ్బుకు ఏమవుతుంది?',
          },
          type: 'mcq',
          options: [
            { en: 'Fund assets are safe with the custodian and protected by the Trustees/SEBI', te: 'ఆస్తులు కస్టోడియన్ వద్ద సురక్షితంగా ఉంటాయి మరియు ట్రస్టీలు/సెబీ ద్వారా రక్షించబడతాయి' },
            { en: 'All investors lose 100% of their money immediately', te: 'పెట్టుబడిదారులందరూ వెంటనే తమ డబ్బును పూర్తిగా కోల్పోతారు' },
            { en: 'The money is taken by the government for taxes', te: 'డబ్బును ప్రభుత్వం పన్నుల రూపంలో తీసుకుంటుంది' },
          ],
          correctIndex: 0,
          explanation: {
            en: 'Mutual fund scheme assets are legally ring-fenced in a public trust and cannot be seized by AMC creditors.',
            te: 'మ్యూచువల్ ఫండ్ ఆస్తులు పబ్లిక్ ట్రస్ట్ రూపంలో సురక్షితంగా ఉంటాయి; AMC అప్పులకు వాటిని తీసుకోలేరు.',
          },
          objectiveId: 'obj-mfs-2',
        },
      ],
    },
  ],
};

export default mutualFundStructureLesson;
