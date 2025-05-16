import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Filter, MapPin, Clock, ArrowUpDown } from "lucide-react";
import { PageContainer } from "@/components/page-container";

export default function LostFoundPage() {
  return (
    <PageContainer>
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Lost & Found</h1>
          <p className="text-muted-foreground">
            Campus-wide network for lost and found items
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Post Item
          </Button>
        </div>
      </div>

      <div className="relative mt-6">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Search for items..." className="w-full pl-9 pr-4" />
      </div>

      <Tabs defaultValue="lost" className="w-full mt-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="lost">Lost Items</TabsTrigger>
          <TabsTrigger value="found">Found Items</TabsTrigger>
          <TabsTrigger value="my-posts">My Posts</TabsTrigger>
        </TabsList>
        <TabsContent value="lost" className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Showing 12 lost items
            </div>
            <Button variant="ghost" size="sm" className="gap-1">
              <ArrowUpDown className="h-3.5 w-3.5" />
              Sort by date
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Blue Backpack",
                location: "Library",
                time: "2 hours ago",
                status: "lost",
                image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=60",
              },
              {
                name: "Student ID Card",
                location: "Student Center",
                time: "Yesterday",
                status: "lost",
                image: "https://images.unsplash.com/photo-1609743522653-52354461eb27?w=800&auto=format&fit=crop&q=60",
              },
              {
                name: "Water Bottle",
                location: "Gym",
                time: "3 days ago",
                status: "lost",
                image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&auto=format&fit=crop&q=60",
              },
              {
                name: "Laptop Charger",
                location: "Engineering Building",
                time: "1 week ago",
                status: "lost",
                image: "https://images.unsplash.com/photo-1588599376442-3cbf9c67449e?w=800&auto=format&fit=crop&q=60",
              },
              {
                name: "Notebook",
                location: "Science Lab",
                time: "2 weeks ago",
                status: "lost",
                image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=800&auto=format&fit=crop&q=60",
              },
              {
                name: "Wireless Earbuds",
                location: "Cafeteria",
                time: "3 weeks ago",
                status: "lost",
                image: "https://images.unsplash.com/photo-1606220838315-056192d5e927?w=800&auto=format&fit=crop&q=60",
              },
            ].map((item, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="aspect-[4/3] bg-muted">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader className="p-4">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-base">{item.name}</CardTitle>
                    <Badge
                      variant={
                        item.status === "lost" ? "destructive" : "default"
                      }
                    >
                      {item.status === "lost" ? "Lost" : "Found"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="grid gap-1 text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{item.time}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button variant="outline" size="sm" className="w-full">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="found" className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Showing 8 found items
            </div>
            <Button variant="ghost" size="sm" className="gap-1">
              <ArrowUpDown className="h-3.5 w-3.5" />
              Sort by date
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Calculator",
                location: "Math Building",
                time: "1 hour ago",
                status: "found",
                image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=60",
              },
              {
                name: "Umbrella",
                location: "Bus Stop",
                time: "Yesterday",
                status: "found",
                image: "https://images.unsplash.com/photo-1609743522653-52354461eb27?w=800&auto=format&fit=crop&q=60",
              },
              {
                name: "House Keys",
                location: "Cafeteria",
                time: "2 days ago",
                status: "found",
                image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&auto=format&fit=crop&q=60",
              },
              {
                name: "Textbook",
                location: "Library",
                time: "1 week ago",
                status: "found",
                image: "https://images.unsplash.com/photo-1588599376442-3cbf9c67449e?w=800&auto=format&fit=crop&q=60",
              },
            ].map((item, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="aspect-[4/3] bg-muted">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader className="p-4">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-base">{item.name}</CardTitle>
                    <Badge
                      variant={
                        item.status === "lost" ? "destructive" : "default"
                      }
                    >
                      {item.status === "lost" ? "Lost" : "Found"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="grid gap-1 text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{item.time}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button variant="outline" size="sm" className="w-full">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="my-posts">
          <Card>
            <CardHeader>
              <CardTitle>My Posts</CardTitle>
              <CardDescription>
                Manage your lost and found item posts
              </CardDescription>
            </CardHeader>
            <CardContent>
              {[1, 2].map((post) => (
                <div
                  key={post}
                  className="mb-4 rounded-lg border p-4 last:mb-0"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="font-medium">
                        {post === 1 ? "Textbook" : "Student ID Card"}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {post === 1
                          ? "Found • Library • 2 days ago"
                          : "Lost • Student Center • 1 week ago"}
                      </div>
                    </div>
                    <Badge variant={post === 1 ? "default" : "destructive"}>
                      {post === 1 ? "Found" : "Lost"}
                    </Badge>
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button variant="ghost" size="sm">
                      Delete
                    </Button>
                    {post === 2 && (
                      <Badge variant="outline" className="ml-auto">
                        2 Responses
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button className="w-full gap-1">
                <Plus className="h-4 w-4" />
                Create New Post
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </PageContainer>
  );
}
