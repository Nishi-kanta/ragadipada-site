import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

//demo
export const metadata: Metadata = {
  title: "Ragadipada Village Portal | Cuttack, Odisha",
  description: "Explore Ragadipada village - its history, culture, temples, ponds, and administrative information. Located in Badamba Tehsil, Cuttack district.",
  keywords: ["Ragadipada", "Badamba", "Cuttack", "Odisha Village", "Village Information Portal", "Ragadipada Temples"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} antialiased selection:bg-saffron/30`}
      >
        <div className="flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
