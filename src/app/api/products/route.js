import { dbConnect } from "@/lib/mongo";
import { productsModel } from "@/models/products-model";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    await dbConnect();
    const { query } = req;
    const searchQuery = query.q;
    if (!searchQuery) {
      return res.status(400).json({ message: 'Search query is required' });
    }
    try {
      const items = await productsModel.find({
        $or: [
          { name: { $regex: searchQuery, $options: 'i' } },
        ],
      });
      res.status(200).json(items);
    } catch (error) {
      res.status(500).json({ message: error.message });
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
