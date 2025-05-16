'use client';

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Brain, ExternalLink, Lock, MessageSquare, Shield, Users } from "lucide-react";
import { PageContainer } from "@/components/page-container";
import { Toaster, toast } from 'sonner';

const supportGroups = [
  {
    title: "Mental Health Addis Support Group",
    description: "Join our community dedicated to mental well-being. We promote monthly mental health talks at ADORE Addis Hotel, fostering open discussions and support.",
    members: 500,
    link: "https://t.me/mentaladdis",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "የአዕምሮ ጤና - Mental Health Support Group",
    description: "Join our Telegram community of over 9,000 members dedicated to mental well-being. Engage in open discussions, share experiences, and access resources.",
    members: 9000,
    link: "https://t.me/MentalHealth06",
    gradient: "from-pink-500 to-purple-500"
  },
  {
    title: "Amanuel Mental Specialized Hospital Laboratory",
    description: "Connect with AMSHL's Telegram community. Engage in discussions and access resources focused on advancing mental health solutions.",
    members: 172,
    link: "https://t.me/AMSHL47",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Dr. Estifanos (MD, Psychiatrist)",
    description: "Join Dr. Estifanos's Telegram channel for professional insights and discussions about mental health.",
    members: 2200,
    link: "https://t.me/DrEstif",
    gradient: "from-pink-500 to-purple-500"
  },
  {
    title: "LSSYA | ሊስያ™",
    description: "Online psychological counseling platform connecting you with professionals. Web app coming soon.",
    members: 1700,
    link: "https://t.me/LSSYAOfficial",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Lebeza Psychiatry Specialty Clinic",
    description: "Access information about our clinic near Urael Church. Contact: 0966-11-11-11",
    members: 1700,
    link: "https://t.me/lebezapsychiatryspecialityclinic",
    gradient: "from-pink-500 to-purple-500"
  },
  {
    title: "HERE4U – Youth Mental Health Support",
    description: "Supporting youths aged 15-27 dealing with feelings of sadness, loneliness, or depression. Access to professional psychologists.",
    members: 400,
    link: "https://t.me/Here4uETH",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Ethio Psychiatry",
    description: "Mental health awareness and support. No Health Without Mental Health! Contact: +251949114685",
    members: 5600,
    link: "https://t.me/ethiopsychiatry",
    gradient: "from-pink-500 to-purple-500"
  }
];

const resources = [
  {
    title: "Mental Health Articles",
    description: "Curated articles and research papers on mental health topics",
    link: "https://www.who.int/health-topics/mental-health",
    icon: Brain
  },
  {
    title: "Self-Help Resources",
    description: "Guides and tools for managing mental health",
    link: "https://www.nimh.nih.gov/health/topics/mental-health",
    icon: Brain
  },
  {
    title: "Crisis Helplines",
    description: "24/7 emergency mental health support contacts",
    link: "https://www.befrienders.org/",
    icon: Shield
  }
];

export default function SupportGroupsPage() {
  const avatarImages = [
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=800&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60",
  ];

  const handleJoinGroup = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
    toast.success('Opening Telegram group in a new tab');
  };

  return (
    <PageContainer>
      <Toaster />
      <div className="mb-6 flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">
          Mental Health Support
        </h1>
        <p className="text-muted-foreground">
          Join support groups and connect with mental health professionals
        </p>
      </div>

      <Tabs defaultValue="groups" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="groups">Support Groups</TabsTrigger>
          <TabsTrigger value="counseling">Counseling</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="groups" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {supportGroups.map((group, index) => (
              <Card key={index} className="overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${group.gradient}`}></div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{group.title}</CardTitle>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      <span>{group.members.toLocaleString()} members</span>
                    </Badge>
                  </div>
                  <CardDescription>
                    {group.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex -space-x-2">
                      {avatarImages.map((src, i) => (
                        <Avatar key={i} className="border-2 border-background">
                          <AvatarImage src={src} />
                          <AvatarFallback>A{i}</AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                    <div className="rounded-md bg-muted p-3">
                      <div className="flex items-center gap-2">
                        <Lock className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">
                          Telegram Community
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" onClick={() => handleJoinGroup(group.link)}>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Join Telegram Group
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="counseling" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Professional Counseling</CardTitle>
                <CardDescription>
                  Connect with licensed mental health professionals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Schedule a confidential session with our counselors.</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Book Appointment</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="resources" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <resource.icon className="h-5 w-5" />
                    <CardTitle>{resource.title}</CardTitle>
                  </div>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button className="w-full" onClick={() => window.open(resource.link, '_blank', 'noopener,noreferrer')}>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Access Resources
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </PageContainer>
  );
}
