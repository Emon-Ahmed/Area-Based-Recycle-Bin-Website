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
import { useState } from "react";
import ShopProducts from "./shop-products";
import Product from "./product";

export default async function ShopBanner() {
  const [results, setResults] = useState(null);
  const [searchProductCategory, setSearchProductCategory] = useState("");
  const [searchProductLocation, setSearchProductLocation] = useState("");

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

  console.log(searchProductCategory, searchProductLocation, results);

  return (
    <>
      <div className="flex flex-col items-center justify-center py-12 bg-gradient-to-br from-[#4776E6] to-[#8E54E9]">
        <div className="w-full max-w-3xl p-8 bg-white rounded-lg shadow-lg">
          <div className="mb-6 text-center">
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
                <SelectGroup>
                  <SelectLabel>Category</SelectLabel>
                  <SelectItem value="phone">Phone</SelectItem>
                  <SelectItem value="laptop">Laptop</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select onValueChange={setSearchProductLocation}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Dhaka">Dhaka</SelectItem>
                <SelectItem value="Dhamrai">Dhamrai</SelectItem>
                <SelectItem value="Mirpur">Mirpur</SelectItem>
              </SelectContent>
            </Select>
            <form className="flex items-center" onSubmit={onSubmit}>
              <input
                id="productName"
                name="productName"
                className="w-full"
                placeholder="Search for anything..."
                type="text"
              />
              <button type="submit">Search</button>
            </form>
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
    </>
  );
}
