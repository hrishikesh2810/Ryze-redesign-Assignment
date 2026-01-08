import Link from "next/link";
import { Zap } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-void pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
                    <div className="col-span-2 lg:col-span-2 pr-8">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-ember text-white">
                                <Zap className="h-5 w-5 fill-current" />
                            </div>
                            <span className="text-xl font-bold font-display text-white tracking-tight">
                                Ryze
                            </span>
                        </Link>
                        <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
                            Ryze is the first autonomous AI media buyer. We help performance marketers scale faster by removing manual grunt work.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">Product</h4>
                        <ul className="space-y-2 text-sm text-zinc-400">
                            <li><Link href="#" className="hover:text-ember">Features</Link></li>
                            <li><Link href="#" className="hover:text-ember">Pricing</Link></li>
                            <li><Link href="#" className="hover:text-ember">Case Studies</Link></li>
                            <li><Link href="#" className="hover:text-ember">API</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-zinc-400">
                            <li><Link href="#" className="hover:text-ember">About</Link></li>
                            <li><Link href="#" className="hover:text-ember">Blog</Link></li>
                            <li><Link href="#" className="hover:text-ember">Careers</Link></li>
                            <li><Link href="#" className="hover:text-ember">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm text-zinc-400">
                            <li><Link href="#" className="hover:text-ember">Privacy</Link></li>
                            <li><Link href="#" className="hover:text-ember">Terms</Link></li>
                            <li><Link href="#" className="hover:text-ember">Security</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-zinc-600">
                        © {new Date().getFullYear()} Ryze AI Inc. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        {/* Social icons would go here */}
                    </div>
                </div>

            </div>
        </footer>
    );
}
