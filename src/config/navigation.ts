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
      url: `/${role}/settings`,  // Updated from /settings/${role}
      icon: Settings2,
      group: "main"
    }
  ];

  switch (role.toLowerCase()) {
    case "student":
      return [
        ...roleBaseItems,
        // Academic Group URLs updated
        {
          title: "Courses",
          icon: BookOpen,
          group: "academic",
          items: [
            {
              title: "Register for Courses",
              url: `/${role}/courses/register`,  // Updated
              icon: FilePlus,
              group: "academic"
            },
            {
              title: "Drop Courses",
              url: `/${role}/courses/drop`,  // Updated
              icon: FileMinus,
              group: "academic",
            },
          ],
        },
        {
          title: "Grades",
          url: `/${role}/grades`,  // Updated
          icon: Award,
          group: "academic",
        },
        {
          title: "Attendance",
          url: `/${role}/attendance`,  // Updated
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
              url: `/${role}/library/center`,  // Updated
              group: "resources",
            },
            {
              title: "OPAC",
              url: `/${role}/library/opac`,  // Updated
              icon: FileSearch,
              group: "resources",
            },
            {
              title: "Online Library",
              url: `/${role}/library/online`,  // Updated
              icon: Laptop,
              group: "resources",
            },
            {
              title: "Book Borrowing",
              url: `/${role}/library/borrow`,  // Updated
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
              url: `/${role}/activities/clubs`,  // Updated
              group: "resources",
            },
            {
              title: "Residential Tasks",
              url: `/${role}/residential/tasks`,  // Updated
              group: "resources",
            },
          ],
        },
        // Administrative Group
        {
          title: "Enrollment",
          url: `/${role}/enrollment`,  // Updated
          icon: ClipboardList,
          group: "administrative",
        },
        {
          title: "Financials",
          url: `/${role}/financials`,  // Updated
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
              url: `/${role}/reports/registration`,  // Updated
              group: "administrative",
            },
            {
              title: "Scholastic Report",
              url: `/${role}/reports/scholastic`,  // Updated
              group: "administrative",
            },
            {
              title: "My Lecturers",
              url: `/${role}/reports/lecturers`,  // Updated
              group: "administrative",
            },
            {
              title: "My Exemptions",
              url: `/${role}/reports/exemptions`,  // Updated
              group: "administrative",
            },
            {
              title: "Exam Permit",
              url: `/${role}/reports/exam-permit`,  // Updated
              group: "administrative",
            },
            { 
              title: "Results Slip", 
              url: `/${role}/reports/results`,  // Updated
              group: "administrative",
            },
            {
              title: "Courses to Repeat",
              url: `/${role}/reports/repeat-courses`,  // Updated
              group: "administrative",
            },
            {
              title: "Graduation Checklist",
              url: `/${role}/reports/graduation-checklist`,  // Updated
              group: "administrative",
            },
            {
              title: "Graduation Slip",
              url: `/${role}/reports/graduation-slip`,  // Updated
              group: "administrative",
            },
            {
              title: "National Service Application",
              url: `/${role}/reports/national-service`,  // Updated
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
              url: `/${role}/applications/hostel`,  // Updated
              group: "administrative",
            },
            {
              title: "Certificate Collection",
              url: `/${role}/applications/certificate`,  // Updated
              group: "administrative",
            },
            {
              title: "Matriculation Oath",
              url: `/${role}/applications/matriculation`,  // Updated
              group: "administrative",
            },
            {
              title: "Change of Program",
              url: `/${role}/applications/change-program`,  // Updated
              group: "administrative",
            },
            {
              title: "Graduation",
              url: `/${role}/applications/graduation`,  // Updated
              group: "administrative",
            },
            {
              title: "National Service",
              url: `/${role}/applications/national-service`,  // Updated
              group: "administrative",
            },
            {
              title: "Scholarship",
              url: `/${role}/applications/scholarship`,  // Updated
              group: "administrative",
            },
          ],
        },
      ];

    case "lecturer":
      return [
        ...roleBaseItems,
        {
          title: "My Classes",
          url: `/${role}/classes`,  // Updated
          icon: ClipboardList,
          group: "academic",
        },
        {
          title: "Course Materials",
          url: `/${role}/materials`,  // Updated
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
              url: `/${role}/assignments/create`,  // Updated
              icon: FileEdit,
              group: "academic",
            },
            {
              title: "View Assignments",
              url: `/${role}/assignments`,  // Updated
              icon: FileText,
              group: "academic",
            },
          ],
        },
        // Communication Group
        {
          title: "Messages",
          url: `/${role}/messages`,  // Updated
          icon: MessageSquare,
          group: "communication",
        },
        // Administrative Group
        {
          title: "Attendance",
          url: `/${role}/attendance`,  // Updated
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
              url: `/${role}/reports/results`,  // Updated
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
          url: `/${role}/students`,  // Updated
          icon: Users,
          group: "students",
          items: [
            { 
              title: "View Students", 
              url: `/${role}/students`,  // Updated
              group: "students",
            },
          ],
        },
        {
          title: "Courses",
          url: `/${role}/courses`,  // Updated
          icon: BookOpen,
          group: "academic",
          items: [
            { 
              title: "View Courses", 
              url: `/${role}/courses`,  // Updated
              group: "academic",
            },
          ],
        },
        {
          title: "Class Enrollment",
          url: `/${role}/enrollment`,  // Updated
          icon: Files,
          group: "administrative",
        },
        {
          title: "Attendance",
          url: `/${role}/attendance`,  // Updated
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
              url: `/${role}/reports/results`,  // Updated
              group: "administrative",
            },
            {
              title: "Student Grades",
              url: `/${role}/reports/grades`,  // Updated
              icon: Award,
              group: "administrative",
            },
          ],
        },
      ];

    case "hod":
      return [
        ...roleBaseItems,
        {
          title: "My Classes",
          url: `/${role}/classes`,  // Updated
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
              url: `/${role}/courses`,  // Updated
              group: "academic",
            },
            {
              title: "Assign Lecturers",
              url: `/${role}/courses/assign-lecturers`,  // Updated
              group: "academic",
            },
            {
              title: "Approve Course Materials",
              url: `/${role}/courses/materials/approve`,  // Updated
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
              url: `/${role}/lecturers`,  // Updated
              group: "faculty",
            },
            {
              title: "Assign Courses",
              url: `/${role}/lecturers/assign-courses`,  // Updated
              group: "faculty",
            },
            {
              title: "Faculty Evaluation",
              url: `/${role}/faculty/evaluation`,  // Updated
              icon: FileSignature,
              group: "faculty",
            },
          ],
        },
        {
          title: "Attendance",
          url: `/${role}/attendance`,  // Updated
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
              url: `/${role}/students`,  // Updated
              group: "students",
            },
            {
              title: "Academic Standing",
              url: `/${role}/students/academic-standing`,  // Updated
              group: "students",
            },
            {
              title: "Graduation Eligibility",
              url: `/${role}/students/graduation-eligibility`,  // Updated
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
              url: `/${role}/reports/results`,  // Updated
              group: "administrative",
            },
            {
              title: "Department Performance",
              url: `/${role}/reports/department-performance`,  // Updated
              group: "administrative",
            },
          ],
        },
        {
          title: "Department Approvals",
          url: `/${role}/approvals`,  // Updated
          icon: ClipboardCheck,
          group: "administrative",
        },
        {
          title: "Departmental Meetings",
          url: `/${role}/meetings`,  // Updated
          icon: ListChecks,
          group: "administrative",
        },
      ];

    case "dean":
      return [
        ...roleBaseItems,
        {
          title: "Lecturers",
          icon: Briefcase,
          group: "faculty",
          items: [
            { 
              title: "View Lecturers", 
              url: `/${role}/lecturers`,  // Updated
              group: "faculty",
            },
            {
              title: "Assign Courses",
              url: `/${role}/lecturers/assign-courses`,  // Updated
              group: "faculty",
            },
            {
              title: "Faculty Evaluation",
              url: `/${role}/faculty/evaluation`,  // Updated
              icon: FileSignature,
              group: "faculty",
            },
          ],
        },
        {
          title: "Attendance",
          url: `/${role}/attendance`,  // Updated
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
              url: `/${role}/students`,  // Updated
              group: "students",
            },
            {
              title: "Academic Standing",
              url: `/${role}/students/academic-standing`,  // Updated
              group: "students",
            },
            {
              title: "Graduation Eligibility",
              url: `/${role}/students/graduation-eligibility`,  // Updated
              icon: GraduationCap,
              group: "students",
            },
          ],
        },
        // Academic Group
        {
          title: "Grademasters",
          url: `/${role}/grademasters`,  // Updated
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
              url: `/${role}/courses`,  // Updated
              group: "academic",
            },
            {
              title: "Approve Course Materials",
              url: `/${role}/courses/materials/approve`,  // Updated
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
              url: `/${role}/reports/results`,  // Updated
              group: "administrative",
            },
            {
              title: "Faculty Performance",
              url: `/${role}/reports/faculty-performance`,  // Updated
              group: "administrative",
            },
          ],
        },
        {
          title: "Departmental Approvals",
          url: `/${role}/approvals`,  // Updated
          icon: ClipboardCheck,
          group: "administrative",
        },
        {
          title: "College Meetings",
          url: `/${role}/meetings`,  // Updated
          icon: ListChecks,
          group: "administrative",
        },
      ];

    case "admin":
      return [
        ...roleBaseItems,
        {
          title: "Registry",
          icon: Building,
          group: "main",
          items: [
            { 
              title: "View Registry", 
              url: `/${role}/registry`,  // Updated from /administrator to /admin
              icon: Building2,
              group: "main"
            },
            {
              title: "Edit Registry",
              url: `/${role}/registry/edit`,  // Updated from /administrator to /admin
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
              url: `/${role}/students`,  // Updated from /administrator to /admin
              icon: Users,
              group: "userManagement"
            },
            {
              title: "Add Student",
              url: `/${role}/students/add`,  // Updated from /administrator to /admin
              icon: UserPlus,
              group: "userManagement"
            },
            {
              title: "Edit Student",
              url: `/${role}/students/edit`,  // Updated from /administrator to /admin
              icon: FileEdit,
              group: "userManagement"
            },
            {
              title: "Remove Student",
              url: `/${role}/students/remove`,  // Updated from /administrator to /admin
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
              url: `/${role}/lecturers`,  // Updated from /administrator to /admin
              icon: UserCog,
              group: "userManagement"
            },
            {
              title: "Add Lecturer",
              url: `/${role}/lecturers/add`,  // Updated from /administrator to /admin
              icon: UserPlus,
              group: "userManagement"
            },
            {
              title: "Edit Lecturer",
              url: `/${role}/lecturers/edit`,  // Updated from /administrator to /admin
              icon: FileEdit,
              group: "userManagement"
            },
            {
              title: "Remove Lecturer",
              url: `/${role}/lecturers/remove`,  // Updated from /administrator to /admin
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
              url: `/${role}/courses`,  // Updated from /administrator to /admin
              icon: BookOpen,
              group: "academic"
            },
            {
              title: "Add Course",
              url: `/${role}/courses/add`,  // Updated from /administrator to /admin
              icon: BookCheck,
              group: "academic"
            },
            {
              title: "Edit Course",
              url: `/${role}/courses/edit`,  // Updated from /administrator to /admin
              icon: FileEdit,
              group: "academic"
            },
            {
              title: "Remove Course",
              url: `/${role}/courses/remove`,  // Updated from /administrator to /admin
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
              url: `/${role}/classrooms`,  // Updated from /administrator to /admin
              icon: Palette,
              group: "facilities"
            },
            {
              title: "Add Classroom",
              url: `/${role}/classrooms/add`,  // Updated from /administrator to /admin
              icon: FilePlus,
              group: "facilities"
            },
            {
              title: "Edit Classroom",
              url: `/${role}/classrooms/edit`,  // Updated from /administrator to /admin
              icon: FileEdit,
              group: "facilities"
            },
            {
              title: "Remove Classroom",
              url: `/${role}/classrooms/remove`,  // Updated from /administrator to /admin
              icon: FileMinus,
              group: "facilities"
            },
            {
              title: "Schedules",
              url: `/${role}/classrooms/schedules`,  // Updated from /administrator to /admin
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
              url: `/${role}/users/add`,  // Updated from /administrator to /admin
              icon: UserPlus,
              group: "system"
            },
            {
              title: "Manage Users",
              url: `/${role}/users/manage`,  // Updated from /administrator to /admin
              icon: UserCog,
              group: "system"
            },
            {
              title: "Remove User",
              url: `/${role}/users/remove`,  // Updated from /administrator to /admin
              icon: UserMinus,
              group: "system"
            },
          ],
        },
        {
          title: "System Logs",
          url: `/${role}/logs`,  // Updated from /administrator to /admin
          icon: FileText,
          group: "system"
        },
        {
          title: "System Monitoring",
          url: `/${role}/monitoring`,  // Updated from /administrator to /admin
          icon: MonitorCheck,
          group: "system"
        },
        {
          title: "Database Management",
          url: `/${role}/database`,  // Updated from /administrator to /admin
          icon: Database,
          group: "system"
        },
      ];

    default:
      return roleBaseItems;
  }
};