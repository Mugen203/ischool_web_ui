"use client";

import { useRole } from "@/hooks/use-role";
import { StudentAttendance } from "@/components/student/attendance";
import { LecturerAttendance } from "@/components/lecturer/attendance";
import { DeanAttendance } from "@/components/dean/attendance";
import { GrademasterAttendance } from "@/components/grademaster/attendance";
import HODAttendance from "@/components/hod/attendance";
import type { UserRole } from "@/types/auth";

type AttendanceRoles = Exclude<UserRole, "admin">;

const ROLE_COMPONENTS: Record<AttendanceRoles, React.ComponentType> = {
  student: StudentAttendance,
  lecturer: LecturerAttendance,
  dean: DeanAttendance,
  grademaster: GrademasterAttendance,
  hod: HODAttendance,
};

export function useAttendance() {
  const { role, isLoading, hasRole } = useRole();

  return {
    isLoading,
    roleComponents: ROLE_COMPONENTS,
    isAuthorized: hasRole(Object.keys(ROLE_COMPONENTS) as AttendanceRoles[]),
    currentRole: role,
  };
}
