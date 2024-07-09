import Link from "next/link";
import { Button } from "@/components/ui/button";

const Product = ({ product }) => {
  return (
    <div>
      <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
        <Link
          href={"/products/" + product?._id}
          className="absolute inset-0 z-10"
        >
          <span className="sr-only">View</span>
        </Link>
        <img
          alt="Product 4"
          className="object-cover w-full h-64"
          height={400}
          src={product?.productImage}
          style={{
            aspectRatio: "400/400",
            objectFit: "cover",
          }}
          width={400}
        />
        <div className="p-4 bg-white dark:bg-gray-950">
          <h3 className="text-lg font-semibold md:text-xl">
            <Link href={"/products/" + product?._id}>
              {product?.productName}
            </Link>
          </h3>

          <p
            className="text-sm text-gray-500 dark:text-gray-400"
            dangerouslySetInnerHTML={{ __html: product?.productDescription }}
          />
          <div className="flex items-center justify-between">
            <h4 className="text-base font-semibold md:text-lg">
              ${product?.productPrice}
            </h4>
            <Link href={"/products/" + product?._id}>
              <Button size="sm">Buy Now</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
