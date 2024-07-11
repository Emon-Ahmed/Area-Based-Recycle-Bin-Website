"use server";
import Bid from "./bidding-card";
import Bidding from "./bidding";
import { auth } from "@/lib/auth";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { getOrderByProduct } from "@/queries/getOrder";

const SingleProduct = async ({ product }) => {
  const bids = await getOrderByProduct(product?.id);
  const session = await auth();
  const bidUser = { users: bids.map((bid) => bid?.user) };
  const bidEmail = session?.user?.email;
  function isEmailInBideUser(email, bidUser) {
    return bidUser.users.includes(email);
  }
  const bidEmailMatch = isEmailInBideUser(bidEmail, bidUser);
  
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
            <Badge>
              <p>{product?.productCategory}</p>
            </Badge>
            <div className="text-4xl font-bold">৳{product?.productPrice}</div>
            {session ? (
              <div className="grid gap-4">
                <div className="flex items-center gap-4"></div>
                {bidEmailMatch ? (
                  <span className="text-gray-500 dark:text-gray-400">
                    Already Bid
                  </span>
                ) : (
                  <Bidding product={product} session={session} />
                )}

                <Bid product={product} session={session} />
              </div>
            ) : (
              <Card className="w-full max-w-sm overflow-hidden rounded-lg shadow-lg">
                <Link href="/login">
                  <div className="flex items-center justify-between py-7 px-7 bg-primary">
                    <h3 className="font-bold text-1xl text-primary-foreground">
                      Login First For Bidding / Buy
                    </h3>
                  </div>
                </Link>
              </Card>
            )}
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
