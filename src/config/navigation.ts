import { UserRole } from '@/types/auth';
import {
  Home,
  Settings2,
  Notebook,
  Calendar,
  Award,
  Library,
  Activity,
  ClipboardList,
  Wallet,
  FileText,
  FilePlus,
  FileMinus,
  FileSearch,
  Laptop,
  BookCheck,
  BookOpen,
  ChevronRight,
  FileEdit,
  MessageSquare,
  UserCog,
  Users,
  Files,
  FileSignature,
  Briefcase,
  GraduationCap,
  ListChecks,
  ClipboardCheck,
  UserCheck,
  UserPlus,
  Building,
  Building2,
  UserMinus,
  Palette,
  Users2,
  MonitorCheck,
  Database,
} from "lucide-react";

export interface NavItem {
  title: string;
  url?: string;
  icon?: any;
  items?: NavItem[];
  group: string;
}

const baseNavItems: NavItem[] = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
    group: "base",
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings2,
    group: "base",
  },
];

// Update the getNavigation function to include role-specific base items
export const getNavigation = (role: UserRole): NavItem[] => {
  role = role.toLowerCase() as UserRole;
  // Create base items with role-specific URLs
  const roleBaseItems: NavItem[] = [
    {
      title: "Dashboard",
      url: `/${role}/dashboard`,
      icon: Home,
      group: "main"
    },
    {
      title: "Settings",
      url: `/${role}/settings`,
      icon: Settings2,
      group: "main"
    }
  ];

  switch (role.toLowerCase()) {
    case "student":
      return [
        ...roleBaseItems,
        // Academic Group
        {
          title: "Courses",
          icon: BookOpen,
          group: "academic",
          items: [
            {
              title: "Register for Courses",
              url: "/student/courses/register",
              icon: FilePlus,
              group: "academic"
            },
            {
              title: "Drop Courses",
              url: "/student/courses/drop",
              icon: FileMinus,
              group: "academic",
            },
          ],
        },
        {
          title: "Grades",
          url: "/student/grades",
          icon: Award,
          group: "academic",
        },
        {
          title: "Attendance",
          url: "/student/attendance",
          icon: Calendar,
          group: "academic",
        },
        // Resources Group
        {
          title: "Library",
          icon: Library,
          group: "resources",
          items: [
            { 
              title: "Library Center", 
              url: "/student/library/center",
              group: "resources",
            },
            {
              title: "OPAC",
              url: "/student/library/opac",
              icon: FileSearch,
              group: "resources",
            },
            {
              title: "Online Library",
              url: "/student/library/online",
              icon: Laptop,
              group: "resources",
            },
            {
              title: "Book Borrowing",
              url: "/student/library/borrow",
              icon: BookCheck,
              group: "resources",
            },
          ],
        },
        {
          title: "Student Life",
          icon: Activity,
          group: "resources",
          items: [
            {
              title: "Clubs & Societies",
              url: "/student/activities/clubs",
              group: "resources",
            },
            {
              title: "Residential Tasks",
              url: "/student/residential/tasks",
              group: "resources",
            },
          ],
        },
        // Administrative Group
        {
          title: "Enrollment",
          url: "/student/enrollment",
          icon: ClipboardList,
          group: "administrative",
        },
        {
          title: "Financial Summary",
          url: "/student/financials",
          icon: Wallet,
          group: "administrative",
        },
        {
          title: "Reports",
          icon: FileText,
          group: "administrative",
          items: [
            {
              title: "Registration Slip",
              url: "/student/reports/registration",
              group: "administrative",
            },
            {
              title: "Scholastic Report",
              url: "/student/reports/scholastic",
              group: "administrative",
            },
            {
              title: "My Lecturers",
              url: "/student/reports/lecturers",
              group: "administrative",
            },
            {
              title: "My Exemptions",
              url: "/student/reports/exemptions",
              group: "administrative",
            },
            {
              title: "Exam Permit",
              url: "/student/reports/exam-permit",
              group: "administrative",
            },
            { 
              title: "Results Slip", 
              url: "/student/reports/results",
              group: "administrative",
            },
            {
              title: "Courses to Repeat",
              url: "/student/reports/repeat-courses",
              group: "administrative",
            },
            {
              title: "Graduation Checklist",
              url: "/student/reports/graduation-checklist",
              group: "administrative",
            },
            {
              title: "Graduation Slip",
              url: "/student/reports/graduation-slip",
              group: "administrative",
            },
            {
              title: "National Service Application",
              url: "/student/reports/national-service",
              group: "administrative",
            },
          ],
        },
        {
          title: "Applications",
          icon: FilePlus,
          group: "administrative",
          items: [
            { 
              title: "Hostel", 
              url: "/student/applications/hostel",
              group: "administrative",
            },
            {
              title: "Certificate Collection",
              url: "/student/applications/certificate",
              group: "administrative",
            },
            {
              title: "Matriculation Oath",
              url: "/student/applications/matriculation",
              group: "administrative",
            },
            {
              title: "Change of Program",
              url: "/student/applications/change-program",
              group: "administrative",
            },
            {
              title: "Graduation",
              url: "/student/applications/graduation",
              group: "administrative",
            },
            {
              title: "National Service",
              url: "/student/applications/national-service",
              group: "administrative",
            },
            {
              title: "Scholarship",
              url: "/student/applications/scholarship",
              group: "administrative",
            },
          ],
        },
      ];

    case "lecturer":
      return [
        ...roleBaseItems,
        // Academic Group
        {
          title: "My Classes",
          url: "/lecturer/classes",
          icon: ClipboardList,
          group: "academic",
        },
        {
          title: "Course Materials",
          url: "/lecturer/materials",
          icon: BookOpen,
          group: "academic",
        },
        {
          title: "Assignments",
          icon: FileEdit,
          group: "academic",
          items: [
            {
              title: "Create Assignment",
              url: "/lecturer/assignments/create",
              icon: FileEdit,
              group: "academic",
            },
            {
              title: "View Assignments",
              url: "/lecturer/assignments",
              icon: FileText,
              group: "academic",
            },
          ],
        },
        // Communication Group
        {
          title: "Messages",
          url: "/lecturer/messages",
          icon: MessageSquare,
          group: "communication",
        },
        // Administrative Group
        {
          title: "Attendance",
          url: "/lecturer/attendance",
          icon: Calendar,
          group: "administrative",
        },
        {
          title: "Reports",
          icon: FileText,
          group: "administrative",
          items: [
            { 
              title: "Results Slip", 
              url: "/lecturer/reports/results",
              group: "administrative",
            },
          ],
        },
      ];

    case "grademaster":
      return [
        ...roleBaseItems,
        {
          title: "Students",
          url: "/grademaster/students",
          icon: Users,
          group: "students",
          items: [
            { 
              title: "View Students", 
              url: "/grademaster/students",
              group: "students",
            },
          ],
        },
        {
          title: "Courses",
          url: "/grademaster/courses",
          icon: BookOpen,
          group: "academic",
          items: [
            { 
              title: "View Courses", 
              url: "/grademaster/courses",
              group: "academic",
            },
          ],
        },
        {
          title: "Class Enrollment",
          url: "/grademaster/enrollment",
          icon: Files,
          group: "administrative",
        },
        {
          title: "Attendance",
          url: "/grademaster/attendance",
          icon: Calendar,
          group: "administrative",
        },
        {
          title: "Reports",
          icon: FileText,
          group: "administrative",
          items: [
            { 
              title: "Results Slip", 
              url: "/grademaster/reports/results",
              group: "administrative",
            },
            {
              title: "Student Grades",
              url: "/grademaster/reports/grades",
              icon: Award,
              group: "administrative",
            },
          ],
        },
      ];

    case "hod":
      return [
        ...roleBaseItems,
        // Academic Group
        {
          title: "My Classes",
          url: "/hod/classes",
          icon: ClipboardList,
          group: "academic",
        },
        {
          title: "Courses",
          icon: BookOpen,
          group: "academic",
          items: [
            { 
              title: "View Courses", 
              url: "/hod/courses",
              group: "academic",
            },
            {
              title: "Assign Lecturers",
              url: "/hod/courses/assign-lecturers",
              group: "academic",
            },
            {
              title: "Approve Course Materials",
              url: "/hod/courses/materials/approve",
              group: "academic",
            },
          ],
        },
        // Faculty Group
        {
          title: "Lecturers",
          icon: Briefcase,
          group: "faculty",
          items: [
            { 
              title: "View Lecturers", 
              url: "/hod/lecturers",
              group: "faculty",
            },
            {
              title: "Assign Courses",
              url: "/hod/lecturers/assign-courses",
              group: "faculty",
            },
            {
              title: "Faculty Evaluation",
              url: "/hod/faculty/evaluation",
              icon: FileSignature,
              group: "faculty",
            },
          ],
        },
        {
          title: "Attendance",
          url: "/hod/attendance",
          icon: Calendar,
          group: "administrative",
        },
        // Students Group
        {
          title: "Students",
          icon: Users,
          group: "students",
          items: [
            { 
              title: "View Students", 
              url: "/hod/students",
              group: "students",
            },
            {
              title: "Academic Standing",
              url: "/hod/students/academic-standing",
              group: "students",
            },
            {
              title: "Graduation Eligibility",
              url: "/hod/students/graduation-eligibility",
              icon: GraduationCap,
              group: "students",
            },
          ],
        },
        // Administrative Group
        {
          title: "Reports",
          icon: FileText,
          group: "administrative",
          items: [
            { 
              title: "Results Slip", 
              url: "/hod/reports/results",
              group: "administrative",
            },
            {
              title: "Department Performance",
              url: "/hod/reports/department-performance",
              group: "administrative",
            },
          ],
        },
        {
          title: "Department Approvals",
          url: "/hod/approvals",
          icon: ClipboardCheck,
          group: "administrative",
        },
        {
          title: "Departmental Meetings",
          url: "/hod/meetings",
          icon: ListChecks,
          group: "administrative",
        },
      ];

    case "dean":
      return [
        ...roleBaseItems,
        // Faculty Group
        {
          title: "Lecturers",
          icon: Briefcase,
          group: "faculty",
          items: [
            { 
              title: "View Lecturers", 
              url: "/dean/lecturers",
              group: "faculty",
            },
            {
              title: "Assign Courses",
              url: "/dean/lecturers/assign-courses",
              group: "faculty",
            },
            {
              title: "Faculty Evaluation",
              url: "/dean/faculty/evaluation",
              icon: FileSignature,
              group: "faculty",
            },
          ],
        },
        {
          title: "Attendance",
          url: "/dean/attendance",
          icon: Calendar,
          group: "administrative",
        },
        // Students Group
        {
          title: "Students",
          icon: Users,
          group: "students",
          items: [
            { 
              title: "View Students", 
              url: "/dean/students",
              group: "students",
            },
            {
              title: "Academic Standing",
              url: "/dean/students/academic-standing",
              group: "students",
            },
            {
              title: "Graduation Eligibility",
              url: "/dean/students/graduation-eligibility",
              icon: GraduationCap,
              group: "students",
            },
          ],
        },
        // Academic Group
        {
          title: "Grademasters",
          url: "/dean/grademasters",
          icon: UserCheck,
          group: "academic",
        },
        {
          title: "Courses",
          icon: BookOpen,
          group: "academic",
          items: [
            { 
              title: "View Courses", 
              url: "/dean/courses",
              group: "academic",
            },
            {
              title: "Approve Course Materials",
              url: "/dean/courses/materials/approve",
              group: "academic",
            },
          ],
        },
        // Administrative Group
        {
          title: "Reports",
          icon: FileText,
          group: "administrative",
          items: [
            { 
              title: "Results Slip", 
              url: "/dean/reports/results",
              group: "administrative",
            },
            {
              title: "Faculty Performance",
              url: "/dean/reports/faculty-performance",
              group: "administrative",
            },
          ],
        },
        {
          title: "Departmental Approvals",
          url: "/dean/approvals",
          icon: ClipboardCheck,
          group: "administrative",
        },
        {
          title: "College Meetings",
          url: "/dean/meetings",
          icon: ListChecks,
          group: "administrative",
        },
      ];

    case "admin":
      return [
        ...roleBaseItems,
        // Main Group
        {
          title: "Registry",
          icon: Building,
          group: "main",
          items: [
            { 
              title: "View Registry", 
              url: "/administrator/registry",
              icon: Building2,
              group: "main"
            },
            {
              title: "Edit Registry",
              url: "/administrator/registry/edit",
              icon: FileEdit,
              group: "main"
            },
          ],
        },
        // User Management Group
        {
          title: "Students",
          icon: Users,
          group: "userManagement",
          items: [
            { 
              title: "View Students", 
              url: "/administrator/students",
              icon: Users,
              group: "userManagement"
            },
            {
              title: "Add Student",
              url: "/administrator/students/add",
              icon: UserPlus,
              group: "userManagement"
            },
            {
              title: "Edit Student",
              url: "/administrator/students/edit",
              icon: FileEdit,
              group: "userManagement"
            },
            {
              title: "Remove Student",
              url: "/administrator/students/remove",
              icon: UserMinus,
              group: "userManagement"
            },
          ],
        },
        {
          title: "Lecturers",
          icon: UserCog,
          group: "userManagement",
          items: [
            { 
              title: "View Lecturers", 
              url: "/administrator/lecturers",
              icon: UserCog,
              group: "userManagement"
            },
            {
              title: "Add Lecturer",
              url: "/administrator/lecturers/add",
              icon: UserPlus,
              group: "userManagement"
            },
            {
              title: "Edit Lecturer",
              url: "/administrator/lecturers/edit",
              icon: FileEdit,
              group: "userManagement"
            },
            {
              title: "Remove Lecturer",
              url: "/administrator/lecturers/remove",
              icon: UserMinus,
              group: "userManagement"
            },
          ],
        },
        // ...add other user management items (Grademasters, Deans, HODs, Administrators)

        // Academic Group
        {
          title: "Courses",
          icon: BookOpen,
          group: "academic",
          items: [
            { 
              title: "View Courses", 
              url: "/administrator/courses",
              icon: BookOpen,
              group: "academic"
            },
            {
              title: "Add Course",
              url: "/administrator/courses/add",
              icon: BookCheck,
              group: "academic"
            },
            {
              title: "Edit Course",
              url: "/administrator/courses/edit",
              icon: FileEdit,
              group: "academic"
            },
            {
              title: "Remove Course",
              url: "/administrator/courses/remove",
              icon: FileMinus,
              group: "academic"
            },
          ],
        },
        // ...add other academic items (Programs/Degrees, Class Enrollment, Attendance)

        // Facilities Group
        {
          title: "Classrooms",
          icon: Palette,
          group: "facilities",
          items: [
            { 
              title: "View Classrooms", 
              url: "/administrator/classrooms",
              icon: Palette,
              group: "facilities"
            },
            {
              title: "Add Classroom",
              url: "/administrator/classrooms/add",
              icon: FilePlus,
              group: "facilities"
            },
            {
              title: "Edit Classroom",
              url: "/administrator/classrooms/edit",
              icon: FileEdit,
              group: "facilities"
            },
            {
              title: "Remove Classroom",
              url: "/administrator/classrooms/remove",
              icon: FileMinus,
              group: "facilities"
            },
            {
              title: "Schedules",
              url: "/administrator/classrooms/schedules",
              icon: Calendar,
              group: "facilities"
            },
          ],
        },
        // ...add Library item

        // System Group
        {
          title: "User Management",
          icon: Users2,
          group: "system",
          items: [
            {
              title: "Add User",
              url: "/administrator/users/add",
              icon: UserPlus,
              group: "system"
            },
            {
              title: "Manage Users",
              url: "/administrator/users/manage",
              icon: UserCog,
              group: "system"
            },
            {
              title: "Remove User",
              url: "/administrator/users/remove",
              icon: UserMinus,
              group: "system"
            },
          ],
        },
        {
          title: "System Logs",
          url: "/administrator/logs",
          icon: FileText,
          group: "system"
        },
        {
          title: "System Monitoring",
          url: "/administrator/monitoring",
          icon: MonitorCheck,
          group: "system"
        },
        {
          title: "Database Management",
          url: "/administrator/database",
          icon: Database,
          group: "system"
        },
      ];

    default:
      return roleBaseItems;
  }
};