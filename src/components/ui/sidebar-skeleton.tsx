import React from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar"

export function SidebarHeaderSkeleton() {
  return (
    <div className="flex items-center gap-4 p-4">
      <Skeleton className="h-8 w-8 rounded-lg" />
      <div className="flex-1 space-y-1">
        <Skeleton className="h-4 w-[140px]" />
        <Skeleton className="h-3 w-[90px]" />
      </div>
    </div>
  )
}

export function SidebarMenuSkeleton() {
  return (
    <div className="flex items-center gap-3 px-4 py-2">
      <Skeleton className="h-4 w-4" />
      <Skeleton className="h-4 w-[80%]" />
    </div>
  )
}

export function SidebarUserSkeleton() {
  return (
    <div className="flex items-center gap-3 p-4">
      <Skeleton className="h-8 w-8 rounded-full" />
      <div className="flex-1 space-y-1">
        <Skeleton className="h-4 w-[120px]" />
        <Skeleton className="h-3 w-[80px]" />
      </div>
    </div>
  )
}

export function NavSkeleton({ count = 5 }) {
  return (
    <SidebarMenu>
      {Array.from({ length: count }).map((_, index) => (
        <SidebarMenuItem key={index}>
          <SidebarMenuSkeleton />
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )
}