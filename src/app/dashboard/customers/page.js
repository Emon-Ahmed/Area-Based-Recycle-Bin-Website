import { Badge } from "@/components/ui/badge";
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
import { formatMyDate } from "@/lib/date";
import { dbConnect } from "@/lib/mongo";
import { getUser } from "@/queries/getUser";

export default async function Customers() {
  await dbConnect();
  const user = await getUser();
  // console.log(user);
  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-4">
        <main className="grid items-start flex-1 gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols xl:grid-cols">
          <div className="grid items-start gap-4 auto-rows-max md:gap-8 lg:col-span-2">
            <Card x-chunk="dashboard-05-chunk-3">
              <CardHeader className="px-7">
                <CardTitle>Customers</CardTitle>
                <CardDescription>All customers from you site.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name </TableHead>
                      <TableHead className="hidden sm:table-cell">
                        Email
                      </TableHead>
                      <TableHead className="hidden sm:table-cell">
                        Type
                      </TableHead>

                      <TableHead className="hidden md:table-cell">
                        Date
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {user.map((user, i) => {
                      return (
                        <TableRow className="bg-accent">
                          <TableCell>
                            <div className="font-medium">{user?.name}</div>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm text-muted-foreground md:inline">
                              {user?.email}
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            {user?.role || "Customer"}
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {/* {formatMyDate(user?.createdOn)} */}
                          </TableCell>
                        </TableRow>
                      );
                    })}
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
