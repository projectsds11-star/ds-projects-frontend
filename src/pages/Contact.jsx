import React from 'react';
import { MapPin, Phone, Mail, ChevronRight, Send } from 'lucide-react';
import DownloadCard from '../components/DownloadCard';

const Contact = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        phone: '',
        email: '',
        inquiryType: 'General Inquiry',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, phone, email, inquiryType, message } = formData;

        const whatsappMessage =
            `NEW INQUIRY FROM WEBSITE%0a` +
            `------------------------%0a` +
            `Name: ${name}%0a` +
            `Phone: ${phone}%0a` +
            `Email: ${email}%0a` +
            `Inquiry Type: ${inquiryType}%0a` +
            `Message: ${message}%0a` +
            `------------------------`;

        const phoneNumber = '919701529797';
        const url = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

        window.open(url, '_blank');
    };

    return (
        <div className="bg-[#f8fafc] min-h-screen font-sans">
            {/* Page Header */}
            <div className="bg-[#0055A4] text-white py-16 md:py-20 border-b-4 border-[#a5d63f] relative overflow-hidden text-center">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight uppercase">Get in Touch</h1>
                    <div className="h-1 w-20 bg-[#a5d63f] mx-auto mb-6"></div>
                    <p className="text-xl text-blue-50 max-w-2xl mx-auto leading-relaxed font-medium">
                        Contact us for expert ZED Certification guidance and Government Project facilitation.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Info & Map */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-3xl font-bold text-[#1a202c] mb-8 border-l-4 border-[#0055A4] pl-4 uppercase tracking-tight">Our Location</h2>
                            <div className="bg-white p-8 rounded-sm shadow-xl border border-gray-100 space-y-8">
                                <div className="flex items-start gap-5 pb-8 border-b border-gray-100">
                                    <div className="bg-[#0055A4] p-4 rounded-full text-white shadow-md">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-black text-[#003366] mb-2 uppercase tracking-widest text-xs">Headquarters</h3>
                                        <p className="text-gray-700 leading-relaxed font-medium">
                                            Sai Complex, 3rd Floor,<br />
                                            Daravari Thota, Opp: Bank Of Baroda,<br />
                                            Ongole, PIN: 523001, AP
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5 pb-8 border-b border-gray-100">
                                    <div className="bg-[#a5d63f] p-4 rounded-full text-white shadow-md">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-black text-[#003366] mb-2 uppercase tracking-widest text-xs">Phone</h3>
                                        <p className="text-gray-900 font-black text-2xl tracking-tighter">+91 9701529797</p>
                                        <p className="text-gray-500 text-xs mt-1 font-bold uppercase tracking-widest">(Mon-Sat, 9 AM - 6 PM)</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5 pb-8 border-b border-gray-100">
                                    <div className="bg-[#0055A4] p-4 rounded-full text-white shadow-md">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-black text-[#003366] mb-2 uppercase tracking-widest text-xs">Email</h3>
                                        <p className="text-gray-700 font-bold text-lg">projectds11@gmail.com</p>
                                    </div>
                                </div>

                                <a href="https://wa.me/919701529797" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 group cursor-pointer">
                                    <div className="bg-[#25D366] p-4 rounded-full text-white shadow-md group-hover:scale-110 transition-transform">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 448 512"
                                            width="24"
                                            height="24"
                                            fill="currentColor"
                                        >
                                            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.8c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-black text-[#003366] mb-2 uppercase tracking-widest text-xs">WhatsApp</h3>
                                        <p className="text-gray-700 font-bold text-lg group-hover:text-[#25D366] transition-colors">+91 9701529797</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="rounded-sm overflow-hidden shadow-2xl border-4 border-white h-96 relative">
                            <iframe
                                title="DS Projects Ongole"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15383.914594248476!2d80.03819894709425!3d15.512349001601735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4b01620d43c3bf%3A0x673172e259e51c89!2sOngole%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <div className="bg-white p-10 rounded-sm shadow-2xl border border-gray-100 border-t-8 border-t-[#0055A4]">
                            <div className="mb-10">
                                <h2 className="text-3xl font-black text-[#1a202c] mb-2 uppercase tracking-tight">Send a Message</h2>
                                <p className="text-gray-500 font-medium">We usually respond within 24 business hours.</p>
                                <div className="w-16 h-1 bg-[#a5d63f] mt-4"></div>
                            </div>

                            <form className="space-y-8" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-xs font-black uppercase text-[#003366] tracking-[0.2em]">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 rounded-sm border-2 border-gray-100 focus:border-[#0055A4] outline-none transition-all bg-gray-50/50 font-medium"
                                            placeholder="John Doe"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-xs font-black uppercase text-[#003366] tracking-[0.2em]">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 rounded-sm border-2 border-gray-100 focus:border-[#0055A4] outline-none transition-all bg-gray-50/50 font-medium"
                                            placeholder="+91 90000 00000"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-xs font-black uppercase text-[#003366] tracking-[0.2em]">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-5 py-4 rounded-sm border-2 border-gray-100 focus:border-[#0055A4] outline-none transition-all bg-gray-50/50 font-medium"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>

                                <div className="space-y-3">
                                    <label className="text-xs font-black uppercase text-[#003366] tracking-[0.2em]">Inquiry Type</label>
                                    <div className="relative">
                                        <select
                                            name="inquiryType"
                                            value={formData.inquiryType}
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 rounded-sm border-2 border-gray-100 focus:border-[#0055A4] outline-none transition-all bg-gray-50/50 font-bold appearance-none"
                                        >
                                            <option>General Inquiry</option>
                                            <option>MSME ZED Certification</option>
                                            <option>Sarpanch Samvaad Support</option>
                                            <option>Govt. Project Collaboration</option>
                                            <option>Jobs & Careers</option>
                                        </select>
                                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                            <ChevronRight size={18} className="rotate-90" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-xs font-black uppercase text-[#003366] tracking-[0.2em]">Your Message</label>
                                    <textarea
                                        rows="5"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-5 py-4 rounded-sm border-2 border-gray-100 focus:border-[#0055A4] outline-none transition-all bg-gray-50/50 font-medium resize-none"
                                        placeholder="Describe your requirement in detail..."
                                        required
                                    ></textarea>
                                </div>

                                <button type="submit" className="w-full bg-[#0055A4] text-white font-black py-5 rounded-sm hover:bg-[#003366] transition-all shadow-xl uppercase tracking-[0.3em] text-sm flex items-center justify-center gap-3 group">
                                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    Send Inquiry On WhatsApp
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

export default Contact;
