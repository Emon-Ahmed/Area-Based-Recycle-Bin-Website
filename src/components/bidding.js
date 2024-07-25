"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Textarea } from "./ui/textarea";

const Bidding = ({ product, session }) => {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const userName = session?.user?.name;
  const user = session?.user?.email;

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      // const price = formData.get("price");
      const user = session?.user?.email;
      const userName = session?.user?.name;
      const product_id = product?.id;
      const res = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          price: input,
          user,
          userName,
          product: product_id,
        }),
      });
      if (res.status === 201) {
        router.refresh();
      } else {
        const data = await res.json();
        setError(data.message);
      }
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <Dialog>
      <div className="flex items-center gap-4">
        <Label htmlFor="name" className="text-left">
          Bid Price
        </Label>
        <div className="grid items-center">
          <Input
            value={input}
            onInput={(e) => setInput(e.target.value)}
            className="col"
            type="text"
            name="price"
            placeholder={product?.productPrice}
          />
        </div>
        <DialogTrigger asChild>
          <Button type="button">Bid & Checkout</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <form onSubmit={onSubmit}>
            <DialogHeader>
              <DialogTitle>Confirm Your Bid</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid items-center grid-cols-4 gap-4">
                <Label htmlFor="name" className="text-left">
                  Name
                </Label>
                <Input
                  defaultValue={userName}
                  id="name"
                  className="col-span-3"
                  readOnly
                />
              </div>
              <div className="grid items-center grid-cols-4 gap-4">
                <Label htmlFor="name" className="text-left">
                  City
                </Label>
                <Input
                  readOnly
                  id="name"
                  className="col-span-3"
                  defaultValue={user}
                />
              </div>
              <div className="grid items-center grid-cols-4 gap-4">
                <Label htmlFor="bid" className="text-left">
                  Bid Amount
                </Label>
                <Input id="bid" className="col-span-3" defaultValue={input} />
              </div>
              <div className="grid items-center grid-cols-4 gap-4">
                <Label htmlFor="address" className="text-left">
                  Address
                </Label>
                <Input
                  placeholder="Holding - 170/1, Word #9, Dhamrai, Dhaka"
                  id="address"
                  className="col-span-3"
                />
              </div>

              <div className="grid items-center grid-cols-4 gap-4">
                <Label htmlFor="name" className="text-left">
                  Payment
                </Label>
                <p className="col-span-3">Cash On Delivery</p>
              </div>
            </div>
            <Button type="submit">Confirm Bid</Button>
          </form>
        </DialogContent>
      </div>
    </Dialog>
  );
};

export default Bidding;
