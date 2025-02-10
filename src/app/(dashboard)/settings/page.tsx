"use client";

// Import React hooks and UI components
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

/**
 * Type definition for user roles in the system
 * Used for role-based access control and UI rendering
 */
type UserRole =
  | "Admin"
  | "Student"
  | "Lecturer"
  | "HOD"
  | "Dean"
  | "Grademaster";

/**
 * Settings Page Component
 * Provides interface for users to manage their account settings
 * Supports role-based settings display and administrator role switching
 */
export default function SettingsPage() {
  // Client-side rendering control
  const [mounted, setMounted] = useState(false);
  // Role management states
  const [actualRole, setActualRole] = useState<UserRole>("Student");
  const [selectedRole, setSelectedRole] = useState<UserRole>("Student");

  // Initialize component with user role
  useEffect(() => {
    // TODO: Get actual role from auth context
    setActualRole("Student");
    setSelectedRole("Student");
    setMounted(true);
  }, []);

  // Prevent hydration issues
  if (!mounted) return null;

  // Determine which role's settings to display
  const effectiveRole = actualRole === "Admin" ? selectedRole : actualRole;

  return (
    <div className="container mx-auto py-10">
      {/* Page Header */}
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      {/* Administrator Role Selector - Only visible to administrators */}
      {actualRole === "Admin" && (
        <div className="mb-6">
          <Label htmlFor="role-select">View settings as:</Label>
          <Select
            value={selectedRole}
            onValueChange={(value: UserRole) => setSelectedRole(value)}
          >
            {/* Role selection options */}
            <SelectTrigger id="role-select" className="w-[180px]">
              <SelectValue placeholder="Select a role" />
            </SelectTrigger>
            <SelectContent>
              {/* List of available roles */}
              <SelectItem value="Student">Student</SelectItem>
              <SelectItem value="Lecturer">Lecturer</SelectItem>
              <SelectItem value="HOD">Head of Department</SelectItem>
              <SelectItem value="Dean">Dean</SelectItem>
              <SelectItem value="Grademaster">Grade Master</SelectItem>
              <SelectItem value="Administrator">Administrator</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      {/* Settings Tabs Container */}
      <Tabs defaultValue="account" className="space-y-4">
        {/* Tab Navigation */}
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          {/* System tab only visible to administrators */}
          {effectiveRole === "Admin" && (
            <TabsTrigger value="system">System</TabsTrigger>
          )}
        </TabsList>

        {/* Account Settings Tab */}
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
              {effectiveRole === "Student" && (
                <div className="space-y-2">
                  <Label htmlFor="student-id">Student ID</Label>
                  <Input id="student-id" placeholder="Enter your student ID" />
                </div>
              )}
              {(effectiveRole === "Lecturer" ||
                effectiveRole === "HOD" ||
                effectiveRole === "Dean") && (
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Input id="department" placeholder="Enter your department" />
                </div>
              )}
              {effectiveRole === "Admin" && (
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

        {/* Appearance Settings Tab */}
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

        {/* Notification Settings Tab */}
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
              {effectiveRole === "Student" && (
                <div className="flex items-center justify-between">
                  <Label htmlFor="grade-notifications">
                    Grade Notifications
                  </Label>
                  <Switch id="grade-notifications" />
                </div>
              )}
              {effectiveRole === "Lecturer" && (
                <div className="flex items-center justify-between">
                  <Label htmlFor="assignment-submissions">
                    Assignment Submission Notifications
                  </Label>
                  <Switch id="assignment-submissions" />
                </div>
              )}
              {effectiveRole === "HOD" && (
                <div className="flex items-center justify-between">
                  <Label htmlFor="department-notifications">
                    Department Updates
                  </Label>
                  <Switch id="department-notifications" />
                </div>
              )}
              {effectiveRole === "Grademaster" && (
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

        {/* System Settings Tab - Admin Only */}
        {effectiveRole === "Admin" && (
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
