"use client";

import { Fragment } from "react";
import { ChevronRight } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import type { NavItem } from "@/config/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Props interface for NavMain component
 * @property {Record<string, NavItem[]>} groups - Navigation items organized by group
 * @property {string} [className] - Optional class name for the component
 */
interface NavMainProps {
  groups: Record<string, NavItem[]>;
  className?: string;
}

/**
 * NavMain Component
 * Renders the main navigation menu with grouped items and nested navigation
 *
 * Features:
 * - Grouped navigation items
 * - Collapsible sections
 * - Icons and labels
 * - Nested navigation support
 * - Responsive to sidebar state (expanded/collapsed)
 */
export function NavMain({ groups, className }: NavMainProps) {
  // Get current sidebar state (expanded/collapsed)
  const { state } = useSidebar();

  const renderMenuItem = (item: NavItem) => {
    const hasSubItems = item.items && item.items.length > 0;

    return (
      <Collapsible key={item.title} asChild>
        <SidebarMenuItem>
          <SidebarMenuButton
            asChild
            tooltip={state ? item.title : undefined}
            className="menu-trigger-hover"
          >
            {item.url ? (
              <Link
                href={item.url}
                className={cn(
                  "flex w-full items-center",
                  "text-[hsl(var(--text-default))] hover:text-[hsl(var(--text-hover))] transition-colors-smooth"
                )}
              >
                {item.icon && <item.icon className="mr-2 h-4 w-4 shrink-0" />}
                {state && <span className="flex-1 truncate">{item.title}</span>}
              </Link>
            ) : (
              <span className="flex w-full items-center">
                {item.icon && <item.icon className="mr-2 h-4 w-4 shrink-0" />}
                {state && <span className="flex-1 truncate">{item.title}</span>}
              </span>
            )}
          </SidebarMenuButton>

          {hasSubItems && (
            <>
              <CollapsibleTrigger asChild>
                <SidebarMenuAction className="menu-trigger-hover transition-transform duration-200 data-[state=open]:rotate-90">
                  <ChevronRight className="h-4 w-4" />
                  <span className="sr-only">Toggle</span>
                </SidebarMenuAction>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items!.map((subItem: NavItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild>
                        <Link
                          href={subItem.url || ""}
                          className={cn(
                            "flex w-full items-center",
                            "text-[hsl(var(--text-default))] hover:text-[hsl(var(--text-hover))]",
                            "nav-item-hover",
                            "transition-colors-smooth"
                          )}
                        >
                          {subItem.icon && (
                            <subItem.icon className="mr-2 h-4 w-4 shrink-0" />
                          )}
                          <span className="flex-1 truncate">
                            {subItem.title}
                          </span>
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </>
          )}
        </SidebarMenuItem>
      </Collapsible>
    );
  };

  const groupOrder = [
    "main",
    "academic",
    "faculty",
    "students",
    "administrative",
    "resources",
    "facilities",
    "system",
  ];

  return (
    <div className={className}>
      {groupOrder
        .filter((groupName) => groups[groupName]?.length > 0)
        .map((groupName) => (
          <SidebarGroup key={groupName}>
            <SidebarGroupLabel className="text-[hsl(var(--text-default))]">
              {groupName.charAt(0).toUpperCase() + groupName.slice(1)}
            </SidebarGroupLabel>
            <SidebarMenu>{groups[groupName].map(renderMenuItem)}</SidebarMenu>
          </SidebarGroup>
        ))}
    </div>
  );
}
