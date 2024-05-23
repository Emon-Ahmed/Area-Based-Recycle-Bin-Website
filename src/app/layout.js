import "./globals.css";
import "./../styles/loader.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import Footer from "@/components/custom-footer";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/lib/auth";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Area Based Recycle Bin Website",
  description: "University Final Project by EMON & SOBUJ",
};

export default function RootLayout({ children }) {
  const session = auth();
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <SessionProvider session={session}>{children}</SessionProvider>
        <Footer />
      </body>
    </html>
  );
}
