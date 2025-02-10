// Import UI components and utilities
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Interface defining the structure of a schedule event
 * Used to display individual events in the timeline
 */
interface ScheduleEvent {
  time: string; // Event time (e.g., "09:00 AM")
  title: string; // Event title/name
  type: "class" | "assignment" | "exam" | "meeting"; // Event category
  description?: string; // Optional additional details
}

/**
 * Props interface for the ScheduleCard component
 * Extends standard HTML div element props
 */
interface ScheduleCardProps extends React.HTMLAttributes<HTMLDivElement> {
  events: ScheduleEvent[]; // Array of events to display
}

/**
 * ScheduleCard Component
 * Displays a timeline of daily events in a card format
 *
 * @param {ScheduleEvent[]} events - Array of schedule events to display
 * @param {string} className - Additional CSS classes
 * @param {Object} props - Additional HTML div props
 */
export function ScheduleCard({
  events,
  className,
  ...props
}: ScheduleCardProps) {
  return (
    // Main card container with responsive column span
    <Card className={cn("col-span-3", className)} {...props}>
      {/* Card header with title and icon */}
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Today&apos;s Schedule
        </CardTitle>
      </CardHeader>

      {/* Card content containing the timeline */}
      <CardContent>
        <div className="relative space-y-3">
          {/* Map through events to create timeline entries */}
          {events.map((event, index) => (
            <div key={index} className="flex gap-4">
              {/* Event time display */}
              <div className="w-14 text-sm text-muted-foreground">
                {event.time}
              </div>

              {/* Event content with timeline decorations */}
              <div className="relative flex flex-col">
                {/* Timeline dot */}
                <div className="absolute left-[-8px] top-[6px] h-2 w-2 rounded-full bg-primary" />
                {/* Timeline connecting line (except for last event) */}
                {index !== events.length - 1 && (
                  <div className="absolute left-[-7px] top-[14px] h-full w-[1px] bg-border" />
                )}

                {/* Event details */}
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {event.title}
                  </p>
                  {/* Optional event description */}
                  {event.description && (
                    <p className="text-sm text-muted-foreground">
                      {event.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
