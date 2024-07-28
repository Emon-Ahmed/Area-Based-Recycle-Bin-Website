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
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default async function ShopBanner() {
  const [results, setResults] = useState([]);
  const [searchProductCategory, setSearchProductCategory] = useState("");
  const [searchProductLocation, setSearchProductLocation] = useState("");
  const [searchProductName, setSearchProductName] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const productName = formData.get("productName");

    const res = await fetch(
      `/api/products?name=${productName}&location=${searchProductLocation}&category=${searchProductCategory}`
    );
    const data = await res.json();
    setResults(data);
  };

  console.log(results);

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
          <Select defaultValue={""} onChange={setSearchProductCategory}>
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
          <Select defaultValue={""} onChange={setSearchProductLocation}>
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
            <Input
              // value={searchProductName}
              // onChange={(event) =>
              //   setSearchProductName(event.target.value)
              // }
              // onChange={(e) => setSearchProductName(e.currentTarget.value)}
              id="productName"
              name="productName"
              className="w-full"
              placeholder="Search for anything..."
              type="text"
            />

            <div onClick={onSubmit}>Search</div>
          </form>
        </div>
      </div>
    </div>
  );
}
