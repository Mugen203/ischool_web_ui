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
  Users,
  BookOpen,
  UserCheck,
  FileSignature,
  FileText,
  ClipboardList,
  Briefcase,
  Calendar,
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

// Dean's navigation categorized by sections
const deanNavGroups: Record<string, NavItem[]> = {
  faculty: [
    {
      title: "Lecturers",
      icon: Briefcase,
      roles: ["Dean"],
      items: [
        { title: "View Lecturers", url: "/lecturers", roles: ["Dean"] },
        {
          title: "Assign Courses",
          url: "/lecturers/assign-courses",
          roles: ["Dean"],
        },
        {
          title: "Faculty Evaluation",
          url: "/faculty-evaluation/lecturer",
          icon: FileSignature,
          roles: ["Dean"],
        },
      ],
    },
    {
      title: "Attendance",
      url: "/attendance/sessions",
      icon: Calendar,
      roles: ["Dean"],
    },
  ],
  students: [
    {
      title: "Students",
      icon: Users,
      roles: ["Dean"],
      items: [
        { title: "View Students", url: "/students", roles: ["Dean"] },
        {
          title: "Academic Standing",
          url: "/students/academic-standing",
          roles: ["Dean"],
        },
        {
          title: "Graduation Eligibility",
          url: "/students/graduation-eligibility",
          icon: GraduationCap,
          roles: ["Dean"],
        },
      ],
    },
  ],
  academic: [
    {
      title: "Grademasters",
      url: "/administration/grademasters",
      icon: UserCheck,
      roles: ["Dean"],
    },
    {
      title: "Courses",
      icon: BookOpen,
      roles: ["Dean"],
      items: [
        { title: "View Courses", url: "/courses", roles: ["Dean"] },
        {
          title: "Approve Course Materials",
          url: "/courses/materials/approve",
          roles: ["Dean"],
        },
      ],
    },
  ],
  administrative: [
    {
      title: "Reports",
      icon: FileText,
      roles: ["Dean"],
      items: [
        { title: "Results Slip", url: "/reports/results", roles: ["Dean"] },
        {
          title: "Faculty Performance",
          url: "/reports/faculty-performance",
          roles: ["Dean"],
        },
      ],
    },
    {
      title: "Departmental Approvals",
      url: "/approvals",
      icon: ClipboardCheck,
      roles: ["Dean"],
    },
    {
      title: "College Meetings",
      url: "/meetings",
      icon: ListChecks,
      roles: ["Dean"],
    },
  ],
};

export function NavDean() {
  const renderMenuItem = useCallback((item: NavItem) => {
    const hasSubItems = item.items && item.items.length > 0;

    return (
      <Collapsible key={item.title} asChild defaultOpen={item.url === "/dean"}>
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
        <SidebarGroupLabel>Faculty</SidebarGroupLabel>
        <SidebarMenu>{deanNavGroups.faculty.map(renderMenuItem)}</SidebarMenu>
      </SidebarGroup>

      <SidebarGroup>
        <SidebarGroupLabel>Students</SidebarGroupLabel>
        <SidebarMenu>{deanNavGroups.students.map(renderMenuItem)}</SidebarMenu>
      </SidebarGroup>

      <SidebarGroup>
        <SidebarGroupLabel>Academic</SidebarGroupLabel>
        <SidebarMenu>{deanNavGroups.academic.map(renderMenuItem)}</SidebarMenu>
      </SidebarGroup>

      <SidebarGroup>
        <SidebarGroupLabel>Administrative</SidebarGroupLabel>
        <SidebarMenu>
          {deanNavGroups.administrative.map(renderMenuItem)}
        </SidebarMenu>
      </SidebarGroup>
    </>
  );
}
