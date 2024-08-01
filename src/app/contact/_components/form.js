"use client";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Form = () => {
  const [error, setError] = useState("");
  const { toast } = useToast();

  async function handleContact(event) {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);
      const lname = formData.get("lname");
      const fname = formData.get("fname");
      const email = formData.get("email");
      const message = formData.get("message");

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fname,
          lname,
          email,
          message,
        }),
      });
      res.status === 201
        ? toast({
            description: "Your message has been sent.",
          })
        : toast({
            variant: "destructive",
            description: "Your message has not been sent.",
          });
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <form onSubmit={handleContact}>
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
        <CardDescription>
          Fill out the form below and we'll get back to you as soon as possible.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="fname">First Name</Label>
            <Input
              name="fname"
              id="fname"
              placeholder="Enter your first name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lname">Last Name</Label>
            <Input id="lname" name="lname" placeholder="Enter your last name" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            name="email"
            id="email"
            placeholder="Enter your email"
            type="email"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            name="message"
            className="min-h-[100px]"
            id="message"
            placeholder="Enter your message"
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" type="submit">
          Submit
        </Button>
      </CardFooter>
    </form>
  );
};

export default Form;
