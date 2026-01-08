"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const testimonials = [
    {
        quote: "Ryze replaced our entire media buying agency. The ROI lift was immediate.",
        author: "Sarah Jenkins",
        role: "CMO at TechFlow",
        metric: "3.5x ROAS",
    },
    {
        quote: "The creative analysis feature alone saved us 20 hours a week of manual tagging.",
        author: "Mike Chen",
        role: "Growth Lead at SaaSify",
        metric: "-40% CPA",
    },
    {
        quote: "I was skeptical about AI managing budget, but it reacts faster than any human can.",
        author: "Elena Rodriguez",
        role: "Founder at E-Comm Ultra",
        metric: "+120% Scale",
    },
];

export function Testimonials() {
    return (
        <section className="py-24 bg-void relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-ember/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10 w-full">
                <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-16 text-center">
                    Results speak for themselves.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-8 rounded-2xl flex flex-col justify-between min-h-[280px] hover:border-ember/30 transition-colors group"
                        >
                            <div>
                                <div className="text-4xl text-ember mb-4 opacity-50 font-serif">"</div>
                                <p className="text-lg text-zinc-300 mb-6 leading-relaxed">
                                    {t.quote}
                                </p>
                            </div>

                            <div className="flex items-center justify-between border-t border-white/5 pt-6">
                                <div>
                                    <div className="font-bold text-white text-sm">{t.author}</div>
                                    <div className="text-xs text-zinc-500">{t.role}</div>
                                </div>
                                <div className="bg-ember/10 text-ember px-3 py-1 rounded-full text-xs font-bold font-mono">
                                    {t.metric}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
