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
  console.log(finalCustomer);
  const handleChange = (event) => {
    const value = event.target.value;
    setFinalCustomer(value);
    console.log("Selected value:", value);
  };
  return (
    <TableCell>
      <Select onValueChange={setFinalCustomer} >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Customer" />
        </SelectTrigger>
        <SelectContent >
          {o?.users?.map((b, i) => {
            return (
              <SelectItem key={i} value={b?.userName}>
                {b?.userName} - {b?.price}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
      {/* <select onChange={handleChange}>
        <option value="" disabled selected hidden>
          Customer
        </option>
        {o?.users?.map((b, i) => {
          return (
            <option key={i} value={b?.userName}>
              {b?.userName} - {b?.price}
            </option>
          );
        })}
      </select> */}
    </TableCell>
  );
};

export default SelectBid;
