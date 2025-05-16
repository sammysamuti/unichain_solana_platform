import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
  Bell,
  Search,
  Filter,
  Plus,
  Trash2,
  Edit,
  Eye,
  Clock,
  Users,
  Send,
  MessageSquare,
  AlertTriangle,
} from "lucide-react"

export default function AdminNotificationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Notifications</h1>
          <p className="text-muted-foreground">Manage and send system-wide notifications</p>
        </div>
        <div className="flex gap-2">
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Create Notification
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Notifications</TabsTrigger>
          <TabsTrigger value="compose">Compose</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <CardTitle>Notification History</CardTitle>
                  <CardDescription>Previously sent notifications</CardDescription>
                </div>
                <div className="flex gap-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Search notifications..." className="w-full min-w-[200px] pl-8" />
                  </div>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "System Maintenance",
                    message:
                      "Scheduled maintenance on March 15, 2023 at 2:00 AM UTC. The system will be unavailable for approximately 30 minutes.",
                    type: "System",
                    recipients: "All Users",
                    sentBy: "Admin",
                    sentAt: "Mar 10, 2023",
                    status: "Sent",
                  },
                  {
                    title: "New Course Registration Open",
                    message:
                      "Registration for Fall 2023 courses is now open. Please log in to your student portal to register.",
                    type: "Academic",
                    recipients: "Students",
                    sentBy: "Admin",
                    sentAt: "Mar 8, 2023",
                    status: "Sent",
                  },
                  {
                    title: "Important Security Update",
                    message:
                      "We've updated our security protocols. Please reset your password the next time you log in.",
                    type: "Security",
                    recipients: "All Users",
                    sentBy: "Admin",
                    sentAt: "Mar 5, 2023",
                    status: "Sent",
                  },
                  {
                    title: "Faculty Meeting Reminder",
                    message: "Reminder: Faculty meeting tomorrow at 10:00 AM in the Conference Hall.",
                    type: "Administrative",
                    recipients: "Faculty",
                    sentBy: "Admin",
                    sentAt: "Mar 3, 2023",
                    status: "Sent",
                  },
                  {
                    title: "Token Distribution Complete",
                    message: "The monthly token distribution has been completed. Check your wallet for your rewards.",
                    type: "Blockchain",
                    recipients: "All Users",
                    sentBy: "System",
                    sentAt: "Mar 1, 2023",
                    status: "Sent",
                  },
                ].map((notification, i) => (
                  <div key={i} className="rounded-lg border p-4">
                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">{notification.title}</h3>
                          <Badge
                            variant={
                              notification.type === "System"
                                ? "default"
                                : notification.type === "Academic"
                                  ? "secondary"
                                  : notification.type === "Security"
                                    ? "destructive"
                                    : notification.type === "Blockchain"
                                      ? "outline"
                                      : "default"
                            }
                          >
                            {notification.type}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{notification.message}</p>
                        <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            <span>To: {notification.recipients}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>Sent: {notification.sentAt}</span>
                          </div>
                          <div>
                            <span>By: {notification.sentBy}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="mr-2 h-4 w-4" />
                          View
                        </Button>
                        <Button variant="outline" size="sm">
                          <Send className="mr-2 h-4 w-4" />
                          Resend
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  Showing <strong>1</strong> to <strong>5</strong> of <strong>25</strong> notifications
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

        <TabsContent value="compose" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Compose Notification</CardTitle>
              <CardDescription>Create and send a new notification to users</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Notification Title</label>
                  <Input placeholder="Enter notification title" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea placeholder="Enter notification message" rows={5} />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Notification Type</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="system">System</SelectItem>
                        <SelectItem value="academic">Academic</SelectItem>
                        <SelectItem value="security">Security</SelectItem>
                        <SelectItem value="administrative">Administrative</SelectItem>
                        <SelectItem value="blockchain">Blockchain</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Recipients</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select recipients" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Users</SelectItem>
                        <SelectItem value="students">Students</SelectItem>
                        <SelectItem value="faculty">Faculty</SelectItem>
                        <SelectItem value="staff">Staff</SelectItem>
                        <SelectItem value="admins">Administrators</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Delivery Options</label>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="app" className="h-4 w-4 rounded border-gray-300" defaultChecked />
                      <label htmlFor="app" className="text-sm">
                        In-App
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="email" className="h-4 w-4 rounded border-gray-300" defaultChecked />
                      <label htmlFor="email" className="text-sm">
                        Email
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="push" className="h-4 w-4 rounded border-gray-300" />
                      <label htmlFor="push" className="text-sm">
                        Push Notification
                      </label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Schedule</label>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <input type="radio" id="send-now" name="schedule" className="h-4 w-4" defaultChecked />
                      <label htmlFor="send-now" className="text-sm">
                        Send Immediately
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="radio" id="schedule" name="schedule" className="h-4 w-4" />
                      <label htmlFor="schedule" className="text-sm">
                        Schedule for Later
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-2">
                  <Button variant="outline">Preview</Button>
                  <Button>Send Notification</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <CardTitle>Notification Templates</CardTitle>
                  <CardDescription>Reusable notification templates</CardDescription>
                </div>
                <Button className="gap-2">
                  <Plus className="h-4 w-4" />
                  Create Template
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "System Maintenance",
                    description: "Template for scheduled maintenance notifications",
                    type: "System",
                    lastUsed: "Mar 10, 2023",
                  },
                  {
                    title: "Course Registration",
                    description: "Template for course registration announcements",
                    type: "Academic",
                    lastUsed: "Mar 8, 2023",
                  },
                  {
                    title: "Security Alert",
                    description: "Template for security-related notifications",
                    type: "Security",
                    lastUsed: "Mar 5, 2023",
                  },
                  {
                    title: "Meeting Reminder",
                    description: "Template for meeting reminders",
                    type: "Administrative",
                    lastUsed: "Mar 3, 2023",
                  },
                  {
                    title: "Token Distribution",
                    description: "Template for token distribution announcements",
                    type: "Blockchain",
                    lastUsed: "Mar 1, 2023",
                  },
                  {
                    title: "Welcome Message",
                    description: "Template for welcoming new users",
                    type: "System",
                    lastUsed: "Feb 25, 2023",
                  },
                ].map((template, i) => (
                  <Card key={i}>
                    <CardHeader className="p-4 pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base">{template.title}</CardTitle>
                        <Badge
                          variant={
                            template.type === "System"
                              ? "default"
                              : template.type === "Academic"
                                ? "secondary"
                                : template.type === "Security"
                                  ? "destructive"
                                  : template.type === "Blockchain"
                                    ? "outline"
                                    : "default"
                          }
                        >
                          {template.type}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-sm text-muted-foreground">{template.description}</p>
                      <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                        <span>Last used: {template.lastUsed}</span>
                      </div>
                      <div className="mt-4 flex justify-end gap-2">
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Configure notification preferences and defaults</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 text-sm font-medium">Default Delivery Methods</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Bell className="h-4 w-4 text-muted-foreground" />
                        <span>In-App Notifications</span>
                      </div>
                      <div className="flex h-6 w-11 items-center rounded-full bg-primary p-1">
                        <div className="h-4 w-4 translate-x-5 rounded-full bg-white"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-muted-foreground" />
                        <span>Email Notifications</span>
                      </div>
                      <div className="flex h-6 w-11 items-center rounded-full bg-primary p-1">
                        <div className="h-4 w-4 translate-x-5 rounded-full bg-white"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                        <span>Push Notifications</span>
                      </div>
                      <div className="flex h-6 w-11 items-center rounded-full bg-muted p-1">
                        <div className="h-4 w-4 rounded-full bg-muted-foreground"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 text-sm font-medium">Notification Retention</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span>Keep notifications for</span>
                      <Select defaultValue="90">
                        <SelectTrigger className="w-[180px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="30">30 days</SelectItem>
                          <SelectItem value="60">60 days</SelectItem>
                          <SelectItem value="90">90 days</SelectItem>
                          <SelectItem value="180">180 days</SelectItem>
                          <SelectItem value="365">1 year</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 text-sm font-medium">Email Settings</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm">Email Sender Name</label>
                      <Input defaultValue="UniChain Admin" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm">Email Sender Address</label>
                      <Input defaultValue="notifications@university.edu" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm">Email Footer Text</label>
                      <Textarea
                        defaultValue="This is an automated message from the UniChain platform. Please do not reply to this email."
                        rows={2}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-2">
                  <Button variant="outline">Reset to Defaults</Button>
                  <Button>Save Settings</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

