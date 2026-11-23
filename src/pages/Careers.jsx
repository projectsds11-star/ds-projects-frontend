import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, MapPin, IndianRupee, Clock, Send, ChevronRight, FileText, ArrowRight } from 'lucide-react';
import DownloadCard from '../components/DownloadCard';

const Careers = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        qualification: '',
        district: '',
        position: 'ZED Facilitator'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, phone, email, qualification, district, position } = formData;

        const whatsappMessage =
            `NEW JOB APPLICATION%0a` +
            `------------------------%0a` +
            `Position: ${position}%0a` +
            `Name: ${name}%0a` +
            `Phone: ${phone}%0a` +
            `Email: ${email}%0a` +
            `Qualification: ${qualification}%0a` +
            `District: ${district}%0a` +
            `------------------------`;

        const phoneNumber = '919701529191';
        const url = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

        window.open(url, '_blank');
    };

    const jobs = [
        {
            title: "ZED Facilitator",
            service: "MSME ZED Certification",
            location: "Andhra Pradesh (Field Work)",
            salary: "₹25,000 – ₹30,000 / month",
            type: "Contractual",
            desc: "Responsible for onboarding MSMEs, guiding them through documentation, and facilitating ZED certification assessments.",
            eligibility: "Degree / B-Tech / Diploma with good communication skills.",
            age: "21 – 35 Years"
        },
        {
            title: "Mandal Coordinator",
            service: "Sarpanch Samvaad App",
            location: "Andhra Pradesh (Mandal Level)",
            salary: "₹25,000 – ₹30,000 / month",
            type: "Contractual",
            desc: "Coordinate with Sarpanchs, ensure app adoption, and manage data collection at the mandal level.",
            eligibility: "Any Degree. Experience in field work is a plus.",
            age: "21 – 35 Years"
        }
    ];

    return (
        <div className="bg-[#f8fafc] min-h-screen font-sans">
            {/* Page Header */}
            <div className="bg-[#0055A4] text-white py-16 md:py-20 border-b-4 border-[#F59E0B] relative overflow-hidden text-center">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight uppercase">Join Our Mission</h1>
                    <div className="h-1 w-20 bg-[#F59E0B] mx-auto mb-6"></div>
                    <p className="text-xl text-blue-50 max-w-2xl mx-auto leading-relaxed font-medium">
                        Build your career while empowering rural India and the MSME sector.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 space-y-12">

                {/* ── Top Recruitment Spotlight Banner (Identical to Home Page) ── */}
                <div className="bg-white rounded-lg shadow-xl border border-blue-100 overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                        
                        {/* Left Content Column */}
                        <div className="p-8 sm:p-12 lg:col-span-8 space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-900 border border-amber-200 text-xs font-black uppercase tracking-wider rounded-sm">
                                <span>We Are Hiring Across Andhra Pradesh</span>
                            </div>

                            <div>
                                <h2 className="text-2xl sm:text-4xl font-black text-[#003366] tracking-tight leading-tight">
                                    MSME ZED Certification Field Officer Opportunity
                                </h2>
                                <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
                                    Build a high-growth career with <strong>DS Projects Private Limited</strong>. Assist micro, small, and medium enterprises across Andhra Pradesh in achieving National ZED Certification, digital documentation, and quality governance.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-sm">
                                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Remuneration</div>
                                    <div className="text-base font-black text-[#0055A4] mt-0.5">₹25,000 – ₹30,000</div>
                                    <div className="text-[11px] text-slate-500">Per Month + Allowances</div>
                                </div>
                                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-sm">
                                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Location</div>
                                    <div className="text-base font-black text-slate-800 mt-0.5">Andhra Pradesh</div>
                                    <div className="text-[11px] text-slate-500">Mandal &amp; District Field Visits</div>
                                </div>
                                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-sm">
                                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Eligibility</div>
                                    <div className="text-base font-black text-slate-800 mt-0.5">Any Degree / Diploma</div>
                                    <div className="text-[11px] text-slate-500">Freshers &amp; Exp. Welcome</div>
                                </div>
                            </div>

                            <div className="pt-2 flex flex-wrap items-center gap-4">
                                <Link
                                    to="/apply?position=MSME%20ZED%20Certification%20Field%20Work"
                                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0055A4] hover:bg-[#003366] text-white font-black text-sm uppercase tracking-wider rounded-sm shadow-md transition-all group"
                                >
                                    <span>Apply Online Now</span>
                                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <a
                                    href="#open-opportunities"
                                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-transparent border-2 border-[#0055A4] text-[#0055A4] hover:bg-blue-50 font-bold text-sm uppercase tracking-wider rounded-sm transition-all"
                                >
                                    <span>View All Positions Below</span>
                                </a>
                            </div>
                        </div>

                        {/* Right Highlight Column */}
                        <div className="bg-gradient-to-br from-[#003366] to-[#0055A4] text-white p-8 sm:p-12 lg:col-span-4 h-full flex flex-col justify-center space-y-4 border-t lg:border-t-0 lg:border-l-4 border-[#F59E0B]">
                            <h3 className="text-lg font-black tracking-wide uppercase text-amber-300">
                                Quick Highlights
                            </h3>
                            <ul className="space-y-3 text-xs sm:text-sm text-blue-50 leading-relaxed">
                                <li className="flex items-start gap-2">
                                    <span className="text-amber-400 font-bold">✔</span>
                                    <span>Field coordination with local MSME manufacturing units.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-amber-400 font-bold">✔</span>
                                    <span>Complete digital documentation &amp; verification support.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-amber-400 font-bold">✔</span>
                                    <span>Official Appointment Letter with direct corporate onboarding.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-amber-400 font-bold">✔</span>
                                    <span>Preferred posting in candidate's home district or mandal.</span>
                                </li>
                            </ul>

                            <div className="pt-2 border-t border-white/20">
                                <p className="text-[11px] text-blue-200">
                                    * Two-wheeler and valid driving license preferred for field visits.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                <div id="open-opportunities" className="grid grid-cols-1 lg:grid-cols-2 gap-16 pt-4">

                    {/* Job Listings Column */}
                    <div className="space-y-8">
                        <div className="mb-10">
                            <h2 className="text-3xl font-black text-[#1a202c] mb-6 border-l-4 border-[#0055A4] pl-4 uppercase tracking-tight">Open Opportunities</h2>

                        </div>

                        {jobs.map((job, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-sm shadow-lg border border-gray-100 hover:border-[#0055A4] transition-all duration-300 relative group">
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <Briefcase size={80} className="text-[#0055A4]" />
                                </div>
                                <div className="flex justify-between items-start mb-6 border-b border-gray-50 pb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-[#003366]">{job.title}</h3>
                                        <div className="flex items-center gap-2 mt-2">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-white bg-[#0055A4] px-3 py-1 rounded-sm">
                                                {job.service}
                                            </span>
                                            <span className="text-[10px] font-black uppercase tracking-widest text-[#F59E0B] bg-teal-50 border border-teal-100 px-3 py-1 rounded-sm">
                                                {job.type}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-gray-700 mb-8 leading-relaxed font-medium">
                                    {job.desc}
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm mb-10">
                                    <div className="flex items-center gap-3 text-gray-600">
                                        <div className="p-2 bg-gray-50 rounded-sm"><MapPin size={18} className="text-[#F59E0B]" /></div>
                                        <span className="font-bold">{job.location}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-600">
                                        <div className="p-2 bg-gray-50 rounded-sm"><IndianRupee size={18} className="text-[#F59E0B]" /></div>
                                        <span className="font-bold">{job.salary}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-600">
                                        <div className="p-2 bg-gray-50 rounded-sm"><FileText size={18} className="text-[#0055A4]" /></div>
                                        <span className="font-medium">{job.eligibility}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-600">
                                        <div className="p-2 bg-gray-50 rounded-sm"><Clock size={18} className="text-[#0055A4]" /></div>
                                        <span className="font-medium">Age: {job.age}</span>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-gray-50 flex items-center justify-between gap-4 flex-wrap">
                                    <Link
                                        to={`/apply?position=${encodeURIComponent(job.service + ' Field Work')}`}
                                        className="bg-[#0055A4] hover:bg-[#003366] text-white font-bold text-xs uppercase px-5 py-2.5 rounded-sm shadow-md flex items-center gap-2 transition-all"
                                    >
                                        <span>Apply for this Position</span>
                                        <ChevronRight size={14} />
                                    </Link>
                                    <button
                                        onClick={() => {
                                            document.getElementById('application-form').scrollIntoView({ behavior: 'smooth' });
                                        }}
                                        className="text-[#0055A4] font-black text-xs uppercase tracking-wider flex items-center gap-1 hover:underline"
                                    >
                                        Quick WhatsApp Apply <ChevronRight size={14} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Registration Form Column */}
                    <div id="application-form" className="lg:sticky lg:top-24 space-y-10">


                        <div className="bg-white p-10 rounded-sm shadow-2xl border border-gray-100 border-t-8 border-t-[#0055A4]">
                            <div className="mb-6 p-5 bg-gradient-to-r from-blue-50 to-sky-50 border-2 border-[#0055A4] rounded-sm text-center space-y-2">
                                <p className="font-extrabold text-[#003366] text-sm uppercase tracking-wide">
                                    MSME ZED Field Work Application
                                </p>
                                <p className="text-xs text-gray-600">
                                    Submit your candidate profile, educational qualifications &amp; field readiness directly online.
                                </p>
                                <Link
                                    to="/apply"
                                    className="inline-flex items-center gap-2 mt-2 bg-[#0055A4] hover:bg-[#003366] text-white font-bold text-xs uppercase px-6 py-2.5 rounded-sm shadow-md transition-all"
                                >
                                    <span>Apply Online Now</span>
                                    <ChevronRight size={14} />
                                </Link>
                            </div>

                            <div className="mb-10">
                                <h2 className="text-3xl font-black text-[#1a202c] mb-2 uppercase tracking-tight">Application Form</h2>
                                <p className="text-gray-500 font-medium tracking-wide">Submit your details to start the process.</p>
                                <div className="w-16 h-1 bg-[#F59E0B] mt-4"></div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase text-[#003366] tracking-[0.2em]">Position Preference</label>
                                    <select
                                        name="position"
                                        value={formData.position}
                                        onChange={handleChange}
                                        className="w-full px-5 py-4 border-2 border-gray-50 focus:border-[#0055A4] outline-none transition-all bg-gray-50 font-bold appearance-none rounded-sm"
                                    >
                                        <option value="ZED Facilitator">ZED Facilitator</option>
                                        <option value="Mandal Coordinator">Mandal Coordinator</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase text-[#003366] tracking-[0.2em]">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-5 py-4 border-2 border-gray-50 focus:border-[#0055A4] outline-none transition-all bg-gray-50 font-medium rounded-sm"
                                        placeholder="Enter your name"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase text-[#003366] tracking-[0.2em]">Phone</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 border-2 border-gray-50 focus:border-[#0055A4] outline-none transition-all bg-gray-50 font-medium rounded-sm"
                                            placeholder="91xxxxxxxx"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase text-[#003366] tracking-[0.2em]">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 border-2 border-gray-50 focus:border-[#0055A4] outline-none transition-all bg-gray-50 font-medium rounded-sm"
                                            placeholder="mail@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase text-[#003366] tracking-[0.2em]">Qualification</label>
                                        <input
                                            type="text"
                                            name="qualification"
                                            required
                                            value={formData.qualification}
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 border-2 border-gray-50 focus:border-[#0055A4] outline-none transition-all bg-gray-50 font-medium rounded-sm"
                                            placeholder="B.Tech / MBA / Degree"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase text-[#003366] tracking-[0.2em]">District (AP)</label>
                                        <input
                                            type="text"
                                            name="district"
                                            required
                                            value={formData.district}
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 border-2 border-gray-50 focus:border-[#0055A4] outline-none transition-all bg-gray-50 font-medium rounded-sm"
                                            placeholder="e.g., Prakasam"
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#0055A4] text-white font-black py-5 rounded-sm hover:bg-[#003366] transition-all shadow-xl uppercase tracking-[0.3em] text-sm flex items-center justify-center gap-3 group mt-4"
                                >
                                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    Submit Application
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

            {/* Download Card Section */}
            <DownloadCard />
        </div>
    );
};

export default Careers;
