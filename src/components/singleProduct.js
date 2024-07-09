"use server";
import Bid from "./bidding-card";
import Bidding from "./bidding";
import { auth } from "@/lib/auth";

const SingleProduct = async ({ product }) => {
  const session = await auth();
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
              {product?.productShortDescription}
            </p>
            <p>{product?.productCategory}</p>
            <div className="text-4xl font-bold">৳{product?.productPrice}</div>
            <div className="grid gap-4">
              <div className="flex items-center gap-4"></div>
              <Bidding product={product} session={session} />
              <Bid product={product} session={session} />
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
                <div
                  dangerouslySetInnerHTML={{
                    __html: product?.productDescription,
                  }}
                />
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
