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
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  FileQuestion,
  Search,
  MessageSquare,
  BookOpen,
  LifeBuoy,
  ExternalLink,
} from "lucide-react";
import { PageContainer } from "@/components/page-container";

export default function HelpCenterPage() {
  return (
    <PageContainer>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Help Center</h1>
          <p className="text-muted-foreground">
            Find answers, resources, and support for UniChain
          </p>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search for help..." className="pl-9 pr-4" />
        </div>

        <Tabs defaultValue="faqs" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="faqs">FAQs</TabsTrigger>
            <TabsTrigger value="guides">Guides</TabsTrigger>
            <TabsTrigger value="support">Support</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>
          <TabsContent value="faqs" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>General Questions</CardTitle>
                  <CardDescription>
                    Common questions about UniChain
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>What is UniChain?</AccordionTrigger>
                      <AccordionContent>
                        UniChain is a decentralized application built on Solana
                        that provides a holistic campus ecosystem for university
                        students. It includes features for academic credential
                        management, mental health support, and a lost and found
                        network.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>How do I get started?</AccordionTrigger>
                      <AccordionContent>
                        To get started, simply create an account using your
                        university email. You'll then be able to access all the
                        features of UniChain through your dashboard.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>
                        Is UniChain free to use?
                      </AccordionTrigger>
                      <AccordionContent>
                        Yes, UniChain is free for all university students. The
                        platform is funded through university partnerships and
                        grants.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Account & Security</CardTitle>
                  <CardDescription>
                    Questions about your account and security
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        How do I reset my password?
                      </AccordionTrigger>
                      <AccordionContent>
                        You can reset your password by clicking on the "Forgot
                        Password" link on the login page. You'll receive an email
                        with instructions to create a new password.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>
                        How is my data protected?
                      </AccordionTrigger>
                      <AccordionContent>
                        UniChain uses blockchain technology to secure your data.
                        Your personal information and academic credentials are
                        encrypted and stored securely.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>
                        What is a wallet address?
                      </AccordionTrigger>
                      <AccordionContent>
                        A wallet address is your unique identifier on the
                        blockchain. It's used to securely store and manage your
                        digital assets and credentials.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Features & Services</CardTitle>
                <CardDescription>
                  Questions about UniChain's features
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      How does academic credential verification work?
                    </AccordionTrigger>
                    <AccordionContent>
                      When you upload an academic document, UniChain verifies it
                      with your university's records. Once verified, it's stored
                      securely on the blockchain, allowing you to share it with
                      employers or other institutions.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>
                      Are mental health resources confidential?
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes, all mental health resources and interactions are
                      completely confidential. Your data is encrypted and only
                      accessible to you and authorized mental health
                      professionals.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>
                      How do I post a lost or found item?
                    </AccordionTrigger>
                    <AccordionContent>
                      Navigate to the Lost & Found section and click "Post Item."
                      Fill out the form with details about the item, including a
                      description, location, and optional photo.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="guides" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Getting Started",
                  description: "Learn the basics of UniChain",
                  icon: BookOpen,
                },
                {
                  title: "Academic Credentials",
                  description: "Managing your academic documents",
                  icon: FileQuestion,
                },
                {
                  title: "Mental Health Resources",
                  description: "Using wellness tools and resources",
                  icon: LifeBuoy,
                },
                {
                  title: "Lost & Found",
                  description: "How to post and find items",
                  icon: LifeBuoy,
                },
                {
                  title: "Wallet Setup",
                  description: "Setting up your blockchain wallet",
                  icon: LifeBuoy,
                },
                {
                  title: "Privacy & Security",
                  description: "Protecting your data and privacy",
                  icon: LifeBuoy,
                },
              ].map((guide, i) => (
                <Card key={i} className="flex flex-col">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-primary/10 p-2">
                        <guide.icon className="h-4 w-4 text-primary" />
                      </div>
                      <CardTitle className="text-base">{guide.title}</CardTitle>
                    </div>
                    <CardDescription>{guide.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-1 text-sm">
                      <li className="text-muted-foreground">• Introduction</li>
                      <li className="text-muted-foreground">• Key features</li>
                      <li className="text-muted-foreground">
                        • Step-by-step tutorial
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full gap-1">
                      Read Guide
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="support" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Support Options</CardTitle>
                <CardDescription>
                  Get help with your UniChain account and services
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-lg border p-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Live Chat</h3>
                      <p className="text-sm text-muted-foreground">
                        Chat with our support team in real-time
                      </p>
                      <Button className="mt-4" size="sm">
                        Start Chat
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <LifeBuoy className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Support Ticket</h3>
                      <p className="text-sm text-muted-foreground">
                        Create a ticket for complex issues
                      </p>
                      <Button className="mt-4" size="sm">
                        Create Ticket
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-2 border-t p-4">
                <div className="text-sm font-medium">Support Hours</div>
                <div className="text-sm text-muted-foreground">
                  Monday - Friday: 9:00 AM - 5:00 PM
                </div>
                <div className="text-sm text-muted-foreground">
                  Weekend: 10:00 AM - 2:00 PM
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="contact" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
                <CardDescription>
                  Reach out to our team with questions or feedback
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="What is your message about?" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="How can we help?"
                    className="min-h-32"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between gap-2">
                <Button variant="outline">Cancel</Button>
                <Button>Send Message</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PageContainer>
  );
}

function Label({
  children,
  htmlFor,
}: {
  children: React.ReactNode;
  htmlFor: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      {children}
    </label>
  );
}

function Textarea({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={`flex min-h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  );
}
