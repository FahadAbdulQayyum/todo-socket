import { Calendar, Home, Inbox, Search, Settings, CircleGauge, LayoutDashboard, UserRoundSearch, FileUser, MapPinned, ChartNoAxesGantt } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        title: "Users",
        url: "#",
        icon: UserRoundSearch,
    },
    {
        title: "Agents",
        url: "#",
        icon: FileUser,
    },
    {
        title: "Locations",
        url: "#",
        icon: MapPinned,
    },
    {
        title: "Services",
        url: "#",
        icon: ChartNoAxesGantt,
    }
]

export function AppSidebar() {
    return (
        <Sidebar
            className="mt-20"
        >
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
















// import {
//     Sidebar,
//     SidebarContent,
//     SidebarFooter,
//     SidebarGroup,
//     SidebarHeader,
// } from "@/components/ui/sidebar"

// export function AppSidebar() {
//     return (
//         <Sidebar>
//             <SidebarHeader />
//             <SidebarContent>
//                 <SidebarGroup />
//                 <SidebarGroup />
//             </SidebarContent>
//             <SidebarFooter />
//         </Sidebar>
//     )
// }
