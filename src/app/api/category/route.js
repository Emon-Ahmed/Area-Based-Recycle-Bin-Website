import { dbConnect } from "@/lib/mongo";
import { categoryModel } from "@/models/category-model";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { name } = await request.json();
  await dbConnect();
  const category = { name };
  try {
    await categoryModel.create(category);
    return new NextResponse("Category has been created", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};

export async function GET() {
  try {
    await dbConnect();
    const category = await categoryModel.find({});
    return NextResponse.json(category);
  } catch (error) {
    return NextResponse.json({ success: false });
  }
}


