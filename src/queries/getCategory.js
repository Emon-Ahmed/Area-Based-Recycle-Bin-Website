import { replaceMongoIdInArray } from "@/lib/convertData";
import { dbConnect } from "@/lib/mongo";
import { categoryModel } from "@/models/category-model";

export async function getCategory() {
  await dbConnect();
  const category = await categoryModel.find({}).lean();
  return replaceMongoIdInArray(category);
}

export async function deleteCategory(id) {
  await dbConnect();
  const deletedCat = await categoryModel.findByIdAndDelete(id);
  if (!deletedCat) {
    return res.status(404).json({ success: false, message: "Category not found" });
  }
  res.status(200).json({ success: true, data: deletedCat });
}
