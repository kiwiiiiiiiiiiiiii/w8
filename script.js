/* ══════════════════════════════════════════════════════════════
   PRINCIPAL EXAM 2026 — राष्ट्रीय शिक्षा नीति 2020 Quiz Engine
   100 VERY HARD Level MCQs — National Education Policy 2020
   ══════════════════════════════════════════════════════════════ */

// ── QUESTION DATA (100 Questions — Very Hard Level) ──
const quizData = [
  {
    q: "NEP 2020 का मसौदा तैयार करने वाली कस्तूरीरंगन समिति में अध्यक्ष सहित कुल कितने सदस्य थे?",
    options: ["7", "8", "9", "11"],
    correct: 2,
    explanation: "कस्तूरीरंगन समिति में अध्यक्ष डॉ. के. कस्तूरीरंगन सहित कुल 9 सदस्य थे। इस समिति का गठन जून 2017 में किया गया था।"
  },
  {
    q: "कस्तूरीरंगन समिति ने अपना मसौदा (Draft NEP) किस तिथि को केंद्र सरकार को सौंपा?",
    options: ["31 मई 2019", "15 दिसम्बर 2018", "29 जुलाई 2020", "30 जून 2019"],
    correct: 0,
    explanation: "कस्तूरीरंगन समिति ने NEP का मसौदा 31 मई 2019 को केंद्रीय मानव संसाधन विकास मंत्रालय को सौंपा।"
  },
  {
    q: "NEP 2020 भारत की कौन-सी राष्ट्रीय शिक्षा नीति है?",
    options: ["दूसरी", "तीसरी", "चौथी", "पाँचवीं"],
    correct: 1,
    explanation: "NEP 2020 स्वतंत्र भारत की तीसरी राष्ट्रीय शिक्षा नीति है। पहली NEP 1968 (कोठारी आयोग आधारित) और दूसरी NEP 1986 (राजीव गांधी काल) थी।"
  },
  {
    q: "NEP 2020 को केंद्रीय मंत्रिमंडल ने किस तिथि को अनुमोदित किया?",
    options: ["15 अगस्त 2020", "29 जुलाई 2020", "26 जनवरी 2020", "5 जून 2020"],
    correct: 1,
    explanation: "NEP 2020 को केंद्रीय मंत्रिमंडल ने 29 जुलाई 2020 को अनुमोदित किया।"
  },
  {
    q: "NEP 2020 ने पिछली NEP 1986 को कितने वर्षों बाद प्रतिस्थापित किया?",
    options: ["30 वर्ष", "32 वर्ष", "34 वर्ष", "36 वर्ष"],
    correct: 2,
    explanation: "NEP 1986 (1992 में संशोधित) को 34 वर्षों के बाद NEP 2020 ने प्रतिस्थापित किया (1986 से 2020 = 34 वर्ष)।"
  },
  {
    q: "T.S.R. सुब्रमण्यम समिति (2016) द्वारा प्रस्तुत NEP मसौदे को अस्वीकार करने के बाद कस्तूरीरंगन समिति का गठन किस वर्ष हुआ?",
    options: ["2016", "2017", "2018", "2019"],
    correct: 1,
    explanation: "T.S.R. सुब्रमण्यम समिति के मसौदे को अस्वीकार करने के बाद जून 2017 में कस्तूरीरंगन समिति का गठन किया गया।"
  },
  {
    q: "NEP 2020 की 5+3+3+4 संरचना में 'Foundational Stage' में प्री-स्कूल के कितने वर्ष शामिल हैं?",
    options: ["1 वर्ष", "2 वर्ष", "3 वर्ष", "4 वर्ष"],
    correct: 2,
    explanation: "Foundational Stage (5 वर्ष) में 3 वर्ष प्री-स्कूल (आयु 3–6) + कक्षा 1–2 (आयु 6–8) शामिल हैं।"
  },
  {
    q: "NEP 2020 के अनुसार 5+3+3+4 संरचना में कुल कितने वर्ष की स्कूली शिक्षा होगी?",
    options: ["12 वर्ष", "14 वर्ष", "15 वर्ष", "16 वर्ष"],
    correct: 2,
    explanation: "5+3+3+4 = 15 वर्ष (आयु 3–18 वर्ष)। इसमें 3 वर्ष प्री-स्कूल + 12 वर्ष स्कूली शिक्षा = कुल 15 वर्ष।"
  },
  {
    q: "NEP 2020 के अनुसार 'Middle Stage' (कक्षा 6–8) में किस प्रकार के शिक्षण पर विशेष बल दिया गया?",
    options: [
      "केवल पुस्तक-आधारित शिक्षण",
      "अनुभवात्मक अधिगम (Experiential Learning), कला-एकीकृत शिक्षा एवं विषय शिक्षकों द्वारा शिक्षण",
      "केवल व्यावसायिक शिक्षण",
      "केवल परियोजना कार्य"
    ],
    correct: 1,
    explanation: "Middle Stage (कक्षा 6–8) में अनुभवात्मक अधिगम, कला-एकीकृत शिक्षा (Art-Integrated Education), खेल-एकीकृत शिक्षा, विषय शिक्षकों द्वारा शिक्षण और कक्षा 6 से व्यावसायिक शिक्षा/कोडिंग की शुरुआत पर बल दिया गया।"
  },
  {
    q: "NEP 2020 में 'Foundational Literacy and Numeracy' (FLN) मिशन का लक्ष्य किस वर्ष तक प्राप्त करना था और इसके लिए कौन-सा राष्ट्रीय मिशन शुरू किया गया?",
    options: [
      "2025 — NIPUN Bharat",
      "2030 — Samagra Shiksha",
      "2025 — DIKSHA Mission",
      "2030 — PM eVIDYA"
    ],
    correct: 0,
    explanation: "NEP 2020 ने 2025 तक FLN का लक्ष्य रखा। इसके लिए 5 जुलाई 2021 को 'NIPUN Bharat' (National Initiative for Proficiency in Reading with Understanding and Numeracy) मिशन शुरू किया गया।"
  },
  {
    q: "NIPUN Bharat का पूर्ण रूप (Full Form) क्या है?",
    options: [
      "National Initiative for Proficiency in Reading with Understanding and Numeracy",
      "National Institute for Progressive Understanding of Numeracy",
      "National Integrated Programme for Universal Numeracy",
      "National Initiative for Primary Understanding and Numeracy"
    ],
    correct: 0,
    explanation: "NIPUN Bharat = National Initiative for Proficiency in Reading with Understanding and Numeracy। यह 5 जुलाई 2021 को शुरू किया गया।"
  },
  {
    q: "NEP 2020 ने शिक्षा पर GDP का 6% खर्च करने का लक्ष्य रखा। 2020 में यह खर्च लगभग कितना था?",
    options: ["2.5%", "3.1%", "4.43%", "5.2%"],
    correct: 2,
    explanation: "NEP 2020 के अनुसार 2020 में शिक्षा पर GDP का लगभग 4.43% खर्च हो रहा था, जबकि लक्ष्य 6% का रखा गया।"
  },
  {
    q: "NEP 2020 ने मातृभाषा/स्थानीय भाषा में शिक्षण कम-से-कम किस कक्षा तक अनिवार्य करने की सिफारिश की और अधिमानतः (preferably) किस कक्षा तक?",
    options: [
      "कक्षा 3 तक अनिवार्य, कक्षा 5 तक अधिमानतः",
      "कक्षा 5 तक अनिवार्य, कक्षा 8 और उससे आगे अधिमानतः",
      "कक्षा 8 तक अनिवार्य, कक्षा 10 तक अधिमानतः",
      "कक्षा 10 तक अनिवार्य, कक्षा 12 तक अधिमानतः"
    ],
    correct: 1,
    explanation: "NEP 2020 ने कम-से-कम कक्षा 5 तक और अधिमानतः कक्षा 8 और उससे आगे तक मातृभाषा/घर की भाषा/स्थानीय भाषा में शिक्षण की सिफारिश की।"
  },
  {
    q: "NEP 2020 ने 'त्रि-भाषा सूत्र' (Three-Language Formula) के बारे में क्या विशेष प्रावधान किया?",
    options: [
      "तीनों भाषाओं में हिंदी अनिवार्य होगी",
      "तीनों भाषाएँ राज्य सरकार द्वारा चुनी जाएँगी — किसी भी राज्य पर कोई भाषा थोपी नहीं जाएगी",
      "अंग्रेजी अनिवार्य रूप से तीसरी भाषा होगी",
      "संस्कृत अनिवार्य रूप से तीसरी भाषा होगी"
    ],
    correct: 1,
    explanation: "NEP 2020 ने स्पष्ट किया कि त्रि-भाषा सूत्र में तीनों भाषाओं का चयन राज्य, क्षेत्र एवं छात्र द्वारा किया जाएगा — किसी भी राज्य पर कोई भाषा थोपी नहीं जाएगी।"
  },
  {
    q: "NEP 2020 में 'PARAKH' किसके अधीन स्थापित किया गया?",
    options: ["UGC", "CBSE", "NCERT", "शिक्षा मंत्रालय"],
    correct: 2,
    explanation: "PARAKH (Performance Assessment, Review, and Analysis of Knowledge for Holistic Development) NCERT के अधीन एक राष्ट्रीय मूल्यांकन केंद्र (National Assessment Centre) के रूप में स्थापित किया गया।"
  },
  {
    q: "NEP 2020 ने कक्षा 3, 5 एवं 8 में किस प्रकार की परीक्षा का प्रावधान किया?",
    options: [
      "बोर्ड परीक्षा",
      "उपयुक्त प्राधिकारी द्वारा राज्य जनगणना परीक्षा (State Census Exams)",
      "कोई परीक्षा नहीं",
      "केवल आंतरिक मूल्यांकन"
    ],
    correct: 1,
    explanation: "NEP 2020 ने कक्षा 3, 5 एवं 8 में उपयुक्त प्राधिकारी द्वारा State Census Examinations (राज्य जनगणना परीक्षा) आयोजित करने का प्रावधान किया जो स्कूल परीक्षाओं को प्रतिस्थापित नहीं बल्कि पूरक होंगी।"
  },
  {
    q: "NEP 2020 ने बोर्ड परीक्षाओं (कक्षा 10 एवं 12) में वर्ष में कितनी बार परीक्षा देने का विकल्प प्रस्तावित किया?",
    options: ["1 बार", "2 बार", "3 बार", "असीमित बार"],
    correct: 1,
    explanation: "NEP 2020 ने बोर्ड परीक्षाओं में वर्ष में 2 बार परीक्षा देने का विकल्प प्रस्तावित किया ताकि छात्र अपना सर्वश्रेष्ठ अंक रख सकें। परीक्षाएँ 'Low-Stakes' एवं योग्यता-आधारित (Competency-based) होंगी।"
  },
  {
    q: "NEP 2020 ने NCERT को कितने प्रकार के 'National Curricular Frameworks' (NCFs) तैयार करने का कार्य सौंपा?",
    options: ["2", "3", "4", "5"],
    correct: 2,
    explanation: "NCERT को 4 NCFs तैयार करने का कार्य सौंपा: (1) ECCE हेतु, (2) स्कूली शिक्षा हेतु (NCF-SE), (3) शिक्षक शिक्षा हेतु (NCF-TE), (4) प्रौढ़ शिक्षा हेतु (NCF-AE)।"
  },
  {
    q: "NEP 2020 ने कक्षा 6 से किन दो नई विषय-वस्तुओं को पाठ्यक्रम में शामिल करने का प्रावधान किया?",
    options: [
      "कोडिंग एवं कम्प्यूटेशनल थिंकिंग",
      "योग एवं ध्यान",
      "संस्कृत एवं हिंदी",
      "गणित एवं विज्ञान"
    ],
    correct: 0,
    explanation: "NEP 2020 ने कक्षा 6 से कोडिंग (Coding) एवं कम्प्यूटेशनल थिंकिंग (Computational Thinking) को पाठ्यक्रम में शामिल करने का प्रावधान किया।"
  },
  {
    q: "NEP 2020 ने '10 Bagless Days' का प्रावधान किस संदर्भ में किया?",
    options: [
      "10 दिन विद्यालय बंद रहेंगे",
      "शैक्षणिक वर्ष में 10 दिन छात्र बिना बस्ते के आएँगे और स्थानीय कारीगरों/शिल्पकारों से सीखेंगे",
      "10 दिन केवल खेलकूद",
      "10 दिन ऑनलाइन शिक्षा"
    ],
    correct: 1,
    explanation: "NEP 2020 ने शैक्षणिक वर्ष में '10 Bagless Days' का प्रावधान किया जिसमें छात्र बस्ता लेकर नहीं आएँगे और स्थानीय कारीगरों, शिल्पकारों, कलाकारों के साथ इंटर्नशिप/गतिविधि करेंगे।"
  },
  {
    q: "NEP 2020 में स्कूली शिक्षा के पाठ्यक्रम को 'essential core' (आवश्यक मूल) तक कम करने का लक्ष्य रखा गया। इसके अनुसार पाठ्यक्रम की विषय-वस्तु (Content Load) को कितना कम करने का प्रस्ताव है?",
    options: [
      "10% तक कम",
      "25% तक कम",
      "पाठ्यक्रम को 'essential core' तक सीमित करना — रटन्त विद्या की बजाय समालोचनात्मक चिंतन पर बल",
      "50% तक कम"
    ],
    correct: 2,
    explanation: "NEP 2020 ने पाठ्यक्रम की विषय-वस्तु को 'essential core' तक सीमित करने और रटन्त विद्या (rote learning) की बजाय समालोचनात्मक चिंतन (critical thinking), खोज-आधारित, चर्चा-आधारित एवं विश्लेषण-आधारित अधिगम पर बल दिया।"
  },
  {
    q: "NEP 2020 ने 'School Complexes/Clusters' में किन-किन संस्थानों को शामिल करने का सुझाव दिया?",
    options: [
      "केवल सरकारी विद्यालय",
      "एक माध्यमिक/वरिष्ठ माध्यमिक विद्यालय + आसपास के प्राथमिक विद्यालय + प्री-स्कूल + आंगनवाड़ी केंद्र",
      "केवल निजी विद्यालय",
      "केवल शहरी विद्यालय"
    ],
    correct: 1,
    explanation: "School Complex/Cluster में एक माध्यमिक/वरिष्ठ माध्यमिक विद्यालय के साथ 5–10 किमी के दायरे में आसपास के प्राथमिक विद्यालय, प्री-स्कूल एवं आंगनवाड़ी केंद्रों को जोड़ा जाएगा।"
  },
  {
    q: "NEP 2020 में 'Academic Bank of Credits' (ABC) में क्रेडिट कितने वर्षों तक वैध (Valid) रहेंगे?",
    options: ["3 वर्ष", "5 वर्ष", "7 वर्ष", "अनिश्चितकाल तक"],
    correct: 2,
    explanation: "ABC में अर्जित क्रेडिट्स अधिकतम 7 वर्षों तक वैध रहेंगे। इसके बाद छात्र को पुनः क्रेडिट अर्जित करने होंगे।"
  },
  {
    q: "NEP 2020 में Multiple Entry-Exit System (MEES) के अंतर्गत 4-वर्षीय स्नातक कार्यक्रम में 2 वर्ष पूर्ण करने पर क्या प्राप्त होगा?",
    options: ["Certificate", "Diploma", "Advanced Diploma", "Degree"],
    correct: 1,
    explanation: "MEES: 1 वर्ष = Certificate, 2 वर्ष = Diploma, 3 वर्ष = Bachelor's Degree, 4 वर्ष = Bachelor's Degree with Research (Honours with Research)।"
  },
  {
    q: "NEP 2020 के अनुसार 4-वर्षीय स्नातक डिग्री (Honours with Research) प्राप्त करने वाले छात्र सीधे किस कार्यक्रम में प्रवेश ले सकते हैं?",
    options: ["M.Phil.", "PhD", "Post-Doctoral Fellowship", "MBA"],
    correct: 1,
    explanation: "NEP 2020 ने M.Phil. समाप्त कर दिया। 4-वर्षीय स्नातक (Honours with Research) वाले छात्र सीधे PhD में प्रवेश ले सकते हैं।"
  },
  {
    q: "NEP 2020 ने 'Gross Enrolment Ratio' (GER) उच्च शिक्षा में 2018 में कितने प्रतिशत से बढ़ाकर 2035 तक 50% करने का लक्ष्य रखा?",
    options: ["20.1%", "23.5%", "26.3%", "30.2%"],
    correct: 2,
    explanation: "2018 में उच्च शिक्षा में GER 26.3% था। NEP 2020 ने इसे 2035 तक 50% तक बढ़ाने का लक्ष्य रखा (व्यावसायिक शिक्षा सहित)।"
  },
  {
    q: "NEP 2020 ने सभी उच्च शिक्षण संस्थानों (HEIs) में न्यूनतम कितने छात्र होने का लक्ष्य रखा?",
    options: ["1000", "2000", "3000", "5000"],
    correct: 2,
    explanation: "NEP 2020 ने 2040 तक सभी HEIs को बहुविषयक बनाने और प्रत्येक में न्यूनतम 3000 या अधिक छात्र होने का लक्ष्य रखा।"
  },
  {
    q: "NEP 2020 ने सभी उच्च शिक्षण संस्थानों को किस वर्ष तक 'Multidisciplinary' (बहुविषयक) बनाने का लक्ष्य रखा?",
    options: ["2030", "2035", "2040", "2050"],
    correct: 2,
    explanation: "NEP 2020 ने 2040 तक सभी HEIs को बहुविषयक (Multidisciplinary) बनाने का लक्ष्य रखा।"
  },
  {
    q: "NEP 2020 में HECI (Higher Education Commission of India) के अंतर्गत कितने स्वतंत्र खंड (Verticals) प्रस्तावित किए गए?",
    options: ["2", "3", "4", "5"],
    correct: 2,
    explanation: "HECI के अंतर्गत 4 स्वतंत्र खंड: (1) NHERC (नियमन), (2) NAC (प्रत्यायन), (3) HEGC (अनुदान/वित्तपोषण), (4) GEC (मानक निर्धारण)।"
  },
  {
    q: "NEP 2020 में HECI का 'NHERC' किसका नियमन करेगा और किन दो क्षेत्रों को इसके नियमन से बाहर रखा गया?",
    options: [
      "सभी शिक्षा — कोई अपवाद नहीं",
      "उच्च शिक्षा — चिकित्सा (Medical) एवं विधि (Legal) शिक्षा को छोड़कर",
      "उच्च शिक्षा — तकनीकी एवं प्रबंधन शिक्षा को छोड़कर",
      "केवल तकनीकी शिक्षा"
    ],
    correct: 1,
    explanation: "NHERC (National Higher Education Regulatory Council) उच्च शिक्षा का नियमन करेगा — चिकित्सा (Medical) एवं विधि (Legal) शिक्षा को छोड़कर। यह 'Light but Tight' नियमन का सिद्धांत अपनाएगा।"
  },
  {
    q: "NEP 2020 में 'National Accreditation Council' (NAC) किस मौजूदा संस्था के कार्यों को संभालेगा?",
    options: ["UGC", "NAAC", "AICTE", "NCTE"],
    correct: 1,
    explanation: "NAC, NAAC (National Assessment and Accreditation Council) के प्रत्यायन कार्यों को संभालेगा। यह 'Robust System of Graded Accreditation' अपनाएगा।"
  },
  {
    q: "NEP 2020 में 'General Education Council' (GEC) का प्रमुख कार्य क्या होगा?",
    options: [
      "नियमन करना",
      "अनुदान वितरण",
      "National Higher Education Qualification Framework (NHEQF) तैयार करना एवं अपेक्षित अधिगम प्रतिफल (Expected Learning Outcomes) निर्धारित करना",
      "प्रत्यायन करना"
    ],
    correct: 2,
    explanation: "GEC का कार्य NHEQF तैयार करना, Graduate Attributes निर्धारित करना एवं Expected Learning Outcomes तय करना होगा।"
  },
  {
    q: "NEP 2020 में 'Graded Autonomy' (श्रेणीबद्ध स्वायत्तता) किस आधार पर HEIs को प्रदान की जाएगी?",
    options: [
      "संस्थान की आयु के आधार पर",
      "छात्र संख्या के आधार पर",
      "प्रत्यायन ग्रेड (Accreditation Grade) के आधार पर",
      "शुल्क संरचना के आधार पर"
    ],
    correct: 2,
    explanation: "NEP 2020 ने HEIs को उनके प्रत्यायन ग्रेड (Accreditation Grade) के आधार पर श्रेणीबद्ध स्वायत्तता (Graded Autonomy) प्रदान करने का प्रावधान किया।"
  },
  {
    q: "NEP 2020 के अनुसार 2030 तक शिक्षक बनने के लिए न्यूनतम अनिवार्य योग्यता क्या होगी?",
    options: [
      "D.El.Ed. (2 वर्ष)",
      "B.Ed. (2 वर्ष)",
      "4-वर्षीय एकीकृत B.Ed. (Integrated B.Ed.)",
      "M.Ed."
    ],
    correct: 2,
    explanation: "NEP 2020 ने 2030 तक शिक्षक बनने के लिए 4-वर्षीय एकीकृत B.Ed. (Dual Major — Subject + Education) को न्यूनतम अनिवार्य योग्यता बनाने का प्रस्ताव किया।"
  },
  {
    q: "NEP 2020 में 'National Professional Standards for Teachers' (NPST) किन दो संस्थाओं द्वारा तैयार किए जाएँगे?",
    options: ["UGC + AICTE", "NCTE + NCERT", "CBSE + NCERT", "NITI Aayog + शिक्षा मंत्रालय"],
    correct: 1,
    explanation: "NPST को NCTE (National Council for Teacher Education) द्वारा NCERT के परामर्श से तैयार किया जाएगा। यह 2022 तक तैयार होना प्रस्तावित था।"
  },
  {
    q: "NEP 2020 ने शिक्षक शिक्षा (Teacher Education) के लिए 'Sub-standard' और 'Dysfunctional' संस्थानों के बारे में क्या आदेश दिया?",
    options: [
      "उन्हें सुधारा जाएगा",
      "उन्हें अधिक अनुदान दिया जाएगा",
      "उन्हें सख्त कार्रवाई द्वारा बंद किया जाएगा",
      "उन्हें निजी क्षेत्र को सौंपा जाएगा"
    ],
    correct: 2,
    explanation: "NEP 2020 ने स्पष्ट रूप से कहा कि Sub-standard एवं Dysfunctional Teacher Education Institutions (TEIs) को सख्त कार्रवाई द्वारा बंद किया जाएगा।"
  },
  {
    q: "NEP 2020 में 'National Research Foundation' (NRF) की स्थापना का उद्देश्य किन विषयों में अनुसंधान को बढ़ावा देना है?",
    options: [
      "केवल विज्ञान एवं प्रौद्योगिकी",
      "केवल सामाजिक विज्ञान",
      "सभी विषयों — विज्ञान, प्रौद्योगिकी, सामाजिक विज्ञान, मानविकी एवं कला",
      "केवल चिकित्सा अनुसंधान"
    ],
    correct: 2,
    explanation: "NRF सभी विषयों — विज्ञान, प्रौद्योगिकी, सामाजिक विज्ञान, मानविकी एवं कला — में अनुसंधान को बढ़ावा देने, वित्तपोषन एवं मेंटरिंग का कार्य करेगा।"
  },
  {
    q: "NEP 2020 ने NRF (National Research Foundation) के वार्षिक अनुदान (Annual Grant) को कितना रखने का प्रस्ताव किया?",
    options: ["₹5,000 करोड़", "₹10,000 करोड़", "₹20,000 करोड़", "₹50,000 करोड़"],
    correct: 2,
    explanation: "NEP 2020 ने NRF के लिए ₹20,000 करोड़ के वार्षिक अनुदान का प्रस्ताव किया (कुल 5 वर्षों में)।"
  },
  {
    q: "NEP 2020 में 'Multidisciplinary Education and Research University' (MERU) की तुलना किन संस्थानों से की गई?",
    options: [
      "राज्य विश्वविद्यालयों से",
      "IIT/IIM के समकक्ष",
      "केंद्रीय विद्यालयों से",
      "निजी विश्वविद्यालयों से"
    ],
    correct: 1,
    explanation: "MERU को IIT/IIM के समकक्ष बहुविषयक शिक्षा एवं अनुसंधान विश्वविद्यालय के रूप में प्रस्तावित किया गया। इन्हें 'Model Multidisciplinary Universities' भी कहा गया।"
  },
  {
    q: "NEP 2020 ने HEIs को किन तीन श्रेणियों में वर्गीकृत करने का प्रस्ताव किया?",
    options: [
      "Central, State, Private",
      "Research-Intensive Universities, Teaching-Intensive Universities, Autonomous Degree-Granting Colleges",
      "Tier-1, Tier-2, Tier-3",
      "A-Grade, B-Grade, C-Grade"
    ],
    correct: 1,
    explanation: "NEP 2020 ने HEIs को 3 श्रेणियों में बाँटा: (1) Research-Intensive Universities, (2) Teaching-Intensive Universities, (3) Autonomous Degree-Granting Colleges।"
  },
  {
    q: "NEP 2020 में 'National Educational Technology Forum' (NETF) किस प्रकार का निकाय होगा?",
    options: [
      "सरकारी विभाग",
      "स्वायत्त निकाय (Autonomous Body)",
      "संसदीय समिति",
      "निजी संस्था"
    ],
    correct: 1,
    explanation: "NETF एक स्वायत्त निकाय (Autonomous Body) होगा जो शिक्षा में प्रौद्योगिकी के उपयोग, AI, Online/Digital Education आदि पर विचार-विमर्श एवं नीति-निर्माण में सहायता करेगा।"
  },
  {
    q: "NEP 2020 में 'Equitable and Inclusive Education' के अंतर्गत 'Socially and Economically Disadvantaged Groups' (SEDGs) में कुल कितने वर्ग चिह्नित किए गए?",
    options: ["4", "6", "8", "10"],
    correct: 2,
    explanation: "SEDGs में 8 वर्ग: (1) SC, (2) ST, (3) OBC, (4) अल्पसंख्यक, (5) दिव्यांगजन, (6) ट्रांसजेंडर, (7) बालिकाएँ, (8) आर्थिक रूप से कमजोर वर्ग (EWS)। भौगोलिक रूप से पिछड़े क्षेत्रों के बच्चे भी शामिल हैं।"
  },
  {
    q: "NEP 2020 ने 'Gender Inclusion Fund' (लैंगिक समावेशन कोष) किनकी शिक्षा हेतु स्थापित करने का प्रस्ताव किया?",
    options: [
      "केवल बालिकाओं की शिक्षा",
      "बालिकाओं एवं ट्रांसजेंडर छात्रों की शिक्षा",
      "केवल ट्रांसजेंडर छात्रों की शिक्षा",
      "सभी छात्रों की शिक्षा"
    ],
    correct: 1,
    explanation: "Gender Inclusion Fund बालिकाओं एवं ट्रांसजेंडर छात्रों की शिक्षा में समान भागीदारी, ठहराव (Retention) एवं सशक्तिकरण सुनिश्चित करने हेतु प्रस्तावित किया गया।"
  },
  {
    q: "NEP 2020 ने 'Special Education Zones' (SEZs) की स्थापना किन क्षेत्रों में प्रस्तावित की?",
    options: [
      "महानगरों में",
      "शैक्षिक रूप से पिछड़े जिलों एवं आकांक्षी जिलों (Aspirational Districts) में",
      "राज्य राजधानियों में",
      "सीमावर्ती क्षेत्रों में"
    ],
    correct: 1,
    explanation: "SEZs की स्थापना शैक्षिक रूप से पिछड़े जिलों एवं 'Aspirational Districts' में प्रस्तावित की गई ताकि वहाँ शिक्षा की गुणवत्ता एवं पहुँच बढ़ाई जा सके।"
  },
  {
    q: "NEP 2020 ने 'Bal Bhavan' (बाल भवन) की स्थापना किस स्तर पर प्रस्तावित की?",
    options: [
      "राष्ट्रीय स्तर",
      "राज्य स्तर",
      "जिला एवं ब्लॉक स्तर",
      "ग्राम पंचायत स्तर"
    ],
    correct: 2,
    explanation: "NEP 2020 ने प्रत्येक जिला एवं ब्लॉक स्तर पर 'बाल भवन' की स्थापना का सुझाव दिया जहाँ बच्चे कला, शिल्प, खेल, संगीत आदि गतिविधियों में भाग ले सकें।"
  },
  {
    q: "NEP 2020 ने '360-Degree Holistic Progress Card' में किन तीन पक्षों (Domains) का मूल्यांकन प्रस्तावित किया?",
    options: [
      "केवल शैक्षणिक, सह-शैक्षणिक, अनुशासन",
      "संज्ञानात्मक (Cognitive), भावात्मक (Affective), मनोगत्यात्मक (Psychomotor)",
      "शैक्षणिक, खेलकूद, सांस्कृतिक",
      "पढ़ना, लिखना, गणित"
    ],
    correct: 1,
    explanation: "360-Degree Holistic Progress Card में तीन पक्ष: Cognitive (संज्ञानात्मक), Affective (भावात्मक), Psychomotor (मनोगत्यात्मक) — स्व-मूल्यांकन, सहपाठी मूल्यांकन एवं शिक्षक मूल्यांकन शामिल।"
  },
  {
    q: "NEP 2020 में 'Holistic Progress Card' में मूल्यांकन कौन-कौन करेंगे?",
    options: [
      "केवल शिक्षक",
      "शिक्षक, स्व-मूल्यांकन (Self-Assessment) एवं सहपाठी मूल्यांकन (Peer Assessment)",
      "केवल प्रधानाचार्य",
      "केवल अभिभावक"
    ],
    correct: 1,
    explanation: "NEP 2020 ने Holistic Progress Card में शिक्षक मूल्यांकन, स्व-मूल्यांकन (Self-Assessment) एवं सहपाठी मूल्यांकन (Peer Assessment) — तीनों को शामिल किया।"
  },
  {
    q: "NEP 2020 ने शिक्षा में 'Regulatory System' (नियामक प्रणाली) के लिए कौन-सा सिद्धांत अपनाया?",
    options: [
      "Heavy Regulation",
      "No Regulation",
      "Light but Tight Regulation",
      "Self-Regulation Only"
    ],
    correct: 2,
    explanation: "NEP 2020 ने 'Light but Tight' नियमन का सिद्धांत अपनाया — हल्का लेकिन सख्त नियमन, जिसमें अनावश्यक हस्तक्षेप कम हो लेकिन गुणवत्ता मानकों का कड़ाई से पालन हो।"
  },
  {
    q: "NEP 2020 में विदेशी विश्वविद्यालयों को भारत में कैंपस स्थापित करने की अनुमति किसके लिए दी गई?",
    options: [
      "सभी विदेशी विश्वविद्यालयों को",
      "शीर्ष 100 विश्व रैंकिंग वाले विश्वविद्यालयों को",
      "केवल अमेरिकी विश्वविद्यालयों को",
      "केवल ऑनलाइन शिक्षा देने वाले विश्वविद्यालयों को"
    ],
    correct: 1,
    explanation: "NEP 2020 ने शीर्ष 100 विश्व रैंकिंग वाले विदेशी विश्वविद्यालयों को भारत में कैंपस स्थापित करने की अनुमति देने का प्रावधान किया।"
  },
  {
    q: "NEP 2020 ने 'National Scholarship Portal' को विस्तारित करते हुए किन विशेष वर्गों के लिए छात्रवृत्ति बढ़ाने पर बल दिया?",
    options: [
      "केवल मेधावी छात्रों",
      "SEDGs — SC, ST, OBC, दिव्यांग, बालिकाओं, ट्रांसजेंडर छात्रों",
      "केवल विदेश जाने वाले छात्रों",
      "केवल शहरी छात्रों"
    ],
    correct: 1,
    explanation: "NEP 2020 ने SEDGs (SC, ST, OBC, दिव्यांग, बालिकाओं, ट्रांसजेंडर) छात्रों के लिए National Scholarship Portal पर छात्रवृत्ति बढ़ाने एवं private HEIs में भी मुफ्त-शिक्षा एवं छात्रवृत्ति सुनिश्चित करने पर बल दिया।"
  },
  {
    q: "NEP 2020 ने 'DIKSHA' प्लेटफॉर्म का उपयोग किसके लिए प्रस्तावित किया?",
    options: [
      "केवल परीक्षा आयोजन",
      "शिक्षकों एवं छात्रों हेतु डिजिटल शैक्षिक सामग्री (e-Content), QR-coded textbooks का एकीकृत प्लेटफॉर्म",
      "केवल शिक्षक भर्ती",
      "केवल प्रशासनिक कार्य"
    ],
    correct: 1,
    explanation: "DIKSHA (Digital Infrastructure for Knowledge Sharing) शिक्षकों एवं छात्रों हेतु e-Content, QR-coded textbooks, शिक्षक प्रशिक्षण सामग्री आदि का राष्ट्रीय एकीकृत डिजिटल प्लेटफॉर्म है।"
  },
  {
    q: "NEP 2020 ने आंगनवाड़ी कार्यकर्ताओं/शिक्षकों को ECCE में कितने महीने का सर्टिफिकेट प्रोग्राम देने का प्रावधान किया?",
    options: ["3 महीने", "6 महीने", "9 महीने", "12 महीने"],
    correct: 1,
    explanation: "NEP 2020 ने आंगनवाड़ी कार्यकर्ताओं/शिक्षकों को ECCE (Early Childhood Care and Education) में 6 महीने का सर्टिफिकेट प्रोग्राम देने का प्रावधान किया।"
  },
  {
    q: "NEP 2020 ने 'Classical Languages' (शास्त्रीय भाषाओं) में किन-किन भाषाओं को शामिल किया?",
    options: [
      "केवल संस्कृत",
      "संस्कृत, तमिल, तेलुगु, कन्नड़, मलयालम, उड़िया, पालि, फारसी, प्राकृत",
      "केवल संस्कृत, तमिल, तेलुगु",
      "सभी 22 अनुसूचित भाषाएँ"
    ],
    correct: 1,
    explanation: "NEP 2020 ने शास्त्रीय भाषाओं में संस्कृत, तमिल, तेलुगु, कन्नड़, मलयालम, उड़िया, पालि, फारसी एवं प्राकृत को शामिल किया और इनके अध्ययन-अध्यापन को बढ़ावा देने पर बल दिया।"
  },
  {
    q: "NEP 2020 ने 'Indian Institute of Translation and Interpretation' (IITI) की स्थापना किस उद्देश्य से प्रस्तावित की?",
    options: [
      "विदेशी भाषाओं के अनुवाद हेतु",
      "भारतीय भाषाओं में उच्च गुणवत्ता की शैक्षिक सामग्री का अनुवाद एवं दुभाषिया सेवा",
      "केवल हिंदी अनुवाद हेतु",
      "केवल साहित्यिक अनुवाद हेतु"
    ],
    correct: 1,
    explanation: "IITI की स्थापना भारतीय भाषाओं में उच्च गुणवत्ता की शैक्षिक सामग्री (विशेषकर विज्ञान एवं तकनीकी) का अनुवाद एवं दुभाषिया (Interpretation) सेवा प्रदान करने हेतु प्रस्तावित की गई।"
  },
  {
    q: "NEP 2020 ने 'Adult Education' (प्रौढ़ शिक्षा) के लिए प्रस्तावित कार्यक्रम में कौन-कौन सी साक्षरताएँ शामिल की गईं?",
    options: [
      "केवल मूलभूत साक्षरता",
      "मूलभूत साक्षरता, डिजिटल साक्षरता, वित्तीय साक्षरता, कानूनी साक्षरता, स्वास्थ्य साक्षरता",
      "केवल डिजिटल साक्षरता",
      "केवल वित्तीय साक्षरता"
    ],
    correct: 1,
    explanation: "NEP 2020 ने प्रौढ़ शिक्षा कार्यक्रम में मूलभूत साक्षरता (Foundational Literacy), डिजिटल साक्षरता, वित्तीय साक्षरता, कानूनी साक्षरता, स्वास्थ्य जागरूकता एवं जीवनपर्यंत अधिगम (Lifelong Learning) को शामिल किया।"
  },
  {
    q: "NEP 2020 ने 'Rashtriya Shiksha Aayog' (राष्ट्रीय शिक्षा आयोग) / 'CABE' की अध्यक्षता किसके द्वारा प्रस्तावित की?",
    options: [
      "शिक्षा मंत्री",
      "प्रधानमंत्री",
      "राष्ट्रपति",
      "उपराष्ट्रपति"
    ],
    correct: 1,
    explanation: "NEP 2020 ने 'Rashtriya Shiksha Aayog' (RSA) की स्थापना का प्रस्ताव किया जिसकी अध्यक्षता प्रधानमंत्री करेंगे। यह शिक्षा नीति के कार्यान्वयन की निगरानी करेगा।"
  },
  {
    q: "NEP 2020 में 'State School Standards Authority' (SSSA) की स्थापना किस उद्देश्य से प्रस्तावित की गई?",
    options: [
      "शिक्षक भर्ती हेतु",
      "सरकारी एवं निजी दोनों विद्यालयों के लिए न्यूनतम मानक निर्धारित करने एवं उनका अनुपालन सुनिश्चित करने हेतु",
      "पाठ्यपुस्तक निर्माण हेतु",
      "परीक्षा आयोजन हेतु"
    ],
    correct: 1,
    explanation: "SSSA सरकारी एवं निजी दोनों विद्यालयों के लिए न्यूनतम मानक (Minimum Standards) निर्धारित करेगा और उनका अनुपालन सुनिश्चित करेगा। यह 'Light but Tight' सिद्धांत पर कार्य करेगा।"
  },
  {
    q: "NEP 2020 में 'State Council of Educational Research and Training' (SCERT) की भूमिका को किस संस्था के समकक्ष बनाने का प्रस्ताव किया गया?",
    options: ["UGC", "AICTE", "NCERT", "CBSE"],
    correct: 2,
    explanation: "NEP 2020 ने SCERT को राज्य स्तर पर NCERT के समकक्ष बनाने और इसे मजबूत करने का प्रस्ताव किया ताकि यह शैक्षिक नवाचार, पाठ्यक्रम निर्माण एवं शिक्षक प्रशिक्षण में अग्रणी भूमिका निभा सके।"
  },
  {
    q: "NEP 2020 ने 'District Education and Training Institutes' (DIETs) के बारे में क्या सिफारिश की?",
    options: [
      "DIETs बंद किए जाएँ",
      "DIETs को सुदृढ़ एवं उन्नत किया जाए — ये शिक्षक प्रशिक्षण, शैक्षिक अनुसंधान एवं नवाचार के केंद्र बनें",
      "DIETs केवल शहरों में हों",
      "DIETs को निजी क्षेत्र को सौंपा जाए"
    ],
    correct: 1,
    explanation: "NEP 2020 ने DIETs को सुदृढ़ एवं उन्नत (Revamped and Strengthened) करने की सिफारिश की ताकि ये शिक्षक प्रशिक्षण, शैक्षिक अनुसंधान, मूल्यांकन एवं नवाचार के प्रभावी केंद्र बनें।"
  },
  {
    q: "NEP 2020 ने 'Continuous Professional Development' (CPD) — शिक्षकों के सतत व्यावसायिक विकास — के लिए प्रत्येक शिक्षक को प्रतिवर्ष कम-से-कम कितने घंटे CPD में भाग लेना अनिवार्य किया?",
    options: ["20 घंटे", "30 घंटे", "50 घंटे", "100 घंटे"],
    correct: 2,
    explanation: "NEP 2020 ने प्रत्येक शिक्षक को प्रतिवर्ष कम-से-कम 50 घंटे CPD (Continuous Professional Development) में भाग लेना अनिवार्य किया।"
  },
  {
    q: "NEP 2020 ने 'National Mentoring Mission' किसके लिए प्रस्तावित किया?",
    options: [
      "छात्रों की काउंसलिंग हेतु",
      "सेवानिवृत्त शिक्षकों/वैज्ञानिकों द्वारा नए/युवा शिक्षकों को मार्गदर्शन (Mentoring) देने हेतु",
      "विदेशी विशेषज्ञों द्वारा प्रशिक्षण हेतु",
      "प्रधानाचार्यों को प्रशिक्षण हेतु"
    ],
    correct: 1,
    explanation: "NEP 2020 ने 'National Mission for Mentoring' प्रस्तावित किया जिसमें सेवानिवृत्त शिक्षक, वैज्ञानिक, विशेषज्ञ स्वयंसेवक (Volunteers) के रूप में नए/युवा शिक्षकों को लघु एवं दीर्घकालिक मार्गदर्शन देंगे।"
  },
  {
    q: "NEP 2020 ने 'Semester System' या 'Annual System' — किसे उच्च शिक्षा में अपनाने का प्रस्ताव किया?",
    options: [
      "केवल Annual System",
      "Choice-Based Credit System (CBCS) के साथ Semester System",
      "Trimester System",
      "Quarter System"
    ],
    correct: 1,
    explanation: "NEP 2020 ने उच्च शिक्षा में Choice-Based Credit System (CBCS) के साथ Semester System अपनाने का प्रस्ताव किया ताकि छात्रों को विषय चयन में लचीलापन मिले।"
  },
  {
    q: "NEP 2020 ने 'Holistic and Multidisciplinary Education' (समग्र एवं बहुविषयक शिक्षा) के अंतर्गत कला-विज्ञान-वाणिज्य-व्यावसायिक के बीच कठोर विभाजन (Rigid Stream Separation) के बारे में क्या कहा?",
    options: [
      "कठोर विभाजन जारी रहेगा",
      "कठोर विभाजन समाप्त — छात्र स्वतंत्र रूप से किसी भी विषय संयोजन का चयन कर सकेंगे",
      "केवल कला एवं विज्ञान का संयोजन संभव",
      "कठोर विभाजन केवल कक्षा 9–10 तक"
    ],
    correct: 1,
    explanation: "NEP 2020 ने कला-विज्ञान-वाणिज्य-व्यावसायिक के बीच 'Rigid Stream Separation' समाप्त किया। छात्र भौतिकी+संगीत, गणित+फैशन डिज़ाइन जैसे किसी भी संयोजन का चयन कर सकेंगे।"
  },
  {
    q: "NEP 2020 में 'Samagra Shiksha' (समग्र शिक्षा) योजना का विस्तार किस स्तर तक किया गया?",
    options: [
      "कक्षा 1–8 तक",
      "कक्षा 1–10 तक",
      "प्री-स्कूल से कक्षा 12 तक",
      "केवल उच्च शिक्षा"
    ],
    correct: 2,
    explanation: "NEP 2020 ने Samagra Shiksha योजना का विस्तार प्री-स्कूल से कक्षा 12 तक किया ताकि संपूर्ण स्कूली शिक्षा एक एकीकृत योजना के अंतर्गत आ सके।"
  },
  {
    q: "NEP 2020 ने 'Online/Digital Education' को बढ़ावा देने हेतु शिक्षा मंत्रालय में किस प्रकार की इकाई स्थापित करने का सुझाव दिया?",
    options: [
      "Digital Assessment Cell",
      "एक समर्पित इकाई (Dedicated Unit) जो e-शिक्षा सामग्री, प्लेटफॉर्म एवं अवसंरचना विकसित करे",
      "AI Research Lab",
      "Cyber Security Wing"
    ],
    correct: 1,
    explanation: "NEP 2020 ने MoE में एक 'Dedicated Unit' स्थापित करने का सुझाव दिया जो Virtual Labs, e-Content, MOOC, SWAYAM, DIKSHA आदि डिजिटल/ऑनलाइन शिक्षा अवसंरचना का विकास एवं प्रबंधन करे।"
  },
  {
    q: "NEP 2020 ने 'Artificial Intelligence' (AI) का शिक्षा में किन-किन क्षेत्रों में उपयोग प्रस्तावित किया?",
    options: [
      "केवल परीक्षा मूल्यांकन",
      "व्यक्तिगत शिक्षण (Personalized Learning), अनुकूली मूल्यांकन (Adaptive Assessment), स्मार्ट सामग्री (Smart Content), प्रशासनिक स्वचालन",
      "केवल उपस्थिति प्रबंधन",
      "केवल अनुसंधान"
    ],
    correct: 1,
    explanation: "NEP 2020 ने AI का उपयोग Personalized Learning, Adaptive Assessment, Smart Content निर्माण, Administrative Automation, अनुसंधान सहायता आदि क्षेत्रों में प्रस्तावित किया।"
  },
  {
    q: "NEP 2020 ने 'SDG 4' (Sustainable Development Goal 4 — Quality Education for All) के अनुरूप किस वर्ष तक सबके लिए गुणवत्तापूर्ण शिक्षा का लक्ष्य रखा?",
    options: ["2025", "2030", "2035", "2040"],
    correct: 1,
    explanation: "NEP 2020 ने SDG 4 के अनुरूप 2030 तक प्रत्येक बच्चे को प्री-स्कूल से माध्यमिक स्तर तक मुफ्त, अनिवार्य एवं गुणवत्तापूर्ण शिक्षा सुनिश्चित करने का लक्ष्य रखा।"
  },
  {
    q: "NEP 2020 ने किस कक्षा से छात्रों को 'Vocational Education' (व्यावसायिक शिक्षा) से परिचित कराने और स्थानीय शिल्पकारों/कारीगरों के साथ इंटर्नशिप का प्रावधान किया?",
    options: ["कक्षा 3", "कक्षा 5", "कक्षा 6", "कक्षा 9"],
    correct: 2,
    explanation: "NEP 2020 ने कक्षा 6 से Vocational Education शुरू करने और स्थानीय शिल्पकारों, कारीगरों, व्यवसायियों के साथ इंटर्नशिप/प्रशिक्षण का प्रावधान किया।"
  },
  {
    q: "NEP 2020 ने Vocational Education में 2025 तक स्कूली एवं उच्च शिक्षा के कम-से-कम कितने प्रतिशत छात्रों तक पहुँचने का लक्ष्य रखा?",
    options: ["25%", "40%", "50%", "75%"],
    correct: 2,
    explanation: "NEP 2020 ने 2025 तक स्कूली एवं उच्च शिक्षा के कम-से-कम 50% छात्रों तक Vocational Education की पहुँच का लक्ष्य रखा।"
  },
  {
    q: "NEP 2020 ने 'National Committee for the Integration of Vocational Education' (NCIVE) की स्थापना किस उद्देश्य से प्रस्तावित की?",
    options: [
      "केवल ITI प्रबंधन हेतु",
      "व्यावसायिक शिक्षा को शैक्षणिक शिक्षा (Academic Education) के साथ एकीकृत करने हेतु",
      "केवल कॉर्पोरेट प्रशिक्षण",
      "केवल विदेशी सहयोग"
    ],
    correct: 1,
    explanation: "NCIVE का उद्देश्य Vocational Education को Academic Education (सामान्य शिक्षा) के साथ एकीकृत करना है ताकि दोनों के बीच कोई कठोर विभाजन न रहे।"
  },
  {
    q: "NEP 2020 ने 'National Testing Agency' (NTA) के बारे में क्या प्रावधान किया?",
    options: [
      "NTA बंद किया जाए",
      "NTA उच्च शिक्षा प्रवेश हेतु सामान्य प्रवेश परीक्षा (Common Entrance Exams) आयोजित करे — यह विषय-विशिष्ट एवं योग्यता-आधारित (Aptitude-based) होगी",
      "NTA केवल NEET आयोजित करे",
      "NTA केवल JEE आयोजित करे"
    ],
    correct: 1,
    explanation: "NEP 2020 ने NTA को उच्च शिक्षा प्रवेश हेतु विभिन्न Common Entrance Exams आयोजित करने का प्रावधान किया। ये परीक्षाएँ विषय-विशिष्ट Aptitude, Reasoning एवं Competency-based होंगी।"
  },
  {
    q: "NEP 2020 ने 'Pupil-Teacher Ratio' (PTR) — छात्र-शिक्षक अनुपात — को शैक्षिक रूप से पिछड़े क्षेत्रों में कितना रखने का लक्ष्य रखा?",
    options: ["30:1 से कम", "25:1 से कम", "40:1 से कम", "35:1 से कम"],
    correct: 0,
    explanation: "NEP 2020 ने शैक्षिक रूप से पिछड़े क्षेत्रों (Educationally Disadvantaged Areas) में PTR 30:1 से कम रखने का लक्ष्य रखा ताकि प्रत्येक छात्र को पर्याप्त ध्यान मिल सके। विशेष रूप से SC/ST/OBC बहुल क्षेत्रों में और भी कम PTR रखने पर बल दिया।"
  },
  {
    q: "NEP 2020 ने 'School Governance' (विद्यालय प्रशासन) में 'School Management Committees' (SMCs) को किस प्रकार सशक्त करने का प्रस्ताव किया?",
    options: [
      "SMCs बंद किए जाएँ",
      "SMCs को School Complex/Cluster level पर पुनर्गठित किया जाए और उन्हें 'School Complex Management Committees' बनाया जाए",
      "SMCs केवल नाममात्र रहें",
      "SMCs केवल निजी विद्यालयों में हों"
    ],
    correct: 1,
    explanation: "NEP 2020 ने SMCs को School Complex/Cluster level पर पुनर्गठित (Restructure) कर 'School Complex Management Committees' बनाने और उन्हें अधिक स्वायत्तता एवं उत्तरदायित्व देने का प्रस्ताव किया।"
  },
  {
    q: "NEP 2020 ने 'No Hard Separation between Arts and Sciences' (कला एवं विज्ञान में कोई कठोर विभाजन नहीं) — यह सिद्धांत किस भारतीय प्राचीन शिक्षा प्रणाली से प्रेरित बताया?",
    options: [
      "गुरुकुल प्रणाली",
      "नालंदा एवं तक्षशिला विश्वविद्यालय की बहुविषयक परंपरा",
      "मदरसा प्रणाली",
      "पाठशाला प्रणाली"
    ],
    correct: 1,
    explanation: "NEP 2020 ने स्पष्ट रूप से नालंदा एवं तक्षशिला जैसे प्राचीन भारतीय विश्वविद्यालयों की बहुविषयक (Multidisciplinary) परंपरा को प्रेरणा स्रोत बताया जहाँ 64 कलाओं का एक साथ अध्ययन होता था।"
  },
  {
    q: "NEP 2020 ने 'Institutional Development Plan' (IDP) किसके लिए अनिवार्य किया?",
    options: [
      "केवल सरकारी विद्यालयों के लिए",
      "प्रत्येक उच्च शिक्षण संस्थान (HEI) के लिए",
      "केवल IITs के लिए",
      "केवल निजी विश्वविद्यालयों के लिए"
    ],
    correct: 1,
    explanation: "NEP 2020 ने प्रत्येक HEI के लिए 'Institutional Development Plan' (IDP) तैयार करना अनिवार्य किया — यह 5–15 वर्ष का विकास रोडमैप होगा।"
  },
  {
    q: "NEP 2020 में 'PhD' में प्रवेश के लिए कौन-कौन से मार्ग (Pathways) प्रस्तावित किए गए?",
    options: [
      "केवल M.Phil. के बाद",
      "Master's Degree के बाद OR 4-वर्षीय Bachelor's Degree (with Research) के बाद",
      "केवल 3-वर्षीय Degree के बाद",
      "केवल NET उत्तीर्ण करने के बाद"
    ],
    correct: 1,
    explanation: "NEP 2020 ने PhD में प्रवेश के दो मार्ग रखे: (1) Master's Degree के बाद, (2) 4-वर्षीय Bachelor's Degree with Research (Honours with Research) के बाद सीधे। M.Phil. को समाप्त कर दिया गया।"
  },
  {
    q: "NEP 2020 में 'Open and Distance Learning' (ODL) एवं 'Online Programmes' को किस प्रकार बढ़ावा दिया गया?",
    options: [
      "ODL पर प्रतिबंध",
      "ODL एवं Online Programmes को Graded Accreditation प्राप्त HEIs द्वारा संचालित करने की अनुमति — इन्हें समकक्ष (At Par) माना जाएगा",
      "ODL केवल IGNOU में",
      "Online Programmes केवल विदेशी विश्वविद्यालयों में"
    ],
    correct: 1,
    explanation: "NEP 2020 ने Graded Accreditation प्राप्त HEIs को ODL एवं Online Programmes संचालित करने की अनुमति दी। इन डिग्रियों को Regular Degrees के समकक्ष (At Par) माना जाएगा।"
  },
  {
    q: "NEP 2020 ने 'Multidisciplinary Bachelor's Degree' में 'Major' एवं 'Minor' विषय चयन की अवधारणा किस देश की शिक्षा प्रणाली से प्रेरित है?",
    options: ["इंग्लैंड", "अमेरिका (USA)", "जापान", "जर्मनी"],
    correct: 1,
    explanation: "Major-Minor subject system अमेरिकी (USA) Liberal Arts Education प्रणाली से प्रेरित है जहाँ छात्र एक 'Major' विषय में गहन अध्ययन करते हैं और एक 'Minor' में सहायक अध्ययन।"
  },
  {
    q: "NEP 2020 में 'Credit Transfer' प्रणाली किन दो संस्थानों के माध्यम से संचालित होगी?",
    options: [
      "UGC एवं AICTE",
      "Academic Bank of Credits (ABC) एवं DigiLocker",
      "CBSE एवं ICSE",
      "NTA एवं NAAC"
    ],
    correct: 1,
    explanation: "Credit Transfer प्रणाली Academic Bank of Credits (ABC) — क्रेडिट संग्रहण एवं स्थानांतरण — और DigiLocker — डिजिटल प्रमाणपत्र संग्रहण — के माध्यम से संचालित होगी।"
  },
  {
    q: "NEP 2020 ने 'Integrated Teacher Education Programme' (ITEP) — 4 वर्षीय एकीकृत B.Ed. — में कौन-सी 'Dual Major' विशेषता होगी?",
    options: [
      "दो शिक्षा विषय",
      "एक विषय-विशेषज्ञता (Subject Specialization) + शिक्षा (Education)",
      "दो भाषाएँ",
      "विज्ञान + गणित"
    ],
    correct: 1,
    explanation: "ITEP (4 वर्षीय एकीकृत B.Ed.) में 'Dual Major' होगा — एक विषय-विशेषज्ञता (जैसे गणित, विज्ञान, सामाजिक विज्ञान) + शिक्षा शास्त्र (Education/Pedagogy)।"
  },
  {
    q: "NEP 2020 ने 'Pre-School Education' (प्री-स्कूल शिक्षा) को किस मंत्रालय के अंतर्गत लाने का प्रस्ताव किया?",
    options: [
      "महिला एवं बाल विकास मंत्रालय",
      "शिक्षा मंत्रालय (Ministry of Education)",
      "स्वास्थ्य मंत्रालय",
      "सामाजिक न्याय मंत्रालय"
    ],
    correct: 1,
    explanation: "NEP 2020 ने प्री-स्कूल शिक्षा (ECCE) को शिक्षा मंत्रालय (MoE) के अंतर्गत लाने का प्रस्ताव किया (पहले यह महिला एवं बाल विकास मंत्रालय के अधीन थी)।"
  },
  {
    q: "NEP 2020 ने ECCE पाठ्यक्रम में किस प्रकार के शिक्षण पर बल दिया?",
    options: [
      "पुस्तक-आधारित शिक्षण",
      "खेल-आधारित, गतिविधि-आधारित एवं खोज-आधारित अधिगम (Play-based, Activity-based, Discovery-based Learning)",
      "केवल लिखित परीक्षा",
      "केवल भाषा शिक्षण"
    ],
    correct: 1,
    explanation: "NEP 2020 ने ECCE में Play-based, Activity-based, Discovery-based Learning पर बल दिया — कोई औपचारिक पुस्तक-आधारित शिक्षण नहीं होगा।"
  },
  {
    q: "NEP 2020 ने 'National Curriculum Framework for ECCE' (NCF-ECCE) किसके द्वारा तैयार कराने का प्रावधान किया?",
    options: ["CBSE", "NCERT", "SCERT", "NITI Aayog"],
    correct: 1,
    explanation: "NCF-ECCE NCERT द्वारा तैयार किया जाएगा। यह 3–8 वर्ष (Foundational Stage) के बच्चों के लिए शैक्षिक ढाँचा निर्धारित करेगा।"
  },
  {
    q: "NEP 2020 ने 'Census Examination' (जनगणना परीक्षा) किन कक्षाओं में आयोजित करने का प्रावधान किया?",
    options: [
      "कक्षा 5 एवं 8",
      "कक्षा 3, 5 एवं 8",
      "कक्षा 1, 3, 5 एवं 8",
      "कक्षा 10 एवं 12"
    ],
    correct: 1,
    explanation: "NEP 2020 ने कक्षा 3, 5 एवं 8 में State Census Examinations आयोजित करने का प्रावधान किया। ये 'School Examinations' (स्कूल परीक्षाओं) की पूरक होंगी।"
  },
  {
    q: "NEP 2020 ने बोर्ड परीक्षा (कक्षा 10 एवं 12) को किस प्रकार बदलने का प्रस्ताव किया?",
    options: [
      "पूर्णतः समाप्त करना",
      "'Low-Stakes' बनाना — Competency-based, वस्तुनिष्ठ + वर्णनात्मक, Application-based, वर्ष में 2 बार का विकल्प",
      "और कठिन बनाना",
      "केवल ऑनलाइन करना"
    ],
    correct: 1,
    explanation: "NEP 2020 ने Board Exams को 'Low-Stakes' बनाने का प्रस्ताव किया: Competency-based (योग्यता-आधारित), Application-based (अनुप्रयोग-आधारित), वर्ष में 2 बार देने का विकल्प, वस्तुनिष्ठ + वर्णनात्मक दोनों।"
  },
  {
    q: "NEP 2020 ने 'SAFAL' (Structured Assessment for Analysing Learning Levels) किसके लिए प्रस्तावित किया?",
    options: [
      "उच्च शिक्षा मूल्यांकन हेतु",
      "कक्षा 3, 5 एवं 8 में छात्रों के अधिगम स्तर का विश्लेषणात्मक मूल्यांकन करने हेतु — CBSE द्वारा शुरू",
      "शिक्षक मूल्यांकन हेतु",
      "विद्यालय अवसंरचना मूल्यांकन हेतु"
    ],
    correct: 1,
    explanation: "SAFAL (Structured Assessment for Analysing Learning Levels) CBSE द्वारा कक्षा 3, 5 एवं 8 के छात्रों के अधिगम स्तर (Learning Levels) के विश्लेषणात्मक मूल्यांकन (Competency-based Assessment) हेतु शुरू किया गया।"
  },
  {
    q: "NEP 2020 ने 'School Quality Assessment and Accreditation Framework' (SQAAF) की स्थापना किस उद्देश्य से प्रस्तावित की?",
    options: [
      "केवल शुल्क निर्धारण",
      "सभी विद्यालयों (सरकारी एवं निजी) का गुणवत्ता मूल्यांकन एवं प्रत्यायन ढाँचा तैयार करने हेतु",
      "केवल उच्च शिक्षा प्रत्यायन",
      "केवल निजी विद्यालयों का मूल्यांकन"
    ],
    correct: 1,
    explanation: "SQAAF सभी विद्यालयों (सरकारी + निजी) के गुणवत्ता मूल्यांकन एवं प्रत्यायन का ढाँचा है। इसमें Input, Process एवं Output — सभी पक्षों का मूल्यांकन शामिल है।"
  },
  {
    q: "NEP 2020 ने 'पाठ्यपुस्तकों' (Textbooks) के बारे में क्या विशेष प्रावधान किया?",
    options: [
      "केवल एक पुस्तक",
      "पाठ्यपुस्तकों की विषय-वस्तु 'Essential Core' तक सीमित होगी, QR Code embedded होंगे, स्थानीय सामग्री शामिल होगी, एवं पूरक सामग्री DIKSHA पर उपलब्ध होगी",
      "केवल अंग्रेजी में पुस्तकें",
      "कोई पाठ्यपुस्तक नहीं"
    ],
    correct: 1,
    explanation: "NEP 2020 ने पाठ्यपुस्तकों में विषय-वस्तु को 'Essential Core' तक सीमित करने, QR Codes embedded करने, स्थानीय सामग्री (Local Content) शामिल करने और DIKSHA पर पूरक डिजिटल सामग्री उपलब्ध कराने का प्रावधान किया।"
  },
  {
    q: "NEP 2020 ने 'Formative Assessment' (रचनात्मक मूल्यांकन) एवं 'Summative Assessment' (योगात्मक मूल्यांकन) के बारे में क्या सिफारिश की?",
    options: [
      "केवल Summative Assessment",
      "Formative Assessment (Regular, Continuous) पर अधिक बल — Summative Assessment (Year-end) को कम महत्व",
      "दोनों समाप्त",
      "केवल Oral Assessment"
    ],
    correct: 1,
    explanation: "NEP 2020 ने Formative Assessment (नियमित, सतत, विकासात्मक) पर अधिक बल दिया और Summative Assessment (वार्षिक) को पूरक के रूप में रखा। मूल्यांकन Competency-based एवं Application-based होगा।"
  },
  {
    q: "NEP 2020 में 'Experiential Learning' (अनुभवात्मक अधिगम) के कौन-कौन से तरीके सुझाए गए?",
    options: [
      "केवल व्याख्यान",
      "कला-एकीकृत शिक्षा, खेल-एकीकृत शिक्षा, कहानी-आधारित शिक्षण, परियोजना कार्य, भ्रमण, विविध प्रयोग",
      "केवल पुस्तक पठन",
      "केवल ऑनलाइन शिक्षण"
    ],
    correct: 1,
    explanation: "Experiential Learning में Art-Integrated Education, Sports-Integrated Education, Story-based Pedagogy, Project-based Learning, Field Trips, Hands-on Activities/Experiments आदि शामिल हैं।"
  },
  {
    q: "NEP 2020 में 'National Education Technology Forum' (NETF) का क्या कार्य होगा?",
    options: [
      "शिक्षक भर्ती",
      "शिक्षा में प्रौद्योगिकी के उपयोग, नवाचार, नीति-निर्माण पर स्वतंत्र साक्ष्य-आधारित सलाह देना",
      "परीक्षा आयोजन",
      "पाठ्यपुस्तक वितरण"
    ],
    correct: 1,
    explanation: "NETF शिक्षा में प्रौद्योगिकी (EdTech) के उपयोग, AI, Digital Education, Online Learning आदि पर स्वतंत्र साक्ष्य-आधारित सलाह (Evidence-based Advisory) देगा।"
  },
  {
    q: "NEP 2020 ने 'National Mission on Foundational Literacy and Numeracy' के अंतर्गत किस कक्षा तक के बच्चों को 'आधारभूत साक्षरता एवं संख्या ज्ञान' प्रदान करने का लक्ष्य रखा?",
    options: ["कक्षा 1 तक", "कक्षा 2 तक", "कक्षा 3 तक", "कक्षा 5 तक"],
    correct: 2,
    explanation: "NEP 2020 ने 2025 तक कक्षा 3 तक के सभी बच्चों को आधारभूत साक्षरता (Foundational Literacy) एवं संख्या ज्ञान (Foundational Numeracy) प्रदान करने का लक्ष्य रखा।"
  },
  {
    q: "NEP 2020 में 'Vidya Pravesh' (विद्या प्रवेश) क्या है?",
    options: [
      "शिक्षक प्रशिक्षण कार्यक्रम",
      "कक्षा 1 में प्रवेश के लिए 3 महीने का 'Play-based School Preparation Module'",
      "उच्च शिक्षा प्रवेश परीक्षा",
      "ऑनलाइन लर्निंग प्लेटफॉर्म"
    ],
    correct: 1,
    explanation: "Vidya Pravesh कक्षा 1 में प्रवेश लेने वाले बच्चों के लिए 3 महीने का 'Play-based School Preparation Module' है जो NCERT द्वारा विकसित किया गया। इसका उद्देश्य बच्चों को औपचारिक शिक्षा हेतु तैयार करना है।"
  },
  {
    q: "NEP 2020 ने 'PM eVIDYA' कार्यक्रम के अंतर्गत 'One Class, One Channel' की अवधारणा किस उद्देश्य से शुरू की?",
    options: [
      "मनोरंजन हेतु",
      "प्रत्येक कक्षा (1–12) के लिए एक समर्पित DTH/TV चैनल के माध्यम से शैक्षिक सामग्री प्रसारित करने हेतु",
      "केवल अंग्रेजी शिक्षा हेतु",
      "केवल परीक्षा तैयारी हेतु"
    ],
    correct: 1,
    explanation: "PM eVIDYA के अंतर्गत 'One Class, One Channel' अवधारणा में कक्षा 1–12 प्रत्येक के लिए एक समर्पित DTH/TV चैनल (SWAYAM PRABHA) से शैक्षिक सामग्री प्रसारित की जाती है।"
  },
  {
    q: "NEP 2020 ने 'SWAYAM' (Study Webs of Active-Learning for Young Aspiring Minds) प्लेटफॉर्म का विस्तार किस प्रकार प्रस्तावित किया?",
    options: [
      "SWAYAM बंद किया जाए",
      "SWAYAM पर अधिक MOOC (Massive Open Online Courses) उपलब्ध कराए जाएँ, Credit Transfer की सुविधा हो",
      "केवल हिंदी में",
      "केवल विदेशी पाठ्यक्रम"
    ],
    correct: 1,
    explanation: "NEP 2020 ने SWAYAM प्लेटफॉर्म पर अधिक MOOCs उपलब्ध कराने, इनमें Credit Transfer (ABC के माध्यम से) की सुविधा देने और इन्हें भारतीय भाषाओं में उपलब्ध कराने का प्रस्ताव किया।"
  },
  {
    q: "NEP 2020 ने 'Virtual Labs' (आभासी प्रयोगशालाएँ) किस उद्देश्य से प्रस्तावित कीं?",
    options: [
      "खेलकूद हेतु",
      "ऐसे छात्रों एवं संस्थानों को प्रयोगशाला सुविधा उपलब्ध कराने हेतु जिनके पास भौतिक प्रयोगशालाएँ नहीं हैं",
      "केवल अनुसंधान हेतु",
      "केवल विदेशी छात्रों हेतु"
    ],
    correct: 1,
    explanation: "Virtual Labs उन छात्रों एवं संस्थानों को ऑनलाइन प्रयोगशाला अनुभव प्रदान करने हेतु प्रस्तावित की गईं जिनके पास भौतिक प्रयोगशालाएँ अनुपलब्ध या अपर्याप्त हैं।"
  },
  {
    q: "NEP 2020 में 'Equitable Use of Technology' (प्रौद्योगिकी का समतापूर्ण उपयोग) के अंतर्गत 'Digital Divide' (डिजिटल विभाजन) को कम करने हेतु क्या उपाय सुझाए?",
    options: [
      "केवल स्मार्टफोन वितरण",
      "Community Digital Libraries, Smart Classrooms, DTH/TV Channels, Radio, Podcast — बहुमाध्यम दृष्टिकोण",
      "केवल लैपटॉप वितरण",
      "केवल ब्रॉडबैंड कनेक्शन"
    ],
    correct: 1,
    explanation: "NEP 2020 ने Digital Divide कम करने हेतु बहुमाध्यम दृष्टिकोण अपनाया: Community Digital Libraries, Smart Classrooms, DTH/TV (PM eVIDYA), Radio, Podcasts ताकि इंटरनेट उपलब्ध न होने पर भी शिक्षा पहुँचे।"
  },
  {
    q: "NEP 2020 ने 'Indian Knowledge Systems' (भारतीय ज्ञान परंपरा — IKS) को पाठ्यक्रम में शामिल करने का क्या प्रावधान किया?",
    options: [
      "IKS को पूर्णतः अनदेखा किया",
      "योग, आयुर्वेद, गणित (शून्य, दशमलव), धातुकर्म, वास्तुकला, खगोलशास्त्र आदि IKS को पाठ्यक्रम में एकीकृत किया जाए",
      "केवल योग शामिल किया",
      "केवल संस्कृत में अध्ययन"
    ],
    correct: 1,
    explanation: "NEP 2020 ने IKS — योग, आयुर्वेद, भारतीय गणित, धातुकर्म, वास्तुकला, खगोलशास्त्र, दर्शन, कृषि विज्ञान आदि — को पाठ्यक्रम में एकीकृत करने का प्रावधान किया।"
  },
  {
    q: "NEP 2020 ने 'Anusandhan National Research Foundation' (ANRF) अधिनियम किस वर्ष पारित हुआ?",
    options: ["2021", "2022", "2023", "2024"],
    correct: 2,
    explanation: "ANRF अधिनियम (Anusandhan National Research Foundation Act) 2023 में संसद द्वारा पारित किया गया। इसने NRF की संरचना एवं कार्यप्रणाली को कानूनी ढाँचा प्रदान किया।"
  },
  {
    q: "NEP 2020 में 'Lok Vidya' (लोक विद्या) को किस संदर्भ में शामिल किया गया?",
    options: [
      "केवल लोक गीत",
      "भारत में विकसित महत्वपूर्ण व्यावसायिक ज्ञान — कृषि, बागवानी, मत्स्य पालन, कुटीर उद्योग, हस्तशिल्प आदि — को शैक्षिक पाठ्यक्रम में शामिल करने हेतु",
      "केवल शहरी शिक्षा",
      "केवल पर्यटन शिक्षा"
    ],
    correct: 1,
    explanation: "NEP 2020 ने 'Lok Vidya' — भारत में विकसित महत्वपूर्ण व्यावसायिक ज्ञान जैसे कृषि, बागवानी, मत्स्य पालन, कुटीर उद्योग, हस्तशिल्प — को Vocational Education के अंतर्गत पाठ्यक्रम में शामिल करने का प्रावधान किया।"
  },
  {
    q: "NEP 2020 ने 'Single Point Entry' (एकल प्रवेश बिंदु) की बजाय 'Multiple Entry and Exit' अपनाया। यह अवधारणा किस प्रमुख अंतरराष्ट्रीय शिक्षा प्रणाली से प्रेरित है?",
    options: [
      "ब्रिटिश प्रणाली",
      "अमेरिकी Liberal Arts प्रणाली एवं यूरोपीय Credit Transfer System (ECTS)",
      "जापानी प्रणाली",
      "ऑस्ट्रेलियाई प्रणाली"
    ],
    correct: 1,
    explanation: "MEES अमेरिकी Liberal Arts Education एवं यूरोपीय Credit Transfer System (ECTS — European Credit Transfer and Accumulation System) से प्रेरित है।"
  },
  {
    q: "NEP 2020 में 'Incubation Centres' (इन्क्यूबेशन सेंटर) की स्थापना किस उद्देश्य से प्रस्तावित की गई?",
    options: [
      "केवल चिकित्सा अनुसंधान",
      "HEIs में नवाचार, उद्यमिता (Entrepreneurship) एवं स्टार्ट-अप संस्कृति को बढ़ावा देने हेतु",
      "केवल कृषि अनुसंधान",
      "केवल सरकारी उपयोग हेतु"
    ],
    correct: 1,
    explanation: "NEP 2020 ने HEIs में Technology Development and Incubation Centres स्थापित करने का प्रस्ताव किया ताकि छात्रों में नवाचार, उद्यमिता एवं स्टार्ट-अप संस्कृति को बढ़ावा मिले।"
  },
  {
    q: "NEP 2020 ने 'National Textbook with Local Content and Flavour' की अवधारणा का अर्थ क्या है?",
    options: [
      "केवल राष्ट्रीय पाठ्यपुस्तक",
      "राष्ट्रीय स्तर की पाठ्यपुस्तकों में स्थानीय उदाहरणों, कहानियों, भूगोल, संस्कृति एवं संदर्भों को शामिल करना",
      "केवल स्थानीय पाठ्यपुस्तक",
      "पाठ्यपुस्तक रहित शिक्षा"
    ],
    correct: 1,
    explanation: "NEP 2020 ने राष्ट्रीय पाठ्यपुस्तकों में 'Local Content and Flavour' — स्थानीय उदाहरण, कहानियाँ, भूगोल, संस्कृति, शिल्प, कला — शामिल करने का प्रावधान किया ताकि शिक्षा बच्चों के जीवन से जुड़ी हो।"
  },
  {
    q: "NEP 2020 ने 'Academic Staff Colleges' (ASCs) का नाम बदलकर क्या रखने का प्रस्ताव किया?",
    options: [
      "Faculty Development Centres (FDCs)",
      "Human Resource Development Centres (HRDCs)",
      "Teaching-Learning Centres (TLCs)",
      "National Training Centres (NTCs)"
    ],
    correct: 2,
    explanation: "NEP 2020 में Academic Staff Colleges के संदर्भ में 'Teaching-Learning Centres' (TLCs) की अवधारणा प्रस्तावित की गई जो शिक्षकों के निरंतर व्यावसायिक विकास (CPD) में सहायता करेंगे।"
  },
  {
    q: "NEP 2020 ने 'Panchayati Raj Institutions' (PRIs) एवं 'Urban Local Bodies' (ULBs) को शिक्षा में किस प्रकार शामिल करने का प्रस्ताव किया?",
    options: [
      "कोई भूमिका नहीं",
      "विद्यालय प्रबंधन, शिक्षक भर्ती, अवसंरचना विकास एवं शिक्षा की निगरानी में सक्रिय भूमिका",
      "केवल वित्तीय भूमिका",
      "केवल भूमि आवंटन"
    ],
    correct: 1,
    explanation: "NEP 2020 ने PRIs एवं ULBs को विद्यालय प्रबंधन, शिक्षक नियुक्ति, अवसंरचना विकास एवं शिक्षा की गुणवत्ता निगरानी में सक्रिय भूमिका (Active Role) देने का प्रस्ताव किया।"
  },
  {
    q: "NEP 2020 ने 'Private Philanthropic Partnership' (निजी परोपकारी भागीदारी) को शिक्षा में किस शर्त के साथ प्रोत्साहित किया?",
    options: [
      "बिना किसी शर्त के",
      "शिक्षा में 'लाभ-रहित' (Not-for-Profit) दृष्टिकोण अनिवार्य — शिक्षा 'व्यवसाय' नहीं बल्कि 'सेवा' है",
      "केवल सरकारी भागीदारी",
      "केवल विदेशी निवेश"
    ],
    correct: 1,
    explanation: "NEP 2020 ने शिक्षा को 'Not-for-Profit' (लाभ-रहित) बनाए रखने पर बल दिया और Private Philanthropic Partnership को 'शिक्षा सेवा' के रूप में प्रोत्साहित किया।"
  },
  {
    q: "NEP 2020 ने 'Counsellors and Social Workers' को विद्यालयों में किस उद्देश्य से नियुक्त करने का प्रस्ताव किया?",
    options: [
      "शिक्षण कार्य हेतु",
      "छात्रों के मानसिक स्वास्थ्य, भावनात्मक कल्याण एवं करियर मार्गदर्शन (Career Counselling) हेतु",
      "प्रशासनिक कार्य हेतु",
      "परीक्षा निरीक्षण हेतु"
    ],
    correct: 1,
    explanation: "NEP 2020 ने विद्यालयों में Trained Counsellors एवं Social Workers की नियुक्ति का प्रस्ताव किया ताकि छात्रों को मानसिक स्वास्थ्य सहायता, भावनात्मक कल्याण (Emotional Wellbeing) एवं Career Counselling मिल सके।"
  },
  {
    q: "NEP 2020 में 'Sign Language' (सांकेतिक भाषा) के बारे में क्या प्रावधान किया गया?",
    options: [
      "कोई प्रावधान नहीं",
      "Indian Sign Language (ISL) को भाषा विकल्प के रूप में मान्यता दी जाएगी और श्रवण-बाधित छात्रों हेतु ISL में शिक्षण सामग्री तैयार की जाएगी",
      "केवल ब्रेल का प्रावधान",
      "सांकेतिक भाषा पर प्रतिबंध"
    ],
    correct: 1,
    explanation: "NEP 2020 ने Indian Sign Language (ISL) को मान्यता दी, इसे भाषा विकल्प के रूप में उपलब्ध कराने और श्रवण-बाधित (Hearing Impaired) छात्रों हेतु ISL में शिक्षण सामग्री एवं प्रशिक्षित शिक्षक उपलब्ध कराने का प्रावधान किया।"
  },
  {
    q: "NEP 2020 में 'National Institute for Pali, Persian, and Prakrit' की स्थापना किस उद्देश्य से प्रस्तावित की गई?",
    options: [
      "केवल धार्मिक शिक्षा",
      "पालि, फारसी एवं प्राकृत भाषाओं के संरक्षण, अध्ययन एवं अनुसंधान हेतु",
      "केवल अनुवाद कार्य",
      "केवल पर्यटन शिक्षा"
    ],
    correct: 1,
    explanation: "NEP 2020 ने पालि, फारसी एवं प्राकृत जैसी शास्त्रीय भाषाओं के संरक्षण, अध्ययन, अध्यापन एवं अनुसंधान हेतु 'National Institute for Pali, Persian, and Prakrit' की स्थापना का प्रस्ताव किया।"
  },
  {
    q: "NEP 2020 ने 'Children with Disabilities' (दिव्यांग बच्चों) की शिक्षा हेतु 'Cross-Disability Training' का प्रावधान किस उद्देश्य से किया?",
    options: [
      "केवल विशेष विद्यालयों में",
      "सभी शिक्षकों को विभिन्न प्रकार की दिव्यांगताओं (Visual, Hearing, Intellectual, Physical) से निपटने हेतु प्रशिक्षित करना — समावेशी शिक्षा (Inclusive Education) हेतु",
      "केवल परीक्षा छूट देने हेतु",
      "केवल सरकारी विद्यालयों में"
    ],
    correct: 1,
    explanation: "NEP 2020 ने सभी शिक्षकों को 'Cross-Disability Training' — विभिन्न प्रकार की दिव्यांगताओं (दृष्टि, श्रवण, बौद्धिक, शारीरिक) से निपटने का प्रशिक्षण — देने का प्रावधान किया ताकि Inclusive Education (समावेशी शिक्षा) सुनिश्चित हो।"
  },
  {
    q: "NEP 2020 ने 'National Skills Qualifications Framework' (NSQF) को किसके साथ एकीकृत (Align) करने का प्रस्ताव किया?",
    options: [
      "UGC Framework",
      "National Higher Education Qualification Framework (NHEQF)",
      "CBSE Framework",
      "ILO Standards"
    ],
    correct: 1,
    explanation: "NEP 2020 ने NSQF (National Skills Qualifications Framework) को NHEQF (National Higher Education Qualification Framework) के साथ एकीकृत (Align) करने का प्रस्ताव किया ताकि Vocational एवं Academic Education की Credit Transferability सुनिश्चित हो।"
  },
  {
    q: "NEP 2020 ने 'Higher Education' (उच्च शिक्षा) में Affiliate System (संबद्धता प्रणाली) के बारे में क्या प्रस्ताव किया?",
    options: [
      "Affiliate System जारी रहेगा",
      "Affiliate System को 15 वर्षों में चरणबद्ध रूप से समाप्त (Phased Out) किया जाएगा — सभी Colleges स्वायत्त या Constituent Colleges बनेंगे",
      "Affiliate System और मजबूत किया जाएगा",
      "केवल निजी कॉलेजों में Affiliate System"
    ],
    correct: 1,
    explanation: "NEP 2020 ने Affiliate System को 15 वर्षों में चरणबद्ध रूप से समाप्त करने का प्रस्ताव किया। सभी Affiliated Colleges धीरे-धीरे 'Autonomous Degree-Granting Colleges' या 'Constituent Colleges' बनेंगे।"
  },
  {
    q: "NEP 2020 ने 'Research' (अनुसंधान) को किस स्तर पर अनिवार्य बनाने का प्रस्ताव किया?",
    options: [
      "केवल PhD स्तर पर",
      "Research-Intensive Universities एवं Teaching-Intensive Universities — दोनों में अनुसंधान संस्कृति विकसित करना अनिवार्य",
      "केवल IITs में",
      "केवल विदेशी सहयोग में"
    ],
    correct: 1,
    explanation: "NEP 2020 ने दोनों प्रकार के HEIs — Research-Intensive एवं Teaching-Intensive Universities — में अनुसंधान संस्कृति (Research Culture) विकसित करना अनिवार्य किया। Teaching Universities में भी अनुसंधान को बढ़ावा दिया जाएगा।"
  },
  {
    q: "NEP 2020 ने 'Integrated Higher Education System' (एकीकृत उच्च शिक्षा प्रणाली) के अंतर्गत किन प्रकार की 'Standalone Institutions' को चरणबद्ध रूप से समाप्त करने का प्रस्ताव किया?",
    options: [
      "IITs एवं IIMs",
      "Single-stream (एकल-विषय) HEIs — जो केवल एक विषय/धारा में शिक्षा देते हैं",
      "केंद्रीय विश्वविद्यालय",
      "राज्य विश्वविद्यालय"
    ],
    correct: 1,
    explanation: "NEP 2020 ने Single-stream HEIs (जो केवल एक विषय जैसे केवल इंजीनियरिंग, केवल प्रबंधन, या केवल कला में शिक्षा देते हैं) को Multidisciplinary बनाने या चरणबद्ध रूप से समाप्त करने का प्रस्ताव किया।"
  },
  {
    q: "NEP 2020 ने 'Teacher Eligibility Test' (TET) में किन दो प्रमुख बदलावों का प्रस्ताव किया?",
    options: [
      "TET समाप्त, साक्षात्कार शुरू",
      "TET को मजबूत बनाना — विषय ज्ञान + शिक्षण-शास्त्र (Pedagogy) दोनों का परीक्षण; TET/NTA परीक्षा सभी भर्तियों का आधार",
      "TET केवल एक बार",
      "TET केवल निजी विद्यालयों हेतु"
    ],
    correct: 1,
    explanation: "NEP 2020 ने TET को मजबूत बनाने का प्रस्ताव किया — इसमें (1) विषय-वस्तु ज्ञान (Content Knowledge) + (2) शिक्षण-शास्त्र (Pedagogy) एवं शिक्षण-कौशल — दोनों का परीक्षण शामिल होगा। TET/NTA परीक्षा सभी शिक्षक भर्तियों का आधार होगी।"
  },
  {
    q: "NEP 2020 में शिक्षकों के 'Non-Teaching Tasks' (गैर-शिक्षण कार्य) जैसे चुनाव ड्यूटी, जनगणना आदि के बारे में क्या कहा गया?",
    options: [
      "ये कार्य जारी रहेंगे",
      "शिक्षकों को गैर-शिक्षण कार्यों में नहीं लगाया जाएगा — ताकि वे अपना पूरा समय शिक्षण में दे सकें",
      "और अधिक कार्य सौंपे जाएँगे",
      "केवल सेवानिवृत्त शिक्षकों को ये कार्य"
    ],
    correct: 1,
    explanation: "NEP 2020 ने स्पष्ट रूप से कहा कि शिक्षकों को Non-Teaching Tasks (जैसे चुनाव ड्यूटी, जनगणना, मध्याह्न भोजन वितरण) में नहीं लगाया जाना चाहिए ताकि वे शिक्षण पर ध्यान केंद्रित कर सकें।"
  },
  {
    q: "NEP 2020 ने 'Indian Institutes of Translation and Interpretation' (IITI) की स्थापना के अलावा किस संस्थान की स्थापना भाषा विकास हेतु प्रस्तावित की?",
    options: [
      "National Language Institute",
      "Indian Institute of Heritage (IIH)",
      "National Institute for Hindi",
      "Sanskrit University"
    ],
    correct: 1,
    explanation: "NEP 2020 ने भारतीय विरासत (Heritage), संस्कृति, कला, संगीत एवं इतिहास के संरक्षण, अध्ययन एवं अनुसंधान हेतु 'Indian Institute of Heritage' (IIH) की स्थापना का भी प्रस्ताव किया।"
  }
];

