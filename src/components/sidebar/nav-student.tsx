// components/nav-student.tsx
"use client";
import { useCallback } from "react";
import { ChevronRight } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Home,
  User,
  ClipboardList,
  Award,
  Wallet,
  Notebook,
  Calendar,
  Activity,
  Library,
  FileText,
  FilePlus,
  FileMinus,
  FileSearch,
  Laptop,
  BookCheck,
} from "lucide-react";
import type { NavItem } from "@/types/navigation";

// Organize student navigation items by category
const studentNavGroups: Record<string, NavItem[]> = {
  academic: [
    {
      title: "Courses",
      icon: Notebook,
      roles: ["Student"],
      items: [
        {
          title: "Register for Courses",
          url: "/student/courses/register",
          icon: FilePlus,
          roles: ["Student"],
        },
        {
          title: "Drop Courses",
          url: "/student/courses/drop",
          icon: FileMinus,
          roles: ["Student"],
        },
      ],
    },
    {
      title: "Grades",
      url: "/student/grades",
      icon: Award,
      roles: ["Student"],
    },
    {
      title: "Attendance",
      url: "/student/attendance",
      icon: Calendar,
      roles: ["Student"],
    },
  ],
  resources: [
    {
      title: "Library",
      icon: Library,
      roles: ["Student"],
      items: [
        { title: "Library Center", url: "/library/center", roles: ["Student"] },
        {
          title: "OPAC",
          url: "/library/opac",
          icon: FileSearch,
          roles: ["Student"],
        },
        {
          title: "Online Library",
          url: "/library/online",
          icon: Laptop,
          roles: ["Student"],
        },
        {
          title: "Book Borrowing",
          url: "/students/library/borrow",
          icon: BookCheck,
          roles: ["Student"],
        },
      ],
    },
    {
      title: "Student Life",
      icon: Activity,
      roles: ["Student"],
      items: [
        {
          title: "Clubs & Societies",
          url: "/student-life/clubs",
          roles: ["Student"],
        },
        {
          title: "Residential Tasks",
          url: "/student-life/residential",
          roles: ["Student"],
        },
      ],
    },
  ],
  administrative: [
    {
      title: "Enrollment",
      url: "/students/enrollment",
      icon: ClipboardList,
      roles: ["Student"],
    },
    {
      title: "Financial Summary",
      url: "/students/financials",
      icon: Wallet,
      roles: ["Student"],
    },
    {
      title: "Reports",
      icon: FileText,
      roles: ["Student"],
      items: [
        {
          title: "Registration Slip",
          url: "/reports/registration",
          roles: ["Student"],
        },
        {
          title: "Scholastic Report",
          url: "/reports/scholastic",
          roles: ["Student"],
        },
        {
          title: "My Lecturers",
          url: "/reports/lecturers",
          roles: ["Student"],
        },
        {
          title: "My Exemptions",
          url: "/reports/exemptions",
          roles: ["Student"],
        },
        {
          title: "Exam Permit",
          url: "/reports/exam-permit",
          roles: ["Student"],
        },
        { title: "Results Slip", url: "/reports/results", roles: ["Student"] },
        {
          title: "Courses to Repeat",
          url: "/reports/repeat-courses",
          roles: ["Student"],
        },
        {
          title: "Graduation Checklist",
          url: "/reports/graduation-checklist",
          roles: ["Student"],
        },
        {
          title: "Graduation Slip",
          url: "/reports/graduation-slip",
          roles: ["Student"],
        },
        {
          title: "National Service Application",
          url: "/reports/national-service",
          roles: ["Student"],
        },
      ],
    },
    {
      title: "Applications",
      icon: FilePlus,
      roles: ["Student"],
      items: [
        { title: "Hostel", url: "/applications/hostel", roles: ["Student"] },
        {
          title: "Certificate Collection",
          url: "/applications/certificate",
          roles: ["Student"],
        },
        {
          title: "Matriculation Oath",
          url: "/applications/matriculation",
          roles: ["Student"],
        },
        {
          title: "Change of Program",
          url: "/applications/change-program",
          roles: ["Student"],
        },
        {
          title: "Graduation",
          url: "/applications/graduation",
          roles: ["Student"],
        },
        {
          title: "National Service",
          url: "/applications/national-service",
          roles: ["Student"],
        },
        {
          title: "Scholarship",
          url: "/applications/scholarship",
          roles: ["Student"],
        },
      ],
    },
  ],
};

export function NavStudent() {
  const { state } = useSidebar();

  const renderMenuItem = useCallback(
    (item: NavItem) => {
      const hasSubItems = item.items && item.items.length > 0;

      return (
        <Collapsible key={item.title} asChild>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              tooltip={state ? item.title : undefined}
              className="w-full"
            >
              <a href={item.url} className="flex w-full items-center">
                {item.icon && <item.icon className="mr-2 h-4 w-4 shrink-0" />}
                {state && <span className="flex-1 truncate">{item.title}</span>}
              </a>
            </SidebarMenuButton>

            {hasSubItems && (
              <>
                <CollapsibleTrigger asChild>
                  <SidebarMenuAction className="transition-transform duration-200 data-[state=open]:rotate-90">
                    <ChevronRight className="h-4 w-4" />
                    <span className="sr-only">Toggle</span>
                  </SidebarMenuAction>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items?.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton asChild className="w-full">
                          <a
                            href={subItem.url}
                            className="flex w-full items-center"
                          >
                            {subItem.icon && (
                              <subItem.icon className="mr-2 h-4 w-4 shrink-0" />
                            )}
                            <span className="flex-1 truncate">
                              {subItem.title}
                            </span>
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
      );
    },
    [state]
  );

  return (
    <>
      <SidebarGroup>
        <SidebarGroupLabel>Academic</SidebarGroupLabel>
        <SidebarMenu>
          {studentNavGroups.academic.map(renderMenuItem)}
        </SidebarMenu>
      </SidebarGroup>

      <SidebarGroup>
        <SidebarGroupLabel>Resources</SidebarGroupLabel>
        <SidebarMenu>
          {studentNavGroups.resources.map(renderMenuItem)}
        </SidebarMenu>
      </SidebarGroup>

      <SidebarGroup>
        <SidebarGroupLabel>Administrative</SidebarGroupLabel>
        <SidebarMenu>
          {studentNavGroups.administrative.map(renderMenuItem)}
        </SidebarMenu>
      </SidebarGroup>
    </>
  );
}
