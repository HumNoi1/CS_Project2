"use client";

import { Home, LogOut, Moon } from "lucide-react";
import { useState } from 'react';

const OllamaLogo = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 19H22L12 2ZM12 5.5L18.5 17H5.5L12 5.5Z"/>
  </svg>
);

const Sidebar = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="w-16 bg-slate-900 flex flex-col items-center py-4 space-y-6">
      <SidebarButton icon={<OllamaLogo />} />
      <SidebarButton icon={<Home className="w-6 h-6" />} />
      <div className="flex-grow" />
      <SidebarButton 
        icon={<Moon className="w-6 h-6" />} 
        onClick={toggleTheme}
      />
      <SidebarButton icon={<LogOut className="w-6 h-6" />} />
    </div>
  );
};

const SidebarButton = ({ icon, onClick }) => {
  return (
    <button 
      className="p-2 text-white hover:bg-slate-700 rounded"
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default Sidebar;