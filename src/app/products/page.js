import Navbar from "@/components/custom-navbar";
import ShopBanner from "@/components/shop-banner";
import ShopProducts from "@/components/shop-products";
import React from "react";

const ProductsPage = () => {
  return (
    <div>
      <Navbar />
      <ShopBanner />
      <ShopProducts />
    </div>
  );
};

export default ProductsPage;
