import { replaceMongoIdInObject } from "@/lib/convertData";
import { dbConnect } from "@/lib/mongo";
import { productsModel } from "@/models/products-model";

export async function getProducts(id) {
  await dbConnect();
  const product = await productsModel.findById(id).lean();
  return replaceMongoIdInObject(product);
}

export async function getProductSearch(str) {
  await dbConnect();
  let searchQuery = `${str}`;
  const products = await productsModel.find({
    $or: [{ productName: { $regex: searchQuery, $options: "i" } }],
  });
  return products;
}
