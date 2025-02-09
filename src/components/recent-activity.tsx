import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function RecentActivity() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">
            Submitted Assignment
          </p>
          <p className="text-sm text-muted-foreground">
            You submitted the assignment for CS301
          </p>
        </div>
        <div className="ml-auto font-medium">Today</div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src="/avatars/02.png" alt="Avatar" />
          <AvatarFallback>JL</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">
            Exam Result Published
          </p>
          <p className="text-sm text-muted-foreground">
            Your result for MATH202 has been published
          </p>
        </div>
        <div className="ml-auto font-medium">Yesterday</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/03.png" alt="Avatar" />
          <AvatarFallback>IN</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">
            Course Registration
          </p>
          <p className="text-sm text-muted-foreground">
            You registered for 5 courses this semester
          </p>
        </div>
        <div className="ml-auto font-medium">2 days ago</div>
      </div>
    </div>
  );
}
