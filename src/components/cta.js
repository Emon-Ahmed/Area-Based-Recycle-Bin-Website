import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

const CTA = () => {
  return (
    <div className="container my-12">
      <Section>
        <Container className="flex flex-col items-center gap-6 p-6 text-center border rounded-lg bg-accent/50 md:rounded-xl md:p-12">
          <h2 className="text-3xl">Lorem ipsum dolor sit amet</h2>
          <h3 className="text-2xl text-muted-foreground">
            <Balancer>
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </Balancer>
          </h3>
          <div className="flex items-center gap-2 mx-auto mt-4 not-prose">
            <Button className="w-fit" asChild>
              <Link href="#">Get Started</Link>
            </Button>
            <Button className="w-fit" variant="link" asChild>
              <Link href="#">Learn More {"->"}</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default CTA;
