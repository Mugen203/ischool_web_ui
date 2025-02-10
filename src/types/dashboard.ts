export interface ScheduleEvent {
  time: string;
  title: string;
  type: "class" | "assignment" | "exam" | "meeting";
  description: string;
}

export interface ClassSession {
  courseCode: string;
  name: string;
  startTime: string;
  endTime: string;
  room: string;
  lecturer: string;
}