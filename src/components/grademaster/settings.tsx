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
 * GrademasterSettings Component
 *
 * Provides a comprehensive settings interface for Grademaster users.
 * Features include:
 * - Personal account management
 * - Grading system preferences
 * - Notification configurations
 * - Security settings
 *
 * The component uses a tab-based layout to organize different setting categories
 * and provides form controls for managing grademaster-specific preferences.
 *
 * @component
 * @example
 * ```tsx
 * <GrademasterSettings />
 * ```
 */
export function GrademasterSettings() {
  /**
   * Settings tab configuration
   * Defines the structure and content of each settings section
   */
  const tabs: SettingsTab[] = [
    /**
     * Account Settings Tab
     * Manages personal grademaster information including:
     * - Name
     * - Email
     * - Department association
     * - Office hours
     */
    {
      value: "account",
      label: "Account",
      content: (
        <Card>
          <CardHeader>
            <CardTitle>Account Settings</CardTitle>
            <CardDescription>
              Manage your grademaster account details
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
            <div className="space-y-2">
              <Label htmlFor="department">Department</Label>
              <Input id="department" placeholder="Enter department" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="office">Office Hours</Label>
              <Input id="office" placeholder="Enter office hours" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save Changes</Button>
          </CardFooter>
        </Card>
      ),
    },

    /**
     * Grading Settings Tab
     * Controls grading system preferences:
     * - Automatic GPA calculation
     * - Grade change notifications
     * - Batch update settings
     * - Verification requirements
     */
    {
      value: "grading",
      label: "Grading",
      content: (
        <Card>
          <CardHeader>
            <CardTitle>Grading Preferences</CardTitle>
            <CardDescription>Configure grading system settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="auto-calculate">Auto Calculate GPA</Label>
              <Switch id="auto-calculate" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="grade-notifications">
                Grade Change Notifications
              </Label>
              <Switch id="grade-notifications" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="batch-updates">Enable Batch Updates</Label>
              <Switch id="batch-updates" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="verification">Require Double Verification</Label>
              <Switch id="verification" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save Preferences</Button>
          </CardFooter>
        </Card>
      ),
    },

    /**
     * Notification Settings Tab
     * Manages notification preferences for:
     * - Grade submission alerts
     * - Approval request notifications
     * - System update announcements
     */
    {
      value: "notifications",
      label: "Notifications",
      content: (
        <Card>
          <CardHeader>
            <CardTitle>Notification Settings</CardTitle>
            <CardDescription>Manage notification preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="grade-submissions">Grade Submissions</Label>
              <Switch id="grade-submissions" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="approval-requests">Approval Requests</Label>
              <Switch id="approval-requests" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="system-updates">System Updates</Label>
              <Switch id="system-updates" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save Preferences</Button>
          </CardFooter>
        </Card>
      ),
    },

    /**
     * Security Settings Tab
     * Controls account security features:
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
