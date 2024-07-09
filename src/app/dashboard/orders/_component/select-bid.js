"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TableCell } from "@/components/ui/table";
import { useState } from "react";

const SelectBid = ({ o }) => {
  const [finalCustomer, setFinalCustomer] = useState(null);

  return (
    <TableCell>
      <Select onValueChange={setFinalCustomer}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Customer" />
        </SelectTrigger>
        <SelectContent>
          {o?.users?.map((b, i) => {
            return (
              <SelectItem key={i} value={b?.userName}>
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
