import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function TeamSwitcher() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-300 bg-white px-2 py-1 text-sm text-gray-600 hover:bg-gray-100">
          Team A
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>Team A</DropdownMenuItem>
        <DropdownMenuItem>Team B</DropdownMenuItem>
        <DropdownMenuItem>Team C</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
