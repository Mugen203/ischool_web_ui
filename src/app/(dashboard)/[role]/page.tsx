"use client";

import { useParams, redirect } from "next/navigation";
import { notFound } from "next/navigation";

// Define valid roles and features for type safety and validation
const VALID_ROLES = [
  "student",
  "lecturer",
  "hod",
  "dean",
  "grademaster",
  "admin",
] as const;
type Role = (typeof VALID_ROLES)[number];

const VALID_FEATURES = [
  "dashboard",
  "settings",
  "attendance",
  "courses",
] as const;
type Feature = (typeof VALID_FEATURES)[number];

// Define role-feature access map
const ROLE_FEATURES: Record<Role, Feature[]> = {
  student: ["dashboard", "settings", "attendance", "courses"],
  lecturer: ["dashboard", "settings", "attendance", "courses"],
  hod: ["dashboard", "settings", "attendance", "courses"],
  dean: ["dashboard", "settings", "attendance", "courses"],
  grademaster: ["dashboard", "settings", "attendance", "courses"],
  admin: ["dashboard", "settings", "attendance", "courses"],
};

export default function RolePage() {
  const params = useParams();
  const role = (
    Array.isArray(params.role) ? params.role[0] : params.role
  )?.toLowerCase();

  // Validate role
  if (!role || !VALID_ROLES.includes(role as Role)) {
    notFound();
  }

  // Check if role has access to dashboard (all roles should)
  if (!ROLE_FEATURES[role as Role].includes("dashboard")) {
    throw new Error(`Role ${role} does not have access to dashboard`);
  }

  // Redirect to role-specific dashboard
  redirect(`/${role}/dashboard`);
}
