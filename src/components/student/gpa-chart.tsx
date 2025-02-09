"use client";

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

const mockData = [
  { semester: "Fall 2023", gpa: 3.7, cumulativeGPA: 3.7 },
  { semester: "Spring 2024", gpa: 3.8, cumulativeGPA: 3.75 },
  { semester: "Summer 2024", gpa: 3.9, cumulativeGPA: 3.8 },
];

export function GPAChart() {
  const [data, setData] = useState<
    { semester: string; gpa: number; cumulativeGPA: number }[]
  >([]);

  useEffect(() => {
    // In a real application, you would fetch this data from an API
    setData(mockData);
  }, []);

  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorGPA" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorCumulative" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="semester" />
        <YAxis domain={[0, 4]} ticks={[0, 1, 2, 3, 4]} />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="gpa"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorGPA)"
        />
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
