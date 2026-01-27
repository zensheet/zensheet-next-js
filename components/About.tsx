import React from "react";
import { Download, Smartphone, ShieldCheck } from "lucide-react";

export default function About() {
    return (
        <section className="py-24 bg-white border-t border-slate-50" id="features">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-12 text-center max-w-6xl mx-auto">
                    {/* Feature 1 */}
                    <div className="space-y-4">
                        <div className="flex justify-center mb-6">
                            <Download className="w-8 h-8 text-slate-700" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold text-[#0B1221]">Instant Clarity</h3>
                        <p className="text-slate-500 leading-relaxed max-w-xs mx-auto">
                            Akses langsung ke tools Anda setelah pembayaran. Mulai menata hidup detik ini juga.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="space-y-4">
                        <div className="flex justify-center mb-6">
                            <Smartphone className="w-8 h-8 text-slate-700" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold text-[#0B1221]">Anywhere Peace</h3>
                        <p className="text-slate-500 leading-relaxed max-w-xs mx-auto">
                            Desain responsif yang indah, akses dari mana saja dengan perasaan tenang.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="space-y-4">
                        <div className="flex justify-center mb-6">
                            <ShieldCheck className="w-8 h-8 text-slate-700" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold text-[#0B1221]">Secure & Trusted</h3>
                        <p className="text-slate-500 leading-relaxed max-w-xs mx-auto">
                            Transaksi aman via Lynk.id. Privasi dan keamanan data Anda adalah prioritas.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
