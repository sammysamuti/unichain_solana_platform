'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  BookOpen,
  MessageSquare,
  Wallet,
  AlertTriangle,
  CheckCircle,
  BarChart4,
  Activity,
  Shield,
  Search,
} from "lucide-react"
import { useEffect, useState } from "react"
import api from "@/lib/axios"

interface Claim {
  id: string;
  title: string;
  status: string;
  createdAt: string;
  studentName: string;
}

export default function AdminDashboardPage() {
  const [claims, setClaims] = useState<Claim[]>([]);
  const [claimsLoading, setClaimsLoading] = useState(true);

  useEffect(() => {
    const fetchClaims = async () => {
      try {
        const response = await api.get("/api/auth/claims");
        setClaims(response.data || []);
      } catch (err) {
        console.error("Failed to fetch claims:", err);
        setClaims([]);
      } finally {
        setClaimsLoading(false);
      }
    };

    fetchClaims();
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Admin Dashboard</h1>
        <p className="text-muted-foreground">Welcome to the UniChain administration panel</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,853</div>
            <p className="text-xs text-muted-foreground">+18% from last month</p>
            <div className="mt-4 h-1 w-full bg-muted">
              <div className="h-1 w-[75%] bg-primary"></div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Claims</CardTitle>
            <Search className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{claims.length}</div>
            <p className="text-xs text-muted-foreground">
              {claimsLoading ? "Loading..." : `${claims.filter(c => c.status === "PENDING").length} pending`}
            </p>
            <div className="mt-4 h-1 w-full bg-muted">
              <div className="h-1 w-[65%] bg-primary"></div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Support Tickets</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">-12% from last week</p>
            <div className="mt-4 h-1 w-full bg-muted">
              <div className="h-1 w-[25%] bg-primary"></div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">System Health</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98.7%</div>
            <p className="text-xs text-muted-foreground">+0.2% from yesterday</p>
            <div className="mt-4 h-1 w-full bg-muted">
              <div className="h-1 w-[98%] bg-green-500"></div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="claims">Claims</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-7">
            <Card className="md:col-span-4">
              <CardHeader>
                <CardTitle>Recent User Registrations</CardTitle>
                <CardDescription>New users who joined in the last 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: "Alex Johnson",
                      email: "alex.johnson@university.edu",
                      type: "Student",
                      department: "Computer Science",
                      joined: "2 days ago",
                    },
                    {
                      name: "Sarah Williams",
                      email: "s.williams@university.edu",
                      type: "Faculty",
                      department: "Mathematics",
                      joined: "3 days ago",
                    },
                    {
                      name: "Michael Chen",
                      email: "m.chen@university.edu",
                      type: "Student",
                      department: "Engineering",
                      joined: "4 days ago",
                    },
                    {
                      name: "Emily Davis",
                      email: "e.davis@university.edu",
                      type: "Staff",
                      department: "Administration",
                      joined: "5 days ago",
                    },
                    {
                      name: "James Wilson",
                      email: "j.wilson@university.edu",
                      type: "Student",
                      department: "Business",
                      joined: "6 days ago",
                    },
                  ].map((user, i) => (
                    <div key={i} className="flex items-center justify-between rounded-lg border p-3">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-9 w-9">
                          <AvatarFallback>
                            {user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-sm text-muted-foreground">{user.email}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant={
                            user.type === "Student" ? "default" : user.type === "Faculty" ? "secondary" : "outline"
                          }
                        >
                          {user.type}
                        </Badge>
                        <div className="text-sm text-muted-foreground">{user.joined}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-center">
                  <Button variant="outline">View All Users</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-3">
              <CardHeader>
                <CardTitle>System Alerts</CardTitle>
                <CardDescription>Recent system notifications and alerts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "System Maintenance",
                      description: "Scheduled maintenance on March 15, 2023 at 2:00 AM UTC",
                      type: "info",
                      time: "2 hours ago",
                    },
                    {
                      title: "High Server Load",
                      description: "Server load peaked at 85% during registration period",
                      type: "warning",
                      time: "5 hours ago",
                    },
                    {
                      title: "Database Backup Completed",
                      description: "Daily backup completed successfully",
                      type: "success",
                      time: "12 hours ago",
                    },
                    {
                      title: "Failed Login Attempts",
                      description: "Multiple failed login attempts detected from IP 192.168.1.254",
                      type: "error",
                      time: "1 day ago",
                    },
                  ].map((alert, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 rounded-lg border p-4"
                    >
                      <div
                        className={`mt-0.5 rounded-full p-1 ${
                          alert.type === "error"
                            ? "bg-red-100 text-red-600"
                            : alert.type === "warning"
                            ? "bg-yellow-100 text-yellow-600"
                            : alert.type === "success"
                            ? "bg-green-100 text-green-600"
                            : "bg-blue-100 text-blue-600"
                        }`}
                      >
                        {alert.type === "error" ? (
                          <AlertTriangle className="h-4 w-4" />
                        ) : alert.type === "warning" ? (
                          <AlertTriangle className="h-4 w-4" />
                        ) : alert.type === "success" ? (
                          <CheckCircle className="h-4 w-4" />
                        ) : (
                          <BarChart4 className="h-4 w-4" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{alert.title}</div>
                        <div className="text-sm text-muted-foreground">
                          {alert.description}
                        </div>
                        <div className="mt-1 text-xs text-muted-foreground">
                          {alert.time}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="claims" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Claims Management</CardTitle>
              <CardDescription>Review and manage lost item claims</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {claimsLoading ? (
                  <div className="text-center text-muted-foreground">Loading claims...</div>
                ) : claims.length === 0 ? (
                  <div className="text-center text-muted-foreground">No claims found</div>
                ) : (
                  claims.map((claim, i) => (
                    <div key={i} className="flex items-center justify-between rounded-lg border p-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-9 w-9">
                          <AvatarFallback>
                            {claim.studentName
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{claim.title}</div>
                          <div className="text-sm text-muted-foreground">
                            By {claim.studentName}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant={
                            claim.status === "PENDING"
                              ? "default"
                              : claim.status === "APPROVED"
                              ? "secondary"
                              : "outline"
                          }
                        >
                          {claim.status}
                        </Badge>
                        <div className="text-sm text-muted-foreground">
                          {new Date(claim.createdAt).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  ))
                )}
                <div className="mt-4 flex justify-center">
                  <Button variant="outline">View All Claims</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Analytics Overview</CardTitle>
              <CardDescription>System performance and usage statistics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center text-muted-foreground">
                Analytics content coming soon
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>System Reports</CardTitle>
              <CardDescription>Generate and view system reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center text-muted-foreground">
                Reports content coming soon
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
