"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

const availableCourses = [
  { code: "CSC102", name: "Data Structures", credits: 3, level: 100 },
  { code: "MAT202", name: "Calculus II", credits: 4, level: 200 },
  { code: "ENG302", name: "Technical Writing", credits: 3, level: 300 },
  { code: "PHY402", name: "Thermodynamics", credits: 4, level: 400 },
];

export function CourseRegistration() {
  const [searchTerm, setSearchTerm] = useState("");
  const [registeredCourses, setRegisteredCourses] = useState<
    typeof availableCourses
  >([]);
  const [error, setError] = useState<string | null>(null);

  const filteredCourses = availableCourses.filter(
    (course) =>
      course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRegister = (course: (typeof availableCourses)[0]) => {
    if (registeredCourses.some((c) => c.code === course.code)) {
      setError("You've already registered for this course.");
      return;
    }
    if (registeredCourses.length >= 5) {
      setError("You can't register for more than 5 courses per semester.");
      return;
    }
    setRegisteredCourses([...registeredCourses, course]);
    setError(null);
  };

  const handleDrop = (course: (typeof availableCourses)[0]) => {
    setRegisteredCourses(
      registeredCourses.filter((c) => c.code !== course.code)
    );
    setError(null);
  };

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="search">Search Courses</Label>
        <Input
          id="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter course code or name"
        />
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div>
        <h3 className="text-lg font-semibold mb-2">Available Courses</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Course Code</TableHead>
              <TableHead>Course Name</TableHead>
              <TableHead>Credits</TableHead>
              <TableHead>Level</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCourses.map((course) => (
              <TableRow key={course.code}>
                <TableCell>{course.code}</TableCell>
                <TableCell>{course.name}</TableCell>
                <TableCell>{course.credits}</TableCell>
                <TableCell>{course.level}</TableCell>
                <TableCell>
                  <Button onClick={() => handleRegister(course)}>
                    Register
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Registered Courses</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Course Code</TableHead>
              <TableHead>Course Name</TableHead>
              <TableHead>Credits</TableHead>
              <TableHead>Level</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {registeredCourses.map((course) => (
              <TableRow key={course.code}>
                <TableCell>{course.code}</TableCell>
                <TableCell>{course.name}</TableCell>
                <TableCell>{course.credits}</TableCell>
                <TableCell>{course.level}</TableCell>
                <TableCell>
                  <Button
                    variant="destructive"
                    onClick={() => handleDrop(course)}
                  >
                    Drop
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
