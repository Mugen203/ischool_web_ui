// Import UI components for progress bars and cards
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

/**
 * Mock data for degree requirements
 * Defines credit requirements for different course categories
 * TODO: Replace with API data in production
 */
const degreeRequirements = [
  { name: "Core Courses", completed: 60, total: 90 },
  { name: "Electives", completed: 15, total: 30 },
  { name: "General Education", completed: 20, total: 30 },
];

/**
 * DegreeProgress Component
 * Visualizes a student's progress towards degree completion
 * Shows overall progress and progress in individual requirement categories
 */
export function DegreeProgress() {
  // Calculate total completed credits across all categories
  const totalCompleted = degreeRequirements.reduce(
    (acc, req) => acc + req.completed,
    0
  );

  // Calculate total required credits across all categories
  const totalRequired = degreeRequirements.reduce(
    (acc, req) => acc + req.total,
    0
  );

  // Calculate overall progress percentage
  const overallProgress = (totalCompleted / totalRequired) * 100;

  return (
    <div className="space-y-6 shadow-lg">
      {/* Overall Progress Card */}
      <Card>
        <CardHeader>
          <CardTitle>Overall Progress</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Overall progress bar */}
          <Progress value={overallProgress} className="w-full" />
          {/* Progress percentage display */}
          <p className="mt-2 text-sm text-gray-500">
            {Math.round(overallProgress)}% complete
          </p>
        </CardContent>
      </Card>

      {/* Individual Requirement Category Cards */}
      {degreeRequirements.map((req) => (
        <Card key={req.name}>
          <CardHeader>
            <CardTitle>{req.name}</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Category-specific progress bar */}
            <Progress
              value={(req.completed / req.total) * 100}
              className="w-full"
            />
            {/* Category credit completion status */}
            <p className="mt-2 text-sm text-gray-500">
              {req.completed} / {req.total} credits completed
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
