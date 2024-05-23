import * as Craft from "@/components/craft";
import { ArrowUpRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const content = [
  {
    question: "What types of recycling bins are available on the platform?",
    answer:
      "Our platform offers a wide range of recycling bins, including residential, commercial, and industrial bins, each designed for specific waste management needs.",
    link: "https://google.com",
  },
  {
    question: "How do I find recycling bins suitable for my area?",
    answer:
      "Simply enter your location on the website, and our system will display recycling bin options tailored to your regional recycling requirements and guidelines.",
  },
  {
    question: "Can I compare products from different vendors?",
    answer:
      "Yes, our platform allows you to compare recycling bins from multiple vendors, including prices, features, and customer reviews, to help you make an informed decision.",
  },
  {
    question:
      "Are there any eco-friendly initiatives associated with purchasing through this website?",
    answer:
      "Absolutely! We partner with vendors who prioritize sustainability, and a portion of each sale goes towards environmental conservation projects in your area.",
  },
];

const FAQ = () => {
  return (
    <div className="container">
      <Craft.Section>
        <Craft.Container>
          <h3 className="!mt-0 text-3xl">Frequently Asked Questions</h3>
          <h4 className="text-2xl text-muted-foreground">
            Can&apos;t find the answer you&apos;re looking for? Reach out to our
            customer support team.
          </h4>
          <div className="flex flex-col gap-4 mt-4 md:mt-8 not-prose">
            {content.map((item, index) => (
              <Accordion key={index} type="single" collapsible>
                <AccordionItem value={item.question}>
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base md:w-3/4">
                    {item.answer}
                    {item.link && (
                      <a
                        href={item.link}
                        className="flex items-center w-full mt-2 transition-all opacity-60 hover:opacity-100"
                      >
                        Learn more <ArrowUpRight className="ml-1" size="16" />
                      </a>
                    )}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </Craft.Container>
      </Craft.Section>
    </div>
  );
};

export default FAQ;
