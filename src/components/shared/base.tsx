"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDateRangePicker } from "@/components/date-range-picker";
import Image from "next/image";
import type { User } from "@/types/auth";

interface BaseDashboardProps {
  user: User;
  title?: string;
  metrics: React.ReactNode;
  charts: React.ReactNode;
  tabs?: Array<{
    label: string;
    value: string;
    content?: React.ReactNode;
  }>;
  headerActions?: React.ReactNode;
}

export function BaseDashboard({
  user,
  title = "Dashboard",
  metrics,
  charts,
  tabs = [],
  headerActions,
}: BaseDashboardProps) {
  return (
    <>
      {/* Mobile Fallback */}
      <div className="md:hidden">
        <Image
          src="/examples/dashboard-light.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="block dark:hidden"
        />
        <Image
          src="/examples/dashboard-dark.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="hidden dark:block"
        />
      </div>

      {/* Desktop Dashboard */}
      <div className="hidden flex-col md:flex">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
          {headerActions || (
            <div className="flex items-center space-x-2">
              <CalendarDateRangePicker />
              <Button>
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </div>
          )}
        </div>

        <Tabs defaultValue="overview" className="space-y-4 pt-2">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            {tabs.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {metrics}
            </div>
            {charts}
          </TabsContent>

          {tabs.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
              {tab.content}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </>
  );
}
