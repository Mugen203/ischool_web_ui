import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const degreeRequirements = [
  { name: "Core Courses", completed: 60, total: 90 },
  { name: "Electives", completed: 15, total: 30 },
  { name: "General Education", completed: 20, total: 30 },
];

export function DegreeProgress() {
  const totalCompleted = degreeRequirements.reduce(
    (acc, req) => acc + req.completed,
    0
  );
  const totalRequired = degreeRequirements.reduce(
    (acc, req) => acc + req.total,
    0
  );
  const overallProgress = (totalCompleted / totalRequired) * 100;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Overall Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={overallProgress} className="w-full" />
          <p className="mt-2 text-sm text-gray-500">
            {Math.round(overallProgress)}% complete
          </p>
        </CardContent>
      </Card>
      {degreeRequirements.map((req) => (
        <Card key={req.name}>
          <CardHeader>
            <CardTitle>{req.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <Progress
              value={(req.completed / req.total) * 100}
              className="w-full"
            />
            <p className="mt-2 text-sm text-gray-500">
              {req.completed} / {req.total} credits completed
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
