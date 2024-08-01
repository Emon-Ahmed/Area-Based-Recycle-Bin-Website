import Navbar from "@/components/custom-navbar";
import SingleProduct from "@/components/singleProduct";
import TopBar from "@/components/top-bar";
import { getProducts } from "@/queries/getProducts";

const Page = async ({ params: { id } }) => {
  const product = await getProducts(id);
  return (
    <div>
      {/* <TopBar /> */}
      <Navbar />
      <div className="container">
        <SingleProduct product={product} />
      </div>
    </div>
  );
};
export default Page;
