import React from 'react';
import DownloadCard from '../components/DownloadCard';

const Gallery = () => {
    const images = [
        { type: 'Campaign', title: "MSME Awareness Camp - Ongole", color: "bg-teal-50", img: "/images/msme-empowerment.jpg" },
        { type: 'Poster', title: "ZED Certification Benefits", color: "bg-amber-50", img: "/images/zed-benefits.jpg" },
        { type: 'Event', title: "National Quality Conclave 2025", color: "bg-blue-50", img: "/images/events/conclave/conclave-main.png" },
        { type: 'Conference', title: "National Quality Conclave - Header", color: "bg-blue-50", img: "/images/events/conclave/conclave-header.png" },
        { type: 'Group', title: "National Quality Conclave - Leadership", color: "bg-blue-50", img: "/images/events/conclave/conclave-group.png" },
        { type: 'Event', title: "Sarpanch Samvaad Launch", color: "bg-teal-50", img: "/images/impact-poster.jpg" },
        { type: 'Field Work', title: "Factory Visit - ZED Assessment", color: "bg-gray-50", img: "/images/zed-steps.jpg" },
        { type: 'Meeting', title: "Meeting with QCI Officials", color: "bg-amber-50", img: "/images/roles-info.jpg" },
        { type: 'Training', title: "ZED Facilitator Training Session", color: "bg-teal-50", img: "/images/pm-quote.jpg" },
    ];

    return (
        <div className="bg-[#f8fafc] min-h-screen font-sans">
            {/* Page Header */}
            <div className="bg-[#0055A4] text-white py-16 md:py-20 border-b-4 border-[#F59E0B] relative overflow-hidden text-center">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight uppercase">Gallery & Media</h1>
                    <div className="h-1 w-20 bg-[#F59E0B] mx-auto mb-6"></div>
                    <p className="text-xl text-blue-50 max-w-2xl mx-auto leading-relaxed font-medium">
                        Glimpses of our initiatives, awareness camps, and on-ground activities across Andhra Pradesh.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {images.map((img, idx) => (
                        <div key={idx} className="group cursor-pointer bg-white p-3 rounded-sm shadow-xl border border-gray-100 hover:border-[#0055A4] transition-all duration-300">
                            <div className={`h-72 w-full rounded-sm ${img.color} flex items-center justify-center relative overflow-hidden border border-gray-50`}>
                                <img src={img.img} alt={img.title} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute top-4 right-4 bg-[#003366]/90 text-white text-[10px] px-3 py-1 uppercase font-black tracking-widest rounded-sm border border-white/20">
                                    {img.type}
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="text-sm font-black text-[#003366] group-hover:text-[#0055A4] transition-colors uppercase tracking-widest text-center leading-tight">
                                    {img.title}
                                </h3>
                                <div className="w-8 h-0.5 bg-[#F59E0B] mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-24 bg-[#003366] text-white rounded-sm p-12 md:p-16 text-center relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#F59E0B]"></div>
                    <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6">Promoting National Quality</h2>
                    <p className="text-teal-50 max-w-3xl mx-auto mb-10 text-lg leading-relaxed font-medium">
                        We actively conduct awareness camps across Andhra Pradesh to educate MSMEs about the benefits of ZED Certification and other central government schemes. Our team is dedicated to building a quality-conscious ecosystem.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <button className="px-10 py-4 bg-[#F59E0B] text-[#003366] font-black rounded-sm hover:scale-105 transition-all uppercase tracking-widest text-sm shadow-xl">
                            Follow on social media
                        </button>
                    </div>
                </div>
            </div>

            {/* Download Card Section */}
            <DownloadCard />
        </div>
    );
};

export default Gallery;
