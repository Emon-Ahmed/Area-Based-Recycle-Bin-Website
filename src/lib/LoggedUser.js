import "server-only";

import { auth } from "@/lib/auth";
import { getUserByEmail } from "@/queries/getUser";


export async function getLoggedInUser() {
  const session = await auth();

  if (!session?.user) return null;

  return getUserByEmail(session?.user?.email);
}