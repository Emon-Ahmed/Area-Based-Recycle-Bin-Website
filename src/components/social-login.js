"use client";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { Button } from "./ui/button";

const SocialLogins = () => {
  const handleAuth = (event) => {
    signIn("google", { callbackUrl: "http://localhost:3000/dashboard" });
  };
  return (
    <>
      <div className="flex gap-4">
        <Button variant="outline" className="w-full" onClick={handleAuth}>
          Google
        </Button>
      </div>
      <div className="mt-4 text-sm text-center">
        Don&apos;t have an account?{" "}
        <Link href="/sign-up" className="underline">
          Sign up
        </Link>
      </div>
    </>
  );
};

export default SocialLogins;
