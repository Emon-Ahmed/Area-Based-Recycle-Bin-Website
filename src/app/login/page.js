import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Navbar from "@/components/custom-navbar";
import LoginFormComponent from "@/components/login-form";

export default function LoginForm() {
  return (
    <div>
      <Navbar />
      <Card className="max-w-sm mx-auto my-32">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginFormComponent />
        </CardContent>
      </Card>
    </div>
  );
}
