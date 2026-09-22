import React, { useState } from 'react';
import { Briefcase, MapPin, IndianRupee, Clock, Send, ChevronRight, FileText } from 'lucide-react';
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

        const phoneNumber = '919701529797';
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
            <div className="bg-[#0055A4] text-white py-16 md:py-20 border-b-4 border-[#a5d63f] relative overflow-hidden text-center">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight uppercase">Join Our Mission</h1>
                    <div className="h-1 w-20 bg-[#a5d63f] mx-auto mb-6"></div>
                    <p className="text-xl text-blue-50 max-w-2xl mx-auto leading-relaxed font-medium">
                        Build your career while empowering rural India and the MSME sector.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Job Listings Column */}
                    <div className="space-y-8">
                        <div className="mb-10">
                            <h2 className="text-3xl font-black text-[#1a202c] mb-6 border-l-4 border-[#0055A4] pl-4 uppercase tracking-tight">Open Opportunities</h2>
                            <div className="rounded-sm overflow-hidden shadow-xl border-4 border-white mb-8">
                                <img src="/images/roles-info.jpg" alt="Job Roles Info" className="w-full h-auto" />
                            </div>
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
                                            <span className="text-[10px] font-black uppercase tracking-widest text-[#a5d63f] bg-teal-50 border border-teal-100 px-3 py-1 rounded-sm">
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
                                        <div className="p-2 bg-gray-50 rounded-sm"><MapPin size={18} className="text-[#a5d63f]" /></div>
                                        <span className="font-bold">{job.location}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-600">
                                        <div className="p-2 bg-gray-50 rounded-sm"><IndianRupee size={18} className="text-[#a5d63f]" /></div>
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

                                <div className="pt-6 border-t border-gray-50">
                                    <button
                                        onClick={() => {
                                            document.getElementById('application-form').scrollIntoView({ behavior: 'smooth' });
                                        }}
                                        className="text-[#0055A4] font-black text-sm uppercase tracking-[0.2em] flex items-center gap-2 group-hover:gap-4 transition-all"
                                    >
                                        Apply for this position <ChevronRight size={16} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Registration Form Column */}
                    <div id="application-form" className="lg:sticky lg:top-24 space-y-10">
                        <div className="rounded-sm overflow-hidden shadow-2xl border-4 border-white">
                            <img src="/images/recruitment-poster.jpg" alt="Recruitment Poster" className="w-full h-auto" />
                        </div>

                        <div className="bg-white p-10 rounded-sm shadow-2xl border border-gray-100 border-t-8 border-t-[#0055A4]">
                            <div className="mb-10">
                                <h2 className="text-3xl font-black text-[#1a202c] mb-2 uppercase tracking-tight">Application Form</h2>
                                <p className="text-gray-500 font-medium tracking-wide">Submit your details to start the process.</p>
                                <div className="w-16 h-1 bg-[#a5d63f] mt-4"></div>
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
