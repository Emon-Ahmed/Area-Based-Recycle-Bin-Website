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
import Balancer from "react-wrap-balancer";
import Navbar from "@/components/custom-navbar";
import { RiLuggageCartLine } from "react-icons/ri";
import Link from "next/link";

export default function Component() {
  return (
    <div>
      <Navbar />
      <div className="container my-24">
        <Section className="my-16">
          <Container className="flex flex-col items-center gap-6 text-center">
            <Link href="/" className="flex items-center gap-2">
              <h3 className="sr-only">Recycle Bin Website</h3>
              <RiLuggageCartLine className="w-12 h-12" />
              <span className="text-3xl font-bold">Recycle Bin Website</span>
            </Link>
            <h1 className="text-4xl tracking-tight scroll-m-20 lg:text-5xl">
              <Balancer>
                Eco-friendly e-commerce platform offering diverse, area-specific
                recycling bin solutions.
              </Balancer>
            </h1>
            <h3 className="text-2xl tracking-tight scroll-m-20 text-muted-foreground">
              <Balancer>
                "An innovative marketplace connecting multiple vendors,
                providing specialized recycling bins tailored to regional
                requirements, promoting sustainable waste management practices."
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
