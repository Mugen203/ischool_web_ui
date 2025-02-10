"use client";

import { Users, BookOpen, FileCheck, Activity } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Overview } from "@/components/overview";
import { RecentActivity } from "@/components/recent-activity";
import { BaseDashboard } from "@/components/dashboard/base";
import { ClassScheduleCard } from "./class-schedule-card";
import type { User } from "@/types/auth";
import { mockLecturerClasses, mockPendingTasks } from "@/lib/mock-data";

export function LecturerDashboard({ user }: { user: User }) {
  const metrics = (
    <>
      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Students</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">127</div>
          <p className="text-xs text-muted-foreground">Across all courses</p>
        </CardContent>
      </Card>

      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
          <BookOpen className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">4</div>
          <p className="text-xs text-muted-foreground">This semester</p>
        </CardContent>
      </Card>

      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Pending Grades</CardTitle>
          <FileCheck className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">23</div>
          <p className="text-xs text-muted-foreground">Submissions to grade</p>
        </CardContent>
      </Card>

      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Average Attendance
          </CardTitle>
          <Activity className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">89%</div>
          <p className="text-xs text-muted-foreground">Across all courses</p>
        </CardContent>
      </Card>
    </>
  );

  const mainContent = (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Course Performance</CardTitle>
            <CardDescription>Average grades across all courses</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <Overview />
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest submissions and grades</CardDescription>
          </CardHeader>
          <CardContent>
            <RecentActivity />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <ClassScheduleCard
          classes={mockLecturerClasses}
          className="lg:col-span-4"
        />
        {/* Add pending tasks card */}
      </div>
    </>
  );

  const tabs = [
    { label: "Courses", value: "courses" },
    { label: "Assessments", value: "assessments" },
    { label: "Reports", value: "reports" },
  ];

  return (
    <BaseDashboard
      user={user}
      title="Lecturer Dashboard"
      metrics={metrics}
      charts={mainContent}
      tabs={tabs}
    />
  );
}
