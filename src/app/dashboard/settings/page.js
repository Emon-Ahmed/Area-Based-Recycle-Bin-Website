"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

export default function Settings() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        <div className="grid w-full max-w-6xl gap-2 mx-auto">
          <h1 className="text-3xl font-semibold">Settings</h1>
        </div>
        <div className="grid items-start w-full max-w-6xl gap-6 mx-auto">
          <div className="grid gap-6">
            <Card x-chunk="dashboard-04-chunk-1">
              <CardHeader>
                {/* <CardTitle>Name</CardTitle>
                <CardDescription>Update Your Name</CardDescription> */}
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid gap-6">
                    <div className="grid gap-3">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="productName"
                        type="text"
                        className="w-full"
                        placeholder="Product Name"
                      />
                    </div>

                    <div className="grid gap-3">
                      <div className="flex flex-row items-center justify-between p-4 border rounded-lg">
                        <div className="space-y-0.5">
                          <Label>Become A Seller</Label>
                          <div>
                            If you want to sell something then become a seller,
                            otherwise you can be a good customer.
                          </div>
                        </div>
                        <div>
                          <Switch
                          // checked={field.value}
                          // onCheckedChange={field.onChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="px-6 py-4 border-t">
                <Button>Save</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
