"use client";

import { DollarSign, Download, Users, UserPlus, BookOpen } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarDateRangePicker } from "@/components/date-range-picker";
import { Overview } from "@/components/overview";
import { RecentUsers } from "@/components/recent-users";
import { BaseDashboard } from "@/components/shared/base";
import type { User } from "@/types/auth";

/**
 * The admin dashboard component, providing an overview of key metrics and activities
 * within the platform. It includes a mobile fallback component, metrics section, charts
 * and activity section, as well as additional tabs for analytics, reports, and
 * notifications.
 *
 * @param {object} user - The user object, as received from the server.
 *
 * @returns {React.ReactElement} The admin dashboard component.
 */
export function AdminDashboard({ user }: { user: User }) {
  // Mobile fallback component
  const mobileFallback = (
    <div className="md:hidden">
      <Image
        src="/examples/dashboard-light.png"
        width={1280}
        height={866}
        alt="Dashboard"
        className="block dark:hidden"
      />
      <Image
        src="/examples/dashboard-dark.png"
        width={1280}
        height={866}
        alt="Dashboard"
        className="hidden dark:block"
      />
    </div>
  );

  const headerActions = (
    <div className="flex items-center space-x-2">
      <CalendarDateRangePicker />
      <Button>
        <Download className="mr-2 h-4 w-4" />
        Download
      </Button>
    </div>
  );

  // Metrics section
  const metrics = (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-evenly">
      <Card className="p-2">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Users</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">10,482</div>
          <p className="text-xs text-muted-foreground">
            +20.1% from last month
          </p>
        </CardContent>
      </Card>

      <Card className="p-2">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">New Students</CardTitle>
          <UserPlus className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">1,245</div>
          <p className="text-xs text-muted-foreground">
            +180.1% from last month
          </p>
        </CardContent>
      </Card>

      <Card className="p-2">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Fees Collected</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$5,231,890</div>
          <p className="text-xs text-muted-foreground">+19% from last month</p>
        </CardContent>
      </Card>

      <Card className="p-2">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
          <BookOpen className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">573</div>
          <p className="text-xs text-muted-foreground">+201 since last year</p>
        </CardContent>
      </Card>
    </div>
  );

  // Charts and activity section
  const charts = (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Overview</CardTitle>
        </CardHeader>
        <CardContent className="pl-2">
          <Overview />
        </CardContent>
      </Card>

      <Card className="col-span-3">
        <CardHeader>
          <CardTitle>Recent Users</CardTitle>
          <CardDescription>
            Latest user registrations across all roles.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RecentUsers />
        </CardContent>
      </Card>
    </div>
  );

  // Define additional tabs
  const tabs = [
    { label: "Analytics", value: "analytics" },
    { label: "Reports", value: "reports" },
    { label: "Notifications", value: "notifications" },
  ];

  return (
    <>
      {mobileFallback}
      <BaseDashboard
        user={user}
        title="Dashboard"
        metrics={metrics}
        charts={charts}
        tabs={tabs}
        headerActions={headerActions}
      />
    </>
  );
}
