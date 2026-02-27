export default function About() {
    return (
        <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                    <div className="aspect-square glass rounded-3xl flex items-center justify-center relative overflow-hidden group">
                        <div className="relative z-10 text-center p-8">
                            <span className="material-icons-round text-primary text-6xl mb-4">school</span>
                            <h4 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">CS Student</h4>
                            <p className="text-slate-500 dark:text-slate-400">Nairobi, Kenya</p>
                        </div>
                    </div>
                </div>

                <div className="order-1 lg:order-2 space-y-6">
                    <span className="text-primary font-mono tracking-widest uppercase">/ Biography</span>
                    <h3 className="text-4xl font-display font-bold text-slate-900 dark:text-white">
                        Passionate about <span className="text-primary">Rural Tech</span> Empowerment
                    </h3>
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                        Currently pursuing Computer Science with a focus on how AI can bridge education gaps. My most proud work involves developing specialized web solutions for rural schools in Kenya, ensuring that modern educational resources are accessible regardless of geography.
                    </p>
                    <div className="grid grid-cols-2 gap-6 pt-6">
                        <div>
                            <div className="text-2xl font-bold text-primary">Web Dev</div>
                            <div className="text-sm text-slate-500">React & Modern UI</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-primary">AI Agentic</div>
                            <div className="text-sm text-slate-500">LLM Integration</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
