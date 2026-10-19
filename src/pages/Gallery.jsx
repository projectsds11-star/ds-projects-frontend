import React from 'react';
import DownloadCard from '../components/DownloadCard';
import { motion } from 'framer-motion';

const Gallery = () => {
    const images = [
        { 
            type: 'Corporate Info', 
            title: "Government Contract Services", 
            img: "/images/gallery/gallery-1-contract-banner.png",
            description: "DS Projects State & Central Government Contract & Project Services. Authorized partner for Central Govt Contractual Works with UDYAM-AP-13-0077732, serving Ongole and Andhra Pradesh."
        },
        { 
            type: 'Careers', 
            title: "We Are Hiring!", 
            img: "/images/gallery/gallery-2-hiring.png",
            description: "DS Projects is actively hiring District Co-ordinators, Mandal Co-ordinators, ZED Facilitators, Field Data Executives, and Office Staff. Build a rewarding career contributing to grassroots MSME development."
        },
        { 
            type: 'Roles', 
            title: "ZED Facilitation", 
            img: "/images/gallery/gallery-3-zed-facilitation.png",
            description: "As authorized ZED facilitators, DS Projects provides comprehensive support to MSMEs — awareness campaigns, handholding, documentation assistance, and end-to-end coordination for Zero Defect Zero Effect certification."
        },
        { 
            type: 'Vision & Mission', 
            title: "A Brighter India", 
            img: "/images/gallery/gallery-4-brighter-india.png",
            description: "DS Projects is committed to building a brighter, self-reliant India. Guided by visionary leadership, we drive inclusive growth through MSME empowerment, digital solutions, and government collaboration."
        },
        { 
            type: 'Impact & Vision', 
            title: "Building a Brighter India", 
            img: "/images/gallery/gallery-5-building-india.png",
            description: "With 1000+ MSMEs supported, 5000+ jobs facilitated, 200+ entrepreneurs mentored, and 50+ Government Collaborations, DS Projects is a catalyst for economic transformation across Andhra Pradesh."
        },
        { 
            type: 'Impact & Vision', 
            title: "Viksit Bharat 2047", 
            img: "/images/gallery/gallery-6-building-india2.png",
            description: "Inspired by PM Narendra Modi's vision of a Viksit Bharat by 2047, DS Projects works alongside CM Chandrababu Naidu, Dy CM Pawan Kalyan, and Minister Lokesh to build a prosperous Andhra Pradesh."
        },
        { 
            type: 'Certification', 
            title: "MSME Sustainable ZED Certification", 
            img: "/images/gallery/gallery-7-zed-poster.png",
            description: "MSMEs can attain ZED Certification across three progressive levels: Bronze, Silver, and Gold. DS Projects (UDYAM-AP-13-0077732) is your trusted partner for achieving Zero Defect Zero Effect certification."
        },
        { 
            type: 'Process', 
            title: "ZED Certification Steps", 
            img: "/images/gallery/gallery-8-zed-steps.png",
            description: "A step-by-step guide to MSME ZED Certification. From online registration and document upload to third-party assessment and incentive availing — DS Projects guides you through every stage of the process."
        },
        { 
            type: 'Awareness', 
            title: "Zero Defect, Zero Effect", 
            img: "/images/gallery/gallery-9-zed-zero-defect.png",
            description: "Zero Defect Zero Effect — the foundation of ZED Certification. DS Projects promotes quality manufacturing and environmental sustainability across Andhra Pradesh's MSME ecosystem."
        }
    ];

    return (
        <div className="bg-[#f8fafc] min-h-screen font-sans">
            {/* Page Header */}
            <div className="bg-[#003366] text-white py-20 border-b-4 border-[#F59E0B] relative overflow-hidden text-center">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.h1 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-black mb-4 tracking-tight uppercase"
                    >
                        Project Gallery
                    </motion.h1>
                    <div className="h-1 w-24 bg-[#F59E0B] mx-auto mb-6"></div>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-medium"
                    >
                        Explore our initiatives, government collaborations, and ongoing efforts to empower MSMEs and build a brighter India.
                    </motion.p>
                </div>
            </div>

            {/* Gallery Grid - Masonry (Puzzle) Layout */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {images.map((item, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (idx % 3) * 0.1 }}
                            className="group relative rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-500 break-inside-avoid block bg-white"
                        >
                            {/* Full Image without padding */}
                            <img 
                                src={item.img} 
                                alt={item.title} 
                                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 block" 
                            />

                            {/* Top Badge (Always visible, fades out on hover) */}
                            <div className="absolute top-4 right-4 z-20 group-hover:opacity-0 transition-opacity duration-300">
                                <span className="bg-[#0055A4] text-white text-xs font-bold px-3 py-1.5 uppercase tracking-widest rounded shadow-md">
                                    {item.type}
                                </span>
                            </div>

                            {/* Hover Overlay Content */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/95 via-[#0055A4]/90 to-[#0055A4]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 z-10 translate-y-4 group-hover:translate-y-0">
                                <div className="transform transition-transform duration-500">
                                    <span className="text-[#F59E0B] text-sm font-bold tracking-widest uppercase mb-2 block">
                                        {item.type}
                                    </span>
                                    <h3 className="text-xl md:text-2xl font-black text-white mb-4 leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-blue-50 text-sm md:text-base leading-relaxed line-clamp-5">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Promotional Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 bg-gradient-to-br from-[#003366] to-[#0055A4] text-white rounded-2xl p-12 text-center relative overflow-hidden shadow-2xl border-t-4 border-[#F59E0B]"
                >
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6">Driving National Quality</h2>
                        <p className="text-blue-100 max-w-3xl mx-auto mb-10 text-lg leading-relaxed font-medium">
                            We are actively bridging the gap between enterprises and government schemes across Andhra Pradesh. From ZED Certification to local community empowerment, DS Projects is committed to a self-reliant economy.
                        </p>
                        <button className="px-10 py-4 bg-[#F59E0B] text-[#003366] font-black rounded-lg hover:bg-white transition-all uppercase tracking-widest text-sm shadow-xl">
                            Connect With Us Today
                        </button>
                    </div>
                </motion.div>
            </div>

            <DownloadCard />
        </div>
    );
};

export default Gallery;
