"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-void selection:bg-ember selection:text-white">
            <Navbar />

            <section className="pt-32 pb-24 container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h1 className="text-4xl md:text-5xl font-bold font-display text-white">
                        Driven by data. <br />
                        Obsessed with results.
                    </h1>

                    <div className="prose prose-invert prose-lg text-zinc-400">
                        <p>
                            Ryze was founded by a team of ex-Meta and Google engineers who realized that 90% of a media buyer's job could be automated.
                        </p>
                        <p>
                            Traditional agencies are slow, expensive, and rely on human intuition. We built Ryze to bring the power of algorithmic trading to the world of performance marketing.
                        </p>
                        <p>
                            Our mission is to help brands scale profitably by removing the guesswork from ad optimization.
                        </p>
                    </div>

                    <div className="pt-8">
                        <Button size="lg">Join the Team</Button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
