import { replaceMongoIdInArray } from "@/lib/convertData";
import { ordersModel } from "@/models/order-model";
import { productsModel } from "@/models/products-model";

export async function getOrderList() {
  try {
    const orders = await ordersModel.find({}).populate("product").lean();
    console.log(orders);
    return replaceMongoIdInArray(orders);
  } catch (error) {
    console.log("Error fetching order list:", error);
    // throw new Error("Failed to fetch order list");
  }
}



export async function getOrderByProductAndUser(userEmail, product_ID) {
  try {
    const orders = await ordersModel.find({user: userEmail, product: product_ID}).populate("product").lean();
    console.log(orders);
    return replaceMongoIdInArray(orders);
  } catch (error) {
    console.log("Error fetching order list:", error);
    // throw new Error("Failed to fetch order list");
  }
}

