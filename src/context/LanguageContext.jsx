import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');

    const translations = {
        en: {
            // Navbar
            home: 'Home',
            about: 'About Us',
            services: 'Services',
            zed: 'ZED Certification',
            sarpanch: 'Sarpanch Samvaad',
            conclave: 'National Quality Conclave',
            careers: 'Careers',
            gallery: 'Gallery',
            contact: 'Contact Us',

            // Hero
            hero_badge: 'Empowering MSMEs in Andhra Pradesh',
            hero_title: 'Driving Growth with ZED Certification & Sarpanch Samvaad',
            hero_desc: 'We are proudly driving the state-wide recruitment of Mandal Coordinators for the ZED Certification and Sarpanch Samvaad initiatives, ensuring impactful implementation and grassroots connectivity.',
            hero_btn_zed: 'ZED Registration',
            hero_btn_contact: 'Contact Us',

            // ZED Page
            zed_title: 'MSME ZED Certification',
            zed_subtitle: '"Zero Defect Zero Effect" — Empowering Indian MSMEs for Global Quality Standards and Sustainable Growth.',
            zed_what: 'What is ZED?',
            zed_official_badge: 'Official Ministry of MSME Scheme',
            zed_desc1: 'The ZED (Zero Defect Zero Effect) scheme is a flagship initiative by the Ministry of MSME, Government of India. It aims to create a culture of world-class manufacturing where quality is compromised at no stage (Zero Defect) and operations have minimal impact on our environment (Zero Effect).',
            zed_desc2: 'As official facilitators, DS Projects helps your business adopt these standards, improving resource efficiency and positioning you as a leader in global supply chains.',
            zed_benefits: 'Key Benefits for Your Business',
            zed_levels: 'Certification Levels',
            zed_women_title: 'Support for Women Entrepreneurs',
            zed_women_desc: 'Women-owned MSMEs receive Additional 10% Subsidy and exclusive handholding support. We are committed to fostering women leadership in the manufacturing sector across Andhra Pradesh.',
            zed_btn_consult: 'Book a Free Consultation',

            // Sarpanch Page
            sarpanch_title: 'Sarpanch Samvaad',
            sarpanch_subtitle: "Connecting 2.5 Lakh Sarpanchs across India on a single digital platform to foster 'Quality Villages'.",
            sarpanch_qci_badge: 'Quality Council of India (QCI) Initiative',
            sarpanch_about_title: 'About the Platform',
            sarpanch_about_desc: 'Sarpanch Samvaad is an innovative mobile application launched by the Quality Council of India (QCI). It serves as a comprehensive networking and capacity-building platform for Sarpanchs (Village Heads) across the nation.',
            sarpanch_features_title: 'Key Objectives',
            sarpanch_andhra_title: 'Pride of Andhra Pradesh',
            sarpanch_btn_support: 'Contact Support Team',

            // Conclave Page
            conclave_title: 'National Quality Conclave',
            conclave_badge: 'Press Information Bureau (PIB) Release',
            conclave_main_title: 'Union Minister of Jal Shakti Shri C R Patil inaugurates the Sarpanch Samvaad National Quality Conclave',
            conclave_quote: '"Empowering grassroots leadership for Viksit Bharat 2047"',
        },
        te: {
            // Navbar
            home: 'హోమ్',
            about: 'మా గురించి',
            services: 'సేవలు',
            zed: 'ZED ధృవీకరణ',
            sarpanch: 'సర్పంచ్ సంవాద్',
            conclave: 'నేషనల్ క్వాలిటీ కాన్క్లేవ్',
            careers: 'కెరీర్',
            gallery: 'గ్యాలరీ',
            contact: 'మమ్మల్ని సంప్రదించండి',

            // Hero
            hero_badge: 'ఆంధ్రప్రదేశ్‌లోని MSMEలను సాధికారపరచడం',
            hero_title: 'ZED సర్టిఫికేషన్ & ప్రభుత్వ ప్రాజెక్టులతో వృద్ధిని పెంచడం',
            hero_desc: 'షణ్ముఖ ప్రాజెక్ట్స్ MSME ZED సర్టిఫికేషన్ (జీరో డిఫెక్ట్ జీరో ఎఫెక్ట్) మరియు ప్రభుత్వ కాంట్రాక్ట్ అమలు కోసం ఒక నమ్మకమైన భాగస్వామి. మేము విధానానికి మరియు ఆచరణకు మధ్య అంతరాన్ని తగ్గిస్తాము.',
            hero_btn_zed: 'ZED నమోదు',
            hero_btn_contact: 'మమ్మల్ని సంప్రదించండి',

            // ZED Page
            zed_title: 'MSME ZED సర్టిఫికేషన్',
            zed_subtitle: '"జీరో డిఫెక్ట్ జీరో ఎఫెక్ట్" — గ్లోబల్ క్వాలిటీ ప్రమాణాలు మరియు సుస్థిర వృద్ధి కోసం భారతీయ MSMEలను సాధికారపరచడం.',
            zed_what: 'ZED అంటే ఏమిటి?',
            zed_official_badge: 'అధికారిక MSME మంత్రిత్వ శాఖ పథకం',
            zed_desc1: 'ZED (జీరో డిఫెక్ట్ జీరో ఎఫెక్ట్) పథకం భారత ప్రభుత్వ MSME మంత్రిత్వ శాఖ యొక్క ప్రధాన చొరవ. నాణ్యతలో ఎక్కడా రాజీ పడకుండా (జీరో డిఫెక్ట్) మరియు పర్యావరణంపై కనిష్ట ప్రభావం చూపే (జీరో ఎఫెక్ట్) ప్రపంచ స్థాయి తయారీ సంస్కృతిని సృష్టించడం దీని లక్ష్యం.',
            zed_desc2: 'అధికారిక ఫెసిలిటేటర్లుగా, షణ్ముఖ ప్రాజెక్ట్స్ మీ వ్యాపారం ఈ ప్రమాణాలను పాటించడంలో, వనరుల సామర్థ్యాన్ని మెరుగుపరచడంలో మరియు గ్లోబల్ సప్లై చైన్‌లలో మిమ్మల్ని నాయకుడిగా నిలబెట్టడంలో సహాయపడుతుంది.',
            zed_benefits: 'మీ వ్యాపారం కోసం ముఖ్య ప్రయోజనాలు',
            zed_levels: 'సర్టిఫికేషన్ స్థాయిలు',
            zed_women_title: 'మహిళా పారిశ్రామికవేత్తలకు మద్దతు',
            zed_women_desc: 'మహిళల యాజమాన్యంలోని MSMEలు అదనంగా 10% సబ్సిడీ మరియు ప్రత్యేక హ్యాండ్‌హోల్డింగ్ మద్దతును పొందుతాయి. ఆంధ్రప్రదేశ్ అంతటా తయారీ రంగంలో మహిళా నాయకత్వాన్ని పెంపొందించడానికి మేము కట్టుబడి ఉన్నాము.',
            zed_btn_consult: 'ఉచిత సంప్రదింపులను బుక్ చేయండి',

            // Sarpanch Page
            sarpanch_title: 'సర్పంచ్ సంవాద్',
            sarpanch_subtitle: "'క్వాలిటీ విలేజ్'లను పెంపొందించడానికి భారతదేశం అంతటా 2.5 లక్షల మంది సర్పంచులను ఒకే డిజిటల్ ప్లాట్‌ఫారమ్‌లో అనుసంధానించడం.",
            sarpanch_qci_badge: 'క్వాలిటీ కౌన్సిల్ ఆఫ్ ఇండియా (QCI) చొరవ',
            sarpanch_about_title: 'ప్లాట్‌ఫారమ్ గురించి',
            sarpanch_about_desc: 'సర్పంచ్ సంవాద్ అనేది క్వాలిటీ కౌన్సిల్ ఆఫ్ ఇండియా (QCI) ప్రారంభించిన ఒక వినూత్న మొబైల్ అప్లికేషన్. ఇది దేశవ్యాప్తంగా ఉన్న సర్పంచులకు (గ్రామ పెద్దలకు) సమగ్ర నెట్‌వర్కింగ్ మరియు సామర్థ్య పెంపు ప్లాట్‌ఫారమ్‌గా పనిచేస్తుంది.',
            sarpanch_features_title: 'ముఖ్య ఉద్దేశ్యాలు',
            sarpanch_andhra_title: 'ఆంధ్రప్రదేశ్ గర్వకారణం',
            sarpanch_btn_support: 'మద్దతు బృందాన్ని సంప్రదించండి',

            // Conclave Page
            conclave_title: 'జాతీయ నాణ్యత కాన్క్లేవ్',
            conclave_badge: 'ప్రెస్ ఇన్ఫర్మేషన్ బ్యూరో (PIB) విడుదల',
            conclave_main_title: 'కేంద్ర జలశక్తి మంత్రి శ్రీ సి ఆర్ పాటిల్ సర్పంచ్ సంవాద్ జాతీయ నాణ్యత కాన్క్లేవ్‌ను ప్రారంభించారు',
            conclave_quote: '"వికసిత్ భారత్ 2047 కోసం అట్టడుగు స్థాయి నాయకత్వాన్ని సాధికారపరచడం"',
        }
    };

    const t = (key) => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
