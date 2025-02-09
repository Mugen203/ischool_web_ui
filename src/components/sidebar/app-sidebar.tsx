"use client";
import * as React from "react";
import { Command, LifeBuoy, Settings2, Home, School2 } from "lucide-react";
import { NavMain } from "@/components/sidebar/nav-main";
import { NavAdmin } from "@/components/sidebar/nav-admin";
import { NavStudent } from "@/components/sidebar/nav-student";
import { NavLecturer } from "@/components/sidebar/nav-lecturer";
import { NavHOD } from "@/components/sidebar/nav-hod";
import { NavDean } from "@/components/sidebar/nav-dean";
import { NavGrademaster } from "@/components/sidebar/nav-grademaster";
import { NavSecondary } from "@/components/sidebar/nav-secondary";
import { NavUser } from "@/components/sidebar/nav-user";
import {
  NavSkeleton,
  SidebarHeaderSkeleton,
  SidebarUserSkeleton,
} from "@/components/ui/sidebar-skeleton";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import type { User } from "@/types/navigation";
import { cn } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  user: User;
}

const getDashboardUrl = (role: string) => {
  switch (role.toLowerCase()) {
    case "administrator":
      return "/admin/dashboard";
    case "student":
      return "/student/dashboard";
    case "lecturer":
      return "/lecturer/dashboard";
    case "hod":
      return "/hod/dashboard";
    case "dean":
      return "/dean/dashboard";
    case "grademaster":
      return "/grademaster/dashboard";
    default:
      return "/";
  }
};

export function AppSidebar({ user, ...props }: AppSidebarProps) {
  const { state } = useSidebar();
  const [isLoading, setIsLoading] = React.useState(true);

  const safeUser = {
    name: user?.name || "User",
    email: user?.email || "",
    role: user?.role || "Guest",
    avatar: user?.avatar || "",
  };

  // Update commonNavItems to use dynamic dashboard URL
  const commonNavItems = [
    {
      title: "Dashboard",
      url: getDashboardUrl(safeUser.role),
      icon: Home,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings2,
    },
  ];

  // Simulate loading state
  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Sidebar
      collapsible="icon"
      variant="inset"
      className={cn(
        "transition-all duration-300 ease-in-out",
        state === "collapsed" && "w-[var(--sidebar-width-icon)]",
        // Add smooth transitions for child elements
        "[&_*]:transition-all [&_*]:duration-200 [&_*]:ease-in-out"
      )}
      {...props}
    >
      <SidebarHeader>
        {isLoading ? (
          <SidebarHeaderSkeleton />
        ) : (
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                size="lg"
                asChild
                className={cn(
                  "px-4",
                  state === "collapsed" && "justify-center",
                  "transition-transform hover:scale-[0.98]"
                )}
              >
                <a href="/">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                    <School2 className="size-6" />
                  </div>
                  {state === "expanded" && (
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">
                        iSchool - SIMS
                      </span>
                      <span className="truncate text-xs">
                        Valley View University
                      </span>
                    </div>
                  )}
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        )}
      </SidebarHeader>
      <SidebarContent>
        {isLoading ? (
          <>
            <NavSkeleton count={2} />
            <div className="my-2 px-4">
              <Skeleton className="h-px w-full" />
            </div>
            <NavSkeleton count={3} />
            <div className="my-2 px-4">
              <Skeleton className="h-px w-full" />
            </div>
            <NavSkeleton count={2} />
          </>
        ) : (
          <>
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
          </>
        )}
      </SidebarContent>
      <SidebarFooter>
        {isLoading ? <SidebarUserSkeleton /> : <NavUser user={safeUser} />}
      </SidebarFooter>
    </Sidebar>
  );
}
