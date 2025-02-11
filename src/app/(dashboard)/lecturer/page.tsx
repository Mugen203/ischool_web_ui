"use client";

import { redirect } from "next/navigation";

/**
 * Redirects to the lecturer dashboard
 * @remarks
 * This page is used to catch all traffic to /lecturer and redirect to the
 * lecturer dashboard
 */
export default function LecturerPage() {
  redirect("/lecturer/dashboard");
}
