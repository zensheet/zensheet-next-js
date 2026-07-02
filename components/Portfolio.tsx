"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ExternalLink, Globe, Monitor, FileText, ShoppingBag, Truck, Shirt } from "lucide-react";

const projects = [
    {
        id: "gbuexpress",
        title: "GBU Express",
        description: "Website company profile dan layanan logistik profesional untuk GBU Express.",
        category: "Website",
        tags: ["Logistics", "Company Profile", "Web Design"],
        image: "/images/portfolio/gbuexpress.webp",
        link: "https://gbuexpress.com",
        color: "blue",
        icon: Truck,
        isLive: true,
    },
    {
        id: "cavinnisanitary",
        title: "Cavinni Sanitary",
        description: "Website e-commerce dan katalog produk sanitary premium dengan desain modern, dilengkapi sistem pemesanan via WhatsApp dan integrasi Supabase.",
        category: "Website",
        tags: ["E-Commerce", "Next.js", "Sanitary"],
        image: "/images/portfolio/cavinni.webp",
        link: "https://cavinnisanitary.com",
        color: "teal",
        icon: ShoppingBag,
        isLive: true,
    },
    {
        id: "mdsgensa",
        title: "MDS Gensa",
        description: "Website company profile profesional untuk MDS Gensa. Menampilkan layanan, portfolio, dan informasi perusahaan secara interaktif dan responsif.",
        category: "Website",
        tags: ["Company Profile", "Corporate", "Web Design"],
        image: "/images/portfolio/mdsgensa.webp",
        link: "https://mdsgensa.com",
        color: "blue",
        icon: Globe,
        isLive: true,
    },
    {
        id: "kelambies",
        title: "Kelambies.com",
        description: "Website e-commerce pakaian anak premium. Fitur toko online lengkap dengan katalog produk, cart, dan sistem checkout.",
        category: "Website",
        tags: ["E-Commerce", "WordPress", "Retail"],
        image: "/images/portfolio/kelambies.png",
        link: "https://kelambies.com",
        color: "purple",
        icon: ShoppingBag,
        isLive: true,
    },
    {
        id: "travigma",
        title: "Travigma",
        description: "Aplikasi internal generator e-tiket & itinerary perjalanan. Cover Flight, Train, Bus, Hotel dalam satu platform.",
        category: "Web App",
        tags: ["Internal Tool", "HTML/JS", "Travel"],
        image: "/images/portfolio/travigma.png",
        link: null,
        color: "blue",
        icon: Monitor,
        isLive: false,
    },
    {
        id: "atrex",
        title: "ATREX FORCE",
        description: "Aplikasi sales force logistics — manajemen leads, komisi, RFQ, dan pipeline tracking real-time untuk tim ekspor-impor.",
        category: "Web App",
        tags: ["Logistics", "CRM", "Dashboard"],
        image: "/images/portfolio/atrex.png",
        link: null,
        color: "green",
        icon: Truck,
        isLive: false,
    },
    {
        id: "mss",
        title: "MSS Editor",
        description: "Aplikasi cetak sertifikat digital untuk PT. Mulia Safety Service. Template dinamis untuk laporan kelaikan kapal (Survey SOLAS).",
        category: "Web App",
        tags: ["Certificate", "Maritime", "PDF"],
        image: "/images/portfolio/mss.png",
        link: null,
        color: "orange",
        icon: FileText,
        isLive: false,
    },
    {
        id: "laundry",
        title: "Jasalaundry Gokil",
        description: "Aplikasi manajemen order laundry pakaian. Fitur input order, monitoring kg cucian, omset harian, dan kasbon pelanggan.",
        category: "Web App",
        tags: ["POS", "Laundry", "Dashboard"],
        image: "/images/portfolio/laundry.png",
        link: null,
        color: "cyan",
        icon: Shirt,
        isLive: false,
    },
    {
        id: "accleanshoes",
        title: "ACleanShoes",
        description: "Aplikasi pencatatan order laundry sepatu. Tracking status per sepatu, pembayaran, dan riwayat pelanggan setia.",
        category: "Web App",
        tags: ["Order Management", "Laundry", "Sepatu"],
        image: "/images/portfolio/accleanshoes.png",
        link: null,
        color: "teal",
        icon: Monitor,
        isLive: false,
    },
];

