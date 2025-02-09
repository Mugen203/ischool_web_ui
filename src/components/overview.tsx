"use client";

import { useEffect, useState } from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

export function Overview() {
  const [data, setData] = useState<
    { name: string; current: number; target: number }[]
  >([]);

  useEffect(() => {
    // Simulating academic progress data for different subjects
    const generatedData = [
      { name: "Mathematics", current: 85, target: 90 },
      { name: "Physics", current: 78, target: 85 },
      { name: "Chemistry", current: 92, target: 88 },
      { name: "Biology", current: 88, target: 85 },
      { name: "English", current: 95, target: 90 },
      { name: "History", current: 82, target: 80 },
    ].map(({ name, current, target }) => ({
      name,
      current: current,
      target: target,
    }));
    setData(generatedData);
  }, []);

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}%`}
          domain={[0, 100]}
        />
        <Bar
          dataKey="current"
          className="fill-chart-1"
          radius={[4, 4, 0, 0]}
          name="Current Score"
        />
        <Bar
          dataKey="target"
          className="fill-chart-2"
          radius={[4, 4, 0, 0]}
          name="Target Score"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
