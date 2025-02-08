// app-sidebar.tsx
"use client"

import * as React from "react"
import { Command, LifeBuoy, Settings2, Home } from "lucide-react"

import { NavMain } from "@/components/nav-main" // Keep NavMain for common items (if any)
import { NavAdmin } from "@/components/nav-admin"
import { NavStudent } from "@/components/nav-student" // NEW
import { NavLecturer } from "@/components/nav-lecturer" // NEW
import { NavHOD } from "@/components/nav-hod" // NEW
import { NavDean } from "@/components/nav-dean" // NEW
import { NavGrademaster } from "@/components/nav-grademaster" // NEW
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

// No need for the large data object here anymore.

export function AppSidebar({ user, ...props }: React.ComponentProps<typeof Sidebar> & { user: { name: string, email: string, role: string, avatar?:string } }) {
    const safeUser = {
        name: user?.name || "User",
        email: user?.email || "",
        role: user?.role || "Guest",  // Default to Guest
        avatar: user?.avatar || ""
    }
    const commonNavItems = [
        {
            title: "Dashboard",
            url: "/",
            icon: Home,

        },
         {
            title: "Settings",
            url: "/settings",
            icon: Settings2,
        },
    ]

    return (
        <Sidebar variant="inset" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <a href="/">
                                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                    <Command className="size-4" />
                                </div>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-semibold">University</span>
                                    <span className="truncate text-xs">Dashboard</span>
                                </div>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                {/* Conditionally render the correct navigation component */}
                <NavMain items={commonNavItems} />
                {safeUser.role === "Administrator" && <NavAdmin />}
                {safeUser.role === "Student" && <NavStudent />}
                {safeUser.role === "Lecturer" && <NavLecturer />}
                {safeUser.role === "HOD" && <NavHOD />}
                {safeUser.role === "Dean" && <NavDean />}
                {safeUser.role === "Grademaster" && <NavGrademaster />}
                {/* Add other roles as needed */}

               <NavSecondary items={[{title: "Support", url: "#", icon: LifeBuoy}]} className="mt-auto" />

            </SidebarContent>
            <SidebarFooter>
                <NavUser user={safeUser} />
            </SidebarFooter>
        </Sidebar>
    )
}