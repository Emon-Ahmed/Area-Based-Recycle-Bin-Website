"use client";

import { Button } from "@/components/ui/button";
import { login } from "@/app/actions";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import SocialLogins from "./social-login";

function LoginFormComponent() {
  const [error, setError] = useState("");
  const router = useRouter();

  async function onSubmit(event) {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);
      const response = await login(formData);
      console.log(response);
      if (!!response.error) {
        setError(response.error);
      } else {
        router.push("/dashboard");
      }
    } catch (err) {
      setError(err.message);
    }
  }
  return (
    <div>
      {error && <div className="text-center text-red-500">{error}</div>}
      <form className="login-form" onSubmit={onSubmit}>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link
                href="/forgot-password"
                className="inline-block ml-auto text-sm underline"
              >
                Forgot your password?
              </Link>
            </div>
            <Input id="password" name="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
        </div>
      </form>
      <div className="mt-4">
        <SocialLogins />
      </div>
    </div>
  );
}

export default LoginFormComponent;
