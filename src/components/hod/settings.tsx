"use client";

import { BaseSettings } from "@/components/shared/base-settings";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

/**
 * Interface for settings tab configuration
 */
interface SettingsTab {
  /** Unique identifier for the tab */
  value: string;
  /** Display label for the tab */
  label: string;
  /** Content to be rendered in the tab panel */
  content: React.ReactNode;
}

/**
 * HodSettings Component
 *
 * Provides a comprehensive settings interface for Head of Department users.
 * Features include:
 * - Personal account management
 * - Department-wide settings
 * - Notification preferences
 * - Security configurations
 *
 * The component uses a tab-based layout to organize different setting categories
 * and provides form controls for managing HOD-specific preferences.
 *
 * @component
 * @example
 * ```tsx
 * <HodSettings />
 * ```
 */
export function HodSettings() {
  /**
   * Settings tab configuration
   * Defines the structure and content of each settings section
   */
  const tabs: SettingsTab[] = [
    /**
     * Account Settings Tab
     * Manages personal HOD information including:
     * - Name
     * - Email
     * - Department association
     * - Office location
     */
    {
      value: "account",
      label: "Account",
      content: (
        <Card>
          <CardHeader>
            <CardTitle>Account Settings</CardTitle>
            <CardDescription>Manage your HOD account details</CardDescription>
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
            <div className="space-y-2">
              <Label htmlFor="department">Department</Label>
              <Input id="department" placeholder="Enter your department" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="office">Office Location</Label>
              <Input id="office" placeholder="Enter your office location" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save Changes</Button>
          </CardFooter>
        </Card>
      ),
    },

    /**
     * Notification Settings Tab
     * Controls departmental notifications:
     * - Faculty updates
     * - Course approvals
     * - Staff meetings
     * - Performance reports
     */
    {
      value: "notifications",
      label: "Notifications",
      content: (
        <Card>
          <CardHeader>
            <CardTitle>Notification Settings</CardTitle>
            <CardDescription>
              Configure departmental notifications
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="faculty">Faculty Updates</Label>
              <Switch id="faculty" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="course-approvals">Course Approvals</Label>
              <Switch id="course-approvals" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="staff-meetings">Staff Meetings</Label>
              <Switch id="staff-meetings" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="performance">Performance Reports</Label>
              <Switch id="performance" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save Preferences</Button>
          </CardFooter>
        </Card>
      ),
    },

    /**
     * Department Settings Tab
     * Manages department configuration:
     * - Department name and code
     * - Approval workflows
     * - Administrative settings
     */
    {
      value: "department",
      label: "Department",
      content: (
        <Card>
          <CardHeader>
            <CardTitle>Department Settings</CardTitle>
            <CardDescription>
              Configure department-wide settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="dept-name">Department Name</Label>
              <Input id="dept-name" placeholder="Enter department name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dept-code">Department Code</Label>
              <Input id="dept-code" placeholder="Enter department code" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="auto-approvals">Enable Auto-Approvals</Label>
              <Switch id="auto-approvals" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Update Department Settings</Button>
          </CardFooter>
        </Card>
      ),
    },

    /**
     * Security Settings Tab
     * Controls account security:
     * - Password management
     * - Authentication settings
     * - Security preferences
     */
    {
      value: "security",
      label: "Security",
      content: (
        <Card>
          <CardHeader>
            <CardTitle>Security Settings</CardTitle>
            <CardDescription>Manage your account security</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current-password">Current Password</Label>
              <Input
                id="current-password"
                type="password"
                placeholder="Enter current password"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-password">New Password</Label>
              <Input
                id="new-password"
                type="password"
                placeholder="Enter new password"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="Confirm new password"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Update Password</Button>
          </CardFooter>
        </Card>
      ),
    },
  ];

  return <BaseSettings tabs={tabs} />;
}