// ══════════════════ QUIZ ENGINE (Unchanged) ══════════════════

// ── DOM REFERENCES ──
const welcomeScreen = document.getElementById("welcome-screen");
const quizScreen    = document.getElementById("quiz-screen");
const resultScreen  = document.getElementById("result-screen");

const userNameInput = document.getElementById("user-name");
const nameError     = document.getElementById("name-error");
const startBtn      = document.getElementById("start-btn");

const userDisplay   = document.getElementById("user-display");
const progressText  = document.getElementById("progress-text");
const progressBar   = document.getElementById("progress-bar");
const questionNumber= document.getElementById("question-number");
const questionText  = document.getElementById("question-text");
const optionsList   = document.getElementById("options-list");

const prevBtn       = document.getElementById("prev-btn");
const nextBtn       = document.getElementById("next-btn");
const submitBtn     = document.getElementById("submit-btn");
const toggleMapBtn  = document.getElementById("toggle-map-btn");
const questionMap   = document.getElementById("question-map");

const confirmModal  = document.getElementById("confirm-modal");
const modalMessage  = document.getElementById("modal-message");
const modalCancel   = document.getElementById("modal-cancel");
const modalConfirm  = document.getElementById("modal-confirm");

const resultUserName   = document.getElementById("result-user-name");
const scoreNumber      = document.getElementById("score-number");
const scorePercentage  = document.getElementById("score-percentage");
const scoreRemark      = document.getElementById("score-remark");
const ringFill         = document.getElementById("ring-fill");
const statCorrect      = document.getElementById("stat-correct");
const statWrong        = document.getElementById("stat-wrong");
const statUnanswered   = document.getElementById("stat-unanswered");
const reviewList       = document.getElementById("review-list");
const retryBtn         = document.getElementById("retry-btn");

