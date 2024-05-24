"use client";
// import { BDLocations } from "react-bd-location";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, Upload } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export default function AddProduct() {
  const [error, setError] = useState("");
  const router = useRouter();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const productName = formData.get("productName");
      const productDescription = formData.get("productDescription");
      // const productCategory = formData.get("productCategory");
      const productPrice = formData.get("productPrice");
      // const productLocation = formData.get("productLocation");
      // const productImage = formData.get("productImage");
      const res = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productName,
          productDescription,
          // productCategory,
          productPrice,
          // productLocation,
          // productImage,
        }),
      });
      res.status === 201 && router.push("/dashboard/products");
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-4">
        <main className="grid items-start flex-1 gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <form
            onSubmit={onSubmit}
            className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4"
          >
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon" className="h-7 w-7">
                <ChevronLeft className="w-4 h-4" />
                <span className="sr-only">Back</span>
              </Button>
              <h1 className="flex-1 text-xl font-semibold tracking-tight shrink-0 whitespace-nowrap sm:grow-0">
                Pro Controller
              </h1>
              <Badge variant="outline" className="ml-auto sm:ml-0">
                In stock
              </Badge>
              <div className="items-center hidden gap-2 md:ml-auto md:flex">
                <Button variant="outline" size="sm">
                  Discard
                </Button>
                <Button type="submit" size="sm">
                  Save Product
                </Button>
              </div>
            </div>
            <div className="text-red-500">{error}</div>
            <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
              <div className="grid items-start gap-4 auto-rows-max lg:col-span-2 lg:gap-8">
                <Card x-chunk="dashboard-07-chunk-0">
                  <CardHeader>
                    <CardTitle>Product Details</CardTitle>
                    <CardDescription>
                      Give The Proper Details About Your Product
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          name="productName"
                          type="text"
                          className="w-full"
                          placeholder="Product Name"
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                          id="description"
                          name="productDescription"
                          placeholder="Product Description"
                          className="min-h-32"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card x-chunk="dashboard-07-chunk-2">
                  <CardHeader>
                    <CardTitle>Product Category</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 sm:grid-cols-3">
                      <div className="grid gap-3">
                        <Label htmlFor="category">Category</Label>
                        <Select>
                          <SelectTrigger
                            id="category"
                            name="productCategory"
                            aria-label="Select category"
                          >
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="clothing">Clothing</SelectItem>
                            <SelectItem value="electronics">
                              Electronics
                            </SelectItem>
                            <SelectItem value="accessories">
                              Accessories
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="grid items-start gap-4 auto-rows-max lg:gap-8">
                <Card x-chunk="dashboard-07-chunk-5">
                  <CardHeader>
                    <CardTitle>Product Price</CardTitle>
                    <CardDescription>
                      Set Product Price For Bidding
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3">
                      <Input
                        name="productPrice"
                        id="price"
                        type="text"
                        className="w-full"
                        placeholder="৳1200"
                      />
                    </div>
                  </CardContent>
                </Card>
                <Card x-chunk="dashboard-07-chunk-5">
                  <CardHeader>
                    <CardTitle>Product Location</CardTitle>
                    <CardDescription>
                      Set Product Price For Bidding
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3">
                      {/* <BDLocations
                        onChange={(e) => console.log(e)}
                        bn={false}
                        showLable={true}
                        className="select"
                        label={{
                          division: "",
                          district: "",
                          upazila: "",
                        }}
                        placeholder={{
                          division: "",
                          district: "",
                          upazila: "",
                        }}
                      /> */}
                    </div>
                  </CardContent>
                </Card>
                <Card
                  className="overflow-hidden"
                  x-chunk="dashboard-07-chunk-4"
                >
                  <CardHeader>
                    <CardTitle>Product Images</CardTitle>
                    <CardDescription>
                      Upload images of your product.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-2">
                      <Image
                        alt="Product image"
                        className="object-cover w-full rounded-md aspect-square"
                        height="300"
                        src="/placeholder.svg"
                        width="300"
                      />
                      <div className="grid grid-cols-3 gap-2">
                        <button>
                          <Image
                            alt="Product image"
                            className="object-cover w-full rounded-md aspect-square"
                            height="84"
                            src="/placeholder.svg"
                            width="84"
                          />
                        </button>
                        <button>
                          <Image
                            alt="Product image"
                            className="object-cover w-full rounded-md aspect-square"
                            height="84"
                            src="/placeholder.svg"
                            width="84"
                          />
                        </button>
                        <button className="flex items-center justify-center w-full border border-dashed rounded-md aspect-square">
                          <Upload className="w-4 h-4 text-muted-foreground" />
                          <span className="sr-only">Upload</span>
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 md:hidden">
              <Link href="/dashboard/products">
                <Button variant="outline" size="sm">
                  Discard
                </Button>
              </Link>
              <Button type="submit" size="sm">
                Save Product
              </Button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
