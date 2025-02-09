// Import necessary dependencies
import type { Metadata } from "next";
// Import Google font
import { Inter } from "next/font/google";
// Import global styles
import "./globals.css";

/**
 * Configure Inter font with Latin subset
 * This creates an optimized font instance for better performance
 */
const inter = Inter({ subsets: ["latin"] });

/**
 * Metadata configuration for the application
 * Used by Next.js for SEO and document head management
 */
export const metadata: Metadata = {
  title: "iSchool",
  description: "VVU School Management System",
};

/**
 * Root Layout Component
 * Provides the base HTML structure for all pages
 *
 * @param {Object} props - Component properties
 * @param {React.ReactNode} props.children - Child components to be rendered
 * @returns {JSX.Element} Root layout structure
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Base HTML structure with language set to English
    <html lang="en">
      {/* Body with Inter font applied via CSS classes */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
