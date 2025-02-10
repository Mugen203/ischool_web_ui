"use client";

import { Activity, BookOpen, DollarSign, GraduationCap } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Overview } from "@/components/overview";
import { RecentActivity } from "@/components/recent-activity";
import { TodayClassesCard } from "@/components/role/student/today-classes-card";
import { ScheduleCard } from "@/components/role/student/schedule-card";
import { BaseDashboard } from "@/components/dashboard/base";
import type { User } from "@/types/auth";
import { mockTodayClasses, mockScheduleEvents } from "@/lib/mock-data";

export function StudentDashboard({ user }: { user: User }) {
  const metrics = (
    <>
      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Current GPA</CardTitle>
          <GraduationCap className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">3.75</div>
          <p className="text-xs text-muted-foreground">
            +0.25 from last semester
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Enrolled Courses
          </CardTitle>
          <BookOpen className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">5</div>
          <p className="text-xs text-muted-foreground">This semester</p>
        </CardContent>
      </Card>

      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Fees Due</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$2,500</div>
          <p className="text-xs text-muted-foreground">Due in 30 days</p>
        </CardContent>
      </Card>

      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Attendance</CardTitle>
          <Activity className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">92%</div>
          <p className="text-xs text-muted-foreground">This semester</p>
        </CardContent>
      </Card>
    </>
  );

  const mainContent = (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 bg-card text-card-foreground shadow-lg">
          <CardHeader>
            <CardTitle>Academic Progress</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <Overview />
          </CardContent>
        </Card>

        <Card className="col-span-3 bg-card text-card-foreground shadow-lg">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Your latest academic and administrative activities.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RecentActivity />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <TodayClassesCard
          classes={mockTodayClasses}
          className="lg:col-span-4"
        />
        <ScheduleCard events={mockScheduleEvents} className="lg:col-span-3" />
      </div>
    </>
  );

  const tabs = [
    { label: "Academics", value: "academics" },
    { label: "Finance", value: "finance" },
    { label: "Reports", value: "reports" },
  ];

  return (
    <BaseDashboard
      user={user}
      title="Dashboard"
      metrics={metrics}
      charts={mainContent}
      tabs={tabs}
    />
  );
}
