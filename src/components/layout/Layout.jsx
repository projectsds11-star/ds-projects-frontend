import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from '../WhatsAppButton';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-[#f8fafc] font-sans text-[#1a202c]">
            {/* Top Announcement Banner */}
            <div className="bg-[#a5d63f] text-[#003366] text-center py-2 px-4 font-bold text-sm md:text-base border-b-2 border-[#003366]">
                📢 We are providing this opportunity across all of Andhra Pradesh!
            </div>
            <Navbar />
            <main id="main-content" className="flex-grow">
                {children}
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default Layout;
