import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  ShieldCheck, 
  TrendingUp, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  HelpCircle, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronDown, 
  ChevronRight, 
  ArrowRight, 
  Calculator, 
  Users, 
  Clock, 
  ExternalLink, 
  Scale, 
  X,
  FileCheck2,
  DollarSign,
  Landmark,
  Briefcase,
  AlertTriangle,
  RotateCcw
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Format Indian Currency (e.g., ₹5,00,000)
function formatINR(val) {
  if (isNaN(val) || val === null || val === undefined) return '₹0';
  const num = Math.round(Number(val));
  return '₹' + num.toLocaleString('en-IN');
}

export default function TReDSFinancing() {
  // Page Title & Meta
  useEffect(() => {
    document.title = 'TReDS & MSME Invoice Financing | DS PROJECTS';
    window.scrollTo(0, 0);
  }, []);

  // ─────────────────────────────────────────────────────────────────────────────
  // WORKFLOW TAB STATE
  // ─────────────────────────────────────────────────────────────────────────────
  const [activeStep, setActiveStep] = useState(1);

  const workflowSteps = [
    {
      step: 1,
      title: 'Supply and Invoice',
      subtitle: 'Delivery of goods/services & billing',
      desc: 'The MSME delivers agreed goods or services to the buyer (corporate, PSU, or government department) and generates a valid, GST-compliant trade invoice.',
      icon: FileText,
      role: 'MSME Seller',
      badge: 'Step 1'
    },
    {
      step: 2,
      title: 'Invoice Acceptance',
      subtitle: 'Counterparty verification',
      desc: 'The invoice details are uploaded to the applicable electronic platform. The buyer reviews, confirms receipt of goods/services, and formally accepts the invoice.',
      icon: CheckCircle2,
      role: 'Buyer (Corporate / PSU)',
      badge: 'Step 2'
    },
    {
      step: 3,
      title: 'Financier Bidding',
      subtitle: 'Transparent electronic auction',
      desc: 'Multiple participating banks and RBI-registered NBFC financiers review the accepted invoice factoring unit and submit competitive discounting bids.',
      icon: Landmark,
      role: 'Participating Financiers',
      badge: 'Step 3'
    },
    {
      step: 4,
      title: 'Offer Selection and Payment',
      subtitle: 'Early liquidity disbursement',
      desc: 'The best competitive bid is accepted per platform rules. The winning financier disburses the early payment directly into the MSME bank account, minus the agreed discounting cost.',
      icon: TrendingUp,
      role: 'Financier ➔ MSME',
      badge: 'Step 4'
    },
    {
      step: 5,
      title: 'Buyer Settlement',
      subtitle: 'Full closure on due date',
      desc: 'On the original invoice due date (e.g., 45, 60, or 90 days), the buyer repays the full invoice face value directly to the financier under agreed transaction terms.',
      icon: ShieldCheck,
      role: 'Buyer ➔ Financier',
      badge: 'Step 5'
    }
  ];

  // ─────────────────────────────────────────────────────────────────────────────
  // CALCULATOR STATE (Section E)
  // ─────────────────────────────────────────────────────────────────────────────
  const [invoiceAmount, setInvoiceAmount] = useState(500000);
  const [creditDays, setCreditDays] = useState(45);
  const [annualRate, setAnnualRate] = useState(8.5);

  const cleanInvoiceAmount = Math.max(0, Number(invoiceAmount) || 0);
  const cleanCreditDays = Math.max(1, Math.min(365, Number(creditDays) || 30));
  const cleanAnnualRate = Math.max(1, Math.min(30, Number(annualRate) || 8.5));

  // Formula: Discounting Cost = (Invoice Amount * Annual Rate * Days) / (365 * 100)
  const calcDiscountCost = Math.round((cleanInvoiceAmount * cleanAnnualRate * cleanCreditDays) / 36500);
  const calcNetProceeds = Math.max(0, cleanInvoiceAmount - calcDiscountCost);
  const costPerLakh = cleanInvoiceAmount > 0 ? Math.round((calcDiscountCost / cleanInvoiceAmount) * 100000) : 0;

  // ─────────────────────────────────────────────────────────────────────────────
  // ELIGIBILITY CHECKLIST STATE (Section I)
  // ─────────────────────────────────────────────────────────────────────────────
  const [checklist, setChecklist] = useState({
    hasUdyam: true,
    goodsDelivered: true,
    invoiceRaised: true,
    buyerAccepted: false,
    buyerEligible: true,
    hasKycDocs: true
  });

  const toggleCheck = (key) => {
    setChecklist(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const checkedCount = Object.values(checklist).filter(Boolean).length;

  const getEligibilityStatus = () => {
    if (checkedCount === 6) {
      return {
        label: 'You may be ready to explore the process.',
        color: 'bg-emerald-50 text-emerald-800 border-emerald-300',
        badge: 'Ready for Platform Evaluation',
        icon: CheckCircle2,
        details: 'Your enterprise has the foundational parameters in place. Next, explore onboarding requirements on operational TReDS exchanges.'
      };
    }
    if (checkedCount >= 4) {
      return {
        label: 'Some information or buyer confirmation may still be needed.',
        color: 'bg-amber-50 text-amber-800 border-amber-300',
        badge: 'Action Items Pending',
        icon: AlertTriangle,
        details: 'Review the unchecked items above—particularly formal buyer acceptance or Udyam documentation—before proceeding.'
      };
    }
    return {
      label: 'Please verify your buyer and platform eligibility first.',
      color: 'bg-slate-50 text-slate-800 border-slate-300',
      badge: 'Preliminary Stage',
      icon: AlertCircle,
      details: 'Ensure your enterprise is registered under MSME/Udyam and your buyers are entities eligible for institutional factoring.'
    };
  };

  const eligibilityResult = getEligibilityStatus();



  // ─────────────────────────────────────────────────────────────────────────────
  // FAQ ACCORDION STATE (Section L - 14 Questions)
  // ─────────────────────────────────────────────────────────────────────────────
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(prev => (prev === idx ? null : idx));
  };

  const faqList = [
    {
      q: 'What does TReDS stand for?',
      a: 'TReDS stands for Trade Receivables Discounting System. It is an electronic institutional mechanism introduced by the Reserve Bank of India (RBI) to facilitate the financing and discounting of trade receivables of Micro, Small, and Medium Enterprises (MSMEs).'
    },
    {
      q: 'How does TReDS work?',
      a: 'Once an MSME supplies goods or services to an eligible buyer, an invoice is raised and uploaded to an authorized electronic platform. The buyer reviews and accepts the invoice. Participating financiers (banks and NBFC factors) then bid competitively in an auction. The accepted bid is settled early to the MSME, and the buyer pays the financier on the invoice due date.'
    },
    {
      q: 'Who can participate as an MSME seller?',
      a: 'Any enterprise classified as Micro, Small, or Medium Enterprise with a valid Udyam Registration Certificate under the MSMED Act, 2006 is eligible to register as a seller, subject to platform KYC and onboarding verification.'
    },
    {
      q: 'Can invoices to government departments or PSUs be considered?',
      a: 'Yes. Central and State Public Sector Undertakings (PSUs), Government Departments, and eligible corporate buyers participate in the TReDS framework under Government of India mandates, provided the specific buyer entity is onboarded on the relevant platform.'
    },
    {
      q: 'Does the buyer need to accept the invoice?',
      a: 'Yes, mandatory buyer acceptance is a foundational pillar of TReDS. Financiers only bid on receivables that have been verified and formally accepted by the counterparty buyer.'
    },
    {
      q: 'Is TReDS the same as a traditional business loan?',
      a: 'No. TReDS is an invoice discounting and factoring mechanism based on trade transactions—not a loan. Unlike conventional collateralized credit, financing is facilitated against accepted receivables without consuming your standard banking borrowing limits.'
    },
    {
      q: 'Does invoice discounting have a cost?',
      a: 'Yes. The early payment disbursed by the winning financier is lower than the invoice face value because an annualized discounting charge (bid rate) and applicable platform transaction fees are deducted from the proceeds.'
    },
    {
      q: 'Is financing guaranteed?',
      a: 'No. Financing is never guaranteed. It depends on factors including valid buyer acceptance, participation and bidding appetite of financiers, buyer credit assessment, and full compliance with platform rules.'
    },
    {
      q: 'What documents may be needed?',
      a: 'Typical requirements include Udyam Registration, Business PAN, GST registration certificate, entity constitution documents, verified bank account details, and the underlying commercial documents (tax invoice, PO, delivery challan/LR).'
    },
    {
      q: 'How long does the process take?',
      a: 'Timelines vary. Initial entity onboarding and KYC verification typically take a few business days. Once an invoice is accepted by the buyer, financier auctions and disbursements can occur within 24 to 48 hours depending on platform operational cycles.'
    },
    {
      q: 'What happens when the buyer pays the financier?',
      a: 'On the maturity date of the invoice (e.g. 45 or 60 days), the buyer settles the full invoice amount directly with the financier through the platform settlement mechanism (NACH/RTGS), concluding the transaction.'
    },
    {
      q: 'Is DS PROJECTS itself a TReDS platform?',
      a: 'No. DS PROJECTS is an informational facilitator and business consultancy assisting MSMEs across Andhra Pradesh with documentation, awareness, and guidance. DS PROJECTS is not a TReDS exchange platform operator, bank, NBFC, or RBI-authorized financial intermediary.'
    },
    {
      q: 'How can I contact DS PROJECTS?',
      a: 'You can reach the DS PROJECTS team by phone at +91 9701529191, via email at projectds11@gmail.com, or visit our office at Guntur Mini Bypass Road, Opposite Royal Oak, Ongole, Andhra Pradesh.'
    },
    {
      q: 'Where can I find official information about TReDS?',
      a: 'The Reserve Bank of India publishes the official regulatory framework and master directions for TReDS. You can consult the official RBI TReDS FAQ at https://www.rbi.org.in/scripts/FAQView.aspx/FAQView.aspx/FAQView.aspx?Id=132.'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800 antialiased selection:bg-[#F59E0B] selection:text-slate-900">

      {/* ───────────────────────────────────────────────────────────────────── */}
      {/* SECTION A: PAGE HEADER & BREADCRUMB */}
      {/* ───────────────────────────────────────────────────────────────────── */}
      <div className="bg-[#003366] text-white border-b-4 border-[#F59E0B] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative z-10">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-blue-200">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} className="text-amber-400" />
            <span className="text-blue-100">Our Projects</span>
            <ChevronRight size={12} className="text-amber-400" />
            <span className="text-amber-400 font-bold">TReDS & MSME Invoice Financing</span>
          </nav>
        </div>
      </div>

      {/* ───────────────────────────────────────────────────────────────────── */}
      {/* SECTION B: HERO SECTION */}
      {/* ───────────────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-[#003366] via-[#004080] to-[#0055A4] text-white py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Headline & Action */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 text-amber-300 border border-amber-400/30 px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest backdrop-blur-xs">
                <ShieldCheck size={14} className="text-amber-400" />
                <span>MSME Working-Capital Information</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
                Unlock Better Cash Flow From Your Business Invoices
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-blue-100 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Understand how TReDS can help eligible MSMEs access early payment against accepted trade invoices through participating financiers.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="#contact-options"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#d98906] text-slate-950 px-7 py-3.5 rounded-lg text-sm font-black uppercase tracking-wider shadow-lg hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-0.5"
                >
                  <span>Contact Our Advisors</span>
                  <ArrowRight size={16} />
                </a>

                <a
                  href="#how-it-works"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-lg text-sm font-bold tracking-wide transition-all cursor-pointer"
                >
                  <Calculator size={16} className="text-amber-300" />
                  <span>How TReDS Works</span>
                </a>
              </div>

              {/* 3 Supporting Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/15 text-left">
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 mt-0.5 text-xs font-black">✓</div>
                  <p className="text-xs text-blue-100 font-semibold leading-snug">Understand invoice discounting mechanism.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 mt-0.5 text-xs font-black">✓</div>
                  <p className="text-xs text-blue-100 font-semibold leading-snug">Learn about eligibility and documentation.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 mt-0.5 text-xs font-black">✓</div>
                  <p className="text-xs text-blue-100 font-semibold leading-snug">Explore next steps for your enterprise.</p>
                </div>
              </div>
            </div>

            {/* Right Column: Tripartite Visual Concept Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl shadow-2xl border-4 border-white/10 p-6 md:p-8 text-slate-800 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-extrabold uppercase tracking-widest text-[#003366]">Institutional Flow</span>
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded">RBI Regulated</span>
                </div>

                {/* Workflow Diagram */}
                <div className="space-y-3.5">
                  <div className="p-3.5 rounded-xl bg-blue-50/80 border border-blue-200 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#003366] text-white flex items-center justify-center font-black text-xs">
                        1
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#003366] uppercase tracking-wider">MSME Seller</p>
                        <p className="text-xs text-slate-600 font-medium">Delivers goods & uploads tax invoice</p>
                      </div>
                    </div>
                    <FileText size={18} className="text-[#0055A4]" />
                  </div>

                  <div className="flex justify-center -my-1 text-slate-400">
                    <ChevronDown size={18} />
                  </div>

                  <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#F59E0B] text-slate-950 flex items-center justify-center font-black text-xs">
                        2
                      </div>
                      <div>
                        <p className="text-xs font-bold text-amber-900 uppercase tracking-wider">Corporate / PSU Buyer</p>
                        <p className="text-xs text-slate-600 font-medium">Verifies and accepts invoice online</p>
                      </div>
                    </div>
                    <Building2 size={18} className="text-[#F59E0B]" />
                  </div>

                  <div className="flex justify-center -my-1 text-slate-400">
                    <ChevronDown size={18} />
                  </div>

                  <div className="p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-black text-xs">
                        3
                      </div>
                      <div>
                        <p className="text-xs font-bold text-emerald-900 uppercase tracking-wider">Multiple Financiers</p>
                        <p className="text-xs text-slate-600 font-medium">Bid in auction & disburse early payment</p>
                      </div>
                    </div>
                    <Landmark size={18} className="text-emerald-600" />
                  </div>
                </div>

                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 text-[11px] text-slate-600 leading-snug">
                  <span className="font-bold text-slate-900">Note: </span>
                  Financing availability, pricing bids, and settlement timelines depend on buyer confirmation and participating financiers on authorized exchanges.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────────── */}
      {/* SECTION C: QUICK EXPLANATION ("What Is TReDS?") */}
      {/* ───────────────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-black text-[#0055A4] uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-sm border-l-4 border-[#0055A4]">
              Conceptual Foundation
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-3 tracking-tight">
              What Is TReDS?
            </h2>
            <div className="w-16 h-1 bg-[#F59E0B] mx-auto mt-3 mb-4 rounded-full" />
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              TReDS stands for <strong className="text-slate-900">Trade Receivables Discounting System</strong>. It is an electronic platform framework regulated by the Reserve Bank of India that enables eligible MSMEs to obtain financing against accepted trade receivables through participating financiers before the invoice payment due date, subject to the applicable process and terms.
            </p>
          </div>

          {/* Comparison Cards: Waiting vs Discounting */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Left: Traditional Waiting */}
            <div className="bg-rose-50/50 rounded-2xl border-2 border-rose-200 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black uppercase tracking-wider text-rose-700 bg-rose-100 px-3 py-1 rounded-full">
                    Conventional Business Cycle
                  </span>
                  <Clock size={20} className="text-rose-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Waiting for Invoice Payment</h3>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <X size={16} className="text-rose-500 shrink-0 mt-0.5" />
                    <span>Working capital remains locked for 30, 60, or 90+ days.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <X size={16} className="text-rose-500 shrink-0 mt-0.5" />
                    <span>Uncertain cashflow planning for raw materials and payroll.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <X size={16} className="text-rose-500 shrink-0 mt-0.5" />
                    <span>Supplier absorbs interest costs on bank overdrafts while waiting.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <X size={16} className="text-rose-500 shrink-0 mt-0.5" />
                    <span>Follow-ups with customer payment desks can take administrative time.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-rose-200 text-xs font-semibold text-rose-800">
                Full face value is paid only upon maturity date (subject to buyer timeliness).
              </div>
            </div>

            {/* Right: TReDS Discounting */}
            <div className="bg-emerald-50/50 rounded-2xl border-2 border-emerald-300 p-6 sm:p-8 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                    Electronic Institutional Factoring
                  </span>
                  <TrendingUp size={20} className="text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Exploring Invoice Discounting</h3>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <Check size={16} className="text-emerald-600 font-bold shrink-0 mt-0.5" />
                    <span>Access early liquidity soon after invoice acceptance by the buyer.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check size={16} className="text-emerald-600 font-bold shrink-0 mt-0.5" />
                    <span>Multiple financiers bid competitively, offering market-driven rates.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check size={16} className="text-emerald-600 font-bold shrink-0 mt-0.5" />
                    <span>TReDS transactions are generally without recourse to the MSME seller under RBI rules.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check size={16} className="text-emerald-600 font-bold shrink-0 mt-0.5" />
                    <span>Transparent digital processing through established electronic exchanges.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-emerald-200 text-xs font-semibold text-emerald-900">
                ⚠️ Early payment is lower than invoice face value because discounting charges apply.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────────── */}
      {/* SECTION D: INTERACTIVE 5-STEP WORKFLOW */}
      {/* ───────────────────────────────────────────────────────────────────── */}
      <section id="how-it-works" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-black text-[#0055A4] uppercase tracking-widest bg-blue-100/60 px-3 py-1 rounded-sm border-l-4 border-[#0055A4]">
              Step-by-Step Procedure
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-3 tracking-tight">
              Interactive TReDS Workflow
            </h2>
            <div className="w-16 h-1 bg-[#F59E0B] mx-auto mt-3 mb-4 rounded-full" />
            <p className="text-base text-slate-600">
              Explore how suppliers, corporate buyers, and financiers interact through the electronic discounting process.
            </p>
          </div>

          {/* Desktop Connected Steps Navigation */}
          <div className="hidden lg:grid grid-cols-5 gap-3 mb-8">
            {workflowSteps.map((s) => {
              const isSelected = activeStep === s.step;
              const Icon = s.icon;
              return (
                <button
                  key={s.step}
                  onClick={() => setActiveStep(s.step)}
                  className={`p-4 rounded-xl text-left border-2 transition-all cursor-pointer ${
                    isSelected 
                      ? 'bg-white border-[#0055A4] shadow-md -translate-y-1' 
                      : 'bg-white/60 border-slate-200 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[11px] font-black uppercase px-2 py-0.5 rounded ${
                      isSelected ? 'bg-[#0055A4] text-white' : 'bg-slate-200 text-slate-700'
                    }`}>
                      {s.badge}
                    </span>
                    <Icon size={16} className={isSelected ? 'text-[#0055A4]' : 'text-slate-400'} />
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 line-clamp-1">{s.title}</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">{s.role}</p>
                </button>
              );
            })}
          </div>

          {/* Active Step Detailed Showcase */}
          {(() => {
            const current = workflowSteps.find(s => s.step === activeStep) || workflowSteps[0];
            const Icon = current.icon;
            return (
              <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-6 sm:p-10 transition-all">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-blue-50 text-[#0055A4] text-xs font-bold px-3 py-1 rounded-full border border-blue-200">
                      <Icon size={14} />
                      <span>{current.badge} of 5: {current.role}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{current.title}</h3>
                    <p className="text-sm font-semibold text-amber-700">{current.subtitle}</p>
                    <p className="text-base text-slate-700 leading-relaxed font-medium">{current.desc}</p>
                  </div>
                  <div className="lg:col-span-4 flex justify-center">
                    <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-3xl bg-gradient-to-tr from-[#003366] to-[#0055A4] text-white flex items-center justify-center shadow-2xl p-6">
                      <Icon className="w-16 h-16 text-amber-300" />
                    </div>
                  </div>
                </div>

                {/* Mobile Stepper Controls */}
                <div className="flex items-center justify-between pt-8 mt-8 border-t border-slate-100 lg:hidden">
                  <button
                    disabled={activeStep === 1}
                    onClick={() => setActiveStep(prev => Math.max(1, prev - 1))}
                    className="px-4 py-2 text-xs font-bold bg-slate-100 hover:bg-slate-200 disabled:opacity-40 rounded-lg"
                  >
                    Previous Step
                  </button>
                  <span className="text-xs font-bold text-slate-500">Step {activeStep} / 5</span>
                  <button
                    disabled={activeStep === 5}
                    onClick={() => setActiveStep(prev => Math.min(5, prev + 1))}
                    className="px-4 py-2 text-xs font-bold bg-[#0055A4] text-white hover:bg-[#004080] disabled:opacity-40 rounded-lg"
                  >
                    Next Step
                  </button>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────────── */}
      {/* SECTION E: INVOICE DISCOUNTING EXAMPLE & INTERACTIVE CALCULATOR */}
      {/* ───────────────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-black text-[#0055A4] uppercase tracking-widest bg-blue-100/60 px-3 py-1 rounded-sm border-l-4 border-[#0055A4]">
              Transparent Illustration
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-3 tracking-tight">
              Invoice Discounting Example & Calculator
            </h2>
            <div className="w-16 h-1 bg-[#F59E0B] mx-auto mt-3 mb-4 rounded-full" />
            <p className="text-base text-slate-600 font-medium">
              See how a typical discounting transaction functions mathematically. Adjust the parameters below to view hypothetical proceeds.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Calculator Controls (Left) */}
            <div className="lg:col-span-6 bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <h3 className="font-extrabold text-slate-900 text-lg flex items-center gap-2">
                  <Calculator size={18} className="text-[#0055A4]" />
                  <span>Interactive Estimator</span>
                </h3>
                <span className="text-[11px] font-bold text-slate-500">Indicative Model</span>
              </div>

              {/* Input 1: Invoice Amount */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                  <label htmlFor="inv-amount">Invoice Face Value (INR)</label>
                  <span className="text-sm font-black text-[#0055A4]">{formatINR(cleanInvoiceAmount)}</span>
                </div>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold">₹</span>
                  <input
                    id="inv-amount"
                    type="number"
                    min="10000"
                    max="100000000"
                    step="50000"
                    value={invoiceAmount}
                    onChange={(e) => setInvoiceAmount(e.target.value)}
                    className="w-full pl-8 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0055A4]"
                  />
                </div>
                <div className="flex gap-2 pt-1 flex-wrap">
                  {[200000, 500000, 1000000, 2500000].map(val => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setInvoiceAmount(val)}
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                        cleanInvoiceAmount === val ? 'bg-[#003366] text-white' : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {formatINR(val)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input 2: Credit Tenor (Days) */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                  <label htmlFor="inv-days">Payment Tenor (Days until due date)</label>
                  <span className="text-sm font-black text-slate-900">{cleanCreditDays} Days</span>
                </div>
                <input
                  id="inv-days"
                  type="range"
                  min="15"
                  max="180"
                  step="5"
                  value={creditDays}
                  onChange={(e) => setCreditDays(e.target.value)}
                  className="w-full accent-[#0055A4] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-semibold">
                  <span>15 Days</span>
                  <span>45 Days</span>
                  <span>90 Days</span>
                  <span>180 Days</span>
                </div>
              </div>

              {/* Input 3: Indicative Annual Rate */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                  <label htmlFor="inv-rate">Assumed Annualised Bidding Rate (% p.a.)</label>
                  <span className="text-sm font-black text-amber-700">{cleanAnnualRate}% p.a.</span>
                </div>
                <input
                  id="inv-rate"
                  type="range"
                  min="6.0"
                  max="16.0"
                  step="0.25"
                  value={annualRate}
                  onChange={(e) => setAnnualRate(e.target.value)}
                  className="w-full accent-[#F59E0B] cursor-pointer"
                />
                <p className="text-[11px] text-slate-500">
                  Rate is annualised and competitively bid by participating financiers. Day-count convention: Actual/365.
                </p>
              </div>
            </div>

            {/* Output Display Card (Right) */}
            <div className="lg:col-span-6 bg-gradient-to-br from-[#003366] to-[#004b91] rounded-2xl text-white p-6 sm:p-8 shadow-xl space-y-6">
              <div>
                <span className="text-xs font-bold text-amber-300 uppercase tracking-widest bg-white/10 px-3 py-1 rounded">
                  Hypothetical Calculation Result
                </span>
                <h3 className="text-2xl font-black text-white mt-2">Estimated Net Payout</h3>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between pb-3 border-b border-white/15">
                  <span className="text-xs text-blue-100 font-medium">Original Invoice Face Value</span>
                  <span className="text-lg font-bold text-white">{formatINR(cleanInvoiceAmount)}</span>
                </div>

                <div className="flex items-center justify-between pb-3 border-b border-white/15">
                  <div>
                    <span className="text-xs text-blue-100 font-medium">Indicative Discounting Cost</span>
                    <p className="text-[10px] text-blue-200">({cleanAnnualRate}% for {cleanCreditDays} days)</p>
                  </div>
                  <span className="text-lg font-bold text-amber-300">− {formatINR(calcDiscountCost)}</span>
                </div>

                <div className="bg-white/10 p-4 rounded-xl border border-white/20 flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-blue-100 font-bold">Estimated Net Early Payout</span>
                    <p className="text-[11px] text-blue-200 font-medium">Disbursed to MSME upon successful bid</p>
                  </div>
                  <span className="text-2xl sm:text-3xl font-black text-emerald-300">{formatINR(calcNetProceeds)}</span>
                </div>

                <div className="p-3 bg-black/20 rounded-lg text-[11px] text-blue-100 space-y-1">
                  <p>• Effective cost: approx. <strong className="text-white">{formatINR(costPerLakh)}</strong> per ₹1,00,000 for {cleanCreditDays} days.</p>
                  <p>• Platform transaction charges, depository fees, and applicable GST may be charged separately by the operating exchange.</p>
                </div>
              </div>

              {/* Strict Regulatory Clarification */}
              <div className="pt-2 text-[11px] text-blue-200/90 leading-snug border-t border-white/15">
                <strong className="text-amber-300">DISCLAIMER: </strong>
                This calculator provides an illustrative mathematical example only. It does not constitute a financing offer, loan approval, interest rate quotation, or promise from DS PROJECTS. Final discount bids and terms are determined solely by participating financiers on licensed TReDS platforms.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────────── */}
      {/* SECTION F: WHO MAY BENEFIT? */}
      {/* ───────────────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-black text-[#0055A4] uppercase tracking-widest bg-blue-100/60 px-3 py-1 rounded-sm border-l-4 border-[#0055A4]">
              Target Enterprises
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-3 tracking-tight">
              Who May Benefit From TReDS?
            </h2>
            <div className="w-16 h-1 bg-[#F59E0B] mx-auto mt-3 mb-4 rounded-full" />
            <p className="text-base text-slate-600">
              Enterprises that supply goods or services on deferred payment terms to corporate or institutional buyers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'MSME Manufacturers',
                desc: 'Industrial units producing components, packaging, engineering goods, or textiles needing liquidity to purchase raw materials for the next production cycle.',
                icon: Building2
              },
              {
                title: 'Suppliers to Large Corporates',
                desc: 'Vendors selling to large private enterprises that mandate 45-day to 90-day credit terms, enabling suppliers to convert receivables into immediate liquidity.',
                icon: Briefcase
              },
              {
                title: 'Service Providers & Contractors',
                desc: 'IT service firms, facility management companies, maintenance contractors, and staffing firms working with eligible corporate counterparties.',
                icon: Users
              },
              {
                title: 'Government & PSU Vendors',
                desc: 'Suppliers billing Central/State Public Sector Undertakings and Government Departments where the buyer entity participates in TReDS frameworks.',
                icon: Landmark
              },
              {
                title: 'Businesses Facing Cashflow Gaps',
                desc: 'Enterprises experiencing temporal working-capital bottlenecks between bill submission and final disbursement from creditworthy clients.',
                icon: TrendingUp
              },
              {
                title: 'Sub-tier Ancillary Units',
                desc: 'Tier-2 and Tier-3 ancillary workshops supplying components to parent original equipment manufacturers (OEMs).',
                icon: ShieldCheck
              }
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0055A4] flex items-center justify-center font-bold">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{card.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">{card.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 leading-relaxed text-center max-w-4xl mx-auto font-medium">
            💡 <strong>Eligibility Note: </strong>
            To participate as a seller, your business must meet applicable MSME criteria and hold a valid Udyam registration. Udyam registration alone does not guarantee that every trade invoice will be accepted by your buyer or bid on by financiers.
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────────── */}
      {/* SECTION G: BENEFITS AND LIMITATIONS (Balanced Two Columns) */}
      {/* ───────────────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-black text-[#0055A4] uppercase tracking-widest bg-blue-100/60 px-3 py-1 rounded-sm border-l-4 border-[#0055A4]">
              Balanced Perspective
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-3 tracking-tight">
              Benefits and Limitations
            </h2>
            <div className="w-16 h-1 bg-[#F59E0B] mx-auto mt-3 mb-4 rounded-full" />
            <p className="text-base text-slate-600 font-medium">
              We believe in total transparency. Review both the potential advantages and critical operational considerations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Column 1: Potential Benefits */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-200">
                <CheckCircle2 size={20} className="text-emerald-600" />
                <h3 className="font-extrabold text-slate-900 text-lg">Potential Advantages</h3>
              </div>
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold">✓</div>
                  <span><strong>Earlier Access to Proceeds: </strong>Reduces working capital dependence by converting accepted invoices into liquidity.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold">✓</div>
                  <span><strong>Competitive Financier Bidding: </strong>Multiple participating banks and NBFCs bid in an electronic auction, promoting rate transparency.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold">✓</div>
                  <span><strong>Without Recourse to MSME: </strong>Under RBI guidelines, the financing is generally non-recourse to the seller once accepted and settled.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold">✓</div>
                  <span><strong>Preserves Regular Bank Limits: </strong>Factoring receivables does not typically restrict your existing bank credit or collateral limits.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold">✓</div>
                  <span><strong>Paperless Digital Processing: </strong>Electronic invoice verification, auction bidding, and automated settlement.</span>
                </li>
              </ul>
            </div>

            {/* Column 2: Important Considerations */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-200">
                <AlertCircle size={20} className="text-amber-600" />
                <h3 className="font-extrabold text-slate-900 text-lg">Important Considerations & Limitations</h3>
              </div>
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5 font-bold">!</div>
                  <span><strong>Buyer Acceptance Mandatory: </strong>Invoices cannot be discounted without the buyer's formal online acceptance.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5 font-bold">!</div>
                  <span><strong>Discounting Costs Apply: </strong>Financier bidding charges and platform fees reduce the final net proceeds received by the MSME.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5 font-bold">!</div>
                  <span><strong>No Financing Guarantee: </strong>Financiers are not obligated to bid; interest rates and offers depend on buyer credit profiles.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5 font-bold">!</div>
                  <span><strong>Platform Onboarding Needed: </strong>Both seller and buyer must complete platform registration, KYC, and mandate setup.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5 font-bold">!</div>
                  <span><strong>Documentation Compliance: </strong>Invoices must match underlying purchase orders, delivery receipts, and GST returns.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────────── */}
      {/* SECTION H: DOCUMENTS AND PREPARATION */}
      {/* ───────────────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-black text-[#0055A4] uppercase tracking-widest bg-blue-100/60 px-3 py-1 rounded-sm border-l-4 border-[#0055A4]">
              Preparation Checklist
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-3 tracking-tight">
              Documents and Preparation
            </h2>
            <div className="w-16 h-1 bg-[#F59E0B] mx-auto mt-3 mb-4 rounded-full" />
            <p className="text-base text-slate-600">
              Gathering these typical documents in advance helps streamline onboarding and invoice verification.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: 'Udyam Certificate',
                desc: 'Valid MSME Udyam Registration Certificate establishing enterprise status (Micro, Small, or Medium).',
                icon: FileCheck2
              },
              {
                title: 'Entity KYC & PAN',
                desc: 'Business PAN card, GST registration certificate, and authorized signatory identification documents.',
                icon: ShieldCheck
              },
              {
                title: 'Constitution Records',
                desc: 'Partnership Deed, MOA & AOA with Certificate of Incorporation, or Proprietorship declarations as applicable.',
                icon: Building2
              },
              {
                title: 'Bank Verification',
                desc: 'Bank account verification (cancelled cheque or recent bank statement) for disbursement mandates.',
                icon: Landmark
              },
              {
                title: 'Tax Invoice Copy',
                desc: 'Valid, GST-compliant tax invoice detailing supplied items, quantities, value, and due dates.',
                icon: FileText
              },
              {
                title: 'Purchase Order (PO)',
                desc: 'Official Purchase Order, Work Order, or Agreement copy issued by the corporate or PSU buyer.',
                icon: Briefcase
              },
              {
                title: 'Proof of Delivery',
                desc: 'Goods Receipt Note (GRN), E-Way bill, Lorry Receipt (LR), or signed work completion certificate.',
                icon: CheckCircle2
              },
              {
                title: 'Buyer Master Details',
                desc: 'Corporate buyer name, GSTIN, PAN, and point-of-contact details for invoice matching.',
                icon: Users
              }
            ].map((doc, idx) => {
              const Icon = doc.icon;
              return (
                <div key={idx} className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs space-y-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0055A4] flex items-center justify-center font-bold">
                    <Icon size={16} />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">{doc.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">{doc.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 bg-blue-50/70 border border-blue-200 rounded-xl p-4 text-xs text-blue-900 max-w-4xl mx-auto flex items-start gap-3">
            <Lock size={16} className="text-[#0055A4] shrink-0 mt-0.5" />
            <p className="font-medium">
              <strong>Data Privacy & Security: </strong>
              Exact documentation requirements depend on the chosen operational TReDS exchange. DS PROJECTS does not collect sensitive personal passwords, Aadhaar biometric records, or full financial credentials through public web forms.
            </p>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────────── */}
      {/* SECTION I: ELIGIBILITY SELF-CHECK (Client-Side Interactive) */}
      {/* ───────────────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-black text-[#0055A4] uppercase tracking-widest bg-blue-100/60 px-3 py-1 rounded-sm border-l-4 border-[#0055A4]">
              Pre-Screening Tool
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-3 tracking-tight">
              Interactive Eligibility Self-Check
            </h2>
            <div className="w-16 h-1 bg-[#F59E0B] mx-auto mt-3 mb-4 rounded-full" />
            <p className="text-base text-slate-600">
              Check the preliminary criteria below to determine whether your trade transaction aligns with the TReDS institutional framework.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
            
            {/* Checklist items */}
            <div className="space-y-3.5">
              {[
                { key: 'hasUdyam', label: 'Does your business have a valid MSME / Udyam registration?' },
                { key: 'goodsDelivered', label: 'Have you supplied goods or services to your buyer?' },
                { key: 'invoiceRaised', label: 'Have you raised a valid tax invoice for that supply?' },
                { key: 'buyerAccepted', label: 'Has the buyer accepted or confirmed the invoice through the applicable process?' },
                { key: 'buyerEligible', label: 'Is the buyer a Corporate, PSU, or Government entity eligible to participate in TReDS?' },
                { key: 'hasKycDocs', label: 'Can your enterprise provide standard business KYC and bank account records?' }
              ].map((item) => (
                <label
                  key={item.key}
                  className="p-4 rounded-xl bg-white border border-slate-200/80 flex items-center justify-between gap-4 cursor-pointer hover:border-slate-300 transition-colors"
                >
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">{item.label}</span>
                  <input
                    type="checkbox"
                    checked={checklist[item.key]}
                    onChange={() => toggleCheck(item.key)}
                    className="w-5 h-5 rounded text-[#0055A4] focus:ring-[#0055A4] cursor-pointer shrink-0"
                  />
                </label>
              ))}
            </div>

            {/* Dynamic Result Display */}
            <div className={`p-5 rounded-2xl border-2 transition-all ${eligibilityResult.color}`}>
              <div className="flex items-center gap-2 mb-2">
                <eligibilityResult.icon size={20} />
                <span className="text-xs font-black uppercase tracking-wider">{eligibilityResult.badge} ({checkedCount}/6)</span>
              </div>
              <h4 className="text-base sm:text-lg font-black">{eligibilityResult.label}</h4>
              <p className="text-xs sm:text-sm mt-1 leading-relaxed opacity-90">{eligibilityResult.details}</p>
            </div>

            {/* Mandatory Disclaimer */}
            <p className="text-[11px] text-slate-500 leading-snug">
              ⚠️ <strong>Disclaimer: </strong>
              This interactive checklist is for preliminary guidance only. It is not an eligibility decision, formal credit assessment, or financing approval. Actual onboarding and financing decisions rest with authorized platform operators and participating financiers.
            </p>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────────── */}
      {/* DIRECT CONTACT & OFFICE LOCATIONS */}
      {/* ───────────────────────────────────────────────────────────────────── */}
      <section id="contact-options" className="py-16 md:py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Direct Contact & Office Locations
            </h2>
            <div className="w-16 h-1 bg-[#F59E0B] mx-auto mt-2.5 mb-3 rounded-full" />
            <p className="text-sm sm:text-base text-slate-600 font-medium">
              Connect with our MSME advisory desk for one-on-one assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Phone */}
            <a
              href="tel:+919701529191"
              className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all text-center space-y-3 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0055A4] flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <Phone size={22} />
              </div>
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">Call Us Directly</h4>
              <p className="text-lg font-black text-slate-900 tracking-tight group-hover:text-[#0055A4] transition-colors">
                +91 9701529191
              </p>
              <p className="text-xs text-slate-500 font-medium">Monday – Saturday, 9:00 AM – 6:00 PM</p>
            </a>

            {/* Email */}
            <a
              href="mailto:projectds11@gmail.com"
              className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all text-center space-y-3 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <Mail size={22} />
              </div>
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">Email Enquiries</h4>
              <p className="text-base font-bold text-slate-900 group-hover:text-[#0055A4] transition-colors truncate">
                projectds11@gmail.com
              </p>
              <p className="text-xs text-slate-500 font-medium">Responses within 1 business day</p>
            </a>

            {/* Address */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                <MapPin size={22} />
              </div>
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">Office Address</h4>
              <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                Guntur Mini Bypass Road, Opposite Royal Oak, Ongole, Andhra Pradesh
              </p>
              <div className="inline-block bg-slate-100 text-slate-700 text-[10px] font-mono font-bold px-2.5 py-0.5 rounded border border-slate-200">
                UDYAM-AP-13-0077732
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────────── */}
      {/* SECTION L: FAQ ACCORDION (14 Comprehensive Questions) */}
      {/* ───────────────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-black text-[#0055A4] uppercase tracking-widest bg-blue-100/60 px-3 py-1 rounded-sm border-l-4 border-[#0055A4]">
              Common Queries
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-3 tracking-tight">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-1 bg-[#F59E0B] mx-auto mt-3 mb-4 rounded-full" />
            <p className="text-base text-slate-600 font-medium">
              Detailed answers regarding TReDS regulations, operational steps, costs, and role disclosures.
            </p>
          </div>

          <div className="space-y-3">
            {faqList.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/80 overflow-hidden bg-white transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:bg-slate-50/80 transition-colors cursor-pointer text-sm sm:text-base"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`text-[#0055A4] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium border-t border-slate-100 bg-slate-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Official RBI FAQ Link Box */}
          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left text-xs text-blue-950 font-medium">
              <strong>Official Regulatory Guidance: </strong>
              For formal statutory definitions, read the Reserve Bank of India (RBI) Master Directions and FAQ on TReDS.
            </div>
            <a
              href="https://www.rbi.org.in/scripts/FAQView.aspx/FAQView.aspx/FAQView.aspx?Id=132"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#003366] hover:text-[#0055A4] bg-white px-3.5 py-2 rounded-lg border border-blue-200 shrink-0 shadow-2xs cursor-pointer"
            >
              <span>Visit RBI TReDS FAQ</span>
              <ExternalLink size={13} />
            </a>
          </div>

        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────────── */}
      {/* SECTION M: FINAL CALL TO ACTION */}
      {/* ───────────────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#003366] to-[#0055A4] text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-block bg-[#F59E0B] text-slate-950 px-3.5 py-1 rounded-sm text-xs font-black uppercase tracking-widest">
            Empower Your Cash Flow
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Understand Your Invoice Financing Options
          </h2>
          <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto font-medium">
            Learn about the requirements, costs, and process before deciding whether invoice discounting is suitable for your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="#contact-options"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#d98906] text-slate-950 px-8 py-4 rounded-xl text-sm font-black uppercase tracking-wider shadow-xl transition-all cursor-pointer"
            >
              <span>Contact DS PROJECTS</span>
              <ArrowRight size={16} />
            </a>
            <a
              href="tel:+919701529191"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl text-sm font-bold tracking-wide transition-all cursor-pointer"
            >
              <Phone size={16} className="text-amber-300" />
              <span>Call DS PROJECTS (+91 9701529191)</span>
            </a>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────────── */}
      {/* SECTION N: FOOTER & COMPREHENSIVE DISCLOSURES */}
      {/* ───────────────────────────────────────────────────────────────────── */}
      <section className="bg-slate-900 text-slate-300 py-10 border-t border-slate-800 text-xs leading-relaxed">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700/80 space-y-2">
            <p className="font-bold text-amber-400 uppercase tracking-wider text-[11px]">
              Regulatory Disclosure & Disclaimer:
            </p>
            <p className="text-slate-300 font-medium">
              This page is intended for general educational and enquiry purposes only. DS PROJECTS does not guarantee financing, approval, pricing, savings, or payment timelines. Availability, eligibility, discounting costs, documentation, and transaction terms are determined solely by the relevant operating TReDS platform and participating financiers.
            </p>
            <p className="text-slate-400">
              DS PROJECTS is a business facilitation, project advisory, and enquiry contact. DS PROJECTS is not a TReDS exchange platform operator, bank, NBFC, lender, financier, or RBI-authorised intermediary. Any description of DS PROJECTS services reflects its verified business activities and Udyam facilitation status (UDYAM-AP-13-0077732).
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800 gap-2">
            <p>© 2026 DS PROJECTS. All Rights Reserved.</p>
            <div className="flex items-center gap-4">
              <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
              <span>•</span>
              <a href="https://www.rbi.org.in/scripts/FAQView.aspx/FAQView.aspx/FAQView.aspx?Id=132" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">RBI TReDS Portal</a>
              <span>•</span>
              <Link to="/about" className="hover:text-white transition-colors">About Enterprise</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
