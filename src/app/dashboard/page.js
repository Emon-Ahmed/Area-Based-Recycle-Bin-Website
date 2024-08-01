import { auth } from "../../lib/auth";
import { redirect } from "next/navigation";
import DashboardCal from "./_components/dashboard-cal";
import DashboardTrans from "./_components/dashboard-trans";
import MyOrders from "./my-orders/page";

export default async function Dashboard() {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }
  return (
    <div className="flex flex-col w-full min-h-screen">
      <main className="flex flex-col flex-1 gap-4 p-4 md:gap-8 md:p-8">
        <DashboardCal />
        {/* <DashboardTrans /> */}
      </main>
      <MyOrders />
    </div>
  );
}
