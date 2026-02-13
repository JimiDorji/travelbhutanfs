import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Separate metadata export (without viewport)
export const metadata = {
  title: "TravelBhutan",
  description:
    "Explore the Beauty of Bhutan with TravelBhutan - Your Ultimate Guide to the Land of the Thunder Dragon.",
};

// Move viewport to its own export (required in Next.js 14+)
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1, // Optional: add this for better control
  userScalable: true, // Optional: allow user scaling
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}