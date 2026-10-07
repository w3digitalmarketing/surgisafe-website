"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-cyan-600 flex items-center justify-center text-white font-bold text-xl">
                V
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Vision<span className="text-cyan-500">Care</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 mb-6">
              Expert ophthalmology clinic specializing in squint care, pediatric eye health, and comprehensive eye examinations.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm hover:text-cyan-400 transition-colors">Home</Link></li>
              <li><Link href="#about" className="text-sm hover:text-cyan-400 transition-colors">About Doctor</Link></li>
              <li><Link href="#squint" className="text-sm hover:text-cyan-400 transition-colors">Squint Care</Link></li>
              <li><Link href="#treatments" className="text-sm hover:text-cyan-400 transition-colors">All Treatments</Link></li>
              <li><Link href="#faq" className="text-sm hover:text-cyan-400 transition-colors">FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <MapPin size={18} className="text-cyan-500 shrink-0 mt-0.5" />
                <span className="text-sm">123 Health Avenue, Medical District, City - 400001</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={18} className="text-cyan-500 shrink-0" />
                <span className="text-sm">+91 98765 43210</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={18} className="text-cyan-500 shrink-0" />
                <span className="text-sm">care@visioncareclinic.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Clinic Timings</h3>
            <ul className="space-y-3">
              <li className="flex justify-between text-sm border-b border-slate-800 pb-2">
                <span>Mon - Fri:</span>
                <span>10:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between text-sm border-b border-slate-800 pb-2">
                <span>Saturday:</span>
                <span>10:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between text-sm text-cyan-400">
                <span>Sunday:</span>
                <span>By Appointment Only</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; 2024 VisionCare Clinic. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-slate-500 hover:text-slate-300">Privacy Policy</Link>
            <Link href="#" className="text-xs text-slate-500 hover:text-slate-300">Terms of Service</Link>
            <Link href="#" className="text-xs text-slate-500 hover:text-slate-300">Medical Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
