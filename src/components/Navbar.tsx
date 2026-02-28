import { useState, useEffect } from "react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("theme") === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return true; // Default to dark mode
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Journey", href: "#journey" },
  ];

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

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
          className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors focus:outline-none"
        >
          {isDark ? (
            <span className="material-icons-round text-xl block">light_mode</span>
          ) : (
            <span className="material-icons-round text-xl block">dark_mode</span>
          )}
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
          className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
        >
          {isDark ? (
            <span className="material-icons-round text-xl block">light_mode</span>
          ) : (
            <span className="material-icons-round text-xl block">dark_mode</span>
          )}
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