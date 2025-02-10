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
