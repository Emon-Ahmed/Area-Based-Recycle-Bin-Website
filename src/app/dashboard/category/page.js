import { Badge } from "@/components/ui/badge";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import Link from "next/link";

export default function Customers() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-4">
        <main className="grid items-start flex-1 gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols xl:grid-cols">
          <div className="grid items-start gap-4 auto-rows-max md:gap-8 lg:col-span-2">
            <Card x-chunk="dashboard-05-chunk-3">
              <CardHeader className="px-7">
                <div className="flex flex-row justify-between">
                  <div>
                    <CardTitle>Category</CardTitle>
                    <CardDescription>
                      Manage your products and view their sales performance.
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <Link href="/dashboard/products/add-product">
                      <Button>Add Category</Button>
                    </Link>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name </TableHead>
                      <TableHead className="hidden sm:table-cell">
                        Type
                      </TableHead>
                      <TableHead className="hidden md:table-cell">
                        Date
                      </TableHead>
                      <TableHead className="hidden md:table-cell">
                        Action
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="bg-accent">
                      <TableCell>
                        <div className="font-medium">Liam Johnson</div>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        Sale
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        2023-06-23
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              aria-haspopup="true"
                              size="icon"
                              variant="ghost"
                            >
                              <MoreHorizontal className="w-4 h-4" />
                              <span className="sr-only">Toggle menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="font-medium">Liam Johnson</div>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        Sale
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        2023-06-23
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              aria-haspopup="true"
                              size="icon"
                              variant="ghost"
                            >
                              <MoreHorizontal className="w-4 h-4" />
                              <span className="sr-only">Toggle menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
