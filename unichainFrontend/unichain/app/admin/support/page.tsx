import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MoreHorizontal,
  Search,
  Filter,
  MessageSquare,
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle,
  User,
  Send,
  RefreshCw,
  BarChart4,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function AdminSupportPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Support Tickets</h1>
          <p className="text-muted-foreground">
            Manage and respond to user support requests
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <RefreshCw className="h-4 w-4" />
            Refresh
          </Button>
          <Button className="gap-2">
            <MessageSquare className="h-4 w-4" />
            New Ticket
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Open Tickets</CardTitle>
            <AlertTriangle className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">5 high priority</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">In Progress</CardTitle>
            <Clock className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              Average response time: 2.5 hours
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Resolved Today
            </CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-green-500">+4 from yesterday</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Satisfaction Rate
            </CardTitle>
            <BarChart4 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92%</div>
            <p className="text-xs text-green-500">+2% from last week</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Tickets</TabsTrigger>
          <TabsTrigger value="open">Open</TabsTrigger>
          <TabsTrigger value="inprogress">In Progress</TabsTrigger>
          <TabsTrigger value="resolved">Resolved</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <CardTitle>Support Tickets</CardTitle>
                  <CardDescription>
                    View and manage all support tickets
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search tickets..."
                      className="w-full min-w-[200px] pl-8"
                    />
                  </div>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Ticket ID</TableHead>
                      <TableHead>Subject</TableHead>
                      <TableHead>Requester</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Priority</TableHead>
                      <TableHead>Created</TableHead>
                      <TableHead className="w-[80px]">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        id: "TKT-2023-001",
                        subject: "Login Issues",
                        requester: "Alex Johnson",
                        category: "Authentication",
                        status: "Open",
                        priority: "High",
                        created: "Mar 18, 2023",
                      },
                      {
                        id: "TKT-2023-002",
                        subject: "Course Registration Error",
                        requester: "Sarah Williams",
                        category: "Courses",
                        status: "In Progress",
                        priority: "Medium",
                        created: "Mar 17, 2023",
                      },
                      {
                        id: "TKT-2023-003",
                        subject: "Wallet Connection Problem",
                        requester: "Michael Chen",
                        category: "Blockchain",
                        status: "Open",
                        priority: "High",
                        created: "Mar 17, 2023",
                      },
                      {
                        id: "TKT-2023-004",
                        subject: "Missing Academic Credential",
                        requester: "Emily Davis",
                        category: "Credentials",
                        status: "In Progress",
                        priority: "Medium",
                        created: "Mar 16, 2023",
                      },
                      {
                        id: "TKT-2023-005",
                        subject: "Password Reset Not Working",
                        requester: "James Wilson",
                        category: "Authentication",
                        status: "Resolved",
                        priority: "Low",
                        created: "Mar 15, 2023",
                      },
                      {
                        id: "TKT-2023-006",
                        subject: "Token Not Received",
                        requester: "Lisa Garcia",
                        category: "Blockchain",
                        status: "Resolved",
                        priority: "Medium",
                        created: "Mar 14, 2023",
                      },
                    ].map((ticket, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium">
                          {ticket.id}
                        </TableCell>
                        <TableCell>{ticket.subject}</TableCell>
                        <TableCell>{ticket.requester}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{ticket.category}</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              ticket.status === "Open"
                                ? "destructive"
                                : ticket.status === "In Progress"
                                ? "default"
                                : "outline"
                            }
                          >
                            {ticket.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              ticket.priority === "High"
                                ? "destructive"
                                : ticket.priority === "Medium"
                                ? "default"
                                : "outline"
                            }
                            className={
                              ticket.priority === "High"
                                ? "bg-red-500/10 text-red-500"
                                : ticket.priority === "Medium"
                                ? "bg-yellow-500/10 text-yellow-500"
                                : "bg-blue-500/10 text-blue-500"
                            }
                          >
                            {ticket.priority}
                          </Badge>
                        </TableCell>
                        <TableCell>{ticket.created}</TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>
                                <MessageSquare className="mr-2 h-4 w-4" />
                                View Ticket
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" />
                                Assign
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>
                                <CheckCircle className="mr-2 h-4 w-4" />
                                Mark as Resolved
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <XCircle className="mr-2 h-4 w-4" />
                                Close Ticket
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  Showing <strong>1</strong> to <strong>6</strong> of{" "}
                  <strong>24</strong> tickets
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="open" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Open Tickets</CardTitle>
              <CardDescription>
                Tickets awaiting initial response
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    id: "TKT-2023-001",
                    subject: "Login Issues",
                    message:
                      "I'm unable to log in to my account. I've tried resetting my password but I'm still getting an error message.",
                    requester: "Alex Johnson",
                    category: "Authentication",
                    priority: "High",
                    created: "Mar 18, 2023 10:24 AM",
                  },
                  {
                    id: "TKT-2023-003",
                    subject: "Wallet Connection Problem",
                    message:
                      "I'm having trouble connecting my wallet to the platform. I've followed all the instructions but it's not working.",
                    requester: "Michael Chen",
                    category: "Blockchain",
                    priority: "High",
                    created: "Mar 17, 2023 3:15 PM",
                  },
                  {
                    id: "TKT-2023-007",
                    subject: "Course Material Not Loading",
                    message:
                      "I can't access the course materials for CS 301. The page just shows a loading spinner indefinitely.",
                    requester: "Robert Johnson",
                    category: "Courses",
                    priority: "Medium",
                    created: "Mar 18, 2023 9:30 AM",
                  },
                ].map((ticket, i) => (
                  <div key={i} className="rounded-lg border p-4">
                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">{ticket.subject}</h3>
                          <Badge
                            variant={
                              ticket.priority === "High"
                                ? "destructive"
                                : ticket.priority === "Medium"
                                ? "default"
                                : "outline"
                            }
                            className={
                              ticket.priority === "High"
                                ? "bg-red-500/10 text-red-500"
                                : ticket.priority === "Medium"
                                ? "bg-yellow-500/10 text-yellow-500"
                                : "bg-blue-500/10 text-blue-500"
                            }
                          >
                            {ticket.priority}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>{ticket.id}</span>
                          <span>•</span>
                          <span>{ticket.requester}</span>
                          <span>•</span>
                          <Badge variant="outline">{ticket.category}</Badge>
                        </div>
                        <p className="mt-2 text-sm">{ticket.message}</p>
                        <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>Created: {ticket.created}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <User className="mr-2 h-4 w-4" />
                          Assign
                        </Button>
                        <Button size="sm">
                          <MessageSquare className="mr-2 h-4 w-4" />
                          Respond
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="inprogress" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>In Progress Tickets</CardTitle>
              <CardDescription>
                Tickets currently being worked on
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    id: "TKT-2023-002",
                    subject: "Course Registration Error",
                    message:
                      "I'm getting an error when trying to register for MATH 240. It says 'Registration failed' but doesn't give any specific reason.",
                    requester: "Sarah Williams",
                    category: "Courses",
                    priority: "Medium",
                    created: "Mar 17, 2023 11:30 AM",
                    assignedTo: "Admin User",
                    lastUpdated: "Mar 17, 2023 2:45 PM",
                  },
                  {
                    id: "TKT-2023-004",
                    subject: "Missing Academic Credential",
                    message:
                      "My Computer Science certificate isn't showing up in my credentials even though I completed the course last semester.",
                    requester: "Emily Davis",
                    category: "Credentials",
                    priority: "Medium",
                    created: "Mar 16, 2023 9:15 AM",
                    assignedTo: "Admin User",
                    lastUpdated: "Mar 16, 2023 3:20 PM",
                  },
                ].map((ticket, i) => (
                  <div key={i} className="rounded-lg border p-4">
                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">{ticket.subject}</h3>
                          <Badge
                            variant={
                              ticket.priority === "High"
                                ? "destructive"
                                : ticket.priority === "Medium"
                                ? "default"
                                : "outline"
                            }
                            className={
                              ticket.priority === "High"
                                ? "bg-red-500/10 text-red-500"
                                : ticket.priority === "Medium"
                                ? "bg-yellow-500/10 text-yellow-500"
                                : "bg-blue-500/10 text-blue-500"
                            }
                          >
                            {ticket.priority}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>{ticket.id}</span>
                          <span>•</span>
                          <span>{ticket.requester}</span>
                          <span>•</span>
                          <Badge variant="outline">{ticket.category}</Badge>
                        </div>
                        <p className="mt-2 text-sm">{ticket.message}</p>
                        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>Created: {ticket.created}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            <span>Assigned to: {ticket.assignedTo}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <RefreshCw className="h-3 w-3" />
                            <span>Last updated: {ticket.lastUpdated}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <CheckCircle className="mr-2 h-4 w-4" />
                          Resolve
                        </Button>
                        <Button size="sm">
                          <MessageSquare className="mr-2 h-4 w-4" />
                          Update
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resolved" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Resolved Tickets</CardTitle>
              <CardDescription>
                Recently resolved support tickets
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Ticket ID</TableHead>
                      <TableHead>Subject</TableHead>
                      <TableHead>Requester</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Resolved By</TableHead>
                      <TableHead>Resolution Time</TableHead>
                      <TableHead>Resolved Date</TableHead>
                      <TableHead className="w-[80px]">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        id: "TKT-2023-005",
                        subject: "Password Reset Not Working",
                        requester: "James Wilson",
                        category: "Authentication",
                        resolvedBy: "Admin User",
                        resolutionTime: "2h 15m",
                        resolvedDate: "Mar 15, 2023",
                      },
                      {
                        id: "TKT-2023-006",
                        subject: "Token Not Received",
                        requester: "Lisa Garcia",
                        category: "Blockchain",
                        resolvedBy: "Admin User",
                        resolutionTime: "3h 45m",
                        resolvedDate: "Mar 14, 2023",
                      },
                      {
                        id: "TKT-2023-008",
                        subject: "Profile Picture Not Uploading",
                        requester: "Jennifer Lee",
                        category: "Account",
                        resolvedBy: "Admin User",
                        resolutionTime: "1h 30m",
                        resolvedDate: "Mar 13, 2023",
                      },
                      {
                        id: "TKT-2023-009",
                        subject: "Certificate Download Error",
                        requester: "David Miller",
                        category: "Credentials",
                        resolvedBy: "Admin User",
                        resolutionTime: "4h 10m",
                        resolvedDate: "Mar 12, 2023",
                      },
                    ].map((ticket, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium">
                          {ticket.id}
                        </TableCell>
                        <TableCell>{ticket.subject}</TableCell>
                        <TableCell>{ticket.requester}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{ticket.category}</Badge>
                        </TableCell>
                        <TableCell>{ticket.resolvedBy}</TableCell>
                        <TableCell>{ticket.resolutionTime}</TableCell>
                        <TableCell>{ticket.resolvedDate}</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon">
                            <MessageSquare className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Quick Response</CardTitle>
          <CardDescription>Respond to a ticket by ID</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium">Ticket ID</label>
                <Input placeholder="Enter ticket ID" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Status</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="open">Open</SelectItem>
                    <SelectItem value="inprogress">In Progress</SelectItem>
                    <SelectItem value="resolved">Resolved</SelectItem>
                    <SelectItem value="closed">Closed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Response</label>
              <Textarea placeholder="Type your response here..." rows={5} />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="notify"
                className="h-4 w-4 rounded border-gray-300"
                defaultChecked
              />
              <label htmlFor="notify" className="text-sm">
                Notify user via email
              </label>
            </div>

            <div className="flex justify-end gap-2">
              <Button variant="outline">Cancel</Button>
              <Button className="gap-2">
                <Send className="h-4 w-4" />
                Send Response
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
