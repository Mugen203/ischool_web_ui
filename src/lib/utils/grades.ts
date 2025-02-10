import type { Course } from "@/types/grades";
import { gradePoints } from "@/types/grades";

export const calculateGPA = (courses: Course[]): string => {
  if (!courses?.length) return "0.00";

  let totalPoints = 0;
  let totalCredits = 0;

  courses.forEach((course) => {
    totalPoints += gradePoints[course.grade] * course.credits;
    totalCredits += course.credits;
  });

  return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : "0.00";
};

export const getTotalCredits = (courses: Course[]): number => {
  return courses.reduce((total, course) => total + course.credits, 0);
};

export const getCompletedCourses = (courses: Course[]): number => {
  return courses.filter(course => course.grade !== 'F').length;
};