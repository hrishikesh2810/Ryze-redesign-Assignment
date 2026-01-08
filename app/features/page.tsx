"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Eye, TrendingUp, Layers, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const capabilities = [
    {
        icon: Eye,
        title: "Computer Vision Analysis",
        description: "Ryze scans every frame of your video and image ads. It identifies objects, faces, colors, and text density to correlate visual elements with conversion performance.",
        image: "bg-gradient-to-br from-purple-900/50 to-void border-purple-500/20"
    },
    {
        icon: TrendingUp,
        title: "Real-Time Budget Liquidator",
        description: "Unlike rule-based systems, Ryze uses reinforcement learning to move budget every 15 minutes. It spots trends before they peak and cuts spend on fatigue before it hurts ROAS.",
        image: "bg-gradient-to-br from-ember/20 to-void border-ember/20"
    },
    {
        icon: Layers,
        title: "Cross-Platform Intelligence",
        description: "Your data isn't siloed. Ryze uses insights from your Facebook ad performance to instantly inform your Google Search bidding strategy, unifying your funnel.",
        image: "bg-gradient-to-br from-blue-900/50 to-void border-blue-500/20"
    }
];

export default function FeaturesPage() {
    return (
        <main className="min-h-screen bg-void selection:bg-ember selection:text-white">
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-16 container mx-auto px-4 md:px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-6">
                    Under the Hood.
                </h1>
                <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                    See how our autonomous agent makes decisions, executes changes, and beats human media buyers.
                </p>
            </section>

            {/* Feature Deep Dives */}
            <div className="space-y-24 pb-24 container mx-auto px-4 md:px-6">
                {capabilities.map((item, idx) => (
                    <section key={idx} className={cn(
                        "flex flex-col md:flex-row gap-12 items-center",
                        idx % 2 === 1 ? "md:flex-row-reverse" : ""
                    )}>
                        {/* Text Side */}
                        <motion.div
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="flex-1 space-y-6"
                        >
                            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-ember">
                                <item.icon className="h-6 w-6" />
                            </div>
                            <h2 className="text-3xl font-bold font-display text-white">
                                {item.title}
                            </h2>
                            <p className="text-zinc-400 text-lg leading-relaxed">
                                {item.description}
                            </p>
                            <ul className="space-y-3">
                                {[1, 2, 3].map((i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-zinc-300">
                                        <CheckCircle className="h-4 w-4 text-emerald-500" />
                                        <span>Enterprise-grade security and data control.</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Visual Side Placeholder */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className={cn(
                                "flex-1 w-full aspect-square md:aspect-[4/3] rounded-3xl border backdrop-blur-sm shadow-2xl relative overflow-hidden group",
                                item.image,
                                "border-white/10"
                            )}
                        >
                            <div className="absolute inset-0 flex items-center justify-center text-white/20 font-mono text-sm uppercase tracking-widest">
                                [ {item.title} Visualization ]
                            </div>
                        </motion.div>
                    </section>
                ))}
            </div>

            <Footer />
        </main>
    );
}
