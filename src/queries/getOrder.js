import { replaceMongoIdInArray } from "@/lib/convertData";
import { dbConnect } from "@/lib/mongo";
import { ordersModel } from "@/models/order-model";
await dbConnect();

export async function getOrderList() {
  await dbConnect();
  try {
    const orders = await ordersModel.find({}).populate("product").lean();
    const transformedArray = transformArray(orders);
    return transformedArray;
  } catch (error) {
    console.log("Error fetching order list:", error);
  }
}

export async function getOrderByProductAndUserMyOrder(userEmail) {
  await dbConnect();
  try {
    const orders = await ordersModel
      .find({ user: userEmail, active: true })
      .populate("product")
      .lean();
    return orders;
  } catch (error) {
    console.log("Error fetching order list:", error);
  }
}

export async function getOrderByProductAndUser(userEmail, product_ID) {
  await dbConnect();
  try {
    const orders = await ordersModel
      .find({ user: userEmail, product: product_ID })
      .populate("product")
      .lean();
    return replaceMongoIdInArray(orders);
  } catch (error) {
    console.log("Error fetching order list:", error);
  }
}

export async function getOrderByProduct(product_ID) {
  await dbConnect();
  try {
    const orders = await ordersModel
      .find({ product: product_ID })
      .populate("product")
      .lean();
    return replaceMongoIdInArray(orders);
  } catch (error) {
    console.log("Error fetching order list:", error);
  }
}

const transformArray = (arr) => {
  const result = [];
  const productMap = {};
  arr.forEach((item) => {
    const productId = item.product._id;
    if (!productMap[productId]) {
      productMap[productId] = {
        // id: arr._id,
        productName: item.product.productName,
        product_id: productId,
        users: [],
      };
      result.push(productMap[productId]);
    }

    productMap[productId].users.push({
      id: item._id,
      email: item.user,
      userName: item.userName,
      price: item.price,
      active: item.active,
      createdOn: item.createdOn,
      modifiedOn: item.modifiedOn,
    });
  });

  return result;
};
