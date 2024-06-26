import { replaceMongoIdInObject } from "@/lib/convertData";
import { productsModel } from "@/models/products-model";

export async function getProducts(id) {
    const product = await productsModel.findById(id).lean();
    return replaceMongoIdInObject(product)
}