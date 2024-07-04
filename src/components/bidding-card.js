import { Card } from "@/components/ui/card";
import { getOrderByProduct } from "@/queries/getOrder";

export default async function Bid({ product }) {
  const bids = await getOrderByProduct(product?.id);
  return (
    <>
      {bids?.map((bid, i) => {
        return (
          <Card className="w-full max-w-sm overflow-hidden rounded-lg shadow-lg">
            <div className="flex items-center justify-between py-7 px-7 bg-primary">
              <h3 className="font-bold text-1xl text-primary-foreground">
                {bid?.userName}
              </h3>
              <div className="text-3xl font-bold text-primary-foreground">
                {bid?.price}
              </div>
            </div>
          </Card>
        );
      })}
    </>
  );
}
