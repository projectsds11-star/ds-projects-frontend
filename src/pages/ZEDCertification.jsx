import React from 'react';
import { Check, Award, TrendingUp, Users, ShieldCheck, Globe, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import DownloadCard from '../components/DownloadCard';

const ZEDCertification = () => {
    const { t } = useLanguage();
    return (
        <div className="bg-gray-50 min-h-screen font-sans">
            {/* Page Header - ZED Theme */}
            <div className="bg-[#0055A4] text-white py-16 md:py-20 border-b-4 border-[#F59E0B] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-block bg-white text-[#0055A4] px-4 py-1 rounded-sm text-xs font-black uppercase tracking-widest mb-6 border-l-4 border-[#F59E0B]">
                        {t('zed_official_badge')}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">{t('zed_title')}</h1>
                    <p className="text-xl md:text-2xl opacity-95 max-w-3xl mx-auto leading-relaxed font-medium">
                        {t('zed_subtitle')}
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Intro Section */}
                <div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-[#1a202c] mb-8 border-l-4 border-[#0055A4] pl-4 uppercase tracking-tight">{t('zed_what')}</h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6 text-justify">
                            {t('zed_desc1')}
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed text-justify">
                            {t('zed_desc2')}
                        </p>
                    </div>
                    <div className="rounded-sm overflow-hidden shadow-xl border-8 border-white transform hover:scale-[1.02] transition-transform">
                        <img src="/images/zed-telugu.jpg" alt="ZED Certification Regional Info" className="w-full h-auto" />
                    </div>
                </div>

                {/* Benefits Grid */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#1a202c] uppercase tracking-wide">{t('zed_benefits')}</h2>
                        <div className="w-24 h-1 bg-[#F59E0B] mx-auto mt-4"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Financial Incentives", desc: "Significant subsidies on certification costs and preferred bank interest rates.", icon: <TrendingUp className="w-8 h-8" /> },
                            { title: "Global Recognition", desc: "ZED rating serves as a mark of quality and reliability for international buyers.", icon: <Globe className="w-8 h-8" /> },
                            { title: "Process Improvement", desc: "Reduce waste, save costs, and increase production efficiency.", icon: <ShieldCheck className="w-8 h-8" /> },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white border border-gray-100 border-t-8 border-t-[#0055A4] p-8 shadow-sm hover:shadow-xl transition-all duration-300">
                                <div className="text-[#0055A4] mb-6">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#1a202c] mb-4">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Levels Section */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#1a202c] uppercase tracking-wide">{t('zed_levels')}</h2>
                        <p className="text-gray-500 mt-2">Phased approach to quality excellence</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-sm p-10 shadow-lg border-2 border-[#cd7f32] relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><Award size={100} className="text-[#cd7f32]" /></div>
                            <h3 className="text-2xl font-black mb-4 text-[#754c24] uppercase tracking-wider">Bronze</h3>
                            <p className="text-gray-700 mb-8 font-medium">Entry-level focusing on hygiene, safety, and basic quality parameters.</p>
                            <div className="bg-[#754c24] text-white py-3 px-6 text-center font-black rounded-sm shadow-md">
                                80% SUBSIDY
                            </div>
                        </div>
                        <div className="bg-white rounded-sm p-10 shadow-lg border-2 border-[#a9a9a9] relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><ShieldCheck size={100} className="text-[#a9a9a9]" /></div>
                            <h3 className="text-2xl font-black mb-4 text-[#5a5a5a] uppercase tracking-wider">Silver</h3>
                            <p className="text-gray-700 mb-8 font-medium">Advanced level involving rigorous process controls and environment protocols.</p>
                            <div className="bg-[#5a5a5a] text-white py-3 px-6 text-center font-black rounded-sm shadow-md">
                                60% SUBSIDY
                            </div>
                        </div>
                        <div className="bg-white rounded-sm p-10 shadow-lg border-2 border-[#ffd700] relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><Star size={100} className="text-[#ffd700]" /></div>
                            <h3 className="text-2xl font-black mb-4 text-[#856404] uppercase tracking-wider">Gold</h3>
                            <p className="text-gray-700 mb-8 font-medium">World-class status with matured quality & environmental management systems.</p>
                            <div className="bg-[#856404] text-white py-3 px-6 text-center font-black rounded-sm shadow-md">
                                50% SUBSIDY
                            </div>
                        </div>
                    </div>
                </div>

                {/* Women Owned Special Mention */}
                <div className="bg-[#f0fdfa] border border-teal-100 rounded-sm p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 mb-24 border-l-8 border-l-[#0055A4] shadow-sm">
                    <div className="bg-white p-6 rounded-full text-[#0055A4] shadow-md">
                        <Users size={40} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-[#0055A4] mb-3 uppercase tracking-tight">{t('zed_women_title')}</h3>
                        <p className="text-gray-800 text-lg leading-relaxed">
                            {t('zed_women_desc')}
                        </p>
                    </div>
                </div>

                {/* Related Initiatives Section */}
                <div className="mt-24">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-bold text-[#1a202c] uppercase tracking-wide">Related Initiatives</h2>
                        <div className="w-16 h-1 bg-[#0055A4] mx-auto mt-4"></div>
                    </div>

                    <div className="bg-white border border-gray-100 rounded-sm shadow-lg overflow-hidden flex flex-col md:flex-row group">
                        <div className="md:w-1/3 bg-[#0055A4] p-10 flex flex-col justify-center items-center text-center text-white">
                            <Users size={60} className="mb-4" />
                            <h3 className="text-xl font-black uppercase tracking-tighter">{t('sarpanch_title')}</h3>
                        </div>
                        <div className="p-10 md:flex-1 flex flex-col justify-center">
                            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                                {t('sarpanch_subtitle')}
                            </p>
                            <Link to="/sarpanch-samvad" className="inline-flex items-center text-[#0055A4] font-black uppercase tracking-widest text-sm hover:underline">
                                Learn about Sarpanch Samvaad <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-20 bg-[#003366] text-white rounded-sm p-10 md:p-20 relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 p-10 opacity-5 rotate-12"><ShieldCheck size={200} /></div>

                    <div className="relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-widest text-[#F59E0B]">How to Get Started?</h2>
                            <p className="text-teal-50 text-xl">Follow our simple 4-step path to ZED certification</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
                            {[
                                { step: "01", title: "Registration", desc: "Sign up on the MSME ZED portal using your Udyam profile." },
                                { step: "02", title: "Pledge", desc: "Commit to Zero Defect Zero Effect principles formally." },
                                { step: "03", title: "Desktop Assessment", desc: "Submit documentation for remote verification by QCI." },
                                { step: "04", title: "Certification", desc: "Receive your certificate and start availing fiscal benefits." },
                            ].map((s, i) => (
                                <div key={i} className="text-center group">
                                    <div className="w-16 h-16 bg-[#F59E0B] text-[#003366] rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                                        {s.step}
                                    </div>
                                    <h4 className="text-xl font-bold mb-3">{s.title}</h4>
                                    <p className="text-teal-50 text-sm leading-relaxed">{s.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="text-center">
                            <Link to="/contact" className="inline-block bg-white text-[#003366] font-black px-10 py-4 rounded-sm hover:bg-[#F59E0B] hover:text-white transition-all duration-300 uppercase tracking-widest text-sm shadow-xl">
                                {t('zed_btn_consult')}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* ZED Information Visuals */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#1a202c] uppercase tracking-wide">Understanding ZED Certification</h2>
                        <div className="w-24 h-1 bg-[#F59E0B] mx-auto mt-4"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                        {/* ZED Journey */}
                        <div className="bg-white rounded-lg shadow-xl overflow-hidden border-4 border-[#0055A4] hover:shadow-2xl transition-shadow duration-300">
                            <img
                                src="/images/zed-journey.jpg"
                                alt="ZED Journey - Path to Excellence"
                                className="w-full h-auto object-cover"
                            />
                            {/* Added content for white space */}
                            <div className="p-6 bg-gradient-to-b from-white to-gray-50">
                                <h3 className="text-xl font-bold text-[#0055A4] mb-4 text-center">Your Path to ZED Excellence</h3>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <span className="flex-shrink-0 w-6 h-6 bg-[#0055A4] text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
                                        <div>
                                            <p className="font-bold text-gray-800">Registration</p>
                                            <p className="text-sm text-gray-600">Sign up on ZED portal with your UDYAM number</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="flex-shrink-0 w-6 h-6 bg-[#0055A4] text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
                                        <div>
                                            <p className="font-bold text-gray-800">Pledge</p>
                                            <p className="text-sm text-gray-600">Commit to quality standards and zero defects</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="flex-shrink-0 w-6 h-6 bg-[#0055A4] text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
                                        <div>
                                            <p className="font-bold text-gray-800">Assessment</p>
                                            <p className="text-sm text-gray-600">Get evaluated by Quality Council of India</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="flex-shrink-0 w-6 h-6 bg-[#0055A4] text-white rounded-full flex items-center justify-center font-bold text-sm">4</span>
                                        <div>
                                            <p className="font-bold text-gray-800">Gap Analysis & Handholding</p>
                                            <p className="text-sm text-gray-600">Expert guidance to bridge gaps and improve systems</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="flex-shrink-0 w-6 h-6 bg-[#0055A4] text-white rounded-full flex items-center justify-center font-bold text-sm">5</span>
                                        <div>
                                            <p className="font-bold text-gray-800">Site Assessment</p>
                                            <p className="text-sm text-gray-600">On-site verification of processes and safety standards</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="flex-shrink-0 w-6 h-6 bg-[#0055A4] text-white rounded-full flex items-center justify-center font-bold text-sm">6</span>
                                        <div>
                                            <p className="font-bold text-gray-800">Certification</p>
                                            <p className="text-sm text-gray-600">Receive ZED Certificate and global recognition</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="flex-shrink-0 w-6 h-6 bg-[#0055A4] text-white rounded-full flex items-center justify-center font-bold text-sm">7</span>
                                        <div>
                                            <p className="font-bold text-gray-800">Subsidy & Benefits</p>
                                            <p className="text-sm text-gray-600">Claim 80% subsidy and enjoy low-interest loans</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ZED Certification Banner */}
                        <div className="bg-white rounded-lg shadow-xl overflow-hidden border-4 border-[#0055A4] hover:shadow-2xl transition-shadow duration-300">
                            <img
                                src="/images/zed-certification-banner.jpg"
                                alt="ZED Certification Benefits"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Download Card Section */}
            <DownloadCard />
        </div>
    );
};

export default ZEDCertification;
