import { dbConnect } from "@/lib/mongo";
import { ordersModel } from "@/models/order-model";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { id } = params;
    await dbConnect();
    const order = await ordersModel.findOne({ _id: id });
    return NextResponse.json({ order });
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json({ message: error }, { status: 404 });
  }
}

export async function PUT(req, value) {
  try {
    const id = value?.params?.id;
    console.log(id);
    const data = { _id: id };
    const payload = await req.json();

    await dbConnect();

    const order = await ordersModel.findOneAndUpdate(data, payload);
    console.log({ success: true });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error Order:", error);
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
