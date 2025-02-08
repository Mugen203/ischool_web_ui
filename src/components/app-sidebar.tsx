// components/app-sidebar.tsx
"use client"
import * as React from "react"
import { Command, LifeBuoy, Settings2, Home, School2 } from "lucide-react"
import { NavMain } from "@/components/nav-main"
import { NavAdmin } from "@/components/nav-admin"
import { NavStudent } from "@/components/nav-student"
import { NavLecturer } from "@/components/nav-lecturer"
import { NavHOD } from "@/components/nav-hod"
import { NavDean } from "@/components/nav-dean"
import { NavGrademaster } from "@/components/nav-grademaster"
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
    SidebarProvider,
} from "@/components/ui/sidebar"
import type { User } from "@/types/navigation"

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
    user: User
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

export function AppSidebar({ user, ...props }: AppSidebarProps) {
    // Provide default values for user properties
    const safeUser = {
        name: user?.name || "User",
        email: user?.email || "",
        role: user?.role || "Guest",
        avatar: user?.avatar || "",
    }

    return (
        <SidebarProvider>
            <Sidebar variant="inset" {...props}>
                <SidebarHeader>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton size="lg" asChild>
                                <a href="/">
                                    <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                        <School2 className="size-6" />
                                    </div>
                                    <div className="grid flex-1 text-left text-sm leading-tight">
                                        <span className="truncate font-semibold">iSchool - SIMS</span>
                                        <span className="truncate text-xs">Valley View University</span>
                                    </div>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarHeader>
                <SidebarContent>
                    <NavMain items={commonNavItems} />
                    {safeUser.role === "Administrator" && <NavAdmin />}
                    {safeUser.role === "Student" && <NavStudent />}
                    {safeUser.role === "Lecturer" && <NavLecturer />}
                    {safeUser.role === "HOD" && <NavHOD />}
                    {safeUser.role === "Dean" && <NavDean />}
                    {safeUser.role === "Grademaster" && <NavGrademaster />}
                    <NavSecondary
                        items={[{ title: "Support", url: "#", icon: LifeBuoy }]}
                        className="mt-auto"
                    />
                </SidebarContent>
                <SidebarFooter>
                    <NavUser user={safeUser} />
                </SidebarFooter>
            </Sidebar>
        </SidebarProvider>
    )
}