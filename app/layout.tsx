import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Deep Learning Human",
  description:
    "אסטרטגיות למידה לתלמידי 5 יחידות מתמטיקה – ללמוד נכון, להבין לעומק, ולהצליח בבגרות.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body
        className={`${heebo.className} min-h-screen bg-[#fffaf4] text-[#2f261f] antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="mx-auto w-full max-w-7xl flex-1 px-4 sm:px-6 lg:px-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}