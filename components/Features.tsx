import { LayoutDashboard, Calendar, Settings, List, Check } from "lucide-react";
import Image from "next/image";

export default function Features() {
    return (
        <section id="features" className="py-24 relative bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-extrabold mb-4">Fitur Lengkap, Bisnis Makin Mantap</h2>
                    <p className="text-gray-500">
                        Semua yang Anda butuhkan untuk menjalankan operasional laundry sepatu, didesain semudah mungkin.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* Card 1: Dashboard */}
                    <div className="md:col-span-2 group relative overflow-hidden bg-white rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition">
                        <div className="p-8">
                            <div className="bg-teal-100 w-12 h-12 rounded-xl flex items-center justify-center text-teal-600 mb-4 group-hover:scale-110 transition">
                                <LayoutDashboard className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Dashboard Real-time</h3>
                            <p className="text-gray-500 mb-6">
                                Pantau Profit Bersih harian dan sisa stok packaging (Dust Bag/Goodie Bag) secara instan. Notifikasi "Low
                                Stock" otomatis muncul jika persediaan menipis.
                            </p>
                        </div>
                        <div className="ml-8">
                            <Image
                                src="/assets/dashboard.png"
                                alt="Dashboard"
                                width={800}
                                height={500}
                                className="w-full shadow-lg rounded-t-lg transition transform group-hover:-translate-y-2"
                            />
                        </div>
                    </div>

                    {/* Card 2: Calendar */}
                    <div className="group bg-indigo-50 rounded-3xl shadow-xl border border-indigo-100 hover:shadow-2xl transition overflow-hidden">
                        <div className="p-8">
                            <div className="bg-indigo-200 w-12 h-12 rounded-xl flex items-center justify-center text-indigo-700 mb-4">
                                <Calendar className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Kalender Jadwal</h3>
                            <p className="text-gray-600 text-sm">
                                Lihat deadline order dalam tampilan kalender yang rapi. Jangan sampai ada order yang terlewat!
                            </p>
                        </div>
                        <div className="w-4/5 mx-auto">
                            <Image
                                src="/assets/calendar.png"
                                alt="Calendar"
                                width={300}
                                height={300}
                                className="w-full shadow-lg rounded-t-lg transition transform group-hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Card 3: White Label (Settings) */}
                    <div className="group bg-gray-900 text-white rounded-3xl shadow-xl hover:shadow-2xl transition overflow-hidden">
                        <div className="p-8 relative z-10">
                            <div className="bg-gray-800 w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4">
                                <Settings className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Full White Label</h3>
                            <p className="text-gray-400 text-sm">
                                Upload <b>Logo</b> dan <b>Nama Toko</b> Anda sendiri. Aplikasi ini 100% jadi milik brand Anda, tanpa
                                embel-embel developer.
                            </p>
                        </div>
                        <div className="relative h-48 mt-[-20px] flex justify-end">
                            <div className="w-3/4">
                                <Image
                                    src="/assets/settings.png"
                                    alt="Settings"
                                    width={400}
                                    height={300}
                                    className="shadow-lg rounded-tl-lg border-l border-t border-gray-700 transition transform group-hover:-translate-x-2"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Card 4: Order Status */}
                    <div className="md:col-span-2 group bg-white rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition overflow-hidden flex flex-col md:flex-row items-center">
                        <div className="p-8 md:w-1/2">
                            <div className="bg-red-100 w-12 h-12 rounded-xl flex items-center justify-center text-red-600 mb-4">
                                <List className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Status Order Intuitif</h3>
                            <p className="text-gray-500 mb-4">
                                Warna kartu berubah sesuai status: <span className="text-red-500 font-bold">Waiting</span>,{" "}
                                <span className="text-blue-500 font-bold">Washing</span>, atau{" "}
                                <span className="text-green-500 font-bold">Ready</span>. Salah pencet? Ada fitur VOID/Batal.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex gap-2">
                                    <Check className="w-4 h-4 text-green-500" /> Auto Hitung Total Harga
                                </li>
                                <li className="flex gap-2">
                                    <Check className="w-4 h-4 text-green-500" /> Integrasi WhatsApp Button
                                </li>
                            </ul>
                        </div>
                        <div className="md:w-1/2 p-6">
                            <Image
                                src="/assets/order_detail.png"
                                alt="Order Detail"
                                width={500}
                                height={400}
                                className="w-full shadow-lg rounded-lg transform rotate-2 hover:rotate-0 transition"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
