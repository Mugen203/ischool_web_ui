// Import Next.js metadata type for SEO configuration
import type { Metadata } from "next";
// Import Inter font from Google Fonts for consistent typography
import { Inter } from "next/font/google";
// Import global CSS styles
import "./globals.css";
// Import authentication context provider
import { AuthProvider } from "@/contexts/auth-context";
// Import role switcher component
import { RoleSwitcher } from "@/components/role-switcher";
// Import theme provider
import { ThemeProvider } from "@/providers/theme-provider";

/**
 * Configure Inter font with Latin subset
 * This optimization loads only the Latin character set
 * Improves performance by reducing font file size
 */
const inter = Inter({ subsets: ["latin"] });

/**
 * Application Metadata
 * Defines SEO-related information and document head content
 * Used by Next.js for generating meta tags and title
 */
export const metadata: Metadata = {
  title: "iSchool",
  description: "VVU School Management System",
};

/**
 * Root Layout Component
 * Serves as the application's base template
 * Wraps all pages with common layout elements and providers
 *
 * Features:
 * - Provides HTML structure
 * - Applies Inter font
 * - Wraps content in AuthProvider for authentication
 * - Sets language for accessibility
 *
 * @param {Object} props - Component properties
 * @param {React.ReactNode} props.children - Page content to be rendered
 * @returns {JSX.Element} Application root layout
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // HTML container with language set for accessibility
    <html lang="en">
      {/* Authentication context provider wrapper */}
      <AuthProvider>
        {/* Body container with Inter font applied */}
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={true}
          >
            {/* Render page-specific content */}
            {children}
            {/* Role switcher component */}
            <RoleSwitcher />
          </ThemeProvider>
        </body>
      </AuthProvider>
    </html>
  );
}
