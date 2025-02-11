import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Clock, GraduationCap } from "lucide-react";

/**
 * Interface representing a single class session for the day
 */
interface TodayClass {
  /** Course identifier (e.g., "MATH201") */
  courseCode: string;
  /** Full course name */
  name: string;
  /** Class start time in HH:MM format */
  startTime: string;
  /** Class end time in HH:MM format */
  endTime: string;
  /** Room/location identifier */
  room: string;
  /** Name of the lecturer */
  lecturer: string;
}

/**
 * Props interface for TodayClassesCard component
 * Extends HTMLDivElement props for component customization
 */
interface TodayClassesCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Array of today's class sessions */
  classes: TodayClass[];
}

/**
 * TodayClassesCard Component
 *
 * Displays a card containing the student's class schedule for the current day.
 * Features include:
 * - Scrollable list of classes
 * - Class timing information
 * - Room and lecturer details
 * - Visual indicators for each class
 *
 * @component
 * @param {Object} props - Component props
 * @param {TodayClass[]} props.classes - Array of today's classes
 * @param {string} [props.className] - Additional CSS classes
 *
 * @example
 * ```tsx
 * const todayClasses = [
 *   {
 *     courseCode: "MATH201",
 *     name: "Calculus II",
 *     startTime: "09:00",
 *     endTime: "10:30",
 *     room: "A101",
 *     lecturer: "Dr. Smith"
 *   }
 * ];
 *
 * <TodayClassesCard classes={todayClasses} />
 * ```
 */
export function TodayClassesCard({
  classes,
  className,
  ...props
}: TodayClassesCardProps) {
  return (
    // Main card container with responsive column span
    <Card className={cn("col-span-3", className)} {...props}>
      {/* Card header with title and icon */}
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <GraduationCap className="h-5 w-5" />
          Today&apos;s Classes
        </CardTitle>
      </CardHeader>

      {/* Scrollable content area for class list */}
      <CardContent>
        <ScrollArea className="h-[280px] pr-4">
          <div className="space-y-4">
            {/* Map through classes array to render each class card */}
            {classes.map((class_, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-lg border p-3"
              >
                {/* Class time icon container */}
                <div className="flex h-9 w-9 items-center justify-center rounded bg-primary/10">
                  <Clock className="h-5 w-5 text-primary" />
                </div>

                {/* Class details container */}
                <div className="flex-1 space-y-1">
                  {/* Course code and name */}
                  <p className="text-sm font-medium leading-none">
                    {class_.courseCode} - {class_.name}
                  </p>
                  {/* Class timing */}
                  <p className="text-sm text-muted-foreground">
                    {class_.startTime} - {class_.endTime}
                  </p>
                  {/* Room and lecturer information */}
                  <p className="text-xs text-muted-foreground">
                    Room {class_.room} • {class_.lecturer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
