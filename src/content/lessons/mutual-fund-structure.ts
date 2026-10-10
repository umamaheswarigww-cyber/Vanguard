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
        en: 'When someone buys units in a mutual-fund scheme, several organisations have different responsibilities. Those roles are designed to provide oversight and operational separation. What does each one do—and what risks can those controls not remove?',
        te: 'ఎవరైనా మ్యూచువల్ ఫండ్ పథకంలో యూనిట్లు కొనుగోలు చేసినప్పుడు, వేర్వేరు సంస్థలకు వేర్వేరు బాధ్యతలు ఉంటాయి. ఆ బాధ్యతలు పర్యవేక్షణ, కార్యకలాపాల విభజన కోసం రూపొందించబడ్డాయి. ప్రతి సంస్థ ఏం చేస్తుంది—ఆ నియంత్రణలు ఏ రిస్కులను తొలగించలేవు?',
      },
    },
    {
      id: 'stg-mfs-entities',
      type: 'discovery',
      title: { en: 'The 5 Essential Entities', te: 'ఐదు కీలక సంస్థలు' },
      content: {
        en: 'A simplified map of common roles in an Indian mutual fund:\n\n1. **Sponsor:** Establishes the mutual fund structure.\n2. **Trustees or trustee company:** Oversee the fund for unit holders under the governing documents and regulations.\n3. **AMC (Asset Management Company):** Manages schemes and makes portfolio decisions within each scheme’s stated objectives and rules.\n4. **Custodian:** Provides custody services for scheme securities under an appointment and agreement.\n5. **RTA (Registrar and Transfer Agent):** Supports investor records and unit-related servicing.\n\nThis is a learning summary, not a complete statement of current law. The latest scheme documents and official regulations define the exact responsibilities.',
        te: 'భారత మ్యూచువల్ ఫండ్‌లో సాధారణంగా ఉండే పాత్రల సరళ పటం:\n\n1. **స్పాన్సర్:** మ్యూచువల్ ఫండ్ నిర్మాణాన్ని స్థాపిస్తారు.\n2. **ట్రస్టీలు లేదా ట్రస్టీ కంపెనీ:** యూనిట్ హోల్డర్ల కోసం పాలక పత్రాలు, నియమాల ప్రకారం పర్యవేక్షిస్తారు.\n3. **AMC (ఆస్తి నిర్వహణ సంస్థ):** ప్రతి పథకం లక్ష్యాలు, నియమాలకు లోబడి పథకాలను నిర్వహించి పోర్ట్‌ఫోలియో నిర్ణయాలు తీసుకుంటుంది.\n4. **కస్టోడియన్:** నియామకం, ఒప్పందం ప్రకారం పథక సెక్యూరిటీల కస్టడీ సేవలు అందిస్తుంది.\n5. **RTA (రిజిస్ట్రార్, ట్రాన్స్‌ఫర్ ఏజెంట్):** పెట్టుబడిదారుల రికార్డులు, యూనిట్లకు సంబంధించిన సేవలకు సహాయపడుతుంది.\n\nఇది అభ్యాసం కోసం సరళీకరణ మాత్రమే; ప్రస్తుత చట్టానికి పూర్తి వివరణ కాదు. ఖచ్చితమైన బాధ్యతలను తాజా పథక పత్రాలు, అధికారిక నియమాలు నిర్వచిస్తాయి.',
      },
    },
    {
      id: 'stg-mfs-protection',
      type: 'mechanism',
      title: { en: 'The Golden Shield: Ring-Fenced Assets', te: 'బంగారు కవచం: రింగ్-ఫెన్స్‌డ్ ఆస్తులు' },
      content: {
        en: 'A mutual fund separates several responsibilities: trustees oversee the fund, an AMC manages scheme investments, and a custodian provides custody services. Scheme-level records and controls are intended to keep scheme property distinct from the AMC’s own business.\n\nThis structure is a governance and custody safeguard—not a promise that a scheme’s NAV will hold steady, that every operational problem is avoided, or that investors can never face delays or loss. If a real provider fails, the outcome and next steps depend on the circumstances and current rules.',
        te: 'మ్యూచువల్ ఫండ్‌లో బాధ్యతలు వేరు చేస్తారు: ట్రస్టీలు పర్యవేక్షిస్తారు, AMC పథక పెట్టుబడులను నిర్వహిస్తుంది, కస్టోడియన్ కస్టడీ సేవలు అందిస్తుంది. పథక స్థాయి రికార్డులు, నియంత్రణలు పథక ఆస్తులను AMC స్వంత వ్యాపారం నుండి వేరుగా ఉంచే ఉద్దేశంతో ఉంటాయి.\n\nఈ నిర్మాణం పాలన, కస్టడీ రక్షణ మాత్రమే—పథక NAV స్థిరంగా ఉంటుందని, ప్రతి కార్యకలాప సమస్య తప్పించబడుతుందని, పెట్టుబడిదారులకు ఆలస్యం లేదా నష్టం ఎప్పుడూ ఉండదని హామీ కాదు. నిజమైన సేవా సంస్థ విఫలమైతే ఫలితం, తదుపరి చర్యలు పరిస్థితులు, ప్రస్తుత నియమాలపై ఆధారపడతాయి.',
      },
    },
    {
      id: 'stg-mfs-misconception',
      type: 'misconception',
      title: { en: 'Can the Fund Manager Steal My Units?', te: 'అపోహ: ఫండ్ మేనేజర్ నా డబ్బుతో పారిపోవచ్చా?' },
      content: {
        en: '❌ **Misconception:** “A fund manager personally owns the scheme’s shares.”\n\n✅ **Better way to think:** The AMC manages investments for the scheme under its stated rules; the scheme’s securities are handled through custody and market systems. The manager’s job is not personal ownership. These controls reduce conflicts and misuse risk, but no structure should be described as eliminating every risk.',
        te: '❌ **అపోహ:** “ఫండ్ మేనేజర్ పథకంలోని షేర్లను వ్యక్తిగతంగా కలిగి ఉంటారు.”\n\n✅ **సరైన ఆలోచన:** AMC పథకం నియమాలకు అనుగుణంగా పెట్టుబడులను నిర్వహిస్తుంది; పథక సెక్యూరిటీలు కస్టడీ, మార్కెట్ వ్యవస్థల ద్వారా నిర్వహించబడతాయి. మేనేజర్ పని వ్యక్తిగత యాజమాన్యం కాదు. ఈ నియంత్రణలు ప్రయోజన సంఘర్షణలు, దుర్వినియోగ రిస్కును తగ్గిస్తాయి; కానీ ప్రతి రిస్కును తొలగిస్తాయని చెప్పలేం.',
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
            { en: 'Scheme property and AMC operations have distinct roles and controls; this does not guarantee value or access', te: 'పథక ఆస్తులు, AMC కార్యకలాపాలకు వేర్వేరు పాత్రలు, నియంత్రణలు ఉంటాయి; ఇది విలువ లేదా యాక్సెస్‌కు హామీ కాదు' },
            { en: 'All investors lose 100% of their money immediately', te: 'పెట్టుబడిదారులందరూ వెంటనే తమ డబ్బును పూర్తిగా కోల్పోతారు' },
            { en: 'The money is taken by the government for taxes', te: 'డబ్బును ప్రభుత్వం పన్నుల రూపంలో తీసుకుంటుంది' },
          ],
          correctIndex: 0,
          explanation: {
            en: 'Mutual fund governance separates oversight, portfolio management, and custody. That structure does not guarantee investment performance or remove every operational risk.',
            te: 'మ్యూచువల్ ఫండ్ పాలనలో పర్యవేక్షణ, పోర్ట్‌ఫోలియో నిర్వహణ, కస్టడీ వేర్వేరుగా ఉంటాయి. ఈ నిర్మాణం పెట్టుబడి ఫలితాలకు హామీ ఇవ్వదు లేదా ప్రతి కార్యకలాప రిస్కును తొలగించదు.',
          },
          objectiveId: 'obj-mfs-2',
        },
        {
          id: 'q-mfs-3',
          question: {
            en: 'Why are responsibilities such as scheme oversight, portfolio management, and custody assigned to distinct roles?',
            te: 'పథకం పర్యవేక్షణ, పోర్ట్‌ఫోలియో నిర్వహణ, కస్టడీ వంటి బాధ్యతలను వేర్వేరు పాత్రలకు ఎందుకు కేటాయిస్తారు?',
          },
          type: 'mcq',
          options: [
            { en: 'To provide separate responsibilities and checks in the scheme’s operating structure', te: 'పథకం నిర్వహణలో వేర్వేరు బాధ్యతలు, తనిఖీలను కల్పించడానికి' },
            { en: 'To guarantee that the scheme always earns a profit', te: 'పథకం ఎప్పుడూ లాభం పొందుతుందని హామీ ఇవ్వడానికి' },
            { en: 'To make investment risk disappear', te: 'పెట్టుబడి రిస్క్‌ను పూర్తిగా తొలగించడానికి' },
          ],
          correctIndex: 0,
          explanation: {
            en: 'Separate roles establish a governance and operating framework. They do not guarantee returns, prevent all errors, or remove investment risk.',
            te: 'వేర్వేరు పాత్రలు పాలన, నిర్వహణ వ్యవస్థను ఏర్పరుస్తాయి. అవి రాబడికి హామీ ఇవ్వవు, అన్ని పొరపాట్లను నిరోధించవు లేదా పెట్టుబడి రిస్కును తొలగించవు.',
          },
          objectiveId: 'obj-mfs-1',
        },
      ],
    },
  ],
};

export default mutualFundStructureLesson;
