"use client";

import { useRole } from "@/hooks/use-role";
import { RoleMap } from "@/components/shared/role-map";
import { VALID_ROLES } from "@/components/shared/constants";
import { UserRole } from "@/types/auth";

export default function RolePage() {
  const { role, isLoading } = useRole();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  if (!role || !VALID_ROLES.includes(role)) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="text-destructive">Invalid role</div>
      </div>
    );
  }

  return <RoleMap role={role as UserRole} />;
}
