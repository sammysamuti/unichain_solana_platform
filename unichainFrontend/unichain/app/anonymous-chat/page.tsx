import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Send, Users, Lock, Shield, Info, Plus, Search } from "lucide-react"
import { PageContainer } from "@/components/page-container"

export default function AnonymousChatPage() {
  return (
    <PageContainer>
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Anonymous Chat</h1>
          <p className="text-muted-foreground">Connect with peers anonymously in a safe and supportive environment</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Shield className="h-4 w-4" />
            Privacy Settings
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            New Chat
          </Button>
        </div>
      </div>

      <Card className="border-none shadow-none">
        <CardHeader className="px-0 pt-0">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Lock className="h-4 w-4" />
            <span>Your identity is protected. All messages are end-to-end encrypted.</span>
          </div>
        </CardHeader>
      </Card>

      <Tabs defaultValue="chats" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="chats">Active Chats</TabsTrigger>
          <TabsTrigger value="groups">Support Groups</TabsTrigger>
          <TabsTrigger value="discover">Discover</TabsTrigger>
        </TabsList>

        <TabsContent value="chats" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="md:col-span-1">
              <Card className="h-[600px]">
                <CardHeader className="p-4">
                  <CardTitle className="text-base">Conversations</CardTitle>
                  <div className="relative mt-2">
                    <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input placeholder="Search chats..." className="pl-8" />
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-1">
                    {[
                      { id: 1, name: "Anonymous #1", active: true, time: "2m", unread: 3 },
                      { id: 2, name: "Anonymous #2", active: false, time: "1h" },
                      { id: 3, name: "Anonymous #3", active: false, time: "3h" },
                      { id: 4, name: "Anonymous #4", active: false, time: "1d" },
                      { id: 5, name: "Anonymous #5", active: false, time: "2d" },
                    ].map((chat) => (
                      <div
                        key={chat.id}
                        className={`flex items-center justify-between p-4 hover:bg-accent ${
                          chat.active ? "bg-accent" : ""
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className="bg-primary/10 text-primary">{chat.id}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{chat.name}</div>
                            <div className="text-xs text-muted-foreground">Last active: {chat.time} ago</div>
                          </div>
                        </div>
                        {chat.unread && <Badge className="ml-auto">{chat.unread}</Badge>}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="md:col-span-2">
              <Card className="flex h-[600px] flex-col">
                <CardHeader className="border-b p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-primary/10 text-primary">1</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">Anonymous #1</div>
                        <div className="text-xs text-muted-foreground">Online now</div>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Info className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 overflow-auto p-4">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Avatar className="mt-1 h-8 w-8">
                        <AvatarFallback className="bg-primary/10 text-primary">1</AvatarFallback>
                      </Avatar>
                      <div className="rounded-lg bg-accent p-3">
                        <p>Hi there! I've been feeling really stressed about midterms. Anyone else in the same boat?</p>
                        <div className="mt-1 text-right text-xs text-muted-foreground">10:30 AM</div>
                      </div>
                    </div>
                    <div className="flex items-start justify-end gap-3">
                      <div className="rounded-lg bg-primary p-3 text-primary-foreground">
                        <p>Hey! Absolutely feeling the same way. What classes are you most worried about?</p>
                        <div className="mt-1 text-right text-xs text-primary-foreground/80">10:32 AM</div>
                      </div>
                      <Avatar className="mt-1 h-8 w-8">
                        <AvatarFallback className="bg-secondary text-secondary-foreground">You</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="flex items-start gap-3">
                      <Avatar className="mt-1 h-8 w-8">
                        <AvatarFallback className="bg-primary/10 text-primary">1</AvatarFallback>
                      </Avatar>
                      <div className="rounded-lg bg-accent p-3">
                        <p>Mostly worried about Calculus and Physics. I'm struggling to keep up with the material.</p>
                        <div className="mt-1 text-right text-xs text-muted-foreground">10:35 AM</div>
                      </div>
                    </div>
                    <div className="flex items-start justify-end gap-3">
                      <div className="rounded-lg bg-primary p-3 text-primary-foreground">
                        <p>
                          I found some really helpful study groups for those subjects. Would you like me to share some
                          resources?
                        </p>
                        <div className="mt-1 text-right text-xs text-primary-foreground/80">10:36 AM</div>
                      </div>
                      <Avatar className="mt-1 h-8 w-8">
                        <AvatarFallback className="bg-secondary text-secondary-foreground">You</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="flex items-start gap-3">
                      <Avatar className="mt-1 h-8 w-8">
                        <AvatarFallback className="bg-primary/10 text-primary">1</AvatarFallback>
                      </Avatar>
                      <div className="rounded-lg bg-accent p-3">
                        <p>That would be amazing! Thank you so much for offering to help.</p>
                        <div className="mt-1 text-right text-xs text-muted-foreground">10:38 AM</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t p-4">
                  <div className="flex w-full items-center gap-2">
                    <Input placeholder="Type a message..." className="flex-1" />
                    <Button size="icon">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="groups" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Stress Management",
                members: 28,
                active: 5,
                description: "Discuss strategies for managing academic stress and maintaining balance",
              },
              {
                name: "Exam Anxiety",
                members: 42,
                active: 8,
                description: "Support group for students dealing with test anxiety and performance pressure",
              },
              {
                name: "Work-Life Balance",
                members: 35,
                active: 3,
                description: "Share tips for balancing academics, work, and personal life",
              },
              {
                name: "First-Year Support",
                members: 56,
                active: 12,
                description: "A safe space for freshmen to discuss challenges and adjustments",
              },
              {
                name: "Graduate Student Life",
                members: 24,
                active: 4,
                description: "Connect with other graduate students facing similar challenges",
              },
              {
                name: "International Students",
                members: 47,
                active: 9,
                description: "Support network for international students navigating university life",
              },
            ].map((group, i) => (
              <Card key={i} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="text-base">{group.name}</CardTitle>
                  <CardDescription>{group.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{group.members} members</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-green-500">{group.active} online</span>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4">
                  <Button variant="outline" className="w-full">
                    Join Group
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="discover" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Discover Peers</CardTitle>
              <CardDescription>Find and connect with peers based on shared interests or courses</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search by interests, courses, or major..." className="pl-9" />
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Computer Science",
                    "Engineering",
                    "Pre-Med",
                    "Business",
                    "Psychology",
                    "Art",
                    "Music",
                    "Mathematics",
                    "Physics",
                    "Chemistry",
                    "Biology",
                    "Literature",
                  ].map((tag, i) => (
                    <Badge key={i} variant="outline" className="cursor-pointer hover:bg-accent">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-sm font-medium">Suggested Connections</h3>
                {[
                  {
                    id: "A42",
                    interests: ["Computer Science", "Mathematics", "Gaming"],
                    courses: ["CS 301", "MATH 240"],
                    bio: "Junior CS major interested in algorithms and AI. Looking for study partners.",
                  },
                  {
                    id: "B17",
                    interests: ["Physics", "Engineering", "Robotics"],
                    courses: ["PHYS 201", "ENG 215"],
                    bio: "Physics/Engineering double major working on robotics projects. Happy to help with coursework.",
                  },
                  {
                    id: "C89",
                    interests: ["Biology", "Pre-Med", "Research"],
                    courses: ["BIO 110", "CHEM 101"],
                    bio: "Pre-med student interested in research opportunities and forming study groups.",
                  },
                ].map((peer, i) => (
                  <div key={i} className="rounded-lg border p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <Avatar className="mt-1 h-10 w-10">
                          <AvatarFallback className="bg-primary/10 text-primary">{peer.id}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">Anonymous {peer.id}</div>
                          <div className="mt-1 text-sm">{peer.bio}</div>
                          <div className="mt-2 flex flex-wrap gap-1">
                            {peer.interests.map((interest, j) => (
                              <Badge key={j} variant="secondary" className="text-xs">
                                {interest}
                              </Badge>
                            ))}
                          </div>
                          <div className="mt-2 text-xs text-muted-foreground">Courses: {peer.courses.join(", ")}</div>
                        </div>
                      </div>
                      <Button size="sm">Connect</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View More Suggestions
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
    </PageContainer>
  )
}

