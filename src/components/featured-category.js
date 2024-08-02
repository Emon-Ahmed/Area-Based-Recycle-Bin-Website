import { Button } from "@/components/ui/button";
import { Badge } from "./ui/badge";
import CategoryCard from "./category-card";
import Link from "next/link";

export default function FeaturedCategory() {
  return (
    <section className="pt-20 pb-8">
      <div className="mb-2 text-center">
        <Badge className="px-4 py-2 ">Buy and Sell Easily</Badge>
      </div>
      <h2 className="mb-10 text-4xl font-bold text-center ">
        SHOP BY CATEGORIES
      </h2>
      <div className="flex justify-center gap-8">
        <Link href="/product">
          <div className="flex flex-col items-center">
            <img
              alt="Home Decor"
              className="object-cover w-64 h-64 mb-4"
              height="200"
              src="/TV-Home-Appliances.jpg"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
            <Button variant="outline">Home & Lifestyle</Button>
          </div>
        </Link>
        <Link href="/product">
          <div className="flex flex-col items-center">
            <img
              alt="Living Room"
              className="object-cover mb-4 h-96 w-96"
              height="400"
              src="Electronics-Device.jpg"
              style={{
                aspectRatio: "400/400",
                objectFit: "cover",
              }}
              width="400"
            />
            <Button variant="outline">Electronics Device</Button>
          </div>
        </Link>
        <Link href="/product">
          <div className="flex flex-col items-center">
            <img
              alt="Lighting"
              className="object-cover w-64 h-64 mb-4"
              height="200"
              src="/Home-Lifestyle.jpg"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
            <Button variant="outline">TV & Home Appliances</Button>
          </div>
        </Link>
      </div>
      {/* <div>
        <CategoryCard/>
      </div> */}
    </section>
  );
}