// ── STATE ──
const state = {
  userName: "",
  currentQ: 0,
  answers: new Array(quizData.length).fill(null),
  submitted: false,
  mapVisible: false
};

// ══════════════════ HELPERS ══════════════════
function showScreen(screen) {
  [welcomeScreen, quizScreen, resultScreen].forEach(s => s.classList.remove("active"));
  screen.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ══════════════════ START QUIZ ══════════════════
startBtn.addEventListener("click", () => {
  const name = userNameInput.value.trim();
  if (!name) {
    nameError.textContent = "⚠️ कृपया अपना नाम दर्ज करें।";
    userNameInput.classList.add("input-error");
    userNameInput.focus();
    return;
  }
  nameError.textContent = "";
  userNameInput.classList.remove("input-error");
  state.userName = name;
  userDisplay.textContent = `👤 ${name}`;
  renderQuestion();
  buildQuestionMap();
  showScreen(quizScreen);
});

userNameInput.addEventListener("input", () => {
  nameError.textContent = "";
  userNameInput.classList.remove("input-error");
});

userNameInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") startBtn.click();
});

// ══════════════════ RENDER QUESTION ══════════════════
function renderQuestion() {
  const total = quizData.length;
  const i = state.currentQ;
  const q = quizData[i];
  const labels = ["A", "B", "C", "D"];

  progressText.textContent = `प्रश्न ${i + 1} / ${total}`;
  progressBar.style.width = `${((i + 1) / total) * 100}%`;
  questionNumber.textContent = `प्रश्न ${i + 1}`;
  questionText.textContent = q.q;

  optionsList.innerHTML = "";
  q.options.forEach((opt, j) => {
    const btn = document.createElement("button");
    btn.className = `option-btn${state.answers[i] === j ? " selected" : ""}`;
    btn.setAttribute("role", "radio");
    btn.setAttribute("aria-checked", state.answers[i] === j);
    btn.innerHTML = `<span class="option-label">${labels[j]}</span><span class="option-text">${opt}</span>`;
    btn.addEventListener("click", () => selectOption(j));
    optionsList.appendChild(btn);
  });

  prevBtn.disabled = i === 0;
  nextBtn.disabled = i === total - 1;
  updateMapHighlights();
}

