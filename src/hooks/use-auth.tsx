// Import React's context hook
import { useContext } from "react";
// Import our custom authentication context
import { AuthContext } from "@/contexts/auth-context";

/**
 * Custom hook for accessing authentication context
 * Provides typed access to user data and auth functions
 *
 * @throws {Error} If used outside of AuthProvider
 * @returns {AuthContextType} Authentication context value
 */
export function useAuth() {
  // Get auth context value
  const context = useContext(AuthContext);

  // Ensure hook is used within AuthProvider
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  // Return typed context value
  return context;
}
