import CTA from "@/components/cta";
import Navbar from "@/components/custom-navbar";
import FAQ from "@/components/faq";
import FeatureLeft from "@/components/feature-text-left";
import FeatureRight from "@/components/feature-text-right";
import FeaturedCategory from "@/components/featured-category";
import FeaturedProducts from "@/components/featured-products";
import Banner from "@/components/main-banner";
import TopBar from "@/components/top-bar";

export default function Home() {
  return (
    <>
      {/* <TopBar/> */}
      <Navbar />
      <Banner />
      <FeaturedCategory />
      <FeaturedProducts />
      {/* <FeatureLeft /> */}
      {/* <FeatureRight /> */}
      <FAQ />
      {/* <CTA /> */}
    </>
  );
}
