// app/dashboard/layout.tsx
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import { AppSidebar } from "@/components/app-sidebar";
// import { Toaster } from "@/components/ui/toaster";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger
} from "@/components/ui/sidebar"; // Import SidebarProvider and related components
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "iSchool",
    description: "VVU School Management System",
};

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    // *IMPORTANT*:  Replace this with your actual authentication logic.
    const user = {
        name: "John Doe",
        email: "john.doe@example.com",
        role: "Administrator",  //  Change this to test different roles
        avatar: "/shadcn.jpg" // Replace with a real avatar path
    };
    // const user = {
    //     name: "Admin User",
    //     email: "admin@example.com",
    //     role: "Administrator",
    //     avatar: "/path/to/admin/avatar.jpg"
    // };
    //const user = null; // Simulate a logged-out user


    return (
      <SidebarProvider> {/* Wrap everything with SidebarProvider */}
        <div className={`h-screen flex ${inter.className}`}>
             <div className="hidden md:block w-[250px] border-r">
              {user ? (
                <AppSidebar user={user} />
                  ) : (
                    <div className="p-4">
                        <p>Please <Link href="/login" className="text-blue-500">log in</Link> to access the dashboard.</p>
                    </div>
                )}
            </div>
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 border-b">
                  <div className="flex items-center gap-2 px-4 container mx-auto">
                    <SidebarTrigger className="-ml-1" />
                    <Separator orientation="vertical" className="mr-2 h-4" />
                    {/*  Breadcrumbs (Optional) - Customize as needed */}
                     <Breadcrumb>
                      <BreadcrumbList>
                        <BreadcrumbItem className="hidden md:block">
                          <BreadcrumbLink href="/dashboard">
                            Dashboard
                          </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="hidden md:block" />
                        <BreadcrumbItem>
                          <BreadcrumbPage>Current Page</BreadcrumbPage>
                        </BreadcrumbItem>
                      </BreadcrumbList>
                    </Breadcrumb>
                  </div>
                </header>

              {/* Main Content Area */}
                <main className="flex flex-1 flex-col gap-4 p-4 md:p-6 lg:p-8 overflow-auto">
                    {children}
                </main>
            </SidebarInset>
        </div>
      </SidebarProvider>
    );
}