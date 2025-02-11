"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

/**
 * PerformanceSummary Component
 *
 * Displays a summary card with a detailed analysis of the student's
 * academic performance. This component serves as an overview section
 * highlighting key aspects of academic achievements and areas for improvement.
 *
 * Features:
 * - Title and description header
 * - Content section for detailed performance metrics
 *
 * @component
 * @example
 * ```tsx
 * <PerformanceSummary />
 * ```
 */

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
