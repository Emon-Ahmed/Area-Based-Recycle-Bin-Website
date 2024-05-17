import * as Craft from "@/components/craft";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Placeholder from "@/../public/placeholder.svg";

const FeatureLeft = () => {
  return (
    <Craft.Section>
      <Craft.Container className="grid items-stretch md:grid-cols-2 md:gap-12">
        <div className="relative flex overflow-hidden border rounded-lg not-prose h-96">
          <Image
            src={Placeholder}
            alt="placeholder"
            className="object-cover fill"
          />
        </div>
        <div className="flex flex-col gap-6 py-8">
          <h3 className="!my-0">Lorem ipsum dolor sit</h3>
          <p className="font-light leading-[1.4] opacity-70">
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
          <div className="flex items-center gap-2 not-prose">
            <Button className="w-fit" asChild>
              <Link href="#">Get Started</Link>
            </Button>
            <Button className="w-fit" variant="link" asChild>
              <Link href="#">Learn More {"->"}</Link>
            </Button>
          </div>
        </div>
      </Craft.Container>
    </Craft.Section>
  );
};

export default FeatureLeft;
