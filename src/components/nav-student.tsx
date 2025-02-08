// components/nav-student.tsx
"use client"

import { ChevronRight, Notebook, type LucideIcon } from "lucide-react"
import {
    Collapsible, CollapsibleContent, CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
    SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuAction, SidebarMenuButton,
    SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import {
    Users,
    User,
    Calendar,
    ClipboardList,
    Award,
    Wallet,
    Library,
    Activity,
    BookCheck,
    FilePlus,
    FileMinus,
    FileText,
    FileSearch,
    Laptop,
    Home,
    BadgeInfo
} from "lucide-react";

interface NavItem {
    title: string;
    url?: string;
    icon?: React.ComponentType<any>;
    items?: NavItem[];
    roles?: string[];  // Keep for consistency, even if unused here
}

const studentNavItems: NavItem[] = [
   {
            title: "Dashboard",
            url: "/student",
            icon: Home,
            roles: ["Student"],
        },
        {
            title: "My Profile",
            url: "/students/me",
            icon: User,
            roles: ["Student"]
        },
        {
            title: "Enrollment",
            url: "/students/enrollment",
            icon: ClipboardList,
            roles: ["Student"]
        },
        {
            title: "Grades",
            url: "/students/grades",
            icon: Award,
            roles: ["Student"]
        },
        {
            title: "Financial Summary",
            url: "/students/financials",
            icon: Wallet,
            roles: ["Student"]
        },
        {
            title: "Courses",
            icon: Notebook,
            roles: ["Student"],
            items: [
                { title: "Register for Courses", url: "/courses/register", icon: FilePlus, roles: ["Student"] },
                { title: "Drop Courses", url: "/courses/drop", icon: FileMinus, roles: ["Student"] },
            ]
        },
        {
          title: "Attendance",
          url: "/attendance/student",
          icon: Calendar,
          roles: ["Student"],
        },
        {
            title: "Student Life",
            icon: Activity,
            roles: ["Student"],
              items: [
                {title: "Clubs & Societies", url: "/student-life/clubs", roles: ["Student"]},
                {title: "Residential Tasks", url:"/student-life/residential", roles: ["Student"]}, //  Example
              ]
          },
        {
            title: "Library",
            icon: Library,
            roles: ["Student"],
            items: [
                {title: "Library Center", url: "/library/center", roles:["Student"]},
                {title: "OPAC", url: "/library/opac", icon: FileSearch, roles:["Student"]},
                { title: "Online Library", url: "/library/online", icon: Laptop, roles: ["Student"] },
                {title: "Book Borrowing", url: "/students/library/borrow", icon: BookCheck, roles: ["Student"]},

            ]
        },
        {
            title: "Reports",
            icon: FileText,
            roles: ["Student"],
            items: [
                { title: "Registration Slip", url: "/reports/registration", roles: ["Student"] },
                { title: "Scholastic Report", url: "/reports/scholastic", roles: ["Student"] },
                { title: "My Lecturers", url: "/reports/lecturers", roles: ["Student"] },
                { title: "My Exemptions", url: "/reports/exemptions", roles: ["Student"] },
                { title: "Exam Permit", url: "/reports/exam-permit", roles: ["Student"] },
                { title: "Results Slip", url: "/reports/results", roles: ["Student"] },
                { title: "Courses to Repeat", url: "/reports/repeat-courses", roles: ["Student"] },
                { title: "Graduation Checklist", url: "/reports/graduation-checklist", roles: ["Student"] },
                { title: "Graduation Slip", url: "/reports/graduation-slip", roles: ["Student"] },
                { title: "National Service Application", url: "/reports/national-service", roles: ["Student"] },
            ],
        },
          {
            title: "Applications",
            icon: FilePlus,
            roles: ["Student"],
            items: [
                { title: "Hostel", url: "/applications/hostel", roles: ["Student"] },
                { title: "Certificate Collection", url: "/applications/certificate", roles: ["Student"] },
                { title: "Matriculation Oath", url: "/applications/matriculation", roles: ["Student"] },
                { title: "Change of Program", url: "/applications/change-program", roles: ["Student"] },
                { title: "Graduation", url: "/applications/graduation", roles: ["Student"] },
                { title: "National Service", url: "/applications/national-service", roles: ["Student"] },
                { title: "Scholarship", url: "/applications/scholarship", roles: ["Student"] },
            ],
        },

];



export function NavStudent() {
    return (
        <SidebarGroup>
            <SidebarGroupLabel>Student</SidebarGroupLabel>
            <SidebarMenu>
                {studentNavItems.map((item) => (
                    <Collapsible key={item.title} asChild defaultOpen={item.url === "/student"}>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild tooltip={item.title}>
                                <a href={item.url}>
                                    {item.icon && <item.icon className="mr-2" />}
                                    <span>{item.title}</span>
                                </a>
                            </SidebarMenuButton>
                            {item.items && item.items.length > 0 && (
                                <>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuAction className="data-[state=open]:rotate-90">
                                            <ChevronRight />
                                            <span className="sr-only">Toggle</span>
                                        </SidebarMenuAction>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <SidebarMenuSub>
                                            {item.items?.map((subItem) => (
                                                <SidebarMenuSubItem key={subItem.title}>
                                                    <SidebarMenuSubButton asChild>
                                                        <a href={subItem.url}>
                                                            {subItem.icon && <subItem.icon className="mr-2" />}
                                                            <span>{subItem.title}</span>
                                                        </a>
                                                    </SidebarMenuSubButton>
                                                </SidebarMenuSubItem>
                                            ))}
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </>
                            )}
                        </SidebarMenuItem>
                    </Collapsible>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    );
}