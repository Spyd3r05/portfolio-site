import { useState } from "react";
import { useTheme } from "../ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Journey", href: "#journey" },
  ];

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center glass border-b border-gray-200/50 dark:border-white/10 transition-colors duration-300">
      <div className="text-2xl font-display font-bold tracking-tighter text-slate-900 dark:text-white">
        NZIVUMUENI<span className="text-primary">.</span>
      </div>

      <div className="hidden md:flex gap-8 items-center font-medium text-slate-700 dark:text-white">
        {menuItems.map((item, index) => (
          <a key={index} href={item.href} className="hover:text-primary transition-colors">
            {item.name}
          </a>
        ))}

        <button
          onClick={toggleTheme}
          aria-label="Toggle Dark Mode"
          className="relative p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300 focus:outline-none group overflow-hidden"
        >
          <div className={`transition-all duration-500 scale-100 ${isDark ? 'rotate-[360deg] opacity-0 translate-y-8' : 'rotate-0 opacity-100 translate-y-0'}`}>
            <span className="material-icons-round text-2xl block text-amber-500">light_mode</span>
          </div>
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${isDark ? 'rotate-0 opacity-100 translate-y-0' : 'rotate-[-90deg] opacity-0 -translate-y-8'}`}>
            <span className="material-icons-round text-2xl block text-blue-400">dark_mode</span>
          </div>
        </button>

        <a
          href="#contact"
          className="px-5 py-2 bg-primary text-black font-bold rounded-full hover:shadow-[0_0_15px_rgba(57,255,20,0.5)] transition-all"
        >
          Hire Me
        </a>
      </div>

      {/* Mobile Right Controls */}
      <div className="md:hidden flex items-center gap-2">
        <button
          onClick={toggleTheme}
          aria-label="Toggle Dark Mode"
          className="relative p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300 focus:outline-none overflow-hidden"
        >
          <div className={`transition-all duration-500 ${isDark ? 'rotate-[360deg] opacity-0 translate-y-8' : 'rotate-0 opacity-100 translate-y-0'}`}>
            <span className="material-icons-round text-xl block text-amber-500">light_mode</span>
          </div>
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${isDark ? 'rotate-0 opacity-100 translate-y-0' : 'rotate-[-90deg] opacity-0 -translate-y-8'}`}>
            <span className="material-icons-round text-xl block text-blue-400">dark_mode</span>
          </div>
        </button>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Mobile Menu"
          className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-slate-900 dark:text-white focus:outline-none"
        >
          <span className="material-icons-round text-2xl block">
            {isMobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-slate-950 border-b border-gray-200 dark:border-gray-500 shadow-2xl md:hidden flex flex-col items-center py-8 gap-6 transition-all origin-top animate-in slide-in-from-top-4">
          {menuItems.map((item, index) => (
            <a key={index} href={item.href} onClick={closeMobileMenu} className="text-xl font-medium border-b-2 border-primary text-slate-800 dark:text-slate-200 hover:text-primary transition-colors">
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMobileMenu}
            className="px-8 py-3 bg-primary text-black font-bold rounded-full hover:shadow-[0_0_15px_rgba(57,255,20,0.5)] transition-all mt-4"
          >
            Hire Me
          </a>

        </div>



      )}
    </nav>
  );
}