import React, { useState, useEffect } from 'react';
import { Menu, X, User, Briefcase, Mail, Award, GraduationCap, Building, Zap, Battery, Clock } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [batteryLevel, setBatteryLevel] = useState<number | null>(null);
  const [isCharging, setIsCharging] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: User },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Zap },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'experience', label: 'Experience', icon: Building },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Battery API
  useEffect(() => {
    const getBatteryInfo = async () => {
      try {
        if ('getBattery' in navigator) {
          const battery = await (navigator as any).getBattery();
          setBatteryLevel(Math.round(battery.level * 100));
          setIsCharging(battery.charging);

          battery.addEventListener('levelchange', () => {
            setBatteryLevel(Math.round(battery.level * 100));
          });

          battery.addEventListener('chargingchange', () => {
            setIsCharging(battery.charging);
          });
        }
      } catch (error) {
        console.log('Battery API not supported');
      }
    };

    getBatteryInfo();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString([], {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  const getBatteryIcon = () => {
    if (batteryLevel === null) return <Battery className="w-4 h-4" />;
    
    if (batteryLevel > 75) return <Battery className="w-4 h-4 text-green-400" />;
    if (batteryLevel > 50) return <Battery className="w-4 h-4 text-yellow-400" />;
    if (batteryLevel > 25) return <Battery className="w-4 h-4 text-orange-400" />;
    return <Battery className="w-4 h-4 text-red-400" />;
  };

  return (
    <>
      {/* Desktop/Tablet Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-3 py-2">
          <div className="flex items-center justify-between">
            {/* System Information - Left Side */}
            <div className="flex items-center space-x-4 text-xs text-slate-300">
              {/* Date */}
              <div className="flex items-center space-x-1 px-2 py-1 bg-slate-800/50 rounded-lg">
                <Clock className="w-3 h-3 text-blue-400" />
                <span className="font-mono">{formatDate(currentTime)}</span>
              </div>

              {/* Battery Status */}
              {batteryLevel !== null && (
                <div className="flex items-center space-x-1 px-2 py-1 bg-slate-800/50 rounded-lg">
                  {getBatteryIcon()}
                  <span className="font-mono">
                    {batteryLevel}%{isCharging ? ' ⚡' : ''}
                  </span>
                </div>
              )}

              {/* Current Time */}
              <div className="flex items-center space-x-1 px-2 py-1 bg-slate-800/50 rounded-lg">
                <Clock className="w-3 h-3 text-cyan-400" />
                <span className="font-mono">{formatTime(currentTime)}</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-1 px-2 py-1.5 rounded-lg transition-all duration-300 text-xs ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-300 border border-purple-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <item.icon className="w-3 h-3" />
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>

            {/* System Status - Right Side */}
            <div className="hidden xl:flex items-center space-x-4 text-xs text-slate-300">
              {/* System Status */}
              <div className="flex items-center space-x-1 px-2 py-1 bg-slate-800/50 rounded-lg">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-mono text-green-400">SYSTEM_OK</span>
              </div>
            </div>

            {/* Tablet Navigation */}
            <nav className="hidden md:flex lg:hidden items-center space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-300 border border-purple-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                  title={item.label}
                >
                  <item.icon className="w-4 h-4" />
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-1.5 rounded-lg hover:bg-slate-800 transition-colors touch-manipulation"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          {isMenuOpen && (
            <nav className="md:hidden mt-3 pb-3 border-t border-slate-800">
              <div className="grid grid-cols-2 gap-2 mt-3">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 text-sm touch-manipulation ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-300 border border-purple-500/30'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>

              {/* Mobile System Info */}
              <div className="mt-3 pt-3 border-t border-slate-700">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center space-x-1 px-2 py-1 bg-slate-800/50 rounded">
                    <Clock className="w-3 h-3 text-blue-400" />
                    <span>{formatDate(currentTime)}</span>
                  </div>
                  {batteryLevel !== null && (
                    <div className="flex items-center space-x-1 px-2 py-1 bg-slate-800/50 rounded">
                      {getBatteryIcon()}
                      <span>{batteryLevel}%</span>
                    </div>
                  )}
                  <div className="flex items-center space-x-1 px-2 py-1 bg-slate-800/50 rounded col-span-2">
                    <Clock className="w-3 h-3 text-cyan-400" />
                    <span className="font-mono">{formatTime(currentTime)}</span>
                  </div>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Mobile Bottom Navigation - Optimized */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-900/98 backdrop-blur-md border-t border-slate-800 safe-area-inset">
        <div className="flex items-center justify-around px-1 py-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-200 min-w-0 flex-1 touch-manipulation ${
                activeSection === item.id
                  ? 'text-purple-400'
                  : 'text-slate-400 hover:text-white'
              }`}
              title={item.label}
            >
              <item.icon className={`w-5 h-5 ${activeSection === item.id ? 'animate-pulse' : ''}`} />
              {activeSection === item.id && (
                <div className="w-1 h-1 bg-purple-400 rounded-full mt-1"></div>
              )}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Header;