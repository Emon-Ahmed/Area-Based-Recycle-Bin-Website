import * as Craft from "@/components/craft";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const FeatureLeft = () => {
  return (
    <div className="container">
      <Craft.Section>
        <Craft.Container className="grid items-stretch md:grid-cols-2 md:gap-12">
          <div className="relative flex overflow-hidden border rounded-lg not-prose h-96">
            <Image
              src="/mobile.webp"
              width="500"
              height="500"
              alt="placeholder"
              className="object-cover fill"
            />
          </div>
          <div className="flex flex-col gap-6 py-8">
            <h3 className="!my-0 text-2xl">How We Operate Our Work</h3>
            <p className="font-light leading-[1.4] opacity-70">
            our platform allows you to compare recycling bins from multiple vendors, including prices, features, and customer reviews, to help you make an informed decision.
            </p>
            <div className="flex items-center gap-2 not-prose">
              {/* <Button className="w-fit" asChild>
                <Link href="/about">Get Started</Link>
              </Button> */}
              <Button className="w-fit" variant="link" asChild>
                <Link href="/about">Learn More {"->"}</Link>
              </Button>
            </div>
          </div>
        </Craft.Container>
      </Craft.Section>
    </div>
  );
};

export default FeatureLeft;
