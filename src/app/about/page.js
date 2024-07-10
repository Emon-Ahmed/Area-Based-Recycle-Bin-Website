import { Section, Container } from "@/components/craft";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navbar from "@/components/custom-navbar";
import TopBar from "@/components/top-bar";

const Hero = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <div className="container">
        <Section>
          <Container>
            <div className="flex flex-col gap-6">
              <Button asChild className="w-fit" size={"sm"} variant={"outline"}>
                <Link className="not-prose" href="https://9d8.dev">
                  Area Based Recycle Bin Website <ArrowRight className="w-4" />
                </Link>
              </Button>
              <h1 className="text-5xl">
                <Balancer>
                  Eco-friendly e-commerce platform offering diverse,
                  area-specific recycling bin solutions.
                </Balancer>
              </h1>
              <h3 className="text-2xl text-muted-foreground">
                <Balancer>
                  "An innovative marketplace connecting multiple vendors,
                  providing specialized recycling bins tailored to regional
                  requirements, promoting sustainable waste management
                  practices."
                </Balancer>
              </h3>
              <div className="my-8 h-96 not-prose w-full overflow-hidden border rounded-lg md:rounded-xl md:h-[480px]">
                <Image
                  className="object-cover object-bottom w-full h-full"
                  src="/About-Image.jpg"
                  width={1920}
                  height={1080}
                  alt="hero image"
                  // placeholder="blur"
                />
              </div>
            </div>
          </Container>
        </Section>
      </div>
    </div>
  );
};

export default Hero;
