import { dbConnect } from "@/lib/mongo";
import { categoryModel } from "@/models/category-model";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { id } = params;
    await dbConnect();
    const category = await categoryModel.findOne({ _id: id });
    return NextResponse.json({ category });
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json({ message: error }, { status: 404 });
  }
}
export async function DELETE(request, { params }) {
  await dbConnect();
  const { id } = params;
  const category = await categoryModel.deleteOne({ _id: id });
  return NextResponse.json(category);
}
