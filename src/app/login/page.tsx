"use client";

import { School } from "lucide-react";

import { LoginForm } from "@/components/login-form";
import type { LoginInput } from "@/lib/validation/auth";
import Image from "next/image";
import Link from "next/link";

/**
 * Renders the login page layout.
 *
 * The layout consists of two main sections:
 *
 * 1. A form section on the left, which includes a logo link and a login form.
 *    The logo link is styled and positioned at the top, followed by a centered
 *    login form.
 *
 * 2. An image section on the right, visible only on larger screens, displaying
 *    a school logo with specific styling for dark mode.
 */

export default function LoginPage() {
  const handleLogin = async (data: LoginInput) => {
    // Handle authentication logic here
    // This could include:
    // 1. API calls to your authentication endpoint
    // 2. Managing authentication state
    // 3. Handling redirect after successful login
    // 4. Error handling
  };

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href="#" className="flex items-center gap-2 font-medium">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <School className="size-4" />
            </div>
            iSchool - SIMS
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm onSubmit={handleLogin} />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <Image
          width={500}
          height={500}
          src="/login-image.jpg"
          alt="School Logo"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
