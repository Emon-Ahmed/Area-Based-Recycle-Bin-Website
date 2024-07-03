"use client";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";

export default function Bid() {
  const [bids, setBids] = useState(null);
  useEffect(() => {
    fetch("/api/order")
      .then((res) => res.json())
      .then((data) => {
        setBids(data);
      });
  }, []);
  return (
    <>
      {bids?.map((bid, i) => {
        return (
          <Card className="w-full max-w-sm overflow-hidden rounded-lg shadow-lg">
            <div className="flex items-center justify-between py-7 px-7 bg-primary">
              <h3 className="font-bold text-1xl text-primary-foreground">
                User Name
              </h3>
              <div className="text-3xl font-bold text-primary-foreground">
                {bid?.price}
              </div>
            </div>
          </Card>
        );
      })}
    </>
  );
}
