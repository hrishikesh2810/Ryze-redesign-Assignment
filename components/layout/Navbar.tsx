"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-void/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-ember text-white">
                        <Zap className="h-5 w-5 fill-current" />
                    </div>
                    <span className="text-xl font-bold font-display text-white tracking-tight">
                        Ryze
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="/features" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                        Features
                    </Link>
                    <Link href="/pricing" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                        Pricing
                    </Link>
                    <Link href="/about" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                        About
                    </Link>
                </div>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <Link href="/login" className="text-sm font-medium text-white hover:text-ember transition-colors">
                        Log in
                    </Link>
                    <Button size="sm">Get Started</Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-b border-white/5 bg-void px-4 pb-4"
                    >
                        <div className="flex flex-col gap-4 py-4">
                            <Link
                                href="/features"
                                className="text-sm font-medium text-zinc-400 hover:text-white"
                                onClick={() => setIsOpen(false)}
                            >
                                Features
                            </Link>
                            <Link
                                href="/pricing"
                                className="text-sm font-medium text-zinc-400 hover:text-white"
                                onClick={() => setIsOpen(false)}
                            >
                                Pricing
                            </Link>
                            <Link
                                href="/about"
                                className="text-sm font-medium text-zinc-400 hover:text-white"
                                onClick={() => setIsOpen(false)}
                            >
                                About
                            </Link>
                            <div className="flex flex-col gap-3 pt-4 border-t border-white/5">
                                <Link
                                    href="/login"
                                    className="text-sm font-medium text-center text-zinc-400 hover:text-white"
                                >
                                    Log in
                                </Link>
                                <Button className="w-full">Get Started</Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
