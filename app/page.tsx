
import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {title: "5bus"};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    {children}
  )
}