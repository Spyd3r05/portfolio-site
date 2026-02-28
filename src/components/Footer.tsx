export default function Footer() {
    return (
        <footer id="contact" className="py-24 px-6 border-t border-slate-200 dark:border-white/5 glass transition-colors relative z-10">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
                <div className="space-y-6">
                    <h3 className="text-5xl font-display font-bold text-slate-900 dark:text-white">
                        Let's <span className="text-primary">Connect</span>
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 max-w-md">
                        Open for collaboration on AI initiatives, frontend development or educational tech projects.
                    </p>

                    <div className="space-y-3">
                        <a
                            href="mailto:agnesnzivu05@gmail.com"
                            className="flex items-center gap-3 group text-slate-700 dark:text-white"
                        >
                            <span className="material-icons-round text-primary p-2 rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-black transition-all">
                                mail
                            </span>
                            <span className="font-medium hover:text-primary transition-colors">
                                agnesnzivu05@gmail.com
                            </span>
                        </a>
                        <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                            <span className="material-icons-round text-primary p-2 rounded-full bg-primary/10">
                                location_on
                            </span>
                            <span>Nairobi, Kenya</span>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-auto">
                    <div className="glass p-8 rounded-3xl w-full md:min-w-[400px]">
                        <h4 className="font-bold mb-6 text-slate-900 dark:text-white">Quick Message</h4>
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full bg-white/50 dark:bg-black/20 border-slate-300 dark:border-white/10 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary transition-all text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-white/30 p-3 outline-none"
                            />
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full bg-white/50 dark:bg-black/20 border-slate-300 dark:border-white/10 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary transition-all text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-white/30 p-3 outline-none"
                            />
                            <textarea
                                rows={4}
                                placeholder="Tell me about your project"
                                className="w-full bg-white/50 dark:bg-black/20 border-slate-300 dark:border-white/10 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary transition-all text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-white/30 p-3 outline-none"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full py-4 bg-primary text-black font-bold rounded-xl hover:shadow-[0_0_20px_rgba(57,255,20,0.4)] transition-all"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
                <p>© 2026 NZIVUMUENI. All rights reserved.</p>
                <div className="flex gap-6">
                    <a href="https://github.com/Spyd3r05" className="hover:text-primary transition-colors">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/nzivuagnes/" className="hover:text-primary transition-colors">
                        LinkedIn
                    </a>
                    <a href="https://x.com/nzivumueni" className="hover:text-primary transition-colors">
                        Twitter
                    </a>
                </div>
            </div>
        </footer>
    );
}
