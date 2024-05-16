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

export default function Location() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-4">
        <main className="grid items-start flex-1 gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols xl:grid-cols">
          <div className="grid items-start gap-4 auto-rows-max md:gap-8 lg:col-span-2">
            <Card x-chunk="dashboard-05-chunk-3">
              <CardHeader className="px-7">
                <CardTitle>Location</CardTitle>
                <CardDescription>All Location for your site.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Upazilas</TableHead>
                      <TableHead className="hidden sm:table-cell">
                        Districts
                      </TableHead>
                      <TableHead className="hidden sm:table-cell">
                        Divisions
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="bg-accent">
                      <TableCell>
                        <div className="font-medium">Dhamrai</div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm text-muted-foreground md:inline">
                          Dhaka
                        </div>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        Dhaka
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="font-medium">Savar</div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm text-muted-foreground md:inline">
                          Dhaka
                        </div>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        Dhaka
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
