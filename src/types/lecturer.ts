export interface LecturerClass {
  courseCode: string;
  name: string;
  startTime: string;
  endTime: string;
  room: string;
  students: number;
  attendance?: number;
}

export interface UpcomingAssessment {
  courseCode: string;
  title: string;
  type: "quiz" | "assignment" | "exam" | "project";
  dueDate: string;
  submissions?: number;
  totalStudents: number;
}

export interface PendingTask {
    courseCode: string;
    type: 'assignment' | 'quiz' | 'exam';
    title: string;
    dueDate: string;
    submissionCount: number;
    totalStudents: number;
  }