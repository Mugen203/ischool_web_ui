"use client";

// Import React hooks and custom auth hook
import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/use-auth";

// Import role-specific attendance components
import { StudentAttendance } from "@/components/attendance/student-attendance";
import { LecturerAttendance } from "@/components/attendance/lecturer-attendance";
import { DeanAttendance } from "@/components/attendance/dean-attendance";
import { GrademasterAttendance } from "@/components/attendance/grademaster-attendance";
import HODAttendance from "@/components/attendance/hod-attendance";

/**
 * Map of role-specific attendance components
 * Associates each user role with its corresponding attendance component
 * Using 'as const' for better type inference
 */
const ROLE_COMPONENTS = {
  student: StudentAttendance,
  lecturer: LecturerAttendance,
  dean: DeanAttendance,
  grademaster: GrademasterAttendance,
  hod: HODAttendance,
} as const;

/**
 * AttendancePage Component
 * Renders the appropriate attendance interface based on user role
 * Handles loading states and authorization checks
 */
export default function AttendancePage() {
  // Get user data and loading state from auth context
  const { user, isLoading } = useAuth();

  // Show loading indicator while auth state is being determined
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Show error if user is not authenticated or role is missing
  if (!user || !user.role) {
    return <div>Error: Unauthorized access</div>;
  }

  // Get the appropriate attendance component for the user's role
  const AttendanceComponent =
    ROLE_COMPONENTS[user.role.toLowerCase() as keyof typeof ROLE_COMPONENTS];

  // Show error if no component matches the user's role
  if (!AttendanceComponent) {
    return <div>Error: Invalid user role</div>;
  }

  // Render the role-specific attendance component
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Attendance Management</h1>
      <AttendanceComponent />
    </div>
  );
}
