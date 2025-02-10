"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { School2 } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar";
import { User } from "@/types/auth";
import { NavUser } from "./nav-user";
import { NavMain } from "./nav-main";
import { getNavigation, NavItem } from "@/config/navigation";
import Link from "next/link";

/**
 * Props interface for the AppSidebar component
 * Extends Sidebar component props and adds optional user prop
 */
interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  user?: User;
}

/**
 * AppSidebar Component
 * Main navigation sidebar for the application that adapts based on user role
 *
 * Features:
 * - Collapsible sidebar with icon-only mode
 * - Role-based navigation items
 * - Grouped navigation structure
 * - User profile section
 *
 * @param {AppSidebarProps} props - Component properties including user data
 * @returns {JSX.Element} Rendered sidebar component
 */
export function AppSidebar({ user, ...props }: AppSidebarProps) {
  // Get current sidebar state (expanded/collapsed)
  const { state } = useSidebar();

  // Get navigation items based on user role
  const navItems = user ? getNavigation(user.role) : [];

  // Organize navigation items into groups
  // Groups: main, academic, administrative, etc.
  const groups = navItems.reduce((acc, item) => {
    const groupName = item.group || "main";
    if (!acc[groupName]) {
      acc[groupName] = [];
    }
    acc[groupName].push(item);
    return acc;
  }, {} as Record<string, NavItem[]>);

  return (
    <Sidebar
      collapsible="icon"
      variant="inset"
      className={cn(
        "transition-all duration-300 ease-in-out",
        state === "collapsed" && "w-[var(--sidebar-width-icon)]",
        "[&_*]:transition-all [&_*]:duration-200 [&_*]:ease-in-out"
      )}
      {...props}
    >
      {/* Header Section - App Logo and Title */}
      <SidebarHeader>
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
              <Link href="/">
                {/* App Logo/Icon Container */}
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <School2 className="size-6" />
                </div>
                {/* App Title - Only shown when sidebar is expanded */}
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
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* Main Navigation Content */}
      <SidebarContent>
        <NavMain groups={groups} />
      </SidebarContent>

      {/* Footer - User Profile Section */}
      <SidebarFooter>
        {user && (
          <NavUser
            user={{
              name: user.name,
              email: user.email,
              role: user.role,
              avatar: user.avatar || "/default-avatar.png",
            }}
          />
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
