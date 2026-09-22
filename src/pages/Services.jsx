import React from 'react';
import { ShieldCheck, Users, Briefcase, FileText, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import DownloadCard from '../components/DownloadCard';

const Services = () => {
    const services = [
        {
            id: "zed-certification",
            title: "MSME ZED Certification",
            icon: <ShieldCheck className="h-10 w-10 text-[#0055A4]" />,
            description: "Comprehensive support for MSMEs to achieve 'Zero Defect Zero Effect' certification from the Ministry of MSME, enhancing global competitiveness.",
            details: [
                "Awareness & Onboarding of MSMEs",
                "Documentation Support & Handholding",
                "Pre-assessment Guidance (Desktop & Onsite)",
                "Assistance with Subsidy & Incentive Claims"
            ],
            link: "/zed-certification"
        },
        {
            id: "sarpanch-samvad",
            title: "Sarpanch Samvaad Platform",
            icon: <Users className="h-10 w-10 text-[#a5d63f]" />,
            description: "A digital initiative by Quality Council of India (QCI) to connect 2.5 lakh Sarpanchs across India for quality village governance.",
            details: [
                "Onboarding Sarpanchs to the platform",
                "Data collection and verification",
                "Facilitating network building among village heads",
                "Coordinating developmental discussions"
            ],
            link: "/sarpanch-samvad"
        },
        {
            id: "govt-contracts",
            title: "State & Central Govt. Projects",
            icon: <Briefcase className="h-10 w-10 text-[#0055A4]" />,
            description: "Execution and management support for various government contracts, surveys, and field-level developmental implementations.",
            details: [
                "MSME Digital Empowerment Initiatives",
                "Field-level Project Implementation",
                "Surveys and Data Collection",
                "Public Sector Coordination"
            ],
            link: "/contact"
        }
    ];

    return (
        <div className="bg-[#f8fafc] min-h-screen">
            {/* Page Header */}
            <div className="bg-[#0055A4] text-white py-16 md:py-20 border-b-4 border-[#a5d63f] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight uppercase">Our Schemes & Services</h1>
                    <div className="h-1 w-20 bg-[#a5d63f] mx-auto mb-6"></div>
                    <p className="text-xl text-blue-50 max-w-2xl mx-auto leading-relaxed font-medium">
                        Professional facilitation and consultancy services for Government Schemes and Quality Standards in Andhra Pradesh.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="space-y-12">
                    {services.map((service) => (
                        <div key={service.id} className="bg-white rounded-sm shadow-xl border border-gray-100 overflow-hidden hover:border-[#0055A4] transition-all duration-300">
                            <div className="md:flex">
                                <div className="md:w-72 bg-gray-50 flex flex-col items-center justify-center p-10 border-r border-gray-100">
                                    <div className="bg-white p-6 rounded-full shadow-md border border-gray-100 mb-6 group-hover:scale-110 transition-transform">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-center text-[#003366] uppercase tracking-tight leading-tight">{service.title}</h3>
                                </div>
                                <div className="p-10 md:flex-1">
                                    <div className="bg-teal-50/50 p-6 border-l-8 border-[#0055A4] mb-8">
                                        <p className="text-gray-800 text-lg leading-relaxed font-medium">
                                            {service.description}
                                        </p>
                                    </div>

                                    <h4 className="font-black text-[#1a202c] mb-6 flex items-center gap-2 uppercase text-xs tracking-[0.2em]">
                                        <FileText size={18} className="text-[#a5d63f]" /> Key Objectives
                                    </h4>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 mb-10">
                                        {service.details.map((detail, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-gray-700 font-medium">
                                                <ChevronRight size={18} className="text-[#a5d63f] shrink-0 mt-0.5" />
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="pt-6 border-t border-gray-100">
                                        <Link
                                            to={service.link}
                                            className="inline-flex items-center gap-2 bg-[#0055A4] text-white px-8 py-3 text-sm font-black uppercase tracking-widest hover:bg-[#003366] transition-all shadow-lg rounded-sm"
                                        >
                                            View Details
                                            <ChevronRight size={16} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-[#003366] py-16 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-black uppercase tracking-widest mb-6 text-[#a5d63f]">Interested in our services?</h2>
                    <p className="text-teal-50 text-lg mb-10 max-w-2xl mx-auto">
                        We provide end-to-end support for registration, documentation, and implementation of government projects.
                    </p>
                    <Link to="/contact" className="inline-block bg-white text-[#003366] px-12 py-4 text-sm font-black uppercase tracking-widest hover:bg-[#a5d63f] hover:text-white transition-all shadow-2xl">
                        Enquire Now
                    </Link>
                </div>
            </div>

            {/* MSME Benefits Visual */}
            <div className="bg-white py-16">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#1a202c] uppercase tracking-wide">MSME Benefits & Schemes</h2>
                        <div className="w-24 h-1 bg-[#a5d63f] mx-auto mt-4"></div>
                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                            Explore the various government benefits and schemes available for MSMEs
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-2xl overflow-hidden border-4 border-[#0055A4]">
                        <img
                            src="/images/msme-benefits.jpg"
                            alt="MSME Benefits & Schemes - Government of India"
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

export default Services;
