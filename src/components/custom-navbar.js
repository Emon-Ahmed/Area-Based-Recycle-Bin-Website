import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  SheetTrigger,
  SheetClose,
  SheetContent,
  Sheet,
} from "@/components/ui/sheet";
import { RiLuggageCartLine } from "react-icons/ri";
import { auth } from "@/lib/auth";

export default async function Navbar() {
  const session = await auth();
  return (
    <header className="top-0 z-50 w-full bg-white shadow-sm dark:bg-gray-950">
      <div className="container flex items-center justify-between h-24 px-4 mx-auto md:px-6">
        <Link className="flex items-center gap-2" href="/">
          <RiLuggageCartLine className="w-12 h-12" />
          <span className="text-3xl font-bold">Recycle Bin Website</span>
        </Link>
        <nav className="items-center hidden gap-6 text-base font-semibold md:flex">
          <Link className="hover:underline hover:underline-offset-4" href="/">
            Home
          </Link>
          <Link
            className="hover:underline hover:underline-offset-4"
            href="/products"
          >
            Products
          </Link>
          <Link
            className="hover:underline hover:underline-offset-4"
            href="/about"
          >
            About
          </Link>
          <Link
            className="hover:underline hover:underline-offset-4"
            href="/contact"
          >
            Contact
          </Link>
          {session?.user ? (
            <Link
              className="hover:underline hover:underline-offset-4"
              href="/dashboard"
            >
              <Button>Dashboard</Button>
            </Link>
          ) : (
            <>
              <Link
                className="text-base hover:underline hover:underline-offset-4"
                href="/login"
              >
                <Button size="lg">Log In</Button>
              </Link>
              <Link
                className="text-base hover:underline hover:underline-offset-4"
                href="/sign-up"
              >
                <Button variant="outline" size="lg">
                  Register
                </Button>
              </Link>
            </>
          )}
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="md:hidden" size="icon" variant="outline">
              <MenuIcon className="w-6 h-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-white dark:bg-gray-950" side="left">
            <div className="flex flex-col justify-between h-full p-6">
              <nav className="grid gap-4">
                <Link
                  className="flex items-center gap-2 text-lg font-medium hover:underline hover:underline-offset-4"
                  href="/"
                >
                  Home
                </Link>
                <Link
                  className="flex items-center gap-2 text-lg font-medium hover:underline hover:underline-offset-4"
                  href="/products"
                >
                  Products
                </Link>
                <Link
                  className="flex items-center gap-2 text-lg font-medium hover:underline hover:underline-offset-4"
                  href="/about"
                >
                  About
                </Link>
                <Link
                  className="flex items-center gap-2 text-lg font-medium hover:underline hover:underline-offset-4"
                  href="/contact"
                >
                  Contact
                </Link>
                {session?.user ? (
                  <Link
                    className="flex items-center gap-2 text-lg font-medium hover:underline hover:underline-offset-4"
                    href="/dashboard/"
                  >
                    Dashboard
                  </Link>
                ) : (
                  <>
                    <Link
                      className="flex items-center gap-2 text-lg font-medium hover:underline hover:underline-offset-4"
                      href="/login"
                    >
                      <Button size="lg">Log In</Button>
                    </Link>
                    <Link
                      className="flex items-center gap-2 text-lg font-medium hover:underline hover:underline-offset-4"
                      href="/sign-up"
                    >
                      <Button variant="outline" size="lg">
                        Register
                      </Button>
                    </Link>
                  </>
                )}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
