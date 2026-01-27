export default function Footer() {
    return (
        <footer className="bg-[#0B1221] text-white py-12 border-t border-slate-800">
            <div className="container mx-auto px-6 text-center">
                <h4 className="font-serif font-bold text-2xl mb-2">ZenSheet</h4>
                <p className="text-slate-400 mb-8 font-sans">Organize with Peace, Grow with Ease.</p>

                <div className="flex justify-center gap-6 text-sm text-slate-400 mb-8 font-sans">
                    <a href="#" className="hover:text-sky-400 transition">Privacy Policy</a>
                    <a href="#" className="hover:text-sky-400 transition">Terms of Service</a>
                    <a href="https://lynk.id/exportimport" target="_blank" className="hover:text-sky-400 transition">Lynk.id</a>
                </div>

                <div className="text-xs text-slate-600 font-sans">
                    &copy; 2026 ZenSheet. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
