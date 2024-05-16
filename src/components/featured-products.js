import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FeaturedProducts() {
  return (
    <div className="container">
      <div className="py-12 md:py-24 lg:py-32">
        <div className="grid gap-6 px-4 mx-auto md:gap-8 ">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-8">
            <div className="grid gap-1">
              <h2 className="text-3xl font-bold tracking-tight">
                Featured Products
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                Discover our latest collection of stylish and high-quality
                products.
              </p>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View</span>
              </Link>
              <img
                alt="Product 1"
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
                  Stylish Sunglasses
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  UV protection
                </p>
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-semibold md:text-lg">$29.99</h4>
                  <Button size="sm">Add to Cart</Button>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View</span>
              </Link>
              <img
                alt="Product 2"
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
                  Leather Crossbody Bag
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Stylish and practical
                </p>
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-semibold md:text-lg">$49.99</h4>
                  <Button size="sm">Add to Cart</Button>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View</span>
              </Link>
              <img
                alt="Product 3"
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
                  Wireless Headphones
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  High-quality sound
                </p>
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-semibold md:text-lg">$79.99</h4>
                  <Button size="sm">Add to Cart</Button>
                </div>
              </div>
            </div>
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
                  <Button size="sm">Add to Cart</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
