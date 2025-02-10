"use client";

import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

type UserRole =
  | "student"
  | "lecturer"
  | "hod"
  | "dean"
  | "grademaster"
  | "admin";

interface SettingsContentProps {
  initialRole: string;
}

export function SettingsContent({ initialRole }: SettingsContentProps) {
  const [mounted, setMounted] = useState(false);
  const [actualRole, setActualRole] = useState<UserRole>("student");
  const [selectedRole, setSelectedRole] = useState<UserRole>("student");

  useEffect(() => {
    setActualRole(initialRole.toLowerCase() as UserRole);
    setSelectedRole(initialRole.toLowerCase() as UserRole);
    setMounted(true);
  }, [initialRole]);

  if (!mounted) return null;

  const effectiveRole = actualRole === "admin" ? selectedRole : actualRole;

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      {actualRole === "admin" && (
        <div className="mb-6">
          <Label htmlFor="role-select">View settings as:</Label>
          <Select
            value={selectedRole}
            onValueChange={(value: UserRole) => setSelectedRole(value)}
          >
            <SelectTrigger id="role-select" className="w-[180px]">
              <SelectValue placeholder="Select a role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="student">Student</SelectItem>
              <SelectItem value="lecturer">Lecturer</SelectItem>
              <SelectItem value="hod">Head of Department</SelectItem>
              <SelectItem value="dean">Dean</SelectItem>
              <SelectItem value="grademaster">Grade Master</SelectItem>
              <SelectItem value="admin">Administrator</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      <Tabs defaultValue="account" className="space-y-4">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          {effectiveRole === "admin" && (
            <TabsTrigger value="system">System</TabsTrigger>
          )}
        </TabsList>

        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>
                Manage your account details and preferences.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              {effectiveRole === "student" && (
                <div className="space-y-2">
                  <Label htmlFor="student-id">Student ID</Label>
                  <Input id="student-id" placeholder="Enter your student ID" />
                </div>
              )}
              {(effectiveRole === "lecturer" ||
                effectiveRole === "hod" ||
                effectiveRole === "dean") && (
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Input id="department" placeholder="Enter your department" />
                </div>
              )}
              {effectiveRole === "admin" && (
                <div className="space-y-2">
                  <Label htmlFor="admin-level">Admin Level</Label>
                  <Select>
                    <SelectTrigger id="admin-level">
                      <SelectValue placeholder="Select admin level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Level 1</SelectItem>
                      <SelectItem value="2">Level 2</SelectItem>
                      <SelectItem value="3">Level 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="appearance">
          <Card>
            <CardHeader>
              <CardTitle>Appearance Settings</CardTitle>
              <CardDescription>
                Customize the look and feel of the application.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="dark-mode">Dark Mode</Label>
                <Switch id="dark-mode" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="font-size">Font Size</Label>
                <Select>
                  <SelectTrigger id="font-size">
                    <SelectValue placeholder="Select font size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Small</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="large">Large</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>
                Manage your notification preferences.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="email-notifications">Email Notifications</Label>
                <Switch id="email-notifications" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="push-notifications">Push Notifications</Label>
                <Switch id="push-notifications" />
              </div>
              {effectiveRole === "student" && (
                <div className="flex items-center justify-between">
                  <Label htmlFor="grade-notifications">
                    Grade Notifications
                  </Label>
                  <Switch id="grade-notifications" />
                </div>
              )}
              {effectiveRole === "lecturer" && (
                <div className="flex items-center justify-between">
                  <Label htmlFor="assignment-submissions">
                    Assignment Submission Notifications
                  </Label>
                  <Switch id="assignment-submissions" />
                </div>
              )}
              {effectiveRole === "hod" && (
                <div className="flex items-center justify-between">
                  <Label htmlFor="department-notifications">
                    Department Updates
                  </Label>
                  <Switch id="department-notifications" />
                </div>
              )}
              {effectiveRole === "grademaster" && (
                <div className="flex items-center justify-between">
                  <Label htmlFor="grade-change-notifications">
                    Grade Change Alerts
                  </Label>
                  <Switch id="grade-change-notifications" />
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {effectiveRole === "admin" && (
          <TabsContent value="system">
            <Card>
              <CardHeader>
                <CardTitle>System Settings</CardTitle>
                <CardDescription>
                  Configure system-wide settings.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="maintenance-mode">Maintenance Mode</Label>
                  <Select>
                    <SelectTrigger id="maintenance-mode">
                      <SelectValue placeholder="Select maintenance mode" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="off">Off</SelectItem>
                      <SelectItem value="on">On</SelectItem>
                      <SelectItem value="scheduled">Scheduled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="system-email">System Email</Label>
                  <Input
                    id="system-email"
                    type="email"
                    placeholder="Enter system email"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="debug-mode">Debug Mode</Label>
                  <Switch id="debug-mode" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
}
