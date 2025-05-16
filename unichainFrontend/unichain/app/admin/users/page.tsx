import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MoreHorizontal,
  Search,
  Filter,
  UserPlus,
  Download,
  Trash2,
  Edit,
  Eye,
  CheckCircle,
  XCircle,
  AlertCircle,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function AdminUsersPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">User Management</h1>
          <p className="text-muted-foreground">Manage and monitor all users in the system</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
          {/* <Button className="gap-2">
            <UserPlus className="h-4 w-4" />
            Add User
          </Button> */}
        </div>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <CardTitle>Users</CardTitle>
              <CardDescription>Manage user accounts, permissions, and status</CardDescription>
            </div>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search users..." className="w-full min-w-[200px] pl-8" />
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
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Joined</TableHead>
                  <TableHead className="w-[80px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  {
                    name: "Alex Johnson",
                    email: "alex.johnson@university.edu",
                    role: "Student",
                    status: "Active",
                    joined: "Mar 10, 2023",
                  },
                  {
                    name: "Sarah Williams",
                    email: "s.williams@university.edu",
                    role: "Faculty",
                    status: "Active",
                    joined: "Feb 15, 2023",
                  },
                  {
                    name: "Michael Chen",
                    email: "m.chen@university.edu",
                    role: "Student",
                    status: "Pending",
                    joined: "Mar 8, 2023",
                  },
                  {
                    name: "Emily Davis",
                    email: "e.davis@university.edu",
                    role: "Staff",
                    status: "Active",
                    joined: "Jan 5, 2023",
                  },
                  {
                    name: "James Wilson",
                    email: "j.wilson@university.edu",
                    role: "Student",
                    status: "Suspended",
                    joined: "Dec 12, 2022",
                  },
                  {
                    name: "Lisa Garcia",
                    email: "l.garcia@university.edu",
                    role: "Faculty",
                    status: "Active",
                    joined: "Nov 20, 2022",
                  },
                  {
                    name: "Robert Johnson",
                    email: "r.johnson@university.edu",
                    role: "Admin",
                    status: "Active",
                    joined: "Oct 5, 2022",
                  },
                  {
                    name: "Jennifer Lee",
                    email: "j.lee@university.edu",
                    role: "Student",
                    status: "Inactive",
                    joined: "Sep 15, 2022",
                  },
                ].map((user, i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          user.role === "Admin"
                            ? "destructive"
                            : user.role === "Faculty"
                              ? "secondary"
                              : user.role === "Staff"
                                ? "outline"
                                : "default"
                        }
                      >
                        {user.role}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {user.status === "Active" ? (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        ) : user.status === "Pending" ? (
                          <AlertCircle className="h-4 w-4 text-yellow-500" />
                        ) : user.status === "Suspended" ? (
                          <XCircle className="h-4 w-4 text-red-500" />
                        ) : (
                          <XCircle className="h-4 w-4 text-muted-foreground" />
                        )}
                        <span>{user.status}</span>
                      </div>
                    </TableCell>
                    <TableCell>{user.joined}</TableCell>
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
                            <Eye className="mr-2 h-4 w-4" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit User
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Activate
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <XCircle className="mr-2 h-4 w-4" />
                            Suspend
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
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
              Showing <strong>1</strong> to <strong>8</strong> of <strong>100</strong> results
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
    </div>
  )
}

