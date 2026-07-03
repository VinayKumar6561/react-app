import React, { useState } from 'react';
import { Menu, X, Home, BarChart2, Settings, Users, HelpCircle, Bell, User } from 'lucide-react';

export default function Layout() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 text-slate-800 antialiased">
      
      {/* 1. SIDEBAR (Desktop) */}
      <aside className="hidden w-64 border-r border-slate-200 bg-white lg:flex lg:flex-col">
        <div className="flex h-16 items-center px-6 border-b border-slate-200">
          <span className="text-lg font-bold tracking-tight text-blue-600">SecurePortal</span>
        </div>
        <nav className="flex-1 space-y-1 p-4">
          <SidebarLinks />
        </nav>
      </aside>

      {/* Mobile Sidebar Overlay */}
      {isMobileSidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm lg:hidden"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar Drawer */}
      <aside className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-white border-r border-slate-200 transition-transform duration-300 ease-in-out lg:hidden ${
        isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex h-16 items-center justify-between px-6 border-b border-slate-200">
          <span className="text-lg font-bold text-blue-600">SecurePortal</span>
          <button onClick={() => setIsMobileSidebarOpen(false)} className="rounded-md p-1 hover:bg-slate-100">
            <X size={20} />
          </button>
        </div>
        <nav className="flex-1 space-y-1 p-4">
          <SidebarLinks />
        </nav>
      </aside>

      {/* RIGHT SIDE CONTAINER (Navbar + Main Content Area + Footer) */}
      <div className="flex flex-1 flex-col overflow-hidden">
        
        {/* 2. NAVBAR */}
        <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsMobileSidebarOpen(true)} 
              className="rounded-md p-1.5 text-slate-500 hover:bg-slate-100 lg:hidden"
            >
              <Menu size={22} />
            </button>
            <h1 className="text-sm font-semibold text-slate-700 md:text-base">Workspace / Dashboard</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="relative rounded-full p-1.5 text-slate-500 hover:bg-slate-100">
              <Bell size={20} />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-blue-600" />
            </button>
            <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-medium border border-slate-300 cursor-pointer hover:bg-slate-300 transition-colors">
              <User size={18} />
            </div>
          </div>
        </header>

        {/* 3. MAIN CONTENT (Scrollable wrapper) */}
        <div className="flex-1 overflow-y-auto flex flex-col justify-between">
          <main className="p-6 max-w-7xl w-full mx-auto">
            {/* Page Header */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">Dashboard Overviews</h2>
              <p className="text-sm text-slate-500 mt-1">Here is what is happening with your workspace logs today.</p>
            </div>

            {/* Content Placeholders */}
            <div className="grid gap-6 md:grid-cols-3">
              <div className="h-32 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Total Active Users</span>
                <p className="text-3xl font-bold text-slate-900 mt-2">1,248</p>
              </div>
              <div className="h-32 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Success Rate</span>
                <p className="text-3xl font-bold text-emerald-600 mt-2">99.94%</p>
              </div>
              <div className="h-32 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">System API Load</span>
                <p className="text-3xl font-bold text-slate-900 mt-2">24ms</p>
              </div>
            </div>

            {/* Extended dynamic container example */}
            <div className="mt-6 h-96 rounded-xl border border-slate-200 border-dashed flex items-center justify-center text-slate-400 bg-white/50">
              Main structural content blocks load here.
            </div>
          </main>

          {/* 4. FOOTER */}
          <footer className="border-t border-slate-200 bg-white py-4 px-6 text-center text-xs text-slate-500 font-medium">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
              <p>© 2026 SecurePortal Inc. All rights reserved.</p>
              <div className="flex gap-4">
                <a href="#privacy" className="hover:underline">Privacy Policy</a>
                <a href="#terms" className="hover:underline">Terms of Service</a>
              </div>
            </div>
          </footer>
        </div>

      </div>
    </div>
  );
}

// Reusable Navigation Link Block
function SidebarLinks() {
  const links = [
    { label: 'Home Dashboard', icon: Home, active: true },
    { label: 'Analytics Insights', icon: BarChart2, active: false },
    { label: 'User Directory', icon: Users, active: false },
    { label: 'System Settings', icon: Settings, active: false },
    { label: 'Help & Documentation', icon: HelpCircle, active: false },
  ];

  return (
    <>
      {links.map((link, index) => {
        const Icon = link.icon;
        return (
          <a
            key={index}
            href={`#${link.label.toLowerCase().replace(/\s+/g, '-')}`}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              link.active 
                ? 'bg-blue-50 text-blue-700' 
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            <Icon size={18} className={link.active ? 'text-blue-700' : 'text-slate-400'} />
            {link.label}
          </a>
        );
      })}
    </>
  );
}