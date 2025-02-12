"use client";
import React from "react";
import { AppSidebar } from "@/components/ui/sidebar/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { UserNav } from "@/components/ui/navbar/user-navbar";
import { SearchCommand } from "@/components/commands/search-command";
import { useBreadcrumbs } from "@/hooks/use-breadcrumbs";
import { useAuth } from "@/contexts/auth-context";

// Dashboard Layout Component
// Provides the common layout structure for all dashboard pages including:
// - Sidebar navigation
// - Top header with breadcrumbs
// - User navigation
// - Search functionality
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Get current page breadcrumbs
  const breadcrumbs = useBreadcrumbs();

  const { user } = useAuth();

  return (
    // Wrap entire layout in SidebarProvider for sidebar state management
    <SidebarProvider>
      {/* Updated Sidebar with text-hover class */}
      <div className="hidden md:block border-r min-h-screen bg-secondary text-secondary-foreground">
        <AppSidebar user={user || undefined} />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col bg-background text-foreground">
        {/* Updated Header with background color */}
        <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-2 border-b bg-secondary text-secondary-foreground">
          <div className="flex items-center gap-2 px-4 container mx-auto">
            {/* Mobile Sidebar Trigger */}
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />

            {/* Updated Breadcrumbs with hover effect */}
            <Breadcrumb>
              <BreadcrumbList>
                {breadcrumbs.map((segment, index) => (
                  <React.Fragment key={segment.href}>
                    {/* Hide breadcrumbs on mobile for space efficiency */}
                    <BreadcrumbItem className="hidden md:block">
                      {segment.active ? (
                        <BreadcrumbPage className="text-muted-foreground">
                          {segment.title}
                        </BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink
                          href={segment.href}
                          className="text-hover"
                        >
                          {segment.title}
                        </BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                    {/* Add separator between breadcrumb items */}
                    {index < breadcrumbs.length - 1 && (
                      <BreadcrumbSeparator className="hidden md:block text-muted-foreground" />
                    )}
                  </React.Fragment>
                ))}
              </BreadcrumbList>
            </Breadcrumb>

            {/* Updated Header Elements with hover effects */}
            <div className="ml-auto flex items-center space-x-4">
              <SearchCommand /> {/* Global search functionality */}
            </div>
          </div>
        </header>

        {/* Main Content Container - Scrollable area with responsive padding */}
        <div className="flex flex-1 flex-col gap-4 p-4 md:p-6 lg:p-8 overflow-auto">
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
}
