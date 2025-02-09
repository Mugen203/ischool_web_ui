"use client";
import React from "react";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
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
import { UserNav } from "@/components/navbar/user-navbar";
import { SearchCommand } from "@/components/commands/search-command";
import { useBreadcrumbs } from "@/hooks/use-breadcrumbs";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const breadcrumbs = useBreadcrumbs();
  const user = {
    name: "Kwaku Ampem Affram",
    email: "radahn@example.com",
    role: "Student",
    avatar: "/logo.jpg",
  };

  return (
    <SidebarProvider>
      {/* Sidebar with custom background color */}
      <div className="hidden md:block border-r min-h-screen bg-sidebar-primary text-sidebar-foreground">
        <AppSidebar user={user} />
      </div>

      {/* Main content area */}
      <main className="flex-1 space-y-4 p-1 pt-0 bg-background text-foreground">
        {/* Header section */}
        <header className="flex h-16 shrink-0 items-center gap-2 border-b">
          <div className="flex items-center gap-2 px-4 container mx-auto">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />

            {/* Breadcrumb navigation */}
            <Breadcrumb>
              <BreadcrumbList>
                {breadcrumbs.map((segment, index) => (
                  <React.Fragment key={segment.href}>
                    <BreadcrumbItem className="hidden md:block">
                      {segment.active ? (
                        <BreadcrumbPage>{segment.title}</BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink href={segment.href}>
                          {segment.title}
                        </BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                    {index < breadcrumbs.length - 1 && (
                      <BreadcrumbSeparator className="hidden md:block" />
                    )}
                  </React.Fragment>
                ))}
              </BreadcrumbList>
            </Breadcrumb>

            {/* Right-side navigation elements */}
            <div className="ml-auto flex items-center space-x-4">
              <SearchCommand />
              <UserNav />
            </div>
          </div>
        </header>

        {/* Main content container */}
        <div className="flex flex-1 flex-col gap-4 p-4 md:p-6 lg:p-8 overflow-auto">
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
}
