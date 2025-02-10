"use client";

import { useAuth } from "@/hooks/use-auth";

export function RoleSwitcher() {
  const { login, logout, user } = useAuth();

  return (
    <div className="fixed bottom-4 right-4 p-4 bg-white shadow-lg rounded-lg z-50">
      <h3 className="font-bold mb-2">Role Switcher (Testing)</h3>
      <div className="space-y-2">
        <button
          onClick={() =>
            login({
              id: "test-student",
              name: "Test Student",
              email: "student@test.com",
              role: "student",
            })
          }
          className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100 rounded"
        >
          Switch to Student
        </button>
        <button
          onClick={() =>
            login({
              id: "test-lecturer",
              name: "Test Lecturer",
              email: "lecturer@test.com",
              role: "lecturer",
            })
          }
          className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100 rounded"
        >
          Switch to Lecturer
        </button>
        <button
          onClick={() =>
            login({
              id: "test-dean",
              name: "Test Dean",
              email: "dean@test.com",
              role: "dean",
            })
          }
          className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100 rounded"
        >
          Switch to Dean
        </button>
        <button
          onClick={() =>
            login({
              id: "test-hod",
              name: "Test HOD",
              email: "hod@test.com",
              role: "hod",
            })
          }
          className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100 rounded"
        >
          Switch to HOD
        </button>
        <button
          onClick={() =>
            login({
              id: "test-grademaster",
              name: "Test Grademaster",
              email: "grademaster@test.com",
              role: "grademaster",
            })
          }
          className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100 rounded"
        >
          Switch to Grademaster
        </button>
        <button
          onClick={() =>
            login({
              id: "test-admin",
              name: "Test Administrator",
              email: "admin@test.com",
              role: "admin",
            })
          }
          className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100 rounded"
        >
          Switch to Administrator
        </button>
        <button
          onClick={() => logout()}
          className="block w-full px-4 py-2 text-sm text-left text-red-600 hover:bg-red-50 rounded"
        >
          Logout
        </button>
      </div>
      <div className="mt-2 text-xs text-gray-500">
        Current Role: {user?.role || "none"}
      </div>
    </div>
  );
}
