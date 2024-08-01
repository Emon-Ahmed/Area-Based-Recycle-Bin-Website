import ShopProducts from "./shop-products";
import { Badge } from "./ui/badge";

export default function FeaturedProducts() {
  return (
    <div className="container">
      <div className="pt-12 md:pt-24 lg:pt-32">
        <div className="grid gap-6 px-4 mx-auto md:gap-8 ">
          <div className="flex flex-col items-center gap-4 text-center md:items-center md:gap-8">
            <div className="grid gap-1">
              <div className="mb-2 text-center">
                <Badge className="px-4 py-2 ">Easy Buy & Sell</Badge>
              </div>
              <h2 className="text-4xl font-bold text-center ">
                FEATURED PRODUCTS
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                Discover our latest collection of stylish and high-quality
                products.
              </p>
            </div>
          </div>
          <ShopProducts />
        </div>
      </div>
    </div>
  );
}
