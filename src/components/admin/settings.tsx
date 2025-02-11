"use client";

import { BaseSettings } from "@/components/shared/base-settings";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
 * AdminSettings Component
 *
 * Provides a comprehensive settings interface for system administrators.
 * Includes tabs for:
 * - Account management (personal admin settings)
 * - System configuration (global system settings)
 * - User management (bulk actions and user policies)
 * - Security settings (authentication and access control)
 * - Integration settings (external service configurations)
 *
 * @component
 * @example
 * ```tsx
 * <AdminSettings />
 * ```
 */
export function AdminSettings() {
  /**
   * Configuration for all settings tabs
   * Each tab contains a card with related settings
   */
  const tabs: SettingsTab[] = [
    // Account Management Tab
    {
      value: "account",
      label: "Account",
      content: (
        /**
         * Administrator Account Settings Card
         * Allows administrators to manage their personal account details
         * - Name
         * - Email
         * - Administrative role level
         */
        <Card>
          <CardHeader>
            <CardTitle>Administrator Account</CardTitle>
            <CardDescription>Manage your administrator account</CardDescription>
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
              <Label htmlFor="role">Administrative Role</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="system">System Administrator</SelectItem>
                  <SelectItem value="academic">
                    Academic Administrator
                  </SelectItem>
                  <SelectItem value="security">
                    Security Administrator
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save Changes</Button>
          </CardFooter>
        </Card>
      ),
    },
    // System Configuration Tab
    {
      value: "system",
      label: "System",
      content: (
        /**
         * Global System Settings Card
         * Controls core system configuration:
         * - Academic year settings
         * - Semester management
         * - System maintenance mode
         * - Registration periods
         */
        <Card>
          <CardHeader>
            <CardTitle>System Settings</CardTitle>
            <CardDescription>Configure global system settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="academic-year">Current Academic Year</Label>
              <Input id="academic-year" placeholder="2023/2024" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="semester">Current Semester</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select semester" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fall">Fall</SelectItem>
                  <SelectItem value="spring">Spring</SelectItem>
                  <SelectItem value="summer">Summer</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="maintenance-mode">Maintenance Mode</Label>
              <Switch id="maintenance-mode" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="registration-open">Course Registration</Label>
              <Switch id="registration-open" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Update System Settings</Button>
          </CardFooter>
        </Card>
      ),
    },
    // User Management Tab
    {
      value: "users",
      label: "User Management",
      content: (
        /**
         * User Management Settings Card
         * Provides tools for managing system users:
         * - Bulk user operations (import/export)
         * - Account creation policies
         * - Email verification requirements
         * - Password policies
         */
        <Card>
          <CardHeader>
            <CardTitle>User Management</CardTitle>
            <CardDescription>
              Manage system users and permissions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Bulk User Actions</Label>
              <div className="flex space-x-2">
                <Button variant="outline">Import Users</Button>
                <Button variant="outline">Export Users</Button>
                <Button variant="outline">Bulk Update</Button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="auto-account">Automatic Account Creation</Label>
              <Switch id="auto-account" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="email-verification">
                Require Email Verification
              </Label>
              <Switch id="email-verification" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="password-policy">Enforce Password Policy</Label>
              <Switch id="password-policy" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save User Management Settings</Button>
          </CardFooter>
        </Card>
      ),
    },
    // Security Settings Tab
    {
      value: "security",
      label: "Security",
      content: (
        /**
         * Security Configuration Card
         * Manages system security settings:
         * - Session management
         * - Two-factor authentication
         * - IP restrictions
         * - Audit logging
         */
        <Card>
          <CardHeader>
            <CardTitle>Security Settings</CardTitle>
            <CardDescription>
              Configure system security settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
              <Input id="session-timeout" type="number" placeholder="30" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="two-factor">
                Require Two-Factor Authentication
              </Label>
              <Switch id="two-factor" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="ip-restriction">IP Address Restriction</Label>
              <Switch id="ip-restriction" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="audit-logging">Enable Audit Logging</Label>
              <Switch id="audit-logging" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Update Security Settings</Button>
          </CardFooter>
        </Card>
      ),
    },
    // Integration Settings Tab
    {
      value: "integrations",
      label: "Integrations",
      content: (
        /**
         * External Integration Settings Card
         * Configure third-party service integrations:
         * - Email service providers
         * - Storage solutions
         * - Authentication services
         */
        <Card>
          <CardHeader>
            <CardTitle>System Integrations</CardTitle>
            <CardDescription>
              Manage external system integrations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Email Service</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select email service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="smtp">SMTP Server</SelectItem>
                  <SelectItem value="sendgrid">SendGrid</SelectItem>
                  <SelectItem value="aws">AWS SES</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Storage Service</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select storage service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="local">Local Storage</SelectItem>
                  <SelectItem value="s3">AWS S3</SelectItem>
                  <SelectItem value="azure">Azure Blob Storage</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Authentication Service</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select auth service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="local">Local Authentication</SelectItem>
                  <SelectItem value="azure">Azure AD</SelectItem>
                  <SelectItem value="google">Google Workspace</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save Integration Settings</Button>
          </CardFooter>
        </Card>
      ),
    },
  ];

  return <BaseSettings tabs={tabs} />;
}
