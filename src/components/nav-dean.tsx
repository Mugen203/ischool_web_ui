// components/nav-dean.tsx
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
    Users,
    BookOpen,
    Home,
    UserCheck,
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

const deanNavItems: NavItem[] = [
     {
      title: "Dashboard",
      url: "/dean",
      icon: Home,
      roles: ["Dean"]
    },
    {
        title: "Lecturers",
        url: "/lecturers",
        icon: UserCog,
        roles: ["Dean"],
        items: [
            { title: "View Lecturers", url: "/lecturers", roles: ["Dean"] },
        ]
    },
    {
        title: "Students",
        url: "/students",
        icon: Users,
        roles: ["Dean"],
        items: [
            { title: "View Students", url: "/students", roles: ["Dean"] },
        ],
    },
     {
        title: "Grademasters",
        url: "/administration/grademasters",
        icon: UserCheck,
        roles: ["Dean"]
    },
    {
        title: "Courses",
        url: "/courses",
        icon: BookOpen,
        roles: ["Dean"],
        items: [
            {title: "View Courses", url: "/courses", roles: ["Dean"] },
        ]
    },
     {
          title: "Faculty Evaluation",
          url: "/faculty-evaluation/lecturer",
          icon: FileSignature,
          roles: ["Dean"],
    },
      {
            title: "Reports",
            url: "/reports",
            icon: FileText,
            roles: ["Dean"],
            items: [
                { title: "Results Slip", url: "/reports/results", roles: ["Dean"] },
            ],
        },
];

export function NavDean() {
    return (
        <SidebarGroup>
            <SidebarGroupLabel>Dean</SidebarGroupLabel>
            <SidebarMenu>
                {deanNavItems.map((item) => (
                    <Collapsible key={item.title} asChild defaultOpen={item.url === "/dean"}>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild tooltip={item.title}>
                                <a href={item.url}>
                                    {item.icon && <item.icon className="mr-2" />}
                                    <span>{item.title}</span>
                                </a>
                            </SidebarMenuButton>
                            {item.items && item.items.length > 0 && (  // Use optional chaining here
                                <>
                                    <CollapsibleTrigger asChild>
                                         <SidebarMenuAction className="data-[state=open]:rotate-90">
                                            <ChevronRight />
                                            <span className="sr-only">Toggle</span>
                                        </SidebarMenuAction>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <SidebarMenuSub>
                                            {item.items?.map((subItem) => ( // and here
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