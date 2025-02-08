import { LucideIcon } from "lucide-react"

export interface NavItem {
    title: string
    url?: string
    icon?: React.ComponentType<any>
    items?: NavItem[]
    roles?: string[]
}

export interface User {
    name: string
    email: string
    role: string
    avatar?: string
}