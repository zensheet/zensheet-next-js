import { ShoppingCart, Code2, MessageSquare } from "lucide-react";
import Image from "next/image";

export default function OtherProducts() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold mb-4 tracking-wide uppercase">
                        Special Offer
                    </div>
                    <h2 className="text-3xl font-extrabold mb-4 text-gray-900">Ingin Bisa Bikin Aplikasi Seperti Ini?</h2>
                    <p className="text-gray-500 text-lg">
                        Selain menyediakan ZenSheet, saya juga berbagi ilmu rahasia dan membuka jasa pembuatan aplikasi custom.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Ebook Card */}
                    <div className="group bg-indigo-50 hover:bg-indigo-100 rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center shadow-lg border border-indigo-100 transition duration-300">
                        <div className="relative shrink-0">
                            <div className="absolute inset-0 bg-indigo-600 blur-xl opacity-20 rounded-full"></div>
                            <Image
                                src="/assets/mockup_book_sitting.png"
                                alt="Ebook Cover"
                                width={160}
                                height={200}
                                className="relative w-32 md:w-40 shadow-2xl rounded-lg group-hover:scale-105 transition duration-500"
                            />
                        </div>
                        <div className="text-center md:text-left space-y-4 flex-1">
                            <div>
                                <div className="uppercase tracking-wider text-xs font-bold text-indigo-600 mb-1">New Release</div>
                                <h3 className="text-2xl font-bold text-gray-900 leading-tight">Ebook: Jago Bikin Aplikasi Tanpa Coding</h3>
                            </div>
                            <p className="text-sm text-gray-600">
                                Panduan "gila" membuat 10 aplikasi logistik/bisnis dalam 1 bulan hanya bermodal AI. <b>Studi kasus nyata.</b>
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start pt-2">
                                <div className="text-3xl font-extrabold text-gray-900">Rp 50rb</div>
                                <a
                                    href="http://lynk.id/exportimport/gg7z18l170y1/checkout/"
                                    target="_blank"
                                    className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-xl transition shadow-lg shadow-indigo-500/30 flex items-center gap-2"
                                >
                                    <ShoppingCart className="w-4 h-4" /> Beli Sekarang
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Service Card */}
                    <div className="group bg-teal-50 hover:bg-teal-100 rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center shadow-lg border border-teal-100 transition duration-300">
                        <div className="shrink-0">
                            <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-2xl flex items-center justify-center shadow-xl text-teal-600 border-4 border-teal-100 group-hover:scale-105 transition">
                                <Code2 className="w-16 h-16" />
                            </div>
                        </div>
                        <div className="text-center md:text-left space-y-4 flex-1">
                            <div>
                                <div className="uppercase tracking-wider text-xs font-bold text-teal-600 mb-1">Premium Service</div>
                                <h3 className="text-2xl font-bold text-gray-900 leading-tight">Jasa Aplikasi Custom</h3>
                            </div>
                            <p className="text-sm text-gray-600">
                                Butuh solusi instan & powerful? Saya buatkan aplikasi terintegrasi <b>Google Sheets / Database</b> untuk
                                bisnis Anda.
                            </p>
                            <div className="pt-2">
                                <a
                                    href="https://wa.me/6281290650963?text=Halo%20Mas%2C%20saya%20tertarik%20hire%20jasa%20pembuatan%20aplikasi%20custom."
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-teal-500 text-teal-700 hover:bg-teal-500 hover:text-white text-sm font-bold rounded-xl transition shadow-md"
                                >
                                    <MessageSquare className="w-4 h-4" /> Konsultasi Project
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
