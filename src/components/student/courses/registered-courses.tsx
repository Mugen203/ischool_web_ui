import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const courses = [
  {
    code: "CSC101",
    name: "Introduction to Computer Science",
    credits: 3,
    level: 100,
  },
  { code: "MAT201", name: "Linear Algebra", credits: 4, level: 200 },
  { code: "ENG301", name: "Advanced Writing", credits: 3, level: 300 },
  { code: "PHY401", name: "Quantum Mechanics", credits: 4, level: 400 },
];

export function RegisteredCourses() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Course Code</TableHead>
          <TableHead>Course Name</TableHead>
          <TableHead>Credits</TableHead>
          <TableHead>Level</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
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
