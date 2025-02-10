"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function PerformanceSummary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance Summary</CardTitle>
        <CardDescription>
          Detailed analysis of your academic performance
        </CardDescription>
      </CardHeader>
      <CardContent>{/* ...existing performance content */}</CardContent>
    </Card>
  );
}
