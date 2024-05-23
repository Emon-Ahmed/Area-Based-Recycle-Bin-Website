import { Button } from "@/components/ui/button";

export default function FeaturedCategory() {
  return (
    <section className="pt-20 pb-8">
      <h2 className="mb-10 text-4xl font-bold text-center">
        Shop by Categories
      </h2>
      <div className="flex justify-center gap-8">
        <div className="flex flex-col items-center">
          <img
            alt="Home Decor"
            className="object-cover w-48 h-48 mb-4"
            height="200"
            src="/boys-dress.jpg"
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width="200"
          />
          <Button variant="outline">Home Decor</Button>
        </div>
        <div className="flex flex-col items-center">
          <img
            alt="Living Room"
            className="object-cover mb-4 h-96 w-96"
            height="400"
            src="/girls-dress.jpg"
            style={{
              aspectRatio: "400/400",
              objectFit: "cover",
            }}
            width="400"
          />
          <Button variant="outline">Living Room</Button>
        </div>
        <div className="flex flex-col items-center">
          <img
            alt="Lighting"
            className="object-cover w-48 h-48 mb-4"
            height="200"
            src="/boys-pants.jpg"
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width="200"
          />
          <Button variant="outline">Lighting Items</Button>
        </div>
      </div>
    </section>
  );
}
