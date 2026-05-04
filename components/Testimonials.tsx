"use client";
import React from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Anwar Syarifudin",
    role: "Owner Kelambies",
    content: "Terima kasih Mas Rifai atas bantuannya dalam pembuatan website Kelambies. Prosesnya berjalan lancar, komunikatif, transparan dan hasilnya sesuai dengan yang diharapkan. Untuk akses dan pengelolaan juga dijelaskan dengan baik, sehingga memudahkan saya sebagai owner. Sukses terus untuk Mas Rifai 🙏",
    initial: "A"
  },
  {
    name: "Adit",
    role: "Owner Atrex Force",
    content: "Pak Rifai sangat membantu dalam pengembangan platform digital kami. Responnya cepat dan tepat sasaran sesuai kebutuhan perusahaan. Kami sangat merekomendasikan kemampuan beliau dalam membangun skala digitalisasi (scale-up), baik untuk sektor B2B maupun SME/UMKM.",
    initial: "A"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-bold mb-4 tracking-wide uppercase">
            Testimoni
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Apa Kata Mereka?
          </h2>
          <p className="text-gray-500 text-lg">
            Pengalaman nyata klien yang telah bekerja sama dengan kami.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-gray-50 rounded-3xl p-8 md:p-10 border-2 border-gray-100 shadow-sm relative flex flex-col h-full">
              <div className="absolute -top-4 -left-2 text-teal-500 opacity-20">
                <Quote size={60} />
              </div>
              
              <div className="relative z-10 flex flex-col h-full">
                <p className="text-gray-700 text-lg italic leading-relaxed mb-8 flex-1">
                  &quot;{t.content}&quot;
                </p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-md">
                    {t.initial}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{t.name}</h4>
                    <p className="text-teal-600 text-sm font-medium">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
