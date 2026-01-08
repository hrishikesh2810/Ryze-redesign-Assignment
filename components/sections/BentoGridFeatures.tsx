import {
    Zap,
    Search,
    BarChart3,
    TrendingUp,
    ShieldCheck,
    MousePointer2
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
    {
        title: "Autonomous Budget Pacing",
        description: "Our AI shifts budget between Meta and Google in real-time based on minute-by-minute ROAS performance.",
        icon: TrendingUp,
        className: "md:col-span-2",
    },
    {
        title: "Creative Analysis",
        description: "Computer vision 'sees' your ad creative to identify winning visual patterns.",
        icon: Search,
        className: "md:col-span-1",
    },
    {
        title: "Smart Bidding",
        description: "Predictive bidding algorithms that aim for highest conversion value.",
        icon: MousePointer2,
        className: "md:col-span-1",
    },
    {
        title: "Cross-Channel Audit",
        description: "Instantly identifies wasted spend and audience overlap across all your active channels.",
        icon: ShieldCheck,
        className: "md:col-span-2",
    },
];

export function BentoGridFeatures() {
    return (
        <section className="py-24 bg-void relative">
            <div className="container mx-auto px-4 md:px-6">

                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
                        Beyond Human Capabilities.
                    </h2>
                    <p className="text-zinc-400 text-lg">
                        Ryze executes thousands of optimization decisions daily. No human media buyer can compete with this speed.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className={cn(
                                "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-colors",
                                feature.className
                            )}
                        >
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ember/10 text-ember group-hover:text-white group-hover:bg-ember transition-colors">
                                <feature.icon className="h-6 w-6" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold text-white font-display">
                                {feature.title}
                            </h3>
                            <p className="text-zinc-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
