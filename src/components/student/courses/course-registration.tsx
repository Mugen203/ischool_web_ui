"use client";

// Import React and UI components
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

/**
 * Mock data for available courses
 * TODO: Replace with API data in production
 */
const availableCourses = [
  { code: "COSC102", name: "Data Structures", credits: 3, level: 100 },
  { code: "COSC346", name: "Software Engineering", credits: 3, level: 200 },
  {
    code: "ENG122",
    name: "Language and Writing Skills II",
    credits: 3,
    level: 300,
  },
  { code: "COSC245", name: "Entrepreneurship", credits: 4, level: 400 },
];

/**
 * CourseRegistration Component
 * Provides interface for students to register for courses and manage their course load
 */
export function CourseRegistration() {
  // State management for course registration
  const [searchTerm, setSearchTerm] = useState("");
  const [registeredCourses, setRegisteredCourses] = useState<
    typeof availableCourses
  >([]);
  const [error, setError] = useState<string | null>(null);

  // Filter courses based on search term
  const filteredCourses = availableCourses.filter(
    (course) =>
      course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  /**
   * Handle course registration
   * Validates registration conditions and updates state
   */
  const handleRegister = (course: (typeof availableCourses)[0]) => {
    // Check if course is already registered
    if (registeredCourses.some((c) => c.code === course.code)) {
      setError("You've already registered for this course.");
      return;
    }
    // Check maximum course load
    if (registeredCourses.length >= 8) {
      setError("You can't register for more than 5 courses per semester.");
      return;
    }
    // Add course to registered courses
    setRegisteredCourses([...registeredCourses, course]);
    setError(null);
  };

  /**
   * Handle course drop
   * Removes course from registered courses
   */
  const handleDrop = (course: (typeof availableCourses)[0]) => {
    setRegisteredCourses(
      registeredCourses.filter((c) => c.code !== course.code)
    );
    setError(null);
  };

  return (
    <div className="space-y-6">
      {/* Course Search Section */}
      <div>
        <Label htmlFor="search">Search Courses</Label>
        <Input
          id="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter course code or name"
        />
      </div>

      {/* Error Alert Display */}
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {/* Available Courses Table */}
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

      {/* Registered Courses Table */}
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
