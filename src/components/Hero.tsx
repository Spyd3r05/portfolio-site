export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                <h1 className="text-[15vw] font-display font-bold leading-none uppercase opacity-[0.03] whitespace-nowrap text-primary">
                    NZIVUMUENI
                </h1>
            </div>

            <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Available for AI & Web Projects
                    </div>

                    <h2 className="text-5xl lg:text-7xl font-display font-bold leading-tight text-slate-900 dark:text-white">
                        Front End Developer & <span className="text-primary">AI Enthusiast</span>
                    </h2>

                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
                        Building next-generation web solutions by merging modern frontend aesthetics with generative AI power. Based in Nairobi, Kenya.
                    </p>

                    <div className="flex gap-4">
                        <a
                            href="#projects"
                            className="group flex items-center gap-2 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-black font-bold rounded-xl hover:bg-primary dark:hover:bg-primary hover:text-black dark:hover:text-black transition-all"
                        >
                            View My Work
                            <span className="material-icons-round text-sm group-hover:translate-x-1 transition-transform">
                                arrow_forward
                            </span>
                        </a>
                    </div>
                </div>

                <div className="lg:col-span-5 relative">
                    <div className="glass p-8 rounded-3xl relative z-10 overflow-hidden border border-white/10">
                        <div className="absolute top-0 right-0 p-4">
                            <span className="material-icons-round text-primary text-4xl rotate-45">
                                auto_awesome
                            </span>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-4">
                                    Creative DNA
                                </h3>
                                <div className="space-y-4">
                                    <div>
                                        <div className="text-3xl font-bold text-slate-900 dark:text-white">
                                            Rural <span className="text-primary">Schools</span>
                                        </div>
                                        <div className="text-sm text-slate-500 dark:text-slate-400">
                                            Rural Education Initiative
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold text-slate-900 dark:text-white">
                                            Web <span className="text-primary">AI solutions</span>
                                        </div>
                                        <div className="text-sm text-slate-500 dark:text-slate-400">
                                            Production Web Apps
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed italic">
                                "I'm an engineer who found a home in AI-driven experiences, crafting digital interfaces that blur the lines between human intuition and machine intelligence."
                            </p>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-[100px] rounded-full"></div>
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 blur-[100px] rounded-full"></div>
                </div>
            </div>
        </section>
    );
}
