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

export const metadata = {
  title: "BookHaven | Bangladeshi & English Books Online Store",
  description:
    "Order and purchase authentic Bangladeshi books and international English bestsellers online. Fast delivery across Bangladesh with Cash on Delivery and bKash.",
  keywords: [
    "Bangladeshi Books",
    "Bengali Literature",
    "Humayun Ahmed",
    "Rabindranath Tagore",
    "English Bestsellers",
    "Buy Books Online Bangladesh",
    "BookStore Dhaka",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
