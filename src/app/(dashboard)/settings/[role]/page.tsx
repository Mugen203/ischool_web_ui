"use client";

import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { SettingsContent } from "@/components/settings/settings-content";

export default function RoleSettingsPage() {
  const params = useParams();
  const role = params.role as string;

  // Validate role
  const validRoles = [
    "student",
    "lecturer",
    "hod",
    "dean",
    "grademaster",
    "admin",
  ];
  if (!validRoles.includes(role.toLowerCase())) {
    notFound();
  }

  return <SettingsContent initialRole={role} />;
}
