import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MoreHorizontal,
  Search,
  Filter,
  Plus,
  Download,
  Trash2,
  Edit,
  Eye,
  CheckCircle,
  XCircle,
  FileText,
  Calendar,
  User,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AdminCredentialsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Academic Credentials</h1>
          <p className="text-muted-foreground">Manage and verify blockchain-based academic credentials</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Issue Credential
          </Button>
        </div>
      </div>

      <Tabs defaultValue="issued" className="space-y-4">
        <TabsList>
          <TabsTrigger value="issued">Issued Credentials</TabsTrigger>
          <TabsTrigger value="pending">Pending Verification</TabsTrigger>
          <TabsTrigger value="templates">Credential Templates</TabsTrigger>
        </TabsList>

        <TabsContent value="issued" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <CardTitle>Issued Credentials</CardTitle>
                  <CardDescription>Academic credentials issued on the blockchain</CardDescription>
                </div>
                <div className="flex gap-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Search credentials..." className="w-full min-w-[200px] pl-8" />
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
                      <TableHead>Credential ID</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Recipient</TableHead>
                      <TableHead>Issuer</TableHead>
                      <TableHead>Issue Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="w-[80px]">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        id: "CRED-2023-001",
                        type: "Degree Certificate",
                        recipient: "Alex Johnson",
                        issuer: "Computer Science Department",
                        date: "Mar 15, 2023",
                        status: "Verified",
                      },
                      {
                        id: "CRED-2023-002",
                        type: "Course Completion",
                        recipient: "Sarah Williams",
                        issuer: "Mathematics Department",
                        date: "Mar 10, 2023",
                        status: "Verified",
                      },
                      {
                        id: "CRED-2023-003",
                        type: "Academic Achievement",
                        recipient: "Michael Chen",
                        issuer: "Engineering Department",
                        date: "Mar 5, 2023",
                        status: "Verified",
                      },
                      {
                        id: "CRED-2023-004",
                        type: "Degree Certificate",
                        recipient: "Emily Davis",
                        issuer: "Business School",
                        date: "Feb 28, 2023",
                        status: "Verified",
                      },
                      {
                        id: "CRED-2023-005",
                        type: "Course Completion",
                        recipient: "James Wilson",
                        issuer: "Physics Department",
                        date: "Feb 25, 2023",
                        status: "Verified",
                      },
                      {
                        id: "CRED-2023-006",
                        type: "Academic Achievement",
                        recipient: "Lisa Garcia",
                        issuer: "Biology Department",
                        date: "Feb 20, 2023",
                        status: "Verified",
                      },
                    ].map((credential, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium">{credential.id}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              credential.type === "Degree Certificate"
                                ? "default"
                                : credential.type === "Course Completion"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {credential.type}
                          </Badge>
                        </TableCell>
                        <TableCell>{credential.recipient}</TableCell>
                        <TableCell>{credential.issuer}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span>{credential.date}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>{credential.status}</span>
                          </div>
                        </TableCell>
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
                                <FileText className="mr-2 h-4 w-4" />
                                View Certificate
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>
                                <Download className="mr-2 h-4 w-4" />
                                Download
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600">
                                <XCircle className="mr-2 h-4 w-4" />
                                Revoke
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
                  Showing <strong>1</strong> to <strong>6</strong> of <strong>24</strong> results
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

        <TabsContent value="pending" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Pending Verification</CardTitle>
              <CardDescription>Credentials awaiting verification and issuance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Request ID</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Requested By</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Requested Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="w-[80px]">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        id: "REQ-2023-001",
                        type: "Degree Certificate",
                        requestedBy: "Robert Johnson",
                        department: "Computer Science",
                        date: "Mar 18, 2023",
                        status: "Pending",
                      },
                      {
                        id: "REQ-2023-002",
                        type: "Course Completion",
                        requestedBy: "Jennifer Lee",
                        department: "Mathematics",
                        date: "Mar 17, 2023",
                        status: "Pending",
                      },
                      {
                        id: "REQ-2023-003",
                        type: "Academic Achievement",
                        requestedBy: "David Miller",
                        department: "Engineering",
                        date: "Mar 16, 2023",
                        status: "Pending",
                      },
                    ].map((request, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium">{request.id}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              request.type === "Degree Certificate"
                                ? "default"
                                : request.type === "Course Completion"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {request.type}
                          </Badge>
                        </TableCell>
                        <TableCell>{request.requestedBy}</TableCell>
                        <TableCell>{request.department}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span>{request.date}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500">
                            {request.status}
                          </Badge>
                        </TableCell>
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
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>
                                <CheckCircle className="mr-2 h-4 w-4" />
                                Approve
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <XCircle className="mr-2 h-4 w-4" />
                                Reject
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <CardTitle>Credential Templates</CardTitle>
                  <CardDescription>Manage templates for issuing credentials</CardDescription>
                </div>
                <Button className="gap-2">
                  <Plus className="h-4 w-4" />
                  Create Template
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Bachelor's Degree Certificate",
                    description: "Official degree certificate for undergraduate programs",
                    lastUpdated: "Feb 10, 2023",
                    createdBy: "Admin User",
                  },
                  {
                    title: "Master's Degree Certificate",
                    description: "Official degree certificate for graduate programs",
                    lastUpdated: "Feb 12, 2023",
                    createdBy: "Admin User",
                  },
                  {
                    title: "Course Completion Certificate",
                    description: "Certificate for completing individual courses",
                    lastUpdated: "Feb 15, 2023",
                    createdBy: "Admin User",
                  },
                  {
                    title: "Academic Achievement Award",
                    description: "Recognition for outstanding academic performance",
                    lastUpdated: "Feb 20, 2023",
                    createdBy: "Admin User",
                  },
                  {
                    title: "Workshop Participation",
                    description: "Certificate for workshop participation",
                    lastUpdated: "Feb 25, 2023",
                    createdBy: "Admin User",
                  },
                  {
                    title: "Research Contribution",
                    description: "Recognition for research contributions",
                    lastUpdated: "Mar 1, 2023",
                    createdBy: "Admin User",
                  },
                ].map((template, i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="aspect-[2/1] bg-muted">
                      <div className="flex h-full items-center justify-center bg-primary/10 text-primary">
                        <FileText className="h-12 w-12" />
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium">{template.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{template.description}</p>
                      <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>Updated: {template.lastUpdated}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          <span>{template.createdBy}</span>
                        </div>
                      </div>
                    </CardContent>
                    <div className="border-t p-2 flex justify-end gap-2">
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
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

