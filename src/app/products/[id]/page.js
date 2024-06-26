import Navbar from "@/components/custom-navbar";
import SingleProduct from "@/components/singleProduct";
import {getProducts} from "@/queries/getProducts"

const Page = async ({params:{id}}) => {
  
  const product = await getProducts(id);
  
  console.log(product);
  return (
    <div>
      <Navbar />
      <div className="container">
       <SingleProduct product={product} />
      </div>
    </div>
  );
}
export default Page;