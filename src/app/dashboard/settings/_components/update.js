"use client";
import Loading from "@/app/loading";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const UpdateUser = ({ getUser }) => {
  const router = useRouter();
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

  const [checked, setChecked] = useState(getUser?.isSeller);

  async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    let data = await fetch(`/api/users/${getUser?.id}`, {
      method: "PUT",
      body: JSON.stringify({
        name,
        isSeller: checked,
      }),
    });
    data = await data.json();
    if (data.success) {
      alert("Updated");
      router.refresh();
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
                  name="name"
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
