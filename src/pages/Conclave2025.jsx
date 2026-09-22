import React from 'react';
import { Calendar, MapPin, Users, Award, Mic, Target, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import DownloadCard from '../components/DownloadCard';

const Conclave2025 = () => {
    const { t } = useLanguage();
    return (
        <div className="bg-[#f8fafc] min-h-screen font-sans">
            {/* Header / Hero Section */}
            <div className="bg-[#0055A4] text-white py-12 md:py-16 border-b-4 border-[#a5d63f]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                        <div className="flex-1">
                            <div className="inline-block bg-white text-[#0055A4] px-3 py-1 mb-4 rounded-sm text-xs font-bold uppercase tracking-wider border-l-4 border-[#138808]">
                                {t('conclave_badge')}
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                                {t('conclave_main_title')}
                            </h1>
                            <p className="text-xl md:text-2xl text-blue-50 mb-6 italic border-l-4 border-[#a5d63f] pl-6 py-2">
                                {t('conclave_quote')}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-blue-100 mt-4 text-sm md:text-base font-medium">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-5 h-5 text-[#f39200]" />
                                    <span>Posted On: 15 SEP 2025 6:10PM by PIB Delhi</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-[#f39200]" />
                                    <span>QCI, World Trade Centre, New Delhi</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* Introduction & Main Quote */}
                <div className="bg-white border border-gray-200 p-8 mb-12 shadow-sm rounded-sm border-t-4 border-[#003366]">
                    <div className="flex flex-col md:flex-row gap-8 items-center mb-8 pb-8 border-b border-gray-100">
                        <div className="flex-1">
                            <p className="text-gray-800 leading-relaxed text-lg mb-6 text-justify">
                                The Quality Council of India (QCI), in collaboration with the Department of Drinking Water and Sanitation (DDWS), Ministry of Jal Shakti and Ministry of Panchayati Raj organised the <strong>Sarpanch Samvaad National Quality Conclave</strong> today centered around the theme <strong>"Viksit Gram se Viksit Bharat"</strong>.
                            </p>
                            <div className="bg-[#f0fdfa] p-6 border-l-4 border-[#a5d63f] italic text-gray-700">
                                "Sarpanch Samvaad has shown how digital platforms can unite and empower them to share solutions that matter at the grassroots: <strong>Shri C R Patil</strong>"
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div className="p-4 bg-gray-50 border border-gray-200">
                            <h4 className="text-3xl font-bold text-[#003366] mb-1">75</h4>
                            <p className="text-sm font-bold text-gray-600 uppercase">Distinguished Sarpanchs</p>
                        </div>
                        <div className="p-4 bg-gray-50 border border-gray-200">
                            <h4 className="text-3xl font-bold text-[#138808] mb-1">22</h4>
                            <p className="text-sm font-bold text-gray-600 uppercase">States Represented</p>
                        </div>
                        <div className="p-4 bg-gray-50 border border-gray-200">
                            <h4 className="text-3xl font-bold text-[#0055A4] mb-1">60,000+</h4>
                            <p className="text-sm font-bold text-gray-600 uppercase">Onboarded on Mobile App</p>
                        </div>
                    </div>
                </div>

                {/* Historic Milestone Section */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-[#1a202c] mb-6 border-l-4 border-[#138808] pl-4">Historic Milestone: Digital Community</h2>
                    <div className="bg-white p-8 border border-gray-200 shadow-sm rounded-sm leading-relaxed text-gray-800 space-y-4">
                        <p>
                            The conclave marked a historic milestone of successfully onboarding over <strong>60,000 Sarpanchs from across India</strong> onto the Sarpanch Samvaad mobile application, creating a first-of-its-kind digital community of grassroots leaders.
                        </p>
                        <p>
                            In his inaugural address, Shri C.R. Patil emphasized that Sarpanch Samvaad has shown how digital platforms can unite and empower them to share solutions that matter at the grassroots. <strong>"Our next goal is to bring all 2.5 lakh Sarpanchs onto this platform, so that every village can progress together on the pillars of Swachhata and Suraksha, driving India's journey towards Viksit Bharat 2047,"</strong> Union Minister added.
                        </p>
                    </div>
                </div>

                {/* Dignitaries Perspectives */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-[#1a202c] mb-6 border-l-4 border-[#0055A4] pl-4 uppercase tracking-wide">Government Perspectives & Strategic Vision</h2>
                    <div className="space-y-6">
                        {/* Vivek Bharadwaj */}
                        <div className="bg-white p-6 border border-gray-200 border-l-8 border-l-[#004080] shadow-sm">
                            <h3 className="font-bold text-[#004080] mb-2 uppercase text-sm tracking-widest">Shri Vivek Bharadwaj, Secretary, Ministry of Panchayati Raj</h3>
                            <p className="text-gray-700 italic leading-relaxed">
                                "Through e-governance and ICT tools like <strong>E-Gram Swaraj, PAI, and Sabha Saar</strong>, the Ministry is working to strengthen grassroots governance. To build truly Viksit Gram Panchayats, we must strengthen Village Water and Sanitation Committees, adopt e-governance for transparency, and embed <strong>Gunvatta</strong> (Quality) in every initiative."
                            </p>
                        </div>

                        {/* Ashok Meena */}
                        <div className="bg-white p-6 border border-gray-200 border-l-8 border-l-[#138808] shadow-sm">
                            <h3 className="font-bold text-[#138808] mb-2 uppercase text-sm tracking-widest">Shri Ashok K. K. Meena, Secretary, Ministry of Jal Shakti</h3>
                            <p className="text-gray-700 italic leading-relaxed">
                                "Sarpanch Samvaad is not just a digital platform—it is a movement to strengthen village leadership. By enabling knowledge exchange and peer learning, it empowers Sarpanchs to make their villages <strong>Open Defecation Free, Swachh, and Sujal</strong>. Technology, quality assessment, and digital governance are key to achieving this."
                            </p>
                        </div>

                        {/* Jaxay Shah */}
                        <div className="bg-white p-6 border border-gray-200 border-l-8 border-l-[#a5d63f] shadow-sm">
                            <h3 className="font-bold text-[#a5d63f] mb-2 uppercase text-sm tracking-widest">Shri Jaxay Shah, Chairperson, QCI</h3>
                            <p className="text-gray-700 italic leading-relaxed">
                                "Today, we have connected over 60,000 Sarpanchs through this initiative, but our journey does not stop here. I have set a goal for my team to connect an additional <strong>75,000 Sarpanchs by this October</strong>, and to reach <strong>1,00,000 Sarpanchs</strong> by the birthday of our beloved late former Prime Minister, Shri Atal Bihari Vajpayee."
                            </p>
                        </div>
                    </div>
                </div>

                {/* 100 Day Challenge - Callout Box */}
                <div className="bg-[#fff7ed] border-2 border-[#ffedd5] p-8 mb-12 rounded-sm text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Award size={120} className="text-[#ea580c]" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-[#9a3412] mb-4 uppercase tracking-tighter">
                        100-Day Good Governance Challenge
                    </h2>
                    <p className="text-lg text-[#7c2d12] font-semibold mb-6 max-w-3xl mx-auto">
                        Rollout starts from September 17, 2025, to December 25, 2025 (Good Governance Day).
                    </p>
                    <p className="text-gray-800 max-w-4xl mx-auto leading-relaxed">
                        This significant outcome of the conclave aims to mobilise Sarpanch-led community campaigns across the country, reinforcing the Panchayats’ role as catalysts of national progress and documenting best practices for continuous peer learning.
                    </p>
                </div>

                {/* About QCI - Formal Footer Section */}
                <div className="bg-[#f0f4f8] border border-gray-300 p-8 rounded-sm">
                    <h2 className="text-xl font-bold text-[#1a202c] mb-4 border-b border-gray-300 pb-2 inline-block">About Quality Council of India (QCI)</h2>
                    <p className="text-gray-700 text-sm leading-relaxed text-justify">
                        The Quality Council of India (QCI) is a premier autonomous body set up by the Government of India to establish and promote quality standards across all sectors of the economy. QCI operates through its constituent boards and divisions to conduct independent third-party assessments of products, services, and processes, fostering a culture of quality that touches the life of every citizen. The Department for Promotion of Industry and Internal Trade (DPIIT), Ministry of Commerce & Industry, serves as its nodal point.
                    </p>
                </div>

            </div>

            {/* Download Card Section */}
            <DownloadCard />
        </div>
    );
};

export default Conclave2025;
