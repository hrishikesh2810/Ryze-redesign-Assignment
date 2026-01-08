export function LogoTicker() {
    const logos = [
        { name: "Acme Corp", color: "bg-red-500" },
        { name: "Quantum", color: "bg-blue-500" },
        { name: "Echo", color: "bg-green-500" },
        { name: "Celestial", color: "bg-purple-500" },
        { name: "Pulse", color: "bg-yellow-500" },
        { name: "Apex", color: "bg-orange-500" },
    ];

    return (
        <section className="py-10 border-y border-white/5 bg-void/50 backdrop-blur-sm overflow-hidden w-full">
            <div className="container mx-auto px-4 md:px-6">
                <p className="text-center text-sm font-medium text-zinc-500 mb-8 uppercase tracking-widest">
                    Trusted by high-growth brands
                </p>

                <div className="relative flex w-full overflow-hidden mask-gradient-x">
                    {/* We duplicate the slider to create an infinite loop effect */}
                    <div className="flex animate-marquee whitespace-nowrap gap-16 min-w-full items-center justify-around px-8">
                        {logos.map((logo, idx) => (
                            <div key={idx} className="flex items-center gap-2 group cursor-pointer grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100">
                                <div className={`h-6 w-6 rounded-md ${logo.color}`} />
                                <span className="text-lg font-bold text-white font-display">{logo.name}</span>
                            </div>
                        ))}
                        {logos.map((logo, idx) => (
                            <div key={`dup-${idx}`} className="flex items-center gap-2 group cursor-pointer grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100">
                                <div className={`h-6 w-6 rounded-md ${logo.color}`} />
                                <span className="text-lg font-bold text-white font-display">{logo.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
