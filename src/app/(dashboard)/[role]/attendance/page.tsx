"use client";

import { RoleMap } from "@/components/shared/role-map";
import { AttendanceLayout } from "@/components/shared/layouts/attendance-layout";
import { useAttendance } from "@/hooks/use-attendance";
import { ErrorMessage } from "@/components/ui/error-message";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

/**
 * AttendancePage Component
 *
 * Renders the attendance management interface based on user role.
 * Handles loading states, authorization, and role-based content.
 */
export default function AttendancePage() {
  const { isLoading, isAuthorized, currentRole, roleComponents } =
    useAttendance();

  // Handle loading state
  if (isLoading) {
    return (
      <AttendanceLayout>
        <LoadingSpinner className="mx-auto" />
      </AttendanceLayout>
    );
  }

  // Handle unauthorized access
  if (!isAuthorized) {
    return (
      <AttendanceLayout>
        <ErrorMessage>
          {currentRole === "admin"
            ? "Administrators do not have access to attendance features"
            : "You are not authorized to view attendance records"}
        </ErrorMessage>
      </AttendanceLayout>
    );
  }

  // Render role-specific attendance interface
  if (!currentRole) {
    return (
      <AttendanceLayout>
        <ErrorMessage>User role not found</ErrorMessage>
      </AttendanceLayout>
    );
  }

  return (
    <AttendanceLayout>
      <RoleMap
        role={currentRole}
        components={roleComponents}
        fallback={<ErrorMessage>Invalid user role</ErrorMessage>}
      />
    </AttendanceLayout>
  );
}
