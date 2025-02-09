"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RegisteredCourses } from "@/components/student/courses/registered-courses";
import { DegreeProgress } from "@/components/student/courses/degree-progress";
import { CourseRegistration } from "@/components/student/courses/course-registration";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

export default function CourseRegistrationPage() {
  const [registrationOpen, setRegistrationOpen] = useState(true); // This should come from your backend

  return (
    <div className="container mx-auto py-10 shadow-lg">
      <h1 className="text-3xl font-bold mb-6">Course Registration</h1>

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

      <Tabs defaultValue="registered">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="registered">Registered Courses</TabsTrigger>
          <TabsTrigger value="progress">Degree Progress</TabsTrigger>
          <TabsTrigger value="register" disabled={!registrationOpen}>
            Register Courses
          </TabsTrigger>
        </TabsList>
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
