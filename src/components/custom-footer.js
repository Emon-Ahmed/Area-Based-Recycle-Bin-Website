import { Section, Container } from "@/components/craft";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/../public/logo.svg";
import Balancer from "react-wrap-balancer";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="container">
      <Section>
        <Container className="grid md:grid-cols-[1.5fr_0.5fr_0.5fr] gap-12 border-t">
          <div className="flex flex-col gap-6 not-prose">
            <Link href="/">
              <h3 className="sr-only">brijr/components</h3>
              <Image
                src={Logo}
                alt="Logo"
                width={120}
                height={27.27}
                className="transition-all dark:invert hover:opacity-75"
              ></Image>
            </Link>
            <p>
              <Balancer>
                Area Based Shop is a collection of Next.js, React, Typescript
                components for building landing pages and websites.
              </Balancer>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h5>Website</h5>
            <Link href="/">Blog</Link>
            <Link href="/">Authors</Link>
            <Link href="/">Categories</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h5>Legal</h5>
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
            © Area Based eCommerce Website
            . All rights reserved. 2024-present.
          </p>
        </Container>
      </Section>
    </footer>
  );
}
