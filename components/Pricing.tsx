import { Check, X } from "lucide-react";

export default function Pricing() {
    return (
        <section className="py-24 bg-white" id="pricing">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1 bg-[#D1FBEF] text-[#006C5B] rounded-full text-[11px] font-bold tracking-[0.15em] uppercase mb-4">
                        NEW SERVICE
                    </div>
                    <h2 className="text-3xl md:text-4xl font-sans font-bold mb-3 text-[#0B1221]">
                        Paket Branding Digital UMKM
                    </h2>
                    <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                        Punya aplikasi canggih masa belum punya website? Pilih paket website sesuai budget Anda.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-start">
                    {/* Intro Package */}
                    <div className="bg-white rounded-2xl p-8 border border-slate-200">
                        <div className="mb-6">
                            <div className="mb-4">
                                <span className="text-4xl font-serif font-bold text-slate-900">Rp 350.000</span>
                                <span className="text-lg text-slate-400 line-through ml-3 decoration-slate-400">Rp 499.000</span>
                            </div>
                            <p className="text-sky-600 text-xs font-bold mb-4">*Sudah Termasuk Domain .MY.ID + Hosting</p>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Cukup untuk landing page sederhana. Cocok untuk yang baru coba-coba online.
                            </p>
                        </div>

                        <ul className="space-y-4 mb-8 text-sm">
                            <li className="flex gap-3 text-slate-700">
                                <Check className="w-5 h-5 text-sky-500 shrink-0" /> Free Domain .MY.ID (1 Tahun)
                            </li>
                            <li className="flex gap-3 text-slate-700">
                                <Check className="w-5 h-5 text-sky-500 shrink-0" /> Landing Page 1 Halaman
                            </li>
                            <li className="flex gap-3 text-slate-700">
                                <Check className="w-5 h-5 text-sky-500 shrink-0" /> Design Standard
                            </li>
                            <li className="flex gap-3 text-slate-700">
                                <Check className="w-5 h-5 text-sky-500 shrink-0" /> Tombol Chat WhatsApp
                            </li>
                            <li className="flex gap-3 text-slate-400 line-through decoration-slate-300">
                                <X className="w-5 h-5 shrink-0" /> Login Admin (Edit Sendiri)
                            </li>
                            <li className="flex gap-3 text-slate-400 line-through decoration-slate-300">
                                <X className="w-5 h-5 shrink-0" /> Website 3 Halaman
                            </li>
                            <li className="flex gap-3 text-slate-400 line-through decoration-slate-300">
                                <X className="w-5 h-5 shrink-0" /> Setup SEO & Google Maps
                            </li>
                        </ul>

                        <a href="https://wa.me/6281290650963?text=Halo%20Admin,%20saya%20tertarik%20Paket%20Intro%20Rp350rb" className="block w-full py-3 bg-white hover:bg-slate-50 text-slate-900 font-bold text-center rounded-xl border border-slate-200 transition">
                            Pilih Intro
                        </a>
                    </div>

                    {/* Best Seller Package */}
                    <div className="bg-[#0f3d3e] text-white rounded-2xl p-8 shadow-2xl relative">
                        <div className="mb-6">
                            <div className="mb-4">
                                <span className="text-4xl font-serif font-bold text-white">Rp 999.000</span>
                                <span className="text-lg text-slate-400 line-through ml-3 decoration-slate-500">Rp 1.500.000</span>
                            </div>
                            <p className="text-[#3b8f88] text-xs font-bold mb-4 uppercase tracking-wider">*Sudah Termasuk Domain .COM + Hosting</p>
                            <p className="text-slate-300 text-sm leading-relaxed">
                                Full branding profesional. Bisnis Anda langsung terlihat bonafit dan terpercaya.
                            </p>
                        </div>

                        <ul className="space-y-4 mb-8 text-sm">
                            <li className="flex gap-3 items-start">
                                <div className="mt-0.5 w-5 h-5 rounded-full border border-yellow-500 flex items-center justify-center shrink-0">
                                    <Check className="w-3 h-3 text-yellow-500" strokeWidth={4} />
                                </div>
                                <span className="font-bold">Free Domain .COM (1 Tahun)</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <div className="mt-0.5 w-5 h-5 rounded-full border border-yellow-500 flex items-center justify-center shrink-0">
                                    <Check className="w-3 h-3 text-yellow-500" strokeWidth={4} />
                                </div>
                                <span>Hosting Cloud Gratis Selamanya</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <div className="mt-0.5 w-5 h-5 rounded-full border border-yellow-500 flex items-center justify-center shrink-0">
                                    <Check className="w-3 h-3 text-yellow-500" strokeWidth={4} />
                                </div>
                                <span>Storage 1 GB (Database & Assets via Supabase)</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <div className="mt-0.5 w-5 h-5 rounded-full border border-yellow-500 flex items-center justify-center shrink-0">
                                    <Check className="w-3 h-3 text-yellow-500" strokeWidth={4} />
                                </div>
                                <span>Website s/d 3 Halaman</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <div className="mt-0.5 w-5 h-5 rounded-full border border-yellow-500 flex items-center justify-center shrink-0">
                                    <Check className="w-3 h-3 text-yellow-500" strokeWidth={4} />
                                </div>
                                <span>Login Admin / CMS Custom (Bisa edit konten sendiri)</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <div className="mt-0.5 w-5 h-5 rounded-full border border-yellow-500 flex items-center justify-center shrink-0">
                                    <Check className="w-3 h-3 text-yellow-500" strokeWidth={4} />
                                </div>
                                <span>Design Premium & SEO Basic</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <div className="mt-0.5 w-5 h-5 rounded-full border border-yellow-500 flex items-center justify-center shrink-0">
                                    <Check className="w-3 h-3 text-yellow-500" strokeWidth={4} />
                                </div>
                                <span>Setup Google Maps</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <div className="mt-0.5 w-5 h-5 rounded-full border border-yellow-500 flex items-center justify-center shrink-0">
                                    <Check className="w-3 h-3 text-yellow-500" strokeWidth={4} />
                                </div>
                                <span className="font-bold">Garansi Error & Support Prioritas</span>
                            </li>
                        </ul>

                        <a href="https://wa.me/6281290650963?text=Halo%20Admin,%20saya%20tertarik%20Paket%20Terima%20Beres%20Rp999rb" className="block w-full py-4 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold text-center rounded-xl shadow-lg transition transform hover:-translate-y-1">
                            Pesan "Terima Beres"
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
