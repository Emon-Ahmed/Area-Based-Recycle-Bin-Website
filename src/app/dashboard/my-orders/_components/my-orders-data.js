import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const MyOrdersData = ({ myOrder }) => {
  return (
    <>
      {myOrder.map((o, i) => {
        return (
          <TableRow key={i} className="bg-accent">
            <TableCell>
              {o?.product?.productName}
            </TableCell>
            <TableCell>
              <Badge className="text-xs" variant="secondary">
                Fulfilled
              </Badge>
            </TableCell>
            {/* <TableCell className="hidden md:table-cell">
                        {formatMyDate(o?.createdOn)}
                      </TableCell> */}
            <TableCell className="text-right">৳ {o?.price}</TableCell>
          </TableRow>
        );
      })}
    </>
  );
};

export default MyOrdersData;
