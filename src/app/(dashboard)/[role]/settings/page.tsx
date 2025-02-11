"use client";

import { useRole } from "@/hooks/use-role";
import { RoleMap } from "@/components/shared/role-map";
import { StudentSettings } from "@/components/student/settings";
import { LecturerSettings } from "@/components/lecturer/settings";
import { HodSettings } from "@/components/hod/settings";
import { DeanSettings } from "@/components/dean/settings";
import { GrademasterSettings } from "@/components/grademaster/settings";
import { AdminSettings } from "@/components/admin/settings";
import type { UserRole } from "@/types/auth";

const SETTINGS_COMPONENTS: Record<UserRole, React.ComponentType> = {
  student: StudentSettings,
  lecturer: LecturerSettings,
  hod: HodSettings,
  dean: DeanSettings,
  grademaster: GrademasterSettings,
  admin: AdminSettings,
};

/**
 * SettingsPage Component
 *
 * This component is responsible for rendering the settings page
 * based on the user's role. It uses the useRole hook to determine
 * the user's role and render the corresponding settings component.
 *
 * If the user is not authorized or the role is invalid, it renders
 * an unauthorized access message.
 *
 * @returns {JSX.Element} Rendered settings page
 */
export default function SettingsPage() {
  const { role, isLoading, isAuthorized } = useRole();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  if (!isAuthorized || !role) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="text-destructive">Unauthorized access</div>
      </div>
    );
  }

  return (
    <RoleMap
      role={role}
      components={SETTINGS_COMPONENTS}
      fallback={
        <div className="flex items-center justify-center p-4">
          <div className="text-destructive">Invalid user role</div>
        </div>
      }
    />
  );
}
