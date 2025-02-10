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

export function StudentAttendance() {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  // Mock data - replace with actual data fetching
  const courses = [
    { id: "MATH101", name: "Mathematics 101" },
    { id: "PHYS202", name: "Physics 202" },
    { id: "CS301", name: "Computer Science 301" },
  ];

  const attendanceData = [
    { date: "2023-06-01", status: "Present" },
    { date: "2023-06-02", status: "Absent" },
    { date: "2023-06-03", status: "Present" },
    { date: "2023-06-04", status: "Present" },
    { date: "2023-06-05", status: "Late" },
  ];

  const attendanceStats = {
    totalClasses: 20,
    present: 15,
    absent: 3,
    late: 2,
    attendancePercentage: 85,
  };

  return (
    <div className="space-y-6">
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
