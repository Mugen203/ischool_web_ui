"use client";

// Import React hooks and Recharts components
import { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

/**
 * Mock data for GPA visualization
 * In production, this would come from an API
 */
const mockData = [
  { semester: "Fall 2023", gpa: 3.7, cumulativeGPA: 3.7 },
  { semester: "Spring 2024", gpa: 3.8, cumulativeGPA: 3.75 },
  { semester: "Summer 2024", gpa: 3.9, cumulativeGPA: 3.8 },
];

/**
 * GPA Chart Component
 * Displays a student's GPA trend over semesters using an area chart
 * Shows both semester GPA and cumulative GPA
 */
export function GPAChart() {
  // State to hold chart data
  const [data, setData] = useState<
    { semester: string; gpa: number; cumulativeGPA: number }[]
  >([]);

  // Load data on component mount
  useEffect(() => {
    // TODO: Replace with actual API call
    setData(mockData);
  }, []);

  return (
    // Responsive container ensures chart fits parent element
    <ResponsiveContainer width="100%" height={350}>
      {/* Area chart configuration */}
      <AreaChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        {/* Gradient definitions for chart areas */}
        <defs>
          {/* Semester GPA gradient (purple) */}
          <linearGradient id="colorGPA" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          {/* Cumulative GPA gradient (green) */}
          <linearGradient id="colorCumulative" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>

        {/* Chart grid and axes */}
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="semester" />
        <YAxis domain={[0, 4]} ticks={[0, 1, 2, 3, 4]} />
        <Tooltip />

        {/* Data visualization areas */}
        {/* Semester GPA area */}
        <Area
          type="monotone"
          dataKey="gpa"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorGPA)"
        />
        {/* Cumulative GPA area */}
        <Area
          type="monotone"
          dataKey="cumulativeGPA"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorCumulative)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
