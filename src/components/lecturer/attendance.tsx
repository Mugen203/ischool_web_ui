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
import { Checkbox } from "@/components/ui/checkbox";

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
 * Interface for student attendance data
 */
interface Student {
  /** Unique student identifier */
  id: number;
  /** Student's full name */
  name: string;
  /** Attendance status */
  present: boolean;
}

/**
 * LecturerAttendance Component
 *
 * Provides an interface for lecturers to manage course attendance.
 * Features include:
 * - Course-specific attendance tracking
 * - Date-based attendance records
 * - Student attendance marking
 * - Attendance statistics viewing
 * - Report generation
 *
 * @component
 * @example
 * ```tsx
 * <LecturerAttendance />
 * ```
 */
export function LecturerAttendance() {
  /** Currently selected course for attendance marking */
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  /** Selected date for attendance recording */
  const [selectedDate, setSelectedDate] = useState<string>("");

  /** Mock course data - replace with API call */
  const courses: Course[] = [
    { id: "MATH101", name: "Mathematics 101" },
    { id: "PHYS202", name: "Physics 202" },
    { id: "CS301", name: "Computer Science 301" },
  ];

  /** Mock student data - replace with API call */
  const students: Student[] = [
    { id: 1, name: "John Doe", present: true },
    { id: 2, name: "Jane Smith", present: false },
    { id: 3, name: "Alice Johnson", present: true },
    { id: 4, name: "Bob Williams", present: true },
    { id: 5, name: "Charlie Brown", present: false },
  ];

  /**
   * Handles changes to student attendance status
   * @param studentId - The ID of the student whose attendance is being modified
   * @todo Implement actual attendance tracking logic
   */
  const handleAttendanceChange = (studentId: number) => {
    console.log(`Toggled attendance for student ${studentId}`);
  };

  /**
   * Submits the current attendance record
   * @todo Implement actual submission logic to backend
   */
  const handleSubmitAttendance = () => {
    console.log("Submitting attendance");
  };

  return (
    <div className="space-y-6">
      {/* Attendance Marking Card */}
      <Card>
        <CardHeader>
          <CardTitle>Mark Attendance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
            <Input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>
          {selectedCourse && selectedDate && (
            <>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Student Name</TableHead>
                    <TableHead>Present</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {students.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell>{student.name}</TableCell>
                      <TableCell>
                        <Checkbox
                          checked={student.present}
                          onCheckedChange={() =>
                            handleAttendanceChange(student.id)
                          }
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Button className="mt-4" onClick={handleSubmitAttendance}>
                Submit Attendance
              </Button>
            </>
          )}
        </CardContent>
      </Card>

      {/* Statistics Card */}
      <Card>
        <CardHeader>
          <CardTitle>Attendance Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-sm font-medium">Total Students</p>
              <p className="text-2xl font-bold">150</p>
            </div>
            <div>
              <p className="text-sm font-medium">Average Attendance</p>
              <p className="text-2xl font-bold">85%</p>
            </div>
            <div>
              <p className="text-sm font-medium">Classes Conducted</p>
              <p className="text-2xl font-bold">24</p>
            </div>
            <div>
              <p className="text-sm font-medium">Last Updated</p>
              <p className="text-2xl font-bold">2023-06-05</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Report Generation Card */}
      <Card>
        <CardHeader>
          <CardTitle>Generate Attendance Report</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Generate a detailed attendance report for your courses.
          </p>
          <Button>Generate Report</Button>
        </CardContent>
      </Card>
    </div>
  );
}
