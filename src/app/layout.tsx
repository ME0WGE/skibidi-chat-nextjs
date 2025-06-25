import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "SkiBiDi Chat",
  description: "Growing up is realising Tony Stark was a Vibe Coder",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <main className="flex-1 flex flex-col">
          <Providers>{children}</Providers>
        </main>
        <Footer />
      </body>
    </html>
  );
}
