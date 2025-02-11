"use client";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { name: "Jan", amount: 1500 },
  { name: "Feb", amount: 1200 },
  { name: "Mar", amount: 1800 },
  { name: "Apr", amount: 2000 },
  { name: "May", amount: 1700 },
  { name: "Jun", amount: 1400 },
];

export default function Overview() {
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
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip
          formatter={(value) => [`$${value}`, "Amount"]}
          labelFormatter={(label) => `Month: ${label}`}
        />
        <Bar dataKey="amount" fill="#adfa1d" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
