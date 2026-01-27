"use client";
import React from "react";
import Image from "next/image";
import { X, CheckCircle, BarChart3, Zap, CalendarCheck, Package, AlertTriangle, MessageCircle, Brain, List, TerminalSquare } from "lucide-react";

interface ProductDetailModalProps {
    product: any;
    isOpen: boolean;
    onClose: () => void;
}

export default function ProductDetailModal({ product, isOpen, onClose }: ProductDetailModalProps) {
    if (!isOpen || !product) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
            <div className="relative bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-200">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 bg-white/50 hover:bg-white rounded-full transition z-10"
                >
                    <X className="w-6 h-6 text-gray-600" />
                </button>

                {/* Content Switcher based on Product ID */}
                {product.id === "zenshoes" ? (
                    <ZenShoesDetails />
                ) : product.id === "antigravity" ? (
                    <AntigravityDetails />
                ) : product.id === "warung" ? (
                    <WarungDetails />
                ) : product.id === "sales" ? (
                    <SalesDetails />
                ) : product.id === "crm" ? (
                    <CrmDetails />
                ) : product.id === "ups" ? (
                    <UpsDetails />
                ) : product.id === "tax" ? (
                    <TaxDetails />
                ) : product.id === "ebook" ? (
                    <EbookDetails />
                ) : product.id === "padel" ? (
                    <PadelDetails />
                ) : (
                    <GenericDetails product={product} />
                )}
            </div>
        </div>
    );
}

function ZenShoesDetails() {
    return (
        <div className="pb-12">
            {/* Hero */}
            <div className="bg-teal-900 text-white p-8 md:p-12 relative overflow-hidden">
                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-1 space-y-4">
                        <div className="inline-block px-3 py-1 bg-teal-800 rounded-full border border-teal-600 text-teal-300 text-xs font-bold">
                            🚀 The Ultimate Shoes Laundry App
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Bukan Sekadar Aplikasi Kasir Biasa.</h2>
                        <p className="text-teal-100 opacity-90">ShoeTrack adalah <b>asisten pribadi</b> toko Anda. Fokus kembangkan bisnis, biarkan sistem yang mengurus operasional.</p>
                    </div>
                    <div className="w-full md:w-1/3">
                        <Image src="/images/zenshoes/cover_mockup.png" alt="ZenShoes" width={400} height={300} className="w-full object-contain drop-shadow-2xl" />
                    </div>
                </div>
            </div>

            {/* Features */}
            <div className="px-8 md:px-12 py-10 space-y-12">
                <FeatureBlock
                    icon={<BarChart3 className="w-6 h-6 text-green-600" />}
                    iconBg="bg-green-100"
                    title="Dashboard Profit Real-Time"
                    desc="Lihat keuntungan bersih otomatis (Omzet dikurangi pengeluaran harian). Pantau kesehatan bisnis Anda dalam satu pandangan."
                    image="/images/zenshoes/dashboard.png"
                />
                <FeatureBlock
                    icon={<Zap className="w-6 h-6 text-blue-600" />}
                    iconBg="bg-blue-100"
                    title="Input Order Kilat"
                    desc="Auto-complete data pelanggan lama. Gak perlu tanya nomor WA berkali-kali! Cukup ketik nama, data langsung muncul."
                    image="/images/zenshoes/order_detail.png"
                    reverse
                />
                <FeatureBlock
                    icon={<Package className="w-6 h-6 text-red-600" />}
                    iconBg="bg-red-100"
                    title="Kontrol Stok Otomatis"
                    desc="Stok packaging (dustbag/ziplock) berkurang otomatis tiap ada order. Sistem langsung memberi peringatan jika stok menipis."
                    image="/images/zenshoes/feature_restock.png"
                />
            </div>
        </div>
    );
}

