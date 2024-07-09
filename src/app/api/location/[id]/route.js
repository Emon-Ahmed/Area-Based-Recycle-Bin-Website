import { dbConnect } from "@/lib/mongo";
import locationModel from "@/models/location-model";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
  await dbConnect();
  const { id } = params;
  const location = await locationModel.deleteOne({ _id: id });
  return NextResponse.json(location);
}
