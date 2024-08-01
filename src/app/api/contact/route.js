import { dbConnect } from "@/lib/mongo";
import { contactModel } from "@/models/contact-model";
import { NextResponse } from "next/server";

export async function GET() {
    try {
      await dbConnect();
      const contact = await contactModel.find({});
      return NextResponse.json(contact);
    } catch (error) {
      return NextResponse.json({ success: false });
    }
  }
  

export const POST = async (request) => {
    const { fname, lname, email, message } = await request.json();
    await dbConnect();
    const newContact = { fname, lname, email, message };
    try {
      await contactModel.create(newContact);
      return new NextResponse("Contact has been created", {
        status: 201,
      });
    } catch (err) {
      return new NextResponse(err.message, {
        status: 500,
      });
    }
  };
  