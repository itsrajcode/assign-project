import React, { useState } from 'react';
import { Bell, ChevronDown, Menu, X } from 'lucide-react';
import { House } from 'lucide-react';
import { SparklesIcon } from 'lucide-react';
import { TowerControlIcon } from 'lucide-react';
import { Zap } from 'lucide-react';
import { ChartLineIcon } from 'lucide-react';
import { NotepadTextDashedIcon } from 'lucide-react';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Mock Test");

  const menuItems = [
    { icon: <House className='w-4 h-4' />, label: "Dashboard", link: "#" },
    { icon: <SparklesIcon className='w-4 h-4' />, label: "FirstGuru", link: "#" },
    { icon: <TowerControlIcon className='w-4 h-4' />, label: "TownHall", link: "#" },
    { icon: <Zap className='w-4 h-4' />, label: "AI Evaluation", link: "#" },
    { icon: <ChartLineIcon className='w-4 h-4' />, label: "Performance", link: "#" },
    { icon: <NotepadTextDashedIcon className='w-4 h-4' />, label: "Mock Test", link: "#" }
  ];

  const handleItemClick = (label) => {
    setActiveItem(label);
  };

  return (
    <>
      <header className="bg-gray-900 text-gray-300 flex justify-center">
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <button 
              className="lg:hidden text-gray-300 hover:text-white"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-cyan-400" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span className="text-white text-xl font-semibold">Firstbench</span>
            </div>
            <nav className="hidden lg:flex items-center gap-6">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  onClick={() => handleItemClick(item.label)}
                  className={`hover:bg-gray-700 px-3 py-2 rounded-lg transition-colors flex items-center gap-3 ${
                    activeItem === item.label ? 'text-cyan-400' : ''
                  }`}
                >
                  <span>{item.icon}</span>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:text-white transition-colors">
              <Bell size={20} />
            </button>
            <div className="flex items-center gap-2 bg-[#1c2534] px-3 py-2 rounded-lg">
              <div className="w-8 h-8 bg-pink-600 rounded-lg flex items-center justify-center text-white">
                P
              </div>
              <span className="hidden sm:inline">Profile</span>
              <ChevronDown size={16} className="hidden sm:block" />
            </div>
          </div>
        </div>
      </header>
      <div 
        className={`fixed inset-0 z-50 lg:hidden ${
          isSidebarOpen ? 'visible' : 'invisible'
        }`}
      >
        <div 
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            isSidebarOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsSidebarOpen(false)}
        />
        <div 
          className={`absolute top-0 left-0 w-64 h-full bg-gray-900 transform transition-transform duration-300 ease-out ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-4">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-cyan-400" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                <span className="text-white text-xl font-semibold">Firstbench</span>
              </div>
              <button 
                className="text-gray-400 hover:text-white"
                onClick={() => setIsSidebarOpen(false)}
              >
                <X size={24} />
              </button>
            </div>
            <nav className="space-y-2">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  onClick={() => handleItemClick(item.label)}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                    activeItem === item.label 
                      ? 'text-cyan-400 bg-cyan-400/10'
                      : 'text-gray-300 hover:bg-white/10'
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

