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
