import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Search, BookOpen, Clock, Calendar, ArrowRight, Filter, GraduationCap, BarChart } from "lucide-react"
import { PageContainer } from "@/components/page-container"

export default function CoursesPage() {
  return (
    <PageContainer>
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Courses</h1>
          <p className="text-muted-foreground">Manage your courses, assignments, and academic progress</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Button className="gap-2">
            <BookOpen className="h-4 w-4" />
            Browse Courses
          </Button>
        </div>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Search courses, assignments, or materials..." className="w-full pl-9 pr-4" />
      </div>

      <Tabs defaultValue="current" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="current">Current Courses</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="grades">Grades & Progress</TabsTrigger>
        </TabsList>

        <TabsContent value="current" className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                code: "CS 301",
                title: "Data Structures & Algorithms",
                instructor: "Dr. Jane Smith",
                schedule: "Mon/Wed/Fri 10:00 AM",
                progress: 65,
                assignments: 3,
                upcoming: "Midterm Exam - Mar 15",
              },
              {
                code: "MATH 240",
                title: "Linear Algebra",
                instructor: "Prof. Robert Johnson",
                schedule: "Tue/Thu 2:00 PM",
                progress: 78,
                assignments: 1,
                upcoming: "Problem Set 7 - Mar 12",
              },
              {
                code: "PHYS 201",
                title: "Electricity & Magnetism",
                instructor: "Dr. Michael Chen",
                schedule: "Mon/Wed 3:30 PM",
                progress: 42,
                assignments: 2,
                upcoming: "Lab Report - Mar 10",
              },
              {
                code: "ENG 215",
                title: "Technical Writing",
                instructor: "Prof. Sarah Williams",
                schedule: "Tue/Thu 11:00 AM",
                progress: 89,
                assignments: 1,
                upcoming: "Final Paper Draft - Mar 20",
              },
              {
                code: "BIO 110",
                title: "Introduction to Biology",
                instructor: "Dr. Lisa Garcia",
                schedule: "Mon/Wed/Fri 9:00 AM",
                progress: 55,
                assignments: 0,
                upcoming: "Lab Practical - Mar 18",
              },
              {
                code: "ECON 202",
                title: "Macroeconomics",
                instructor: "Prof. David Lee",
                schedule: "Tue/Thu 4:00 PM",
                progress: 70,
                assignments: 2,
                upcoming: "Group Project - Mar 25",
              },
            ].map((course, i) => (
              <Card key={i} className="flex flex-col">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <Badge variant="outline" className="mb-1">
                        {course.code}
                      </Badge>
                      <CardTitle className="text-base">{course.title}</CardTitle>
                      <CardDescription>{course.instructor}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{course.schedule}</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Course Progress</span>
                        <span className="font-medium">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Upcoming:</span>
                      </div>
                      <Badge variant="secondary">{course.upcoming}</Badge>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-2">
                  <Button variant="ghost" className="w-full justify-between">
                    View Course
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="upcoming" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Courses</CardTitle>
              <CardDescription>Courses available for registration in the next semester</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  code: "CS 401",
                  title: "Advanced Algorithms",
                  instructor: "Dr. Alan Turing",
                  schedule: "Fall 2023",
                  prerequisites: "CS 301, MATH 240",
                  seats: "32/40",
                },
                {
                  code: "CS 350",
                  title: "Database Systems",
                  instructor: "Prof. Ada Lovelace",
                  schedule: "Fall 2023",
                  prerequisites: "CS 301",
                  seats: "45/50",
                },
                {
                  code: "CS 380",
                  title: "Artificial Intelligence",
                  instructor: "Dr. Grace Hopper",
                  schedule: "Fall 2023",
                  prerequisites: "CS 301, MATH 240",
                  seats: "28/35",
                },
              ].map((course, i) => (
                <div key={i} className="rounded-lg border p-4">
                  <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{course.code}</Badge>
                        <Badge variant="secondary">{course.schedule}</Badge>
                      </div>
                      <div className="mt-2 font-medium">{course.title}</div>
                      <div className="text-sm text-muted-foreground">{course.instructor}</div>
                      <div className="mt-1 text-xs text-muted-foreground">Prerequisites: {course.prerequisites}</div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="text-sm">
                        Available Seats: <span className="font-medium">{course.seats}</span>
                      </div>
                      <Button size="sm">Register</Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Available Courses
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Completed Courses</CardTitle>
              <CardDescription>Your academic history and completed coursework</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  {
                    semester: "Fall 2022",
                    courses: [
                      { code: "CS 201", title: "Introduction to Programming", grade: "A", credits: 4 },
                      { code: "MATH 220", title: "Calculus I", grade: "B+", credits: 4 },
                      { code: "ENG 101", title: "Composition", grade: "A-", credits: 3 },
                      { code: "HIST 110", title: "World History", grade: "B", credits: 3 },
                    ],
                  },
                  {
                    semester: "Spring 2022",
                    courses: [
                      { code: "CS 101", title: "Computer Science Fundamentals", grade: "A", credits: 3 },
                      { code: "MATH 120", title: "Precalculus", grade: "A-", credits: 4 },
                      { code: "CHEM 101", title: "General Chemistry", grade: "B+", credits: 4 },
                      { code: "PSYC 101", title: "Introduction to Psychology", grade: "A", credits: 3 },
                    ],
                  },
                ].map((term, i) => (
                  <div key={i}>
                    <h3 className="mb-2 font-medium">{term.semester}</h3>
                    <div className="rounded-md border">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b bg-muted/50">
                            <th className="px-4 py-2 text-left font-medium">Course</th>
                            <th className="px-4 py-2 text-left font-medium">Title</th>
                            <th className="px-4 py-2 text-center font-medium">Grade</th>
                            <th className="px-4 py-2 text-center font-medium">Credits</th>
                          </tr>
                        </thead>
                        <tbody>
                          {term.courses.map((course, j) => (
                            <tr key={j} className="border-b last:border-0">
                              <td className="px-4 py-2 font-medium">{course.code}</td>
                              <td className="px-4 py-2">{course.title}</td>
                              <td className="px-4 py-2 text-center">{course.grade}</td>
                              <td className="px-4 py-2 text-center">{course.credits}</td>
                            </tr>
                          ))}
                        </tbody>
                        <tfoot>
                          <tr className="bg-muted/50">
                            <td className="px-4 py-2 font-medium" colSpan={2}>
                              Semester GPA
                            </td>
                            <td className="px-4 py-2 text-center font-medium" colSpan={2}>
                              {i === 0 ? "3.45" : "3.70"}
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="grades" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Academic Summary</CardTitle>
                <CardDescription>Your overall academic performance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2 rounded-lg border p-4">
                    <div className="text-sm text-muted-foreground">Cumulative GPA</div>
                    <div className="text-2xl font-bold">3.58</div>
                    <Progress value={89.5} className="h-2" />
                  </div>
                  <div className="space-y-2 rounded-lg border p-4">
                    <div className="text-sm text-muted-foreground">Credits Completed</div>
                    <div className="text-2xl font-bold">42/120</div>
                    <Progress value={35} className="h-2" />
                  </div>
                  <div className="space-y-2 rounded-lg border p-4">
                    <div className="text-sm text-muted-foreground">Major GPA</div>
                    <div className="text-2xl font-bold">3.75</div>
                    <Progress value={93.75} className="h-2" />
                  </div>
                  <div className="space-y-2 rounded-lg border p-4">
                    <div className="text-sm text-muted-foreground">Current Semester</div>
                    <div className="text-2xl font-bold">3.62</div>
                    <Progress value={90.5} className="h-2" />
                  </div>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="mb-2 font-medium">Degree Progress</div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Computer Science B.S.</span>
                      <span>35%</span>
                    </div>
                    <Progress value={35} />
                    <div className="text-xs text-muted-foreground">42 credits completed of 120 required</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Grade Distribution</CardTitle>
                <CardDescription>Breakdown of your grades by letter</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] rounded-md border border-dashed p-6 text-center">
                  <div className="flex h-full flex-col items-center justify-center">
                    <BarChart className="mb-4 h-10 w-10 text-muted-foreground" />
                    <h3 className="text-lg font-medium">Grade Distribution Chart</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Visualization of your grade distribution would appear here
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex w-full justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-primary"></div>
                    <span className="text-sm">A: 8 courses</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                    <span className="text-sm">B: 5 courses</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <span className="text-sm">C: 1 course</span>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Academic Achievements</CardTitle>
              <CardDescription>Your awards, honors, and academic recognition</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "Dean's List",
                    date: "Fall 2022",
                    description: "Awarded for achieving a semester GPA of 3.5 or higher",
                  },
                  {
                    title: "Programming Competition - 2nd Place",
                    date: "Spring 2022",
                    description: "University-wide algorithmic programming competition",
                  },
                  {
                    title: "Academic Excellence Scholarship",
                    date: "2022-2023",
                    description: "Merit-based scholarship for outstanding academic performance",
                  },
                ].map((achievement, i) => (
                  <div key={i} className="flex items-start gap-4 rounded-lg border p-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">{achievement.title}</div>
                      <div className="text-sm text-muted-foreground">{achievement.date}</div>
                      <div className="mt-1 text-sm">{achievement.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
    </PageContainer>
  )
}
