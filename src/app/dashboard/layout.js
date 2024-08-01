import Link from "next/link";
import {
  Bell,
  CircleUser,
  Home,
  LocateFixed,
  PackageSearch,
  Menu,
  Package,
  Package2,
  ShoppingCart,
  UsersRound,
  Settings,
  Plus,
} from "lucide-react";
import { auth } from "../../lib/auth";
import Logout from "@/components/logout";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { redirect } from "next/navigation";
import { getUserByEmail } from "@/queries/getUser";

export default async function DashboardLayout({ children }) {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }
  const email = session?.user?.email;
  const getUser = await getUserByEmail(email);
  return (
    <div>
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-muted/40 md:block">
          <div className="flex flex-col h-full max-h-screen gap-2">
            <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
              <Link href="/" className="flex items-center gap-2 font-semibold">
                <Package2 className="w-6 h-6" />
                <span className="">Recycle Bin Website</span>
              </Link>
              <Button variant="outline" size="icon" className="w-8 h-8 ml-auto">
                <Bell className="w-4 h-4" />
                <span className="sr-only">Toggle notifications</span>
              </Button>
            </div>
            <div className="flex-1">
              <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                <Link
                  href="/dashboard"
                  className="flex items-center gap-3 px-3 py-2 transition-all rounded-lg text-primary hover:text-primary"
                >
                  <Home className="w-4 h-4" />
                  Dashboard
                </Link>
                <Link
                  href="/dashboard/my-orders"
                  className="flex items-center gap-3 px-3 py-2 transition-all rounded-lg text-primary hover:text-primary"
                >
                  <ShoppingCart className="w-4 h-4" />
                  My Orders
                </Link>
                {getUser?.isSeller ? (
                  <>
                    <Link
                      href="/dashboard/orders"
                      className="flex items-center gap-3 px-3 py-2 transition-all rounded-lg text-primary hover:text-primary"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Manage Orders
                    </Link>
                    <Link
                      href="/dashboard/products/add-product"
                      className="flex items-center gap-3 px-3 py-2 transition-all rounded-lg text-primary hover:text-primary"
                    >
                      <Plus className="w-4 h-4" />
                      Add Products
                    </Link>
                    <Link
                      href="/dashboard/products"
                      className="flex items-center gap-3 px-3 py-2 transition-all rounded-lg text-primary hover:text-primary"
                    >
                      <Package className="w-4 h-4" />
                      Manage Products
                    </Link>
                  </>
                ) : (
                  <></>
                )}
                {getUser?.isAdmin ? (
                  <>
                    <Link
                      href="/dashboard/category"
                      className="flex items-center gap-3 px-3 py-2 transition-all rounded-lg text-primary hover:text-primary"
                    >
                      <PackageSearch className="w-4 h-4" />
                      Manage Category
                    </Link>
                    <Link
                      href="/dashboard/location"
                      className="flex items-center gap-3 px-3 py-2 transition-all rounded-lg hover:text-primary"
                    >
                      <LocateFixed className="w-4 h-4" />
                      Manage Location
                    </Link>
                    <Link
                      href="/dashboard/customers"
                      className="flex items-center gap-3 px-3 py-2 transition-all rounded-lg hover:text-primary"
                    >
                      <UsersRound className="w-4 h-4" />
                      Manage Users
                    </Link>

                    <Link
                      href="/dashboard/contact"
                      className="flex items-center gap-3 px-3 py-2 transition-all rounded-lg hover:text-primary"
                    >
                      <LocateFixed className="w-4 h-4" />
                      Support
                    </Link>
                  </>
                ) : (
                  <></>
                )}

                <Link
                  href="/dashboard/settings"
                  className="flex items-center gap-3 px-3 py-2 transition-all rounded-lg hover:text-primary"
                >
                  <Settings className="w-4 h-4" />
                  Settings
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="w-5 h-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="flex flex-col">
                <nav className="grid gap-2 text-lg font-medium">
                  <Link
                    href="/"
                    className="flex items-center gap-2 text-lg font-semibold"
                  >
                    <Package2 className="w-6 h-6" />
                    <span className="sr-only">Recycle Bin</span>
                  </Link>
                  <Link
                    href="/dashboard"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  >
                    <Home className="w-5 h-5" />
                    Dashboard
                  </Link>
                  <Link
                    href="/dashboard/orders"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Manage Orders
                  </Link>
                  <Link
                    href="/dashboard/products/add-product"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  >
                    <Plus className="w-5 h-5" />
                    Add Product
                  </Link>
                  <Link
                    href="/dashboard/category"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  >
                    <PackageSearch className="w-5 h-5" />
                    Manage Category
                  </Link>
                  <Link
                    href="/dashboard/products"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  >
                    <Package className="w-5 h-5" />
                    Manage Products
                  </Link>
                  <Link
                    href="/dashboard/customers"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  >
                    <UsersRound className="w-5 h-5" />
                    All Customers
                  </Link>
                  <Link
                    href="/dashboard/settings"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  >
                    <Settings className="w-5 h-5" />
                    Settings
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
            <div className="flex-1 w-full"></div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full"
                >
                  <CircleUser className="w-5 h-5" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <Link href="/dashboard">
                  <DropdownMenuLabel>
                    {session?.user?.name}'s Account
                  </DropdownMenuLabel>
                </Link>
                <DropdownMenuSeparator />
                <Link href="/dashboard/settings">
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/">
                    <Logout />
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </header>
          <div className="flex flex-col flex-1 gap-4 p-4 lg:gap-6 lg:p-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
