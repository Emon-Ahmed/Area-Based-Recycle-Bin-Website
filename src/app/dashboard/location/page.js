"use client";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import * as DialogPrimitive from "@radix-ui/react-dialog";
import Loading from "@/app/loading";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const DialogClose = DialogPrimitive.Close;
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import DeleteButton from "./_component/delete-button";
export default function Location() {
  const [error, setError] = useState("");
  const router = useRouter();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const name = formData.get("name");
      const res = await fetch("/api/location", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
        }),
      });
      res.status === 201 && DialogClose + router.refresh();
    } catch (error) {
      setError(error.message);
    }
  }

  const [location, setLocation] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/location", { cache: "no-cache" })
      .then((res) => res.json())
      .then((data) => {
        setLocation(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <Loading />;
  if (!location) return <p>No products</p>;
  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-4">
        <main className="grid items-start flex-1 gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols xl:grid-cols">
          <div className="grid items-start gap-4 auto-rows-max md:gap-8 lg:col-span-2">
            <Card x-chunk="dashboard-05-chunk-3">
              <CardHeader className="px-7">
                <div className="flex flex-row justify-between">
                  <div>
                    <CardTitle>Location</CardTitle>
                    <CardDescription>All Location List Here</CardDescription>
                  </div>
                  <div className="text-right">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline">Add Location</Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <form onSubmit={onSubmit}>
                          <DialogHeader>
                            <DialogTitle>Add Location</DialogTitle>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div className="grid items-center grid-cols-4 gap-4">
                              <Label htmlFor="name" className="text-right">
                              Divisions
                              </Label>
                              <Input
                                id="name"
                                name="name"
                                placeholder="Name"
                                className="col-span-3"
                              />
                            </div>
                          </div>
                          <DialogFooter>
                            <Button type="submit">Save changes</Button>
                          </DialogFooter>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Divisions</TableHead>
                      <TableHead className="hidden sm:table-cell">
                        Action
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {location?.map((location, i) => {
                      return (
                        <TableRow key={i} className="bg-accent">
                          <TableCell>
                            <div className="font-medium">{location?.name}</div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <DeleteButton location={location} />
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
