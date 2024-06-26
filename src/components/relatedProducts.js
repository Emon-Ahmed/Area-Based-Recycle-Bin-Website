import { Link } from "lucide-react";
import React from "react";

const RelatedProducts = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-6xl px-4 mx-auto">
        <h2 className="mb-8 text-2xl font-bold md:text-3xl">
          Related Products
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-8">
          <div className="relative group">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View</span>
            </Link>
            <img
              alt="Related Product"
              className="object-cover w-full transition-opacity rounded-lg aspect-square group-hover:opacity-50"
              height={300}
              src="/placeholder.svg"
              width={300}
            />
            <div className="flex-1 py-4">
              <h3 className="font-semibold tracking-tight">
                Acme Wireless Earbuds
              </h3>
              <small className="text-sm leading-none text-gray-500 dark:text-gray-400">
                True Wireless Earbuds
              </small>
              <h4 className="font-semibold">$99.99</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
