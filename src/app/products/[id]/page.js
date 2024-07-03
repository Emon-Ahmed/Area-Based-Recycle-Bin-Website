import Navbar from "@/components/custom-navbar";
import SingleProduct from "@/components/singleProduct";
import {getProducts} from "@/queries/getProducts"
import { createOrder } from "@/app/actions/order";

const Page = async ({params:{id}}) => {
  const product = await getProducts(id);
  const order = await createOrder(id);

  return (
    <div>
      <Navbar />
      <div className="container">
       <SingleProduct product={product} order={order} />
      </div>
    </div>
  );
}
export default Page;