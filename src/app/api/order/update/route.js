import { dbConnect } from "@/lib/mongo";
import { ordersModel } from "@/models/order-model";
import { NextResponse } from "next/server";


export async function PUT(req, value) {
  const id = value?.params?.id;

  const data = { _id: id };
  const payload = await req.json();

  await dbConnect();

  const order = await ordersModel.findOneAndUpdate(data, payload);
  return NextResponse.json({ order, success: true });
}
