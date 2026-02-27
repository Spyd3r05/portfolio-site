import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none opacity-40 z-0 bg-grain mix-blend-overlay"></div>

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
      </main>

      <Footer />

      <a
        href="#"
        className="fixed bottom-8 right-8 w-12 h-12 glass flex items-center justify-center rounded-full hover:bg-primary hover:text-black dark:text-white text-slate-900 transition-all z-50 shadow-lg"
        aria-label="Back to top"
      >
        <span className="material-icons-round">expand_less</span>
      </a>
    </>
  );
}

export default App;
