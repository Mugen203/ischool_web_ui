"use client";

import { useAuth } from "@/hooks/use-auth";
import type { UserRole } from "@/types/auth";

interface UseRoleReturn {
  role: UserRole | null;
  isLoading: boolean;
  isAuthorized: boolean;
  hasRole: (roles: UserRole | UserRole[]) => boolean;
}

/**
 * Custom hook for managing user roles
 * Provides typed access to role-based functionality
 *
 * @returns {UseRoleReturn} Role management functions and state
 */
export function useRole(): UseRoleReturn {
  const { user, isLoading } = useAuth();
  const currentRole = user?.role?.toLowerCase() as UserRole;

  const hasRole = (roles: UserRole | UserRole[]): boolean => {
    if (!currentRole) return false;

    if (Array.isArray(roles)) {
      return roles.includes(currentRole);
    }

    return roles === currentRole;
  };

  return {
    role: currentRole || null,
    isLoading,
    isAuthorized: Boolean(currentRole),
    hasRole,
  };
}
