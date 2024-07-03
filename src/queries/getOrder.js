import { replaceMongoIdInArray } from "@/lib/convertData";
import { ordersModel } from "@/models/order-model";
import { productsModel } from "@/models/products-model";

export async function getOrderList() {
  const or = await ordersModel.find({})
    .populate({
      path: "product",
      model: productsModel,
    })
    .lean();
  return replaceMongoIdInArray(or);
}
