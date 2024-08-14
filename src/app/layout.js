import "./globals.css";
import "./../styles/loader.css";
import { Plus_Jakarta_Sans as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import Footer from "@/components/custom-footer";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/lib/auth";
import { Toaster } from "@/components/ui/toaster";
import FooterX from "@/components/footer";

const fontSans = FontSans({ subsets: ["latin"] });

export const metadata = {
  title: "Area Based Recycle Bin Website",
  description: "University Final Project by EMON & SOBUJ",
};

export default async function RootLayout({ children }) {
  const session = auth();
  return (
    <html lang="en" suppressHydrationWarning className={fontSans.className}>
      <body className={cn("min-h-screen bg-background antialiased")}>
        <SessionProvider session={session}>{children}</SessionProvider>
        <FooterX />
        <Toaster />
      </body>
    </html>
  );
}
