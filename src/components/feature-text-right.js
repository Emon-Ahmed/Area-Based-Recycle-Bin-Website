import * as Craft from "@/components/craft";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const FeatureRight = () => {
  return (
    <div className="container">
      <Craft.Section>
        <Craft.Container className="grid items-stretch md:grid-cols-2 md:gap-12">
          <div className="flex flex-col gap-6 py-8">
            <h3 className="!my-0 text-2xl">Our Work Vision & Mission</h3>
            <p className="font-light leading-[1.4] opacity-70">
              Vision: To lead the global transition towards sustainable waste
              management by providing tailored recycling solutions through a
              diverse, multi-vendor e-commerce platform.
            </p>
            <p className="font-light leading-[1.4] opacity-70">
              Mission: To empower communities and businesses with easy access to
              specialized recycling bins, fostering environmental stewardship
              and sustainable practices.
            </p>
            <div className="flex items-center gap-2 not-prose">
              <Button className="w-fit" asChild>
                <Link href="/contact">Contact With Us</Link>
              </Button>
              {/* <Button className="w-fit" variant="link" asChild>
                <Link href="#">Learn More {"->"}</Link>
              </Button> */}
            </div>
          </div>
          <div className="relative flex overflow-hidden border rounded-lg not-prose h-96">
            <Image
              src="/showcase1.webp"
              alt="placeholder"
              width="450"
              height="450"
              className="object-cover fill"
            />
          </div>
        </Craft.Container>
      </Craft.Section>
    </div>
  );
};

export default FeatureRight;
