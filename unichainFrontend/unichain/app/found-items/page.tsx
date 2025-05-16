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
import {
  Calendar,
  Clock,
  MapPin,
  MessageSquare,
  Search,
  Tag,
} from "lucide-react";
import { PageContainer } from "@/components/page-container";

export default function FoundItemsPage() {
  return (
    <PageContainer>
      <div className="mb-6 flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Found Items</h1>
        <p className="text-muted-foreground">
          Browse items found on campus or report an item you've found
        </p>
      </div>

      <div className="mb-6 flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input className="pl-9" placeholder="Search for lost items..." />
        </div>
        <Button>
          <MapPin className="mr-2 h-4 w-4" />
          Report Found Item
        </Button>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All Items</TabsTrigger>
          <TabsTrigger value="id">ID Cards</TabsTrigger>
          <TabsTrigger value="electronics">Electronics</TabsTrigger>
          <TabsTrigger value="other">Other</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Student ID Card */}
            <Card>
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1609743522653-52354461eb27?w=800&auto=format&fit=crop&q=60"
                  alt="Student ID Card"
                  className="h-full w-full object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle>Student ID Card</CardTitle>
                  <Badge className="bg-green-500">Recently Found</Badge>
                </div>
                <CardDescription>Found near Main Library</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>Found on March 5, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>Main Library, 2nd Floor</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4 text-muted-foreground" />
                    <span>ID Card, University</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Contact Finder
                </Button>
                <Button size="sm">Claim Item</Button>
              </CardFooter>
            </Card>

            {/* Laptop */}
            <Card>
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&auto=format&fit=crop&q=60"
                  alt="Laptop"
                  className="h-full w-full object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle>Laptop</CardTitle>
                  <Badge>3 days ago</Badge>
                </div>
                <CardDescription>Found in Science Building</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>Found on March 3, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>Science Building, Room 203</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4 text-muted-foreground" />
                    <span>Electronics, Computer</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Contact Finder
                </Button>
                <Button size="sm">Claim Item</Button>
              </CardFooter>
            </Card>

            {/* Textbook */}
            <Card>
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&auto=format&fit=crop&q=60"
                  alt="Textbook"
                  className="h-full w-full object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle>Calculus Textbook</CardTitle>
                  <Badge>1 week ago</Badge>
                </div>
                <CardDescription>Found in Student Center</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>Found on February 28, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>Student Center, Cafeteria</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4 text-muted-foreground" />
                    <span>Books, Academic</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Contact Finder
                </Button>
                <Button size="sm">Claim Item</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="id" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Student ID Card */}
            <Card>
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1609743522653-52354461eb27?w=800&auto=format&fit=crop&q=60"
                  alt="Student ID Card"
                  className="h-full w-full object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle>Student ID Card</CardTitle>
                  <Badge className="bg-green-500">Recently Found</Badge>
                </div>
                <CardDescription>Found near Main Library</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>Found on March 5, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>Main Library, 2nd Floor</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Contact Finder
                </Button>
                <Button size="sm">Claim Item</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="electronics" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Laptop */}
            <Card>
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&auto=format&fit=crop&q=60"
                  alt="Laptop"
                  className="h-full w-full object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle>Laptop</CardTitle>
                  <Badge>3 days ago</Badge>
                </div>
                <CardDescription>Found in Science Building</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>Found on March 3, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>Science Building, Room 203</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Contact Finder
                </Button>
                <Button size="sm">Claim Item</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="other" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Textbook */}
            <Card>
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&auto=format&fit=crop&q=60"
                  alt="Textbook"
                  className="h-full w-full object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle>Calculus Textbook</CardTitle>
                  <Badge>1 week ago</Badge>
                </div>
                <CardDescription>Found in Student Center</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>Found on February 28, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>Student Center, Cafeteria</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Contact Finder
                </Button>
                <Button size="sm">Claim Item</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </PageContainer>
  );
}