function selectOption(j) {
  state.answers[state.currentQ] = j;
  renderQuestion();
}

// ══════════════════ NAV ══════════════════
prevBtn.addEventListener("click", () => {
  if (state.currentQ > 0) {
    state.currentQ--;
    renderQuestion();
  }
});

nextBtn.addEventListener("click", () => {
  if (state.currentQ < quizData.length - 1) {
    state.currentQ++;
    renderQuestion();
  }
});

// ══════════════════ QUESTION MAP ══════════════════
function buildQuestionMap() {
  questionMap.innerHTML = "";
  quizData.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.className = "map-dot";
    dot.textContent = i + 1;
    dot.setAttribute("aria-label", `प्रश्न ${i + 1} पर जाएँ`);
    dot.addEventListener("click", () => {
      state.currentQ = i;
      renderQuestion();
    });
    questionMap.appendChild(dot);
  });
}

function updateMapHighlights() {
  const dots = questionMap.querySelectorAll(".map-dot");
  dots.forEach((dot, i) => {
    dot.classList.remove("answered", "current");
    if (state.answers[i] !== null) dot.classList.add("answered");
    if (i === state.currentQ) dot.classList.add("current");
  });
}

toggleMapBtn.addEventListener("click", () => {
  state.mapVisible = !state.mapVisible;
  questionMap.classList.toggle("hidden", !state.mapVisible);
  toggleMapBtn.textContent = state.mapVisible ? "📋 सूची छिपाएँ" : "📋 प्रश्न सूची";
});

