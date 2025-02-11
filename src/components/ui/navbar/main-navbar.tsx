// Import Next.js Link component for client-side navigation
import Link from "next/link";
// Import React types for prop definitions
import type React from "react";

// Import utility function for merging class names
import { cn } from "@/lib/utils";

/**
 * MainNav Component
 * Provides the main navigation bar with links to key application sections
 *
 * @param {string} className - Additional CSS classes to apply
 * @param {Object} props - Additional HTML nav element props
 * @returns {JSX.Element} Navigation bar with links
 */
export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    // Main navigation container with responsive spacing
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {/* Overview Link - Default active state */}
      <Link
        href="/examples/dashboard"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Overview
      </Link>

      {/* Students Section Link */}
      <Link
        href="/examples/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Students
      </Link>

      {/* Courses Section Link */}
      <Link
        href="/examples/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Courses
      </Link>

      {/* Finance Section Link */}
      <Link
        href="/examples/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Finance
      </Link>

      {/* Settings Section Link */}
      <Link
        href="/examples/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Settings
      </Link>
    </nav>
  );
}
