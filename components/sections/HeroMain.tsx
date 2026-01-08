"use client";

import { Button } from "@/components/ui/button";
import { MoveRight, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";

export function HeroMain() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-ember/20 blur-[120px] rounded-full opacity-30 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center relative z-10">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-300 backdrop-blur-sm mb-8"
                >
                    <span className="flex h-2 w-2 rounded-full bg-ember animate-pulse"></span>
                    <span>Ryze AI 2.0 is now live</span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="max-w-4xl text-5xl md:text-7xl font-bold font-display text-white tracking-tight leading-[1.1] mb-6"
                >
                    The Autonomous AI <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-ember to-orange-400">
                        Media Buyer.
                    </span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-2xl text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed"
                >
                    Stop manual optimization. Ryze autonomously manages your budget, bids, and creative testing across Meta & Google 24/7.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
                >
                    <Button size="lg" className="w-full sm:w-auto h-12 gap-2">
                        Audit My Account <MoveRight className="h-4 w-4" />
                    </Button>
                    <Button variant="secondary" size="lg" className="w-full sm:w-auto h-12 gap-2">
                        <PlayCircle className="h-5 w-5" /> Watch Demo
                    </Button>
                </motion.div>

                {/* Dashboard Visualization Placeholder */}
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="mt-20 w-full max-w-5xl rounded-xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm shadow-2xl overflow-hidden aspect-[16/9] relative group"
                >
                    {/* Fake UI Elements for visual */}
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/50 to-void/50" />
                    <div className="absolute top-4 left-4 right-4 h-8 bg-white/5 rounded-md flex items-center px-4 gap-2">
                        <div className="h-3 w-3 rounded-full bg-red-500/50" />
                        <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                        <div className="h-3 w-3 rounded-full bg-green-500/50" />
                    </div>

                    {/* Center Content simulating a chart */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-zinc-600 font-mono text-sm">[ Dashboard Simulation UI ]</p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
