"use server";

import { createO } from "@/queries/getOrder";
import { getLoggedInUser } from "@/lib/LoggedUser";

export async function createOrder(data) {
  try {
    const loggedInUser = await getLoggedInUser();
    data["user"] = loggedInUser?.id;
    const orders = await createO(data);
    return orders;
  } catch (e) {
    throw new Error(e);
  }
}
