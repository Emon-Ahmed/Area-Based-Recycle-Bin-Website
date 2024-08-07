"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Loading from "@/app/loading";
import DeleteButton from "./delete-product";
import { formatMyDate } from "@/lib/date";
import Link from "next/link";

const ProductTable = () => {
  const [products, setProducts] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products-show")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <Loading />;
  if (!products) return <p>No products</p>;
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="hidden w-[100px] sm:table-cell">
              Image
            </TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Created at</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products?.map((product, i) => {
            return (
              <TableRow key={i}>
                <TableCell className="hidden sm:table-cell">
                  <Image
                    alt="Product image"
                    className="object-cover rounded-md aspect-square"
                    height="64"
                    src={product?.productImage}
                    width="64"
                  />
                </TableCell>
                <TableCell className="font-medium">
                  {product?.productName}
                </TableCell>
                <TableCell>
                  <Badge variant="outline">Active</Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  ৳{product?.productPrice}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {formatMyDate(product?.createdOn)}
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button aria-haspopup="true" size="icon" variant="ghost">
                        <MoreHorizontal className="w-4 h-4" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>
                        <Link href={`/dashboard/products/edit/${product?._id}`}>
                          Edit
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <DeleteButton product={product} />
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductTable;
