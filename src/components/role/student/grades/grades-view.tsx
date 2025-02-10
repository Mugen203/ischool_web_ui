"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GPAOverview } from "./gpa-overview";
import { GradeReports } from "./grade-reports";
import { Transcripts } from "./transcripts";
import { PerformanceSummary } from "./performance-summary";

export function GradesView() {
  return (
    <div className="flex-1 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">
          Academic Performance
        </h2>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="grade-reports">Grade Reports</TabsTrigger>
          <TabsTrigger value="transcripts">Transcripts</TabsTrigger>
          <TabsTrigger value="performance">Performance Summary</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <GPAOverview />
        </TabsContent>
        <TabsContent value="grade-reports" className="space-y-4">
          <GradeReports />
        </TabsContent>
        <TabsContent value="transcripts" className="space-y-4">
          <Transcripts />
        </TabsContent>
        <TabsContent value="performance" className="space-y-4">
          <PerformanceSummary />
        </TabsContent>
      </Tabs>
    </div>
  );
}
