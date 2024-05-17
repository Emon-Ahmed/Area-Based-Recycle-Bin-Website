import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

export default function Dashboard() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        {/* <div className="grid w-full max-w-6xl gap-2 mx-auto">
          <h1 className="text-3xl font-semibold">Settings</h1>
        </div> */}
        <div className="grid items-start w-full max-w-6xl gap-6 mx-auto">
          <div className="grid gap-6">
            <Card x-chunk="dashboard-04-chunk-1">
              <CardHeader>
                <CardTitle>Store Name</CardTitle>
                <CardDescription>
                  Used to identify your store in the marketplace.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <Input placeholder="Store Name" />
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
