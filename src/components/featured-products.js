import ShopProducts from "./shop-products";

export default function FeaturedProducts() {
  return (
    <div className="container">
      <div className="py-12 md:py-24 lg:py-32">
        <div className="grid gap-6 px-4 mx-auto md:gap-8 ">
          <div className="flex flex-col items-center gap-4 text-center md:items-center md:gap-8">
            <div className="grid gap-1">
              <h2 className="text-4xl font-bold text-center ">
                Featured Products
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                Discover our latest collection of stylish and high-quality
                products.
              </p>
            </div>
          </div>
          <ShopProducts />
          {/* <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <ShopProducts/>
          </div> */}
        </div>
      </div>
    </div>
  );
}
