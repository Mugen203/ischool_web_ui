// components/nav-hod.tsx
"use client"

import { ChevronRight, type LucideIcon } from "lucide-react"
import {
    Collapsible, CollapsibleContent, CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
    SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuAction, SidebarMenuButton,
    SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import {
  UserCog,
  ClipboardList,
  Calendar,
  Users,
  BookOpen,
  Home,
  FileSignature,
  FileText
} from "lucide-react";

interface NavItem {
    title: string;
    url?: string;
    icon?: React.ComponentType<any>;
    items?: NavItem[];
    roles?: string[];  // Keep for consistency
}

const hodNavItems: NavItem[] = [
    {
      title: "Dashboard",
      url: "/hod",
      icon: Home,
      roles: ["HOD"]
    },
    {
        title: "Lecturers",
        url: "/lecturers",
        icon: UserCog,
        roles: ["HOD"],
        items: [
            { title: "View Lecturers", url: "/lecturers", roles: ["HOD"] },
        ]
    },
    {
        title: "My Classes",  //  HODs might teach
        url: "/lecturers/classes",
        icon: ClipboardList,
        roles: ["HOD"]
    },
    {
        title: "Attendance",
        url: "/attendance/sessions",
        icon: Calendar,
        roles: ["HOD"]
    },
     {
        title: "Students",
        url: "/students",
        icon: Users,
        roles: ["HOD"],
        items: [
            { title: "View Students", url: "/students", roles: ["HOD"] },
        ],
    },
    {
        title: "Courses",
        url: "/courses",
        icon: BookOpen,
        roles: ["HOD"],
        items: [
            {title: "View Courses", url: "/courses", roles: ["HOD"] },
        ]
    },
    {
          title: "Faculty Evaluation",
          url: "/faculty-evaluation/lecturer",
          icon: FileSignature,
          roles: ["HOD"],
    },
     {
            title: "Reports",
            url: "/reports",
            icon: FileText,
            roles: ["HOD"],
            items: [
                { title: "Results Slip", url: "/reports/results", roles: ["HOD"] },
            ],
        },

];

export function NavHOD() {
    return (
        <SidebarGroup>
            <SidebarGroupLabel>Head of Department</SidebarGroupLabel>
            <SidebarMenu>
                {hodNavItems.map((item) => (
                    <Collapsible key={item.title} asChild defaultOpen={item.url === "/hod"}>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild tooltip={item.title}>
                                <a href={item.url}>
                                    {item.icon && <item.icon className="mr-2"/>}
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
                                                            {subItem.icon && <subItem.icon className="mr-2"/>}
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