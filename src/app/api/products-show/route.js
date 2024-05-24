import { dbConnect } from "@/lib/mongo";
import { productsModel } from "@/models/products-model";

export async function GET() {
    try {
      await dbConnect();
      const products = await productsModel.find({});
      res.status(200).json({ success: true, data: products });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  }
  