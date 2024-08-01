"use client";
import { Input } from "@/components/ui/input";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import ShopProducts from "./shop-products";
import Product from "./product";
import { Button } from "./ui/button";

export default async function ShopBanner() {
  const [results, setResults] = useState(null);

  const [searchProductCategory, setSearchProductCategory] = useState("");
  const [searchProductLocation, setSearchProductLocation] = useState("");

  const [category, setCategory] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    fetch("/api/category", { cache: "no-cache" })
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
      });
  }, []);

  useEffect(() => {
    fetch("/api/location", { cache: "no-cache" })
      .then((res) => res.json())
      .then((data) => {
        setLocation(data);
      });
  }, []);

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const productName = formData.get("productName");
      const res = await fetch(
        `/api/products?name=${productName}&location=${searchProductLocation}&category=${searchProductCategory}`
      );
      const data = await res.json();
      setResults(data);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div>
      <div className="bg-[url('/cover.jpg')]">
        <div className="flex flex-col items-center justify-center py-12 layer">
          <div className="w-full max-w-3xl p-8 bg-white rounded-lg shadow-lg ">
            <div className="mb-6 text-center ">
              <h1 className="text-2xl font-bold text-gray-900">
                Localized Recycle Bins Marketplace
              </h1>
              <p className="mt-2 text-gray-600">
                Search for anything and get the best results.
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <Select onValueChange={(e) => setSearchProductCategory(e)}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Category" />
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
              <Select onValueChange={setSearchProductLocation}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Location" />
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
              <form className="flex items-center space-x-4" onSubmit={onSubmit}>
                <Input
                  id="productName"
                  name="productName"
                  className="w-full"
                  placeholder="Search for anything..."
                  type="text"
                />
                <Button type="submit">Search</Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div>
        {results ? (
          <div className="py-12 md:py-12 lg:py-16">
            <div className="grid gap-6 px-4 mx-auto md:gap-8 ">
              <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {results?.map((product, i) => {
                  return <Product key={i} product={product} />;
                })}
              </div>
            </div>
          </div>
        ) : (
          <ShopProducts />
        )}
      </div>
    </div>
  );
}
