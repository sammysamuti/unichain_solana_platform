import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MoreHorizontal,
  Search,
  Download,
  Eye,
  Clock,
  Database,
  Layers,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Copy,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AdminBlockchainPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Blockchain Explorer</h1>
          <p className="text-muted-foreground">Explore and monitor the UniChain blockchain network</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export Data
          </Button>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search by block, transaction, or address..."
              className="w-full min-w-[300px] pl-8"
            />
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Latest Block</CardTitle>
            <Layers className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">#1,284,392</div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              <span>2 minutes ago</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Transactions</CardTitle>
            <ArrowRight className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.4M</div>
            <div className="text-xs text-muted-foreground">Total transactions on the network</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Network Status</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Healthy</div>
            <div className="text-xs text-muted-foreground">All systems operational</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Validators</CardTitle>
            <Database className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <div className="text-xs text-muted-foreground">Nodes validating transactions</div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="blocks" className="space-y-4">
        <TabsList>
          <TabsTrigger value="blocks">Blocks</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="validators">Validators</TabsTrigger>
        </TabsList>

        <TabsContent value="blocks" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Blocks</CardTitle>
              <CardDescription>Latest blocks added to the UniChain blockchain</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Block</TableHead>
                      <TableHead>Timestamp</TableHead>
                      <TableHead>Transactions</TableHead>
                      <TableHead>Size</TableHead>
                      <TableHead>Validator</TableHead>
                      <TableHead className="w-[80px]">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        block: "#1,284,392",
                        timestamp: "Mar 18, 2023 10:24:15 AM",
                        transactions: 42,
                        size: "12.5 KB",
                        validator: "Node 3",
                      },
                      {
                        block: "#1,284,391",
                        timestamp: "Mar 18, 2023 10:23:45 AM",
                        transactions: 38,
                        size: "11.2 KB",
                        validator: "Node 7",
                      },
                      {
                        block: "#1,284,390",
                        timestamp: "Mar 18, 2023 10:23:15 AM",
                        transactions: 45,
                        size: "13.8 KB",
                        validator: "Node 1",
                      },
                      {
                        block: "#1,284,389",
                        timestamp: "Mar 18, 2023 10:22:45 AM",
                        transactions: 36,
                        size: "10.9 KB",
                        validator: "Node 5",
                      },
                      {
                        block: "#1,284,388",
                        timestamp: "Mar 18, 2023 10:22:15 AM",
                        transactions: 41,
                        size: "12.3 KB",
                        validator: "Node 2",
                      },
                      {
                        block: "#1,284,387",
                        timestamp: "Mar 18, 2023 10:21:45 AM",
                        transactions: 39,
                        size: "11.7 KB",
                        validator: "Node 9",
                      },
                    ].map((block, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium">{block.block}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>{block.timestamp}</span>
                          </div>
                        </TableCell>
                        <TableCell>{block.transactions}</TableCell>
                        <TableCell>{block.size}</TableCell>
                        <TableCell>{block.validator}</TableCell>
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
                  Showing <strong>1</strong> to <strong>6</strong> of <strong>1,284,392</strong> blocks
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

        <TabsContent value="transactions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>Latest transactions processed on the UniChain network</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Transaction Hash</TableHead>
                      <TableHead>Block</TableHead>
                      <TableHead>Timestamp</TableHead>
                      <TableHead>From</TableHead>
                      <TableHead>To</TableHead>
                      <TableHead>Value</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="w-[80px]">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        hash: "0x7a2...3f1",
                        block: "#1,284,392",
                        timestamp: "Mar 18, 2023 10:24:15 AM",
                        from: "0x8b5...2e4",
                        to: "0x3c7...9a2",
                        value: "50 UNI",
                        status: "Success",
                      },
                      {
                        hash: "0x6b3...2d5",
                        block: "#1,284,392",
                        timestamp: "Mar 18, 2023 10:24:10 AM",
                        from: "0x4a9...7f3",
                        to: "0x2d6...5b8",
                        value: "25 UNI",
                        status: "Success",
                      },
                      {
                        hash: "0x5c4...1e6",
                        block: "#1,284,391",
                        timestamp: "Mar 18, 2023 10:23:55 AM",
                        from: "0x9e2...4c7",
                        to: "0x7f1...3a5",
                        value: "10 UNI",
                        status: "Success",
                      },
                      {
                        hash: "0x4d5...0f7",
                        block: "#1,284,391",
                        timestamp: "Mar 18, 2023 10:23:50 AM",
                        from: "0x2b8...6d9",
                        to: "0x5e3...1c4",
                        value: "15 UNI",
                        status: "Success",
                      },
                      {
                        hash: "0x3e6...9g8",
                        block: "#1,284,391",
                        timestamp: "Mar 18, 2023 10:23:45 AM",
                        from: "0x1a7...8b2",
                        to: "0x6f4...2d3",
                        value: "5 UNI",
                        status: "Success",
                      },
                    ].map((tx, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-1">
                            <span>{tx.hash}</span>
                            <Button variant="ghost" size="icon" className="h-4 w-4 p-0">
                              <Copy className="h-3 w-3" />
                            </Button>
                          </div>
                        </TableCell>
                        <TableCell>{tx.block}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>{tx.timestamp}</span>
                          </div>
                        </TableCell>
                        <TableCell className="font-mono text-xs">{tx.from}</TableCell>
                        <TableCell className="font-mono text-xs">{tx.to}</TableCell>
                        <TableCell>{tx.value}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-green-500/10 text-green-500">
                            {tx.status}
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
                  Showing <strong>1</strong> to <strong>5</strong> of <strong>2,437,892</strong> transactions
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

        <TabsContent value="validators" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Network Validators</CardTitle>
              <CardDescription>Active validator nodes on the UniChain network</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Node ID</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Uptime</TableHead>
                      <TableHead>Blocks Validated</TableHead>
                      <TableHead>Last Active</TableHead>
                      <TableHead>Performance</TableHead>
                      <TableHead className="w-[80px]">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        id: "Node 1",
                        status: "Active",
                        uptime: "99.98%",
                        blocks: 215487,
                        lastActive: "2 minutes ago",
                        performance: "Excellent",
                      },
                      {
                        id: "Node 2",
                        status: "Active",
                        uptime: "99.95%",
                        blocks: 214982,
                        lastActive: "1 minute ago",
                        performance: "Excellent",
                      },
                      {
                        id: "Node 3",
                        status: "Active",
                        uptime: "99.97%",
                        blocks: 215321,
                        lastActive: "Just now",
                        performance: "Excellent",
                      },
                      {
                        id: "Node 4",
                        status: "Warning",
                        uptime: "98.75%",
                        blocks: 213654,
                        lastActive: "5 minutes ago",
                        performance: "Good",
                      },
                      {
                        id: "Node 5",
                        status: "Active",
                        uptime: "99.92%",
                        blocks: 214876,
                        lastActive: "3 minutes ago",
                        performance: "Excellent",
                      },
                      {
                        id: "Node 6",
                        status: "Active",
                        uptime: "99.90%",
                        blocks: 214732,
                        lastActive: "4 minutes ago",
                        performance: "Excellent",
                      },
                    ].map((node, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium">{node.id}</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={
                              node.status === "Active"
                                ? "bg-green-500/10 text-green-500"
                                : "bg-yellow-500/10 text-yellow-500"
                            }
                          >
                            {node.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{node.uptime}</TableCell>
                        <TableCell>{node.blocks.toLocaleString()}</TableCell>
                        <TableCell>{node.lastActive}</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={
                              node.performance === "Excellent"
                                ? "bg-green-500/10 text-green-500"
                                : "bg-blue-500/10 text-blue-500"
                            }
                          >
                            {node.performance}
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
                                <AlertTriangle className="mr-2 h-4 w-4" />
                                Check Status
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
      </Tabs>
    </div>
  )
}

