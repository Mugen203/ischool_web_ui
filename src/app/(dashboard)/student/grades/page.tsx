"use client";

import { useState } from "react";
import { Book, GraduationCap, Award, FileText, Download } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { GPAChart } from "@/components/student/gpa-chart";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Type definitions
interface Course {
  course: string;
  name: string;
  grade: keyof typeof gradePoints;
  credits: number;
}

interface Semester {
  id: number;
  name: string;
}

// Mock data
const semesters: Semester[] = [
  { id: 1, name: "Fall 2023" },
  { id: 2, name: "Spring 2024" },
  { id: 3, name: "Summer 2024" },
];

const grades: Record<number, Course[]> = {
  1: [
    { course: "MATH101", name: "Calculus I", grade: "A", credits: 4 },
    { course: "PHYS101", name: "Physics I", grade: "B+", credits: 4 },
    { course: "CHEM101", name: "Chemistry I", grade: "A-", credits: 4 },
    { course: "ENG101", name: "English Composition", grade: "A", credits: 3 },
  ],
  2: [
    { course: "MATH102", name: "Calculus II", grade: "B", credits: 4 },
    { course: "PHYS102", name: "Physics II", grade: "A-", credits: 4 },
    {
      course: "CS101",
      name: "Introduction to Programming",
      grade: "A",
      credits: 3,
    },
    { course: "HIST101", name: "World History", grade: "B+", credits: 3 },
  ],
  3: [
    { course: "BIO101", name: "Biology I", grade: "A", credits: 4 },
    {
      course: "PSYCH101",
      name: "Introduction to Psychology",
      grade: "A-",
      credits: 3,
    },
    {
      course: "ECON101",
      name: "Principles of Economics",
      grade: "B",
      credits: 3,
    },
  ],
};

const gradePoints = {
  A: 4.0,
  "A-": 3.7,
  "B+": 3.3,
  B: 3.0,
  "B-": 2.7,
  "C+": 2.3,
  C: 2.0,
  "C-": 1.7,
  "D+": 1.3,
  D: 1.0,
  F: 0.0,
} as const;

export default function GradesPage() {
  const [selectedSemester, setSelectedSemester] = useState(semesters[0].id);

  const calculateGPA = (semesterGrades: Course[]): string => {
    if (!semesterGrades?.length) return "0.00";

    let totalPoints = 0;
    let totalCredits = 0;

    semesterGrades.forEach((course) => {
      totalPoints += gradePoints[course.grade] * course.credits;
      totalCredits += course.credits;
    });

    return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : "0.00";
  };

  const calculateCumulativeGPA = (): string => {
    const allCourses = Object.values(grades).flat();
    if (!allCourses.length) return "0.00";

    let totalPoints = 0;
    let totalCredits = 0;

    allCourses.forEach((course) => {
      totalPoints += gradePoints[course.grade] * course.credits;
      totalCredits += course.credits;
    });

    return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : "0.00";
  };

  const getTotalCredits = () => {
    return Object.values(grades)
      .flat()
      .reduce((sum, course) => sum + course.credits, 0);
  };

  const getGPAProgress = () => {
    const gpa = Number.parseFloat(calculateCumulativeGPA());
    return (gpa / 4.0) * 100;
  };

  const getBestPerformingCourse = () => {
    const allCourses = Object.values(grades).flat();
    return allCourses.reduce((best, current) =>
      gradePoints[current.grade] > gradePoints[best.grade] ? current : best
    );
  };

  const getWorstPerformingCourse = () => {
    const allCourses = Object.values(grades).flat();
    return allCourses.reduce((worst, current) =>
      gradePoints[current.grade] < gradePoints[worst.grade] ? current : worst
    );
  };

  const getCompletedCourses = () => {
    return Object.values(grades).flat().length;
  };

  return (
    <div className="flex-1 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">
          Academic Performance
        </h2>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="grade-reports">Grade Reports</TabsTrigger>
          <TabsTrigger value="transcripts">Transcripts</TabsTrigger>
          <TabsTrigger value="performance">Performance Summary</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Cumulative GPA
                </CardTitle>
                <GraduationCap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {calculateCumulativeGPA()}
                </div>
                <Progress className="mt-2" value={getGPAProgress()} />
                <p className="text-xs text-muted-foreground mt-2">
                  {getGPAProgress().toFixed(1)}% of perfect 4.0
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Credits
                </CardTitle>
                <Book className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{getTotalCredits()}</div>
                <p className="text-xs text-muted-foreground mt-2">
                  Across {Object.keys(grades).length} semesters
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Completed Courses
                </CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {getCompletedCourses()}
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Total courses completed
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Academic Standing
                </CardTitle>
                <Award className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Good</div>
                <p className="text-xs text-muted-foreground mt-2">
                  Based on your cumulative GPA
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>GPA Trend</CardTitle>
                <CardDescription>
                  Your GPA progression over semesters
                </CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <GPAChart />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Recent Grades</CardTitle>
                <CardDescription>Your latest course grades</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {grades[Math.max(...Object.keys(grades).map(Number))]
                    .slice(0, 5)
                    .map((course) => (
                      <div className="flex items-center" key={course.course}>
                        <div className="ml-4 space-y-1">
                          <p className="text-sm font-medium leading-none">
                            {course.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {course.course}
                          </p>
                        </div>
                        <div className="ml-auto font-medium">
                          {course.grade}
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="grade-reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Grade Reports</CardTitle>
              <CardDescription>
                View and download your grade reports
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Semester</TableHead>
                    <TableHead>Year</TableHead>
                    <TableHead>GPA</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {semesters.map((semester) => (
                    <TableRow key={semester.id}>
                      <TableCell>{semester.name.split(" ")[0]}</TableCell>
                      <TableCell>{semester.name.split(" ")[1]}</TableCell>
                      <TableCell>{calculateGPA(grades[semester.id])}</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="transcripts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Official Transcripts</CardTitle>
              <CardDescription>
                Request and download your official transcripts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold">Official Transcript</h4>
                    <p className="text-sm text-muted-foreground">
                      Complete academic record
                    </p>
                  </div>
                  <Button>Request Transcript</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold">Unofficial Transcript</h4>
                    <p className="text-sm text-muted-foreground">
                      For personal use only
                    </p>
                  </div>
                  <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Performance Summary</CardTitle>
              <CardDescription>
                Detailed analysis of your academic performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">GPA Distribution</h4>
                  <div className="flex space-x-2">
                    <div className="flex-1 bg-blue-100 h-4 rounded-full overflow-hidden">
                      <div
                        className="bg-blue-500 h-full"
                        style={{ width: "75%" }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium">3.0 - 4.0</span>
                  </div>
                  <div className="flex space-x-2 mt-2">
                    <div className="flex-1 bg-green-100 h-4 rounded-full overflow-hidden">
                      <div
                        className="bg-green-500 h-full"
                        style={{ width: "20%" }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium">2.0 - 2.9</span>
                  </div>
                  <div className="flex space-x-2 mt-2">
                    <div className="flex-1 bg-yellow-100 h-4 rounded-full overflow-hidden">
                      <div
                        className="bg-yellow-500 h-full"
                        style={{ width: "5%" }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium">1.0 - 1.9</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">
                    Top Performing Subjects
                  </h4>
                  <ul className="list-disc list-inside">
                    <li>Mathematics - 4.0 GPA</li>
                    <li>Computer Science - 3.8 GPA</li>
                    <li>Physics - 3.7 GPA</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Areas for Improvement</h4>
                  <ul className="list-disc list-inside">
                    <li>History - 2.7 GPA</li>
                    <li>Literature - 2.9 GPA</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
