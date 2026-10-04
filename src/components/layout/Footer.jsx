import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, ChevronRight, Facebook, Youtube, Instagram, Twitter, Linkedin, MapPin } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';

// Background Animation Component
const FallingParticles = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        // Generate subtle glowing particles that fall slowly
        const newParticles = Array.from({ length: 30 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            delay: Math.random() * 15,
            duration: Math.random() * 15 + 15,
            size: Math.random() * 6 + 3,
            opacity: Math.random() * 0.3 + 0.1,
            isAmber: Math.random() > 0.7 // 30% chance to be Amber colored
        }));
        setParticles(newParticles);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className={`absolute rounded-full shadow-[0_0_8px_rgba(255,255,255,0.5)] ${p.isAmber ? 'bg-[#F59E0B]' : 'bg-white'}`}
                    style={{
                        left: `${p.x}%`,
                        width: p.size,
                        height: p.size,
                        opacity: p.opacity,
                        top: -20,
                    }}
                    animate={{
                        y: ['0px', '800px'],
                        x: ['0px', `${Math.random() * 100 - 50}px`], // Slight drift
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: p.delay,
                    }}
                />
            ))}
        </div>
    );
};

const Footer = () => {
    const { t } = useLanguage();

    const quickLinks = [
        { name: t('home'), path: '/' },
        { name: t('about'), path: '/about' },
        { name: t('services'), path: '/services' },
        { name: t('careers'), path: '/careers' },
        { name: t('gallery'), path: '/gallery' },
        { name: t('contact'), path: '/contact' },
    ];

    const programLinks = [
        { name: t('zed'), path: '/zed-certification' },
        { name: t('sarpanch'), path: '/sarpanch-samvad' },
        { name: t('conclave'), path: '/conclave-2025' },
    ];

    return (
        <footer className="relative bg-[#003366] text-white border-t-4 border-[#F59E0B] overflow-hidden">
            {/* Background Animation */}
            <FallingParticles />
            
            <div className="max-w-7xl mx-auto px-4 py-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* Brand Section */}
                    <div className="col-span-1">
                        <Link to="/" className="inline-block">
                            <div className="bg-white p-2 rounded-lg inline-flex items-center justify-center shadow-lg">
                                <img src="/images/logo.png" alt="DS Projects Logo" className="h-10 w-auto" />
                            </div>
                        </Link>
                        <div className="h-1 w-12 bg-[#F59E0B] my-2 rounded-full"></div>
                        <p className="text-gray-100 text-sm leading-snug max-w-sm mb-3 font-medium">
                            Dedicated facilitators for MSME ZED Certification and quality governance across Andhra Pradesh. Building a Viksit Bharat through grassroots empowerment.
                        </p>
                        <div className="p-2 bg-black/30 border border-white/20 rounded backdrop-blur-sm inline-block shadow-inner">
                            <span className="text-[11px] text-gray-300 block uppercase tracking-wider mb-0.5">Authorized Partner</span>
                            <span className="font-mono text-[#F59E0B] font-bold text-sm tracking-widest">UDYAM-AP-13-0078844</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-base mb-3 uppercase tracking-widest text-[#F59E0B]">{t('home')} & Info</h4>
                        <div className="flex flex-col gap-2">
                            {quickLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="text-gray-200 hover:text-[#F59E0B] transition-colors text-sm font-medium flex items-center gap-2 group"
                                >
                                    <ChevronRight size={14} className="text-[#F59E0B] group-hover:translate-x-1 transition-transform" />
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Programs */}
                    <div>
                        <h4 className="font-bold text-base mb-3 uppercase tracking-widest text-[#F59E0B]">Programs</h4>
                        <div className="flex flex-col gap-2">
                            {programLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="text-gray-200 hover:text-[#F59E0B] transition-colors text-sm font-medium flex items-center gap-2 group"
                                >
                                    <ChevronRight size={14} className="text-[#F59E0B] group-hover:translate-x-1 transition-transform" />
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact & Address */}
                    <div>
                        <h4 className="font-bold text-base mb-3 uppercase tracking-widest text-[#F59E0B]">Connect</h4>
                        <div className="space-y-2">
                            <div className="flex items-start gap-3 group">
                                <div className="mt-0.5 p-1.5 bg-white/10 rounded text-[#F59E0B] shadow-sm">
                                    <MapPin size={14} />
                                </div>
                                <div className="text-sm text-gray-100 leading-snug font-medium">
                                    <strong className="block mb-0.5 text-white">Corporate Office:</strong>
                                    Sai Complex, 3rd Floor, Daravari Thota,<br/>
                                    Opp: Bank Of Baroda, Ongole, PIN: 523001
                                </div>
                            </div>
                            <div className="flex items-center gap-3 group">
                                <div className="p-1.5 bg-white/10 group-hover:bg-[#F59E0B] group-hover:text-[#003366] transition-colors rounded shadow-sm">
                                    <Phone size={14} />
                                </div>
                                <span className="text-sm font-bold text-gray-100">+91 9701529797</span>
                            </div>
                            <div className="flex items-center gap-3 group">
                                <div className="p-1.5 bg-white/10 group-hover:bg-[#F59E0B] group-hover:text-[#003366] transition-colors rounded shadow-sm">
                                    <Mail size={14} />
                                </div>
                                <span className="text-sm font-bold text-gray-100">projectds11@gmail.com</span>
                            </div>

                            {/* Socials Row */}
                            <div className="pt-2">
                                <h5 className="text-xs uppercase tracking-widest text-gray-400 mb-2 font-bold">Follow Us</h5>
                                <div className="flex items-center gap-2">
                                    <a href="https://www.facebook.com/share/1HsRSGjEMu/" target="_blank" rel="noopener noreferrer" className="p-1.5 bg-white/10 hover:bg-[#F59E0B] hover:text-[#003366] transition-all rounded hover:scale-110 shadow-sm">
                                        <Facebook size={16} />
                                    </a>
                                    <a href="https://youtube.com/@dsprojects?si=W6cKrLZ3qJoOa4xa" target="_blank" rel="noopener noreferrer" className="p-1.5 bg-white/10 hover:bg-[#F59E0B] hover:text-[#003366] transition-all rounded hover:scale-110 shadow-sm">
                                        <Youtube size={16} />
                                    </a>
                                    <a href="https://www.instagram.com/projectds11?utm_source=qr&igsh=MXUyMmV0eXBtZnduaw==" target="_blank" rel="noopener noreferrer" className="p-1.5 bg-white/10 hover:bg-[#F59E0B] hover:text-[#003366] transition-all rounded hover:scale-110 shadow-sm">
                                        <Instagram size={16} />
                                    </a>
                                    <a href="https://x.com/SDS Projects81998" target="_blank" rel="noopener noreferrer" className="p-1.5 bg-white/10 hover:bg-[#F59E0B] hover:text-[#003366] transition-all rounded hover:scale-110 shadow-sm">
                                        <Twitter size={16} />
                                    </a>
                                    <a href="https://www.linkedin.com/in/shanmukha-project-s-6446423aa?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="p-1.5 bg-white/10 hover:bg-[#F59E0B] hover:text-[#003366] transition-all rounded hover:scale-110 shadow-sm">
                                        <Linkedin size={16} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-6 pt-4 border-t border-white/10 text-center relative z-10">
                    <p className="text-xs text-gray-300 italic mb-2 max-w-4xl mx-auto opacity-80 leading-snug">
                        Disclaimer: DS Projects is an Authorized Partner / Facilitator for various government schemes.
                        We are a private organization and do NOT claim to be a government department.
                    </p>
                    <p className="text-sm text-gray-100 font-medium">
                        &copy; {new Date().getFullYear()} DS Projects. All Rights Reserved.
                    </p>
                    <div className="flex justify-center gap-6 mt-2 opacity-80">
                        <span className="text-xs uppercase font-black text-[#F59E0B] tracking-wider">Quality first</span>
                        <span className="text-xs uppercase font-black text-white/70 tracking-wider">Zero Defect</span>
                        <span className="text-xs uppercase font-black text-white/70 tracking-wider">Zero Effect</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
