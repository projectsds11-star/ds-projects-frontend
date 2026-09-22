import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, ChevronRight, Award, Facebook, Youtube, Instagram, Twitter, Linkedin } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

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
        <footer className="bg-[#003366] text-white border-t-8 border-[#a5d63f]">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="inline-block">
                            <div className="bg-white p-3 rounded-lg inline-flex items-center justify-center">
                                <img src="/images/logo.png" alt="DS Projects Logo" className="h-16 w-auto" />
                            </div>
                        </Link>
                        <div className="h-1 w-10 bg-[#a5d63f] my-4"></div>
                        <p className="text-gray-200 text-sm leading-relaxed max-w-sm">
                            Dedicated facilitators for MSME ZED Certification and quality governance across Andhra Pradesh. Building a Viksit Bharat through grassroots empowerment.
                        </p>
                        <div className="mt-6 p-3 bg-black/10 border border-white/10 rounded-sm">
                            <span className="text-[10px] text-gray-300 block uppercase tracking-wide">Authorized Partner</span>
                            <span className="font-mono text-[#a5d63f] font-bold text-xs tracking-wide">UDYAM-AP-13-0077732</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 uppercase tracking-widest text-[#a5d63f]">{t('home')} & Info</h4>
                        <div className="flex flex-col gap-3">
                            {quickLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="text-gray-200 hover:text-[#a5d63f] transition-colors text-sm font-medium flex items-center gap-2 group"
                                >
                                    <ChevronRight size={14} className="text-[#a5d63f] group-hover:translate-x-1 transition-transform" />
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Programs */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 uppercase tracking-widest text-[#a5d63f]">Programs</h4>
                        <div className="flex flex-col gap-3">
                            {programLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="text-gray-200 hover:text-[#a5d63f] transition-colors text-sm font-medium flex items-center gap-2 group"
                                >
                                    <ChevronRight size={14} className="text-[#a5d63f] group-hover:translate-x-1 transition-transform" />
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 uppercase tracking-widest text-[#a5d63f]">Connect</h4>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 group">
                                <div className="p-2 bg-white/10 group-hover:bg-[#a5d63f] transition-colors rounded-sm">
                                    <Phone size={16} />
                                </div>
                                <span className="text-sm font-bold text-gray-200">+91 9701529797</span>
                            </div>
                            <div className="flex items-center gap-3 group">
                                <div className="p-2 bg-white/10 group-hover:bg-[#a5d63f] transition-colors rounded-sm">
                                    <Mail size={16} />
                                </div>
                                <span className="text-sm font-bold text-gray-200">projectds11@gmail.com</span>
                            </div>
                            <a href="https://www.facebook.com/share/1HsRSGjEMu/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                                <div className="p-2 bg-white/10 group-hover:bg-[#a5d63f] transition-colors rounded-sm">
                                    <Facebook size={16} />
                                </div>
                                <span className="text-sm font-bold text-gray-200 group-hover:text-[#a5d63f] transition-colors">Connect on Facebook</span>
                            </a>
                            <a href="https://youtube.com/@dsprojects?si=W6cKrLZ3qJoOa4xa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                                <div className="p-2 bg-white/10 group-hover:bg-[#a5d63f] transition-colors rounded-sm">
                                    <Youtube size={16} />
                                </div>
                                <span className="text-sm font-bold text-gray-200 group-hover:text-[#a5d63f] transition-colors">Subscribe on YouTube</span>
                            </a>
                            <a href="https://www.instagram.com/projectds11?utm_source=qr&igsh=MXUyMmV0eXBtZnduaw==" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                                <div className="p-2 bg-white/10 group-hover:bg-[#a5d63f] transition-colors rounded-sm">
                                    <Instagram size={16} />
                                </div>
                                <span className="text-sm font-bold text-gray-200 group-hover:text-[#a5d63f] transition-colors">Follow on Instagram</span>
                            </a>
                            <a href="https://x.com/SDS Projects81998" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                                <div className="p-2 bg-white/10 group-hover:bg-[#a5d63f] transition-colors rounded-sm">
                                    <Twitter size={16} />
                                </div>
                                <span className="text-sm font-bold text-gray-200 group-hover:text-[#a5d63f] transition-colors">Follow on X (Twitter)</span>
                            </a>
                            <a href="https://www.linkedin.com/in/shanmukha-project-s-6446423aa?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                                <div className="p-2 bg-white/10 group-hover:bg-[#a5d63f] transition-colors rounded-sm">
                                    <Linkedin size={16} />
                                </div>
                                <span className="text-sm font-bold text-gray-200 group-hover:text-[#a5d63f] transition-colors">Connect on LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-12 pt-8 border-t border-white/10 text-center">
                    <p className="text-xs text-gray-300 italic mb-6 max-w-4xl mx-auto opacity-70">
                        Disclaimer: DS Projects is an Authorized Partner / Facilitator for various government schemes.
                        We are a private organization and do NOT claim to be a government department.
                    </p>
                    <p className="text-xs text-gray-200 font-medium">
                        &copy; {new Date().getFullYear()} DS Projects. All Rights Reserved.
                    </p>
                    <div className="flex justify-center gap-6 mt-4 opacity-70">
                        <span className="text-[10px] uppercase font-black text-[#a5d63f]">Quality first</span>
                        <span className="text-[10px] uppercase font-black text-white/50">Zero Defect</span>
                        <span className="text-[10px] uppercase font-black text-white/50">Zero Effect</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
