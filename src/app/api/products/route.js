import { dbConnect } from "@/lib/mongo";
import { productsModel } from "@/models/products-model";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const {
    productName,
    productDescription,
    // productCategory,
    productPrice,
    // productLocation,
    // productImage,
  } = await request.json();
  await dbConnect();
  const newProduct = {
    productName,
    productDescription,
    // productCategory,
    productPrice,
    // productLocation,
    // productImage,
  };
  try {
    await productsModel.create(newProduct);
    return new NextResponse("Product has been created", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};


