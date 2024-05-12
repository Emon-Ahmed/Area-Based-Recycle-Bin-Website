/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Ra3F9djmSYC
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuRadioItem, DropdownMenuRadioGroup, DropdownMenuContent, DropdownMenu, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function FeaturedProducts() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-6 md:gap-8 px-4 md:px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          <div className="grid gap-1">
            <h2 className="text-3xl font-bold tracking-tight">Featured Products</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Discover our latest collection of stylish and high-quality products.
            </p>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="flex items-center gap-2" variant="outline">
                  <ArrowUpDownIcon className="w-4 h-4" />
                  Sort by
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px]">
                <DropdownMenuRadioGroup value="featured">
                  <DropdownMenuRadioItem value="featured">Featured</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="newest">Newest</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="low">Price: Low to High</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="high">Price: High to Low</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="flex items-center gap-2" variant="outline">
                  <FilterIcon className="w-4 h-4" />
                  Filters
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[300px]">
                <DropdownMenuLabel>Filters</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <div className="grid gap-2">
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="category-men" />
                      Men{"\n                                    "}
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="category-women" />
                      Women{"\n                                    "}
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="category-kids" />
                      Kids{"\n                                    "}
                    </Label>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <div className="grid gap-2">
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="price-low" />
                      Under $50{"\n                                    "}
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="price-medium" />
                      $50 - $100{"\n                                    "}
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="price-high" />
                      Over $100{"\n                                    "}
                    </Label>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
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
            <div className="bg-white p-4 dark:bg-gray-950">
              <h3 className="font-semibold text-lg md:text-xl">Stylish Sunglasses</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">UV protection</p>
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-base md:text-lg">$29.99</h4>
                <Button size="sm">Add to Cart</Button>
              </div>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
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
            <div className="bg-white p-4 dark:bg-gray-950">
              <h3 className="font-semibold text-lg md:text-xl">Leather Crossbody Bag</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Stylish and practical</p>
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-base md:text-lg">$49.99</h4>
                <Button size="sm">Add to Cart</Button>
              </div>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
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
            <div className="bg-white p-4 dark:bg-gray-950">
              <h3 className="font-semibold text-lg md:text-xl">Wireless Headphones</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">High-quality sound</p>
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-base md:text-lg">$79.99</h4>
                <Button size="sm">Add to Cart</Button>
              </div>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
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
            <div className="bg-white p-4 dark:bg-gray-950">
              <h3 className="font-semibold text-lg md:text-xl">Classic Wristwatch</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Timeless design</p>
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-base md:text-lg">$59.99</h4>
                <Button size="sm">Add to Cart</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ArrowUpDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21 16-4 4-4-4" />
      <path d="M17 20V4" />
      <path d="m3 8 4-4 4 4" />
      <path d="M7 4v16" />
    </svg>
  )
}


function FilterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}