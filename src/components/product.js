import { Button } from "./ui/button";
import Link from "next/link";
const Product = () => {
  return (
    <div>
      <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
        <Link className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View</span>
        </Link>
        <img
          alt="Product 4"
          className="object-cover w-full h-64"
          height={400}
          src="/placeholder.svg"
          style={{
            aspectRatio: "400/400",
            objectFit: "cover",
          }}
          width={400}
        />
        <div className="p-4 bg-white dark:bg-gray-950">
          <h3 className="text-lg font-semibold md:text-xl">
            Classic Wristwatch
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Timeless design
          </p>
          <div className="flex items-center justify-between">
            <h4 className="text-base font-semibold md:text-lg">$59.99</h4>
            <Button size="sm">Buy Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
