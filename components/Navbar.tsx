"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 transition-all duration-300">
            <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                <a href="#" className="flex items-center gap-2 group">
                    <Image
                        src="/images/logo_icon.png"
                        alt="ZenSheet Logo"
                        width={32}
                        height={32}
                        className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300"
                    />
                    <span className="font-bold text-xl tracking-tight text-gray-900">
                        ZenSheet<span className="text-teal-600">.</span>
                    </span>
                </a>

                <nav className="hidden md:flex items-center gap-8">
                    <a href="#products" className="text-sm font-medium text-gray-600 hover:text-teal-600 transition">
                        Produk
                    </a>
                    <a href="#features" className="text-sm font-medium text-gray-600 hover:text-teal-600 transition">
                        Keunggulan
                    </a>
                    <a href="#faq" className="text-sm font-medium text-gray-600 hover:text-teal-600 transition">
                        FAQ
                    </a>
                    <a
                        href="#contact"
                        className="px-5 py-2 text-sm font-bold bg-gray-900 text-white rounded-full hover:bg-teal-600 transition transform hover:-translate-y-0.5"
                    >
                        Kontak
                    </a>
                </nav>

                <button
                    className="md:hidden p-2 text-gray-600"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-100 shadow-xl p-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
                    <a href="#products" className="block py-2 text-gray-600 font-medium" onClick={() => setIsOpen(false)}>
                        Produk
                    </a>
                    <a href="#features" className="block py-2 text-gray-600 font-medium" onClick={() => setIsOpen(false)}>
                        Keunggulan
                    </a>
                    <a href="#faq" className="block py-2 text-gray-600 font-medium" onClick={() => setIsOpen(false)}>
                        FAQ
                    </a>
                    <a href="#contact" className="block py-2 text-teal-600 font-bold" onClick={() => setIsOpen(false)}>
                        Kontak Kami
                    </a>
                </div>
            )}
        </header>
    );
}
