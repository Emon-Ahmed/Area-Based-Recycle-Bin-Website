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

import {
  BtnBold,
  BtnBulletList,
  BtnClearFormatting,
  BtnItalic,
  BtnLink,
  BtnNumberedList,
  BtnRedo,
  BtnStrikeThrough,
  BtnStyles,
  BtnUnderline,
  BtnUndo,
  HtmlButton,
  Separator,
  Toolbar,
  Editor,
  EditorProvider,
} from "react-simple-wysiwyg";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import Loading from "@/app/loading";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";

export default async function Page({ params: { update } }) {
  const [isLoading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const [category, setCategory] = useState(null);
  const [location, setLocation] = useState(null);
  const [productLocation, setProductLocation] = useState(null);
  const [productCategory, setProductCategory] = useState(null);
  const [resource, setResource] = useState();
  const [value, setValue] = useState("");

  function onChange(e) {
    setValue(e.target.value);
  }

  const productImage = resource?.secure_url || product.product?.productImage;
  useEffect(() => {
    fetch("/api/category", { cache: "no-cache" })
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch("/api/location", { cache: "no-cache" })
      .then((res) => res.json())
      .then((data) => {
        setLocation(data);
        setLoading(false);
      });
  }, []);

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
    const productDescription = value;
    const productPrice = formData.get("productPrice");

    let data = await fetch(`/api/products-show/${update}`, {
      method: "PUT",
      body: JSON.stringify({
        productName,
        productDescription,
        productShortDescription,
        productCategory,
        productPrice,
        productImage,
        productLocation,
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
                        <div className="grid gap-3 mb-12">
                          <Label htmlFor="description">Full Description</Label>

                          <EditorProvider className="min-h-32">
                            <Editor
                              value={product.product?.productDescription}
                              onChange={onChange}
                              defaultValue={product.product?.productDescription}
                            >
                              <Toolbar>
                                {/* <BtnUndo />
                              <BtnRedo /> */}
                                <Separator />
                                <BtnBold />
                                <BtnItalic />
                                <BtnUnderline />
                                <BtnStrikeThrough />
                                <Separator />
                                {/* <BtnNumberedList /> */}
                                {/* <BtnBulletList /> */}
                                <Separator />
                                <BtnLink />
                                <BtnClearFormatting />
                                <HtmlButton />
                                <Separator />
                                {/* <BtnStyles /> */}
                              </Toolbar>
                            </Editor>
                          </EditorProvider>
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
                          <Select
                            onValueChange={setProductCategory}
                            defaultValue={product?.product?.productCategory}
                          >
                            <SelectTrigger
                              id="category"
                              name="productCategory"
                              aria-label="Select category"
                            >
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              {category?.map((category, i) => {
                                return (
                                  <SelectItem value={category?.name}>
                                    {category?.name}
                                  </SelectItem>
                                );
                              })}
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
                      <CardDescription>
                        Set Product Price For Bidding
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Select defaultValue={product.product?.productLocation} onValueChange={setProductLocation}>
                        <SelectTrigger
                          id="location"
                          name="productCategory"
                          aria-label="Select location"
                        >
                          <SelectValue placeholder="Select location" />
                        </SelectTrigger>
                        <SelectContent>
                          {location?.map((location, i) => {
                            return (
                              <SelectItem value={location?.name}>
                                {location?.name}
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
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
                          placeholder="blur"
                          blurDataURL={"/placeholder.svg"}
                          src={productImage}
                          width="300"
                        />
                        <div className="grid gap-2 grid-cols">
                          <CldUploadWidget
                            uploadPreset="recycle-bin"
                            onSuccess={(result, { widget }) => {
                              setResource(result?.info);
                              widget.close();
                            }}
                          >
                            {({ open }) => {
                              function handleOnClick() {
                                setResource(undefined);
                                open();
                              }
                              return (
                                <div
                                  className="px-4 py-2 text-center border border-input bg-background hover:bg-accent hover:text-accent-foreground"
                                  variant="outline"
                                  onClick={handleOnClick}
                                >
                                  Upload an Image
                                </div>
                              );
                            }}
                          </CldUploadWidget>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </main>
        </form>
      </div>
    </div>
  );
}
