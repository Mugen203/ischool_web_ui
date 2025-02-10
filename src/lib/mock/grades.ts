import type { Course, Semester } from "@/types/grades";

export const semesters: Semester[] = [
  { id: 1, name: "Fall 2023" },
  { id: 2, name: "Spring 2024" },
  { id: 3, name: "Summer 2024" },
];

export const grades: Record<number, Course[]> = {
  1: [
    { course: "MATH101", name: "Calculus I", grade: "A", credits: 4 },
    { course: "PHYS101", name: "Physics I", grade: "B+", credits: 4 },
    { course: "CHEM101", name: "Chemistry I", grade: "A-", credits: 4 },
    { course: "ENG101", name: "English Composition", grade: "A", credits: 3 },
  ],
  // ...existing grades data
};