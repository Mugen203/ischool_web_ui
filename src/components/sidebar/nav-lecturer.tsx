"use client";

import { useCallback } from "react";
import { BookOpen, ChevronRight, FileEdit, MessageSquare } from "lucide-react";
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
import { UserCog, ClipboardList, Calendar, Home, FileText } from "lucide-react";
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

// Lecturer navigation grouped by category
const lecturerNavGroups: Record<string, NavItem[]> = {
  academic: [
    {
      title: "My Classes",
      url: "/lecturers/classes",
      icon: ClipboardList,
      roles: ["Lecturer"],
    },
    {
      title: "Course Materials",
      url: "/lecturers/materials",
      icon: BookOpen,
      roles: ["Lecturer"],
    },
    {
      title: "Assignments",
      icon: FileEdit,
      roles: ["Lecturer"],
      items: [
        {
          title: "Create Assignment",
          url: "/lecturers/assignments/create",
          icon: FileEdit,
          roles: ["Lecturer"],
        },
        {
          title: "View Assignments",
          url: "/lecturers/assignments",
          icon: FileText,
          roles: ["Lecturer"],
        },
      ],
    },
  ],
  communication: [
    {
      title: "Messages",
      url: "/lecturers/messages",
      icon: MessageSquare,
      roles: ["Lecturer"],
    },
  ],
  administrative: [
    {
      title: "Attendance",
      url: "/lecturers/attendance",
      icon: Calendar,
      roles: ["Lecturer"],
    },
    {
      title: "Reports",
      icon: FileText,
      roles: ["Lecturer"],
      items: [
        { title: "Results Slip", url: "/reports/results", roles: ["Lecturer"] },
      ],
    },
  ],
};

export function NavLecturer() {
  const { state } = useSidebar();

  const renderMenuItem = useCallback(
    (item: NavItem) => {
      const hasSubItems = item.items && item.items.length > 0;

      return (
        <Collapsible
          key={item.title}
          asChild
          defaultOpen={item.url === "/lecturer"}
        >
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip={state ? item.title : undefined}>
              <a href={item.url}>
                {item.icon && <item.icon className="mr-2 h-4 w-4" />}
                {state && <span>{item.title}</span>}
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
    },
    [state]
  );

  return (
    <>
      <SidebarGroup>
        <SidebarGroupLabel>Academic</SidebarGroupLabel>
        <SidebarMenu>
          {lecturerNavGroups.academic.map(renderMenuItem)}
        </SidebarMenu>
      </SidebarGroup>

      <SidebarGroup>
        <SidebarGroupLabel>Communication</SidebarGroupLabel>
        <SidebarMenu>
          {lecturerNavGroups.communication.map(renderMenuItem)}
        </SidebarMenu>
      </SidebarGroup>

      <SidebarGroup>
        <SidebarGroupLabel>Administrative</SidebarGroupLabel>
        <SidebarMenu>
          {lecturerNavGroups.administrative.map(renderMenuItem)}
        </SidebarMenu>
      </SidebarGroup>
    </>
  );
}
