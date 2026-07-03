"use client";

import { useState } from "react";
import { ShieldCheck, Sparkles } from "lucide-react";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";



export default function HomePage() {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-12 bg-white font-sans selection:bg-blue-500/10">

      {/* LEFT SIDE: VISUAL BRANDING PANEL */}
      <div className="hidden lg:flex lg:col-span-5 relative bg-slate-900 overflow-hidden flex-col justify-between p-12 text-white">
        
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] -ml-20 -mb-20 pointer-events-none" />

        {/* Brand Header */}
        <div className="relative z-10 flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-blue-600 shadow-lg shadow-blue-500/30">
            <ShieldCheck size={22} className="text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            SecurePortal
          </span>
        </div>

        {/* Marketing Section */}
        <div className="relative z-10 my-auto max-w-sm space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/60 border border-slate-700/50 text-xs font-medium text-blue-400 backdrop-blur-sm">
            <Sparkles size={12} /> Version 4.0 Launch
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-white leading-tight">
            Simplify your digital identity.
          </h1>

          <p className="text-slate-400 text-sm leading-relaxed">
            Access your secure dashboard, monitor real-time analytics integrations,
            and deploy globally with confidence.
          </p>
        </div>

        {/* Footer */}
        <div className="relative z-10 text-xs text-slate-500 font-medium">
          &copy; 2026 SecurePortal Inc. All rights reserved.
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="col-span-1 lg:col-span-7 flex flex-col justify-center px-4 sm:px-16 lg:px-24 xl:px-32 bg-slate-50/40">

        {/* Mobile Logo */}
        <div className="lg:hidden flex items-center gap-2 mb-8 self-start">
          <div className="p-2 rounded-lg bg-blue-600 text-white">
            <ShieldCheck size={18} />
          </div>
          <span className="font-bold text-base text-slate-900">
            SecurePortal
          </span>
        </div>

        {/* Form Card */}
        <div className="w-full max-w-md mx-auto bg-white border border-slate-200/60 p-8 sm:p-10 rounded-2xl shadow-xl shadow-slate-100/50">

          {showRegister ? (
            <RegisterForm onSwitch={() => setShowRegister(false)} />
          ) : (
            <LoginForm onSwitch={() => setShowRegister(true)} />
          )}

        </div>
      </div>
    </div>
  );
}