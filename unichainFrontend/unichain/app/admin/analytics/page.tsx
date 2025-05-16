import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  BarChart4,
  LineChart,
  PieChart,
  TrendingUp,
  TrendingDown,
  Users,
  BookOpen,
  Wallet,
  Calendar,
  Download,
  Filter,
  RefreshCw,
} from "lucide-react"

export default function AdminAnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Analytics</h1>
          <p className="text-muted-foreground">Comprehensive analytics and insights for the UniChain platform</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Calendar className="h-4 w-4" />
            Mar 1 - Mar 31, 2023
          </Button>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button className="gap-2">
            <RefreshCw className="h-4 w-4" />
            Refresh
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,853</div>
            <div className="flex items-center gap-1 text-xs text-green-500">
              <TrendingUp className="h-3 w-3" />
              <span>+18% from last month</span>
            </div>
            <div className="mt-4 h-[80px]">
              <div className="flex h-full items-end gap-1">
                {[40, 25, 35, 30, 45, 35, 55, 40, 60, 45, 70, 65].map((h, i) => (
                  <div key={i} className="w-full bg-primary/10" style={{ height: `${h}%` }}></div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Course Enrollments</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4,327</div>
            <div className="flex items-center gap-1 text-xs text-green-500">
              <TrendingUp className="h-3 w-3" />
              <span>+12% from last semester</span>
            </div>
            <div className="mt-4 h-[80px]">
              <div className="flex h-full items-end gap-1">
                {[30, 45, 55, 60, 50, 65, 75, 65, 80, 70, 85, 75].map((h, i) => (
                  <div key={i} className="w-full bg-primary/10" style={{ height: `${h}%` }}></div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Token Transactions</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,458</div>
            <div className="flex items-center gap-1 text-xs text-green-500">
              <TrendingUp className="h-3 w-3" />
              <span>+32% from last month</span>
            </div>
            <div className="mt-4 h-[80px]">
              <div className="flex h-full items-end gap-1">
                {[25, 40, 30, 45, 35, 55, 45, 60, 50, 70, 60, 80].map((h, i) => (
                  <div key={i} className="w-full bg-primary/10" style={{ height: `${h}%` }}></div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Sessions</CardTitle>
            <LineChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">342</div>
            <div className="flex items-center gap-1 text-xs text-red-500">
              <TrendingDown className="h-3 w-3" />
              <span>-5% from yesterday</span>
            </div>
            <div className="mt-4 h-[80px]">
              <div className="flex h-full items-end gap-1">
                {[60, 50, 70, 55, 65, 45, 55, 40, 50, 35, 45, 30].map((h, i) => (
                  <div key={i} className="w-full bg-primary/10" style={{ height: `${h}%` }}></div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="users">User Analytics</TabsTrigger>
          <TabsTrigger value="courses">Course Analytics</TabsTrigger>
          <TabsTrigger value="blockchain">Blockchain Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>User Growth</CardTitle>
                <CardDescription>Monthly user registration trends</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <div className="flex h-full items-center justify-center rounded-md border border-dashed">
                  <div className="flex flex-col items-center text-center">
                    <LineChart className="h-10 w-10 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-medium">User Growth Chart</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Monthly user registration data visualization would appear here
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>User Distribution</CardTitle>
                <CardDescription>Breakdown of users by role and department</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <div className="flex h-full items-center justify-center rounded-md border border-dashed">
                  <div className="flex flex-col items-center text-center">
                    <PieChart className="h-10 w-10 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-medium">User Distribution Chart</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      User distribution by role and department would appear here
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <CardTitle>Platform Usage Metrics</CardTitle>
                  <CardDescription>Key performance indicators and usage statistics</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Select defaultValue="monthly">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select timeframe" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="quarterly">Quarterly</SelectItem>
                      <SelectItem value="yearly">Yearly</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="h-[400px]">
              <div className="flex h-full items-center justify-center rounded-md border border-dashed">
                <div className="flex flex-col items-center text-center">
                  <BarChart4 className="h-10 w-10 text-muted-foreground" />
                  <h3 className="mt-4 text-lg font-medium">Platform Usage Chart</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Comprehensive platform usage metrics would appear here
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>User Analytics</CardTitle>
              <CardDescription>Detailed user engagement and behavior metrics</CardDescription>
            </CardHeader>
            <CardContent className="h-[500px]">
              <div className="flex h-full items-center justify-center rounded-md border border-dashed">
                <div className="flex flex-col items-center text-center">
                  <Users className="h-10 w-10 text-muted-foreground" />
                  <h3 className="mt-4 text-lg font-medium">User Analytics Dashboard</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Comprehensive user analytics dashboard would appear here
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="courses" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Course Analytics</CardTitle>
              <CardDescription>Enrollment, completion, and engagement metrics for courses</CardDescription>
            </CardHeader>
            <CardContent className="h-[500px]">
              <div className="flex h-full items-center justify-center rounded-md border border-dashed">
                <div className="flex flex-col items-center text-center">
                  <BookOpen className="h-10 w-10 text-muted-foreground" />
                  <h3 className="mt-4 text-lg font-medium">Course Analytics Dashboard</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Comprehensive course analytics dashboard would appear here
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="blockchain" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Blockchain Analytics</CardTitle>
              <CardDescription>
                Transaction volume, token distribution, and blockchain performance metrics
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[500px]">
              <div className="flex h-full items-center justify-center rounded-md border border-dashed">
                <div className="flex flex-col items-center text-center">
                  <Wallet className="h-10 w-10 text-muted-foreground" />
                  <h3 className="mt-4 text-lg font-medium">Blockchain Analytics Dashboard</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Comprehensive blockchain analytics dashboard would appear here
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

