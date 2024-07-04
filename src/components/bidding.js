"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Bidding = ({ product, session }) => {
  const [error, setError] = useState("");
  const router = useRouter();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const price = formData.get("price");
      const user = session?.user?.email;
      const userName = session?.user?.name;
      const product_id = product?.id;
      const res = await fetch("http://localhost:3000/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          price,
          user,
          userName,
          product: product_id,
        }),
      });
      res.status === 201 && router.refresh();
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  }
  return (
    <form onSubmit={onSubmit}>
      <div className="flex items-center gap-4">
        <span className="text-gray-500 dark:text-gray-400">Bid a price:</span>
        <Input
          className="w-20 px-3 py-2 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50"
          type="text"
          name="price"
          placeholder={product?.productPrice}
        />
        <Button type="submit" size="lg">
          Request A Purchase
        </Button>
      </div>
    </form>
  );
};

export default Bidding;
