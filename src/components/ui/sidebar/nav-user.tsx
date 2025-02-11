// nav-user.tsx
"use client";

import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogOut,
  Sparkles,
  User,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

interface NavUserProps {
  user: {
    name: string;
    email: string;
    role: string;
    avatar: string;
  };
  className?: string;
}

/**
 * NavUser Component
 *
 * Renders a sidebar menu item with user information and actions.
 * Displays user's avatar, name, and email address.
 * Provides a dropdown menu with navigation options, such as profile and logout.
 *
 * @param {NavUserProps} props - The properties for the NavUser component.
 * @param {Object} props.user - The user data containing name, email, role, and avatar.
 * @param {string} [props.className] - Optional additional class names for styling.
 *
 * @returns {JSX.Element} The rendered NavUser component.
 */

export function NavUser({ user, className }: NavUserProps) {
  const { isMobile } = useSidebar();

  return (
    <div className={cn("mt-auto pt-2 border-t nav-user-hover", className)}>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton size="lg" className="nav-user-item w-full">
                <Avatar className="size-8">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>
                    {user.name.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm">
                  <span className="font-medium nav-user-item">{user.name}</span>
                  <span className="text-xs nav-user-item">{user.email}</span>
                </div>
                <ChevronsUpDown className="ml-auto size-4 nav-user-item" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </div>
  );
}
