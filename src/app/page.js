import Footer from "@/components/custom-footer";
import Navbar from "@/components/custom-navbar";
import FeaturedProducts from "@/components/featured-products";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="mt-12 ">
        <FeaturedProducts />
      </main>

      <Footer />
    </>
  );
}
