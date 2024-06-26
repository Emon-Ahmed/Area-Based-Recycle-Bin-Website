import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import RelatedProducts from "./relatedProducts";

const SingleProduct = ({ product }) => {
  return (
    <div>
      <div className="bg-white dark:bg-gray-950">
        <section className="grid items-start max-w-6xl gap-8 px-4 py-12 mx-auto md:grid-cols-2 md:gap-12 md:py-12">
          <div>
            <img
              alt="Product Image"
              className="object-cover w-full overflow-hidden border border-gray-200 rounded-lg aspect-square dark:border-gray-800"
              height={600}
              src={product?.productImage}
              width={600}
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl font-bold md:text-4xl">
              {product?.productName}
            </h1>
            <p className="text-lg text-gray-500 dark:text-gray-400 md:text-xl">
              {product?.productDescription}
            </p>

            <div className="text-4xl font-bold">${product?.productPrice}</div>
            <div className="grid gap-4">
              <div className="flex items-center gap-4"></div>
              <div className="flex items-center gap-4">
                <span className="text-gray-500 dark:text-gray-400">
                  Bid a price:
                </span>
                <Input
                  className="w-20 px-3 py-2 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50"
                  defaultValue="149"
                  max="149"
                  min="1"
                  type="number"
                />
                <Button size="lg">Request For Purchase</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 bg-gray-100 dark:bg-gray-800 md:py-20">
          <div className="max-w-6xl px-4 mx-auto">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div>
                <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                  Product Details
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold">Specifications</h3>
                    <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                      <li>
                        <span className="font-semibold text-gray-900 dark:text-gray-50">
                          Driver Size:
                        </span>
                        40mm
                      </li>
                      <li>
                        <span className="font-semibold text-gray-900 dark:text-gray-50">
                          Frequency Response:
                        </span>
                        20Hz - 20kHz
                      </li>
                      <li>
                        <span className="font-semibold text-gray-900 dark:text-gray-50">
                          Impedance:
                        </span>
                        32 Ohms
                      </li>
                      <li>
                        <span className="font-semibold text-gray-900 dark:text-gray-50">
                          Bluetooth Version:
                        </span>
                        5.0
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="mb-4 text-2xl font-bold md:text-3xl">Pricing</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold">Standard</h3>
                    <p className="text-4xl font-bold">$149.99</p>
                    <p className="text-gray-500 dark:text-gray-400">
                      Includes headphones and charging cable.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Premium</h3>
                    <p className="text-4xl font-bold">$199.99</p>
                    <p className="text-gray-500 dark:text-gray-400">
                      Includes headphones, charging cable, and carrying case.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <RelatedProducts /> */}
      </div>
    </div>
  );
};

export default SingleProduct;
