import {
  BarChart4,
  Users,
  BookOpen,
  MessageSquare,
  Settings,
  Shield,
  Wallet,
  Bell,
  FileText,
  Home,
  Database,
  Server,
} from "lucide-react";

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
  useSidebar,
} from "@/components/ui/sidebar";
import Link from "next/link";

export function AdminSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  return (
    <Sidebar variant="floating" collapsible="icon">
      <div className="flex items-center gap-2 px-1 py-2">
        <SidebarHeader className="flex items-center px-2">
          <Shield className="h-6 w-6 text-primary" />
        </SidebarHeader>
        {!collapsed && (
          <span className="text-sm font-medium whitespace-nowrap">
            Admin Panel
          </span>
        )}
      </div>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Dashboard">
                  <Link href="/admin">
                    <Home className="h-4 w-4" />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Analytics">
                  <Link href="/admin/analytics">
                    <BarChart4 className="h-4 w-4" />
                    <span>Analytics</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupLabel>Management</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Users">
                  <Link href="/admin/users">
                    <Users className="h-4 w-4" />
                    <span>Users</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Courses">
                  <Link href="/admin/courses">
                    <BookOpen className="h-4 w-4" />
                    <span>Courses</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Credentials">
                  <Link href="/admin/credentials">
                    <FileText className="h-4 w-4" />
                    <span>Credentials</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Support">
                  <Link href="/admin/support">
                    <MessageSquare className="h-4 w-4" />
                    <span>Support Tickets</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupLabel>Blockchain</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Tokens">
                  <Link href="/admin/tokens">
                    <Wallet className="h-4 w-4" />
                    <span>Tokens</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Blockchain Explorer">
                  <Link href="/admin/blockchain">
                    <Database className="h-4 w-4" />
                    <span>Blockchain Explorer</span>
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
            <SidebarMenuButton asChild tooltip="Notifications">
              <Link href="/admin/notifications">
                <Bell className="h-4 w-4" />
                <span>Notifications</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Settings">
              <Link href="/admin/settings">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
