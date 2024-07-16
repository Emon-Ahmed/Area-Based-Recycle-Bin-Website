"use client";
import Loading from "@/app/loading";
import Product from "./product";
import { useState, useEffect } from "react";

export default function ShopProducts() {
  const [products, setProducts] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products-show", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <Loading />;
  if (!products) return <p>No products</p>;

  return (
    <div className="container">
      <div className="py-12 md:py-12 lg:py-16">
        <div className="grid gap-6 px-4 mx-auto md:gap-8 ">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products?.map((product, i) => {
              return <Product key={i} product={product} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
