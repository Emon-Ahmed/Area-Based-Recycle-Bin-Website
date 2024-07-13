import { auth } from "@/lib/auth";
import { getOrderByProductAndUserMyOrder } from "@/queries/getOrder";

const MyOrders = async () => {
  const session = await auth();
  const userEmail = session?.user?.email;

  const myOrder = await getOrderByProductAndUserMyOrder(userEmail);

  console.log(myOrder);

  return <div>MyOrders</div>;
};

export default MyOrders;
