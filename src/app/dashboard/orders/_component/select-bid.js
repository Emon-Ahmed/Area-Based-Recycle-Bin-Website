"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TableCell } from "@/components/ui/table";
import { useEffect, useState } from "react";

const SelectBid = ({ o, ordersList }) => {
  const [finalCustomer, setFinalCustomer] = useState({});
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders(ordersList);
  }, [ordersList]);

  useEffect(() => {
    setFinalCustomer(o?.users?.find((i) => i?.active == true));
  }, [orders]);

  async function handleSubmit(event) {
    if (event) {
      let data = await fetch(`/api/order/${event}`, {
        method: "PUT",
        body: JSON.stringify({
          active: true,
        }),
      });
      data = await data.json();
      if (data.success) {
        alert("Updated");
        const update = orders?.map((i) => {
          return {
            ...i,
            users: i?.users?.map((u) => {
              if (u?.id == event) {
                return { ...u, active: true };
              }
              return { ...u };
            }),
          };
        });
        setOrders(update);
      } else {
        alert("Try Again");
      }
    }
  }
  return (
    <TableCell>
      <Select value={finalCustomer?.id} onValueChange={(e) => handleSubmit(e)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Customer" />
        </SelectTrigger>
        <SelectContent>
          {o?.users?.map((b, i) => {
            return (
              <SelectItem key={i} value={b?.id}>
                {b?.userName} - {b?.price}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </TableCell>
  );
};

export default SelectBid;
