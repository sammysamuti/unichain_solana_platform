"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ModeToggle } from "@/components/mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, Wallet, Search, MessageSquare } from "lucide-react";
import api from "@/lib/axios";

interface UserInfo {
  name: string;
  email: string;
}

export function TopNav() {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState<UserInfo>({ name: "Student", email: "student@unichain.eth" });

  useEffect(() => {
    const fetchUserInfo = async () => {
      const userId = localStorage.getItem("userId");
      if (!userId) return;

      try {
        const response = await api.get(`api/students/${userId}`);
        setUserInfo({
          name: response.data.name || "Student",
          email: response.data.email || "student@unichain.eth"
        });
      } catch (err) {
        console.error("Failed to fetch user info:", err);
      }
    };

    fetchUserInfo();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("isAdmin");
    router.push("/login");
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map(part => part[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4">
        <SidebarTrigger className="mr-2" />
        <div className="flex items-center">
          <Link href="/user" className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-bold gradient-text">UniChain</span>
          </Link>
        </div>

        <div className="ml-auto flex items-center gap-4">
          <Button variant="outline" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-white">
              3
            </span>
          </Button>
          <Button variant="outline" className="gap-2">
            <Wallet className="h-4 w-4" />
            <span className="hidden sm:inline-block">Connect Wallet</span>
          </Button>
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src="/placeholder.svg?height=32&width=32"
                    alt="@user"
                  />
                  <AvatarFallback>{getInitials(userInfo.name)}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">{userInfo.name}</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    {userInfo.email}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/user">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/user/claims">My Claims</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
