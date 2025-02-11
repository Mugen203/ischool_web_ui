"use client";

import { BaseSettings } from "@/components/shared/base-settings";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
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
 * StudentSettings Component
 *
 * Provides a comprehensive settings interface for student users.
 * Features include:
 * - Personal account management
 * - Academic preferences
 * - Notification settings
 * - Privacy controls
 * - Security configurations
 *
 * The component uses a tab-based layout to organize different setting categories
 * and provides form controls for managing student-specific preferences.
 *
 * @component
 * @example
 * ```tsx
 * <StudentSettings />
 * ```
 */
export function StudentSettings() {
  /**
   * Settings tab configuration
   * Defines the structure and content of each settings section
   */
  const tabs: SettingsTab[] = [
    /**
     * Account Settings Tab
     * Manages personal student information including:
     * - Full name and preferred name
     * - Student ID and email
     * - Program and year of study
     * - Personal biography
     */
    {
      value: "account",
      label: "Account",
      content: (
        <Card>
          <CardHeader>
            <CardTitle>Account Settings</CardTitle>
            <CardDescription>
              Manage your student account details
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter your full name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="preferred-name">Preferred Name</Label>
                <Input id="preferred-name" placeholder="Enter preferred name" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="student-id">Student ID</Label>
                <Input id="student-id" placeholder="Enter your student ID" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="program">Program</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select program" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cs">Computer Science</SelectItem>
                    <SelectItem value="eng">Engineering</SelectItem>
                    <SelectItem value="bus">Business</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="year">Year of Study</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">First Year</SelectItem>
                    <SelectItem value="2">Second Year</SelectItem>
                    <SelectItem value="3">Third Year</SelectItem>
                    <SelectItem value="4">Fourth Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Biography</Label>
              <Textarea id="bio" placeholder="Tell us about yourself" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save Changes</Button>
          </CardFooter>
        </Card>
      ),
    },

    /**
     * Academic Settings Tab
     * Controls academic preferences:
     * - Major and minor selection
     * - Academic advisor information
     * - Honors program participation
     * - Research interests
     */
    {
      value: "academic",
      label: "Academic",
      content: (
        <Card>
          <CardHeader>
            <CardTitle>Academic Preferences</CardTitle>
            <CardDescription>Configure your academic settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="major">Major</Label>
                <Input id="major" placeholder="Enter your major" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="minor">Minor (Optional)</Label>
                <Input id="minor" placeholder="Enter your minor" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="advisor">Academic Advisor</Label>
              <Input id="advisor" placeholder="Enter advisor's name" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="honors">Honors Program</Label>
              <Switch id="honors" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="research">Research Interest Updates</Label>
              <Switch id="research" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Update Academic Settings</Button>
          </CardFooter>
        </Card>
      ),
    },

    /**
     * Notification Settings Tab
     * Manages notification preferences for:
     * - Academic updates (grades, assignments, courses)
     * - Campus life (events, clubs, housing)
     * - Administrative notices (financial, registration, deadlines)
     */
    {
      value: "notifications",
      label: "Notifications",
      content: (
        <Card>
          <CardHeader>
            <CardTitle>Notification Settings</CardTitle>
            <CardDescription>
              Manage your notification preferences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-medium">Academic Notifications</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="grades">Grade Updates</Label>
                  <Switch id="grades" />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="assignments">Assignment Deadlines</Label>
                  <Switch id="assignments" />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="courses">Course Announcements</Label>
                  <Switch id="courses" />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium">Campus Life Notifications</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="events">Campus Events</Label>
                  <Switch id="events" />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="clubs">Club Activities</Label>
                  <Switch id="clubs" />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="housing">Housing Updates</Label>
                  <Switch id="housing" />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium">Administrative Notifications</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="financial">Financial Updates</Label>
                  <Switch id="financial" />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="registration">Registration Periods</Label>
                  <Switch id="registration" />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="deadlines">Important Deadlines</Label>
                  <Switch id="deadlines" />
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save Notification Preferences</Button>
          </CardFooter>
        </Card>
      ),
    },

    /**
     * Privacy Settings Tab
     * Controls privacy preferences:
     * - Profile visibility settings
     * - Contact information sharing
     * - Data usage preferences
     */
    {
      value: "privacy",
      label: "Privacy",
      content: (
        <Card>
          <CardHeader>
            <CardTitle>Privacy Settings</CardTitle>
            <CardDescription>Control your privacy preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <h3 className="font-medium">Profile Visibility</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="show-email">Show Email to Others</Label>
                  <Switch id="show-email" />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="show-phone">Show Phone Number</Label>
                  <Switch id="show-phone" />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="show-profile">Public Profile</Label>
                  <Switch id="show-profile" />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium">Data Usage</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="analytics">Usage Analytics</Label>
                  <Switch id="analytics" />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="personalization">Personalized Content</Label>
                  <Switch id="personalization" />
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button>Update Privacy Settings</Button>
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