// ══════════════════ SUBMIT ══════════════════
submitBtn.addEventListener("click", () => {
  const unanswered = state.answers.filter(a => a === null).length;
  if (unanswered > 0) {
    modalMessage.textContent = `आपने अभी ${unanswered} प्रश्न छोड़े हैं। क्या आप फिर भी जमा करना चाहते हैं?`;
  } else {
    modalMessage.textContent = `आपने सभी ${quizData.length} प्रश्नों के उत्तर दिए हैं। क्या आप टेस्ट जमा करना चाहते हैं?`;
  }
  confirmModal.classList.remove("hidden");
});

modalCancel.addEventListener("click", () => {
  confirmModal.classList.add("hidden");
});

modalConfirm.addEventListener("click", () => {
  confirmModal.classList.add("hidden");
  state.submitted = true;
  showResults();
});

confirmModal.addEventListener("click", (e) => {
  if (e.target === confirmModal) confirmModal.classList.add("hidden");
});

// ══════════════════ RESULTS ══════════════════
function showResults() {
  const total = quizData.length;
  let correct = 0, wrong = 0, unanswered = 0;

  quizData.forEach((q, i) => {
    if (state.answers[i] === null) unanswered++;
    else if (state.answers[i] === q.correct) correct++;
    else wrong++;
  });

  const pct = Math.round((correct / total) * 100);

  resultUserName.textContent = `🎓 ${state.userName}`;
  scoreNumber.textContent = correct;
  scorePercentage.textContent = `${pct}%`;
  statCorrect.textContent = correct;
  statWrong.textContent = wrong;
  statUnanswered.textContent = unanswered;

  if (pct >= 90) scoreRemark.textContent = "🏆 उत्कृष्ट! अद्भुत प्रदर्शन!";
  else if (pct >= 70) scoreRemark.textContent = "👏 बहुत अच्छा! शानदार प्रयास!";
  else if (pct >= 50) scoreRemark.textContent = "👍 अच्छा! और अभ्यास करें।";
  else if (pct >= 30) scoreRemark.textContent = "📖 और मेहनत की जरूरत है।";
  else scoreRemark.textContent = "💪 निराश न हों, दोबारा प्रयास करें!";

  const circumference = 2 * Math.PI * 54;
  const offset = circumference - (correct / total) * circumference;
  setTimeout(() => {
    ringFill.style.strokeDashoffset = offset;
  }, 100);

  buildReview();
  showScreen(resultScreen);
}

