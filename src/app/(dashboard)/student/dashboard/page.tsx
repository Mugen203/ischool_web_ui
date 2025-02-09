"use client";

interface ScheduleEvent {
  time: string;
  title: string;
  type: "class" | "assignment" | "exam" | "meeting";
  description: string;
}

import {
  Activity,
  BookOpen,
  DollarSign,
  Download,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDateRangePicker } from "@/components/date-range-picker";
import { Overview } from "@/components/overview";
import { RecentActivity } from "@/components/recent-activity";
import { TodayClassesCard } from "@/components/student/today-classes-card";
import { ScheduleCard } from "@/components/student/schedule-card";

const todayClasses = [
  {
    courseCode: "MATH201",
    name: "Advanced Calculus",
    startTime: "08:00 AM",
    endTime: "09:30 AM",
    room: "LH-201",
    lecturer: "Dr. Smith",
  },
  // Add more classes...
];

const scheduleEvents: ScheduleEvent[] = [
  {
    time: "08:00 AM",
    title: "Advanced Calculus",
    type: "class",
    description: "Room LH-201",
  },
  {
    time: "10:00 AM",
    title: "Programming Assignment Due",
    type: "assignment",
    description: "CS301 - Data Structures",
  },
  // Add more events...
];

export default function StudentDashboardPage() {
  return (
    <div className="flex-1 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          Dashboard
        </h2>
        <div className="flex items-center space-x-2">
          <CalendarDateRangePicker />
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
        </div>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="academics">Academics</TabsTrigger>
          <TabsTrigger value="finance">Finance</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-card text-card-foreground shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Current GPA
                </CardTitle>
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
                <CardTitle className="text-sm font-medium">
                  Attendance
                </CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">92%</div>
                <p className="text-xs text-muted-foreground">This semester</p>
              </CardContent>
            </Card>
          </div>
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
              classes={todayClasses}
              className="lg:col-span-4"
            />
            <ScheduleCard events={scheduleEvents} className="lg:col-span-3" />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
