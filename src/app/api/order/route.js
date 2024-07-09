import { dbConnect } from "@/lib/mongo";
import { ordersModel } from "@/models/order-model";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { price, user, userName, product } = await request.json();
  await dbConnect();
  const order = {
    price,
    user,
    userName,
    product,
  };
  try {
    await ordersModel.create(order);
    return new NextResponse("Order has been created", {
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
    const orders = await ordersModel.find({});
    return NextResponse.json(orders);
  } catch (error) {
    return NextResponse.json({ success: false });
  }
}
