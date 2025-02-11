"use client";

import { useCallback } from "react";
import { ChevronRight } from "lucide-react";
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
} from "@/components/ui/sidebar";
import {
  Home,
  UserCog,
  ClipboardList,
  Calendar,
  Users,
  BookOpen,
  FileSignature,
  FileText,
  Briefcase,
  GraduationCap,
  ListChecks,
  ClipboardCheck,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface NavItem {
  title: string;
  url?: string;
  icon?: React.ComponentType<any>;
  items?: NavItem[];
  roles?: string[];
}

// HOD navigation categorized by sections
const hodNavGroups: Record<string, NavItem[]> = {
  academic: [
    {
      title: "My Classes",
      url: "/lecturers/classes",
      icon: ClipboardList,
      roles: ["HOD"],
    },
    {
      title: "Courses",
      icon: BookOpen,
      roles: ["HOD"],
      items: [
        { title: "View Courses", url: "/courses", roles: ["HOD"] },
        {
          title: "Assign Lecturers",
          url: "/courses/assign-lecturers",
          roles: ["HOD"],
        },
        {
          title: "Approve Course Materials",
          url: "/courses/materials/approve",
          roles: ["HOD"],
        },
      ],
    },
  ],
  faculty: [
    {
      title: "Lecturers",
      icon: Briefcase,
      roles: ["HOD"],
      items: [
        { title: "View Lecturers", url: "/lecturers", roles: ["HOD"] },
        {
          title: "Assign Courses",
          url: "/lecturers/assign-courses",
          roles: ["HOD"],
        },
        {
          title: "Faculty Evaluation",
          url: "/faculty-evaluation/lecturer",
          icon: FileSignature,
          roles: ["HOD"],
        },
      ],
    },
    {
      title: "Attendance",
      url: "/attendance/sessions",
      icon: Calendar,
      roles: ["HOD"],
    },
  ],
  students: [
    {
      title: "Students",
      icon: Users,
      roles: ["HOD"],
      items: [
        { title: "View Students", url: "/students", roles: ["HOD"] },
        {
          title: "Academic Standing",
          url: "/students/academic-standing",
          roles: ["HOD"],
        },
        {
          title: "Graduation Eligibility",
          url: "/students/graduation-eligibility",
          icon: GraduationCap,
          roles: ["HOD"],
        },
      ],
    },
  ],
  administrative: [
    {
      title: "Reports",
      icon: FileText,
      roles: ["HOD"],
      items: [
        { title: "Results Slip", url: "/reports/results", roles: ["HOD"] },
        {
          title: "Department Performance",
          url: "/reports/department-performance",
          roles: ["HOD"],
        },
      ],
    },
    {
      title: "Department Approvals",
      url: "/approvals",
      icon: ClipboardCheck,
      roles: ["HOD"],
    },
    {
      title: "Departmental Meetings",
      url: "/meetings",
      icon: ListChecks,
      roles: ["HOD"],
    },
  ],
};

export function NavHOD() {
  const renderMenuItem = useCallback((item: NavItem) => {
    const hasSubItems = item.items && item.items.length > 0;

    return (
      <Collapsible key={item.title} asChild defaultOpen={item.url === "/hod"}>
        <SidebarMenuItem>
          <SidebarMenuButton asChild tooltip={item.title}>
            <a href={item.url}>
              {item.icon && <item.icon className="mr-2 h-4 w-4" />}
              <span>{item.title}</span>
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
                      <SidebarMenuSubButton asChild>
                        <a href={subItem.url}>
                          {subItem.icon && (
                            <subItem.icon className="mr-2 h-4 w-4" />
                          )}
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
    );
  }, []);

  return (
    <>
      <SidebarGroup>
        <SidebarGroupLabel>Academic</SidebarGroupLabel>
        <SidebarMenu>{hodNavGroups.academic.map(renderMenuItem)}</SidebarMenu>
      </SidebarGroup>

      <SidebarGroup>
        <SidebarGroupLabel>Faculty</SidebarGroupLabel>
        <SidebarMenu>{hodNavGroups.faculty.map(renderMenuItem)}</SidebarMenu>
      </SidebarGroup>

      <SidebarGroup>
        <SidebarGroupLabel>Students</SidebarGroupLabel>
        <SidebarMenu>{hodNavGroups.students.map(renderMenuItem)}</SidebarMenu>
      </SidebarGroup>

      <SidebarGroup>
        <SidebarGroupLabel>Administrative</SidebarGroupLabel>
        <SidebarMenu>
          {hodNavGroups.administrative.map(renderMenuItem)}
        </SidebarMenu>
      </SidebarGroup>
    </>
  );
}
