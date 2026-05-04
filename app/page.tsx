import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProductList from "@/components/ProductList";
import Portfolio from "@/components/Portfolio";
import ServiceBanner from "@/components/ServiceBanner";
import Pricing from "@/components/Pricing";
import ComparisonTable from "@/components/ComparisonTable";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProductList />
      <Portfolio />
      <Testimonials />
      <ServiceBanner />
      <Pricing />
      <ComparisonTable />
      <FAQ />
      <About />
      <Footer />
    </main>
  );
}
