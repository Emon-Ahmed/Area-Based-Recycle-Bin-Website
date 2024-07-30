import { dbConnect } from "@/lib/mongo";
import { productsModel } from "@/models/products-model";
import { NextResponse } from "next/server";

export async function GET(request) {
  await dbConnect();
  const url = new URL(request.url);
  const searchName = url.searchParams.get("name");
  const searchLocation = url.searchParams.get("location");
  const searchCategory = url.searchParams.get("category");
  try {
    const items = await productsModel.find({
      $and: [
        { productName: { $regex: searchName, $options: "i" } },
        { productLocation: { $regex: searchLocation, $options: "i" } },
        { productCategory: { $regex: searchCategory, $options: "i" } },
      ],
    });
    return NextResponse.json(items);
  } catch (error) {
    NextResponse.json({ message: error.message });
  }
}

export const POST = async (request) => {
  const {
    productName,
    productDescription,
    productCategory,
    productPrice,
    productLocation,
    productShortDescription,
    productImage,
  } = await request.json();
  await dbConnect();
  const newProduct = {
    productName,
    productShortDescription,
    productDescription,
    productCategory,
    productPrice,
    productLocation,
    productImage,
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
