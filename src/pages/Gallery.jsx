import React from 'react';
import DownloadCard from '../components/DownloadCard';
import { motion } from 'framer-motion';

const Gallery = () => {
    const images = [
        { 
            type: 'Vision & Mission', 
            title: "Viksit Bharat 2047", 
            img: "/images/pm-quote.jpg",
            description: "Guided by visionary leadership, we are committed to building solutions for a brighter India. Together, we can realize the dream of a developed India by 2047 through inclusive growth, innovation, and unwavering dedication to national progress."
        },
        { 
            type: 'Certification', 
            title: "ZED Certification Levels", 
            img: "/images/zed-levels-poster.jpg",
            description: "MSMEs can attain ZED Certification across three progressive levels: Bronze, Silver, and Gold. Each level signifies an enhanced commitment to Zero Defect Zero Effect manufacturing, promoting environmental sustainability, product quality, and global competitiveness."
        },
        { 
            type: 'Process', 
            title: "Steps to ZED Incentives", 
            img: "/images/zed-steps.jpg",
            description: "Achieving ZED certification is a streamlined process designed for MSME growth. It involves a simple online registration, document upload, and comprehensive third-party assessment. Certified units can seamlessly download their certificates and avail exclusive incentives."
        },
        { 
            type: 'Corporate Info', 
            title: "Official Banner", 
            img: "/images/shanmukha-banner.png",
            description: "DS Projects acts as a cornerstone for State and Central Government contractual and project services. We leverage deep expertise and collaborative partnerships to execute high-impact initiatives, ensuring compliance, quality, and sustainable development."
        },
        { 
            type: 'Partnerships', 
            title: "Government Collaborations", 
            img: "/images/org-banner.jpg",
            description: "Proudly collaborating with the Ministry of MSME, Quality Council of India (QCI), and the Govt of AP. Our joint initiatives are designed to foster skill development, IT solutions, and comprehensive MSME support networks for a self-reliant economy."
        },
        { 
            type: 'Roles', 
            title: "Project Facilitation", 
            img: "/images/roles-info.jpg",
            description: "As authorized partners, DS Projects facilitates the MSME ZED Scheme and the Sarpanch Samvaad app rollout. We are dedicated to providing handholding support, awareness campaigns, and extensive grassroots coordination to ensure successful scheme implementation."
        },
        { 
            type: 'Careers', 
            title: "Join Our Team", 
            img: "/images/recruitment-poster.jpg",
            description: "We are actively hiring passionate individuals for diverse roles including District Co-ordinators, ZED Facilitators, and Data Executives. Build a rewarding career with DS Projects, driving meaningful impact through quality development and community engagement."
        },
        { 
            type: 'Impact & Vision', 
            title: "Our Impact", 
            img: "/images/impact-poster.jpg",
            description: "Empowering businesses and strengthening communities across Andhra Pradesh. With over 1000+ MSMEs supported, 5000+ jobs facilitated, and 200+ entrepreneurs mentored, we are driving digital solutions and skill development for a thriving, self-reliant India."
        },
        { 
            type: 'Awareness', 
            title: "Regional Outreach", 
            img: "/images/zed-telugu.jpg",
            description: "Empowering regional MSMEs with localized ZED Certification awareness. Our goal is to elevate quality standards and promote eco-friendly manufacturing practices at the grassroots level, ensuring every enterprise understands the immense value of Zero Defect Zero Effect."
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
