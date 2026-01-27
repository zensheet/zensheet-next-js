import { MessageCircle } from "lucide-react";

export default function ServiceBanner() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="bg-fuchsia-50 rounded-3xl p-8 md:p-12 shadow-xl border-2 border-fuchsia-200 flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
                    <div className="flex-1 space-y-6">
                        <span className="inline-block px-3 py-1 bg-fuchsia-100 text-fuchsia-700 rounded-full text-xs font-bold tracking-wider uppercase">
                            PREMIUM ORCHESTRATION
                        </span>
                        <h2 className="text-3xl font-bold text-gray-900">Butuh Sistem, Bukan Cuma Template?</h2>
                        <p className="text-lg text-gray-600">
                            Kadang bisnis butuh yang spesifik. Saya bantu buatkan <strong>Custom Business App</strong> (Logistik/CRM/POS) yang pas dengan workflow Anda. Terintegrasi Google Sheets & Database.
                        </p>
                        <div>
                            <a
                                href="https://wa.me/6281290650963?text=Halo%20Mas,%20saya%20tertarik%20Hire%20untuk%20Project%20Custom."
                                target="_blank"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold rounded-xl transition shadow-lg shadow-fuchsia-500/20"
                            >
                                <MessageCircle className="w-5 h-5" /> Konsultasi Project
                            </a>
                        </div>
                    </div>
                    <div className="shrink-0 relative">
                        <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center animate-pulse border-4 border-fuchsia-100">
                            <div className="text-5xl">💼</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
