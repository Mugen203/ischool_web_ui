"use client";
// Import required dependencies
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

/**
 * Props interface for NavMain component
 * @property {Record<string, NavItem[]>} groups - Navigation items organized by group
 */
interface NavMainProps {
  groups: Record<string, NavItem[]>;
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
export function NavMain({ groups }: NavMainProps) {
  // Get current sidebar state (expanded/collapsed)
  const { state } = useSidebar();

  const renderMenuItem = (item: NavItem) => {
    const hasSubItems = item.items && item.items.length > 0;

    return (
      <Collapsible key={item.title} asChild>
        <SidebarMenuItem>
          <SidebarMenuButton asChild tooltip={state ? item.title : undefined}>
            {item.url ? (
              <Link href={item.url} className="flex w-full items-center">
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
                <SidebarMenuAction className="transition-transform duration-200 data-[state=open]:rotate-90">
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
                          className="flex w-full items-center"
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
    <>
      {groupOrder
        .filter((groupName) => groups[groupName]?.length > 0)
        .map((groupName) => (
          <SidebarGroup key={groupName}>
            <SidebarGroupLabel>
              {groupName.charAt(0).toUpperCase() + groupName.slice(1)}
            </SidebarGroupLabel>
            <SidebarMenu>{groups[groupName].map(renderMenuItem)}</SidebarMenu>
          </SidebarGroup>
        ))}
    </>
  );
}
