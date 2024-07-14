import { auth } from "@/lib/auth";
import { getOrderByProductAndUserMyOrder } from "@/queries/getOrder";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import MyOrdersData from "./_components/my-orders-data";

const MyOrders = async () => {
  const session = await auth();
  const userEmail = session?.user?.email;
  const myOrder = await getOrderByProductAndUserMyOrder(userEmail);

  return (
    <div>
      <div className="flex flex-col w-full min-h-screen">
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-4">
          <main className="grid items-start flex-1 gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols xl:grid-cols">
            <div className="grid items-start gap-4 auto-rows-max md:gap-8 lg:col-span-2">
              <Card x-chunk="dashboard-05-chunk-3">
                <CardHeader className="px-7">
                  <CardTitle>Orders</CardTitle>
                  <CardDescription>
                    Recent orders from your store.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>
                          Product
                        </TableHead>
                        <TableHead>
                          Status
                        </TableHead>
                        {/* <TableHead className="hidden md:table-cell">
                             Date
                            </TableHead> */}
                        <TableHead className="text-right">Amount</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                     { (myOrder == 0 || null) ? <p className="my-4">No Orders</p> :
                      <MyOrdersData myOrder={myOrder} /> }
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
