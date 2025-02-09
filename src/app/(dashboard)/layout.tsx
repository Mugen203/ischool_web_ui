import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppSidebar } from "@/components/app-sidebar";
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

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "iSchool",
  description: "VVU School Management System",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // *IMPORTANT*:  Replace this with your actual authentication logic.
  const user = {
    name: "Kwaku Ampem Affram",
    email: "radahn@example.com",
    role: "Student", //  Change this to test different roles
    avatar: "/logo.jpg", // Replace with a real avatar path
  };

  return (
    <SidebarProvider>
      <div className="hidden md:block border-r">
        <AppSidebar user={user} />
      </div>
      <main className="flex-1">
        <header className="flex h-16 shrink-0 items-center gap-2 border-b">
          <div className="flex items-center gap-2 px-4 container mx-auto">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Current Page</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 md:p-6 lg:p-8 overflow-auto">
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
}
