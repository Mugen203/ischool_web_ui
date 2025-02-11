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
 * Interface for tab configuration
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
 * DeanSettings Component
 *
 * Provides settings interface for Dean users. Features include:
 * - Personal account management
 * - Faculty-wide configuration options
 * - Security settings
 *
 * The component uses a tab-based layout to organize different setting categories
 * and provides form controls for managing dean-specific preferences.
 *
 * @component
 * @example
 * ```tsx
 * <DeanSettings />
 * ```
 */
export function DeanSettings() {
  /**
   * Settings tab configuration
   * Defines the structure and content of each settings section
   */
  const tabs: SettingsTab[] = [
    /**
     * Account Settings Tab
     * Manages personal dean account information including:
     * - Name
     * - Email
     * - Faculty association
     * - Office location
     */
    {
      value: "account",
      label: "Account",
      content: (
        <Card>
          <CardHeader>
            <CardTitle>Account Settings</CardTitle>
            <CardDescription>Manage your dean account details</CardDescription>
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
              <Label htmlFor="faculty">Faculty</Label>
              <Input id="faculty" placeholder="Enter your faculty" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="office">Office Location</Label>
              <Input id="office" placeholder="Enter office location" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save Changes</Button>
          </CardFooter>
        </Card>
      ),
    },
    /**
     * Faculty Management Tab
     * Controls faculty-wide settings including:
     * - Department approval workflows
     * - Curriculum change management
     * - Faculty meeting notifications
     */
    {
      value: "faculty",
      label: "Faculty",
      content: (
        <Card>
          <CardHeader>
            <CardTitle>Faculty Management</CardTitle>
            <CardDescription>Configure faculty-wide settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="auto-approvals">Department Approvals</Label>
              <Switch id="auto-approvals" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="curriculum-changes">Curriculum Changes</Label>
              <Switch id="curriculum-changes" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="faculty-meetings">Faculty Meetings</Label>
              <Switch id="faculty-meetings" />
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
     * Manages account security features:
     * - Password management
     * - Two-factor authentication
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
