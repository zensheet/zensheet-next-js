"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle, ShoppingCart, MessageCircle, Info } from "lucide-react";
import ProductDetailModal from "./ProductDetailModal";

const products = [
    {
        id: "antigravity",
        title: "The Antigravity Developer",
        category: "AI GUIDE",
        price: "Rp 50.000",
        oldPrice: "Rp 99.000",
        image: "/images/mockup_book_sitting.png",
        color: "indigo",
        features: [
            "Mindset 'Antigravity Project Manager'",
            "Koleksi Prompt 'Zero to Deploy'",
            "Studi Kasus Real (ZenSheet)",
            "Tanpa Belajar Coding Rumit",
        ],
        buyLink: "http://lynk.id/exportimport/gg7z18l170y1/checkout/",
    },
    {
        id: "zenshoes",
        title: "Aplikasi Laundry Sepatu (White Label)",
        category: "SERVICE APP",
        price: "Rp 100.000",
        oldPrice: "Rp 150.000",
        image: "/images/zenshoes/cover_mockup.png",
        color: "teal",
        features: [
            "Dashboard Profit Real-time",
            "Stok Manajemen (Dust/Goodie Bag)",
            "Custom Layanan Sat-Set",
        ],
        buyLink: "http://lynk.id/exportimport/dlov43l8p9r3",
    },
    {
        id: "ebook",
        title: "The Art of Uncomplicating",
        category: "EBOOK",
        price: "FREE",
        oldPrice: "Rp 99.000",
        image: "/images/cover_ebook_enhanced.png",
        color: "green",
        features: [
            "Navigasi Fokus & Ketenangan",
            "Optimasi AI yang Terkendali",
            "Logika Kerja Bebas Ego",
            "Sistem Produktivitas Tanpa Rumit",
        ],
        buyLink: "#", // Modal trigger in original
    },
    {
        id: "warung",
        title: "Aplikasi Kasir Warung Modern",
        category: "BUSINESS APP",
        price: "Rp 100.000",
        image: "/images/warung_app.png",
        color: "sky",
        features: [
            "100% Offline & Ringan",
            "Fitur Kasir, Barcode & Cetak Struk",
            "Laporan Keuangan Otomatis",
            "Aman dengan Cloud Backup",
        ],
        buyLink: "http://lynk.id/exportimport/m1jyykmey8rx/checkout",
    },
    {
        id: "sales",
        title: "Sales Dashboard Tracker",
        category: "EXCEL TOOL",
        price: "Rp 50.000",
        image: "/images/cover_sales_dashboard.png",
        color: "blue",
        features: [
            "100% Offline & Privasi Aman",
            "Cukup Drop & Drag",
            "Fitur Sales Pipeline & Forecast",
            "Audit Active Customer",
        ],
        buyLink: "http://lynk.id/exportimport/dvog5xnjq9wx",
    },
    {
        id: "ups",
        title: "UPS Express Rate Calculator",
        category: "LOGISTICS TOOL",
        price: "Rp 30.000",
        image: "/images/cover_ups_calc.png",
        color: "gray",
        features: [
            "Auto Input Basic Rate & Simulasi Diskon",
            "Deteksi Remote Area",
            "Notif Limit Berat/Dimensi",
            "Estimasi Duty Tax",
        ],
        buyLink: "https://lynk.id/exportimport/10y7446xd1er",
    },
    {
        id: "tax",
        title: "Duty & Tax Calculator (Indonesia)",
        category: "LOGISTICS TOOL",
        price: "Rp 30.000",
        image: "/images/cover_tax_calc.png",
        color: "gray",
        features: [
            "Database HS Code Lengkap (BTKI 2022)",
            "Koneksi INSW Real-Time",
            "Simulasi Fleksibel",
            "Hitung Biaya Kurir",
        ],
        buyLink: "https://lynk.id/exportimport/dgwkowv6kkoo",
    },
    {
        id: "crm",
        title: "SalesCRM Offline",
        category: "BUSINESS TOOL",
        price: "Rp 50.000",
        image: "/images/cover_sales_crm_v3.png",
        color: "gray",
        features: [
            "100% Offline (Data Aman di Lokal)",
            "Data Privat & Rahasia",
            "Tanpa Login & Langganan",
            "Aktivasi 1x Bayar (Lifetime)",
        ],
        buyLink: "https://lynk.id/exportimport/yklmy1llv65j",
    },
    {
        id: "padel",
        title: "Panduan Impor Raket Padel",
        category: "EBOOK GUIDE",
        price: "Rp 30.000",
        image: "/images/cover_ebook_padel_v3.png",
        color: "gray",
        features: [
            "Kuasai HS Code 9506.59",
            "Hitung BM & PDRI Sesuai PMK",
            "Strategi Lolos Jalur Hijau",
            "Tips Hindari Lartas",
        ],
        buyLink: "https://lynk.id/exportimport/qxvkrmpe8lrv",
    },
];

