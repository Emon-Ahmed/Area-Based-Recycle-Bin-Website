import { dbConnect } from "@/lib/mongo";
import { productsModel } from "@/models/products-model";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { id } = params;
    await dbConnect();
    const product = await productsModel.findOne({ _id: id });
    // if (!product) {
    //   return NextResponse.json(
    //     { message: "Product Not Found" },
    //     { status: 404 }
    //   );
    // }
    return NextResponse.json({product});
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json({ message: error }, { status: 404 });
  }
}
