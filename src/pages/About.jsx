import React from 'react';
import { Award, Target, Users, ShieldCheck } from 'lucide-react';
import DownloadCard from '../components/DownloadCard';

const About = () => {
    return (
        <div className="bg-[#f8fafc] min-h-screen font-sans">
            {/* Page Header */}
            <div className="bg-[#0055A4] text-white py-12 md:py-20 border-b-4 border-[#a5d63f] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight uppercase">About Our Organization</h1>
                    <div className="h-1 w-20 bg-[#a5d63f] mx-auto mb-6"></div>
                    <p className="text-xl text-blue-50 max-w-2xl mx-auto leading-relaxed font-medium">
                        Bridging the gap between Government Initiatives and Grassroots Implementation.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
                    <div>
                        <h2 className="text-3xl font-bold text-[#1a202c] mb-6 border-l-4 border-[#0055A4] pl-4 uppercase tracking-tight">Who We Are</h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6 text-justify">
                            <strong className="text-[#0055A4]">DS Projects</strong> (DS Projects) is a premier consultancy and facilitation organization based in Ongole, Andhra Pradesh.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed text-justify mb-8">
                            We serve as a vital link between the Micro, Small, and Medium Enterprises (MSMEs) and various State and Central Government schemes. Our primary focus is to empower local businesses through quality certification, digital adoption, and strategic growth initiatives.
                        </p>

                        <div className="bg-white p-8 rounded-sm shadow-xl border border-gray-100 border-l-8 border-l-[#138808]">
                            <h3 className="text-xl font-bold text-[#0055A4] mb-6 uppercase tracking-wide flex items-center gap-2">
                                <ShieldCheck className="text-[#138808]" /> Official Registration
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                                <div>
                                    <span className="block text-gray-500 text-xs uppercase font-black tracking-widest mb-1">Organization Name</span>
                                    <span className="font-bold text-gray-800">DS Projects</span>
                                </div>
                                <div>
                                    <span className="block text-gray-500 text-xs uppercase font-black tracking-widest mb-1">UDYAM Reg. Number</span>
                                    <span className="font-mono font-black text-[#0055A4] bg-teal-50 px-3 py-1 rounded-sm border border-teal-100 inline-block">UDYAM-AP-13-0078844</span>
                                </div>
                                <div>
                                    <span className="block text-gray-500 text-xs uppercase font-black tracking-widest mb-1">Headquarters</span>
                                    <span className="font-bold text-gray-800">Ongole, Andhra Pradesh</span>
                                </div>
                                <div>
                                    <span className="block text-gray-500 text-xs uppercase font-black tracking-widest mb-1">Established</span>
                                    <span className="font-bold text-gray-800">2023</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-12">
                        <div>
                            <h2 className="text-3xl font-bold text-[#1a202c] mb-6 border-l-4 border-[#a5d63f] pl-4 uppercase tracking-tight">Our Mission</h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6 text-justify">
                                To transform the MSME landscape in Andhra Pradesh by facilitating access to the ZED (Zero Defect Zero Effect) certification, promoting sustainable practices, and ensuring every eligible business can leverage government incentives for growth.
                            </p>
                            <div className="bg-[#f0fdfa] p-8 border-l-4 border-[#a5d63f] italic text-gray-800 text-lg shadow-sm">
                                "Empowering local businesses and governance through quality, transparency, and sustainable development."
                            </div>
                        </div>

                        <div className="rounded-sm overflow-hidden shadow-2xl border-4 border-white rotate-1 hover:rotate-0 transition-transform">
                            <img src="/images/pm-quote.jpg" alt="PM Narendra Modi Quote" className="w-full h-auto" />
                        </div>
                    </div>
                </div>

                {/* Values Section */}
                <div className="bg-[#003366] text-white rounded-sm p-12 md:p-16">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-black uppercase tracking-widest text-[#a5d63f]">Why Choose Us?</h2>
                        <div className="w-20 h-1 bg-white mx-auto mt-4"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { title: "Authorized Facilitators", icon: <Award /> },
                            { title: "Expert Documentation", icon: <Target /> },
                            { title: "Local Presence", icon: <Users /> },
                            { title: "Proven Track Record", icon: <ShieldCheck /> }
                        ].map((item, i) => (
                            <div key={i} className="bg-black/10 p-8 rounded-sm border border-white/10 text-center hover:bg-black/20 transition-colors group">
                                <div className="w-16 h-16 bg-[#a5d63f] text-[#003366] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                    {React.cloneElement(item.icon, { size: 32 })}
                                </div>
                                <h3 className="font-bold text-lg leading-tight uppercase tracking-tight">{item.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Download Card Section */}
            <DownloadCard />
        </div>
    );
};

export default About;
