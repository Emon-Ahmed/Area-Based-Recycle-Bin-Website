import "./globals.css";

export const metadata = {
  title: "Area Based Recycle Bin Website",
  description: "University Final Project by EMON & SOBUJ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
