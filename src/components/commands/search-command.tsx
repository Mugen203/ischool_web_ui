"use client";

// Import React and icon components
import * as React from "react";
import {
  Calculator,
  Calendar,
  CreditCard,
  Search,
  Settings,
  Smile,
  User,
} from "lucide-react";

// Import command palette and button components
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

/**
 * SearchCommand Component
 * Provides a command palette interface for quick navigation and actions
 * Triggered by clicking the search button or using Cmd/Ctrl + K shortcut
 */
export function SearchCommand() {
  // Client-side only state management
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = React.useState(false);

  // Handle initial mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  // Keyboard shortcut handler
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  // Prevent hydration issues by not rendering until mounted
  if (!mounted) return null;

  return (
    <>
      <Button
        variant="outline"
        className="relative h-9 w-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2"
        onClick={() => setOpen(true)}
      >
        <Search className="h-4 w-4 xl:mr-2" />
        {/* Search text - Only visible on larger screens */}
        <span className="hidden xl:inline-flex">Search...</span>
        {/* Keyboard shortcut display */}
        <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 xl:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>

      {/* Only render dialog when mounted */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        {/* Search Input Field */}
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          {/* Empty State Message */}
          <CommandEmpty>No results found.</CommandEmpty>

          {/* Quick Actions Group */}
          <CommandGroup heading="Suggestions">
            {/* Calendar Action */}
            <CommandItem>
              <Calendar className="mr-2 h-4 w-4" />
              <span>Calendar</span>
            </CommandItem>
            {/* Emoji Search Action */}
            <CommandItem>
              <Smile className="mr-2 h-4 w-4" />
              <span>Search Emoji</span>
            </CommandItem>
            {/* Calculator Action */}
            <CommandItem>
              <Calculator className="mr-2 h-4 w-4" />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          {/* Settings Group */}
          <CommandGroup heading="Settings">
            {/* Profile Settings */}
            <CommandItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            {/* Billing Settings */}
            <CommandItem>
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            {/* General Settings */}
            <CommandItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
