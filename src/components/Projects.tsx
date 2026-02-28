export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
            <div className="space-y-4 mb-16">
                <span className="text-primary font-mono tracking-widest uppercase">/ Portfolio</span>
                <h3 className="text-5xl font-display font-bold text-slate-900 dark:text-white">
                    Featured <span className="text-primary">Projects</span>
                </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group relative bg-surface-light dark:bg-surface-dark rounded-3xl overflow-hidden border border-slate-200 dark:border-white/5 shadow-lg dark:shadow-none transition-all duration-500 hover:shadow-primary/10">
                    <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-950 flex items-center justify-center overflow-hidden">
                        <img
                            src="/assets/image0.png"
                            alt="KUELC Chapter Website"
                            className="w-full h-full object-cover opacity-80 dark:opacity-50 group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <div className="p-8">
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-primary/20 text-primary dark:text-primary rounded border border-primary/20">
                                React
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-primary/20 text-primary dark:text-primary rounded border border-primary/20">
                                Tailwind
                            </span>
                        </div>
                        <h4 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">
                            KUELC Chapter Website
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400 mb-6">
                            A web solution for KUELC chapter for easier member registration, subscription and events payment.
                        </p>
                        <a href="https://kuelc.vercel.app/" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                            View Project
                            <span className="material-icons-round text-sm">open_in_new</span>
                        </a>
                    </div>
                </div>

                <div className="group relative bg-surface-light dark:bg-surface-dark rounded-3xl overflow-hidden border border-slate-200 dark:border-white/5 shadow-lg dark:shadow-none transition-all duration-500 hover:shadow-primary/10">
                    <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-950 flex items-center justify-center overflow-hidden">
                        <img
                            src="/assets/image1.jpg"
                            alt="Real Time Chat App"
                            className="w-full h-full object-cover opacity-80 dark:opacity-50 group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <div className="p-8">
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-primary/20 text-primary dark:text-primary rounded border border-primary/20">
                                React Js
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-primary/20 text-primary dark:text-primary rounded border border-primary/20">
                                Go
                            </span>
                        </div>
                        <h4 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">Live Chatter</h4>
                        <p className="text-slate-600 dark:text-slate-400 mb-6">
                            A real-time chat application using React and Go.
                        </p>
                        <a href="https://github.com/Spyd3r05/live-chatter-frontEnd" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                            View Project <span className="material-icons-round text-sm">open_in_new</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
