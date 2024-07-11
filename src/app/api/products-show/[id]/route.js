import { dbConnect } from "@/lib/mongo";
import { productsModel } from "@/models/products-model";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { id } = params;
    await dbConnect();
    const product = await productsModel.findOne({ _id: id });
    return NextResponse.json({ product });
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json({ message: error }, { status: 404 });
  }
}

export async function PUT(req, value) {
  const id = value?.params?.id;

  const data = { _id: id };
  const payload = await req.json();

  await dbConnect();

  const product = await productsModel.findOneAndUpdate(data, payload);
  return NextResponse.json({ product, success: true });
}

export async function DELETE(request, { params }) {
  await dbConnect();
  const { id } = params;
  const product = await productsModel.deleteOne({ _id: id });
  return NextResponse.json(product);
}
