"use client";

import type { User } from "@/types/auth";

/**
 * The dashboard component for the Dean.
 *
 * @param {{ user: User }} - The user object, as received from the server.
 *
 * @returns {React.ReactElement} The dashboard component.
 */

export function DeanDashboard({ user }: { user: User }) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Dean Dashboard</h1>
      <p>Dean dashboard coming soon...</p>
    </div>
  );
}
