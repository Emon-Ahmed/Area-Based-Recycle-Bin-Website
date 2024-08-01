import { Section, Container } from "@/components/craft";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/../public/logo.svg";
import Balancer from "react-wrap-balancer";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Facebook } from "lucide-react";
import { RiLuggageCartLine } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="container">
      <Section>
        <Container className="grid md:grid-cols-[1.5fr_0.5fr_0.5fr] gap-12 border-t">
          <div className="flex flex-col gap-6 not-prose">
            <Link href="/" className="flex items-center gap-2">
              <h3 className="sr-only">Recycle Bin Website</h3>
              <RiLuggageCartLine className="w-12 h-12" />
              <span className="text-3xl font-bold">Recycle Bin Website</span>
            </Link>
            <p>
              <Balancer>
              An innovative marketplace connecting multiple vendors, providing specialized recycling bins tailored to regional requirements, promoting sustainable waste management practices and websites.
              </Balancer>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="text-lg font-bold">Website</h5>
            <Link href="/">Home</Link>
            <Link href="/products">Shop</Link>
            <Link href="/about">About</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="text-lg font-bold">Legal</h5>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
            <Link href="/cookie-policy">Cookie Policy</Link>
          </div>
        </Container>
        <Container className="flex flex-col justify-between gap-6 border-t not-prose md:flex-row md:gap-2 md:items-center">
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Github />
            </Button>
            <Button variant="outline" size="icon">
              <Twitter />
            </Button>
            <Button variant="outline" size="icon">
              <Facebook />
            </Button>
          </div>
          <p className="text-muted-foreground">
            © Area Based eCommerce Website . All rights reserved. 2024-present.
          </p>
        </Container>
      </Section>
    </footer>
  );
}
