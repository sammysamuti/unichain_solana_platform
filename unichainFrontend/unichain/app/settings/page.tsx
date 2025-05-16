import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  UserCircle,
  LockKeyhole,
  Bell,
  Shield,
  Wallet,
  Eye,
  EyeOff,
} from "lucide-react";
import { PageContainer } from "@/components/page-container";

export default function SettingsPage() {
  return (
    <PageContainer>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">
            Manage your account settings and preferences
          </p>
        </div>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="privacy">Privacy</TabsTrigger>
            <TabsTrigger value="wallet">Wallet</TabsTrigger>
          </TabsList>
          <TabsContent value="profile" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>
                  Update your profile information and how others see you
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col gap-6 sm:flex-row">
                  <div className="flex flex-col items-center gap-2">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800&auto=format&fit=crop&q=60" />
                      <AvatarFallback>US</AvatarFallback>
                    </Avatar>
                    <Button variant="outline" size="sm">
                      Change Avatar
                    </Button>
                  </div>
                  <div className="grid w-full gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Display Name</Label>
                      <Input id="name" defaultValue="University Student" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Input
                        id="bio"
                        defaultValue="Computer Science major. Class of 2025."
                      />
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue="student@university.edu"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="department">Department</Label>
                    <Input id="department" defaultValue="Computer Science" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="year">Year</Label>
                    <Input id="year" defaultValue="3rd Year" />
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button>Save Changes</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="account" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Account Security</CardTitle>
                <CardDescription>
                  Manage your password and account security settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Change Password</h3>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="confirm-password">Confirm Password</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button>Update Password</Button>
                  </div>
                </div>
                <Separator />
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">
                    Two-Factor Authentication
                  </h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Authenticator App</div>
                      <div className="text-sm text-muted-foreground">
                        Use an authenticator app to generate one-time codes
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">SMS Verification</div>
                      <div className="text-sm text-muted-foreground">
                        Receive a code via SMS as a backup option
                      </div>
                    </div>
                    <Switch />
                  </div>
                </div>
                <Separator />
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Connected Accounts</h3>
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">University ID</div>
                        <div className="text-sm text-muted-foreground">
                          Connected to your university account
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Manage
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="notifications" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>
                  Choose how and when you want to be notified
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Email Notifications</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Important Updates</div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">New Messages</div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">
                        Lost & Found Alerts
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">
                        Document Verifications
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Push Notifications</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Critical Alerts</div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Event Reminders</div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Support Messages</div>
                      <Switch />
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="digest">Weekly Digest</Label>
                  <RadioGroup defaultValue="monday" id="digest">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="monday" id="monday" />
                      <Label htmlFor="monday">Every Monday</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="friday" id="friday" />
                      <Label htmlFor="friday">Every Friday</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="never" id="never" />
                      <Label htmlFor="never">Never</Label>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="privacy" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Privacy Settings</CardTitle>
                <CardDescription>
                  Control your data and privacy preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Profile Visibility</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium">Public Profile</div>
                        <div className="text-sm text-muted-foreground">
                          Allow others to find your profile
                        </div>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium">
                          Show Activity Status
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Display when you were last active
                        </div>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Data Privacy</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium">
                          Credential Sharing
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Allow approved institutions to view your credentials
                        </div>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium">Usage Analytics</div>
                        <div className="text-sm text-muted-foreground">
                          Help improve UniChain by sharing anonymous usage data
                        </div>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Account Data</h3>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <Shield className="mr-2 h-4 w-4" />
                      Download My Data
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="wallet" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Blockchain Wallet</CardTitle>
                <CardDescription>
                  Manage your blockchain wallet and view transaction history
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Wallet Information</h3>
                  <div className="rounded-lg border p-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div className="space-y-1">
                        <div className="font-medium">Wallet Address</div>
                        <div className="flex items-center">
                          <code className="rounded bg-muted px-2 py-1 text-xs">
                            0x1a2b...3c4d
                          </code>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center gap-2 sm:mt-0">
                        <Button variant="outline" size="sm">
                          Copy
                        </Button>
                        <Button size="sm">
                          <Wallet className="mr-2 h-4 w-4" />
                          Connect
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">Transaction History</h3>
                    <Button variant="outline" size="sm">
                      View All
                    </Button>
                  </div>
                  <div className="space-y-2">
                    {[1, 2, 3].map((transaction) => (
                      <div
                        key={transaction}
                        className="flex items-center justify-between rounded-lg border p-3"
                      >
                        <div>
                          <div className="font-medium">
                            {transaction === 1
                              ? "Document Verification"
                              : transaction === 2
                              ? "Certificate Issuance"
                              : "Wallet Setup"}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {new Date(
                              Date.now() - transaction * 24 * 60 * 60 * 1000
                            ).toLocaleDateString()}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div
                            className={`text-sm ${
                              transaction === 3 ? "text-green-500" : ""
                            }`}
                          >
                            {transaction === 3 ? "+0.01 SOL" : "0.00 SOL"}
                          </div>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <EyeOff className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PageContainer>
  );
}
