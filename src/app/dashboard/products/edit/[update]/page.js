"use client";
import { ChevronLeft } from "lucide-react";
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
import { useEffect, useState } from "react";
import Loading from "@/app/loading";

export default async function Page({ params: { update } }) {
  const [isLoading, setLoading] = useState(true);
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`/api/products-show/${update}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, []);

  async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const productName = formData.get("productName");
    const productShortDescription = formData.get("productShortDescription");
    const productPrice = formData.get("productPrice");

    let data = await fetch(`/api/products-show/${update}`, {
      method: "PUT",
      body: JSON.stringify({
        productName,
        productShortDescription,
        productPrice,
      }),
    });
    data = await data.json();
    if (data.success) {
      alert("Updated");
    } else {
      alert("Try Again");
    }
  }

  if (isLoading) return <Loading />;
  if (!product) return <p>No Data</p>;

  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-4">
        <form onSubmit={onSubmit}>
          <main className="grid items-start flex-1 gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
              <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" className="h-7 w-7">
                  <ChevronLeft className="w-4 h-4" />
                  <span className="sr-only">Back</span>
                </Button>
                <h1 className="flex-1 text-xl font-semibold tracking-tight shrink-0 whitespace-nowrap sm:grow-0">
                  Manage Order
                </h1>
                <div className="items-center hidden gap-2 md:ml-auto md:flex">
                  <Button variant="outline" size="sm">
                    Discard
                  </Button>
                  <Button type="submit" size="sm">
                    Save Product
                  </Button>
                </div>
              </div>
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
                            defaultValue={product.product?.productName}
                          />
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="description">Short Description</Label>
                          <Textarea
                            id="description"
                            name="productShortDescription"
                            placeholder="Product Description"
                            className="min-h-16"
                            defaultValue={
                              product.product?.productShortDescription
                            }
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
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-3">
                        <Input
                          name="productPrice"
                          id="price"
                          type="text"
                          className="w-full"
                          placeholder="৳1200"
                          defaultValue={product.product?.productPrice}
                        />
                      </div>
                    </CardContent>
                  </Card>
                  <Card x-chunk="dashboard-07-chunk-5">
                    <CardHeader>
                      <CardTitle>Product Location</CardTitle>
                      <CardDescription>Dhamrai, Dhaka, Dhaka</CardDescription>
                    </CardHeader>
                    <CardContent></CardContent>
                  </Card>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 md:hidden">
                <Button size="sm">Confirm Order</Button>
              </div>
            </div>
          </main>
        </form>
      </div>
    </div>
  );
}
