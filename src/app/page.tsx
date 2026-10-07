"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, CheckCircle2, Eye, ShieldCheck, Clock, HeartHandshake, 
  MapPin, Stethoscope, Users, Baby, ChevronDown
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <TrustBar />
      <SquintSection />
      <TreatmentsSection />
      <DoctorProfile />
      <WhyChooseUs />
      <BookingSection />
      <FAQSection />
    </div>
  );
}

function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [squintState, setSquintState] = useState("normal");
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    // Natural blinking
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150);
    }, 4000);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(blinkInterval);
    };
  }, []);

  // Max natural eye tracking movement
  const trackLimit = 8;
  const baseTrackX = mousePos.x * trackLimit;
  const baseTrackY = mousePos.y * trackLimit;

  // Squint deviation for the right eye (anatomical left)
  const getSquintOffset = () => {
    const dev = 16;
    switch(squintState) {
      case "inward": return { x: -dev, y: 0, term: "Esotropia" };
      case "outward": return { x: dev, y: 0, term: "Exotropia" };
      case "upward": return { x: 0, y: -dev, term: "Hypertropia" };
      case "downward": return { x: 0, y: dev, term: "Hypotropia" };
      default: return { x: 0, y: 0, term: "Normal Alignment" };
    }
  };

  const squintOffset = getSquintOffset();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fcfd] to-[#e6f4f8] pt-20 pb-20 lg:pt-28 lg:pb-32">
      {/* Background Parallax Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ x: mousePos.x * -20, y: mousePos.y * -20 }}
          className="absolute top-20 right-[10%] w-64 h-64 bg-cyan-200/20 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ x: mousePos.x * -10, y: mousePos.y * -10 }}
          className="absolute bottom-20 left-[5%] w-80 h-80 bg-blue-200/20 rounded-full blur-3xl" 
        />
        
        {/* Subtle Child-friendly shapes */}
        <motion.svg animate={{ x: mousePos.x * -30, y: mousePos.y * -30 }} className="absolute top-32 left-[15%] w-8 h-8 text-yellow-300 opacity-60" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </motion.svg>
        <motion.div animate={{ x: mousePos.x * 20, y: mousePos.y * 20 }} className="absolute bottom-40 right-[20%] w-6 h-6 rounded-full bg-coral-400 opacity-40 border-2 border-coral-300" style={{ backgroundColor: '#fb7185', borderColor: '#f43f5e' }}></motion.div>
        <motion.div animate={{ x: mousePos.x * -15, y: mousePos.y * -15 }} className="absolute top-1/2 right-[5%] w-10 h-10 rounded-lg bg-mint-200 opacity-50 rotate-12" style={{ backgroundColor: '#a7f3d0' }}></motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-5/12 flex flex-col justify-center text-center lg:text-left z-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-cyan-100 text-cyan-700 font-bold text-sm mb-6 shadow-sm self-center lg:self-start">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-pulse"></span>
              Paediatric Eye & Squint Care
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 text-slate-900 tracking-tight">
              Helping Little Eyes <br/>
              <span className="relative inline-block text-cyan-600 mt-2">
                Find Their Focus.
                <motion.span 
                  initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                  className="absolute -bottom-2 left-0 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
                ></motion.span>
              </span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
              Specialised eye care for children with squint, lazy eye and eye-alignment concerns — with gentle, personalised evaluation and expert guidance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://wa.me/919876543210?text=Hello,%20I%20would%20like%20to%20book%20my%20child's%20eye%20check."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 hover:bg-cyan-700 text-white rounded-full font-bold transition-all shadow-xl shadow-cyan-900/20 hover:-translate-y-1 hover:shadow-2xl group"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM11.99 22.02h-.006c-1.644 0-3.25-.44-4.664-1.272l-.334-.198-3.468.91 1.05-3.32-.218-.346c-.914-1.45-1.398-3.136-1.398-4.887 0-5.023 4.092-9.115 9.123-9.115 2.436 0 4.726.949 6.446 2.67A9.066 9.066 0 0121.11 12.9c0 5.024-4.092 9.117-9.12 9.117v.003zm0-19.957c-5.976 0-10.835 4.86-10.835 10.838 0 1.912.499 3.778 1.448 5.422L1.136 23.5l5.289-1.386c1.58.868 3.393 1.326 5.253 1.326h.005c5.977 0 10.836-4.86 10.836-10.84 0-2.898-1.127-5.621-3.176-7.671-2.048-2.05-4.77-3.181-7.669-3.181z"/></svg>
                Book Your Child's Eye Check
              </a>
              <a
                href="#squint"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/50 hover:bg-white text-cyan-800 border border-cyan-200 rounded-full font-bold transition-all backdrop-blur-sm shadow-sm"
              >
                Explore Squint Types
              </a>
            </div>
          </motion.div>

          {/* Right Visual & Trust Content */}
          <div className="w-full lg:w-7/12 relative h-[500px] lg:h-[600px] flex items-center justify-center z-10">
            
            {/* The Main 3D/SVG Interactive Eyes */}
            <div className="relative z-20 flex flex-col items-center">
              
              {/* Rotating Focus Rings Behind Eyes */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 m-auto w-[120%] h-[120%] rounded-full border border-cyan-300/30 border-dashed -z-10"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 m-auto w-[140%] h-[140%] rounded-full border-2 border-blue-200/20 -z-10"
              />

              {/* Eyes Container */}
              <div className="flex gap-8 md:gap-12 bg-white/40 p-10 rounded-[3rem] backdrop-blur-md border border-white/60 shadow-2xl shadow-cyan-900/5 mb-8 transform-gpu perspective-1000">
                {/* Left Eye */}
                <div className="relative w-28 h-28 md:w-36 md:h-36 bg-white rounded-full shadow-[inset_0_-8px_15px_rgba(0,0,0,0.05),0_10px_25px_rgba(0,0,0,0.05)] flex items-center justify-center overflow-hidden border-2 border-slate-100">
                  <motion.div 
                    animate={{ 
                      x: baseTrackX, 
                      y: baseTrackY,
                      scaleY: isBlinking ? 0.1 : 1 
                    }}
                    transition={{ type: "spring", stiffness: 150, damping: 15 }}
                    className="w-16 h-16 md:w-20 md:h-20 bg-slate-800 rounded-full flex items-center justify-center relative"
                  >
                    <div className="absolute inset-0 rounded-full border-4 border-cyan-600 bg-[radial-gradient(circle_at_30%_30%,#0ea5e9,#0369a1)]"></div>
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-slate-900 rounded-full relative z-10"></div>
                    <div className="absolute top-3 left-3 w-4 h-4 md:w-5 md:h-5 bg-white rounded-full z-20 opacity-90 shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
                    <div className="absolute bottom-4 right-4 w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full z-20 opacity-60"></div>
                  </motion.div>
                </div>

                {/* Right Eye (Can deviate based on squint selector) */}
                <div className="relative w-28 h-28 md:w-36 md:h-36 bg-white rounded-full shadow-[inset_0_-8px_15px_rgba(0,0,0,0.05),0_10px_25px_rgba(0,0,0,0.05)] flex items-center justify-center overflow-hidden border-2 border-slate-100">
                  <motion.div 
                    animate={{ 
                      x: baseTrackX + squintOffset.x, 
                      y: baseTrackY + squintOffset.y,
                      scaleY: isBlinking ? 0.1 : 1
                    }}
                    transition={{ type: "spring", stiffness: 150, damping: 15 }}
                    className="w-16 h-16 md:w-20 md:h-20 bg-slate-800 rounded-full flex items-center justify-center relative"
                  >
                    <div className="absolute inset-0 rounded-full border-4 border-cyan-600 bg-[radial-gradient(circle_at_30%_30%,#0ea5e9,#0369a1)]"></div>
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-slate-900 rounded-full relative z-10"></div>
                    <div className="absolute top-3 left-3 w-4 h-4 md:w-5 md:h-5 bg-white rounded-full z-20 opacity-90 shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
                    <div className="absolute bottom-4 right-4 w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full z-20 opacity-60"></div>
                  </motion.div>
                </div>
              </div>

              {/* Squint Selector */}
              <div className="bg-white/80 backdrop-blur-xl p-4 rounded-2xl shadow-lg border border-white flex flex-col items-center">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">See How Squint Can Look</p>
                <div className="flex flex-wrap justify-center gap-2 mb-3">
                  {["normal", "inward", "outward", "upward", "downward"].map((type) => (
                    <button
                      key={type}
                      onClick={() => setSquintState(type)}
                      className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                        squintState === type 
                          ? 'bg-cyan-600 text-white shadow-md' 
                          : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                      }`}
                    >
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                  ))}
                </div>
                <div className="text-sm font-bold text-cyan-800 bg-cyan-50 px-4 py-1.5 rounded-full">
                  {squintOffset.term}
                </div>
                <p className="text-[9px] text-slate-400 mt-3 text-center max-w-[250px]">
                  *Interactive illustration for education only. Diagnosis requires examination by an eye specialist.
                </p>
              </div>
            </div>

            {/* Floating Trust Elements */}
            <motion.div 
              whileHover={{ y: -5, scale: 1.02 }}
              className="absolute top-0 right-0 md:-right-10 z-30 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-white flex items-center gap-3 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden border-2 border-cyan-100">
                <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=150&auto=format&fit=crop" alt="Doctor" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Dr. [Doctor Name]</p>
                <p className="text-xs text-slate-500 font-medium">Paediatric Squint Specialist</p>
                <p className="text-[10px] text-cyan-600 font-bold mt-0.5 flex items-center">Meet Your Doctor <ArrowRight size={10} className="ml-1" /></p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5, scale: 1.02 }}
              className="absolute bottom-0 left-0 md:-left-10 z-30 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white max-w-[220px] cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center mb-2">
                <Baby size={16} />
              </div>
              <p className="text-xs font-bold text-slate-800 mb-1 leading-tight">Noticed your child's eye turning inward or outward?</p>
              <p className="text-[10px] text-slate-500 mb-2 leading-tight">Early specialist evaluation can help understand the cause.</p>
              <p className="text-[10px] text-cyan-600 font-bold flex items-center">Talk to the Doctor <ArrowRight size={10} className="ml-1" /></p>
            </motion.div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { text: "Squint Specialist", icon: Eye },
    { text: "Advanced Eye Evaluation", icon: ShieldCheck },
    { text: "Child & Adult Care", icon: Baby },
    { text: "Personalised Consultation", icon: HeartHandshake },
  ];

  return (
    <div className="bg-slate-900 py-6 border-y border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-3 text-slate-200">
              <CheckCircle2 className="text-cyan-400" size={20} />
              <span className="font-medium text-sm md:text-base">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SquintSection() {
  const [squintType, setSquintType] = useState("esotropia");
  const [affectedEye, setAffectedEye] = useState("right");
  const [patientType, setPatientType] = useState("child");
  const [severity, setSeverity] = useState(70); // 0 = normal, 100 = full deviation

  // Calculate eye deviations
  const getDeviation = (isRightEye: boolean) => {
    // If this eye is not the affected one (and it's not alternating), deviation is 0
    if (affectedEye !== "alternating" && (isRightEye ? affectedEye !== "right" : affectedEye !== "left")) {
      return { x: 0, y: 0 };
    }

    // Determine max deviation distance based on type
    const maxDev = 16;
    const factor = severity / 100;
    
    let devX = 0;
    let devY = 0;

    switch(squintType) {
      case "esotropia": // Inward
        devX = isRightEye ? -maxDev * factor : maxDev * factor;
        break;
      case "exotropia": // Outward
        devX = isRightEye ? maxDev * factor : -maxDev * factor;
        break;
      case "hypertropia": // Upward
        devY = -maxDev * factor;
        break;
      case "hypotropia": // Downward
        devY = maxDev * factor;
        break;
      case "normal":
      default:
        devX = 0;
        devY = 0;
    }
    return { x: devX, y: devY };
  };

  const leftDev = getDeviation(false);
  const rightDev = getDeviation(true);

  // Dynamic Content logic
  const getExplanation = () => {
    switch(squintType) {
      case "esotropia":
        return {
          title: "Esotropia (Inward Turn)",
          meaning: "One or both eyes turn inward towards the nose.",
          signs: "Noticeable crossed eyes, closing one eye in bright sunlight, tilting head.",
          context: patientType === "child" ? "Common in infants and young children. Often associated with significant farsightedness." : "In adults, can be a childhood condition that has returned or due to new medical issues.",
        };
      case "exotropia":
        return {
          title: "Exotropia (Outward Turn)",
          meaning: "One or both eyes turn outward away from the nose.",
          signs: "Eye drifting outward, especially when tired, daydreaming or looking in the distance.",
          context: patientType === "child" ? "Often becomes noticeable between ages 1 and 4. May happen intermittently at first." : "Can happen in adults if vision in one eye is poor or due to weakened eye muscles over time.",
        };
      case "hypertropia":
        return {
          title: "Hypertropia (Upward Turn)",
          meaning: "The affected eye turns upwards relative to the normal eye.",
          signs: "Vertical misalignment, head tilting to compensate, double vision.",
          context: patientType === "child" ? "Often present from birth due to abnormal muscle development or nerve issues." : "In adults, often causes sudden double vision and may require urgent evaluation.",
        };
      case "hypotropia":
        return {
          title: "Hypotropia (Downward Turn)",
          meaning: "The affected eye turns downwards relative to the normal eye.",
          signs: "Vertical misalignment, chin elevation to compensate.",
          context: patientType === "child" ? "Less common; can be due to restrictive muscle issues (like Duane syndrome) or trauma." : "Can occur in adults following trauma or conditions like thyroid eye disease.",
        };
      default:
        return {
          title: "Normal Alignment",
          meaning: "Both eyes are perfectly aligned and focus on the same target.",
          signs: "Clear, single binocular vision with good depth perception.",
          context: "Regular eye exams are still important to ensure vision remains healthy.",
        };
    }
  };

  const expl = getExplanation();

  return (
    <section id="squint" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-cyan-600 font-bold tracking-wider text-sm mb-3 uppercase">Interactive Educational Tool</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Understand Different Types of Squint</h2>
          <p className="text-slate-600 text-sm md:text-base">
            This interactive illustration is for education only and is not a diagnostic test. Squint type and severity require examination by an eye specialist.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Visualizer Column */}
          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-200 flex flex-col items-center">
            
            <div className="flex items-center gap-4 mb-10 w-full justify-between px-4">
              <span className="text-sm font-semibold text-slate-700">Before (Normal)</span>
              <input 
                type="range" 
                min="0" max="100" 
                value={severity} 
                onChange={(e) => setSeverity(Number(e.target.value))}
                className="flex-1 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-cyan-600 mx-4"
              />
              <span className="text-sm font-semibold text-cyan-700">Deviation</span>
            </div>

            {/* The SVG Eyes */}
            <div className="relative w-full aspect-[2/1] max-w-md flex justify-center items-center bg-slate-50 rounded-2xl border border-slate-100 shadow-inner overflow-hidden">
              
              {/* Fixation Target & Guidelines */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.5)] z-0 flex items-center justify-center">
                <div className="w-1 h-1 bg-white rounded-full"></div>
              </div>
              
              {/* SVG Guide Lines to simulate visual axis */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ opacity: 0.3 }}>
                {/* Left Eye Line */}
                <line 
                  x1="30%" y1="50%" 
                  x2={`calc(50% - ${-leftDev.x * 2}px)`} 
                  y2={`calc(16px - ${-leftDev.y * 2}px)`} 
                  stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4 4" 
                />
                {/* Right Eye Line */}
                <line 
                  x1="70%" y1="50%" 
                  x2={`calc(50% - ${-rightDev.x * 2}px)`} 
                  y2={`calc(16px - ${-rightDev.y * 2}px)`} 
                  stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4 4" 
                />
              </svg>

              <div className="flex gap-6 z-10">
                {/* Left Eye */}
                <div className="relative">
                  <p className="absolute -top-8 w-full text-center text-xs font-bold text-slate-400 tracking-widest">RIGHT EYE</p>
                  <svg width="120" height="70" viewBox="0 0 120 70">
                    {/* Sclera */}
                    <path d="M10,35 Q60,5 110,35 Q60,65 10,35" fill="white" stroke="#e2e8f0" strokeWidth="2" />
                    {/* Iris & Pupil Container - Translated */}
                    <g transform={`translate(${leftDev.x}, ${leftDev.y})`}>
                      <circle cx="60" cy="35" r="22" fill="#0ea5e9" />
                      <circle cx="60" cy="35" r="18" fill="#0284c7" />
                      <circle cx="60" cy="35" r="8" fill="#0f172a" />
                      <circle cx="56" cy="31" r="3" fill="white" opacity="0.8" />
                    </g>
                    {/* Inner Shadow / Eyelid overlap */}
                    <path d="M10,35 Q60,5 110,35" fill="none" stroke="#cbd5e1" strokeWidth="3" />
                  </svg>
                </div>
                
                {/* Right Eye (Anatomical Left) */}
                <div className="relative">
                  <p className="absolute -top-8 w-full text-center text-xs font-bold text-slate-400 tracking-widest">LEFT EYE</p>
                  <svg width="120" height="70" viewBox="0 0 120 70">
                    <path d="M10,35 Q60,5 110,35 Q60,65 10,35" fill="white" stroke="#e2e8f0" strokeWidth="2" />
                    <g transform={`translate(${rightDev.x}, ${rightDev.y})`}>
                      <circle cx="60" cy="35" r="22" fill="#0ea5e9" />
                      <circle cx="60" cy="35" r="18" fill="#0284c7" />
                      <circle cx="60" cy="35" r="8" fill="#0f172a" />
                      <circle cx="56" cy="31" r="3" fill="white" opacity="0.8" />
                    </g>
                    <path d="M10,35 Q60,5 110,35" fill="none" stroke="#cbd5e1" strokeWidth="3" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-cyan-50/50 p-4 rounded-xl border border-cyan-100 text-center w-full">
              <p className="text-sm text-cyan-800 flex items-center justify-center gap-2">
                <Eye size={16} /> Look at the red fixation target to see the deviation alignment.
              </p>
            </div>
          </div>

          {/* Controls & Explanation Column */}
          <div className="flex flex-col">
            
            {/* Selectors */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 mb-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Squint Type</label>
                  <select 
                    value={squintType} 
                    onChange={(e) => { setSquintType(e.target.value); if(e.target.value==='normal') setSeverity(0); }}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-700 rounded-lg px-4 py-2.5 font-medium focus:ring-2 focus:ring-cyan-500 outline-none"
                  >
                    <option value="normal">Normal Alignment</option>
                    <option value="esotropia">Esotropia (Inward)</option>
                    <option value="exotropia">Exotropia (Outward)</option>
                    <option value="hypertropia">Hypertropia (Upward)</option>
                    <option value="hypotropia">Hypotropia (Downward)</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Affected Eye</label>
                  <select 
                    value={affectedEye} 
                    onChange={(e) => setAffectedEye(e.target.value)}
                    disabled={squintType === 'normal'}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-700 rounded-lg px-4 py-2.5 font-medium focus:ring-2 focus:ring-cyan-500 outline-none disabled:opacity-50"
                  >
                    <option value="left">Left Eye</option>
                    <option value="right">Right Eye</option>
                    <option value="alternating">Alternating</option>
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Patient Profile</label>
                <div className="flex bg-slate-100 p-1 rounded-lg">
                  <button 
                    onClick={() => setPatientType("child")}
                    className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${patientType === 'child' ? 'bg-white shadow-sm text-cyan-700' : 'text-slate-500 hover:text-slate-700'}`}
                  >
                    Child
                  </button>
                  <button 
                    onClick={() => setPatientType("adult")}
                    className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${patientType === 'adult' ? 'bg-white shadow-sm text-cyan-700' : 'text-slate-500 hover:text-slate-700'}`}
                  >
                    Adult
                  </button>
                </div>
              </div>
            </div>

            {/* Explanation Panel */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-xl flex-1 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-1 text-cyan-400">{expl.title}</h3>
                <p className="text-slate-300 font-medium mb-6">{expl.meaning}</p>
                
                <div className="space-y-4">
                  <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                    <p className="text-xs text-slate-400 font-bold uppercase mb-1">Common Signs</p>
                    <p className="text-sm text-slate-200 leading-relaxed">{expl.signs}</p>
                  </div>
                  
                  <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                    <p className="text-xs text-slate-400 font-bold uppercase mb-1">{patientType === 'child' ? 'In Children' : 'In Adults'}</p>
                    <p className="text-sm text-slate-200 leading-relaxed">{expl.context}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 relative z-10 pt-6 border-t border-slate-800">
                <p className="text-sm text-slate-300 mb-4 font-medium text-center">
                  Not sure which type this looks like?
                </p>
                <a
                  href="https://wa.me/919876543210?text=Hello,%20I%20used%20the%20squint%20visualizer%20and%20would%20like%20to%20consult%20a%20specialist."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex justify-center items-center gap-2 py-3.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-cyan-500/25"
                >
                  Consult a Squint Specialist <ArrowRight size={18} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function TreatmentsSection() {
  const treatments = [
    { title: "Squint / Strabismus", desc: "Expert assessment and management of misaligned eyes in children and adults.", icon: Eye },
    { title: "Paediatric Eye Care", desc: "Comprehensive vision screening and treatment for younger patients.", icon: Baby },
    { title: "Lazy Eye / Amblyopia", desc: "Targeted therapy to improve vision in the weaker eye.", icon: TargetIcon },
    { title: "Double Vision", desc: "Thorough evaluation to identify causes and provide appropriate solutions.", icon: Eye },
    { title: "Refractive Errors", desc: "Management of Myopia, Hypermetropia, and Astigmatism.", icon: Eye },
    { title: "General Check-up", desc: "Complete eye health evaluation and preventive care.", icon: Stethoscope },
  ];

  return (
    <section id="treatments" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Comprehensive Eye Care Under One Roof</h2>
          <p className="text-slate-600">Advanced diagnostic techniques and personalized treatments for various eye conditions.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((t, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-cyan-100 transition-all group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-6 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                <t.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{t.title}</h3>
              <p className="text-slate-600 mb-6">{t.desc}</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-600 group-hover:text-slate-900 transition-colors">
                Know More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DoctorProfile() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="h-64 lg:h-auto bg-slate-800 relative">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1000&auto=format&fit=crop" 
                alt="Professional Doctor Portrait" 
                className="absolute inset-0 w-full h-full object-cover opacity-90 grayscale mix-blend-luminosity"
              />
            </div>
            
            <div className="p-10 lg:p-16 text-white">
              <p className="text-cyan-400 font-bold text-sm tracking-wider uppercase mb-2">About The Specialist</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Meet Dr. [Doctor Name]</h2>
              <p className="text-xl text-slate-300 mb-8">Ophthalmologist & Squint Specialist</p>
              
              <p className="text-slate-400 mb-8 leading-relaxed">
                Dedicated to providing exceptional eye care with a focus on strabismus and paediatric ophthalmology. Combining years of clinical experience with modern diagnostic techniques to deliver personalized treatment plans for every patient.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="bg-slate-800/50 border border-slate-700 px-4 py-3 rounded-xl">
                  <p className="font-bold text-lg text-white">15+ Years</p>
                  <p className="text-xs text-slate-400">Clinical Experience</p>
                </div>
                <div className="bg-slate-800/50 border border-slate-700 px-4 py-3 rounded-xl">
                  <p className="font-bold text-lg text-white">Specialised</p>
                  <p className="text-xs text-slate-400">Squint & Strabismus Care</p>
                </div>
                <div className="bg-slate-800/50 border border-slate-700 px-4 py-3 rounded-xl">
                  <p className="font-bold text-lg text-white">Comprehensive</p>
                  <p className="text-xs text-slate-400">Child & Adult Eye Care</p>
                </div>
              </div>
              
              <a
                href="https://wa.me/919876543210?text=Hello,%20I%20would%20like%20to%20consult%20Dr.%20[Name]."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-100 text-slate-900 rounded-full font-bold transition-colors"
              >
                Consult Doctor <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const reasons = [
    { title: "Specialist Eye Care", desc: "Focused evaluation and personalised treatment planning.", icon: Eye },
    { title: "Modern Diagnostics", desc: "Evidence-based assessment supported by appropriate examinations.", icon: Stethoscope },
    { title: "Child-Friendly Care", desc: "Comfortable and supportive approach for younger patients.", icon: Baby },
    { title: "Patient Education", desc: "Clear explanation of diagnosis and treatment options.", icon: Users },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-16">Why Choose Our Clinic</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((r, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-cyan-600 mb-6">
                <r.icon size={32} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{r.title}</h3>
              <p className="text-slate-600 text-sm">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BookingSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
    service: "Squint Consultation",
    date: "",
    time: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format message
    const message = `Hello, I would like to book an eye consultation.
    
Name: ${formData.name}
Mobile: ${formData.phone}
Age: ${formData.age}
Consultation For: ${formData.service}
Preferred Date: ${formData.date}
Preferred Time: ${formData.time}
Message: ${formData.message || "N/A"}

Please let me know the available appointment slots.`;

    const whatsappURL = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="py-24 bg-gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Concerned About Your Eyes or Eye Alignment?
            </h2>
            <p className="text-slate-300 text-lg mb-10">
              Schedule an expert eye evaluation and understand the right next step for your vision. Fill in your details and continue directly on WhatsApp.
            </p>
            
            <div className="flex gap-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-medium">Quick Response</p>
                  <p className="font-bold text-white">Within 30 Mins</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Book Your Consultation</h3>
            <p className="text-slate-500 text-sm mb-8">Fill in details to continue on WhatsApp</p>
            
            <form onSubmit={handleWhatsAppSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                  <input required name="name" value={formData.name} onChange={handleChange} type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Rahul Sharma" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Mobile Number *</label>
                  <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="9876543210" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Age</label>
                  <input name="age" value={formData.age} onChange={handleChange} type="number" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="e.g. 35" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Consultation For *</label>
                  <select name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500">
                    <option>Squint Consultation</option>
                    <option>Child Eye Examination</option>
                    <option>Lazy Eye</option>
                    <option>Double Vision</option>
                    <option>General Eye Check-up</option>
                    <option>Cataract Evaluation</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Date</label>
                  <input name="date" value={formData.date} onChange={handleChange} type="date" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Time</label>
                  <input name="time" value={formData.time} onChange={handleChange} type="time" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Message (Optional)</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={2} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Briefly describe your condition..."></textarea>
              </div>
              
              <button type="submit" className="w-full bg-[#25D366] hover:bg-[#20b858] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-green-500/30">
                Continue on WhatsApp <ArrowRight size={20} />
              </button>
              
              <p className="text-center text-xs text-slate-500 mt-4">
                You will be redirected to WhatsApp to send this message. No email is sent.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    { q: "What is squint (strabismus)?", a: "Squint is a condition where the eyes do not look in the same direction. While one eye looks straight ahead, the other eye turns inwards, outwards, upwards or downwards." },
    { q: "Can squint occur in adults?", a: "Yes, squint can develop in adulthood due to various reasons including trauma, nerve palsies, or thyroid eye disease, or it could be a childhood squint that has returned or become more noticeable." },
    { q: "When should a child with squint see an eye specialist?", a: "As soon as the squint is noticed. Early evaluation is crucial because squint can lead to 'lazy eye' (amblyopia) if left untreated during the critical period of visual development." },
    { q: "Does every squint require surgery?", a: "No. Many squints can be managed with glasses, prisms, eye patches, or eye exercises. Surgery is recommended when these methods are not sufficient to correct the alignment." },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600">Common questions about squint and eye care.</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 bg-slate-50 hover:bg-slate-100 transition-colors text-left font-bold text-slate-900"
              >
                {faq.q}
                <ChevronDown className={`transition-transform duration-300 ${openIndex === i ? "rotate-180 text-cyan-600" : "text-slate-400"}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                <p className="p-6 pt-0 bg-slate-50 text-slate-600">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Icon helper components
function TargetIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
    </svg>
  );
}
