// Import UI table components
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

/**
 * Mock data for registered courses
 * TODO: Replace with API data in production
 */
const courses = [
  {
    code: "COSC101",
    name: "Introduction to Computer Science",
    credits: 3,
    level: 100,
  },
  { code: "COSC492", name: "Final Year Project", credits: 3, level: 400 },
  {
    code: "COSC455",
    name: "Artificial Intelligence & Machine Learning",
    credits: 3,
    level: 400,
  },
  { code: "COSC429", name: "Cloud Computing", credits: 3, level: 400 },
];

/**
 * RegisteredCourses Component
 * Displays a table of courses the student is currently registered for
 * Shows course code, name, credits, and level
 */
export function RegisteredCourses() {
  return (
    <Table>
      {/* Table Header Section */}
      <TableHeader>
        <TableRow>
          <TableHead>Course Code</TableHead>
          <TableHead>Course Name</TableHead>
          <TableHead>Credits</TableHead>
          <TableHead>Level</TableHead>
        </TableRow>
      </TableHeader>

      {/* Table Body - Course List */}
      <TableBody>
        {/* Map through courses array to create table rows */}
        {courses.map((course) => (
          <TableRow key={course.code}>
            <TableCell>{course.code}</TableCell>
            <TableCell>{course.name}</TableCell>
            <TableCell>{course.credits}</TableCell>
            <TableCell>{course.level}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
