"use server";
import { auth } from "@/lib/auth";
import { getUserByEmail } from "@/queries/getUser";
import UpdateUser from "./_components/update";

export default async function Settings() {
  const session = await auth();
  const email = session?.user?.email;
  const getUser = await getUserByEmail(email);
  return (
    <div className="flex flex-col w-full min-h-screen">
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        <div className="grid w-full max-w-6xl gap-2 mx-auto">
          <h1 className="text-3xl font-semibold">Settings</h1>
        </div>
        <div className="grid items-start w-full max-w-6xl gap-6 mx-auto">
          <div className="grid gap-6">
            <UpdateUser getUser={getUser} />
          </div>
        </div>
      </main>
    </div>
  );
}
