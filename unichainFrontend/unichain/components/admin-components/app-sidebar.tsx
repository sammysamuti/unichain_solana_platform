import {
  BookOpen,
  Calendar,
  Compass,
  FileQuestion,
  Heart,
  Home,
  MessageSquare,
  Settings,
  Sparkles,
  Wallet,
  GraduationCap,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import Link from "next/link"

export function AppSidebar() {
  return (
    <Sidebar className="border-r"  variant="floating" collapsible="icon">
      <SidebarHeader className="flex h-14 items-center px-4">
        <div className="flex items-center gap-2 text-xl font-bold">
          <Sparkles className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">UniChain</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Home">
                  <Link href="/admin">
                    <Home className="h-4 w-4" />
                    <span>Home</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Calendar">
                  <Link href="/calendar">
                    <Calendar className="h-4 w-4" />
                    <span>Calendar</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Courses">
                  <Link href="/courses">
                    <GraduationCap className="h-4 w-4" />
                    <span>Courses</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="My Wallet">
                  <Link href="/my-wallet">
                    <Wallet className="h-4 w-4" />
                    <span>My Wallet</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupLabel>Services</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Academic Credentials">
                  <Link href="/academic-credentials">
                    <BookOpen className="h-4 w-4" />
                    <span>Academic Credentials</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Mental Health">
                  <Link href="/mental-health">
                    <Heart className="h-4 w-4" />
                    <span>Mental Health</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Lost & Found">
                  <Link href="/lost-found">
                    <Compass className="h-4 w-4" />
                    <span>Lost & Found</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Anonymous Chat">
                  <Link href="/anonymous-chat">
                    <MessageSquare className="h-4 w-4" />
                    <span>Anonymous Chat</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupLabel>Support</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Help Center">
                  <Link href="/help">
                    <FileQuestion className="h-4 w-4" />
                    <span>Help Center</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Settings">
              <Link href="/settings">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

