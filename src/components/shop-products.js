import Product from "./product";

export default function ShopProducts() {
  return (
    <div className="container">
      <div className="py-12 md:py-12 lg:py-16">
        <div className="grid gap-6 px-4 mx-auto md:gap-8 ">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
}
