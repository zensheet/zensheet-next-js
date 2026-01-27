"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
    {
        question: "Apakah Domain & Hosting jadi milik saya?",
        answer: "Ya, 100%. Domain didaftarkan atas nama bisnis Anda (bukan nama kami). Jika tahun depan tidak perpanjang lewat kami, domain bisa ditransfer.",
    },
    {
        question: "Berapa lama proses pembuatannya?",
        answer: "Sangat cepat. Paket Intro selesai 1-2 hari kerja. Paket Terima Beres sekitar 3-5 hari kerja jika materi lengkap.",
    },
    {
        question: "Apakah bisa update konten sendiri?",
        answer: "Tentu! Khusus paket 'Terima Beres' (999rb), kami berikan akses Google Sheets CMS. Anda bisa ganti harga atau teks semudah mengetik di Excel.",
    },
    {
        question: "Domain apa yang saya dapatkan?",
        answer: "Paket Intro dapat .MY.ID. Paket Terima Beres dapat .COM.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-2">Pertanyaan Umum (FAQ)</h2>
                    <p className="text-gray-500">Semua yang perlu Anda ketahui.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className="border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition bg-white"
                        >
                            <button
                                className="w-full flex justify-between items-center p-6 text-left"
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                            >
                                <span className="font-bold text-gray-900">{faq.question}</span>
                                {openIndex === idx ? <ChevronUp className="text-gray-400" /> : <ChevronDown className="text-gray-400" />}
                            </button>
                            {openIndex === idx && (
                                <div className="p-6 pt-0 text-gray-600 text-sm bg-gray-50 border-t border-gray-100">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
