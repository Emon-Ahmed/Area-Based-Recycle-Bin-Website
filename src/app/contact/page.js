import { Card } from "@/components/ui/card";
import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";
import Navbar from "@/components/custom-navbar";
import { RiLuggageCartLine } from "react-icons/ri";
import Link from "next/link";
import Form from "./_components/form";

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
          <Form />
        </Card>
      </div>
    </div>
  );
}
