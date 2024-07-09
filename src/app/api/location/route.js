import { dbConnect } from "@/lib/mongo";
import locationModel from "@/models/location-model";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    const { name } = await request.json();
    await dbConnect();
    const location = { name };
    try {
      await locationModel.create(location);
      return new NextResponse("Location has been created", {
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
      const location = await locationModel.find({}).lean();
      return NextResponse.json(location);
    } catch (error) {
      return NextResponse.json({ success: false });
    }
  }
  