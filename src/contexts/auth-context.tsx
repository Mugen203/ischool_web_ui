"use client";

// Import React hooks and types
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
// Import custom types for user and auth context
import { User, AuthContextType, UserRole } from "@/types/auth";

// Add mock user data for testing different roles
const mockUsers: Record<string, User> = {
  student: {
    id: "1",
    name: "John Student",
    email: "student@vvu.edu",
    role: "student" as UserRole,
    avatar: "/avatars/student.png",
  },
  lecturer: {
    id: "2",
    name: "Dr. Jane Lecturer",
    email: "lecturer@vvu.edu",
    role: "lecturer" as UserRole,
    avatar: "/avatars/lecturer.png",
  },
  dean: {
    id: "3",
    name: "Prof. Smith Dean",
    email: "dean@vvu.edu",
    role: "dean" as UserRole,
    avatar: "/avatars/dean.png",
  },
  hod: {
    id: "4",
    name: "Dr. Brown HOD",
    email: "hod@vvu.edu",
    role: "hod" as UserRole,
    avatar: "/avatars/hod.png",
  },
  grademaster: {
    id: "5",
    name: "Mr. Grade Master",
    email: "grademaster@vvu.edu",
    role: "grademaster" as UserRole,
    avatar: "/avatars/grademaster.png",
  },
  administrator: {
    id: "6",
    name: "Admin User",
    email: "admin@vvu.edu",
    role: "administrator" as UserRole,
    avatar: "/avatars/admin.png",
  },
};

/**
 * Create Authentication Context
 * Provides undefined as initial value
 * Type safety ensures proper usage with AuthProvider
 */
const AuthContext = createContext<AuthContextType | undefined>(undefined);

/**
 * Authentication Provider Component
 * Manages user authentication state and provides auth methods
 *
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Child components to be wrapped
 */
export function AuthProvider({ children }: { children: ReactNode }) {
  // State for user data and loading status
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Check for existing user session on mount
   * Retrieves stored user data from localStorage
   */
  useEffect(() => {
    // TODO: Add actual authentication logic here
    // This is just a mock implementation
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  /**
   * Login handler
   * Updates user state and persists session
   *
   * @param {User} userData - User information to store
   */
  const login = (user: User) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  /**
   * Logout handler
   * Clears user state and session data
   */
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  // Provide auth context to child components
  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

/**
 * Custom hook for accessing auth context
 * Provides typed access to auth state and methods
 *
 * @throws {Error} If used outside of AuthProvider
 * @returns {AuthContextType} Authentication context value
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// Export context for advanced use cases
export { AuthContext };
