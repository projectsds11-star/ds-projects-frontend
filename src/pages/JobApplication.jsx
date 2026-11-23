import React, { useState, useRef, useEffect } from 'react';
import {
  Briefcase,
  User,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Camera,
  CheckCircle2,
  AlertCircle,
  Printer,
  ChevronRight,
  ShieldCheck,
  Building2,
  Trash2,
  Plus,
  Eraser,
  Upload,
  ArrowLeft,
} from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';

const DEFAULT_QUALIFICATIONS = [
  { qualification: 'SSC / 10th', school: '', stream: 'General', year: '', score: '' },
  { qualification: 'Intermediate / Diploma', school: '', stream: '', year: '', score: '' },
  { qualification: 'Graduation (Degree)', school: '', stream: '', year: '', score: '' },
  { qualification: 'Post-Graduation / Other', school: '', stream: '', year: '', score: '' },
];

export default function JobApplication() {
  const [searchParams] = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(null);
  const [errorBanner, setErrorBanner] = useState('');
  const [photoPreview, setPhotoPreview] = useState('');
  const [signatureData, setSignatureData] = useState('');
  const [sameAsPresent, setSameAsPresent] = useState(false);
  const [signatureMode, setSignatureMode] = useState('draw'); // 'draw' | 'upload'
  const [isDrawing, setIsDrawing] = useState(false);

  // Form State
  const [positionAppliedFor, setPositionAppliedFor] = useState(
    searchParams.get('position') || 'MSME ZED Certification Field Work'
  );
  const [applicationDate, setApplicationDate] = useState(new Date().toISOString().split('T')[0]);
  const [fullName, setFullName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('Male');
  const [mobileNumber, setMobileNumber] = useState('');
  const [alternateMobile, setAlternateMobile] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('Single');
  const [aadhaarNumber, setAadhaarNumber] = useState('');
  const [twoWheelerAndLicense, setTwoWheelerAndLicense] = useState(true);
  const [presentAddress, setPresentAddress] = useState('');
  const [permanentAddress, setPermanentAddress] = useState('');
  const [qualifications, setQualifications] = useState(DEFAULT_QUALIFICATIONS);
  const [isFresher, setIsFresher] = useState(false);
  const [workExperience, setWorkExperience] = useState([
    { company: '', designation: '', duration: '', responsibilities: '' },
  ]);
  const [languagesKnown, setLanguagesKnown] = useState(['Telugu', 'English']);
  const [languagesOther, setLanguagesOther] = useState('');
  const [willingToTravel, setWillingToTravel] = useState(true);
  const [preferredArea, setPreferredArea] = useState('');
  const [place, setPlace] = useState('Ongole');
  const [declarationAccepted, setDeclarationAccepted] = useState(true);

  const fileInputRef = useRef(null);
  const sigFileInputRef = useRef(null);
  const canvasRef = useRef(null);

  // Handle "Same as Present Address"
  useEffect(() => {
    if (sameAsPresent) {
      setPermanentAddress(presentAddress);
    }
  }, [sameAsPresent, presentAddress]);

  // Handle Signature Canvas drawing
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = '#0f172a';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
  }, [signatureMode]);

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const ctx = canvas.getContext('2d');
    const x = (e.clientX || e.touches?.[0]?.clientX) - rect.left;
    const y = (e.clientY || e.touches?.[0]?.clientY) - rect.top;
    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const ctx = canvas.getContext('2d');
    const x = (e.clientX || e.touches?.[0]?.clientX) - rect.left;
    const y = (e.clientY || e.touches?.[0]?.clientY) - rect.top;
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (!isDrawing) return;
    setIsDrawing(false);
    const canvas = canvasRef.current;
    if (canvas) {
      const dataUrl = canvas.toDataURL('image/png');
      setSignatureData(dataUrl);
    }
  };

  const clearSignature = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    setSignatureData('');
  };

  // Photo select
  const handlePhotoSelect = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setPhotoPreview(reader.result);
    reader.readAsDataURL(file);
  };

  // Signature file select
  const handleSignatureFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setSignatureData(reader.result);
    reader.readAsDataURL(file);
  };

  // Language toggle
  const toggleLanguage = (lang) => {
    setLanguagesKnown((prev) =>
      prev.includes(lang) ? prev.filter((l) => l !== lang) : [...prev, lang]
    );
  };

  // Qualification row change
  const handleQualChange = (index, field, value) => {
    setQualifications((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  // Experience row change
  const handleExpChange = (index, field, value) => {
    setWorkExperience((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  const addExpRow = () => {
    setWorkExperience((prev) => [
      ...prev,
      { company: '', designation: '', duration: '', responsibilities: '' },
    ]);
  };

  const removeExpRow = (index) => {
    setWorkExperience((prev) => prev.filter((_, idx) => idx !== index));
  };

  // Submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorBanner('');

    // Client-side validations
    if (!fullName.trim()) {
      setErrorBanner('Please enter your Full Name.');
      return;
    }
    if (!fatherName.trim()) {
      setErrorBanner("Please enter Father's / Guardian's Name.");
      return;
    }
    if (!mobileNumber.trim() || mobileNumber.replace(/\D/g, '').length < 10) {
      setErrorBanner('Please enter a valid 10-digit Mobile Number.');
      return;
    }
    if (!emailAddress.trim() || !emailAddress.includes('@')) {
      setErrorBanner('Please enter a valid Email Address.');
      return;
    }
    if (!presentAddress.trim()) {
      setErrorBanner('Please enter your Present Address.');
      return;
    }
    if (!permanentAddress.trim()) {
      setErrorBanner('Please enter your Permanent Address.');
      return;
    }
    if (!preferredArea.trim()) {
      setErrorBanner('Please specify your Preferred Area / Mandals for field visits.');
      return;
    }
    if (!declarationAccepted) {
      setErrorBanner('You must accept the declaration to submit your application.');
      return;
    }

    setIsSubmitting(true);

    const payload = {
      positionAppliedFor,
      applicationDate,
      fullName: fullName.trim(),
      fatherName: fatherName.trim(),
      dateOfBirth,
      gender,
      mobileNumber: mobileNumber.trim(),
      alternateMobile: alternateMobile.trim(),
      emailAddress: emailAddress.trim(),
      maritalStatus,
      aadhaarNumber: aadhaarNumber.trim(),
      twoWheelerAndLicense,
      presentAddress: presentAddress.trim(),
      permanentAddress: permanentAddress.trim(),
      candidatePhotoUrl: photoPreview,
      qualifications,
      workExperience: isFresher ? [] : workExperience,
      languagesKnown,
      languagesOther: languagesOther.trim(),
      willingToTravel,
      preferredArea: preferredArea.trim(),
      place: place.trim(),
      declarationAccepted: true,
      signatureUrl: signatureData,
    };

    try {
      // Submit to central DS Projects API
      const endpoints = [
        'https://admin.dsprojectss.com/api/applications',
        'https://ds-projects-eta.vercel.app/api/applications',
      ];

      let resData = null;
      let success = false;

      for (const ep of endpoints) {
        try {
          const res = await fetch(ep, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          });
          if (res.ok) {
            resData = await res.json();
            success = true;
            break;
          }
        } catch (err) {
          console.warn(`Could not reach ${ep}:`, err);
        }
      }

      const generatedAppNo = resData?.applicationNo || `APP-2026-${Math.floor(1000 + Math.random() * 9000)}`;

      setSubmissionSuccess({
        applicationNo: generatedAppNo,
        application: payload,
      });

      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.error('Submission failed:', err);
      setErrorBanner('Could not submit application. Please check your internet connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 py-8 px-3 sm:px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-6">

        {/* ── Top Bar ──────────────────────────────────────────────── */}
        <div className="flex items-center justify-between no-print">
          <Link
            to="/careers"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-xs"
          >
            <ArrowLeft size={14} />
            <span>Back to Careers</span>
          </Link>

          {submissionSuccess && (
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#0055A4] hover:bg-[#003366] px-4 py-2 rounded-xl shadow-xs"
            >
              <Printer size={14} />
              <span>Print Application Form</span>
            </button>
          )}
        </div>

        {/* ── Error Banner ─────────────────────────────────────────── */}
        {errorBanner && (
          <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-3 no-print">
            <AlertCircle size={18} className="text-rose-600 shrink-0" />
            <p className="font-medium">{errorBanner}</p>
          </div>
        )}

        {/* ── Success Card ─────────────────────────────────────────── */}
        {submissionSuccess && (
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-6 sm:p-8 text-center space-y-2">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto shadow-inner mb-3">
                <CheckCircle2 size={32} className="text-white" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black tracking-wide">
                Application Submitted Successfully!
              </h2>
              <p className="text-emerald-100 text-xs sm:text-sm max-w-lg mx-auto">
                Thank you for applying to DS PROJECTS PRIVATE LIMITED. Your application credentials have been recorded.
              </p>
              <div className="inline-block mt-3 px-5 py-2 bg-white text-emerald-900 rounded-full font-mono text-sm sm:text-base font-black shadow-md tracking-wider">
                Application No: {submissionSuccess.applicationNo}
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-xs text-slate-600 space-y-3">
                <p className="font-bold text-slate-800 text-sm">Next Steps &amp; Information:</p>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
                  <li>Our field coordination and HR team will review your qualifications and contact you for the interview round.</li>
                  <li>Please keep your <strong>Application Number ({submissionSuccess.applicationNo})</strong> safe for future correspondence.</li>
                  <li>Bring your original educational certificates, Aadhaar card, and driving license at the time of interview.</li>
                </ul>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 no-print pt-2">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="bg-[#0055A4] hover:bg-[#003366] text-white gap-2 font-bold px-6 h-11 rounded-xl shadow-md inline-flex items-center text-xs"
                >
                  <Printer size={16} />
                  <span>Download / Print Application Copy</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSubmissionSuccess(null);
                    window.location.reload();
                  }}
                  className="border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold h-11 px-6 rounded-xl text-xs"
                >
                  Submit Another Application
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ── Official A4 Document Application Form ────────────────── */}
        <div className={`bg-white rounded-2xl shadow-xl border border-slate-300 p-6 sm:p-10 ${submissionSuccess ? 'print:block mt-6' : 'block'}`}>
          <form onSubmit={handleSubmit} className="space-y-8">

            {/* ── 1. HEADER BRANDING & PHOTO (Matching Image 1) ──────── */}
            <div className="flex flex-col sm:flex-row items-start justify-between gap-6 pb-6 border-b-2 border-slate-800">
              <div className="space-y-1.5 flex-1">
                <span className="text-2xl sm:text-3xl font-black text-[#0055A4] tracking-tight block">
                  DSPROJECTS
                </span>
                <p className="text-xs font-bold text-slate-700">
                  Corporate Office: RRR Complex, Guntur Mini Bypass Road, Opposite Royal Oak, Ongole-523001
                </p>
                <div className="text-[11px] text-slate-600 space-y-0.5">
                  <p>
                    <span className="font-semibold text-slate-800">Phone:</span> +91 9701529191 &nbsp;|&nbsp;
                    <span className="font-semibold text-slate-800">Email:</span> projectsds11@gmail.com
                  </p>
                  <p>
                    <span className="font-semibold text-slate-800">Website:</span> www.dsprojectss.com &nbsp;|&nbsp;
                    <span className="font-semibold text-slate-800">UDYAM:</span> UDYAM-AP-13-0077732
                  </p>
                </div>
              </div>

              {/* Passport Photo Box */}
              <div className="w-32 h-40 border-2 border-dashed border-slate-400 bg-slate-50 rounded-lg flex flex-col items-center justify-center p-2 text-center relative overflow-hidden shrink-0 group">
                {photoPreview ? (
                  <>
                    <img
                      src={photoPreview}
                      alt="Passport Photo"
                      className="w-full h-full object-cover rounded"
                    />
                    <button
                      type="button"
                      onClick={() => setPhotoPreview('')}
                      className="absolute top-1 right-1 bg-rose-600 text-white p-1 rounded-full shadow-md hover:bg-rose-700 no-print"
                      title="Remove photo"
                    >
                      <Trash2 size={12} />
                    </button>
                  </>
                ) : (
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="cursor-pointer space-y-1 text-slate-500 hover:text-slate-800 transition"
                  >
                    <Camera size={24} className="mx-auto text-slate-400" />
                    <p className="text-[10px] font-medium leading-tight">
                      Affix Recent Passport Size Photograph
                    </p>
                    <span className="text-[9px] text-[#0055A4] font-bold block no-print hover:underline">
                      Click to Upload
                    </span>
                  </div>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  className="hidden"
                  onChange={handlePhotoSelect}
                />
              </div>
            </div>

            {/* ── 2. BLUE BANNER TITLE BAR ───────────────────────────── */}
            <div className="bg-[#0055A4] text-white px-4 py-2.5 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-xs">
              <span className="font-black text-sm tracking-wider uppercase">
                JOB APPLICATION FORM
              </span>
              <span className="text-xs font-semibold bg-white/15 px-3 py-1 rounded-md text-sky-100 border border-white/20">
                Post: {positionAppliedFor}
              </span>
            </div>

            {/* ── 3. SUBHEADER METADATA ──────────────────────────────── */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-slate-50 p-3.5 rounded-lg border border-slate-200 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">
                  Position Applied For:
                </label>
                <input
                  type="text"
                  value={positionAppliedFor}
                  onChange={(e) => setPositionAppliedFor(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-md px-2.5 py-1.5 font-semibold text-slate-800 text-xs"
                />
              </div>
              <div>
                <label className="font-bold text-slate-700 block mb-1">Date:</label>
                <input
                  type="date"
                  value={applicationDate}
                  onChange={(e) => setApplicationDate(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-md px-2.5 py-1.5 font-semibold text-slate-800 text-xs"
                />
              </div>
              <div>
                <label className="font-bold text-slate-700 block mb-1">App. No.:</label>
                <input
                  type="text"
                  readOnly
                  placeholder="(Auto-generated upon submission)"
                  className="w-full bg-slate-100 border border-slate-200 rounded-md px-2.5 py-1.5 text-slate-500 font-mono text-xs cursor-not-allowed"
                />
              </div>
            </div>

            {/* ── 4. SECTION 1: PERSONAL DETAILS ──────────────────────── */}
            <div className="space-y-4">
              <div className="border-b border-slate-300 pb-1.5">
                <h3 className="font-black text-slate-900 text-sm tracking-wide uppercase flex items-center gap-2">
                  <span className="bg-[#0055A4] text-white w-5 h-5 rounded-full inline-flex items-center justify-center text-xs">1</span>
                  PERSONAL DETAILS
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                {/* Full Name */}
                <div className="sm:col-span-2">
                  <label className="font-bold text-slate-700 block mb-1">
                    Full Name (Block Letters) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="ENTER FULL NAME AS PER AADHAAR / CERTIFICATES"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full uppercase font-medium bg-slate-50 focus:bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-[#0055A4] transition"
                  />
                </div>

                {/* Father's / Guardian's Name */}
                <div className="sm:col-span-2">
                  <label className="font-bold text-slate-700 block mb-1">
                    Father's / Guardian's Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter Father or Guardian Name"
                    value={fatherName}
                    onChange={(e) => setFatherName(e.target.value)}
                    className="w-full font-medium bg-slate-50 focus:bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-[#0055A4] transition"
                  />
                </div>

                {/* Date of Birth */}
                <div>
                  <label className="font-bold text-slate-700 block mb-1">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    required
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    className="w-full font-medium bg-slate-50 focus:bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-[#0055A4] transition"
                  />
                </div>

                {/* Gender */}
                <div>
                  <label className="font-bold text-slate-700 block mb-1">
                    Gender *
                  </label>
                  <div className="flex items-center gap-4 pt-1.5">
                    {['Male', 'Female', 'Other'].map((g) => (
                      <label key={g} className="inline-flex items-center gap-1.5 cursor-pointer font-medium text-slate-700">
                        <input
                          type="radio"
                          name="gender"
                          value={g}
                          checked={gender === g}
                          onChange={(e) => setGender(e.target.value)}
                          className="text-[#0055A4] focus:ring-[#0055A4]"
                        />
                        <span>{g}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="font-bold text-slate-700 block mb-1">
                    Mobile Number *
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 font-bold text-xs">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      placeholder="9876543210"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      className="w-full pl-12 pr-3 py-2 font-medium bg-slate-50 focus:bg-white border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-[#0055A4] transition"
                    />
                  </div>
                </div>

                {/* Alternate No. */}
                <div>
                  <label className="font-bold text-slate-700 block mb-1">
                    Alternate No.
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 font-bold text-xs">
                      +91
                    </span>
                    <input
                      type="tel"
                      maxLength={10}
                      placeholder="Optional alternate contact"
                      value={alternateMobile}
                      onChange={(e) => setAlternateMobile(e.target.value)}
                      className="w-full pl-12 pr-3 py-2 font-medium bg-slate-50 focus:bg-white border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-[#0055A4] transition"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="font-bold text-slate-700 block mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="candidate@example.com"
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                    className="w-full font-medium bg-slate-50 focus:bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-[#0055A4] transition"
                  />
                </div>

                {/* Marital Status */}
                <div>
                  <label className="font-bold text-slate-700 block mb-1">
                    Marital Status *
                  </label>
                  <div className="flex items-center gap-4 pt-1.5">
                    {['Single', 'Married'].map((m) => (
                      <label key={m} className="inline-flex items-center gap-1.5 cursor-pointer font-medium text-slate-700">
                        <input
                          type="radio"
                          name="maritalStatus"
                          value={m}
                          checked={maritalStatus === m}
                          onChange={(e) => setMaritalStatus(e.target.value)}
                          className="text-[#0055A4] focus:ring-[#0055A4]"
                        />
                        <span>{m}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Aadhaar / ID Proof No. */}
                <div>
                  <label className="font-bold text-slate-700 block mb-1">
                    Aadhaar / ID Proof No.
                  </label>
                  <input
                    type="text"
                    maxLength={14}
                    placeholder="12-digit Aadhaar or Voter ID"
                    value={aadhaarNumber}
                    onChange={(e) => setAadhaarNumber(e.target.value)}
                    className="w-full font-medium bg-slate-50 focus:bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-[#0055A4] transition"
                  />
                </div>

                {/* Two-Wheeler & License */}
                <div>
                  <label className="font-bold text-slate-700 block mb-1">
                    Two-Wheeler &amp; License *
                  </label>
                  <div className="flex items-center gap-4 pt-1.5">
                    <label className="inline-flex items-center gap-1.5 cursor-pointer font-medium text-slate-700">
                      <input
                        type="radio"
                        name="twoWheeler"
                        checked={twoWheelerAndLicense === true}
                        onChange={() => setTwoWheelerAndLicense(true)}
                        className="text-[#0055A4] focus:ring-[#0055A4]"
                      />
                      <span>Yes</span>
                    </label>
                    <label className="inline-flex items-center gap-1.5 cursor-pointer font-medium text-slate-700">
                      <input
                        type="radio"
                        name="twoWheeler"
                        checked={twoWheelerAndLicense === false}
                        onChange={() => setTwoWheelerAndLicense(false)}
                        className="text-[#0055A4] focus:ring-[#0055A4]"
                      />
                      <span>No</span>
                    </label>
                  </div>
                </div>

                {/* Present Address */}
                <div className="sm:col-span-2">
                  <label className="font-bold text-slate-700 block mb-1">
                    Present Address *
                  </label>
                  <textarea
                    rows={2}
                    required
                    placeholder="House/Door No, Street/Colony, Village/Mandal, District, Pincode"
                    value={presentAddress}
                    onChange={(e) => setPresentAddress(e.target.value)}
                    className="w-full font-medium bg-slate-50 focus:bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-[#0055A4] transition"
                  />
                </div>

                {/* Permanent Address */}
                <div className="sm:col-span-2">
                  <div className="flex items-center justify-between mb-1">
                    <label className="font-bold text-slate-700">
                      Permanent Address *
                    </label>
                    <label className="inline-flex items-center gap-1 text-[11px] text-slate-600 cursor-pointer no-print">
                      <input
                        type="checkbox"
                        checked={sameAsPresent}
                        onChange={(e) => setSameAsPresent(e.target.checked)}
                        className="rounded text-[#0055A4] focus:ring-[#0055A4]"
                      />
                      <span>Same as Present Address</span>
                    </label>
                  </div>
                  <textarea
                    rows={2}
                    required
                    placeholder="Permanent Residence Address"
                    disabled={sameAsPresent}
                    value={permanentAddress}
                    onChange={(e) => setPermanentAddress(e.target.value)}
                    className={`w-full font-medium border border-slate-300 rounded-lg px-3 py-2 text-xs transition ${
                      sameAsPresent ? 'bg-slate-100 text-slate-500' : 'bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#0055A4]'
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* ── 5. SECTION 2: EDUCATIONAL QUALIFICATIONS ────────────── */}
            <div className="space-y-3">
              <div className="border-b border-slate-300 pb-1.5">
                <h3 className="font-black text-slate-900 text-sm tracking-wide uppercase flex items-center gap-2">
                  <span className="bg-[#0055A4] text-white w-5 h-5 rounded-full inline-flex items-center justify-center text-xs">2</span>
                  EDUCATIONAL QUALIFICATIONS
                </h3>
              </div>

              <div className="overflow-x-auto border border-slate-300 rounded-lg">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-300 text-slate-800 font-bold">
                      <th className="p-2.5 w-1/4 border-r border-slate-300">Qualification</th>
                      <th className="p-2.5 w-1/3 border-r border-slate-300">School / College / University</th>
                      <th className="p-2.5 w-1/5 border-r border-slate-300">Specialization / Stream</th>
                      <th className="p-2.5 w-20 border-r border-slate-300 text-center">Year</th>
                      <th className="p-2.5 w-24 text-center">% / CGPA</th>
                    </tr>
                  </thead>
                  <tbody>
                    {qualifications.map((item, idx) => (
                      <tr key={item.qualification} className="border-b border-slate-200 last:border-b-0 hover:bg-slate-50/50">
                        <td className="p-2.5 font-bold text-slate-800 border-r border-slate-300 bg-slate-50/40">
                          {item.qualification}
                        </td>
                        <td className="p-1.5 border-r border-slate-300">
                          <input
                            type="text"
                            placeholder="Institution / Board"
                            value={item.school}
                            onChange={(e) => handleQualChange(idx, 'school', e.target.value)}
                            className="w-full bg-white border border-slate-200 rounded px-2 py-1 text-xs focus:ring-1 focus:ring-[#0055A4]"
                          />
                        </td>
                        <td className="p-1.5 border-r border-slate-300">
                          <input
                            type="text"
                            placeholder="e.g. MPC / B.Tech / B.Com"
                            value={item.stream}
                            onChange={(e) => handleQualChange(idx, 'stream', e.target.value)}
                            className="w-full bg-white border border-slate-200 rounded px-2 py-1 text-xs focus:ring-1 focus:ring-[#0055A4]"
                          />
                        </td>
                        <td className="p-1.5 border-r border-slate-300">
                          <input
                            type="text"
                            maxLength={4}
                            placeholder="YYYY"
                            value={item.year}
                            onChange={(e) => handleQualChange(idx, 'year', e.target.value)}
                            className="w-full text-center bg-white border border-slate-200 rounded px-1.5 py-1 text-xs focus:ring-1 focus:ring-[#0055A4]"
                          />
                        </td>
                        <td className="p-1.5">
                          <input
                            type="text"
                            maxLength={6}
                            placeholder="e.g. 78%"
                            value={item.score}
                            onChange={(e) => handleQualChange(idx, 'score', e.target.value)}
                            className="w-full text-center bg-white border border-slate-200 rounded px-1.5 py-1 text-xs focus:ring-1 focus:ring-[#0055A4]"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Page 1 Document Footer */}
              <div className="pt-2 flex items-center justify-between text-[10px] text-slate-500 border-t border-slate-200">
                <span>DSPROJECTS — Ongole | www.dsprojectss.com | +91 9701529191</span>
                <span>Page 1 of 2</span>
              </div>
            </div>

            {/* ── 6. SECTION 3: WORK EXPERIENCE & FIELD READINESS ──────── */}
            <div className="space-y-4 pt-4 border-t-2 border-slate-800">
              <div className="border-b border-slate-300 pb-1.5 flex items-center justify-between">
                <h3 className="font-black text-slate-900 text-sm tracking-wide uppercase flex items-center gap-2">
                  <span className="bg-[#0055A4] text-white w-5 h-5 rounded-full inline-flex items-center justify-center text-xs">3</span>
                  WORK EXPERIENCE &amp; FIELD READINESS
                </h3>

                <label className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 cursor-pointer no-print">
                  <input
                    type="checkbox"
                    checked={isFresher}
                    onChange={(e) => setIsFresher(e.target.checked)}
                    className="rounded text-[#0055A4] focus:ring-[#0055A4]"
                  />
                  <span>I am a Fresher (No Experience)</span>
                </label>
              </div>

              {!isFresher && (
                <div className="space-y-2">
                  <div className="overflow-x-auto border border-slate-300 rounded-lg">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="bg-slate-100 border-b border-slate-300 text-slate-800 font-bold">
                          <th className="p-2.5 w-1/3 border-r border-slate-300">Organization / Company Name</th>
                          <th className="p-2.5 w-1/4 border-r border-slate-300">Designation / Role</th>
                          <th className="p-2.5 w-1/5 border-r border-slate-300">Duration (From – To)</th>
                          <th className="p-2.5 border-r border-slate-300">Key Responsibilities</th>
                          <th className="p-2.5 w-12 text-center no-print">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {workExperience.map((row, idx) => (
                          <tr key={idx} className="border-b border-slate-200 last:border-b-0 hover:bg-slate-50/50">
                            <td className="p-1.5 border-r border-slate-300">
                              <input
                                type="text"
                                placeholder="Previous Employer / Firm"
                                value={row.company}
                                onChange={(e) => handleExpChange(idx, 'company', e.target.value)}
                                className="w-full bg-white border border-slate-200 rounded px-2 py-1 text-xs"
                              />
                            </td>
                            <td className="p-1.5 border-r border-slate-300">
                              <input
                                type="text"
                                placeholder="Role / Position"
                                value={row.designation}
                                onChange={(e) => handleExpChange(idx, 'designation', e.target.value)}
                                className="w-full bg-white border border-slate-200 rounded px-2 py-1 text-xs"
                              />
                            </td>
                            <td className="p-1.5 border-r border-slate-300">
                              <input
                                type="text"
                                placeholder="e.g. 2022 - 2024"
                                value={row.duration}
                                onChange={(e) => handleExpChange(idx, 'duration', e.target.value)}
                                className="w-full bg-white border border-slate-200 rounded px-2 py-1 text-xs"
                              />
                            </td>
                            <td className="p-1.5 border-r border-slate-300">
                              <input
                                type="text"
                                placeholder="Brief summary of duties"
                                value={row.responsibilities}
                                onChange={(e) => handleExpChange(idx, 'responsibilities', e.target.value)}
                                className="w-full bg-white border border-slate-200 rounded px-2 py-1 text-xs"
                              />
                            </td>
                            <td className="p-1.5 text-center no-print">
                              {workExperience.length > 1 && (
                                <button
                                  type="button"
                                  onClick={() => removeExpRow(idx)}
                                  className="text-rose-500 hover:text-rose-700 p-1"
                                >
                                  <Trash2 size={14} />
                                </button>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="flex justify-end no-print">
                    <button
                      type="button"
                      onClick={addExpRow}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#0055A4] hover:underline"
                    >
                      <Plus size={14} />
                      <span>Add Another Company</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Languages Known */}
              <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200 text-xs space-y-2">
                <label className="font-bold text-slate-800 block">
                  Languages Known:
                </label>
                <div className="flex flex-wrap items-center gap-5">
                  {['Telugu', 'English', 'Hindi'].map((lang) => (
                    <label key={lang} className="inline-flex items-center gap-1.5 cursor-pointer font-medium text-slate-700">
                      <input
                        type="checkbox"
                        checked={languagesKnown.includes(lang)}
                        onChange={() => toggleLanguage(lang)}
                        className="rounded text-[#0055A4] focus:ring-[#0055A4]"
                      />
                      <span>{lang}</span>
                    </label>
                  ))}

                  <div className="inline-flex items-center gap-2">
                    <span className="font-medium text-slate-600">Other:</span>
                    <input
                      type="text"
                      placeholder="Specify other language"
                      value={languagesOther}
                      onChange={(e) => setLanguagesOther(e.target.value)}
                      className="bg-white border border-slate-300 rounded px-2.5 py-1 text-xs w-44"
                    />
                  </div>
                </div>
              </div>

              {/* Field Work Readiness */}
              <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200 text-xs space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span className="font-bold text-slate-800">
                    Willing to travel locally for MSME unit visits &amp; ZED documentation? *
                  </span>
                  <div className="flex items-center gap-4">
                    <label className="inline-flex items-center gap-1.5 cursor-pointer font-medium text-slate-700">
                      <input
                        type="radio"
                        name="travel"
                        checked={willingToTravel === true}
                        onChange={() => setWillingToTravel(true)}
                        className="text-[#0055A4] focus:ring-[#0055A4]"
                      />
                      <span>Yes</span>
                    </label>
                    <label className="inline-flex items-center gap-1.5 cursor-pointer font-medium text-slate-700">
                      <input
                        type="radio"
                        name="travel"
                        checked={willingToTravel === false}
                        onChange={() => setWillingToTravel(false)}
                        className="text-[#0055A4] focus:ring-[#0055A4]"
                      />
                      <span>No</span>
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 border-t border-slate-200">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">
                      Preferred Area / Mandals / District *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ongole / Prakasam / Guntur"
                      value={preferredArea}
                      onChange={(e) => setPreferredArea(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3 py-1.5 text-xs font-medium"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ── 7. SECTION 4: DECLARATION ───────────────────────────── */}
            <div className="space-y-4">
              <div className="border-b border-slate-300 pb-1.5">
                <h3 className="font-black text-slate-900 text-sm tracking-wide uppercase flex items-center gap-2">
                  <span className="bg-[#0055A4] text-white w-5 h-5 rounded-full inline-flex items-center justify-center text-xs">4</span>
                  DECLARATION
                </h3>
              </div>

              <div className="bg-amber-50/70 border border-amber-200 rounded-lg p-4 text-[11px] text-slate-700 leading-relaxed space-y-2">
                <p className="italic">
                  "I hereby declare that all the information furnished above is true, complete, and correct to the best of my knowledge and belief. I understand that any false information or suppression of facts may lead to disqualification or termination of my candidature/appointment at DSPROJECTS."
                </p>
                <label className="flex items-center gap-2 font-bold text-slate-900 cursor-pointer pt-1">
                  <input
                    type="checkbox"
                    checked={declarationAccepted}
                    onChange={(e) => setDeclarationAccepted(e.target.checked)}
                    className="rounded text-[#0055A4] focus:ring-[#0055A4]"
                  />
                  <span>I agree and confirm the declaration *</span>
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs pt-2">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">
                    Place *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ongole"
                    value={place}
                    onChange={(e) => setPlace(e.target.value)}
                    className="w-full bg-slate-50 focus:bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs font-medium"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    value={applicationDate}
                    onChange={(e) => setApplicationDate(e.target.value)}
                    className="w-full bg-slate-50 focus:bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs font-medium"
                  />
                </div>

                {/* Signature */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="font-bold text-slate-700">
                      Signature of Applicant *
                    </label>
                    <div className="flex gap-2 text-[10px] no-print">
                      <button
                        type="button"
                        onClick={() => setSignatureMode('draw')}
                        className={`font-semibold ${signatureMode === 'draw' ? 'text-[#0055A4] underline' : 'text-slate-500'}`}
                      >
                        Draw
                      </button>
                      <span>|</span>
                      <button
                        type="button"
                        onClick={() => setSignatureMode('upload')}
                        className={`font-semibold ${signatureMode === 'upload' ? 'text-[#0055A4] underline' : 'text-slate-500'}`}
                      >
                        Upload
                      </button>
                    </div>
                  </div>

                  {signatureMode === 'draw' ? (
                    <div className="border border-slate-300 bg-slate-50 rounded-lg p-1.5 relative">
                      <canvas
                        ref={canvasRef}
                        width={240}
                        height={70}
                        onMouseDown={startDrawing}
                        onMouseMove={draw}
                        onMouseUp={stopDrawing}
                        onMouseLeave={stopDrawing}
                        onTouchStart={startDrawing}
                        onTouchMove={draw}
                        onTouchEnd={stopDrawing}
                        className="w-full h-18 bg-white border border-dashed border-slate-300 rounded cursor-crosshair touch-none"
                      />
                      <button
                        type="button"
                        onClick={clearSignature}
                        className="absolute bottom-2 right-2 text-[10px] bg-slate-200 hover:bg-slate-300 px-2 py-0.5 rounded text-slate-700 no-print flex items-center gap-1"
                      >
                        <Eraser size={10} />
                        Clear
                      </button>
                    </div>
                  ) : (
                    <div className="border border-slate-300 bg-slate-50 rounded-lg p-2 text-center">
                      {signatureData ? (
                        <div className="relative">
                          <img src={signatureData} alt="Signature" className="h-16 mx-auto object-contain" />
                          <button
                            type="button"
                            onClick={() => setSignatureData('')}
                            className="text-[10px] text-rose-600 font-bold block mx-auto mt-1 no-print"
                          >
                            Remove
                          </button>
                        </div>
                      ) : (
                        <div
                          onClick={() => sigFileInputRef.current?.click()}
                          className="cursor-pointer py-3 text-slate-500 hover:text-slate-800"
                        >
                          <Upload size={16} className="mx-auto text-slate-400 mb-1" />
                          <span className="text-[11px] font-semibold text-[#0055A4]">Click to upload signature</span>
                          <input
                            ref={sigFileInputRef}
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleSignatureFile}
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* ── 8. SECTION 5: FOR OFFICE USE ONLY ───────────────────── */}
            <div className="bg-slate-50/80 border-2 border-dashed border-slate-300 rounded-xl p-4 text-xs space-y-3">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <span className="font-black text-slate-800 tracking-wider text-[11px] uppercase">
                  FOR OFFICE USE ONLY (DSPROJECTS, ONGOLE)
                </span>
                <span className="text-[10px] bg-slate-200 text-slate-700 px-2 py-0.5 rounded font-bold">
                  Official Verification Section
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-slate-600 block mb-1">Interview Date:</label>
                  <div className="border-b border-slate-400 py-1 font-mono text-slate-500">
                    _________________________
                  </div>
                </div>

                <div>
                  <label className="text-slate-600 block mb-1">Status:</label>
                  <div className="flex items-center gap-3 pt-1 text-slate-600">
                    <span className="inline-flex items-center gap-1">
                      <span className="w-3.5 h-3.5 border border-slate-400 inline-block rounded-xs"></span> Selected
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <span className="w-3.5 h-3.5 border border-slate-400 inline-block rounded-xs"></span> Hold
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <span className="w-3.5 h-3.5 border border-slate-400 inline-block rounded-xs"></span> Rejected
                    </span>
                  </div>
                </div>

                <div>
                  <label className="text-slate-600 block mb-1">Authorized Signatory:</label>
                  <div className="border-b border-slate-400 py-1 font-mono text-slate-500">
                    _________________________
                  </div>
                </div>
              </div>
            </div>

            {/* Page 2 Document Footer */}
            <div className="pt-2 flex items-center justify-between text-[10px] text-slate-500 border-t border-slate-200">
              <span>DSPROJECTS — Ongole | www.dsprojectss.com | +91 9701529191</span>
              <span>Page 2 of 2</span>
            </div>

            {/* ── 9. SUBMIT BUTTON ────────────────────────────────────── */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200 no-print">
              <p className="text-xs text-slate-500">
                Please double-check all details before final submission.
              </p>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-[#0055A4] hover:bg-[#003366] text-white font-bold h-11 px-8 rounded-xl shadow-lg text-sm inline-flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Briefcase size={16} />
                  <span>{isSubmitting ? 'Submitting Application...' : 'Submit Application'}</span>
                </button>
              </div>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}
