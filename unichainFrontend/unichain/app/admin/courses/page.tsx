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
  Clock,
  Calendar,
  Users,
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

export default function AdminCoursesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Course Management</h1>
          <p className="text-muted-foreground">Manage courses, enrollments, and academic content</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Add Course
          </Button>
        </div>
      </div>

      <Tabs defaultValue="active" className="space-y-4">
        <TabsList>
          <TabsTrigger value="active">Active Courses</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="archived">Archived</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <CardTitle>Active Courses</CardTitle>
                  <CardDescription>Currently running courses for this semester</CardDescription>
                </div>
                <div className="flex gap-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Search courses..." className="w-full min-w-[200px] pl-8" />
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
                      <TableHead>Course Code</TableHead>
                      <TableHead>Title</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Instructor</TableHead>
                      <TableHead>Students</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="w-[80px]">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        code: "CS 301",
                        title: "Data Structures & Algorithms",
                        department: "Computer Science",
                        instructor: "Dr. Jane Smith",
                        students: 45,
                        status: "In Progress",
                      },
                      {
                        code: "MATH 240",
                        title: "Linear Algebra",
                        department: "Mathematics",
                        instructor: "Prof. Robert Johnson",
                        students: 60,
                        status: "In Progress",
                      },
                      {
                        code: "PHYS 201",
                        title: "Electricity & Magnetism",
                        department: "Physics",
                        instructor: "Dr. Michael Chen",
                        students: 38,
                        status: "In Progress",
                      },
                      {
                        code: "ENG 215",
                        title: "Technical Writing",
                        department: "English",
                        instructor: "Prof. Sarah Williams",
                        students: 25,
                        status: "In Progress",
                      },
                      {
                        code: "BIO 110",
                        title: "Introduction to Biology",
                        department: "Biology",
                        instructor: "Dr. Lisa Garcia",
                        students: 75,
                        status: "In Progress",
                      },
                      {
                        code: "ECON 202",
                        title: "Macroeconomics",
                        department: "Economics",
                        instructor: "Prof. David Lee",
                        students: 55,
                        status: "In Progress",
                      },
                    ].map((course, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium">{course.code}</TableCell>
                        <TableCell>{course.title}</TableCell>
                        <TableCell>{course.department}</TableCell>
                        <TableCell>{course.instructor}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span>{course.students}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-green-500/10 text-green-500">
                            {course.status}
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
                                <Edit className="mr-2 h-4 w-4" />
                                Edit Course
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Users className="mr-2 h-4 w-4" />
                                Manage Students
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

        <TabsContent value="upcoming" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Courses</CardTitle>
              <CardDescription>Courses scheduled for the next semester</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Course Code</TableHead>
                      <TableHead>Title</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Instructor</TableHead>
                      <TableHead>Start Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="w-[80px]">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        code: "CS 401",
                        title: "Advanced Algorithms",
                        department: "Computer Science",
                        instructor: "Dr. Alan Turing",
                        startDate: "Sep 1, 2023",
                        status: "Scheduled",
                      },
                      {
                        code: "CS 350",
                        title: "Database Systems",
                        department: "Computer Science",
                        instructor: "Prof. Ada Lovelace",
                        startDate: "Sep 1, 2023",
                        status: "Scheduled",
                      },
                      {
                        code: "CS 380",
                        title: "Artificial Intelligence",
                        department: "Computer Science",
                        instructor: "Dr. Grace Hopper",
                        startDate: "Sep 1, 2023",
                        status: "Scheduled",
                      },
                    ].map((course, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium">{course.code}</TableCell>
                        <TableCell>{course.title}</TableCell>
                        <TableCell>{course.department}</TableCell>
                        <TableCell>{course.instructor}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span>{course.startDate}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-blue-500/10 text-blue-500">
                            {course.status}
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
                                <Edit className="mr-2 h-4 w-4" />
                                Edit Course
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
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="archived" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Archived Courses</CardTitle>
              <CardDescription>Past courses that have been completed</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Course Code</TableHead>
                      <TableHead>Title</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Instructor</TableHead>
                      <TableHead>End Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="w-[80px]">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        code: "CS 201",
                        title: "Introduction to Programming",
                        department: "Computer Science",
                        instructor: "Dr. Jane Smith",
                        endDate: "Dec 15, 2022",
                        status: "Completed",
                      },
                      {
                        code: "MATH 220",
                        title: "Calculus I",
                        department: "Mathematics",
                        instructor: "Prof. Robert Johnson",
                        endDate: "Dec 15, 2022",
                        status: "Completed",
                      },
                      {
                        code: "ENG 101",
                        title: "Composition",
                        department: "English",
                        instructor: "Prof. Sarah Williams",
                        endDate: "Dec 15, 2022",
                        status: "Completed",
                      },
                      {
                        code: "HIST 110",
                        title: "World History",
                        department: "History",
                        instructor: "Dr. Michael Chen",
                        endDate: "Dec 15, 2022",
                        status: "Completed",
                      },
                    ].map((course, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium">{course.code}</TableCell>
                        <TableCell>{course.title}</TableCell>
                        <TableCell>{course.department}</TableCell>
                        <TableCell>{course.instructor}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>{course.endDate}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-muted text-muted-foreground">
                            {course.status}
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
                                <Users className="mr-2 h-4 w-4" />
                                View Students
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>
                                <CheckCircle className="mr-2 h-4 w-4" />
                                Restore Course
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

