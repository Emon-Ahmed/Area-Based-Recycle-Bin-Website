import Navbar from "@/components/custom-navbar";
import FAQ from "@/components/faq";
import FeaturedCategory from "@/components/featured-category";
import FeaturedProducts from "@/components/featured-products";
import Banner from "@/components/main-banner";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <FeaturedCategory />
      <FeaturedProducts />
      <FAQ />
    </>
  );
}
