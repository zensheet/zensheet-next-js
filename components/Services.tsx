import Image from "next/image";

export default function Services() {
    return (
        <section className="py-20 bg-teal-50">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                    <Image
                        src="/assets/services.png"
                        alt="Flexible Services"
                        width={600}
                        height={600}
                        className="rounded-3xl shadow-2xl border-4 border-white -rotate-1 hover:rotate-0 transition duration-500"
                    />
                </div>
                <div className="order-1 md:order-2 space-y-6">
                    <h2 className="text-3xl font-extrabold text-teal-900">Atur Layanan Suka-Suka</h2>
                    <p className="text-gray-600 text-lg">
                        Punya layanan "Deep Clean"? "Unyellowing"? Atau "Repaint"? Masukkan semuanya di menu Pengaturan.
                    </p>
                    <div className="space-y-4">
                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow text-teal-600 font-bold text-xl shrink-0">
                                1
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">Tambah Layanan Tanpa Batas</h4>
                                <p className="text-sm text-gray-500">Input nama layanan dan harga, langsung muncul di menu kasir.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow text-teal-600 font-bold text-xl shrink-0">
                                2
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">Hapus / Edit Kapan Saja</h4>
                                <p className="text-sm text-gray-500">
                                    Harga berubah? Hapus yang lama, buat yang baru dalam hitungan detik.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
