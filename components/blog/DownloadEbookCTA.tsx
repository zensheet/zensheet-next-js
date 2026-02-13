import Link from 'next/link';
import { FileText, Download } from 'lucide-react';

export default function DownloadEbookCTA() {
    return (
        <div className="my-12 p-8 bg-gradient-to-br from-blue-900 to-indigo-900 rounded-2xl shadow-xl text-white relative overflow-hidden isolate">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white/5 blur-3xl z-[-1]"></div>
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl z-[-1]"></div>

            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10 shrink-0">
                    <FileText size={48} className="text-blue-200" />
                </div>

                <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-2 text-white">
                        Suka dengan artikel ini?
                    </h3>
                    <p className="text-blue-100 mb-6 max-w-xl">
                        Dapatkan versi lengkap <span className="font-semibold text-white">"The Art of Uncomplicating"</span> dalam format Digital Book (PDF) secara GRATIS. Baca dengan nyaman di mana saja.
                    </p>

                    <a
                        href="/files/the-art-of-uncomplicating.pdf"
                        download="The_Art_of_Uncomplicating_ZenSheet.pdf"
                        className="inline-flex items-center gap-2 bg-white text-blue-900 hover:bg-blue-50 px-6 py-3 rounded-lg font-bold transition-all transform hover:-translate-y-0.5 hover:shadow-lg group"
                    >
                        <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
                        Download Ebook Gratis
                    </a>
                    <p className="mt-3 text-xs text-blue-300">
                        *Tidak perlu email, langsung download (PDF, 200KB)
                    </p>
                </div>
            </div>
        </div>
    );
}
