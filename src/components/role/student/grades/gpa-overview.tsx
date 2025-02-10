"use client";

import {
  Book,
  GraduationCap,
  Award,
  FileText,
  Clock,
  Target,
  TrendingUp,
  AlertCircle,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  calculateGPA,
  getTotalCredits,
  getCompletedCourses,
} from "@/lib/utils/grades";
import { grades } from "@/lib/mock/grades";
import { GPAChart } from "./gpa-chart";

export function GPAOverview() {
  const allCourses = Object.values(grades).flat();

  const getGPAProgress = () => {
    const gpa = Number.parseFloat(calculateGPA(allCourses));
    return (gpa / 4.0) * 100;
  };

  return (
    <div className="space-y-4">
      {/* Top Row - Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Cumulative GPA
            </CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{calculateGPA(allCourses)}</div>
            <Progress className="mt-2" value={getGPAProgress()} />
            <p className="text-xs text-muted-foreground mt-2">
              {getGPAProgress().toFixed(1)}% of perfect 4.0
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Credits</CardTitle>
            <Book className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {getTotalCredits(allCourses)}
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Credit hours earned
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Completed Courses
            </CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {getCompletedCourses(allCourses)}
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Out of {allCourses.length} total courses
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Current Standing
            </CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Good</div>
            <p className="text-xs text-muted-foreground mt-2">
              Academic status
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Middle Row - Chart and Summary */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <GPAChart />

        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Current Semester</CardTitle>
            <CardDescription>Spring 2024 Progress</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Classes Enrolled</span>
              <span className="text-sm text-muted-foreground">5 courses</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Credit Load</span>
              <span className="text-sm text-muted-foreground">15 credits</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Current Term GPA</span>
              <span className="text-sm text-muted-foreground">3.8</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Attendance Rate</span>
              <span className="text-sm text-muted-foreground">95%</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Row - Additional Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Graduation Timeline
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2 Semesters</div>
            <p className="text-xs text-muted-foreground mt-2">
              Expected Spring 2025
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Target GPA</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.8</div>
            <Progress className="mt-2" value={95} />
            <p className="text-xs text-muted-foreground mt-2">
              0.1 points to goal
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">GPA Change</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">+0.2</div>
            <p className="text-xs text-muted-foreground mt-2">
              From previous term
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Academic Notices
            </CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground mt-2">
              All requirements met
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