function AntigravityDetails() {
    return (
        <div className="pb-12 bg-[#ffffff] text-slate-800">
            {/* Hero */}
            <div className="p-8 md:p-12 text-center relative overflow-hidden bg-white">
                <span className="inline-block px-4 py-1 mb-6 rounded-full bg-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest">
                    Free Preview
                </span>
                <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight text-slate-900">
                    The "Lazy" <span className="text-blue-600">Mindset</span>
                </h2>
                <h3 className="text-xl md:text-2xl text-slate-500 font-serif italic mb-8">
                    (Atau: Kenapa Aku Berhenti Belajar Syntax)
                </h3>

                <div className="max-w-3xl mx-auto space-y-6 text-lg leading-relaxed text-slate-600 text-left">
                    <p>
                        Jujur saja, <b>aku ini orang yang paling bodoh kalau urusan Matematika.</b> Jangankan disuruh ngerti algoritma coding yang njelimet, ngajarin anak PR matematika SD saja aku butuh effort luar biasa.
                    </p>
                    <p>
                        Tapi anehnya, aku punya "penyakit" yang mungkin teman-teman juga rasakan: <b>Aku suka banget sama dunia analisis.</b> Entah itu data penjualan, data pengeluaran bulanan, atau sekadar data nggak penting lainnya.
                    </p>

                    <div className="my-8 p-6 bg-orange-50 border-l-4 border-orange-500 rounded-r-xl italic text-orange-800">
                        "Di situlah aku sadar: Selama ini aku capek karena memaksa diriku menjadi TUKANG, padahal harusnya aku naik pangkat jadi MANDOR."
                    </div>

                    <h4 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Tukang vs Mandor (Project Manager)</h4>
                    <p>
                        Coba bayangkan kamu mau bangun rumah. Kalau kamu mau bangun rumah sendiri (tanpa tukang), kamu harus tahu takaran semen, cara pasang bata, dan nyambung kabel. Salah sedikit? Rumahmu roboh.
                    </p>
                    <p>
                        Itu yang terjadi saat aku belajar coding manual. Tapi, gimana kalau kamu jadi <b>Mandor</b>? Kamu tinggal teriak:
                    </p>
                    <p className="font-bold text-blue-700">
                        "Pak, saya mau tembok sebelah sini warnanya putih, tingginya 3 meter, dan ada jendela di tengahnya."
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 my-12">
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                            <Image src="/images/antigravity/ui_antigravity/01_two_panel_interface.png" alt="Interface" width={400} height={300} className="rounded-lg shadow-md mb-4 w-full" />
                            <h5 className="font-bold text-slate-900">Bengkel Ajaib (Antigravity)</h5>
                            <p className="text-sm text-slate-500 mt-2">Tempat kita menyuruh 'Tukang AI' bekerja 24 jam tanpa lelah.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                            <Image src="/images/antigravity/workflow_drab/05_debugging.png" alt="Debugging" width={400} height={300} className="rounded-lg shadow-md mb-4 w-full" />
                            <h5 className="font-bold text-slate-900">Debugging Semudah Screenshot</h5>
                            <p className="text-sm text-slate-500 mt-2">Error? Cukup screenshot, paste, dan AI akan memperbaikinya otomatis.</p>
                        </div>
                    </div>

                    <h4 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Apa yang akan Anda pelajari?</h4>
                    <ul className="space-y-4">
                        <li className="flex gap-3">
                            <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
                            <span><b>The Lazy Workflow:</b> Cara membuat aplikasi kompleks tanpa menulis satu baris kode pun.</span>
                        </li>
                        <li className="flex gap-3">
                            <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
                            <span><b>Prompt Copy-Paste:</b> Koleksi 'mantra' rahasia biar AI nurut.</span>
                        </li>
                        <li className="flex gap-3">
                            <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
                            <span><b>Studi Kasus Nyata:</b> Bedah dapur pembuatan ZenSheet & Kalkulator Logistik.</span>
                        </li>
                    </ul>

                </div>

                <div className="mt-12 flex justify-center">
                    <Image src="/images/cover_final_v2.png" alt="Cover" width={250} height={350} className="rounded-xl shadow-2xl shadow-blue-500/20 border-4 border-white transform rotate-2 hover:rotate-0 transition duration-500" />
                </div>

                <div className="mt-8">
                    <a href="http://lynk.id/exportimport/gg7z18l170y1/checkout/" target="_blank" className="inline-block px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-1">
                        Download Full Ebook (Rp 50rb)
                    </a>
                    <p className="text-sm text-slate-400 mt-4">Lifetime Updates • Studi Kasus Video • Prompt Library</p>
                </div>
            </div>
        </div>
    )
}

