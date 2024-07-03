import { replaceMongoIdInObject } from "@/lib/convertData";
import { userModel } from "@/models/user-model";


export async function getUserByEmail(email) {
  const user = await userModel.findOne({ email: email }).select("-password").lean();
  return replaceMongoIdInObject(user);
}
