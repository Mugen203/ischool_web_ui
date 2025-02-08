// components/nav-grademaster.tsx
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
    Users,
    BookOpen,
    Home,
    FileText,
    Award,
    Calendar,
    Files
} from "lucide-react";

interface NavItem {
    title: string;
    url?: string;
    icon?: React.ComponentType<any>;
    items?: NavItem[];
    roles?: string[];  // Keep for consistency
}

const grademasterNavItems: NavItem[] = [
     {
      title: "Dashboard",
      url: "/grademaster",
      icon: Home,
      roles: ["Grademaster"]
    },
    {
        title: "Students",
        url: "/students",
        icon: Users,
        roles: ["Grademaster"],
        items: [
            { title: "View Students", url: "/students", roles: ["Grademaster"] },
        ],
    },
    {
        title: "Courses",
        url: "/courses",
        icon: BookOpen,
        roles: ["Grademaster"],
        items: [
            {title: "View Courses", url: "/courses", roles: ["Grademaster"] },
        ]
    },
    {
            title: "Class Enrollment",
            url: "/administration/class-enrollment",
            icon: Files,
            roles: ["Grademaster"]
    },
     {
        title: "Attendance",
        url: "/attendance/sessions",
        icon: Calendar,
        roles: ["Grademaster"],
    },
    {
            title: "Reports",
            url: "/reports",
            icon: FileText,
            roles: ["Grademaster"],
            items: [
                { title: "Results Slip", url: "/reports/results", roles: ["Grademaster"] },
                 { title: "Student Grades", url: "/students/grades", icon: Award, roles: ["Grademaster"] },
            ],
     },


];

export function NavGrademaster() {
    return (
        <SidebarGroup>
            <SidebarGroupLabel>Grademaster</SidebarGroupLabel>
            <SidebarMenu>
                {grademasterNavItems.map((item) => (
                    <Collapsible key={item.title} asChild defaultOpen={item.url === "/grademaster"}>
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