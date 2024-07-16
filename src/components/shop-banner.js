"use client";
import { Input } from "@/components/ui/input";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { getProductSearch } from "@/queries/getProducts";
import { useState } from "react";

export default async function ShopBanner() {
  
  const [searchProduct, setSearchProduct] = useState("");
  const getSearchProducts = await getProductSearch(searchProduct);

  console.log(searchProduct, getSearchProducts);
  
  async function onSubmit(event) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const productName = formData.get("productName");
      setSearchProduct(productName);
    } catch (err) {
      setError(err.message);
    }
  }
  return (
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
          <form onSubmit={onSubmit}>
            <div className="flex-1">
              <Input
                id="productName"
                name="productName"
                className="w-full"
                placeholder="Search for anything..."
                type="text"
              />
            </div>
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="new-york">New York</SelectItem>
              </SelectContent>
              <Button type="submit">Search</Button>
            </Select>
          </form>
        </div>
      </div>
    </div>
  );
}
