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

interface GPAChartData {
  semester: string;
  gpa: number;
  cumulativeGPA: number;
}

const mockData: GPAChartData[] = [
  { semester: "Fall 2023", gpa: 3.7, cumulativeGPA: 3.7 },
  { semester: "Spring 2024", gpa: 3.8, cumulativeGPA: 3.75 },
  { semester: "Summer 2024", gpa: 3.9, cumulativeGPA: 3.8 },
];

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
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis
                dataKey="semester"
                className="text-sm"
                stroke="hsl(var(--muted-foreground))"
              />
              <YAxis
                domain={[0, 4]}
                ticks={[0, 1, 2, 3, 4]}
                className="text-sm"
                stroke="hsl(var(--muted-foreground))"
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--background))",
                  border: "1px solid hsl(var(--border))",
                }}
                labelStyle={{ color: "hsl(var(--foreground))" }}
              />
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
