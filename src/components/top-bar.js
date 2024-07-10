import Link from "next/link";

export default function TopBar() {
  return (
    <header className="flex items-center justify-between h-10 px-4 bg-blue-600 text-background md:px-6">
      <Link href="#" className="flex items-center gap-2 text-sm" prefetch={false}>
        <span>Welcome To Our Shop</span>
      </Link>
      <div className="flex items-center gap-4 text-sm">
        <span>Contact Us</span>
      </div>
    </header>
  );
}
