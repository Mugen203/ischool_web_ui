// components/nav-admin.tsx
"use client"
import { useCallback } from "react"
import {
    Home,
    Building,
    Users,
    UserCog,
    UserCheck,
    UserCircle2,
    Palette,
    BookOpen,
    Building2,
    Award,
    Calendar,
    Library,
    GraduationCap,
    FileSignature,
    FileText,
    FileStack,
    Users2,
    MonitorCheck,
    Database,
    ChevronRight,
    Activity,
    UserPlus,
    UserMinus,
    FileEdit,
    FilePlus,
    FileMinus,
    BookCheck,
    ListChecks,
} from "lucide-react"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuAction,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    useSidebar,
} from "@/components/ui/sidebar"
import type { NavItem } from "@/types/navigation"

// Organize navigation items by category
const adminNavGroups: Record<string, NavItem[]> = {
    main: [
        {
            title: "Dashboard",
            url: "/admin",
            icon: Home,
            roles: ["Administrator"],
        },
        {
            title: "Registry",
            url: "/admin/registry",
            icon: Building,
            roles: ["Administrator"],
            items: [
                { title: "View Registry", url: "/admin/registry", icon: Building, roles: ["Administrator"] },
                { title: "Edit Registry", url: "/admin/registry/edit", icon: FileEdit, roles: ["Administrator"] },
            ],
        },
    ],
    userManagement: [
        {
            title: "Students",
            url: "/admin/students",
            icon: Users,
            items: [
                { title: "View Students", url: "/admin/students", icon: Users, roles: ["Administrator"]  },
                { title: "Add Student", url: "/admin/students/add", icon: UserPlus, roles: ["Administrator"]  },
                { title: "Edit Student", url: "/admin/students/edit", icon: FileEdit, roles: ["Administrator"]},
                { title: "Remove Student", url: "/admin/students/remove", icon: UserMinus, roles: ["Administrator"] },
            ],
        },
        {
            title: "Lecturers",
            url: "/admin/lecturers",
            icon: UserCog,
            items: [
                { title: "View Lecturers", url: "/admin/lecturers", icon: UserCog, roles: ["Administrator"] },
                { title: "Add Lecturer", url: "/admin/lecturers/add", icon: UserPlus, roles: ["Administrator"]},
                { title: "Edit Lecturer", url: "/admin/lecturers/edit", icon: FileEdit, roles: ["Administrator"] },
                { title: "Remove Lecturer", url: "/admin/lecturers/remove", icon: UserMinus, roles: ["Administrator"] },
            ],
        },
        {
            title: "Grademasters",
            url: "/admin/grademasters",
            icon: UserCheck,
            items: [
                { title: "View Grademasters", url: "/admin/grademasters", icon: UserCheck, roles: ["Administrator"] },
                { title: "Add Grademaster", url: "/admin/grademasters/add", icon: UserPlus, roles: ["Administrator"]},
                { title: "Edit Grademaster", url: "/admin/grademasters/edit", icon: FileEdit, roles: ["Administrator"] },
                { title: "Remove Grademaster", url: "/admin/grademasters/remove", icon: UserMinus, roles: ["Administrator"] },
            ],
        },
        {
            title: "Deans",
            url: "/admin/deans",
            icon: UserCheck,
            items: [
                { title: "View Deans", url: "/admin/deans", icon: UserCheck, roles: ["Administrator"] },
                { title: "Add Dean", url: "/admin/deans/add", icon: UserPlus, roles: ["Administrator"]},
                { title: "Edit Dean", url: "/admin/deans/edit", icon: FileEdit, roles: ["Administrator"] },
                { title: "Remove Dean", url: "/admin/deans/remove", icon: UserMinus, roles: ["Administrator"] },
            ]
        },
        {
            title: "HODs",
            url: "/admin/hods",
            icon: UserCheck,
            items: [
                { title: "View HODs", url: "/admin/hods", icon: UserCheck, roles: ["Administrator"] },
                { title: "Add HOD", url: "/admin/hods/add", icon: UserPlus, roles: ["Administrator"]},
                { title: "Edit HOD", url: "/admin/hods/edit", icon: FileEdit, roles: ["Administrator"] },
                { title: "Remove HOD", url: "/admin/hods/remove", icon: UserMinus, roles: ["Administrator"] },
            ]
        },
          {
            title: "Administrators",
            url: "/admin/administrators",
            icon: UserCircle2,
            items: [
                { title: "View Administrators", url: "/admin/administrators", icon: UserCircle2, roles: ["Administrator"] },
                { title: "Add Administrator", url: "/admin/administrators/add", icon: UserPlus, roles: ["Administrator"] },
                { title: "Edit Administrator", url: "/admin/administrators/edit", icon: FileEdit, roles: ["Administrator"] },
                { title: "Remove Administrator", url: "/admin/administrators/remove", icon: UserMinus, roles: ["Administrator"] },

            ]
        },
    ],
    academic: [
        {
            title: "Courses",
            url: "/admin/courses",
            icon: BookOpen,
            items: [
                { title: "View Courses", url: "/admin/courses", icon:BookOpen, roles: ["Administrator"] },
                { title: "Add Course", url: "/admin/courses/add", icon: BookCheck, roles: ["Administrator"] },
                { title: "Edit Course", url: "/admin/courses/edit", icon: FileEdit, roles: ["Administrator"] },
                { title: "Remove Course", url: "/admin/courses/remove", icon: FileMinus, roles: ["Administrator"] },
            ],
        },
        {
            title: "Programs/Degrees",
            url: "/admin/programs",
            icon: Award,
            items: [
                { title: "View Programs", url: "/admin/programs", icon: Award, roles: ["Administrator"] },
                { title: "Add Program", url: "/admin/programs/add", icon: FilePlus, roles: ["Administrator"] },
                { title: "Edit Program", url: "/admin/programs/edit", icon: FileEdit, roles: ["Administrator"] },
                 { title: "Remove Program", url: "/admin/programs/remove", icon: FileMinus, roles: ["Administrator"] },
            ],
        },
        {
            title: "Class Enrollment",
            url: "/admin/class-enrollment",
            icon: ListChecks,
            items: [
                {title: "View Class Enrollment", url: "/admin/class-enrollment", icon: ListChecks, roles: ["Administrator"]},
                 { title: "Edit Class Enrollment", url: "/admin/class-enrollment/edit", icon: FileEdit, roles: ["Administrator"] },
            ]
        },
         {
            title: "Attendance",
            url: "/admin/attendance",
            icon: Calendar,
            roles: ["Administrator"],
            items: [
                {title: "View Class Sessions", url: "/admin/attendance/sessions", icon: Calendar, roles: ["Administrator"]},
            ]
        },
    ],
    facilities: [
        {
            title: "Classrooms",
            url: "/admin/classrooms",
            icon: Palette,
            items: [
                { title: "View Classrooms", url: "/admin/classrooms", icon: Palette, roles: ["Administrator"]},
                { title: "Add Classroom", url: "/admin/classrooms/add", icon: FilePlus, roles: ["Administrator"]},
                { title: "Edit Classroom", url: "/admin/classrooms/edit", icon: FileEdit, roles: ["Administrator"]},
                { title: "Remove Classroom", url: "/admin/classrooms/remove", icon: FileMinus, roles: ["Administrator"]},
                { title: "Schedules", url: "/admin/classrooms/schedules", icon: Calendar, roles: ["Administrator"] },
            ],
        },
        {
            title: "Library",
            url: "/admin/library",
            icon: Library,
            roles: ["Administrator"],
            items: [
                { title: "View Library", url: "/admin/library", roles: ["Administrator"] },
            ],
        },
    ],
    system: [
        {
            title: "User Management",
            url: "/admin/users",
            icon: Users2,
            items: [
                { title: "Add User", url: "/admin/users/add", icon: UserPlus },
                { title: "Manage Users", url: "/admin/users/manage", icon: UserCog },
                { title: "Remove User", url: "/admin/users/remove", icon: UserMinus}
            ],
        },
        {
            title: "System Logs",
            url: "/admin/logs",
            icon: FileText,
        },
        {
            title: "System Monitoring",
            url: "/admin/monitoring",
            icon: MonitorCheck,
        },
        {
            title: "Database Management",
            url: "/admin/database",
            icon: Database,
        },
    ],
}

