// components/nav-lecturer.tsx
"use client"

import { ChevronRight, type LucideIcon } from "lucide-react"

import {
    SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuAction, SidebarMenuButton,
    SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import {
  UserCog, // Lecturers
  ClipboardList,
  Calendar,
  Home,
  FileText
} from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";

interface NavItem {
    title: string;
    url?: string;
    icon?: React.ComponentType<any>;
    items?: NavItem[];
    roles?: string[];  // Keep for consistency
}

const lecturerNavItems: NavItem[] = [
  {
      title: "Dashboard",
      url: "/lecturer",
      icon: Home,
      roles: ["Lecturer"],
  },
  {
      title: "My Profile",
      url: "/lecturers/me",
      icon: UserCog,
      roles: ["Lecturer"]
  },
  {
      title: "My Classes",
      url: "/lecturers/classes",
      icon: ClipboardList,
      roles: ["Lecturer"]
  },
  {
      title: "Attendance",
      url: "/lecturers/attendance",
      icon: Calendar,
      roles: ["Lecturer"]
  },
   {
            title: "Reports",
            url: "/reports",
            icon: FileText,
            roles: ["Lecturer"],
            items: [
                { title: "Results Slip", url: "/reports/results", roles: ["Lecturer"] },
            ],
        },
];

export function NavLecturer() {
    return (
        <SidebarGroup>
            <SidebarGroupLabel>Lecturer</SidebarGroupLabel>
            <SidebarMenu>
                {lecturerNavItems.map((item) => (
                    <Collapsible key={item.title} asChild defaultOpen={item.url === "/lecturer"}>
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