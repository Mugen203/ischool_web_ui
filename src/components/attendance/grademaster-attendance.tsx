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
import { Input } from "@/components/ui/input";

export function GrademasterAttendance() {
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(
    null
  );
  const [attendanceThreshold, setAttendanceThreshold] = useState("75");

  // Mock data - replace with actual data fetching
  const departments = [
    { id: "CS", name: "Computer Science" },
    { id: "MATH", name: "Mathematics" },
    { id: "PHYS", name: "Physics" },
  ];

  const courseData = [
    { course: "CS101", totalClasses: 30, averageAttendance: 85 },
    { course: "CS201", totalClasses: 28, averageAttendance: 78 },
    { course: "CS301", totalClasses: 32, averageAttendance: 92 },
    { course: "CS401", totalClasses: 25, averageAttendance: 88 },
    { course: "CS501", totalClasses: 35, averageAttendance: 80 },
  ];

  const handleThresholdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAttendanceThreshold(e.target.value);
  };

  const handleUpdatePolicy = () => {
    // Implement policy update logic here
    console.log(
      `Updating attendance policy with threshold: ${attendanceThreshold}%`
    );
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Attendance Policy Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4 mb-4">
            <label htmlFor="threshold" className="text-sm font-medium">
              Attendance Threshold (%):
            </label>
            <Input
              id="threshold"
              type="number"
              min="0"
              max="100"
              value={attendanceThreshold}
              onChange={handleThresholdChange}
              className="w-20"
            />
            <Button onClick={handleUpdatePolicy}>Update Policy</Button>
          </div>
          <p className="text-sm text-gray-500">
            Students with attendance below this threshold may face academic
            penalties.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Department-wise Attendance Overview</CardTitle>
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
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Course</TableHead>
                  <TableHead>Total Classes</TableHead>
                  <TableHead>Average Attendance (%)</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {courseData.map((course, index) => (
                  <TableRow key={index}>
                    <TableCell>{course.course}</TableCell>
                    <TableCell>{course.totalClasses}</TableCell>
                    <TableCell>{course.averageAttendance}%</TableCell>
                    <TableCell>
                      <span
                        className={
                          course.averageAttendance >=
                          Number.parseInt(attendanceThreshold)
                            ? "text-green-600"
                            : "text-red-600"
                        }
                      >
                        {course.averageAttendance >=
                        Number.parseInt(attendanceThreshold)
                          ? "Above Threshold"
                          : "Below Threshold"}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Generate Attendance Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Generate detailed attendance reports for specific departments or
            courses.
          </p>
          <div className="space-x-4">
            <Button>Department Report</Button>
            <Button>Course Report</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
