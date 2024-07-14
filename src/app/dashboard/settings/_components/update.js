"use client";
import Loading from "@/app/loading";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";

const UpdateUser = ({ getUser }) => {
  const [checked, setChecked] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch(`/api/users/${getUser?.id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, []);
  console.log(user);
  async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("userName");

    let data = await fetch(`/api/users/${getUser?.id}`, {
      method: "PUT",
      body: JSON.stringify({
        name,
      }),
    });
    data = await data.json();
    if (data.success) {
      alert("Updated");
    } else {
      alert("Try Again");
    }
  }

  if (isLoading) return <Loading />;
  if (!user) return <p>No Data</p>;
  return (
    <>
      <Card x-chunk="dashboard-04-chunk-1">
        <form onSubmit={onSubmit}>
          <CardHeader></CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="userName"
                  type="text"
                  className="w-full"
                  placeholder="Name"
                  defaultValue={user?.user?.name}
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
                    <Switch checked={checked} onCheckedChange={setChecked} />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="px-6 py-4 border-t">
            <Button type="submit">Save</Button>
          </CardFooter>
        </form>
      </Card>
    </>
  );
};

export default UpdateUser;
