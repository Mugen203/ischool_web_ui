"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

/**
 * Interface for GPA chart data points
 */
interface GPAChartData {
  /** Academic semester identifier (e.g., "Fall 2023") */
  semester: string;
  /** Term GPA value (0.0 - 4.0) */
  gpa: number;
  /** Running cumulative GPA (0.0 - 4.0) */
  cumulativeGPA: number;
}

/** Mock data for development and testing */
const mockData: GPAChartData[] = [
  { semester: "Fall 2023", gpa: 3.7, cumulativeGPA: 3.7 },
  { semester: "Spring 2024", gpa: 3.8, cumulativeGPA: 3.75 },
  { semester: "Summer 2024", gpa: 3.9, cumulativeGPA: 3.8 },
];

/**
 * GPAChart Component
 *
 * Displays a line chart showing the student's GPA progression over time.
 * Features include:
 * - Term GPA trend line
 * - Cumulative GPA trend line
 * - Interactive tooltips
 * - Responsive layout
 * - Custom theme integration
 *
 * The chart uses a 4.0 scale and displays both term and cumulative GPAs
 * with different line styles for easy differentiation.
 *
 * @component
 * @example
 * ```tsx
 * <GPAChart />
 * ```
 */
export function GPAChart() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>GPA Trend</CardTitle>
        <CardDescription>Term and cumulative GPA progression</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={mockData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              {/* Grid lines for better readability */}
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />

              {/* X-axis showing semesters */}
              <XAxis
                dataKey="semester"
                className="text-sm"
                stroke="hsl(var(--muted-foreground))"
              />

              {/* Y-axis showing GPA scale */}
              <YAxis
                domain={[0, 4]}
                ticks={[0, 1, 2, 3, 4]}
                className="text-sm"
                stroke="hsl(var(--muted-foreground))"
              />

              {/* Interactive tooltip */}
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--background))",
                  border: "1px solid hsl(var(--border))",
                }}
                labelStyle={{ color: "hsl(var(--foreground))" }}
              />

              {/* Term GPA line */}
              <Line
                type="monotone"
                dataKey="gpa"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                dot={{
                  stroke: "hsl(var(--primary))",
                  strokeWidth: 2,
                  fill: "hsl(var(--background))",
                }}
              />

              {/* Cumulative GPA line (dashed) */}
              <Line
                type="monotone"
                dataKey="cumulativeGPA"
                stroke="hsl(var(--secondary))"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{
                  stroke: "hsl(var(--secondary))",
                  strokeWidth: 2,
                  fill: "hsl(var(--background))",
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
