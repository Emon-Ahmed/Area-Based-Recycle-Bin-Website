import Footer from "@/components/custom-footer";
import Navbar from "@/components/custom-navbar";
import FeaturedProducts from "@/components/featured-products";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      {/* <header>
        <Navbar />
      </header> */}
      <main className="mt-12 ">
        <FeaturedProducts />
      </main>
     
    </>
  );
}
