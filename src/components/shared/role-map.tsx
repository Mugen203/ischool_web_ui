"use client";

import { ReactNode } from "react";
import { UserRole } from "@/types/auth";

interface RoleMapProps {
  role: UserRole;
  components?: Record<UserRole, React.ComponentType>;
  fallback?: ReactNode;
}

export function RoleMap({ role, components, fallback }: RoleMapProps) {
  if (!components) {
    return null;
  }

  const Component = components[role];

  if (!Component) {
    return fallback ? <>{fallback}</> : null;
  }

  return <Component />;
}
