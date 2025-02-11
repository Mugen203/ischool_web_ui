"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { semesters, grades } from "@/lib/mock/grades";
import { calculateGPA } from "@/lib/utils/grades";

/**
 * GradeReports Component
 *
 * Provides a table of the student's grade reports, including
 * semester, year, GPA, and action buttons to download the report.
 *
 * @component
 * @example
 *
 * */
export function GradeReports() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Grade Reports</CardTitle>
        <CardDescription>View and download your grade reports</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Semester</TableHead>
              <TableHead>Year</TableHead>
              <TableHead>GPA</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>{/* ...existing table content */}</TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
