"use client";

import {
  Award,
  Brain,
  FileText,
  Home,
  Search,
  Settings,
  Users,
  Wallet,
  BookOpen,
  MessageSquare,
  MapPin,
  Calendar,
  Heart,
  Compass,
  FileQuestion,
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarHeader className="pb-0">
        <div className="flex items-center gap-2 px-1 py-2">
          {!collapsed && (
            <div className="flex flex-col">
              <span className="text-sm font-medium">Student</span>
              <span className="text-xs text-muted-foreground">
                Addis Ababa University
              </span>
            </div>
          )}
        </div>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Overview">
                  <Link href="/user">
                    <Home className="h-4 w-4" />
                    <span>Overview</span>
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

        <SidebarGroup>
          <SidebarGroupLabel>Academic</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="My Credentials">
                  <Link href="/credentials">
                    <Award className="h-4 w-4" />
                    <span>My Credentials</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              {/* <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Transcripts">
                  <Link href="/transcripts">
                    <FileText className="h-4 w-4" />
                    <span>Transcripts</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem> */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Courses">
                  <Link href="/courses">
                    <BookOpen className="h-4 w-4" />
                    <span>Courses</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Mental Health</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
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
                <SidebarMenuButton asChild tooltip="Help Center">
                  <Link href="/help">
                    <FileQuestion className="h-4 w-4" />
                    <span>Help Center</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Support Groups">
                  <Link href="/support-groups">
                    <Users className="h-4 w-4" />
                    <span>Support Groups</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              {/* <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Counseling">
                  <Link href="/counseling">
                    <Brain className="h-4 w-4" />
                    <span>Counseling</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem> */}
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

        <SidebarGroup>
          <SidebarGroupLabel>Lost & Found</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Report Lost Item">
                  <Link href="/lost-items">
                    <Search className="h-4 w-4" />
                    <span>Report Lost Item</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Found Items">
                  <Link href="/found-items">
                    <MapPin className="h-4 w-4" />
                    <span>Found Items</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
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

        {collapsed ? (
          <SidebarMenuButton tooltip="Disconnect">
            <Wallet className="h-6 w-6 pl-0" />
          </SidebarMenuButton>
        ) : (
          <div className="p-4">
            <Button className="w-full" variant="outline">
              <Wallet className="mr-2 h-4 w-4" />
              Disconnect
            </Button>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
