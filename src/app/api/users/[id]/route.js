import { dbConnect } from "@/lib/mongo";
import { productsModel } from "@/models/products-model";
import { userModel } from "@/models/user-model";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { id } = params;
    await dbConnect();
    const user = await userModel.findOne({ _id: id });
    return NextResponse.json({ user });
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json({ message: error }, { status: 404 });
  }
}

export async function PUT(req, value) {
  const id = value?.params?.id;

  const data = { _id: id };
  const payload = await req.json();
  console.log(payload);
  await dbConnect();

  const user = await userModel.findOneAndUpdate(data, payload);
  return NextResponse.json({ user, success: true });
}

export async function DELETE(request, { params }) {
  await dbConnect();
  const { id } = params;
  const user = await userModel.deleteOne({ _id: id });
  return NextResponse.json(user);
}
