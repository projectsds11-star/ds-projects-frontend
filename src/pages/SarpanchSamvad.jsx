import React from 'react';
import { Users, Smartphone, Award, MessagesSquare, Share2, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import DownloadCard from '../components/DownloadCard';

const SarpanchSamvad = () => {
    const { t } = useLanguage();
    return (
        <div className="bg-[#f8fafc] min-h-screen font-sans">
            {/* Page Header - ZED Theme */}
            <div className="bg-[#0055A4] text-white py-16 md:py-24 border-b-4 border-[#a5d63f] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="inline-block bg-white text-[#0055A4] px-4 py-1 font-black text-xs uppercase tracking-widest mb-6 border-l-4 border-[#a5d63f]">
                        {t('sarpanch_qci_badge')}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black mb-4">{t('sarpanch_title')}</h1>
                    <p className="text-xl md:text-2xl opacity-95 max-w-3xl leading-relaxed border-l-4 border-white pl-4 font-medium">
                        {t('sarpanch_subtitle')}
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Introduction Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-[#1a202c] mb-6 border-l-4 border-[#0055A4] pl-4 uppercase tracking-tight">{t('sarpanch_about_title')}</h2>
                            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                                {t('sarpanch_about_desc')}
                            </p>
                        </div>

                        {/* Telugu Content Section - ZED Themed */}
                        <div className="bg-teal-50 p-8 border border-teal-100 border-l-8 border-l-[#0055A4] rounded-r-sm shadow-sm">
                            <h3 className="font-black text-2xl text-[#003366] mb-4">సర్పంచ్ సంవాద్ (Sarpanch Samvaad)</h3>
                            <p className="text-gray-900 leading-relaxed font-bold text-lg mb-4">
                                ఇది భారత నాణ్యత మండలి (QCI) ద్వారా సర్పంచులను డిజిటల్గా అనుసంధానించే, నైపుణ్యాన్ని పెంచే మరియు గ్రామాభివృద్ధిని ప్రదర్శించే ఒక వినూత్న మొబైల్ అప్లికేషన్.
                            </p>
                            <p className="text-gray-800 leading-relaxed mb-6">
                                2.5 లక్షల మందికి పైగా సర్పంచులను ఒకే వేదికపైకి తీసుకువచ్చి, ఉత్తమ పద్ధతులను పంచుకోవడానికి, కేంద్ర ప్రభుత్వ పథకాల సమాచారం కోసం మరియు 'క్వాలిటీ విలేజ్'ల నిర్మాణానికి ఇది సహాయపడుతుంది.
                            </p>

                            <h4 className="font-bold text-lg text-[#003366] mb-4 border-b border-teal-200 inline-block">ముఖ్య ఉద్దేశ్యాలు & ఫీచర్లు:</h4>
                            <ul className="space-y-4 text-gray-800">
                                <li className="flex gap-2">
                                    <span className="text-[#0055A4] font-black">•</span>
                                    <span><strong>నెట్వర్కింగ్:</strong> భారతదేశం అంతటా ఉన్న సర్పంచ్లతో అనుసంధానం.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-[#0055A4] font-black">•</span>
                                    <span><strong>అభివృద్ధి ప్రదర్శన:</strong> గ్రామాల్లో చేపట్టిన పనులు, సృజనాత్మక కార్యక్రమాలను షేర్ చేయడం.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-[#0055A4] font-black">•</span>
                                    <span><strong>పథకాల సమాచారం:</strong> ప్రభుత్వ పథకాలపై అవగాహన మరియు శిక్షణ పొందడం.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="sticky top-24">
                        <div className="bg-white p-3 rounded-sm shadow-2xl border border-gray-100 transform hover:scale-[1.01] transition-transform">
                            <img src="/images/impact-poster.jpg" alt="Sarpanch Samvaad App" className="w-full h-auto" />
                            <div className="bg-gray-50 p-4 text-center text-sm font-black text-gray-600 uppercase tracking-widest mt-2">
                                Empowering Grassroots Leadership
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-black text-[#1a202c] uppercase tracking-wide">{t('sarpanch_features_title')}</h2>
                        <div className="w-20 h-1 bg-[#a5d63f] mx-auto mt-4"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Networking", icon: <Users className="w-8 h-8 text-[#0055A4]" />, desc: "Connect with Sarpanchs from across India." },
                            { title: "Showcase", icon: <Share2 className="w-8 h-8 text-[#a5d63f]" />, desc: "Share photos and videos of development works." },
                            { title: "Knowledge", icon: <Lightbulb className="w-8 h-8 text-[#0055A4]" />, desc: "Access information on major government schemes." },
                            { title: "Dialogue", icon: <MessagesSquare className="w-8 h-8 text-[#a5d63f]" />, desc: "Forum for discussing village issues & solutions." }
                        ].map((feature, idx) => (
                            <div key={idx} className="bg-white p-8 border border-gray-100 border-t-8 border-t-[#0055A4] hover:shadow-2xl transition-all duration-300">
                                <div className="mb-6">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#1a202c] mb-4">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pride Of Andhra - Special Highlight */}
                <div className="bg-[#003366] rounded-sm shadow-2xl overflow-hidden flex flex-col md:flex-row mb-24">
                    <div className="bg-[#a5d63f] p-10 md:w-1/3 flex flex-col justify-center items-center text-center">
                        <Award size={100} className="mb-6 text-[#003366]" />
                        <h3 className="text-2xl font-black text-[#003366] uppercase tracking-tighter">{t('sarpanch_andhra_title')}</h3>
                    </div>
                    <div className="p-10 md:w-2/3 flex flex-col justify-center text-white">
                        <p className="text-xl md:text-2xl leading-relaxed italic font-medium">
                            "<strong>Vajrakarur Sarpanch (Mandla Monalisa)</strong> from Anantapur district showcased outstanding performance in the Sarpanch Samvaad app competitions at the national level, bringing recognition to the state's developmental efforts."
                        </p>
                    </div>
                </div>

                {/* Details Section */}
                <div className="bg-white p-12 border border-gray-100 shadow-xl rounded-sm mb-20 border-t-8 border-t-[#0055A4]">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3 font-black text-[#0055A4] uppercase tracking-widest text-sm">
                                <Smartphone size={18} /> App Availability
                            </div>
                            <p className="text-gray-700">Available globally on Google Play and Apple App Store.</p>
                        </div>
                        <div className="flex flex-col gap-4 border-l border-gray-100 pl-8">
                            <div className="flex items-center gap-3 font-black text-[#0055A4] uppercase tracking-widest text-sm">
                                <Users size={18} /> Registration
                            </div>
                            <p className="text-gray-700">Exclusively for currently serving Gram Panchayat Sarpanchs.</p>
                        </div>
                        <div className="flex flex-col gap-4 border-l border-gray-100 pl-8">
                            <div className="flex items-center gap-3 font-black text-[#0055A4] uppercase tracking-widest text-sm">
                                <Lightbulb size={18} /> Official Motto
                            </div>
                            <p className="text-2xl font-black text-[#b91c1c] italic tracking-tight">"Samvaad se Samadhan"</p>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <Link to="/contact" className="inline-block px-10 py-4 bg-[#0055A4] text-white font-black uppercase tracking-widest hover:bg-[#003366] rounded-sm transition-all shadow-xl">
                        {t('sarpanch_btn_support')}
                    </Link>
                </div>
            </div>

            {/* Sarpanch Samvaad Visual Banner */}
            <div className="bg-white py-16">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-lg shadow-2xl overflow-hidden border-4 border-[#0055A4]">
                        <img
                            src="/images/sarpanch-samvaad-banner.jpg"
                            alt="Sarpanch Samvaad Mobile App - Quality Council of India"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Download Card Section */}
            <DownloadCard />
        </div>
    );
};

export default SarpanchSamvad;
