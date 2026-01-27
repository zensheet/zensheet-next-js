import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProductList from "@/components/ProductList";
import ServiceBanner from "@/components/ServiceBanner";
import Pricing from "@/components/Pricing";
import ComparisonTable from "@/components/ComparisonTable";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProductList />
      <ServiceBanner />
      <Pricing />
      <ComparisonTable />
      <FAQ />
      <About />
      <Footer />
    </main>
  );
}