const colorMap: Record<string, { border: string; text: string; bg: string; buttonHover: string; icon: string }> = {
    indigo: { border: "border-indigo-500", text: "text-indigo-600", bg: "bg-indigo-50", buttonHover: "hover:bg-indigo-600", icon: "text-indigo-500" },
    teal: { border: "border-teal-500", text: "text-teal-600", bg: "bg-teal-50", buttonHover: "hover:bg-teal-600", icon: "text-teal-500" },
    green: { border: "border-green-500", text: "text-green-600", bg: "bg-green-50", buttonHover: "hover:bg-green-600", icon: "text-green-500" },
    sky: { border: "border-sky-500", text: "text-sky-600", bg: "bg-sky-50", buttonHover: "hover:bg-sky-600", icon: "text-sky-500" },
    blue: { border: "border-blue-600", text: "text-blue-600", bg: "bg-blue-50", buttonHover: "hover:bg-blue-600", icon: "text-blue-500" },
    gray: { border: "border-gray-300", text: "text-gray-600", bg: "bg-gray-50", buttonHover: "hover:bg-gray-600", icon: "text-gray-500" },
};

export default function ProductList() {
    const [selectedProduct, setSelectedProduct] = useState<any>(null);

    return (
        <section id="products" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-2">Produk Pilihan</h2>
                    <p className="text-gray-500">Designed for clarity and calmness.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => {
                        const styles = colorMap[product.color] || colorMap.gray;
                        return (
                            <div
                                key={product.id}
                                className={`group rounded-3xl border-2 ${styles.border} overflow-hidden hover:shadow-2xl transition hover:-translate-y-1 bg-white cursor-pointer`}
                                onClick={() => setSelectedProduct(product)}
                            >
                                {/* Image Area */}
                                <div className={`relative h-64 ${styles.bg} overflow-hidden`}>
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-contain p-6 group-hover:scale-105 transition duration-500"
                                    />
                                </div>

                                {/* Body */}
                                <div className="p-8">
                                    <span className={`text-xs font-bold tracking-wider uppercase mb-2 block ${styles.text}`}>
                                        {product.category}
                                    </span>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">{product.title}</h3>

                                    <ul className="space-y-2 mb-6 text-sm text-gray-600">
                                        {product.features.map((feature, idx) => (
                                            <li key={idx} className="flex gap-2">
                                                <CheckCircle className={`w-4 h-4 ${styles.icon} shrink-0`} /> {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex items-center gap-3 mb-6">
                                        {product.oldPrice && (
                                            <span className="text-gray-400 line-through text-sm font-medium">{product.oldPrice}</span>
                                        )}
                                        <span className={`text-2xl font-bold ${styles.text}`}>{product.price}</span>
                                    </div>

                                    <div className="flex gap-2">
                                        <a
                                            href={product.buyLink}
                                            target="_blank"
                                            className={`flex-1 py-3 px-4 bg-gray-900 ${styles.buttonHover} text-white font-bold rounded-xl text-center text-sm transition flex items-center justify-center gap-2`}
                                            onClick={(e) => e.stopPropagation()} // Prevent modal open on buy click
                                        >
                                            <ShoppingCart className="w-4 h-4" /> Beli
                                        </a>
                                        <a
                                            href={`https://wa.me/6281290650963?text=Halo%20ZenSheet,%20mau%20tanya%20${product.title}`}
                                            target="_blank"
                                            className="p-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition text-gray-600"
                                            title="Tanya via WA"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <MessageCircle className="w-5 h-5" />
                                        </a>
                                        <button
                                            className="p-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition text-gray-600"
                                            title="Lihat Detail"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedProduct(product);
                                            }}
                                        >
                                            <Info className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <ProductDetailModal
                product={selectedProduct}
                isOpen={!!selectedProduct}
                onClose={() => setSelectedProduct(null)}
            />
        </section>
    );
}