export function NavAdmin() {
    const { state } = useSidebar()

    const renderMenuItem = useCallback((item: NavItem) => {
        const hasSubItems = item.items && item.items.length > 0

        return (
            <Collapsible key={item.title} asChild>
                <SidebarMenuItem>
                    <SidebarMenuButton
                        asChild
                        tooltip={state ? item.title : undefined}
                    >
                        <a href={item.url}>
                            {item.icon && <item.icon className="mr-2 h-4 w-4" />}
                            {state && <span>{item.title}</span>}
                        </a>
                    </SidebarMenuButton>

                    {hasSubItems && (
                        <>
                            <CollapsibleTrigger asChild>
                                <SidebarMenuAction 
                                    className="transition-transform duration-200 data-[state=open]:rotate-90"
                                >
                                    <ChevronRight className="h-4 w-4" />
                                    <span className="sr-only">Toggle</span>
                                </SidebarMenuAction>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                                <SidebarMenuSub>
                                    {item.items?.map((subItem) => (
                                        <SidebarMenuSubItem key={subItem.title}>
                                            <SidebarMenuSubButton asChild>
                                                <a href={subItem.url}>
                                                    {subItem.icon && (
                                                        <subItem.icon className="mr-2 h-4 w-4" />
                                                    )}
                                                    <span>{subItem.title}</span>
                                                </a>
                                            </SidebarMenuSubButton>
                                        </SidebarMenuSubItem>
                                    ))}
                                </SidebarMenuSub>
                            </CollapsibleContent>
                        </>
                    )}
                </SidebarMenuItem>
            </Collapsible>
        )
    }, [state])

    return (
        <>
            <SidebarGroup>
                <SidebarGroupLabel>Main</SidebarGroupLabel>
                <SidebarMenu>
                    {adminNavGroups.main.map(renderMenuItem)}
                </SidebarMenu>
            </SidebarGroup>

            <SidebarGroup>
                <SidebarGroupLabel>User Management</SidebarGroupLabel>
                <SidebarMenu>
                    {adminNavGroups.userManagement.map(renderMenuItem)}
                </SidebarMenu>
            </SidebarGroup>

            <SidebarGroup>
                <SidebarGroupLabel>Academic</SidebarGroupLabel>
                <SidebarMenu>
                    {adminNavGroups.academic.map(renderMenuItem)}
                </SidebarMenu>
            </SidebarGroup>

            <SidebarGroup>
                <SidebarGroupLabel>Facilities</SidebarGroupLabel>
                <SidebarMenu>
                    {adminNavGroups.facilities.map(renderMenuItem)}
                </SidebarMenu>
            </SidebarGroup>

            <SidebarGroup>
                <SidebarGroupLabel>System</SidebarGroupLabel>
                <SidebarMenu>
                    {adminNavGroups.system.map(renderMenuItem)}
                </SidebarMenu>
            </SidebarGroup>
        </>
    )
}