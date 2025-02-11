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
  const { state } = useSidebar();
  const navItems = user ? getNavigation(user.role) : [];

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
        "bg-sidebar text-secondary-foreground",
        state === "collapsed" && "w-[var(--sidebar-width-icon)]"
      )}
      {...props}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              asChild
              className={cn(
                "px-4 rounded-lg",
                state === "collapsed" && "justify-center",
                "transition-all duration-200 hover:shadow-md hover:bg-accent/5"
              )}
            >
              <Link href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <School2 className="size-6" />
                </div>
                {state === "expanded" && (
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold text-[hsl(var(--text-default))]">
                      iSchool - SIMS
                    </span>
                    <span className="truncate text-xs text-muted-foreground hover:text-[hsl(var(--text-hover))]">
                      Valley View University
                    </span>
                  </div>
                )}
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain
          groups={groups}
          className={cn(
            // Updated text color and hover states
            "[&_a]:text-[hsl(var(--text-default))]",
            "[&_a:hover]:text-[hsl(var(--text-hover))]",
            "[&_a:hover]:shadow-md",
            "[&_a]:rounded-md",
            "[&_a]:transition-all",
            "[&_a]:duration-200",
            // Added specific styles for text inside links
            "[&_a_span]:text-[hsl(var(--text-default))]",
            "[&_a:hover_span]:text-[hsl(var(--text-hover))]"
          )}
        />
      </SidebarContent>

      <SidebarFooter>
        {user && (
          <NavUser
            user={{
              name: user.name,
              email: user.email,
              role: user.role,
              avatar: user.avatar || "/logo.jpg",
            }}
            className={cn(
              "text-[hsl(var(--text-default))]",
              "[&_span]:text-muted-foreground",
              "[&_span:hover]:text-[hsl(var(--text-hover))]",
              "hover:shadow-md",
              "hover:bg-accent/5",
              "rounded-md",
              "transition-all",
              "duration-200"
            )}
          />
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
