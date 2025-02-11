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
 * Interface for attendance record data
 */
interface AttendanceRecord {
  /** Date of the class session */
  date: string;
  /** Attendance status (Present, Absent, Late) */
  status: string;
}

/**
 * Interface for attendance statistics
 */
interface AttendanceStats {
  /** Total number of classes held */
  totalClasses: number;
  /** Number of classes attended */
  present: number;
  /** Number of classes missed */
  absent: number;
  /** Number of late arrivals */
  late: number;
  /** Overall attendance percentage */
  attendancePercentage: number;
}

/**
 * StudentAttendance Component
 *
 * Provides an interface for students to view and manage their attendance records.
 * Features include:
 * - Attendance overview and statistics
 * - Course-specific attendance records
 * - Attendance correction requests
 * - Detailed attendance history
 *
 * @component
 * @example
 * ```tsx
 * <StudentAttendance />
 * ```
 */
export function StudentAttendance() {
  /** Currently selected course for viewing attendance */
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  /** Mock course data - replace with API call */
  const courses: Course[] = [
    { id: "MATH101", name: "Mathematics 101" },
    { id: "PHYS202", name: "Physics 202" },
    { id: "CS301", name: "Computer Science 301" },
  ];

  /** Mock attendance records - replace with API call */
  const attendanceData: AttendanceRecord[] = [
    { date: "2023-06-01", status: "Present" },
    { date: "2023-06-02", status: "Absent" },
    { date: "2023-06-03", status: "Present" },
    { date: "2023-06-04", status: "Present" },
    { date: "2023-06-05", status: "Late" },
  ];

  /** Mock attendance statistics - replace with API call */
  const attendanceStats: AttendanceStats = {
    totalClasses: 20,
    present: 15,
    absent: 3,
    late: 2,
    attendancePercentage: 85,
  };

  return (
    <div className="space-y-6">
      {/* Attendance Overview Card */}
      <Card>
        <CardHeader>
          <CardTitle>Attendance Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-sm font-medium">Total Classes</p>
              <p className="text-2xl font-bold">
                {attendanceStats.totalClasses}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium">Present</p>
              <p className="text-2xl font-bold text-green-600">
                {attendanceStats.present}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium">Absent</p>
              <p className="text-2xl font-bold text-red-600">
                {attendanceStats.absent}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium">Late</p>
              <p className="text-2xl font-bold text-yellow-600">
                {attendanceStats.late}
              </p>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm font-medium">Attendance Percentage</p>
            <p className="text-3xl font-bold">
              {attendanceStats.attendancePercentage}%
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Attendance Records Card */}
      <Card>
        <CardHeader>
          <CardTitle>Attendance Records</CardTitle>
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
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {attendanceData.map((record, index) => (
                  <TableRow key={index}>
                    <TableCell>{record.date}</TableCell>
                    <TableCell>{record.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      {/* Correction Request Card */}
      <Card>
        <CardHeader>
          <CardTitle>Request Attendance Correction</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            If you believe there&apos;s an error in your attendance record, you
            can request a correction here.
          </p>
          <Button>Request Correction</Button>
        </CardContent>
      </Card>
    </div>
  );
}
