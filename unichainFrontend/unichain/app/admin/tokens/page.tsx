import type React from "react"
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
  Edit,
  Eye,
  Wallet,
  RefreshCw,
  BarChart4,
  TrendingUp,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AdminTokensPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Token Management</h1>
          <p className="text-muted-foreground">Manage and monitor UniChain tokens and transactions</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <RefreshCw className="h-4 w-4" />
            Refresh
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Create Token
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Supply</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,000,000 UNI</div>
            <p className="text-xs text-muted-foreground">Total tokens in circulation</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Wallets</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,453</div>
            <div className="flex items-center gap-1 text-xs text-green-500">
              <TrendingUp className="h-3 w-3" />
              <span>+15% from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Daily Transactions</CardTitle>
            <BarChart4 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">458</div>
            <div className="flex items-center gap-1 text-xs text-green-500">
              <TrendingUp className="h-3 w-3" />
              <span>+22% from yesterday</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Token Value</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$0.12 USD</div>
            <div className="flex items-center gap-1 text-xs text-green-500">
              <TrendingUp className="h-3 w-3" />
              <span>+5.2% from last week</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="transactions" className="space-y-4">
        <TabsList>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="distribution">Token Distribution</TabsTrigger>
          <TabsTrigger value="rewards">Reward Programs</TabsTrigger>
        </TabsList>

        <TabsContent value="transactions" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <CardTitle>Recent Transactions</CardTitle>
                  <CardDescription>Recent token transactions on the UniChain network</CardDescription>
                </div>
                <div className="flex gap-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Search transactions..." className="w-full min-w-[200px] pl-8" />
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
                      <TableHead>Transaction ID</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>From</TableHead>
                      <TableHead>To</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="w-[80px]">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        id: "TX-2023-001",
                        type: "Transfer",
                        from: "University Treasury",
                        to: "Alex Johnson",
                        amount: "50 UNI",
                        date: "Mar 18, 2023 10:24 AM",
                        status: "Confirmed",
                      },
                      {
                        id: "TX-2023-002",
                        type: "Reward",
                        from: "System",
                        to: "Sarah Williams",
                        amount: "25 UNI",
                        date: "Mar 17, 2023 3:15 PM",
                        status: "Confirmed",
                      },
                      {
                        id: "TX-2023-003",
                        type: "Transfer",
                        from: "Michael Chen",
                        to: "Campus Store",
                        amount: "10 UNI",
                        date: "Mar 17, 2023 11:30 AM",
                        status: "Confirmed",
                      },
                      {
                        id: "TX-2023-004",
                        type: "Reward",
                        from: "System",
                        to: "Emily Davis",
                        amount: "15 UNI",
                        date: "Mar 16, 2023 2:45 PM",
                        status: "Confirmed",
                      },
                      {
                        id: "TX-2023-005",
                        type: "Transfer",
                        from: "James Wilson",
                        to: "Lisa Garcia",
                        amount: "5 UNI",
                        date: "Mar 16, 2023 9:00 AM",
                        status: "Confirmed",
                      },
                    ].map((transaction, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium">{transaction.id}</TableCell>
                        <TableCell>
                          <Badge variant={transaction.type === "Transfer" ? "default" : "secondary"}>
                            {transaction.type}
                          </Badge>
                        </TableCell>
                        <TableCell>{transaction.from}</TableCell>
                        <TableCell>{transaction.to}</TableCell>
                        <TableCell className="font-medium">{transaction.amount}</TableCell>
                        <TableCell className="text-sm">{transaction.date}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-green-500/10 text-green-500">
                            {transaction.status}
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
                              <DropdownMenuItem>
                                <Download className="mr-2 h-4 w-4" />
                                Export
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
                  Showing <strong>1</strong> to <strong>5</strong> of <strong>100</strong> results
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

        <TabsContent value="distribution" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Token Distribution</CardTitle>
              <CardDescription>Overview of token allocation and distribution</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] mb-6">
                <div className="flex h-full items-center justify-center rounded-md border border-dashed">
                  <div className="flex flex-col items-center text-center">
                    <BarChart4 className="h-10 w-10 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-medium">Token Distribution Chart</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Token distribution visualization would appear here
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Token Allocation</h3>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      category: "Student Rewards",
                      amount: "400,000 UNI",
                      percentage: "40%",
                      color: "bg-primary",
                    },
                    {
                      category: "Faculty & Staff",
                      amount: "200,000 UNI",
                      percentage: "20%",
                      color: "bg-blue-500",
                    },
                    {
                      category: "University Treasury",
                      amount: "200,000 UNI",
                      percentage: "20%",
                      color: "bg-green-500",
                    },
                    {
                      category: "Development Fund",
                      amount: "100,000 UNI",
                      percentage: "10%",
                      color: "bg-yellow-500",
                    },
                    {
                      category: "Community Initiatives",
                      amount: "50,000 UNI",
                      percentage: "5%",
                      color: "bg-purple-500",
                    },
                    {
                      category: "Reserve",
                      amount: "50,000 UNI",
                      percentage: "5%",
                      color: "bg-gray-500",
                    },
                  ].map((allocation, i) => (
                    <Card key={i}>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div className={`h-4 w-4 rounded-full ${allocation.color}`}></div>
                          <div className="font-medium">{allocation.category}</div>
                        </div>
                        <div className="mt-2 text-2xl font-bold">{allocation.amount}</div>
                        <div className="mt-1 text-sm text-muted-foreground">
                          {allocation.percentage} of total supply
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rewards" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <CardTitle>Reward Programs</CardTitle>
                  <CardDescription>Manage token reward programs and incentives</CardDescription>
                </div>
                <Button className="gap-2">
                  <Plus className="h-4 w-4" />
                  Create Program
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    name: "Academic Achievement Rewards",
                    description: "Tokens awarded for academic excellence and achievements",
                    totalAwarded: "25,000 UNI",
                    recipients: 450,
                    status: "Active",
                  },
                  {
                    name: "Course Completion Incentives",
                    description: "Rewards for completing courses with high grades",
                    totalAwarded: "15,000 UNI",
                    recipients: 320,
                    status: "Active",
                  },
                  {
                    name: "Research Contribution Rewards",
                    description: "Tokens for contributing to university research projects",
                    totalAwarded: "10,000 UNI",
                    recipients: 120,
                    status: "Active",
                  },
                  {
                    name: "Campus Engagement Program",
                    description: "Rewards for participating in campus activities and events",
                    totalAwarded: "8,000 UNI",
                    recipients: 280,
                    status: "Active",
                  },
                  {
                    name: "Peer Tutoring Incentives",
                    description: "Tokens awarded for helping fellow students through tutoring",
                    totalAwarded: "5,000 UNI",
                    recipients: 85,
                    status: "Active",
                  },
                ].map((program, i) => (
                  <div key={i} className="rounded-lg border p-4">
                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">{program.name}</h3>
                          <Badge variant="outline" className="bg-green-500/10 text-green-500">
                            {program.status}
                          </Badge>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">{program.description}</p>
                        <div className="mt-2 flex flex-wrap gap-4 text-sm">
                          <div>
                            <span className="font-medium">Total Awarded:</span> {program.totalAwarded}
                          </div>
                          <div>
                            <span className="font-medium">Recipients:</span> {program.recipients}
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          <Eye className="mr-2 h-4 w-4" />
                          View
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function Users(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

