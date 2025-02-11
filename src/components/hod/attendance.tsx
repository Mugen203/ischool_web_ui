"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
 * Interface for course data structure
 */
interface Course {
  /** Unique course identifier */
  id: string;
  /** Full course name */
  name: string;
}

/**
 * Interface for lecturer attendance data
 */
interface LecturerAttendance {
  /** Lecturer's full name */
  name: string;
  /** Average attendance percentage */
  averageAttendance: number;
  /** Last attendance update date */
  lastUpdated: string;
}

/**
 * Interface for monthly attendance trend data
 */
interface AttendanceTrend {
  /** Month name abbreviation */
  month: string;
  /** Average attendance percentage */
  attendance: number;
}

/**
 * HODAttendance Component
 *
 * Provides a comprehensive attendance monitoring interface for Head of Department.
 * Features include:
 * - Department-wide attendance overview
 * - Course-specific attendance tracking
 * - Lecturer performance monitoring
 * - Attendance management tools
 *
 * @component
 * @example
 * ```tsx
 * <HODAttendance />
 * ```
 */
export default function HODAttendance() {
  /** Currently selected course for detailed view */
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  /** Mock course data - replace with API call */
  const courses: Course[] = [
    { id: "CS101", name: "Introduction to Programming" },
    { id: "CS201", name: "Data Structures" },
    { id: "CS301", name: "Algorithms" },
  ];

  /** Mock lecturer attendance data - replace with API call */
  const lecturerData: LecturerAttendance[] = [
    { name: "Dr. Smith", averageAttendance: 92, lastUpdated: "2023-06-01" },
    { name: "Prof. Johnson", averageAttendance: 88, lastUpdated: "2023-06-02" },
    { name: "Dr. Williams", averageAttendance: 95, lastUpdated: "2023-06-03" },
    { name: "Prof. Brown", averageAttendance: 90, lastUpdated: "2023-06-04" },
    { name: "Dr. Davis", averageAttendance: 87, lastUpdated: "2023-06-05" },
  ];

  /** Mock attendance trend data - replace with API call */
  const attendanceTrend: AttendanceTrend[] = [
    { month: "Jan", attendance: 88 },
    { month: "Feb", attendance: 90 },
    { month: "Mar", attendance: 89 },
    { month: "Apr", attendance: 92 },
    { month: "May", attendance: 91 },
    { month: "Jun", attendance: 93 },
  ];

  /**
   * Handles report generation for selected course
   * @todo Implement actual report generation logic
   */
  const handleGenerateReport = () => {
    console.log(`Generating report for ${selectedCourse}`);
  };

  return (
    <div className="space-y-6">
      {/* Department Overview Card */}
      <Card>
        <CardHeader>
          <CardTitle>Department Attendance Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div>
              <p className="text-sm font-medium">Total Courses</p>
              <p className="text-2xl font-bold">15</p>
            </div>
            <div>
              <p className="text-sm font-medium">Average Attendance</p>
              <p className="text-2xl font-bold">88%</p>
            </div>
            <div>
              <p className="text-sm font-medium">Highest Attendance</p>
              <p className="text-2xl font-bold text-green-600">95%</p>
            </div>
            <div>
              <p className="text-sm font-medium">Lowest Attendance</p>
              <p className="text-2xl font-bold text-red-600">82%</p>
            </div>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={attendanceTrend}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="attendance" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Course Attendance Card */}
      <Card>
        <CardHeader>
          <CardTitle>Course-wise Attendance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Select onValueChange={(value) => setSelectedCourse(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select Course" />
              </SelectTrigger>
              <SelectContent>
                {courses.map((course) => (
                  <SelectItem key={course.id} value={course.id}>
                    {course.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {selectedCourse && (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Lecturer</TableHead>
                  <TableHead>Average Attendance (%)</TableHead>
                  <TableHead>Last Updated</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {lecturerData.map((lecturer, index) => (
                  <TableRow key={index}>
                    <TableCell>{lecturer.name}</TableCell>
                    <TableCell>{lecturer.averageAttendance}%</TableCell>
                    <TableCell>{lecturer.lastUpdated}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      {/* Management Tools Card */}
      <Card>
        <CardHeader>
          <CardTitle>Attendance Management Tools</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <p className="mb-2">
                Generate comprehensive attendance reports for the department.
              </p>
              <Button onClick={handleGenerateReport}>
                Generate Department Report
              </Button>
            </div>
            <div>
              <p className="mb-2">
                Set up attendance alerts for courses with low attendance rates.
              </p>
              <Button>Configure Alerts</Button>
            </div>
            <div>
              <p className="mb-2">
                Review and approve attendance correction requests.
              </p>
              <Button>Review Correction Requests</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
