"use client";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { cn } from "@/lib/utils";

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
          className="text-muted-foreground text-xs"
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          className="text-muted-foreground text-xs"
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip
          content={({ active, payload, label }) => {
            if (active && payload && payload.length) {
              return (
                <div className="rounded-lg border bg-background p-2 shadow-sm">
                  <div className="text-muted-foreground text-xs">
                    Month: {label}
                  </div>
                  <div className="font-bold">${payload[0].value}</div>
                </div>
              );
            }
            return null;
          }}
        />
        <Bar
          dataKey="amount"
          className={cn(
            "fill-[hsl(var(--chart-1))]",
            "hover:fill-[hsl(var(--chart-2))]",
            "transition-colors duration-200"
          )}
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
