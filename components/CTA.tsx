import { ShoppingCart } from "lucide-react";

export default function CTA() {
    return (
        <section className="py-24 bg-gray-900 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Siap Mengelola Laundry Lebih Profesional?</h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
                    Miliki aplikasi ZenSheet sekarang. Sekali bayar, milik selamanya. Tanpa biaya langganan bulanan.
                </p>
                <a
                    href="https://wa.me/6281234567890"
                    className="inline-flex items-center gap-3 px-10 py-5 bg-teal-500 hover:bg-teal-400 text-white font-bold text-xl rounded-full shadow-lg shadow-teal-500/30 transition transform hover:scale-105"
                >
                    <ShoppingCart className="w-6 h-6" /> Beli Aplikasi Sekarang
                </a>
                <p className="mt-6 text-sm text-gray-500">Garansi Support • Instalasi Mudah • 100% Aman</p>
            </div>
        </section>
    );
}
