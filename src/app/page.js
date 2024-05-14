import CTA from "@/components/cta";
import Navbar from "@/components/custom-navbar";
import FAQ from "@/components/faq";
import FeaturedProducts from "@/components/featured-products";

export default function Home() {
  return (
    <div>
       <Navbar />
      <main className="mt-12">
        <FeaturedProducts />
        <FAQ />
        <CTA />
      </main>
    </div>
  );
}
