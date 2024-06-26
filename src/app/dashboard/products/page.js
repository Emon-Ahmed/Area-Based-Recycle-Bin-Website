import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ProductTable from "./_components/ProductTable";

export default function Dashboard() {
  return (
    <div className="flex flex-col w-full min-h-screen ">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-4">
        <main className="grid items-start flex-1 gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Card x-chunk="dashboard-06-chunk-0">
            <CardHeader>
              <div className="flex flex-row justify-between">
                <div>
                  <CardTitle>Products</CardTitle>
                  <CardDescription>
                    Manage your products and view their sales performance.
                  </CardDescription>
                </div>
                <div className="text-right">
                  <Link href="/dashboard/products/add-product">
                    <Button>Add Product</Button>
                  </Link>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ProductTable />
            </CardContent>
            {/* <CardFooter>
              <div className="text-xs text-muted-foreground">
                Showing <strong>1-10</strong> of <strong>32</strong> products
              </div>
            </CardFooter> */}
          </Card>
        </main>
      </div>
    </div>
  );
}
