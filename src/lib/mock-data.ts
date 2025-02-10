import type { ClassSession } from "@/types/dashboard";
import { LecturerClass, PendingTask, UpcomingAssessment } from "@/types/lecturer";

// Type definition for schedule events
export interface ScheduleEvent {
  time: string;
  title: string;
  type: "class" | "assignment" | "exam" | "meeting";
  description: string;
}

// Mock data for today's classes
export const mockTodayClasses: ClassSession[] = [
  {
    courseCode: "MATH201",
    name: "Advanced Calculus",
    startTime: "08:00 AM",
    endTime: "09:30 AM",
    room: "LH-201",
    lecturer: "Dr. Smith",
  },
];

// Mock data for schedule events
export const mockScheduleEvents: ScheduleEvent[] = [
  {
    time: "08:00 AM",
    title: "Computer Vision",
    type: "class",
    description: "American High",
  },
  {
    time: "10:00 AM",
    title: "Programming Assignment Due",
    type: "assignment",
    description: "COSC301 - Data Structures",
  },
];

export const mockLecturerClasses: LecturerClass[] = [
  {
    courseCode: "CSC301",
    name: "Data Structures",
    startTime: "08:00 AM",
    endTime: "09:30 AM",
    room: "LH-201",
    students: 45,
    attendance: 42
  },
  {
    courseCode: "CSC405",
    name: "Software Engineering",
    startTime: "10:00 AM",
    endTime: "11:30 AM",
    room: "LH-305",
    students: 38,
    attendance: 35
  }
];

export const mockUpcomingAssessments: UpcomingAssessment[] = [
  {
    courseCode: "CSC301",
    title: "Mid-semester Exam",
    type: "exam",
    dueDate: "2024-03-15",
    totalStudents: 45
  },
  {
    courseCode: "CSC405",
    title: "Project Milestone 1",
    type: "project",
    dueDate: "2024-03-20",
    submissions: 25,
    totalStudents: 38
  }
];

export const mockPendingTasks: PendingTask[] = [
    {
      courseCode: "CSC301",
      type: "assignment",
      title: "Assignment 1: Linked Lists",
      dueDate: "2024-02-15",
      submissionCount: 40,
      totalStudents: 45
    }
  ];