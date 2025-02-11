"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { LecturerClass } from "@/types/lecturer";

interface ClassScheduleCardProps {
  classes: LecturerClass[];
  className?: string;
}

export function ClassScheduleCard({
  classes,
  className,
}: ClassScheduleCardProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Today's Classes</CardTitle>
        <CardDescription>Your teaching schedule for today</CardDescription>
      </CardHeader>
      <CardContent>{/* Add class schedule list */}</CardContent>
    </Card>
  );
}
