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
 * LecturerSettings Component
 *
 * Provides a comprehensive settings interface for lecturer users.
 * Features include:
 * - Personal account management
 * - Notification preferences
 * - Security settings
 *
 * The component uses a tab-based layout to organize different setting categories
 * and provides form controls for managing lecturer-specific preferences.
 *
 * @component
 * @example
 * ```tsx
 * <LecturerSettings />
 * ```
 */
export function LecturerSettings() {
  /**
   * Settings tab configuration
   * Defines the structure and content of each settings section
   */
  const tabs: SettingsTab[] = [
    /**
     * Account Settings Tab
     * Manages personal lecturer information:
     * - Name
     * - Email
     * - Department association
     */
    {
      value: "account",
      label: "Account",
      content: (
        <Card>
          <CardHeader>
            <CardTitle>Account Settings</CardTitle>
            <CardDescription>
              Manage your account details and preferences
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
              <Input id="department" placeholder="Enter your department" />
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
     * Controls notification preferences:
     * - Assignment submissions
     * - Grade updates
     * - Department announcements
     */
    {
      value: "notifications",
      label: "Notifications",
      content: (
        <Card>
          <CardHeader>
            <CardTitle>Notification Preferences</CardTitle>
            <CardDescription>
              Configure how you receive notifications
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="assignments">Assignment Submissions</Label>
              <Switch id="assignments" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="grades">Grade Updates</Label>
              <Switch id="grades" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="announcements">Department Announcements</Label>
              <Switch id="announcements" />
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
     * Manages account security:
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
            <CardDescription>Manage your security preferences</CardDescription>
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