function buildReview() {
  const labels = ["A", "B", "C", "D"];
  reviewList.innerHTML = "";

  quizData.forEach((q, i) => {
    const userAns = state.answers[i];
    const isCorrect = userAns === q.correct;
    const isUnanswered = userAns === null;

    let statusClass, badgeClass, badgeText;
    if (isUnanswered) {
      statusClass = "review-unanswered";
      badgeClass = "badge-unanswered";
      badgeText = "अनुत्तरित";
    } else if (isCorrect) {
      statusClass = "review-correct";
      badgeClass = "badge-correct";
      badgeText = "✅ सही";
    } else {
      statusClass = "review-wrong";
      badgeClass = "badge-wrong";
      badgeText = "❌ गलत";
    }

    let optionsHTML = "";
    q.options.forEach((opt, j) => {
      let cls = "review-option is-neutral";
      let prefix = `${labels[j]}. `;
      let suffix = "";

      if (j === q.correct) {
        cls = "review-option is-correct";
        suffix = " ✅ (सही उत्तर)";
      }
      if (userAns === j && j !== q.correct) {
        cls = "review-option is-wrong-selected";
        suffix = " ❌ (आपका उत्तर)";
      }
      if (userAns === j && j === q.correct) {
        suffix = " ✅ (आपका उत्तर — सही)";
      }

      optionsHTML += `<div class="${cls}">${prefix}${opt}${suffix}</div>`;
    });

    const item = document.createElement("div");
    item.className = `review-item ${statusClass}`;
    item.innerHTML = `
      <div class="review-q-number">प्रश्न ${i + 1}</div>
      <span class="review-status-badge ${badgeClass}">${badgeText}</span>
      <p class="review-q-text">${q.q}</p>
      <div class="review-options">${optionsHTML}</div>
      <div class="review-explanation"><strong>व्याख्या:</strong> ${q.explanation}</div>
    `;
    reviewList.appendChild(item);
  });
}

// ══════════════════ RETRY ══════════════════
retryBtn.addEventListener("click", () => {
  state.currentQ = 0;
  state.answers = new Array(quizData.length).fill(null);
  state.submitted = false;
  state.mapVisible = false;
  questionMap.classList.add("hidden");
  toggleMapBtn.textContent = "📋 प्रश्न सूची";
  ringFill.style.strokeDashoffset = 339.292;
  showScreen(welcomeScreen);
  userNameInput.value = "";
  userNameInput.focus();
});

// ══════════════════ KEYBOARD NAV ══════════════════
document.addEventListener("keydown", (e) => {
  if (!quizScreen.classList.contains("active") || state.submitted) return;
  if (e.key === "ArrowLeft" && state.currentQ > 0) {
    state.currentQ--;
    renderQuestion();
  } else if (e.key === "ArrowRight" && state.currentQ < quizData.length - 1) {
    state.currentQ++;
    renderQuestion();
  } else if (e.key >= "1" && e.key <= "4") {
    selectOption(parseInt(e.key) - 1);
  }
});
