"use client";

import { useParams } from "next/navigation";
import { useAuth } from "@/hooks/use-auth";
import { StudentDashboard } from "@/components/role/student/dashboard";
import { LecturerDashboard } from "@/components/role/lecturer/dashboard";
import { HodDashboard } from "@/components/role/hod/dashboard";
import { DeanDashboard } from "@/components/role/dean/dashboard";
import { GrademasterDashboard } from "@/components/role/grademaster/dashboard";
import { AdminDashboard } from "@/components/role/admin/dashboard";

const dashboardComponents = {
  student: StudentDashboard,
  lecturer: LecturerDashboard,
  hod: HodDashboard,
  dean: DeanDashboard,
  grademaster: GrademasterDashboard,
  admin: AdminDashboard,
} as const;

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
