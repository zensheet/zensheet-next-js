import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-sky-50/30">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white to-transparent -z-10 opacity-60"></div>

            <div className="container mx-auto px-6 text-center">
                <div className="max-w-4xl mx-auto space-y-8">
                    {/* Badge */}
                    <div className="inline-block px-6 py-2 bg-sky-100 text-sky-500 rounded-full text-xs font-bold tracking-widest uppercase mb-4 animate-fade-in">
                        New Collection 2026
                    </div>

                    {/* Headline */}
                    <h1 className="text-5xl md:text-7xl font-serif text-slate-900 leading-[1.1] animate-fade-in delay-200">
                        Organize with Peace,<br />
                        Grow with <span className="text-sky-500 italic">Ease.</span>
                    </h1>

                    {/* Subtext */}
                    <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto font-sans animate-fade-in delay-300">
                        Koleksi tools digital premium untuk membantu Anda menciptakan keseimbangan dalam karir, keuangan, dan kehidupan.
                    </p>

                    {/* Buttons */}
                    <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center font-sans animate-fade-in delay-500">
                        <a href="#products" className="px-8 py-4 bg-slate-800 hover:bg-slate-900 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                            Lihat Koleksi
                        </a>
                        <a href="#faq" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-lg hover:bg-gray-50 transition-all hover:border-slate-300 shadow-sm">
                            Pelajari Lebih Lanjut
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
