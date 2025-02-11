"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

/**
 * @function Transcripts
 * @description Component for the official transcripts page.
 * @returns {ReactElement} A Card component with a title and description.
 * @example
 * <Transcripts />
 */
export function Transcripts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Official Transcripts</CardTitle>
        <CardDescription>
          Request and download your official transcripts
        </CardDescription>
      </CardHeader>
      <CardContent>{/* ...existing transcripts content */}</CardContent>
    </Card>
  );
}
