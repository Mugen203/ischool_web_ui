export type UserRole = 'student' | 'lecturer' | 'dean' | 'grademaster' | 'hod' | 'admin';

/**
 * Represents a user in the system.
 * @interface User
 * @property {string} id - The unique identifier for the user
 * @property {string} name - The user's full name
 * @property {string} email - The user's email address
 * @property {UserRole} role - The user's role in the system
 * @property {string} [avatar] - Optional URL to the user's avatar image
 */
export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

/**
 * Interface defining the shape of authentication context
 * @interface AuthContextType
 * 
 * @property {User | null} user - The currently authenticated user or null if not logged in
 * @property {boolean} isLoading - Loading state indicator for authentication operations
 * @property {function} login - Function to handle user login, accepts a User object
 * @property {function} logout - Function to handle user logout
 */
export interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (user: User) => void;
  logout: () => void;
}