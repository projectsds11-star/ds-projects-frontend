import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(null); // For mobile dropdown toggle
    const location = useLocation();
    const { language, setLanguage, t } = useLanguage();

    // Gov style accessibility tools
    const [fontSize, setFontSize] = useState(100); // percentage
    const [isHighContrast, setIsHighContrast] = useState(false);

    useEffect(() => {
        document.documentElement.style.fontSize = `${fontSize}%`;
    }, [fontSize]);

    useEffect(() => {
        if (isHighContrast) {
            document.body.classList.add('high-contrast');
        } else {
            document.body.classList.remove('high-contrast');
        }
    }, [isHighContrast]);

    const navLinks = [
        { name: t('home'), path: '/' },
        { name: t('about'), path: '/about' },
        { name: t('services'), path: '/services' },
        {
            name: 'Our Projects',
            path: '/zed-certification',
            dropdown: [
                { name: t('zed'), path: '/zed-certification' },
                { name: t('sarpanch'), path: '/sarpanch-samvad' },
                { name: t('conclave'), path: '/conclave-2025' }
            ]
        },
        { name: t('careers'), path: '/careers' },
        { name: t('gallery'), path: '/gallery' },
        { name: t('contact'), path: '/contact' },
    ];

    const isActive = (link) => {
        if (link.path === location.pathname) return true;
        if (link.dropdown) {
            return link.dropdown.some(dropItem => dropItem.path === location.pathname);
        }
        return false;
    };

    const toggleMobileDropdown = (name) => {
        if (dropdownOpen === name) {
            setDropdownOpen(null);
        } else {
            setDropdownOpen(name);
        }
    };

    return (
        <header className="w-full flex-col font-sans relative z-50">
            {/* 1. GOV TOP BAR (Accessibility & Utils) */}
            <div className="bg-[#f0f0f0] border-b border-gray-300 text-[#333333] py-1 px-2 text-[10px] md:text-xs overflow-x-auto">
                <div className="max-w-7xl mx-auto flex justify-between md:justify-end items-center gap-4 min-w-max md:min-w-0">
                    <div className="hidden md:flex items-center gap-3 border-r border-gray-400 pr-3">
                        <a href="#main-content" className="hover:underline cursor-pointer font-medium">Skip to Main Content</a>
                        <span className="text-gray-400">|</span>
                        <span className="hover:underline cursor-pointer font-medium">Screen Reader Access</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                            <button className={`cursor-pointer hover:bg-gray-200 px-1.5 py-0.5 border border-gray-300 rounded font-bold ${fontSize === 90 ? 'bg-gray-300' : ''}`} onClick={() => setFontSize(90)}>A-</button>
                            <button className={`cursor-pointer hover:bg-gray-200 px-1.5 py-0.5 border border-gray-300 rounded font-bold ${fontSize === 100 ? 'bg-gray-300' : ''}`} onClick={() => setFontSize(100)}>A</button>
                            <button className={`cursor-pointer hover:bg-gray-200 px-1.5 py-0.5 border border-gray-300 rounded font-bold ${fontSize === 110 ? 'bg-gray-300' : ''}`} onClick={() => setFontSize(110)}>A+</button>
                        </div>
                        <div className="flex border border-gray-400 rounded overflow-hidden">
                            <button
                                className={`bg-black text-white px-2 py-0.5 cursor-pointer text-[10px] ${isHighContrast ? 'ring-2 ring-inset ring-yellow-400' : ''}`}
                                onClick={() => setIsHighContrast(true)}
                                title="High Contrast"
                            >A</button>
                            <button
                                className={`bg-white text-black px-2 py-0.5 cursor-pointer hover:bg-gray-100 text-[10px] ${!isHighContrast ? 'ring-2 ring-inset ring-[#0055A4]' : ''}`}
                                onClick={() => setIsHighContrast(false)}
                                title="Normal Contrast"
                            >A</button>
                        </div>
                        <div className="flex items-center gap-2 ml-2">
                            <button
                                className={`hover:underline cursor-pointer font-bold border-r border-gray-400 pr-2 ${language === 'en' ? 'text-[#003366]' : ''}`}
                                onClick={() => setLanguage('en')}
                            >English</button>
                            <button
                                className={`hover:underline cursor-pointer font-medium ${language === 'te' ? 'text-[#003366] font-bold' : ''}`}
                                onClick={() => setLanguage('te')}
                            >తెలుగు</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. BRANDING HEADER (White Background, Logos) */}
            <div className="bg-white shadow-sm py-2 md:py-4 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                    {/* Main Logo & Title */}
                    <Link to="/" className="flex items-center gap-3 md:gap-4 flex-grow pr-10 md:pr-0">
                        <div className="w-20 h-20 md:w-36 md:h-36 shrink-0 flex items-center justify-center">
                            <img src="/images/logo.png" alt="DS Projects Logo" className="w-full h-full object-contain" />
                        </div>
                        <div className="flex flex-col text-left">
                            <h1 className="font-bold text-[#003366] text-sm md:text-4xl leading-tight uppercase tracking-tight">
                                DS PROJECTS
                            </h1>
                            <p className="text-[9px] md:text-sm text-[#0055A4] font-bold mt-1">
                                MSME Sustainable (ZED) Certification & Consultancy Division
                            </p>
                            <p className="text-[9px] md:text-sm text-[#003366] font-bold mt-1">
                                UDYAM REGISTRATION NO: UDYAM-AP-13-0077732
                            </p>
                        </div>
                    </Link>

                    {/* Partner Emblems (Right Side) - Hidden on mobile/tablet */}
                    <div className="hidden lg:flex items-center gap-6 grayscale opacity-90">
                        <div className="flex flex-col items-center">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" alt="Govt Emblem" className="h-14 w-auto object-contain mb-1" />
                            <span className="text-[10px] font-bold text-gray-600">Facilitator</span>
                        </div>
                        <div className="h-12 w-[1px] bg-gray-300"></div>
                        <div className="flex flex-col items-center">
                            <span className="text-xl font-black text-orange-500 tracking-tighter">MSME</span>
                            <span className="text-[10px] uppercase font-bold text-[#F59E0B]">ZED Certification</span>
                        </div>
                    </div>

                    {/* Mobile Hamburger */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-700">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
                {/* Mobile badge removed since details are under logo now */}
            </div>

            {/* 3. NAVIGATION BAR (ZED Colors Gradient) */}
            <nav className="bg-gradient-to-r from-[#003366] to-[#0055A4] text-white shadow-md relative z-10 border-t-4 border-[#F59E0B]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:justify-between">
                    {/* Desktop Menu */}
                    <ul className="hidden md:flex flex-wrap">
                        {navLinks.map((link) => (
                            <li key={link.name} className="group relative h-full">
                                {link.dropdown ? (
                                    <div className="flex h-full">
                                        <Link
                                            to={link.path}
                                            className={`flex items-center h-full px-4 py-4 text-sm font-extrabold tracking-wide uppercase transition-colors 
                                                ${isActive(link) ? 'bg-black/20 text-white' : 'hover:bg-black/10 text-white'}`}
                                        >
                                            {link.name}
                                        </Link>
                                        <button
                                            className={`px-1 py-4 h-full flex items-center transition-colors hover:bg-black/10`}
                                            aria-label="Toggle Dropdown"
                                        >
                                            <ChevronDown size={14} />
                                        </button>
                                        <ul className="absolute left-0 top-full w-56 bg-white text-gray-800 shadow-xl border-t-4 border-[#F59E0B] hidden group-hover:block animate-fade-in z-50">
                                            {link.dropdown.map((dropLink) => (
                                                <li key={dropLink.path} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                                                    <Link to={dropLink.path} className="block px-4 py-3 text-sm font-bold text-gray-700 hover:text-[#0055A4]">
                                                        {dropLink.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ) : (
                                    <Link
                                        to={link.path}
                                        className={`inline-block h-full px-6 py-4 text-sm font-extrabold tracking-wide uppercase transition-colors
                                            ${isActive(link)
                                                ? 'bg-black/20 text-white' // Active: semi-transparent dark overlay
                                                : 'hover:bg-black/10 text-white' // Hover: semi-transparent dark overlay
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Desktop Login Buttons */}
                    <div className="hidden md:flex items-center gap-3 py-2">
                        <a href="https://candidate.dsprojectss.com" target="_blank" rel="noopener noreferrer" className="bg-white text-[#0055A4] hover:bg-gray-100 font-bold px-4 py-2 rounded-sm text-xs uppercase tracking-wider transition-colors shadow-sm whitespace-nowrap">Candidate Login</a>
                        <a href="https://admin.dsprojectss.com" target="_blank" rel="noopener noreferrer" className="bg-[#003366] text-white hover:bg-[#124246] font-bold px-4 py-2 rounded-sm text-xs uppercase tracking-wider transition-colors shadow-sm whitespace-nowrap">Admin Login</a>
                    </div>

                    {/* Mobile Menu Dropdown */}
                    <div className={`md:hidden w-full overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[800px]' : 'max-h-0'}`}>
                        <ul className="flex flex-col py-2">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    {link.dropdown ? (
                                        <div className="flex flex-col">
                                            <div className="flex w-full items-stretch border-l-4 border-transparent hover:bg-black/10">
                                                <Link
                                                    to={link.path}
                                                    onClick={() => setIsOpen(false)}
                                                    className={`flex-1 px-4 py-3 text-sm font-bold uppercase transition-colors
                                                        ${isActive(link) ? 'text-white' : 'text-gray-100'}`}
                                                >
                                                    {link.name}
                                                </Link>
                                                <button
                                                    onClick={(e) => { e.preventDefault(); toggleMobileDropdown(link.name); }}
                                                    className="px-6 border-l border-white/10 flex items-center"
                                                >
                                                    <ChevronDown size={16} className={`transform transition-transform ${dropdownOpen === link.name ? 'rotate-180' : ''}`} />
                                                </button>
                                            </div>
                                            <div className={`bg-[#004080] overflow-hidden transition-all duration-300 ${dropdownOpen === link.name ? 'max-h-40' : 'max-h-0'}`}>
                                                <ul>
                                                    {link.dropdown.map((dropLink) => (
                                                        <li key={dropLink.path}>
                                                            <Link
                                                                to={dropLink.path}
                                                                onClick={() => setIsOpen(false)}
                                                                className="block pl-8 pr-4 py-3 text-xs font-bold uppercase text-gray-300 hover:text-white border-l-4 border-transparent hover:border-yellow-400"
                                                            >
                                                                {dropLink.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ) : (
                                        <Link
                                            to={link.path}
                                            onClick={() => setIsOpen(false)}
                                            className={`block px-4 py-3 border-l-4 text-sm font-bold uppercase ${isActive(link)
                                                ? 'border-white bg-black/20 text-white font-black'
                                                : 'border-transparent hover:bg-black/10 text-gray-100'
                                                }`}
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </li>
                            ))}
                            {/* Mobile Login Buttons */}
                            <li className="flex flex-col gap-3 px-4 py-4 border-t border-white/20 mt-2">
                                <a href="https://candidate.dsprojectss.com" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="w-full text-center bg-white text-[#0055A4] font-bold px-4 py-3 rounded-sm text-sm uppercase tracking-wider">Candidate Login</a>
                                <a href="https://admin.dsprojectss.com" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="w-full text-center bg-[#003366] text-white font-bold px-4 py-3 rounded-sm text-sm uppercase tracking-wider">Admin Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header >
    );
};

export default Navbar;
