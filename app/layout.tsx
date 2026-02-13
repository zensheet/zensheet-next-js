import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Serif_Display } from "next/font/google"; // Added Serif
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://zensheet.id'),
  title: "ZenSheet | Tools Produktivitas & Aplikasi Bisnis Premium",
  description: "Platform tools digital untuk UMKM & profesional. Aplikasi Kasir, Sales Dashboard, CRM, dan Panduan Impor. Sekali bayar, 100% Offline, tanpa biaya langganan.",
  keywords: ["aplikasi kasir", "sales dashboard", "excel template", "software bisnis", "zensheet", "tools umkm", "import guide", "crm offline"],
  authors: [{ name: "ZenSheet Team" }],
  openGraph: {
    title: "ZenSheet | Organize with Peace, Grow with Ease",
    description: "Koleksi tools produktivitas premium untuk bisnis Anda. Mulai dari Rp 30.000, bayar sekali seumur hidup.",
    url: "https://zensheet.id", // Placeholder URL
    siteName: "ZenSheet",
    images: [
      {
        url: "/images/logo_icon.png", // Using existing logo as fallback
        width: 800,
        height: 600,
        alt: "ZenSheet Preview",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZenSheet | Tools Produktivitas & Aplikasi Bisnis Premium",
    description: "Upgrade bisnis Anda dengan tools digital canggih yang hemat budget.",
    images: ["/images/logo_icon.png"],
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${plusJakartaSans.variable} ${dmSerif.variable} font-sans antialiased bg-gray-50 text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
