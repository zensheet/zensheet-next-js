import { Check, Zap, Shield, Smile } from "lucide-react";

export default function ComparisonTable() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold mb-4 text-gray-900">
                        Kenapa Website Kami Beda?
                    </h2>
                    <p className="text-gray-500 text-lg">
                        Lupakan dashboard ribet. Update website Anda semudah mengetik di Excel.
                    </p>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[600px]">
                        <thead>
                            <tr>
                                <th className="p-4 border-b-2 border-gray-100 text-gray-500 font-medium">
                                    FITUR
                                </th>
                                <th className="p-4 border-b-2 border-teal-500 text-teal-700 font-bold bg-teal-50 rounded-t-xl">
                                    WEBSITE ZENSHEET
                                </th>
                                <th className="p-4 border-b-2 border-gray-100 text-gray-500 font-medium">
                                    WORDPRESS BIASA
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            <tr>
                                <td className="p-4 border-b border-gray-100 font-bold text-gray-700">
                                    Cara Edit Konten
                                </td>
                                <td className="p-4 border-b border-teal-100 bg-teal-50/50 text-teal-900 font-bold">
                                    <div className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-teal-500" />
                                        Google Sheets (Sangat Mudah)
                                    </div>
                                </td>
                                <td className="p-4 border-b border-gray-100 text-gray-500">
                                    Login Dashboard Admin (Rumit)
                                </td>
                            </tr>
                            <tr>
                                <td className="p-4 border-b border-gray-100 font-bold text-gray-700">
                                    Kecepatan
                                </td>
                                <td className="p-4 border-b border-teal-100 bg-teal-50/50 text-teal-900 font-bold">
                                    <div className="flex items-center gap-2">
                                        <Zap className="w-4 h-4 text-teal-500" />
                                        Super Cepat (Tanpa Plugin)
                                    </div>
                                </td>
                                <td className="p-4 border-b border-gray-100 text-gray-500">
                                    Rawan Lemot (Banyak Plugin)
                                </td>
                            </tr>
                            <tr>
                                <td className="p-4 border-b border-gray-100 font-bold text-gray-700">
                                    Keamanan
                                </td>
                                <td className="p-4 border-b border-teal-100 bg-teal-50/50 text-teal-900 font-bold">
                                    <div className="flex items-center gap-2">
                                        <Shield className="w-4 h-4 text-teal-500" />
                                        Anti Hack (Static Site)
                                    </div>
                                </td>
                                <td className="p-4 border-b border-gray-100 text-gray-500">
                                    Wajib Update Plugin Rutin
                                </td>
                            </tr>
                            <tr>
                                <td className="p-4 font-bold text-gray-700">Biaya Maintenance</td>
                                <td className="p-4 bg-teal-50/50 text-teal-900 font-bold rounded-b-xl">
                                    <div className="flex items-center gap-2">
                                        <Smile className="w-4 h-4 text-teal-500" />
                                        Rp 0 (Hemat Jutaan)
                                    </div>
                                </td>
                                <td className="p-4 text-gray-500">Sering Ada Biaya Tak Terduga</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
