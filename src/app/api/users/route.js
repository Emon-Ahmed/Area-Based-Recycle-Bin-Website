import { dbConnect } from "@/lib/mongo";
import { userModel } from "@/models/user-model";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnect();
    const users = await userModel.find({});
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ success: false });
  }
}
