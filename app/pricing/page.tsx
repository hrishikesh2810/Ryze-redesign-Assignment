"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const tiers = [
    {
        name: "Starter",
        price: "$299",
        desc: "For brands spending <$10k/mo",
        features: ["1 Ad Account", "Basic Reporting", "24/7 Optimization", "Email Support"],
        popular: false,
    },
    {
        name: "Growth",
        price: "$599",
        desc: "For brands spending <$50k/mo",
        features: ["3 Ad Accounts", "Creative Analysis", "Competitor Intel", "Priority Support", "Slack Integration"],
        popular: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        desc: "Unlimited spend & accounts",
        features: ["Unlimited Accounts", "Custom AI Models", "Dedicated Success Manager", "Audit Logs", "SLA Guarantee"],
        popular: false,
    }
];

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-void selection:bg-ember selection:text-white">
            <Navbar />

            <section className="pt-32 pb-24 container mx-auto px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-6">
                        Simple, transparent pricing.
                    </h1>
                    <p className="text-zinc-400 text-lg">
                        No hidden fees. No percentage of ad spend for the Starter tier.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {tiers.map((tier) => (
                        <div
                            key={tier.name}
                            className={cn(
                                "relative rounded-3xl p-8 border flex flex-col items-start gap-6",
                                tier.popular
                                    ? "bg-zinc-900 border-ember shadow-[0_0_40px_-10px_rgba(255,72,1,0.3)]"
                                    : "bg-white/[0.02] border-white/10"
                            )}
                        >
                            {tier.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-ember text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                    Most Popular
                                </div>
                            )}

                            <div>
                                <h3 className="text-lg font-bold text-white mb-2">{tier.name}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-white tracking-tight">{tier.price}</span>
                                    <span className="text-zinc-500">/mo</span>
                                </div>
                                <p className="text-sm text-zinc-400 mt-2">{tier.desc}</p>
                            </div>

                            <div className="h-px w-full bg-white/10" />

                            <ul className="space-y-4 flex-1">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-3 text-sm text-zinc-300">
                                        <Check className="h-4 w-4 text-ember" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant={tier.popular ? "default" : "secondary"}
                                className="w-full"
                            >
                                Choose {tier.name}
                            </Button>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