const categories = ["Semua", "Website", "Web App"];

const colorMap: Record<string, { badge: string; glow: string; border: string }> = {
    purple: { badge: "bg-purple-100 text-purple-700", glow: "group-hover:shadow-purple-200", border: "group-hover:border-purple-300" },
    blue:   { badge: "bg-blue-100 text-blue-700",     glow: "group-hover:shadow-blue-200",   border: "group-hover:border-blue-300" },
    green:  { badge: "bg-green-100 text-green-700",   glow: "group-hover:shadow-green-200",  border: "group-hover:border-green-300" },
    orange: { badge: "bg-orange-100 text-orange-700", glow: "group-hover:shadow-orange-200", border: "group-hover:border-orange-300" },
    cyan:   { badge: "bg-cyan-100 text-cyan-700",     glow: "group-hover:shadow-cyan-200",   border: "group-hover:border-cyan-300" },
    teal:   { badge: "bg-teal-100 text-teal-700",     glow: "group-hover:shadow-teal-200",   border: "group-hover:border-teal-300" },
};

export default function Portfolio() {
    const [activeCategory, setActiveCategory] = useState("Semua");

    const filtered = activeCategory === "Semua"
        ? projects
        : projects.filter((p) => p.category === activeCategory);

    return (
        <section id="portfolio" className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <div className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-bold mb-4 tracking-wide uppercase">
                        Portofolio
                    </div>
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                        Karya Nyata, Bukan Sekadar Janji
                    </h2>
                    <p className="text-gray-500 text-lg">
                        Beberapa aplikasi dan website yang sudah dibangun dan digunakan oleh bisnis nyata.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex justify-center gap-2 mb-10 flex-wrap">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                                activeCategory === cat
                                    ? "bg-gray-900 text-white border-gray-900 shadow-md"
                                    : "bg-white text-gray-600 border-gray-200 hover:border-gray-400 hover:text-gray-900"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filtered.map((project) => {
                        const colors = colorMap[project.color] || colorMap.teal;
                        const Icon = project.icon;
                        return (
                            <div
                                key={project.id}
                                className={`group bg-white rounded-3xl border-2 border-gray-100 overflow-hidden shadow-md hover:shadow-2xl ${colors.glow} ${colors.border} transition-all duration-300 hover:-translate-y-1 flex flex-col`}
                            >
                                {/* Thumbnail */}
                                <div className="relative h-52 overflow-hidden bg-gray-100">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {/* Live badge */}
                                    {project.isLive && (
                                        <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-green-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow">
                                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse inline-block" />
                                            Live
                                        </div>
                                    )}
                                    {/* Category pill */}
                                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur text-gray-700 text-xs font-bold px-2.5 py-1 rounded-full shadow">
                                        <Icon className="w-3 h-3 inline mr-1" />
                                        {project.category}
                                    </div>
                                </div>

                                {/* Body */}
                                <div className="p-6 flex flex-col flex-1">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed flex-1">{project.description}</p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-1.5 mt-4">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${colors.badge}`}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Link */}
                                    {project.link ? (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-teal-600 hover:text-teal-800 transition"
                                        >
                                            <Globe className="w-4 h-4" />
                                            Lihat Website
                                            <ExternalLink className="w-3 h-3" />
                                        </a>
                                    ) : (
                                        <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-gray-400">
                                            <Monitor className="w-4 h-4" />
                                            Internal / Private App
                                        </span>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* CTA Bottom */}
                <div className="text-center mt-16">
                    <p className="text-gray-500 mb-4">Tertarik punya aplikasi seperti ini?</p>
                    <a
                        href="https://wa.me/6281290650963?text=Halo%20Mas,%20saya%20mau%20konsultasi%20project%20aplikasi%20custom."
                        target="_blank"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 hover:bg-teal-600 text-white font-bold rounded-full transition shadow-lg"
                    >
                        💬 Konsultasi Gratis via WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
}