function WarungDetails() {
    return (
        <div className="pb-12 text-slate-900">
            {/* Hero */}
            <div className="bg-sky-900 text-white p-8 md:p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#0369a1_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-1 space-y-4">
                        <div className="inline-block px-3 py-1 bg-sky-800 rounded-full border border-sky-600 text-sky-300 text-xs font-bold">
                            ☕ 100% Offline & Ringan
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Kelola Warung Jadi Lebih Modern & Rapi.</h2>
                        <p className="text-sky-100 opacity-90">Aplikasi kasir tanpa install, tanpa ribet. Catat penjualan, cek stok, dan lihat untung rugi langsung dari HP atau Laptop.</p>
                    </div>
                    <div className="w-full md:w-1/3">
                        <Image src="/images/warung_app.png" alt="Warung App" width={400} height={300} className="w-full object-contain drop-shadow-2xl rounded-lg border-4 border-slate-800/20" />
                    </div>
                </div>
            </div>

            {/* Features */}
            <div className="px-8 md:px-12 py-10 space-y-12">
                <FeatureBlock
                    icon={<div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center font-bold">🛒</div>}
                    iconBg="bg-sky-100"
                    title="Kasir Cepat & Barcode"
                    desc="Scan barang pakai kamera HP atau barcode scanner. Transaksi hitungan detik, antrian pelanggan tidak menumpuk."
                    image="/images/warung_feat_settings.png"
                />
                <FeatureBlock
                    icon={<div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center font-bold">📦</div>}
                    iconBg="bg-orange-100"
                    title="Kelola Stok Otomatis"
                    desc="Stok berkurang otomatis saat terjual. Ada fitur 'Low Stock Alert' biar gak lupa belanja dagangan yang mau habis."
                    image="/images/warung_feat_stock.png"
                    reverse
                />
                <FeatureBlock
                    icon={<div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center font-bold">📈</div>}
                    iconBg="bg-green-100"
                    title="Laporan Omzet & Profit"
                    desc="Tahu persis berapa untung harian, mingguan, dan bulanan. Data tersaji dalam grafik yang mudah dibaca orang awam sekalipun."
                    image="/images/warung_feat_history.png"
                />
                <FeatureBlock
                    icon={<div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold">☁️</div>}
                    iconBg="bg-blue-100"
                    title="Cloud Backup (Google Sheets)"
                    desc="Takut HP hilang atau rusak? Tenang, data bisa dibackup ke Google Sheets pribadi Anda. Aman dan bisa diakses dari mana saja."
                    image="/images/warung_feat_receipt.png"
                    reverse
                />
            </div>
        </div>
    );
}

function SalesDetails() {
    return (
        <div className="pb-12 text-slate-900">
            {/* Hero */}
            <div className="bg-blue-900 text-white p-8 md:p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#1e40af_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-1 space-y-4">
                        <div className="inline-block px-3 py-1 bg-blue-800 rounded-full border border-blue-600 text-blue-300 text-xs font-bold">
                            📊 Excel Tool Premium
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Analisa Data Sales Setara Manager Pro.</h2>
                        <p className="text-blue-100 opacity-90">Ubah data Excel mentah jadi Dashboard Interaktif yang memukau. Cukup Copy-Paste, laporan langsung jadi!</p>
                    </div>
                    <div className="w-full md:w-1/3">
                        <Image src="/images/cover_sales_dashboard.png" alt="Sales Dashboard" width={400} height={300} className="w-full object-contain drop-shadow-2xl rounded-lg" />
                    </div>
                </div>
            </div>

            {/* Features */}
            <div className="px-8 md:px-12 py-10 space-y-12">
                <FeatureBlock
                    icon={<div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold">🖱️</div>}
                    iconBg="bg-blue-100"
                    title="Cukup Drop Data Excel"
                    desc="Template sudah disiapkan dengan rumus canggih. Anda tinggal paste data penjualan mentah (Raw Data), dashboard visual langsung terupdate otomatis."
                    image="/images/sales_dashboard_preview_1.jpg"
                />
                <FeatureBlock
                    icon={<div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center font-bold">🎯</div>}
                    iconBg="bg-purple-100"
                    title="Pipeline & Forecast Mode"
                    desc="Fitur 'Simulasi' untuk melihat potensi revenue bulan depan. Bisa filter berdasarkan tingkat keyakinan (Cold, Warm, Hot Lead)."
                    image="/images/sales_dashboard_preview_2.jpg"
                    reverse
                />
                <FeatureBlock
                    icon={<div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center font-bold">👥</div>}
                    iconBg="bg-red-100"
                    title="Audit Performa Sales"
                    desc="Pantau siapa sales juara dan siapa yang butuh coaching. Breakdown performa per individu, produk, atau wilayah."
                    image="/images/sales_dashboard_preview_3.jpg"
                />
            </div>
        </div>
    );
}

function CrmDetails() {
    return (
        <div className="pb-12 text-slate-900">
            {/* Hero */}
            <div className="bg-slate-900 text-white p-8 md:p-12 relative overflow-hidden">
                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-1 space-y-4">
                        <div className="inline-block px-3 py-1 bg-slate-800 rounded-full border border-slate-600 text-slate-300 text-xs font-bold">
                            🔒 100% Private & Secure
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">CRM Tanpa Biaya Langganan.</h2>
                        <p className="text-slate-300 opacity-90">Kelola database customer, pipeline penjualan, dan follow-up history langsung di komputer Anda. Tanpa internet, tanpa server pihak ketiga.</p>
                    </div>
                    <div className="w-full md:w-1/3">
                        <Image src="/images/cover_sales_crm_v3.png" alt="Sales CRM" width={400} height={300} className="w-full object-contain drop-shadow-2xl rounded-lg" />
                    </div>
                </div>
            </div>

            {/* Features */}
            <div className="px-8 md:px-12 py-10 space-y-12">
                <FeatureBlock
                    icon={<div className="w-12 h-12 bg-slate-200 text-slate-700 rounded-xl flex items-center justify-center font-bold">🕵️</div>}
                    iconBg="bg-slate-200"
                    title="Data Pelanggan Rahasia"
                    desc="Database tersimpan lokal di Excel. Tidak ada orang lain (termasuk developer) yang bisa melihat siapa klien Anda. Anti bocor ke kompetitor."
                    image="/images/sales_crm_preview_1.jpg"
                />
                <FeatureBlock
                    icon={<div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold">🏗️</div>}
                    iconBg="bg-blue-100"
                    title="Pipeline Management"
                    desc="Geser status prospek dari 'Leads' -> 'Meeting' -> 'Negotiation' -> 'Closing'. Monitor deal yang macet dengan mudah."
                    image="/images/sales_crm_preview_2.jpg"
                    reverse
                />
                <FeatureBlock
                    icon={<div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center font-bold">♾️</div>}
                    iconBg="bg-green-100"
                    title="Sekali Bayar, Pakai Selamanya"
                    desc="Lupakan biaya langganan bulanan mahal seperti CRM online. Cukup bayar sekali, tool ini jadi aset bisnis Anda selamanya."
                    image="/images/sales_crm_preview_3.jpg"
                />
            </div>
        </div>
    );
}

function UpsDetails() {
    return (
        <div className="pb-12 text-slate-900">
            <div className="bg-amber-900 text-white p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-4">UPS Rate Calculator</h2>
                <p className="text-amber-100 mb-8 max-w-2xl">Hitung estimasi biaya shipping UPS + Tax dengan akurat sebelum mengirim barang. Hindari kerugian akibat salah hitung ongkir.</p>
                <div className="grid gap-6">
                    <Image src="/images/ups_calc_preview_1.jpg" alt="UPS Calc Preview 1" width={600} height={400} className="rounded-lg shadow-xl w-full" />
                    <Image src="/images/ups_calc_preview_2.jpg" alt="UPS Calc Preview 2" width={600} height={400} className="rounded-lg shadow-xl w-full" />
                </div>
            </div>
        </div>
    )
}

function TaxDetails() {
    return (
        <div className="pb-12 text-slate-900">
            <div className="bg-emerald-900 text-white p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-4">Duty & Tax Calculator</h2>
                <p className="text-emerald-100 mb-8 max-w-2xl">Simulasi pajak impor Indonesia (BM, PPN, PPh) dengan database HS Code terbaru. Tool wajib untuk importir.</p>
                <div className="grid gap-6">
                    <Image src="/images/tax_calc_preview_1.jpg" alt="Tax Calc Preview 1" width={600} height={400} className="rounded-lg shadow-xl w-full" />
                    <Image src="/images/tax_calc_preview_2.jpg" alt="Tax Calc Preview 2" width={600} height={400} className="rounded-lg shadow-xl w-full" />
                </div>
            </div>
        </div>
    )
}

function EbookDetails() {
    return (
        <div className="pb-12 text-slate-900">
            <div className="bg-emerald-50 text-emerald-900 p-8 md:p-12 relative overflow-hidden">
                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-1 space-y-4">
                        <span className="inline-block px-3 py-1 bg-emerald-200 text-emerald-800 rounded-full text-xs font-bold uppercase tracking-wider">
                            Free Ebook
                        </span>
                        <h2 className="text-3xl font-bold mb-4">The Art of Uncomplicating</h2>
                        <p className="text-emerald-800 mb-6 leading-relaxed">
                            Di dunia yang bising, ketenangan adalah superpower. Pelajari filosofi produktivitas bebas stres dan cara menggunakan AI tanpa kehilangan sentuhan manusia.
                        </p>
                        <button className="px-6 py-3 bg-emerald-700 text-white font-bold rounded-lg hover:bg-emerald-800 transition shadow-lg">
                            Download Gratis Sekarang
                        </button>
                    </div>
                    <div className="w-full md:w-1/3 flex justify-center">
                        <Image src="/images/cover_ebook_enhanced.png" alt="Ebook Cover" width={300} height={400} className="rounded-lg shadow-2xl skew-y-3 transform hover:skew-y-0 transition duration-500" />
                    </div>
                </div>
            </div>
        </div>
    )
}

function PadelDetails() {
    return (
        <div className="pb-12 text-slate-900">
            <div className="bg-orange-50 text-orange-900 p-8 md:p-12 relative overflow-hidden">
                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-1 space-y-4">
                        <span className="inline-block px-3 py-1 bg-orange-200 text-orange-800 rounded-full text-xs font-bold uppercase tracking-wider">
                            Import Guide
                        </span>
                        <h2 className="text-3xl font-bold mb-4">Panduan Impor Raket Padel</h2>
                        <p className="text-orange-800 mb-6 leading-relaxed">
                            Olahraga Padel sedang booming! Pelajari cara impor raket padel dari China/Eropa dengan aman. Lengkap dengan HS Code, hitungan pajak, dan strategi lolos cukai.
                        </p>
                    </div>
                    <div className="w-full md:w-1/3 flex justify-center">
                        <Image src="/images/cover_ebook_padel_v3.png" alt="Padel Guide Cover" width={300} height={400} className="rounded-lg shadow-2xl rotate-3 transform hover:rotate-0 transition duration-500" />
                    </div>
                </div>
            </div>
        </div>
    )
}

function GenericDetails({ product }: { product: any }) {
    return (
        <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/3 relative h-64 md:h-auto bg-gray-50 rounded-2xl overflow-hidden">
                    <Image src={product.image} alt={product.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-contain p-4" />
                </div>
                <div className="flex-1 space-y-6">
                    <span className={`text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-${product.color}-100 text-${product.color}-700 inline-block`}>
                        {product.category}
                    </span>
                    <h2 className="text-3xl font-bold text-gray-900">{product.title}</h2>
                    <ul className="space-y-3">
                        {product.features.map((feature: string, idx: number) => (
                            <li key={idx} className="flex gap-3 text-gray-600">
                                <CheckCircle className={`w-5 h-5 text-${product.color}-500 shrink-0`} />
                                {feature}
                            </li>
                        ))}
                    </ul>
                    <div className="pt-4 flex items-center gap-4">
                        <span className="text-3xl font-bold text-gray-900">{product.price}</span>
                        {product.oldPrice && <span className="text-gray-400 line-through font-medium">{product.oldPrice}</span>}
                    </div>
                    <div className="pt-4">
                        <a href={product.buyLink} target="_blank" className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 transition">
                            Beli Sekarang
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

function FeatureBlock({ icon, iconBg, title, desc, image, reverse }: any) {
    return (
        <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}>
            <div className="flex-1 space-y-4">
                <div className={`w-12 h-12 ${iconBg} rounded-xl flex items-center justify-center`}>
                    {icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{desc}</p>
            </div>
            <div className="flex-1">
                {image && <Image src={image} alt={title} width={500} height={300} className="rounded-2xl shadow-lg border border-gray-100" />}
            </div>
        </div>
    )
}
