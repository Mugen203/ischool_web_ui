"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

/**
 * Interface for department data structure
 */
interface Department {
  /** Unique department identifier */
  id: string;
  /** Full department name */
  name: string;
}

/**
 * Interface for course attendance data
 */
interface CourseAttendance {
  /** Course code/identifier */
  course: string;
  /** Attendance rate as a percentage */
  attendanceRate: number;
}

/**
 * Interface for overall attendance statistics
 */
interface OverallStats {
  /** Total number of students across all departments */
  totalStudents: number;
  /** Average attendance rate across all departments */
  averageAttendance: number;
  /** Number of departments above average attendance */
  departmentsAboveAverage: number;
  /** Number of departments below average attendance */
  departmentsBelowAverage: number;
}

/**
 * DeanAttendance Component
 *
 * Provides a comprehensive view of attendance statistics across all departments
 * for the Dean's office. Features include:
 * - Overall attendance statistics dashboard
 * - Department-specific attendance visualization
 * - Comparative department performance metrics
 * - Report generation functionality
 *
 * @component
 * @example
 * ```tsx
 * <DeanAttendance />
 * ```
 */
export function DeanAttendance() {
  /** Currently selected department for detailed view */
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(
    null
  );

  /** Mock department data - replace with API call */
  const departments: Department[] = [
    { id: "CS", name: "Computer Science" },
    { id: "MATH", name: "Mathematics" },
    { id: "PHYS", name: "Physics" },
  ];

  /** Mock attendance data - replace with API call */
  const attendanceData: CourseAttendance[] = [
    { course: "CS101", attendanceRate: 92 },
    { course: "CS201", attendanceRate: 88 },
    { course: "CS301", attendanceRate: 85 },
    { course: "CS401", attendanceRate: 90 },
    { course: "CS501", attendanceRate: 87 },
  ];

  /** Mock overall statistics - replace with API call */
  const overallStats: OverallStats = {
    totalStudents: 1500,
    averageAttendance: 88,
    departmentsAboveAverage: 3,
    departmentsBelowAverage: 2,
  };

  return (
    <div className="space-y-6">
      {/* Overall Statistics Card */}
      <Card>
        <CardHeader>
          <CardTitle>Overall Attendance Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-sm font-medium">Total Students</p>
              <p className="text-2xl font-bold">{overallStats.totalStudents}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Average Attendance</p>
              <p className="text-2xl font-bold">
                {overallStats.averageAttendance}%
              </p>
            </div>
            <div>
              <p className="text-sm font-medium">Departments Above Average</p>
              <p className="text-2xl font-bold text-green-600">
                {overallStats.departmentsAboveAverage}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium">Departments Below Average</p>
              <p className="text-2xl font-bold text-red-600">
                {overallStats.departmentsBelowAverage}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Department Overview Card */}
      <Card>
        <CardHeader>
          <CardTitle>Departmental Attendance Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Select onValueChange={(value) => setSelectedDepartment(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select Department" />
              </SelectTrigger>
              <SelectContent>
                {departments.map((dept) => (
                  <SelectItem key={dept.id} value={dept.id}>
                    {dept.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {selectedDepartment && (
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="course" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="attendanceRate" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          )}
        </CardContent>
      </Card>

      {/* Report Generation Card */}
      <Card>
        <CardHeader>
          <CardTitle>Generate Comprehensive Report</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Generate a detailed attendance report across all departments.
          </p>
          <Button>Generate Report</Button>
        </CardContent>
      </Card>
    </div>
  );
}
