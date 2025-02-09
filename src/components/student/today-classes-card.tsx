import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Clock, GraduationCap } from "lucide-react";

interface TodayClass {
  courseCode: string;
  name: string;
  startTime: string;
  endTime: string;
  room: string;
  lecturer: string;
}

interface TodayClassesCardProps extends React.HTMLAttributes<HTMLDivElement> {
  classes: TodayClass[];
}

export function TodayClassesCard({
  classes,
  className,
  ...props
}: TodayClassesCardProps) {
  return (
    <Card className={cn("col-span-3", className)} {...props}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <GraduationCap className="h-5 w-5" />
          Today&apos;s Classes
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[280px] pr-4">
          <div className="space-y-4">
            {classes.map((class_, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-lg border p-3"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded bg-primary/10">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {class_.courseCode} - {class_.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {class_.startTime} - {class_.endTime}
                  </p>
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
