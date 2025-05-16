import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Plus,
  ChevronLeft,
  ChevronRight,
  CalendarIcon,
  Clock,
  MapPin,
  Users,
} from "lucide-react";
import { PageContainer } from "@/components/page-container";

export default function CalendarPage() {
  return (
    <PageContainer>
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Calendar</h1>
          <p className="text-muted-foreground">
            Manage your schedule and upcoming events
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            Today
          </Button>
          <div className="flex items-center rounded-md border">
            <Button variant="ghost" size="icon" className="rounded-r-none">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-l-none">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            New Event
          </Button>
        </div>
      </div>

      <Tabs defaultValue="month" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="month">Month</TabsTrigger>
          <TabsTrigger value="week">Week</TabsTrigger>
          <TabsTrigger value="day">Day</TabsTrigger>
          <TabsTrigger value="agenda">Agenda</TabsTrigger>
        </TabsList>
        <TabsContent value="month" className="space-y-4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-7 lg:grid-cols-7">
            <div className="col-span-1 md:col-span-5">
              <CalendarWrapper date={new Date()} />
            </div>

            <div className="col-span-1 md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Events</CardTitle>
                  <CardDescription>
                    Your schedule for the next few days
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      title: "Study Group - Algorithms",
                      time: "Today, 3:00 PM",
                      location: "Library, Room 302",
                      attendees: 4,
                      type: "academic",
                    },
                    {
                      title: "Mental Health Workshop",
                      time: "Tomorrow, 2:00 PM",
                      location: "Student Center",
                      attendees: 12,
                      type: "health",
                    },
                    {
                      title: "Blockchain Club Meeting",
                      time: "Friday, 5:00 PM",
                      location: "Engineering Building",
                      attendees: 8,
                      type: "club",
                    },
                  ].map((event, i) => (
                    <div key={i} className="rounded-lg border p-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="font-medium">{event.title}</div>
                          <div className="mt-2 flex flex-col gap-1 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              <span>{event.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="h-3 w-3" />
                              <span>{event.attendees} attendees</span>
                            </div>
                          </div>
                        </div>
                        <Badge
                          variant={
                            event.type === "academic"
                              ? "default"
                              : event.type === "health"
                              ? "secondary"
                              : "outline"
                          }
                        >
                          {event.type}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full">
                    View All Events
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="week">
          <div className="h-[600px] rounded-md border border-dashed p-8 text-center">
            <div className="flex h-full flex-col items-center justify-center">
              <CalendarIcon className="mb-4 h-10 w-10 text-muted-foreground" />
              <h3 className="text-lg font-medium">Week View</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Weekly calendar view would be displayed here
              </p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="day">
          <div className="h-[600px] rounded-md border border-dashed p-8 text-center">
            <div className="flex h-full flex-col items-center justify-center">
              <CalendarIcon className="mb-4 h-10 w-10 text-muted-foreground" />
              <h3 className="text-lg font-medium">Day View</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Daily calendar view would be displayed here
              </p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="agenda">
          <Card>
            <CardHeader>
              <CardTitle>Agenda View</CardTitle>
              <CardDescription>
                Chronological list of your upcoming events
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                "Today",
                "Tomorrow",
                "Friday, March 10",
                "Monday, March 13",
              ].map((day, i) => (
                <div key={i}>
                  <h3 className="mb-2 font-medium">{day}</h3>
                  <div className="space-y-2">
                    {Array.from({ length: i === 0 ? 3 : i === 1 ? 2 : 1 }).map(
                      (_, j) => (
                        <div
                          key={j}
                          className="flex items-center justify-between rounded-lg border p-3"
                        >
                          <div className="flex items-center gap-4">
                            <div className="text-center">
                              <div className="text-sm font-medium">
                                {i === 0
                                  ? j === 0
                                    ? "10:00"
                                    : j === 1
                                    ? "15:00"
                                    : "17:30"
                                  : i === 1
                                  ? j === 0
                                    ? "14:00"
                                    : "16:30"
                                  : "11:00"}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {i === 0
                                  ? j === 0
                                    ? "1h"
                                    : j === 1
                                    ? "2h"
                                    : "30m"
                                  : i === 1
                                  ? j === 0
                                    ? "1h"
                                    : "1h"
                                  : "1h30m"}
                              </div>
                            </div>
                            <div>
                              <div className="font-medium">
                                {i === 0
                                  ? j === 0
                                    ? "Team Meeting"
                                    : j === 1
                                    ? "Study Group"
                                    : "Office Hours"
                                  : i === 1
                                  ? j === 0
                                    ? "Mental Health Workshop"
                                    : "Career Advising"
                                  : "Project Presentation"}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {i === 0
                                  ? j === 0
                                    ? "Virtual"
                                    : j === 1
                                    ? "Library"
                                    : "Professor's Office"
                                  : i === 1
                                  ? j === 0
                                    ? "Student Center"
                                    : "Career Center"
                                  : "Lecture Hall"}
                              </div>
                            </div>
                          </div>
                          <Badge variant="outline">
                            {i === 0
                              ? j === 0
                                ? "Meeting"
                                : j === 1
                                ? "Academic"
                                : "Office Hours"
                              : i === 1
                              ? j === 0
                                ? "Workshop"
                                : "Career"
                              : "Presentation"}
                          </Badge>
                        </div>
                      )
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </PageContainer>
  );
}

function CalendarWrapper({ date }: { date: Date }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>March 2023</CardTitle>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-7 w-7">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-7 w-7">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Calendar mode="single" selected={date} className="rounded-md border" />
      </CardContent>
    </Card>
  );
}
