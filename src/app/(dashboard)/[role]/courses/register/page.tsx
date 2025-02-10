"use client";

import { useState } from "react";
// Import UI components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// Import course-related components
import { RegisteredCourses } from "@/components/role/student/courses/registered-courses";
import { DegreeProgress } from "@/components/role/student/courses/degree-progress";
import { CourseRegistration } from "@/components/role/student/courses/course-registration";
// Import alert components
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

/**
 * Course Registration Page Component
 * Provides interface for students to:
 * - View currently registered courses
 * - Track degree progress
 * - Register for new courses when registration is open
 */
export default function CourseRegistrationPage() {
  // State to track if course registration period is open
  // TODO: Replace with actual API call to check registration status
  const [registrationOpen, setRegistrationOpen] = useState(true);

  return (
    <div className="container mx-auto py-10 shadow-lg">
      {/* Page Header */}
      <h1 className="text-3xl font-bold mb-6">Course Registration</h1>

      {/* Registration Closed Alert - Only shown when registration is closed */}
      {!registrationOpen && (
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Registration Closed</AlertTitle>
          <AlertDescription>
            The course registration window is currently closed. Please check
            back during the designated registration period.
          </AlertDescription>
        </Alert>
      )}

      {/* Main Content Tabs */}
      <Tabs defaultValue="registered">
        {/* Tab Navigation - Equal width columns */}
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="registered">Registered Courses</TabsTrigger>
          <TabsTrigger value="progress">Degree Progress</TabsTrigger>
          {/* Register tab is disabled when registration is closed */}
          <TabsTrigger value="register" disabled={!registrationOpen}>
            Register Courses
          </TabsTrigger>
        </TabsList>

        {/* Registered Courses Tab Content */}
        <TabsContent value="registered">
          <Card>
            <CardHeader>
              <CardTitle>Registered Courses</CardTitle>
              <CardDescription>
                Review your currently registered courses for this semester.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RegisteredCourses />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Degree Progress Tab Content */}
        <TabsContent value="progress">
          <Card>
            <CardHeader>
              <CardTitle>Degree Progress</CardTitle>
              <CardDescription>
                Track your progress towards graduation requirements.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DegreeProgress />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Course Registration Tab Content */}
        <TabsContent value="register">
          <Card>
            <CardHeader>
              <CardTitle>Course Registration</CardTitle>
              <CardDescription>
                Add or drop courses for the current semester.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CourseRegistration />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
