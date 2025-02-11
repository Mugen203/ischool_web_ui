"use client";

import { redirect } from "next/navigation";

/**
 * Redirects to the student dashboard page.
 * This is a catch-all for any student-specific URL that isn't explicitly handled
 * elsewhere in the codebase.
 */
export default function StudentPage() {
  redirect("/student/dashboard");
}
