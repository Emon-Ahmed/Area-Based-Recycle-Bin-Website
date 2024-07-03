import { dbConnect } from "@/lib/mongo";
import { ordersModel } from "@/models/order-model";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { product, price, user } = await request.json();
  await dbConnect();
  const order = {
    price,
    user,
    product,
  };
  console.log(order);
  try {
    await ordersModel.create(order);
    return new NextResponse("Order has been created", {
      status: 201,
    });
  } catch (err) {
    console.log(err);
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
