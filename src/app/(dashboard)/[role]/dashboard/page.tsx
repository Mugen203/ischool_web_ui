"use client";

import { useParams } from "next/navigation";
import { useAuth } from "@/hooks/use-auth";
import { StudentDashboard } from "@/components/student/dashboard";
import { LecturerDashboard } from "@/components/lecturer/dashboard";
import { HodDashboard } from "@/components/hod/dashboard";
import { DeanDashboard } from "@/components/dean/dashboard";
import { GrademasterDashboard } from "@/components/grademaster/dashboard";
import { AdminDashboard } from "@/components/admin/dashboard";

const dashboardComponents = {
  student: StudentDashboard,
  lecturer: LecturerDashboard,
  hod: HodDashboard,
  dean: DeanDashboard,
  grademaster: GrademasterDashboard,
  admin: AdminDashboard,
} as const;

/**
 * DashboardPage component
 *
 * This component is responsible for rendering the dashboard page based on user role.
 * It uses the `useParams` hook to get the role from the URL, and the `useAuth` hook to get the user object.
 *
 * @returns The dashboard page component based on the user's role
 */
export default function DashboardPage() {
  const params = useParams();
  const { user } = useAuth();
  const role = (params.role as string).toLowerCase();

  const DashboardComponent =
    dashboardComponents[role as keyof typeof dashboardComponents];

  if (!DashboardComponent) {
    return <div>Invalid role</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return <DashboardComponent user={user} />;
}
