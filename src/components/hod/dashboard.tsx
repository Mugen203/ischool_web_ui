"use client";

import type { User } from "@/types/auth";

/**
 * The dashboard component for the Department Head.
 *
 * @param {{ user: User }} - The user object, as received from the server.
 *
 * @returns {React.ReactElement} The dashboard component.
 */
export function HodDashboard({ user }: { user: User }) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">HOD Dashboard</h1>
      <p>Department Head dashboard coming soon...</p>
    </div>
  );
}
