import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScheduleEvent {
  time: string;
  title: string;
  type: "class" | "assignment" | "exam" | "meeting";
  description?: string;
}

interface ScheduleCardProps extends React.HTMLAttributes<HTMLDivElement> {
  events: ScheduleEvent[];
}

export function ScheduleCard({
  events,
  className,
  ...props
}: ScheduleCardProps) {
  return (
    <Card className={cn("col-span-3", className)} {...props}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Today&apos;s Schedule
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative space-y-3">
          {events.map((event, index) => (
            <div key={index} className="flex gap-4">
              <div className="w-14 text-sm text-muted-foreground">
                {event.time}
              </div>
              <div className="relative flex flex-col">
                <div className="absolute left-[-8px] top-[6px] h-2 w-2 rounded-full bg-primary" />
                {index !== events.length - 1 && (
                  <div className="absolute left-[-7px] top-[14px] h-full w-[1px] bg-border" />
                )}
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {event.title}
                  </p>
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
