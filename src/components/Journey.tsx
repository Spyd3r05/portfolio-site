export default function Journey() {
    return (
        <section id="journey" className="py-24 bg-slate-100/50 dark:bg-black/50 transition-colors">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-primary font-mono tracking-widest uppercase">/ Timeline</span>
                    <h3 className="text-4xl font-display font-bold mt-4 text-slate-900 dark:text-white">
                        Professional <span className="text-primary">Journey</span>
                    </h3>
                </div>

                <div className="relative space-y-12">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-300 dark:bg-white/10 -translate-x-1/2 hidden md:block"></div>

                    {/* Timeline Item 1 */}
                    <div className="relative grid md:grid-cols-2 gap-8 md:gap-16">
                        <div className="md:text-right">
                            <div className="text-primary font-bold text-lg">2025 - Present</div>
                            <h4 className="text-2xl font-bold text-slate-900 dark:text-white">
                                AI Developer & Student
                            </h4>
                            <p className="text-slate-600 dark:text-slate-400">
                                Deep diving into Generative AI and LLM Orchestration.
                            </p>
                        </div>
                        <div className="hidden md:block"></div>
                        <div className="absolute left-[-4px] md:left-1/2 top-1 w-2 h-2 bg-primary rounded-full md:-translate-x-1/2 shadow-[0_0_10px_#39FF14]"></div>
                    </div>

                    {/* Timeline Item 2 */}
                    <div className="relative grid md:grid-cols-2 gap-8 md:gap-16">
                        <div className="md:text-right">
                            <div className="text-primary font-bold text-lg">2023</div>
                            <h4 className="text-2xl font-bold text-slate-900 dark:text-white">
                                Student Developer
                            </h4>
                            <p className="text-slate-600 dark:text-slate-400">
                                Started the journey into Web Dev and Computer Science fundamentals.
                            </p>
                        </div>
                        <div className="hidden md:block"></div>
                        <div className="absolute left-[-4px] md:left-1/2 top-1 w-2 h-2 bg-primary rounded-full md:-translate-x-1/2 shadow-[0_0_10px_#39FF14]"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
