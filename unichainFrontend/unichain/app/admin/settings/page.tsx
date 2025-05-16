import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Shield, Moon, Sun, Save, RefreshCw, Upload, Download, Key, Lock, User, Mail, BellRing } from "lucide-react"

export default function AdminSettingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">Configure system settings and preferences</p>
        </div>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="blockchain">Blockchain</TabsTrigger>
          <TabsTrigger value="backup">Backup & Restore</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Basic system configuration</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">System Name</label>
                  <Input defaultValue="UniChain Campus Ecosystem" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Institution Name</label>
                  <Input defaultValue="University Name" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Contact Email</label>
                  <Input defaultValue="admin@university.edu" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Support Email</label>
                  <Input defaultValue="support@university.edu" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">System Description</label>
                  <Textarea
                    defaultValue="UniChain is a decentralized platform for university students, providing blockchain-based services for academic credentials, mental health support, lost & found, and more."
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Time Zone</label>
                  <Select defaultValue="utc">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="utc">UTC (Coordinated Universal Time)</SelectItem>
                      <SelectItem value="est">EST (Eastern Standard Time)</SelectItem>
                      <SelectItem value="cst">CST (Central Standard Time)</SelectItem>
                      <SelectItem value="mst">MST (Mountain Standard Time)</SelectItem>
                      <SelectItem value="pst">PST (Pacific Standard Time)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Date Format</label>
                  <Select defaultValue="mdy">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mdy">MM/DD/YYYY</SelectItem>
                      <SelectItem value="dmy">DD/MM/YYYY</SelectItem>
                      <SelectItem value="ymd">YYYY/MM/DD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex justify-end gap-2">
                  <Button variant="outline">Reset</Button>
                  <Button>Save Changes</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Configure system notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BellRing className="h-4 w-4 text-muted-foreground" />
                    <span>System Notifications</span>
                  </div>
                  <div className="flex h-6 w-11 items-center rounded-full bg-primary p-1">
                    <div className="h-4 w-4 translate-x-5 rounded-full bg-white"></div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>Email Notifications</span>
                  </div>
                  <div className="flex h-6 w-11 items-center rounded-full bg-primary p-1">
                    <div className="h-4 w-4 translate-x-5 rounded-full bg-white"></div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span>User Registration Notifications</span>
                  </div>
                  <div className="flex h-6 w-11 items-center rounded-full bg-primary p-1">
                    <div className="h-4 w-4 translate-x-5 rounded-full bg-white"></div>
                  </div>
                </div>

                <div className="flex justify-end gap-2">
                  <Button variant="outline">Reset</Button>
                  <Button>Save Changes</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Configure system security settings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Password Policy</label>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="uppercase"
                        className="h-4 w-4 rounded border-gray-300"
                        defaultChecked
                      />
                      <label htmlFor="uppercase" className="text-sm">
                        Require uppercase letters
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="lowercase"
                        className="h-4 w-4 rounded border-gray-300"
                        defaultChecked
                      />
                      <label htmlFor="lowercase" className="text-sm">
                        Require lowercase letters
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="numbers" className="h-4 w-4 rounded border-gray-300" defaultChecked />
                      <label htmlFor="numbers" className="text-sm">
                        Require numbers
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="special" className="h-4 w-4 rounded border-gray-300" defaultChecked />
                      <label htmlFor="special" className="text-sm">
                        Require special characters
                      </label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Minimum Password Length</label>
                  <Select defaultValue="8">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="8">8 characters</SelectItem>
                      <SelectItem value="10">10 characters</SelectItem>
                      <SelectItem value="12">12 characters</SelectItem>
                      <SelectItem value="14">14 characters</SelectItem>
                      <SelectItem value="16">16 characters</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Password Expiry</label>
                  <Select defaultValue="90">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="30">30 days</SelectItem>
                      <SelectItem value="60">60 days</SelectItem>
                      <SelectItem value="90">90 days</SelectItem>
                      <SelectItem value="180">180 days</SelectItem>
                      <SelectItem value="never">Never</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Two-Factor Authentication</label>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Require 2FA for administrators</span>
                    <div className="flex h-6 w-11 items-center rounded-full bg-primary p-1">
                      <div className="h-4 w-4 translate-x-5 rounded-full bg-white"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Allow 2FA for all users</span>
                    <div className="flex h-6 w-11 items-center rounded-full bg-primary p-1">
                      <div className="h-4 w-4 translate-x-5 rounded-full bg-white"></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Session Settings</label>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Session timeout</span>
                      <Select defaultValue="30">
                        <SelectTrigger className="w-[180px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="15">15 minutes</SelectItem>
                          <SelectItem value="30">30 minutes</SelectItem>
                          <SelectItem value="60">1 hour</SelectItem>
                          <SelectItem value="120">2 hours</SelectItem>
                          <SelectItem value="240">4 hours</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Maximum concurrent sessions</span>
                      <Select defaultValue="3">
                        <SelectTrigger className="w-[180px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 session</SelectItem>
                          <SelectItem value="2">2 sessions</SelectItem>
                          <SelectItem value="3">3 sessions</SelectItem>
                          <SelectItem value="5">5 sessions</SelectItem>
                          <SelectItem value="unlimited">Unlimited</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-2">
                  <Button variant="outline">Reset</Button>
                  <Button>Save Changes</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>API Security</CardTitle>
              <CardDescription>Configure API access and security</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Key className="h-4 w-4 text-muted-foreground" />
                    <span>Enable API Access</span>
                  </div>
                  <div className="flex h-6 w-11 items-center rounded-full bg-primary p-1">
                    <div className="h-4 w-4 translate-x-5 rounded-full bg-white"></div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Lock className="h-4 w-4 text-muted-foreground" />
                    <span>Require API Key Authentication</span>
                  </div>
                  <div className="flex h-6 w-11 items-center rounded-full bg-primary p-1">
                    <div className="h-4 w-4 translate-x-5 rounded-full bg-white"></div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-muted-foreground" />
                    <span>Rate Limiting</span>
                  </div>
                  <div className="flex h-6 w-11 items-center rounded-full bg-primary p-1">
                    <div className="h-4 w-4 translate-x-5 rounded-full bg-white"></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Rate Limit (requests per minute)</label>
                  <Input type="number" defaultValue="100" />
                </div>

                <div className="flex justify-end gap-2">
                  <Button variant="outline">Reset</Button>
                  <Button>Save Changes</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Appearance Settings</CardTitle>
              <CardDescription>Customize the look and feel of the platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Theme Mode</label>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                      <input type="radio" id="light" name="theme" className="h-4 w-4" />
                      <label htmlFor="light" className="text-sm flex items-center gap-2">
                        <Sun className="h-4 w-4" />
                        Light
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="radio" id="dark" name="theme" className="h-4 w-4" defaultChecked />
                      <label htmlFor="dark" className="text-sm flex items-center gap-2">
                        <Moon className="h-4 w-4" />
                        Dark
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="radio" id="system" name="theme" className="h-4 w-4" />
                      <label htmlFor="system" className="text-sm">
                        System
                      </label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Primary Color</label>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                      <input type="radio" id="purple" name="color" className="h-4 w-4" defaultChecked />
                      <label htmlFor="purple" className="text-sm flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full bg-purple-600"></div>
                        Purple
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="radio" id="blue" name="color" className="h-4 w-4" />
                      <label htmlFor="blue" className="text-sm flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full bg-blue-600"></div>
                        Blue
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="radio" id="green" name="color" className="h-4 w-4" />
                      <label htmlFor="green" className="text-sm flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full bg-green-600"></div>
                        Green
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="radio" id="custom" name="color" className="h-4 w-4" />
                      <label htmlFor="custom" className="text-sm">
                        Custom
                      </label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Logo</label>
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-md border flex items-center justify-center">
                      <Sparkles className="h-8 w-8 text-primary" />
                    </div>
                    <Button variant="outline" className="gap-2">
                      <Upload className="h-4 w-4" />
                      Upload Logo
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Favicon</label>
                  <div className="flex items-center gap-4">
                    <div className="h-8 w-8 rounded-md border flex items-center justify-center">
                      <Sparkles className="h-4 w-4 text-primary" />
                    </div>
                    <Button variant="outline" className="gap-2">
                      <Upload className="h-4 w-4" />
                      Upload Favicon
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Custom CSS</label>
                  <Textarea rows={5} placeholder="Enter custom CSS here..." />
                </div>

                <div className="flex justify-end gap-2">
                  <Button variant="outline">Reset</Button>
                  <Button>Save Changes</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="blockchain" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Blockchain Settings</CardTitle>
              <CardDescription>Configure blockchain network settings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Blockchain Network</label>
                  <Select defaultValue="solana">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="solana">Solana</SelectItem>
                      <SelectItem value="ethereum">Ethereum</SelectItem>
                      <SelectItem value="polygon">Polygon</SelectItem>
                      <SelectItem value="custom">Custom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Network Type</label>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                      <input type="radio" id="mainnet" name="network" className="h-4 w-4" />
                      <label htmlFor="mainnet" className="text-sm">
                        Mainnet
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="radio" id="testnet" name="network" className="h-4 w-4" defaultChecked />
                      <label htmlFor="testnet" className="text-sm">
                        Testnet
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="radio" id="devnet" name="network" className="h-4 w-4" />
                      <label htmlFor="devnet" className="text-sm">
                        Devnet
                      </label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">RPC Endpoint</label>
                  <Input defaultValue="https://api.devnet.solana.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Token Symbol</label>
                  <Input defaultValue="UNI" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Token Decimals</label>
                  <Input type="number" defaultValue="9" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Treasury Wallet Address</label>
                  <Input defaultValue="8zJ4d7LGsTnMew1vNKLm9MkBFAcHWQw63xprXKvCU2Ah" />
                </div>

                <div className="flex justify-end gap-2">
                  <Button variant="outline">Reset</Button>
                  <Button>Save Changes</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="backup" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Backup & Restore</CardTitle>
              <CardDescription>Manage system backups and restoration</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Automatic Backups</label>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Enable automatic backups</span>
                    <div className="flex h-6 w-11 items-center rounded-full bg-primary p-1">
                      <div className="h-4 w-4 translate-x-5 rounded-full bg-white"></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Backup Frequency</label>
                  <Select defaultValue="daily">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hourly">Hourly</SelectItem>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Backup Retention</label>
                  <Select defaultValue="30">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="7">7 days</SelectItem>
                      <SelectItem value="14">14 days</SelectItem>
                      <SelectItem value="30">30 days</SelectItem>
                      <SelectItem value="90">90 days</SelectItem>
                      <SelectItem value="365">1 year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Backup Storage</label>
                  <Select defaultValue="local">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="local">Local Storage</SelectItem>
                      <SelectItem value="s3">Amazon S3</SelectItem>
                      <SelectItem value="gcs">Google Cloud Storage</SelectItem>
                      <SelectItem value="azure">Azure Blob Storage</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <Button variant="outline" className="gap-2">
                      <Save className="h-4 w-4" />
                      Create Backup Now
                    </Button>
                    <Button variant="outline" className="gap-2">
                      <Download className="h-4 w-4" />
                      Download Latest Backup
                    </Button>
                  </div>

                  <div className="flex justify-between">
                    <Button variant="outline" className="gap-2">
                      <Upload className="h-4 w-4" />
                      Upload Backup
                    </Button>
                    <Button variant="outline" className="gap-2">
                      <RefreshCw className="h-4 w-4" />
                      Restore from Backup
                    </Button>
                  </div>
                </div>

                <div className="rounded-md border p-4 bg-yellow-500/10">
                  <div className="flex items-center gap-2 text-yellow-500">
                    <AlertTriangle className="h-4 w-4" />
                    <span className="font-medium">Warning</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Restoring from a backup will overwrite all current data. This action cannot be undone. Make sure to
                    create a backup of your current data before proceeding.
                  </p>
                </div>

                <div className="flex justify-end gap-2">
                  <Button variant="outline">Reset</Button>
                  <Button>Save Changes</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function Sparkles(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  )
}

function AlertTriangle(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  )
}

