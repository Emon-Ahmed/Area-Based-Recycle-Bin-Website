import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { Section, Container } from "@/components/craft";
import Image from "next/image";
import Logo from "@/../public/logo.svg";
import Balancer from "react-wrap-balancer";
import Navbar from "@/components/custom-navbar";

export default function Component() {
  return (
    <div>
      {" "}
      <Navbar />
      <div className="container my-32">
        <Section className="my-24">
          <Container className="flex flex-col items-center gap-6 text-center">
            <Image
              src={Logo}
              width={172}
              height={72}
              alt="Company Logo"
              className="mb-6 not-prose dark:invert md:mb-8"
            />
            <h1 className="text-4xl tracking-tight scroll-m-20 lg:text-5xl">
              <Balancer>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Balancer>
            </h1>
            <h3 className="text-2xl tracking-tight scroll-m-20 text-muted-foreground">
              <Balancer>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </Balancer>
            </h3>
          </Container>
        </Section>
        <Card className="w-full max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you as soon as
              possible.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First Name</Label>
                <Input id="first-name" placeholder="Enter your first name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last Name</Label>
                <Input id="last-name" placeholder="Enter your last name" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
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
        </Card>
      </div>
    </div>
  );
}
