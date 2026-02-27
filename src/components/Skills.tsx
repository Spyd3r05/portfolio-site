export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-slate-100/50 dark:bg-black/30 transition-colors">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div className="space-y-4">
                        <span className="text-primary font-mono tracking-widest uppercase">/ Toolkit</span>
                        <h3 className="text-5xl font-display font-bold text-slate-900 dark:text-white">
                            Expertise & <br />
                            <span className="text-primary">Technologies</span>
                        </h3>
                    </div>
                    <div className="text-right hidden md:block">
                        <span className="text-slate-500 text-sm">Always learning, always building.</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="glass p-8 rounded-3xl hover:border-primary/50 transition-colors group">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_#39FF14]"></span>
                            <h4 className="text-xl font-bold text-slate-900 dark:text-white">Front End</h4>
                        </div>
                        <ul className="space-y-3 text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-300 transition-colors">
                            <li>React & Next.js</li>
                            <li>Tailwind CSS</li>
                            <li>TypeScript & Javascript</li>
                        </ul>
                    </div>

                    <div className="glass p-8 rounded-3xl hover:border-primary/50 transition-colors group">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_#39FF14]"></span>
                            <h4 className="text-xl font-bold text-slate-900 dark:text-white">AI & Emerging</h4>
                        </div>
                        <ul className="space-y-3 text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-300 transition-colors">
                            <li>Gemini AI studio</li>
                            <li>OpenAI API</li>
                            <li>Generative UI</li>
                            <li>Prompt Engineering</li>
                        </ul>
                    </div>

                    <div className="glass p-8 rounded-3xl hover:border-primary/50 transition-colors group">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_#39FF14]"></span>
                            <h4 className="text-xl font-bold text-slate-900 dark:text-white">Backend & Dev</h4>
                        </div>
                        <ul className="space-y-3 text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-300 transition-colors">
                            <li>Node.js / Python</li>
                            <li>PostgreSQL / MongoDB</li>
                            <li>Vercel / AWS</li>
                            <li>Git & GitHub</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
