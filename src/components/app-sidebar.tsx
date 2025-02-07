// app-sidebar.tsx
"use client"

import * as React from "react"
import {
    BookOpen,
    Command,
    Settings2,
    Users,
    User,
    Calendar,
    ClipboardList,
    Home,
    Palette,
    Wallet,
    UserCog,
    Award,
    Building,
    FileSignature,
    GraduationCap,
    Library,
    Activity,
    UserCheck,
    UserCircle2,
    Files,
    LifeBuoy,
    BadgeInfo,
    BookCheck,
    FilePlus, // For adding courses
    FileMinus, // For dropping courses
    FileText, // For reports
    FileSearch,  //For OPAC
    Laptop, //Online library
    HousePlus,
    FileStack,
    FileQuestion,
    FileWarning,
    FileX,
    School
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavStudentLife } from "@/components/nav-student-life"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

interface NavItem {
    title: string;
    url?: string;
    icon?: React.ComponentType<any>;
    items?: NavItem[];
    roles?: string[]; // Roles that can see this item
}

const data = {
    navMain: (userRole: string): NavItem[] => [
        {
            title: "Dashboard",
            url: "/",
            icon: Home,
            roles: ["Student", "Lecturer", "HOD", "Dean", "Grademaster", "Administrator"],
        },
        // Registry
        {
            title: "Registry",
            url: "/registry",
            icon: Building,
            roles: ["Administrator"],
        },
        // Student
        {
            title: "Students",
            url: "/students",
            icon: Users,
            roles: ["Administrator", "Lecturer", "HOD", "Dean", "Grademaster"],
            items: [
                { title: "View Students", url: "/students", roles: ["Administrator", "Lecturer", "HOD", "Dean", "Grademaster"] },
                { title: "My Profile", url: "/students/me", icon: User, roles: ["Student"] },
                { title: "Enrollment", url: "/students/enrollment", icon: ClipboardList, roles: ["Student"] },
                { title: "Grades", url: "/students/grades", icon: Award, roles: ["Student"] },
                { title: "Financial Summary", url: "/students/financials", icon: Wallet, roles: ["Student"]},
            ],
        },

        // Lecturer
        {
            title: "Lecturers",
            url: "/lecturers",
            icon: UserCog,
            roles: ["Administrator", "HOD", "Dean"],
            items: [
                { title: "View Lecturers", url: "/lecturers", roles: ["Administrator", "HOD", "Dean"] },
                { title: "My Profile", url: "/lecturers/me", icon: UserCog, roles: ["Lecturer"] },
                { title: "My Classes", url: "/lecturers/classes", icon: ClipboardList, roles: ["Lecturer"] },
                { title: "Attendance", url: "/lecturers/attendance", icon: Calendar, roles: ["Lecturer"]},
            ]
        },

        // Classroom
        {
            title: "Classrooms",
            url: "/classrooms",
            icon: Palette,
            roles: ["Administrator", "Lecturer", "HOD", "Dean", "Student"],
            items: [
                {title: "View Classrooms", url:"/classrooms", roles: ["Administrator", "Lecturer", "HOD", "Dean", "Student"]},
                {title: "Schedules", url: "/classrooms/schedules", roles: ["Administrator", "Lecturer", "HOD", "Dean"]},
            ]
        },
        // Course
        {
            title: "Courses",
            url: "/courses",
            icon: BookOpen,
            roles: ["Administrator", "Lecturer", "HOD", "Dean", "Student", 'Grademaster'],
            items: [
                {title: "View Courses", url: "/courses", roles: ["Administrator", "Lecturer", "HOD", "Dean", 'Grademaster'] },
                { title: "Register for Courses", url: "/courses/register", icon: FilePlus, roles: ["Student"] },
                { title: "Drop Courses", url: "/courses/drop", icon: FileMinus, roles: ["Student"] },
            ]
        },

        // Attendance (combined with class session)
        {
          title: "Attendance",
          url: "/attendance",
          icon: Calendar,
          roles: ["Lecturer", "Student", "Administrator", "HOD", "Grademaster"],
            items: [
                {title: "Class Sessions", url: "/attendance/sessions", roles: ["Lecturer", "Administrator", "HOD", 'Grademaster']},
                {title: "My Attendance", url: "/attendance/student", roles: ["Student"]},
                {title: "Class Clash Requests", url: "/attendance/clash-requests", roles:["Student"]}
            ]
        },

        // Student Life (Now for Clubs and Residential Tasks)
        {
          title: "Student Life",
          url: "/student-life",
          icon: Activity,
          roles: ["Administrator", "Student"],
            items: [
              {title: "Clubs & Societies", url: "/student-life/clubs", roles: ["Administrator", "Student"]},
              {title: "Residential Tasks", url:"/student-life/residential", roles: ["Student"]}, //  Example
            ]
        },
          // Library
          {
            title: "Library",
            url: "/library",
            icon: Library,
            roles: ["Administrator", "Student", "Lecturer"],
            items: [
                {title: "Library Center", url: "/library/center", roles:["Administrator", "Student", "Lecturer"]},
                {title: "OPAC", url: "/library/opac", icon: FileSearch, roles:["Student", "Lecturer"]},
                { title: "Online Library", url: "/library/online", icon: Laptop, roles: ["Student", 'Lecturer'] },
                {title: "Book Borrowing", url: "/students/library/borrow", icon: BookCheck, roles: ["Student"]},

            ]
        },
        // Reports (Student-focused)
        {
            title: "Reports",
            url: "/reports",
            icon: FileText,
            roles: ["Student", "Administrator", 'Grademaster', "Lecturer", "HOD", "Dean"],
            items: [
                { title: "Registration Slip", url: "/reports/registration", roles: ["Student"] },
                { title: "Scholastic Report", url: "/reports/scholastic", roles: ["Student"] },
                { title: "My Lecturers", url: "/reports/lecturers", roles: ["Student"] },
                { title: "My Exemptions", url: "/reports/exemptions", roles: ["Student"] },
                { title: "Exam Permit", url: "/reports/exam-permit", roles: ["Student"] },
                { title: "Results Slip", url: "/reports/results", roles: ["Student", 'Grademaster'] },
                { title: "Courses to Repeat", url: "/reports/repeat-courses", roles: ["Student"] },
                { title: "Graduation Checklist", url: "/reports/graduation-checklist", roles: ["Student"] },
                { title: "Graduation Slip", url: "/reports/graduation-slip", roles: ["Student"] },
                { title: "National Service Application", url: "/reports/national-service", roles: ["Student"] },
                {title: "View All Reports", url: "/reports", roles: ["Administrator", 'Grademaster', "Lecturer", "HOD", "Dean"]}
            ],
        },

        // Applications (Student-focused)
        {
            title: "Applications",
            url: "/applications",
            icon: FileStack,
            roles: ["Student", "Administrator"],
            items: [
                { title: "Hostel", url: "/applications/hostel", roles: ["Student"] },
                { title: "Certificate Collection", url: "/applications/certificate", roles: ["Student"] },
                { title: "Matriculation Oath", url: "/applications/matriculation", roles: ["Student"] },
                { title: "Change of Program", url: "/applications/change-program", roles: ["Student"] },
                { title: "Graduation", url: "/applications/graduation", roles: ["Student"] },
                { title: "National Service", url: "/applications/national-service", roles: ["Student"] },
                { title: "Scholarship", url: "/applications/scholarship", roles: ["Student"] },
                {title: "View Applications", url: "/applications", roles: ["Administrator"]}
            ],
        },

      //Alumni
        {
          title: "Alumni",
          url: "/alumni",
          icon: GraduationCap,
          roles: ["Administrator"]
        },

      //Evaluation
        {
          title: "Faculty Evaluation",
          url: "/faculty-evaluation",
          icon: FileSignature,
          roles: ["Administrator", "HOD", "Dean", "Student"],
            items: [
                {title: "Lecturer Evaluations", url: "/faculty-evaluation/lecturer", roles: ["Administrator", "HOD", "Dean", 'Student']}
            ]
        },
        {
            title: "Academic Administration",
            roles: ["Administrator", "Dean", "HOD", "Grademaster"],
            items: [
                {title: "Grademasters", url: "/administration/grademasters", icon: UserCheck, roles: ["Administrator", "Dean"]},
                {title: "Administrators", url: "/administration/administrators", icon: UserCircle2, roles: ["Administrator"]},
                {title: "Class Enrollment", url: "/administration/class-enrollment", icon: Files, roles: ["Administrator", "HOD", "Dean", "Grademaster"]}
            ]
        },

        // Settings (always visible)
        {
            title: "Settings",
            url: "/settings",
            icon: Settings2,
            roles: ["Student", "Lecturer", "HOD", "Dean", "Grademaster", "Administrator"], // All roles
        },

    ],
    navStudentLife: [ // For nav-student-life.tsx -  Clubs/Societies/Residential
        {
            name: "Clubs",
            url: "/student-life/clubs",
            icon: Users,
        },
        {
            name: "Societies",
            url: "/student-life/societies",
            icon: BadgeInfo,
        },
        {
          name: "Residential",
          url: "/student-life/residential",
          icon: Home
        }
    ],
    navSecondary: [  //Support
        {
            title: "Support",
            url: "#",
            icon: LifeBuoy,
        },
    ],
};

export function AppSidebar({ user, ...props }: React.ComponentProps<typeof Sidebar> & { user: { name: string, email: string, role: string, avatar?:string } }) {
    const safeUser = {
        name: user?.name || "User",
        email: user?.email || "",
        role: user?.role || "Guest",  // Default to Guest
        avatar: user?.avatar || ""
    }
    const filteredNavMain = data.navMain(safeUser.role).filter(item => !item.roles || item.roles.includes(safeUser.role));

    return (
        <Sidebar variant="inset" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <a href="/">
                                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                    <School className="size-4" />
                                </div>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-semibold">iSchool</span>
                                    <span className="truncate text-xs">Dashboard</span>
                                </div>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={filteredNavMain} />
                {safeUser.role === "Student" && <NavStudentLife projects={data.navStudentLife} />}
                <NavSecondary items={data.navSecondary} className="mt-auto" />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={safeUser} />
            </SidebarFooter>
        </Sidebar>
    )
}