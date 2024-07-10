import Navbar from "@/components/custom-navbar";
import ShopBanner from "@/components/shop-banner";
import ShopProducts from "@/components/shop-products";
import TopBar from "@/components/top-bar";
import React from "react";

const ProductsPage = () => {
  return (
    <div>
      <TopBar/>
      <Navbar />
      <ShopBanner />
      <ShopProducts />
    </div>
  );
};

export default ProductsPage;
