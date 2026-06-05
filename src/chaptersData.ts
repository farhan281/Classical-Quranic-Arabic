import { Chapter } from './types';

export const chaptersData: Chapter[] = [
  {
    id: 1,
    slug: 'muzakkar-and-muannas',
    title: 'Muzakkar and Muannas',
    arabicTitle: 'المُذَكَّر وَالمُؤَنَّث',
    subtitle: 'Masculine and Feminine Gender Rules',
    category: 'Nouns & Basics',
    summary: 'Discover how gender works in Classical Arabic nouns. Learn to spot the Round Ta (ة) and identify feminine exceptions.',
    lessons: [
      {
        id: 'c1-l1',
        title: 'The Gender Binary in Arabic',
        type: 'explanation',
        text: 'In Classical Arabic, every single noun is either Muzakkar (مُذَكَّر - Masculine) or Muannas (مُؤَنَّث - Feminine). Unlike English, non-living things like houses, suns, or clocks are assigned genders as well.'
      },
      {
        id: 'c1-l2',
        title: 'The Main Feminine Sign: Round Ta (ة)',
        type: 'rule',
        text: 'The easiest and most common sign of a feminine noun is the Ta Marbuta (ة - Round Ta). If a word ends with this symbol, it is almost always feminine. Usually, a masculine noun is the original form, and we add ة to change it to feminine!',
        alertMessage: 'Watch the phonetic change: The ة makes a "ah" or "at" sound at the end of the word!'
      },
      {
        id: 'c1-l3',
        title: 'Basic Transformation Examples',
        type: 'table',
        tableHeaders: ['Masculine (Muzakkar)', 'Feminine (Muannas)', 'English Meaning'],
        tableRows: [
          ['مُسْلِمٌ (Muslimun)', 'مُسْلِمَةٌ (Muslimatun)', 'Muslim man / Muslim woman'],
          ['صَالِحٌ (Saalihun)', 'صَالِحَةٌ (Saalihatun)', 'Pious man / Pious woman'],
          ['كَبِيرٌ (Kabeerun)', 'كَبِيرَةٌ (Kabeeratun)', 'Big (M) / Big (F)']
        ]
      },
      {
        id: 'c1-l4',
        title: 'Important Alert: Feminine Without Ta Marbuta (ة)',
        type: 'explanation',
        text: 'For some nouns, there is no physical ة, but the word is naturally or historically feminine. Beginners must learn these early classical Arabic exceptions:',
        list: [
          'شَمْسٌ (Shamsun) - Sun',
          'أُمٌّ (Ummun) - Mother',
          'زَيْنَبُ (Zaynabu) - Zainab (girl\'s proper name)'
        ]
      }
    ],
    quiz: [
      {
        id: 'c1-q1',
        type: 'convert',
        prompt: 'Convert the student "طَالِبٌ" (Student - Masculine) to its Feminine (Muannas) form:',
        options: ['طَالِبَتٌ', 'طَالِبَةٌ', 'طَالِبَاتٌ', 'طَالِبُونَ'],
        correctAnswer: 'طَالِبَةٌ',
        explanation: 'We append the Round Ta (ة) to the end of the original masculine noun: طَالِبٌ + ة = طَالِبَةٌ.'
      },
      {
        id: 'c1-q2',
        type: 'identify',
        prompt: 'What is the gender of the classical noun "شَمْسٌ" (Sun)?',
        options: ['Muzakkar (Masculine)', 'Muannas (Feminine)'],
        correctAnswer: 'Muannas (Feminine)',
        explanation: 'Although شَمْسٌ does not end with ة, it is a famous exception and treated as Feminine in Classical Arabic syntax.'
      },
      {
        id: 'c1-q3',
        type: 'multiple_choice',
        prompt: 'Which of the following is the main sign of feminine gender in Arabic nouns?',
        options: ['Tanween (ـٌ)', 'Silent Sukoon (ـْ)', 'Round Ta / Taa Marbuta (ة)', 'Fatha (ـَ)'],
        correctAnswer: 'Round Ta / Taa Marbuta (ة)',
        explanation: 'The Round Ta (ة) is the standard physical indicator of feminine Arabic words.'
      }
    ]
  },
  {
    id: 2,
    slug: 'numbers-in-arabic',
    title: 'Numbers in Arabic',
    arabicTitle: 'المُفْرَد، التَّثْنِيَة، الجَمْع',
    subtitle: 'Singular, Dual, and Plural',
    category: 'Nouns & Basics',
    summary: 'Master the unique dual form of Classical Arabic (exactly two) alongside singular and plural suffixes.',
    lessons: [
      {
        id: 'c2-l1',
        title: 'The Three Suffix States',
        type: 'explanation',
        text: 'In modern languages, words are usually singular (one) or plural (many). However, Classical Arabic features a special dedicated grammatical suffix for EXACTLY TWO objects! Thus, nouns have three states:'
      },
      {
        id: 'c2-l2',
        title: 'Noun Number Classifications',
        type: 'table',
        tableHeaders: ['Class Name', 'Arabic form', 'Description'],
        tableRows: [
          ['Wahid', 'وَاحِد', 'Singular (One)'],
          ['Tasniya (or Tathniyah)', 'تَثْنِيَة', 'Dual (Exactly Two)'],
          ['Jama', 'جَمْع', 'Plural (Three or more)']
        ]
      },
      {
        id: 'c2-l3',
        title: 'The Suffix Rule for Masculine (Muzakkar)',
        type: 'rule',
        text: 'To make a masculine word dual (Exactly Two), add: انِ (aani) to the end. To make it plural (Three or more), add: وْنَ (oona) to the end.',
        alertMessage: 'Example: مُسْلِمٌ (1) → مُسْلِمَانِ (2) → مُسْلِمُونَ (3+)'
      },
      {
        id: 'c2-l4',
        title: 'The Suffix Rule for Feminine (Muannas)',
        type: 'rule',
        text: 'For feminine words ending in ة, the conversion follows two clear steps:\n- Dual: Change ة to open ت and add انِ (Example: مُسْلِمَةٌ → مُسْلِمَتَانِ).\n- Plural: Remove ة completely and add اتٌ (aatun) (Example: مُسْلِمَةٌ → مُسْلِمَاتٌ).'
      },
      {
        id: 'c2-l5',
        title: 'More Classical Examples',
        type: 'table',
        tableHeaders: ['Noun Type', 'Singular (1)', 'Dual (2)', 'Plural (3+)'],
        tableRows: [
          ['Masc "Pious"', 'صَالِحٌ', 'صَالِحَانِ', 'صَالِحُونَ'],
          ['Fem "Pious"', 'صَالِحَةٌ', 'صَالِحَتَانِ', 'صَالِحَاتٌ'],
          ['Masc "Scholar"', 'عَالِمٌ', 'عَالِمَانِ', 'عَالِمُونَ'],
          ['Fem "Scholar"', 'عَالِمَةٌ', 'عَالِمَتَانِ', 'عَالِمَاتٌ']
        ]
      }
    ],
    quiz: [
      {
        id: 'c2-q1',
        type: 'convert',
        prompt: 'Convert "مُدَرِّسٌ" (Male Teacher) to its Dual (Tasniya) form:',
        options: ['مُدَرِّسُونَ', 'مُدَرِّسَاتٌ', 'مُدَرِّسَانِ', 'مُدَرِّسَةٌ'],
        correctAnswer: 'مُدَرِّسَانِ',
        explanation: 'We attach "انِ" to form the dual masculine: مُدَرِّسٌ + انِ = مُدَرِّسَانِ.'
      },
      {
        id: 'c2-q2',
        type: 'convert',
        prompt: 'Convert "طَالِبَةٌ" (Female Student) to its Plural (Jama) form:',
        options: ['طَالِبَاتٌ', 'طَالِبَانِ', 'طَالِبَتَانِ', 'طَالِبُونَ'],
        correctAnswer: 'طَالِبَاتٌ',
        explanation: 'We remove the ة and append "اتٌ" for feminine plural: طَالِبَةٌ → طَالِبَاتٌ.'
      }
    ]
  },
  {
    id: 3,
    slug: 'ism-e-ishara',
    title: 'Ism-e-Ishāra',
    arabicTitle: 'اِسْم الإِشَارَة',
    subtitle: 'The Pointing Words (This and That)',
    category: 'Nouns & Basics',
    summary: 'Learn the pointing pronouns. Arabic pointing words change according to proximity (near vs miles away), dual numbers, and genders.',
    lessons: [
      {
        id: 'c3-l1',
        title: 'What is Ism-e-Ishāra?',
        type: 'explanation',
        text: 'In English, we say "this" or "that" to point. In Classical Arabic, "Ism-e-Ishāra" (اِسْم الإِشَارَة) points to objects, and the pointing word MUST match the gender, number, and relative distance of the target.'
      },
      {
        id: 'c3-l2',
        title: 'Pointing to One Person (Singular)',
        type: 'table',
        tableHeaders: ['Type', 'Near ("This")', 'Far ("That")', 'Meaning'],
        tableRows: [
          ['Masculine', 'هَذَا (Haazaa)', 'ذَلِكَ (Zaalika)', 'This / That (M)'],
          ['Feminine', 'هَذِهِ (Haazihi)', 'تِلْكَ (Tilka)', 'This / That (F)']
        ]
      },
      {
        id: 'c3-l3',
        title: 'Pointing to Two People (Dual)',
        type: 'table',
        tableHeaders: ['Type', 'Near ("These Two")', 'Far ("Those Two")', 'Meaning'],
        tableRows: [
          ['Masculine', 'هَذَانِ (Haazaani)', 'ذَانِكَ (Zaanika)', 'These / Those Two (M)'],
          ['Feminine', 'هَاتَانِ (Haataani)', 'تَانِكَ (Taanika)', 'These / Those Two (F)']
        ]
      },
      {
        id: 'c3-l4',
        title: 'Pointing to Many (Plural - 3+)',
        type: 'table',
        tableHeaders: ['Type', 'Near ("These")', 'Far ("Those")', 'Meaning'],
        tableRows: [
          ['Masc & Fem', 'هَؤُلَاءِ (Haa\'ulaa\'i)', 'أُولَئِكَ (Ulaa\'ika)', 'These / Those (M & F Plural)']
        ]
      }
    ],
    quiz: [
      {
        id: 'c3-q1',
        type: 'multiple_choice',
        prompt: 'Fill in the blank with the correct near pointing word: "_______ طَالِبَةٌ" (A female student).',
        options: ['هَذَا', 'هَذِهِ', 'ذَلِكَ', 'تِلْكَ'],
        correctAnswer: 'هَذِهِ',
        explanation: 'Since طَالِبَةٌ is singular and feminine ending in Taa Marbuta, we must configure "هَذِهِ" (This - female).'
      },
      {
        id: 'c3-q2',
        type: 'multiple_choice',
        prompt: 'Fill in the blank with the correct far pointing word: "_______ صَالِحَانِ" (Two pious men - Dual Masculine).',
        options: ['ذَانِكَ', 'تَانِكَ', 'أُولَئِكَ', 'تِلْكَ'],
        correctAnswer: 'ذَانِكَ',
        explanation: 'ذَانِكَ is the far pointing word for Dual Masculine nouns ("Those two men").'
      }
    ]
  },
  {
    id: 4,
    slug: 'dhama-ir-pronouns',
    title: 'Dhamā’ir',
    arabicTitle: 'الضَّمَائِر',
    subtitle: 'Arabic Pronouns (Independent & Attached)',
    category: 'Nouns & Basics',
    summary: 'Replace repetitive nouns with Arabic pronouns. Contrast stand-alone pronouns with possessive endings.',
    lessons: [
      {
        id: 'c4-l1',
        title: 'Stand-Alone (Separate) Pronouns',
        type: 'explanation',
        text: 'Pronouns in Arabic are known as "Dhamā’ir" (الضَّمَائِر). Separate pronouns stand independently. They are divided into 3rd person (absent), 2nd person (addressee), and 1st person (speaker).'
      },
      {
        id: 'c4-l2',
        title: '3rd Person Separate Pronouns (The Absent - الغائب)',
        type: 'table',
        tableHeaders: ['Pronoun', 'Meaning', 'Classical Example', 'Translation'],
        tableRows: [
          ['هُوَ (Huwa)', 'He', 'هُوَ مُسْلِمٌ', 'He is a Muslim'],
          ['هُمَا (Humaa)', 'They Two', 'هُمَا مُسْلِمَانِ', 'They two are Muslims'],
          ['هُمْ (Hum)', 'They (M Plural)', 'هُمْ مُسْلِمُونَ', 'They are Muslims'],
          ['هِيَ (Hiya)', 'She', 'هِيَ مُسْلِمَةٌ', 'She is a Muslim woman'],
          ['هُنَّ (Hunna)', 'They (F Plural)', 'هُنَّ مُسْلِمَاتٌ', 'They are Muslim women']
        ]
      },
      {
        id: 'c4-l3',
        title: '2nd Person Pronouns (The Addressed - الحاضر)',
        type: 'table',
        tableHeaders: ['Pronoun', 'Meaning', 'Example', 'Translation'],
        tableRows: [
          ['أَنْتَ (Anta)', 'You (M)', 'أَنْتَ مُسْلِمٌ', 'You is a Muslim man'],
          ['أَنْتِ (Anti)', 'You (F)', 'أَنْتِ مُسْلِمَةٌ', 'You is a Muslim woman'],
          ['أَنْتُمَا (Antumaa)', 'You Two', 'أَنْتُمَا مُسْلِمَانِ', 'You two are Muslims'],
          ['أَنْتُمْ (Antum)', 'You Plural (M)', 'أَنْتُمْ مُسْلِمُونَ', 'You all are Muslims'],
          ['أَنْتُنَّ (Antunna)', 'You Plural (F)', 'أَنْتُنَّ مُسْلِمَاتٌ', 'You all are Muslim women']
        ]
      },
      {
        id: 'c4-l4',
        title: 'Attached Possessive Pronouns',
        type: 'rule',
        text: 'Instead of standing alone, these suffixes attach directly to words to show ownership and possessivity. Let us attach them to كِتَابٌ (kitab - book):',
        list: [
          'كِتَابُهُ (Kitabu-hu) - His book',
          'كِتَابُهَا (Kitabu-haa) - Her book',
          'كِتَابُكَ (Kitabu-ka) - Your book (M)',
          'كِتَابُكِ (Kitabu-ki) - Your book (F)',
          'كِتَابِي (Kitabee) - My book',
          'كِتَابُنَا (Kitabu-naa) - Our book'
        ]
      }
    ],
    quiz: [
      {
        id: 'c4-q1',
        type: 'multiple_choice',
        prompt: 'Identify the correct separate pronoun for: "_______ مُسْلِمَاتٌ" (They are Muslim women).',
        options: ['هُمْ', 'أَنْتُمْ', 'هُنَّ', 'أَنَا'],
        correctAnswer: 'هُنَّ',
        explanation: 'هُنَّ is the separate 3rd person plural feminine pronoun ("They, feminine").'
      },
      {
        id: 'c4-q2',
        type: 'multiple_choice',
        prompt: 'Translate the ownership phrase "كِتَابُنَا" correctly:',
        options: ['His book', 'Their book', 'Our book', 'My book'],
        correctAnswer: 'Our book',
        explanation: 'The suffix "-naa" (ـنَا) stands for first person plural possessive ("Our").'
      }
    ]
  },
  {
    id: 5,
    slug: 'marifa-and-nakira',
    title: 'Marifa and Nakira',
    arabicTitle: 'المَعْرِفَة وَالنَّكِرَة',
    subtitle: 'The Specific and the General (A vs The)',
    category: 'Nouns & Basics',
    summary: 'Master the definite and indefinite nouns. Learn the crucial "AL" rule and why double vowels vanish.',
    lessons: [
      {
        id: 'c5-l1',
        title: 'General vs Specific Nouns',
        type: 'explanation',
        text: 'Every noun is either indefinite (Nakira - نَكِرَة) or definite (Marifa - مَعْرِفَة). Think of Nakira as "a" (e.g. a book) and Marifa as "the" (the book) or specific names of individuals.'
      },
      {
        id: 'c5-l2',
        title: 'Indefinite Sign: Tanween (Double Vowel)',
        type: 'rule',
        text: 'Most Indefinite general nouns end with a Tanween (Double Pesh "ـٌ", Double Zabar "ـً", or Double Zair "ـٍ").',
        list: [
          'رَجُلٌ (Rajulun) - A man (any man)',
          'بَيْتٌ (Baytun) - A house (any house)',
          'كِتَابٌ (Kitabun) - A book'
        ]
      },
      {
        id: 'c5-l3',
        title: 'Making a word Specific: The "Al" Rule',
        type: 'rule',
        text: 'By adding ال (Al-) to the front of a Nakira word, it becomes specific. Crucially, when ال comes, the tanween double ending DISAPPEARS and is replaced by a single vowel!',
        alertMessage: '❌ NEVER write: اَلْبَيْتٌ (Al-baytun). It MUST be: اَلْبَيْتُ (Al-baytu).'
      },
      {
        id: 'c5-l4',
        title: 'Comparison Table',
        type: 'table',
        tableHeaders: ['Indefinite (Nakira)', 'Add ال', 'Definite (Marifa)', 'Meaning'],
        tableRows: [
          ['بَيْتٌ (A house)', 'ال + بَيْتٌ', 'اَلْبَيْتُ', 'The house'],
          ['وَلَدٌ (A boy)', 'ال + وَلَدٌ', 'اَلْوَلَدُ', 'The boy'],
          ['كِتَابٌ (A book)', 'ال + كِتَابٌ', 'اَلْكِتَابُ', 'The book']
        ]
      }
    ],
    quiz: [
      {
        id: 'c5-q1',
        type: 'convert',
        prompt: 'Convert the general noun "رَجُلٌ" (a man) to its definite form (the man):',
        options: ['اَلرَّجُلٌ', 'اَلرَّجُلُ', 'رَجُلَانِ', 'الرَّجُلِ'],
        correctAnswer: 'اَلرَّجُلُ',
        explanation: 'Add "ال" and drop the tanween double-ending to a single damma (ُ): اَلرَّجُلُ.'
      },
      {
        id: 'c5-q2',
        type: 'identify',
        prompt: 'What type of word is "مَحْمُودٌ" (Mahmud - proper name)?',
        options: ['Nakira (Indefinite)', 'Marifa (Definite)'],
        correctAnswer: 'Marifa (Definite)',
        explanation: 'Names of people are naturally specific (Marifa), even though they might end with a tanween sound!'
      }
    ]
  },
  {
    id: 6,
    slug: 'mubtada-and-khabar',
    title: 'Mubtada and Khabar',
    arabicTitle: 'المُبْتَدَأ وَالخَبَر',
    subtitle: 'Building Simple Sentences (Subject & Predicate)',
    category: 'Sentences',
    summary: 'Construct your first full Arabic sentences using the classic formula: Definite Subject + Indefinite Predicate.',
    lessons: [
      {
        id: 'c6-l1',
        title: 'The Simple Nominal Formula',
        type: 'explanation',
        text: 'In Classical Arabic, a basic nominal sentence (without any verbs!) is made of two key components: Mubtada (المُبْتَدَأ - Subject) and Khabar (الخَبَر - Information/Predicate).'
      },
      {
        id: 'c6-l2',
        title: 'Mubtada + Khabar = Complete Sentence',
        type: 'rule',
        text: 'The absolute main rule you must master is:\n1. The Mubtada (Subject) is usually Marifa (Definite, starts with ال or is a name).\n2. The Khabar (Predicate) is usually Nakira (Indefinite, ending in Tanween).',
        alertMessage: 'Both parts of the sentence end in Damma / Dammatein (nominative case)!'
      },
      {
        id: 'c6-l3',
        title: 'Primary Sentence Examples',
        type: 'table',
        tableHeaders: ['Clause (Mubtada)', 'Information (Khabar)', 'Literally Translation', 'Full English meaning'],
        tableRows: [
          ['اَلْبَيْتُ (Marifa)', 'كَبِيرٌ (Nakira)', 'The house ... big', 'The house is big.'],
          ['مَحْمُودٌ (Marifa Name)', 'عَالِمٌ (Nakira)', 'Mahmud ... scholar', 'Mahmud is a scholar.']
        ]
      },
      {
        id: 'c6-l4',
        title: 'The Gender Consistency Rule',
        type: 'rule',
        text: 'If the Subject (Mubtada) is feminine, the predicate (Khabar) MUST match and also become feminine (usually by adding a ة).',
        list: [
          'Masculine: اَلرَّجُلُ صَالِحٌ (The man is pious)',
          'Feminine: اَلْبِنْتُ صَالِحَةٌ (The girl is pious)'
        ]
      }
    ],
    quiz: [
      {
        id: 'c6-q1',
        type: 'identify',
        prompt: 'In the sentence "اَلْبَيْتُ كَبِيرٌ" (The house is big), what is the grammatical role of "كَبِيرٌ"?',
        options: ['Mubtada', 'Khabar', 'Mudaf', 'Sifat'],
        correctAnswer: 'Khabar',
        explanation: 'كَبِيرٌ is the Khabar (Predicate) because it is indefinite and provides the crucial information about the house.'
      },
      {
        id: 'c6-q2',
        type: 'sentence_builder',
        prompt: 'Build the correct feminine sentence for "The female teacher is pious (صَالِحَة)":',
        options: ['اَلْمُدَرِّسُ صَالِحٌ', 'اَلْمُدَرِّسَةُ صَالِحَةٌ', 'مُدَرِّسَةٌ صَالِحَةٌ', 'اَلْمُدَرِّسَةُ صَالِحٌ'],
        correctAnswer: 'اَلْمُدَرِّسَةُ صَالِحَةٌ',
        explanation: 'The subject must be definite (اَلْمُدَرِّسَةُ) and the predicate must match its gender and be indefinite (صَالِحَةٌ).'
      }
    ]
  },
  {
    id: 7,
    slug: 'mudaf-and-mudaf-ilaih',
    title: 'Mudaf & Mudaf Ilaih',
    arabicTitle: 'المُضَاف وَالمُضَاف إِلَيْه',
    subtitle: 'The Ownership Duo (Possession Syntax)',
    category: 'Sentences',
    summary: 'Show possession and ownership by merging two nouns. Keep the item owned extremely light, and watch the owner drop to the Kasra state.',
    lessons: [
      {
        id: 'c7-l1',
        title: 'The Owner and The Owned',
        type: 'explanation',
        text: 'To say "Zaid\'s pen" or "The door of the house" in Classical Arabic, we link two nouns. They play distinct roles:\n- Mudaf (المُضَاف): The item owned (comes first).\n- Mudaf Ilaih (المُضَاف إِلَيْه): The owner (comes second).'
      },
      {
        id: 'c7-l2',
        title: 'Rules for the Owned Item (Mudaf)',
        type: 'rule',
        text: 'The Mudaf must stay very light! This means:\n- It NEVER takes "ال".\n- It NEVER takes a "Tanween" double sign.\n- It almost always ends in a single vowel.',
        alertMessage: '❌ NEVER write: اَلْقَلَمُ زَيْدٍ. It must be: قَلَمُ زَيْدٍ!'
      },
      {
        id: 'c7-l3',
        title: 'Rules for the Owner (Mudaf Ilaih)',
        type: 'rule',
        text: 'The owner is always placed in the Zeer (Kasra "ـِ" or "ـٍ") case! This is absolute.'
      },
      {
        id: 'c7-l4',
        title: 'Examples of Possession Syntax',
        type: 'table',
        tableHeaders: ['Type', 'Arabic Phrase', 'English Translation', 'Breakdown'],
        tableRows: [
          ['General Owner', 'قَلَمُ وَلَدٍ (Qalamu waladin)', 'A boy\'s pen', 'Double Kasra (indefinite)'],
          ['Specific Owner', 'قَلَمُ الْوَلَدِ (Qalamu al-waladi)', 'The boy\'s pen', 'Single Kasra (due to ال)'],
          ['Proper Name', 'قَلَمُ مَحْمُودٍ', 'Mahmud\'s pen', 'Proper name owner with Kasra'],
          ['Noble Phrase', 'كِتَابُ اللهِ (Kitahu l-laahi)', 'The Book of Allah', 'Allah is the Owner (Majroor)']
        ]
      }
    ],
    quiz: [
      {
        id: 'c7-q1',
        type: 'multiple_choice',
        prompt: 'Choose the correct first word (Mudaf) to complete "_______ الْبَيْتِ" (The door of the house):',
        options: ['اَلْبَابُ', 'بَابٌ', 'بَابُ', 'بَابِ'],
        correctAnswer: 'بَابُ',
        explanation: 'According to Mudaf rules, it must be light (no ال and no tanween). Thus, "بَابُ" with a single damma is correct.'
      },
      {
        id: 'c7-q2',
        type: 'multiple_choice',
        prompt: 'Which of the following is correct for "Zaid\'s book"?',
        options: ['كِتَابُ زَيْدٌ', 'كِتَابُ زَيْدٍ', 'كِتَابٌ زَيْدٍ', 'اَلْكِتَابُ زَيْدٍ'],
        correctAnswer: 'كِتَابُ زَيْدٍ',
        explanation: 'The owned book (Mudaf) is "كِتَابُ" (light), and Zaid (Mudaf Ilaih) takes the Kasra genitive case "زَيْدٍ".'
      }
    ]
  },
  {
    id: 8,
    slug: 'mausuf-and-sifat',
    title: 'Mausuf & Sifat',
    arabicTitle: 'المَوْصُوف وَالصِّفَة',
    subtitle: 'The Description Duo (Nouns & Adjectives)',
    category: 'Sentences',
    summary: 'Discover descriptive structures. Unlike English, Arabic adjectives follow their nouns and mimic them like a shadow.',
    lessons: [
      {
        id: 'c8-l1',
        title: 'Introduction to Adjectives',
        type: 'explanation',
        text: 'In English, we say "a pious man" (Adjective before Noun). In Arabic, the order is completely reversed! The described item comes first, and the descriptor follows:\n- Mausuf (المَوْصُوف) - "The Hero" being described (comes first).\n- Sifat (الصِّفَة) - The Adjective describing it (comes second).'
      },
      {
        id: 'c8-l2',
        title: 'The Shadow Rule ("Follow the Leader")',
        type: 'rule',
        text: 'The Sifat is like a shadow of the Mausuf. It must follow the leader in ALL four attributes:\n1. Vowel Case ending (both have Pesh, Zabar, or Zair).\n2. Gender (if noun is feminine, adjective must be feminine).\n3. Specificity (if noun has ال, adjective must have ال).\n4. Number (Singular/Dual/Plural compatibility).'
      },
      {
        id: 'c8-l3',
        title: 'Adjective Agreement Examples',
        type: 'table',
        tableHeaders: ['Class Type', 'Arabic Example', 'Meaning', 'Why? Match Attributes'],
        tableRows: [
          ['General (Nakira)', 'رَجُلٌ صَالِحٌ', 'A pious man', 'Both have double Pesh'],
          ['Specific (Marifa)', 'اَلرَّجُلُ الصَّالِحُ', 'The pious man', 'Both have ال and single Pesh'],
          ['Feminine', 'اِمْرَأَةٌ صَالِحَةٌ', 'A pious woman', 'Both end in ة'],
          ['Plural', 'رِجَالٌ صَالِحُونَ', 'Pious men', 'The suffix matches plural forms']
        ]
      }
    ],
    quiz: [
      {
        id: 'c8-q1',
        type: 'multiple_choice',
        prompt: 'Select the correctly aligned phrase for "The big house" (House is الْبَيْتُ, Big is كَبِير):',
        options: ['بَيْتٌ كَبِيرٌ', 'اَلْبَيْتُ كَبِيرٌ', 'اَلْكَبِيرُ بَيْتٌ', 'اَلْبَيْتُ الْكَبِيرُ'],
        correctAnswer: 'اَلْبَيْتُ الْكَبِيرُ',
        explanation: 'Since "The house" is designated with AL (اَلْبَيْتُ), its adjective must also match with AL and case: "اَلْكَبِيرُ".'
      },
      {
        id: 'c8-q2',
        type: 'multiple_choice',
        prompt: 'Translate correctly: "صَالِحٌ رَجُلٌ" is not valid. How do you write "A pious man"?',
        options: ['رَجُلٌ صَالِحٌ', 'رَجُلُ صَالِحٍ', 'اَلرَّجُلُ صَالِحٌ', 'رَجُلٌ الصَّالِحُ'],
        correctAnswer: 'رَجُلٌ صَالِحٌ',
        explanation: 'Noun (Mausuf) comes first: رَجُلٌ, followed by indefinite matching adjective: صَالِحٌ.'
      }
    ]
  },
  {
    id: 9,
    slug: 'arabic-numbers',
    title: 'Arabic Numbers',
    arabicTitle: 'الأَعْدَاد فِي العَرَبِيَّة',
    subtitle: 'Counting from 1 to 100+ Step-by-Step',
    category: 'Nouns & Basics',
    summary: 'Master counting from simple units, to double digits, compounding rules, and major scales.',
    lessons: [
      {
        id: 'c9-l1',
        title: 'Step 1: Digits 1 to 10',
        type: 'table',
        tableHeaders: ['Number', 'Arabic Script', 'Phonetic Pronunciation'],
        tableRows: [
          ['1', 'وَاحِدٌ', 'Waahidun'],
          ['2', 'اِثْنَانِ', 'Ithnaani'],
          ['3', 'ثَلَاثَةٌ', 'Salaasatun'],
          ['4', 'أَرْبَعَةٌ', 'Arba\'atun'],
          ['5', 'خَمْسَةٌ', 'Khamsatun'],
          ['6', 'سِتَّةٌ', 'Sittatun'],
          ['7', 'سَبْعَةٌ', 'Sab\'atun'],
          ['8', 'ثَمَانِيَةٌ', 'Samaaniyatun'],
          ['9', 'تِسْعَةٌ', 'Tis\'atun'],
          ['10', 'عَشَرَةٌ', 'Asharatun']
        ]
      },
      {
        id: 'c9-l2',
        title: 'Step 2: Dual Digit compounding (11 to 19)',
        type: 'rule',
        text: 'The rule is simple: Pick the base minor digit and append َعشَرَ (-ashara). For example:',
        list: [
          '11 : أَحَدَ عَشَرَ (Ahada \'ashara)',
          '12 : اِثْنَا عَشَرَ (Ithna \'ashara)',
          '13 : ثَلَاثَةَ عَشَرَ (Thalaathata \'ashara)',
          '19 : تِسْعَةَ عَشَرَ (Tis\'ata \'ashara)'
        ]
      },
      {
        id: 'c9-l3',
        title: 'Step 3: Decimals / The Tens Scale (20 to 90)',
        type: 'table',
        tableHeaders: ['NumberValue', 'Arabic Word', 'Pronunciation Pattern'],
        tableRows: [
          ['20', 'عِشْرُونَ', 'Ishroona'],
          ['30', 'ثَلَاثُونَ', 'Salaasoona'],
          ['40', 'أَرْبَعُونَ', 'Arba\'oona'],
          ['50', 'خَمْسُونَ', 'Khamsoona'],
          ['70', 'سَبْعُونَ', 'Sab\'oona'],
          ['90', 'تِسْعُونَ', 'Tis\'oona']
        ]
      },
      {
        id: 'c9-l4',
        title: 'Step 4: Compounding Digits (21-29)',
        type: 'rule',
        text: 'Standard pattern is: Minor digit + وَ (and) + Tens value.\nExample: 25 is "خَمْسَةٌ وَعِشْرُونَ" (Five and Twenty).'
      },
      {
        id: 'c9-l5',
        title: 'Major Counters',
        type: 'list',
        list: [
          '100 : مِائَةٌ (Mi\'atun)',
          '1,000 : أَلْفٌ (Alfun)',
          '1,000,000 : مِلْيُونٌ (Milyoonun)'
        ]
      }
    ],
    quiz: [
      {
        id: 'c9-q1',
        type: 'multiple_choice',
        prompt: 'Which Arabic word represents number 5?',
        options: ['سَبْعَةٌ', 'ثَلَاثَةٌ', 'خَمْسَةٌ', 'وَاحِدٌ'],
        correctAnswer: 'خَمْسَةٌ',
        explanation: 'خَمْسَةٌ means Five in classical numbers.'
      },
      {
        id: 'c9-q2',
        type: 'multiple_choice',
        prompt: 'Translate 24 into Classical Arabic syntax ("Four and Twenty"):',
        options: ['أَرْبَعَةَ عَشَرَ', 'أَرْبَعُونَ', 'أَرْبَعَةٌ وَعِشْرُونَ', 'عِشْرُونَ'],
        correctAnswer: 'أَرْبَعَةٌ وَعِشْرُونَ',
        explanation: 'We bundle minor four (أَرْبَعَةٌ) + "and" (وَ) + twenty (عِشْرُونَ) to get أَرْبَعَةٌ وَعِشْرُونَ.'
      }
    ]
  },
  {
    id: 10,
    slug: 'fil-the-verb',
    title: 'Fi‘l - The Arabic Verb',
    arabicTitle: 'الفِعْل فِي العَرَبِيَّة',
    subtitle: 'The 3 Standard Verb Eras and Root Secrets',
    category: 'Verbs & Conjugations',
    summary: 'Discover the root system (ف ع ل). Learn the difference between Past, Present-Future, and Command verbs.',
    lessons: [
      {
        id: 'c10-l1',
        title: 'The Narrative Moves',
        type: 'explanation',
        text: 'A sentence without action feels empty. By introducing a verb (Fi‘l - فِعْل), the story starts moving. Classical Arabic verbs are exceptionally structured, almost always morphing from a simple 3-letter root!'
      },
      {
        id: 'c10-l2',
        title: 'The 3 Distinct Verb Categories',
        type: 'table',
        tableHeaders: ['Verb Classification', 'Arabic Class Name', 'English Translation', 'Model Root Example'],
        tableRows: [
          ['Past Tense', 'مَاضِي', 'Finished Action (did)', 'كَتَبَ (He wrote)'],
          ['Present & Future', 'مُضَارِع', 'Ongoing / Future (does)', 'يَكْتُبُ (He writes / will write)'],
          ['Command & Negative', 'أَمْر / نَهْي', 'Direct actions (Do! / Don\'t!)', 'اُكْتُبْ / لَا تَكْتُبْ']
        ]
      },
      {
        id: 'c10-l3',
        title: 'The 3-Letter Root Secret (ك-ت-ب)',
        type: 'rule',
        text: 'Nearly every verb maps to a 3-letter semantic anchor. Let\'s look at root ك ت ب (relating to "writing"):\n- Past: كَتَبَ (He wrote)\n- Present: يَكْتُبُ (He writes)\n- Command: اُكْتُبْ (Write!)',
        alertMessage: 'We conjugate the root by changing suffixes and prefixes!'
      }
    ],
    quiz: [
      {
        id: 'c10-q1',
        type: 'identify',
        prompt: 'Identify the verb type of "يَكْتُبُ" (He writes):',
        options: ['Māḍī (Past)', 'Muḍāri‘ (Present/Future)', 'Amr (Command)'],
        correctAnswer: 'Muḍāri‘ (Present/Future)',
        explanation: 'Verbs starting with "يـ" like يَكْتُبُ are Muḍāri‘ (Present/Future).'
      },
      {
        id: 'c10-q2',
        type: 'multiple_choice',
        prompt: 'What are the 3 template root letters usually denoted in Arabic grammar models?',
        options: ['ا ب ت', 'ك ت ب', 'ف ع ل', 'ن ص ر'],
        correctAnswer: 'ف ع ل',
        explanation: 'Fā, \'Ayn, and Lām (ف-ع-ل) are the standard universal model letters used to demonstrate verb paradigms.'
      }
    ]
  },
  {
    id: 11.1,
    slug: 'fi-l-fa-il-maf-ool-bihi',
    title: 'Fi‘l, Fā‘il, and Maf‘ool Bihi',
    arabicTitle: 'الفِعْل، الفَاعِل، المَفْعُول بِهِ',
    subtitle: 'The Action, The Doer, and The Receiver',
    category: 'Sentences',
    summary: 'Build robust action sentences. Learn why the doer takes Damma and the receiver/object takes Fatha in the basic verbal sentence structure (Jumla Fi‘liyya).',
    lessons: [
      {
        id: 'c11.1-l1',
        title: 'The Active Clause Components',
        type: 'explanation',
        text: 'Classical Arabic verbal sentences contain three central parts:\n- Fi‘l (فِعْل): The active verb.\n- Fā‘il (فَاعِل): The Doer of the action.\n- Maf‘ool Bihi (مَفْعُول بِهِ): The Receiver / Direct Object of the action.'
      },
      {
        id: 'c11.1-l2',
        title: 'The Secret Ending Case Signs',
        type: 'rule',
        text: 'Case endings are super important in Classical Arabic. They explicitly specify syntax, even if we reshuffle the word order!',
        list: [
          'The doer (Fā‘il) always takes: Damma (ُـ or ٌـ) at the end (Nominative - Marfoo‘).',
          'The receiver (Maf‘ool Bihi) always takes: Fatha (َـ or ًـ) at the end (Accusative - Mansoor).'
        ]
      },
      {
        id: 'c11.1-l3',
        title: 'Analysing a Classic Example',
        type: 'chart',
        text: 'Let us decompose: قَرَأَ طَالِبٌ كِتَابًا (A student read a book)\n- قَرَأَ (Read) = Fi‘l (Verb)\n- طَالِبٌ (Student) = Fā‘il with Double Damma (Doer)\n- كِتَابًا (Book) = Maf‘ool Bihi with Double Fatha (Receiver)'
      }
    ],
    quiz: [
      {
        id: 'c11.1-q1',
        type: 'multiple_choice',
        prompt: 'In "شَرِبَ الْوَلَدُ اللَّبَنَ" (The boy drank the milk), why does "اللَّبَنَ" (milk) end with a Fatha vowel?',
        options: ['Because it is the Verb (Fi‘l)', 'Because it is the mudaf owner', 'Because it is the Object/Receiver (Maf‘ool Bihi)', 'Because it is the Doer (Fā‘il)'],
        correctAnswer: 'Because it is the Object/Receiver (Maf‘ool Bihi)',
        explanation: 'اللَّبَنَ is the object receiving the action. Therefore, it is marked with accusative fatha (َـ).'
      },
      {
        id: 'c11.1-q2',
        type: 'multiple_choice',
        prompt: 'Which sign is standard for the Active Doer (Fā‘il) at the end of the word?',
        options: ['Fatha', 'Damma', 'Kasra', 'Sukoon'],
        correctAnswer: 'Damma',
        explanation: 'A Fā‘il is always Marfoo‘ (Nominative), which is primarily indicated by a Damma.'
      }
    ]
  },
  {
    id: 11.2,
    slug: 'visible-fa-il',
    title: 'Visible Fā‘il',
    arabicTitle: 'الفَاعِل الظَّاهِر',
    subtitle: 'The Visible Doer',
    category: 'Sentences',
    summary: 'Understand the specific rules for when the doer of the sentence is directly specified as a visible noun following the verb.',
    lessons: [
      {
        id: 'c11.2-l1',
        title: 'The Rule of the Visible Doer (Fā‘il Ẓāhir)',
        type: 'explanation',
        text: 'When the Doer is a visible noun following the verb, the verb is always in the singular form (3rd person singular), even if the Doer itself is Dual or Plural! This is a core rule of Classical Arabic verbal syntax.'
      },
      {
        id: 'c11.2-l2',
        title: 'Matching Examples Grid',
        type: 'table',
        tableHeaders: ['Doer Number', 'Arabic Sentence', 'Transliteration', 'English Translation'],
        tableRows: [
          ['Singular', 'دَخَلَ الْمُعَلِّمُ', 'Dakhala al-mu‘allimu', 'The teacher entered'],
          ['Dual', 'دَخَلَ الْمُعَلِّمَانِ', 'Dakhala al-mu‘allimāni', 'The two teachers entered'],
          ['Plural', 'دَخَلَ الْمُعَلِّمُونَ', 'Dakhala al-mu‘allimūna', 'The teachers entered']
        ]
      },
      {
        id: 'c11.2-l3',
        title: 'Gender Matching with Visible Doer',
        type: 'rule',
        text: 'Although the verb stays singular regardless of the number of the doer, the verb MUST still match the visible doer in gender!',
        alertMessage: 'Example: دَخَلَتِ الْمُعَلِّمَةُ (The female teacher entered) / دَخَلَتِ الْمُعَلِّمَاتُ (The female teachers entered) - Note how the verb takes the feminine prefix/suffix "ت" and remains singular!'
      }
    ],
    quiz: [
      {
        id: 'c11.2-q1',
        type: 'multiple_choice',
        prompt: 'In Classical sentence structures, if the visible doer is Dual or Plural, what remains singular?',
        options: ['The Object/Maf‘ool', 'The Verb/Fi‘l', 'The pronoun ending', 'The case endings'],
        correctAnswer: 'The Verb/Fi‘l',
        explanation: 'If the Fā‘il is visible, the preceding verb remains SINGULAR in gender-matched form: e.g., كَتَبَ الطُّلَّابُ (not كَتَبُوا الطُّلَّابُ).'
      },
      {
        id: 'c11.2-q2',
        type: 'multiple_choice',
        prompt: 'Which of the following is grammatically correct for "The students (masculine plural) wrote physical letters"?',
        options: ['كَتَبُوا الطُّلَّابُ الرَّسَائِلَ', 'كَتَبَ الطُّلَّابُ الرَّسَائِلَ', 'كَتَبْتَ الطُّلَّابُ الرَّسَائِلَ', 'كَتَبَتِ الطُّلَّابُ الرَّسَائِلَ'],
        correctAnswer: 'كَتَبَ الطُّلَّابُ الرَّسَائِلَ',
        explanation: 'The verb (كَتَبَ) must be singular masculine because its visible doer (الطُّلَّابُ) is masculine plural.'
      }
    ]
  },
  {
    id: 11.3,
    slug: 'hidden-fa-il',
    title: 'Hidden Fā‘il',
    arabicTitle: 'الفَاعِل المُسْتَتِر',
    subtitle: 'The Hidden Doer',
    category: 'Sentences',
    summary: 'Explore how pronouns are embedded automatically inside verb paradigms to act as hidden or implied doers when no visible noun follows.',
    lessons: [
      {
        id: 'c11.3-l1',
        title: 'Implied and Attached Subjects',
        type: 'explanation',
        text: 'Every Classical Arabic verb MUST have a doer. If there is no visible noun following the verb to act as the Doer, then the Doer is found within the verb itself! This can be either an attached pronoun suffix (Dhameer Muttasil) or a completely hidden/implied pronoun (Dhameer Mustatir).'
      },
      {
        id: 'c11.3-l2',
        title: 'Verb Suffix Pronouns Grid',
        type: 'table',
        tableHeaders: ['Verb Form', 'Attached/Implied Subject', 'Meaning', 'Grammatical Doer Status'],
        tableRows: [
          ['كَتَبَ', 'Huwā (He)', 'He wrote', 'Mustatir (Hidden pronoun "He")'],
          ['كَتَبَتْ', 'Hiyā (She)', 'She wrote', 'Mustatir (Hidden pronoun "She")'],
          ['كَتَبْتُ', 'Anā (I)', 'I wrote', 'Muttasil (Attached "Tū" representing "I")'],
          ['كَتَبْنَا', 'Nahnu (We)', 'We wrote', 'Muttasil (Attached "Nā" representing "We")'],
          ['كَتَبُوا', 'Hum (They)', 'They wrote', 'Muttasil (Attached Wāw of Plural "Hum")']
        ]
      },
      {
        id: 'c11.3-l3',
        title: 'Prior Noun Rule',
        type: 'rule',
        text: 'A visible noun preceding the verb CANNOT be the grammatical Fā‘il. The Fā‘il must always occur AFTER or INSIDE the verb.',
        alertMessage: 'Example: فِي "الْوَلَدُ كَتَبَ" (The boy wrote), the Fā‘il inside كَتَبَ is the hidden pronoun (هُوَ) referring back to the boy!'
      }
    ],
    quiz: [
      {
        id: 'c11.3-q1',
        type: 'multiple_choice',
        prompt: 'In the verb "كَتَبْتُ" (I wrote), what is the Fā‘il (Doer)?',
        options: ['The object of the verb', 'The attached suffix pronoun "-tu" representing "I"', 'A completely invisible noun', 'There is no doer'],
        correctAnswer: 'The attached suffix pronoun "-tu" representing "I"',
        explanation: 'The suffix -tu (تُ) in كَتَبْتُ functions directly as the active attached pronoun doer.'
      },
      {
        id: 'c11.3-q2',
        type: 'multiple_choice',
        prompt: 'What does "Fā‘il Mustatir" mean in classical Arabic grammar?',
        options: ['A visible noun doer', 'An accusative object', 'A hidden or implied pronoun doer', 'A feminine suffix'],
        correctAnswer: 'A hidden or implied pronoun doer',
        explanation: 'Mustatir (مستتر) translated literally means concealed or covered, which represents an implied pronoun.'
      }
    ]
  },
  {
    id: 12.1,
    slug: 'what-is-mudari',
    title: 'What is Muḍāri‘?',
    arabicTitle: 'مَا هُوَ المُضَارِع؟',
    subtitle: 'The Living Verb',
    category: 'Verbs & Conjugations',
    summary: 'Understand the present-future verb system. Learn structural boundaries, the 4 Magic indicators, and how to define immediate future meanings.',
    lessons: [
      {
        id: 'c12.1-l1',
        title: 'The Muḍāri‘ Identity',
        type: 'explanation',
        text: 'The Muḍāri‘ (الْمُضَارِع) represents ongoing or future timeframes. Unlike the Past verb which changes only at the suffix, the Muḍāri‘ changes at BOTH the prefix (beginning) and the suffix (ending). All Muḍāri‘ verbs must start with one of the 4 Magic identity letters: (ي ، ت ، أ ، ن).'
      },
      {
        id: 'c12.1-l2',
        title: 'The 4 Magic Letters',
        type: 'table',
        tableHeaders: ['Letter Prefix', 'Who it represents', 'Model Example', 'English meaning'],
        tableRows: [
          ['يـ (Ya)', 'He / They', 'يَفْعَلُ', 'He does'],
          ['تـ (Ta)', 'She / You', 'تَفْعَلُ', 'She does / You do'],
          ['أَ (A)', 'I', 'أَفْعَلُ', 'I do'],
          ['نـ (Na)', 'We', 'نَفْعَلُ', 'We do']
        ]
      },
      {
        id: 'c12.1-l3',
        title: 'Instating absolute Future: Suffix سَـ',
        type: 'rule',
        text: 'By default, يَفْعَلُ is dual-meaning ("He does" or "He will do"). To enforce a clear, absolute future meaning, append prefix "سَـ" to the front!',
        alertMessage: 'Example: سَيَفْعَلُ (Sayaf‘alu) = He WILL do. The word سَوْفَ (Sawfa) can also be placed before the verb for a more distant future.'
      }
    ],
    quiz: [
      {
        id: 'c12.1-q1',
        type: 'multiple_choice',
        prompt: 'Convert the normal present verb "يَقْرَأُ" (He reads) into absolute future tense:',
        options: ['سَيَقْرَأُ', 'تَقْرَأُ', 'قَرَأَ سَـ', 'الْقِرَاءَةُ'],
        correctAnswer: 'سَيَقْرَأُ',
        explanation: 'We attach the prefix "سَـ" directly to the front to get سَيَقْرَأُ (He will read).'
      },
      {
        id: 'c12.1-q2',
        type: 'multiple_choice',
        prompt: 'Which letter prefix represents "We" in the Muḍāri‘ verb tense?',
        options: ['أَ (A)', 'تـ (Ta)', 'يـ (Ya)', 'نـ (Na)'],
        correctAnswer: 'نـ (Na)',
        explanation: 'The prefix "نـ" (Na) always represents the first-person plural subject "We".'
      }
    ]
  },
  {
    id: 12.2,
    slug: 'how-mudari-changes',
    title: 'How Muḍāri‘ Changes',
    arabicTitle: 'تَصْرِيف المُضَارِع',
    subtitle: 'The 14 Forms Made Easy',
    category: 'Verbs & Conjugations',
    summary: 'Learn the complete systematic 14-form conjugation table of present tense verbs across all singular, dual, and plural person perspectives.',
    lessons: [
      {
        id: 'c12.2-l1',
        title: 'The Suffix-Prefix Combinations',
        type: 'explanation',
        text: 'To navigate the 14 standard forms of the Muḍāri‘, we add suffix combinations representing dual "-āni", masculine plural "-ūna", feminine plural "-na", and second-person feminine singular "-īna".'
      },
      {
        id: 'c12.2-l2',
        title: 'The 14 Conjugations Table (Using يَفْعَلُ)',
        type: 'table',
        tableHeaders: ['Perspective', 'Singular', 'Dual', 'Plural'],
        tableRows: [
          ['3rd Person Masc (Absent)', 'يَفْعَلُ (He does)', 'يَفْعَلَانِ (They two do)', 'يَفْعَلُونَ (They all do)'],
          ['3rd Person Fem (Absent)', 'تَفْعَلُ (She does)', 'تَفْعَلَانِ (They two [f] do)', 'يَفْعَلْنَ (They all [f] do)'],
          ['2nd Person Masc (Present)', 'تَفْعَلُ (You do)', 'تَفْعَلَانِ (You two do)', 'تَفْعَلُونَ (You all do)'],
          ['2nd Person Fem (Present)', 'تَفْعَلِينَ (You [f] do)', 'تَفْعَلَانِ (You two [f] do)', 'تَفْعَلْنَ (You all [f] do)'],
          ['1st Person (Self)', 'أَفْعَلُ (I do)', '—', 'نَفْعَلُ (We do)']
        ]
      },
      {
        id: 'c12.2-l3',
        title: 'Feminine Plural Nuance',
        type: 'rule',
        text: 'Notice that feminine plural forms (يَفْعَلْنَ and تَفْعَلْنَ) end with a silent letter followed by Nun Fatha "نَ" (Nun of Femininity). These plural feminine verbs are indeclinable (Mabni) and never change their final vowels!',
        alertMessage: 'Example: يَكْتُبْنَ (They [f] write) remains exactly the same under all grammatical conditions.'
      }
    ],
    quiz: [
      {
        id: 'c12.2-q1',
        type: 'multiple_choice',
        prompt: 'What is the correct dual present form of "يَفْعَلُ" (representing "They two [m] do")?',
        options: ['يَفْعَلُونَ', 'تَفْعَلْنَ', 'يَفْعَلَانِ', 'تَفْعَلِينَ'],
        correctAnswer: 'يَفْعَلَانِ',
        explanation: 'Dual present verbs add the suffix -āni (ـَانِ) to represent exactly two subjects.'
      },
      {
        id: 'c12.2-q2',
        type: 'multiple_choice',
        prompt: 'Which form matches second-person feminine singular "أَنْتِ" (You [feminine singular] do)?',
        options: ['تَفْعَلُ', 'تَفْعَلِينَ', 'أَفْعَلُ', 'يَفْعَلْنَ'],
        correctAnswer: 'تَفْعَلِينَ',
        explanation: 'The suffix -īna (ـِينَ) along with prefix ta- corresponds to "Antī" (You [f. sg.]).'
      }
    ]
  },
  {
    id: 12.3,
    slug: 'secret-of-six-babs',
    title: 'The Secret of the Six Bābs',
    arabicTitle: 'أَبْوَاب الفِعْل الثُّلَاثِي',
    subtitle: 'The Middle Sound Change',
    category: 'Verbs & Conjugations',
    summary: 'Master the systematic middle-vowel shifts as verbs transition from Past to Present, helping you vocalize any verb like a native.',
    lessons: [
      {
        id: 'c12.3-l1',
        title: 'Middle Vowel Shift Rule (ʿAyn Kalimah)',
        type: 'explanation',
        text: 'When moving from Past (Māḍī) to Present (Muḍāri‘), the vowel of the middle root letter (known as the "ʿAyn" letter of the root ف-ع-ل) changes. This sound change creates the Six standard historical Bābs (doors) of the tri-literal verb.'
      },
      {
        id: 'c12.3-l2',
        title: 'The Great Six Bābs',
        type: 'table',
        tableHeaders: ['Bāb Name', 'Vowel Change (Past → Present)', 'Past Form', 'Present Form', 'Meaning'],
        tableRows: [
          ['Bab Nasara (ن)', 'A → U', 'نَصَرَ', 'يَنْصُرُ', 'To Help / Assist'],
          ['Bab Daraba (ض)', 'A → I', 'ضَرَبَ', 'يَضْرِبُ', 'To Hit / Strike'],
          ['Bab Fataha (ف)', 'A → A', 'فَتَحَ', 'يَفْتَحُ', 'To Open'],
          ['Bab Sami‘a (س)', 'I → A', 'سَمِعَ', 'يَسْمَعُ', 'To Hear'],
          ['Bab Karuma (ك)', 'U → U', 'كَرُمَ', 'يَكْرُمُ', 'To be Generous'],
          ['Bab Hasiba (ح)', 'I → I', 'حَسِبَ', 'يَحْسِبُ', 'To Think / Deem']
        ]
      },
      {
        id: 'c12.3-l3',
        title: 'Vocalizing Unmarked Verbs',
        type: 'rule',
        text: 'Because standard printed Arabic often omits vowels, knowing the Bāb is the ONLY way to choose the correct middle vowel in the present tense.',
        alertMessage: 'Dictionaries specify the Bāb using the single letter shorthand: like (ن) next to نَصَرَ.'
      }
    ],
    quiz: [
      {
        id: 'c12.3-q1',
        type: 'multiple_choice',
        prompt: 'Which Bāb is represented by active shift "فَتَحَ → يَفْتَحُ"?',
        options: ['A to U (Nasara)', 'A to I (Daraba)', 'A to A (Fataha)', 'I to A (Sami‘a)'],
        correctAnswer: 'A to A (Fataha)',
        explanation: 'Both the middle letter "تَ" in past and "تَ" in present keep a Fatha vowel, matching the A-to-A Fataha paradigm.'
      },
      {
        id: 'c12.3-q2',
        type: 'multiple_choice',
        prompt: 'Vowel shift "A → I" (Fatha in past, Kasra in present) belongs to which classic Bāb?',
        options: ['Bāb Sami‘a', 'Bāb Nasara', 'Bāb Daraba', 'Bāb Karuma'],
        correctAnswer: 'Bāb Daraba',
        explanation: 'Bāb Daraba (ضَرَبَ → يَضْرِبُ) has an "a → i" vocalization shift of its middle root letter.'
      }
    ]
  },
  {
    id: 13,
    slug: 'al-amr-command',
    title: 'Al-Amr - The Command Verb',
    arabicTitle: 'الأَمْر فِي العَرَبِيَّة',
    subtitle: 'How to Give Active Orders',
    category: 'Verbs & Conjugations',
    summary: 'Master commands (Do this!). Learn the 3-step formula to morph present verbs into direct active commands.',
    lessons: [
      {
        id: 'c13-l1',
        title: 'Who Receives Commands?',
        type: 'explanation',
        text: 'In Classical Arabic, commands can only be delivered directly to the person in front of you (2nd Person - الحاضر). The template starts from the standard Muḍāri‘ Hāḍir ("You" form).'
      },
      {
        id: 'c13-l2',
        title: 'The 3-Step Command Formula',
        type: 'rule',
        text: 'To make an active Amr command, perform these three swift steps:\n1. Remove the "تـ" prefix completely from the front.\n2. Make the final ending letter silent (Sukoon "ـْ").\n3. Add a helping Alif (ا) with its proper vowel: If the middle letter has a Damma (ُـ), the Alif gets a Damma (اُ). Otherwise, the Alif gets a Kasra (اِ).',
        alertMessage: 'Example for "You help" (تَنْصُرُ): Remove تـ → نْصُرُ → Sukoon ending → نْصُرْ → Add Alif (middle is damma "صُ") → اُنْصُرْ (Unsur - Help!)'
      },
      {
        id: 'c13-l3',
        title: 'Classical Amr Suffix Models',
        type: 'table',
        tableHeaders: ['Standard Present (You)', 'Amr Command', 'Pronunciation', 'Audience'],
        tableRows: [
          ['تَفْعَلُ', 'اِفْعَلْ', 'If\'al', 'One Man'],
          ['تَفْعَلُونَ', 'اِفْعَلُوا', 'If\'aloo', 'Many Men'],
          ['تَفْعَلِينَ', 'اِفْعَلِي', 'If\'alee', 'One Woman'],
          ['تَفْعَلْنَ', 'اِفْعَلْنَ', 'If\'alna', 'Many Women']
        ]
      }
    ],
    quiz: [
      {
        id: 'c13-q1',
        type: 'multiple_choice',
        prompt: 'Derive the active command form for "تَكْتُبُ" (You write):',
        options: ['اِكْتُبْ', 'اُكْتُبْ', 'لَا تَكْتُبْ', 'كَتَبَ'],
        correctAnswer: 'اُكْتُبْ',
        explanation: 'Remove تـ -> كْتُبُ -> sukoon ending -> كْتُبْ -> Add Alif with Damma (since middle letter "تُ" has damma) -> اُكْتُبْ.'
      },
      {
        id: 'c13-q2',
        type: 'multiple_choice',
        prompt: 'Which helping prefix vowel goes on Alif if the middle verb letter is Fatha (َـ)?',
        options: ['Damma (ُا)', 'Kasra (ِا)', 'Fatha (َا)'],
        correctAnswer: 'Kasra (ِا)',
        explanation: 'If the middle letter is Fatha or Kasra, the helping Alif always takes a Kasra (ِا).'
      }
    ]
  },
  {
    id: 14,
    slug: 'an-nahy-negative',
    title: 'An-Nahy - The Negative Command',
    arabicTitle: 'النَّهْي عَن الفِعْل',
    subtitle: 'How to Prevent Actions (Do Not Do!)',
    category: 'Verbs & Conjugations',
    summary: 'Learn how to forbid actions. Contrast the structure of positive commands with negative commands.',
    lessons: [
      {
        id: 'c14-l1',
        title: 'Forbidding Actions',
        type: 'explanation',
        text: 'While Amr commands instruct actions ("Eat!"), An-Nahy forbids them ("Do not eat!"). Its syntax is highly uniform and relates closely to the present addressee form.'
      },
      {
        id: 'c14-l2',
        title: 'The Forbidding Formula',
        type: 'rule',
        text: 'Unlike Amr, we KEEP the starting "تـ" letter! We do only two actions:\n1. Place the negative forbidding particle "لَا" (Laa) in front.\n2. Force the final letter of the verb into silent Sukoon state.',
        alertMessage: 'Example for "You write" (تَكْتُبُ): Add لَا → لَا تَكْتُبُ → Sukoon ending → لَا تَكْتُبْ (Laa taktub - Do not write!)'
      },
      {
        id: 'c14-l3',
        title: 'Contrast Grid: Amr vs Nahy',
        type: 'table',
        tableHeaders: ['Verb Objective', 'Positive Command (Amr)', 'Negative Command (Nahy)', 'Meaning'],
        tableRows: [
          ['To go (M)', 'اِذْهَبْ (Idhhab!)', 'لَا تَذْهَبْ (Laa tadhhab!)', 'Go! / Do not go!'],
          ['To write (M)', 'اُكْتُبْ (Uktub!)', 'لَا تَكْتُبْ (Laa taktub!)', 'Write! / Do not write!'],
          ['To open (F)', 'اِفْتَحِي (Iftahi!)', 'لَا تَفْتَحِي (Laa taftahi!)', 'Open! / Do not open!']
        ]
      }
    ],
    quiz: [
      {
        id: 'c14-q1',
        type: 'multiple_choice',
        prompt: 'Build the correct Negative Command for "Do not play!" (You play is تَلوين, root ل ع ب):',
        options: ['اِلْعَبْ', 'لَا تَلْعَبْ', 'لَا يَلْعَبُ', 'لَا تَلْعَبُ'],
        correctAnswer: 'لَا تَلْعَبْ',
        explanation: 'Add لَا to present tense and place sukoon on the ending letter: لَا تَلوين + sukoon = لَا تَلْعَبْ.'
      }
    ]
  },
  {
    id: 15.1,
    slug: 'what-is-a-harf',
    title: 'What is a Harf? & Hurūf al-Jarr',
    arabicTitle: 'الحُرُوف الجَارّة وَالبُحُور',
    subtitle: 'Particles & Grammatical Pulling Connectors',
    category: 'Particles',
    summary: 'Explore the third building block of Arabic speech: Particles. Master the Hurūf al-Jarr and watch them pull nouns down into Kasra.',
    lessons: [
      {
        id: 'c15-l1',
        title: 'The Three Pillars of Speech',
        type: 'explanation',
        text: 'Classical grammarians split all Arabic vocabulary into exactly three categories:\n1. Ism (اِسم) - Noun (thing or agent).\n2. Fi‘l (فِعْل) - Active Verb.\n3. Harf (حَرْف) - Particle (prepositions or connectors that cannot give a complete meaning on their own).'
      },
      {
        id: 'c15-l2',
        title: 'Hurūf al-Jarr: The Pulling Particles',
        type: 'rule',
        text: 'The most important particles are "Hurūf al-Jarr" (الْحُرُوف الْجَارَّة). When one of these prepositions enters in front of an Ism, it automatically pulls the noun into the Kasra case state (known as Majroor)!',
        alertMessage: '❌ NEVER say: فِي الْبَيْتُ. It MUST be: فِي الْبَيْتِ!'
      },
      {
        id: 'c15-l3',
        title: 'Key Prepositions to Memorize',
        type: 'table',
        tableHeaders: ['Preposition', 'Meaning', 'Sample Phrase', 'Translated meaning'],
        tableRows: [
          ['فِي (Fee)', 'In', 'فِي الْمَسْجِدِ', 'In the masjid'],
          ['مِنْ (Min)', 'From', 'مِنَ اللهِ', 'From Allah'],
          ['عَلَى (\'Alaa)', 'On / Upon', 'عَلَى الْمَكْتَبِ', 'On the desk'],
          ['إِلَى (Ilaa)', 'To / Towards', 'إِلَى الْمَدْرَسَةِ', 'To the school']
        ]
      },
      {
        id: 'c15-l4',
        title: 'The Sticky Letters and Alif Drops',
        type: 'rule',
        text: 'Some Hurūf consist of only a single letter and stick directly to the noun:\n- بِـ (Bi - with): بِالْقَلَمِ (with the pen)\n- كَـ (Ka - like): كَالْأَسَدِ (like the lion)\n- لِـ (Li - for): When لِـ connects to a word with "ال", the Alif is dropped completely! Example: لِلَّهِ (For Allah).',
        alertMessage: 'The Wāw of Oath (وَ) also acts as a Harf Jarr! e.g., وَاللهِ (By Allah) causes the word Allah to take a Kasra ending!'
      }
    ],
    quiz: [
      {
        id: 'c15-q1',
        type: 'multiple_choice',
        prompt: 'Which is correct for "In the house"?',
        options: ['فِي الْبَيْتُ', 'فِي الْبَيْتَ', 'فِي الْبَيْتِ', 'فِي بَيْتٍ'],
        correctAnswer: 'فِي الْبَيْتِ',
        explanation: 'The preposition فِي (in) pulls the noun into the genitive majroor state, giving the word a Kasra ending: فِي الْبَيْتِ.'
      },
      {
        id: 'c15-q2',
        type: 'multiple_choice',
        prompt: 'Why does God\'s name end in Kasra in the oath "وَاللهِ" (By Allah)?',
        options: ['Because it is an active doer', 'Because the Wāw acts as a Harf Jarr', 'Because of round Ta rules', 'Because of the mudaf item'],
        correctAnswer: 'Because the Wāw acts as a Harf Jarr',
        explanation: 'In oaths, the "Wāw of Oath" functions exactly as a Harf Jarr preposition, pulling the following noun into the Kasra majroor state.'
      }
    ]
  },
  {
    id: 15.2,
    slug: 'huruf-al-atf',
    title: 'Hurūf al-ʿAṭf (Conjunctions)',
    arabicTitle: 'حُرُوف العَطْف',
    subtitle: 'Connecting Words and Sentences',
    category: 'Particles',
    summary: 'Learn how to connect nouns, verbs, and sentences together using the standard Arabic coordinating conjunctions such as Wa, Fa, Thumma, and more.',
    lessons: [
      {
        id: 'c15.2-l1',
        title: 'What is ʿAṭf?',
        type: 'explanation',
        text: 'Hurūf al-ʿAṭf (حُرُوف العَطْف) are particles used to join two words, phrases, or clauses. The word before the particle is called Ma\'tōof ʿAlayh (مَعْطُوف عَلَيْهِ) and the word after it is called Ma\'tōof (مَعْطُوف). The Ma\'tōof copies the grammatical case (Nom, Acc, or Gen) of the Ma\'tōof ʿAlayh!'
      },
      {
        id: 'c15.2-l2',
        title: 'Standard Conjunctions Grid',
        type: 'table',
        tableHeaders: ['Conjunction', 'Meaning', 'Grammatical Nuance', 'Sample Example', 'English Translation'],
        tableRows: [
          ['وَ (Wa)', 'And', 'Simple combination (same time/general)', 'كَتَبَ حَامِدٌ وَعَلِيٌّ', 'Hamid and Ali wrote'],
          ['فَـ (Fa)', 'And so / Then immediately', 'Sequential with no time delay', 'دَخَلَ خَالِدٌ فَعُمَرُ', 'Khalid entered, then immediately Umar'],
          ['ثُمَّ (Thumma)', 'Then later', 'Sequential with some time delay', 'قَرَأْتُ الْكِتَابَ ثُمَّ الدَّرْسَ', 'I read the book, then later the lesson'],
          ['أَوْ (Aw)', 'Or', 'Choice or alternative options', 'كُلْ تُفَّاحًا أَوْ عِنَبًا', 'Eat an apple or grapes']
        ]
      },
      {
        id: 'c15.2-l3',
        title: 'Case-Matching Rule of ʿAṭf',
        type: 'rule',
        text: 'Because the Ma\'tōof follows the Ma\'tōof ʿAlayh, you must match the case endings exactly! If the first name is Nominative, the connected name must be Nominative too.',
        alertMessage: 'Example: جَاءَ الرَّجُلُ وَالْوَلَدُ (The man and the boy came). BOTH end in a Damma because they are connecting subjects!'
      }
    ],
    quiz: [
      {
        id: 'c15.2-q1',
        type: 'multiple_choice',
        prompt: 'What is the key grammatical rule of Hurūf al-ʿAṭf regarding case endings?',
        options: [
          'The connected word always takes a Kasra',
          'The connected word copies the case ending of the first word (Ma\'tōof ʿAlayh)',
          'The connected word always takes a Fatha',
          'Conjunctions do not affect case endings'
        ],
        correctAnswer: 'The connected word copies the case ending of the first word (Ma\'tōof ʿAlayh)',
        explanation: 'In ʿAṭf, the second word (Ma\'tōof) always inherits the original grammatical state (I\'rab) of the first word.'
      },
      {
        id: 'c15.2-q2',
        type: 'multiple_choice',
        prompt: 'Which conjunction represents sequential events with immediate succession (no delay)?',
        options: ['وَ (Wa)', 'أَوْ (Aw)', 'فَـ (Fa)', 'ثُمَّ (Thumma)'],
        correctAnswer: 'فَـ (Fa)',
        explanation: 'The particle فَـ (Fa) signifies immediate succession, while ثُمَّ (Thumma) indicates a pause/sequence with a delay.'
      }
    ]
  },
  {
    id: 15.3,
    slug: 'inna-and-its-sisters',
    title: 'Inna and its Sisters',
    arabicTitle: 'إِنَّ وَأَخَوَاتُهَا',
    subtitle: 'Emphasis and Modifying Particles',
    category: 'Particles',
    summary: 'Discover the powerful class of particles that enter a nominal sentence, making the subject take a Fatha while leaving the predicate in its original Nominative state.',
    lessons: [
      {
        id: 'c15.3-l1',
        title: 'The Role of Inna',
        type: 'explanation',
        text: 'Inna (إِنَّ) means "Indeed" or "Verily". It is a particle of emphasis. When Inna or one of its sister particles enters a nominal sentence (Mubtada and Khabar), it changes the subject (Mubtada) from Nominative (Marfoo\') to Accusative (Mansoor) state with a Fatha ending. The subject is then called Ism Inna (اِسْم إِنَّ). The predicate (Khabar) remains Marfoo\' (with Damma) and is called Khabar Inna (خَبَر إِنَّ).'
      },
      {
        id: 'c15.3-l2',
        title: 'Inna\'s Sister Particles',
        type: 'table',
        tableHeaders: ['Sister Particle', 'Meaning', 'Purpose / Usage', 'Before Inna', 'With Inna'],
        tableRows: [
          ['إِنَّ (Inna)', 'Indeed / Verily', 'Absolute Emphasis', 'اللَّهُ غَفُورٌ (Allah is Forgiving)', 'إِنَّ اللَّهَ غَفُورٌ (Indeed Allah is Forgiving)'],
          ['أَنَّ (Anna)', 'That', 'Connecting clauses', 'الْوَلَدُ مَرِيضٌ (The boy is sick)', 'عَلِمْتُ أَنَّ الْوَلَدَ مَرِيضٌ (I learned that the boy is sick)'],
          ['كَأَنَّ (Ka-anna)', 'As if / Like', 'Resemblance / Simile', 'الأَسَدُ شُجَاعٌ (The lion is brave)', 'كَأَنَّ الأَسَدَ شُجَاعٌ (As if the lion is brave)'],
          ['لَكِنَّ (Lakinna)', 'But / However', 'Correction / Contrast', 'الْبَيْتُ جَمِيلٌ', 'الْبَيْتُ جَمِيلٌ لَكِنَّ الْغُرْفَةَ صَغِيرَةٌ (The house is beautiful, but the room is small)']
        ]
      },
      {
        id: 'c15.3-l3',
        title: 'The Case Transition Rule',
        type: 'rule',
        text: 'Always remember that only the SUBJECT (Ism Inna) changes to its Fatha ending. The PREDICATE (Khabar Inna) stays as a Damma!',
        alertMessage: '❌ NEVER say: إِنَّ اللَّهَ غَفُورًا. You MUST say: إِنَّ اللَّهَ غَفُورٌ.'
      }
    ],
    quiz: [
      {
        id: 'c15.3-q1',
        type: 'multiple_choice',
        prompt: 'What is the exact grammatical effect of "إِنَّ" (Inna) when it enters a standard nominal sentence?',
        options: [
          'It changes both the subject and predicate to Fatha',
          'It changes the subject to Fatha (Mansoor) and keeps the predicate with Damma (Marfoo\')',
          'It changes the predicate to Kasra',
          'It has no grammatical impact'
        ],
        correctAnswer: 'It changes the subject to Fatha (Mansoor) and keeps the predicate with Damma (Marfoo\')',
        explanation: 'Inna modifies the subject (Mubtada) into the Mansoor (accusative) state, while the predicate (Khabar) remains in its original Marfoo\' state.'
      },
      {
        id: 'c15.3-q2',
        type: 'multiple_choice',
        prompt: 'What is the meaning of "كَأَنَّ" (Ka-anna)?',
        options: ['But (Contrast)', 'Indeed (Emphasis)', 'As if / Like (Resemblance)', 'Perhaps (Hope)'],
        correctAnswer: 'As if / Like (Resemblance)',
        explanation: 'كَأَنَّ is a sister of Inna used to indicate likeness or approximation, translated as "as if" or "like".'
      }
    ]
  }
];
