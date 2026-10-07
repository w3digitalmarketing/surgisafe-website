"use client";

import { MessageCircle, Phone, Calendar } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingWhatsApp() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const openWhatsApp = () => {
    window.open("https://wa.me/919876543210?text=Hello,%20I%20would%20like%20to%20book%20an%20appointment.", "_blank");
  };

  return (
    <>
      {/* Desktop Floating Button */}
      <AnimatePresence>
        {!isMobile && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={openWhatsApp}
            className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(37,211,102,0.4)] hover:shadow-[0_8px_30px_rgb(37,211,102,0.6)] transition-shadow"
            aria-label="Contact us on WhatsApp"
          >
            <MessageCircle size={32} />
            <span className="absolute -top-2 -right-2 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Mobile Sticky Action Bar */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 w-full z-50 bg-white border-t border-slate-200 p-3 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] flex gap-2">
          <a
            href="tel:+919876543210"
            className="flex-1 flex flex-col items-center justify-center py-2 bg-slate-100 text-slate-800 rounded-xl active:bg-slate-200 transition-colors"
          >
            <Phone size={20} className="mb-1" />
            <span className="text-[10px] font-semibold">Call</span>
          </a>
          <button
            onClick={openWhatsApp}
            className="flex-[2] flex items-center justify-center gap-2 bg-[#25D366] text-white rounded-xl active:bg-[#1ebd5a] transition-colors shadow-sm font-semibold"
          >
            <MessageCircle size={20} />
            <span>WhatsApp</span>
          </button>
        </div>
      )}
    </>
  );
}
