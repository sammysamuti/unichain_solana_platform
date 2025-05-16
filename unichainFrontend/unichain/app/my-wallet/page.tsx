
"use client";
import { useState, useEffect } from "react";
import type React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import {
  Wallet,
  Copy,
  ExternalLink,
  ArrowUpRight,
  ArrowDownLeft,
  Clock,
  Shield,
  QrCode,
  RefreshCw,
  BarChart4,
  CreditCard,
  Landmark,
} from "lucide-react";
import { PageContainer } from "@/components/page-container";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import api from "@/lib/axios";// Adjust this path as needed

export default function MyWalletPage() {
  const [userId, setUserId] = useState<string | null>(null);
  const [walletData, setWalletData] = useState({
    walletAddress: "",
    seedPhrase: "",
    balance: 0,
  });
  const [isSendModalOpen, setIsSendModalOpen] = useState(false);
  const [isSeedModalOpen, setIsSeedModalOpen] = useState(false);
  const [formData, setFormData] = useState({ receiverAddress: "", amount: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch userId from localStorage on mount
  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    setUserId(storedUserId);
    if (storedUserId) {
      fetchWalletData(storedUserId);
    }
  }, []);

  // Fetch wallet data from API
  const fetchWalletData = async (id: string) => {
    try {
      const response = await api.get(`/api/wallet/${id}`);
      setWalletData({
        walletAddress: response.data.walletAddress,
        seedPhrase: response.data.seedPhrase,
        balance: response.data.balance,
      });
    } catch (err) {
      console.error("Error fetching wallet data:", err);
      setError("Failed to load wallet data.");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendTransaction = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userId) {
      setError("User ID not found. Please log in.");
      return;
    }
    setIsLoading(true);
    setError(null);

    try {
      const response = await api.post("/api/wallet/send", {
        senderId: parseInt(userId),
        receiverAddress: formData.receiverAddress,
        amount: parseFloat(formData.amount),
      });
      console.log("Transaction successful:", response.data);
      setIsSendModalOpen(false);
      setFormData({ receiverAddress: "", amount: "" });
      fetchWalletData(userId); // Refresh balance after sending
    } catch (err) {
      console.error("Error sending transaction:", err);
      setError("Failed to send transaction. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageContainer>
      <div className="space-y-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">My Wallet</h1>
            <p className="text-muted-foreground">Manage your blockchain wallet, tokens, and transactions</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <RefreshCw className="h-4 w-4" />
              Refresh
            </Button>
            <Dialog open={isSendModalOpen} onOpenChange={setIsSendModalOpen}>
              <DialogTrigger asChild>
                <Button className="gap-2">
                  <ArrowUpRight className="h-4 w-4" />
                  Send
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Send Transaction</DialogTitle>
                  <DialogDescription>Enter the recipient's address and amount to send</DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSendTransaction} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="receiverAddress">Recipient Address</Label>
                    <Input
                      id="receiverAddress"
                      name="receiverAddress"
                      value={formData.receiverAddress}
                      onChange={handleInputChange}
                      placeholder="Enter wallet address"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="amount">Amount (SOL)</Label>
                    <Input
                      id="amount"
                      name="amount"
                      type="number"
                      step="0.01"
                      value={formData.amount}
                      onChange={handleInputChange}
                      placeholder="0.00"
                      required
                      min="0"
                      max={walletData.balance}
                    />
                  </div>
                  {error && <p className="text-sm text-red-500">{error}</p>}
                  <div className="flex justify-end gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsSendModalOpen(false)}
                      disabled={isLoading}
                    >
                      Cancel
                    </Button>
                    <Button type="submit" disabled={isLoading}>
                      {isLoading ? "Sending..." : "Send Transaction"}
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Seed Phrase Modal */}
        <Dialog open={isSeedModalOpen} onOpenChange={setIsSeedModalOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Recovery Phrase</DialogTitle>
              <DialogDescription>
                Keep this phrase safe and never share it with anyone. It’s your key to recover your wallet.
              </DialogDescription>
            </DialogHeader>
            <div className="bg-muted p-4 rounded break-words text-sm">{walletData.seedPhrase}</div>
            <div className="flex justify-end">
              <Button variant="outline" onClick={() => setIsSeedModalOpen(false)}>
                Close
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        <div className="grid gap-6 md:grid-cols-7">
          <div className="md:col-span-5">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="transactions">Transactions</TabsTrigger>
                <TabsTrigger value="assets">Assets</TabsTrigger>
                <TabsTrigger value="settings">Wallet Settings</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle>Wallet Balance</CardTitle>
                      <CardDescription>Your current balance and wallet address</CardDescription>
                    </CardHeader>
                    <CardContent className="spaceeda-y-4">
                      <div>
                        <div className="text-sm text-muted-foreground">Total Balance</div>
                        <div className="flex items-baseline gap-2">
                          <div className="text-3xl font-bold">{walletData.balance} SOL</div>
                        </div>
                      </div>
                      <Separator />
                      <div className="space-y-2">
                        <div className="text-sm font-medium">Wallet Address</div>
                        <div className="flex items-center gap-2">
                          <code className="flex-1 overflow-hidden overflow-ellipsis rounded bg-muted px-2 py-1 text-xs">
                            {walletData.walletAddress || "Loading..."}
                          </code>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Copy className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <QrCode className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full gap-2">
                        <ExternalLink className="h-4 w-4" />
                        View on Explorer
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle>Quick Actions</CardTitle>
                      <CardDescription>Common wallet operations</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-2">
                        <Dialog open={isSendModalOpen} onOpenChange={setIsSendModalOpen}>
                          <DialogTrigger asChild>
                            <Button className="h-auto flex-col gap-2 p-4">
                              <ArrowUpRight className="h-5 w-5" />
                              <span>Send</span>
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Send Transaction</DialogTitle>
                              <DialogDescription>Enter the recipient's address and amount to send</DialogDescription>
                            </DialogHeader>
                            <form onSubmit={handleSendTransaction} className="space-y-4">
                              <div className="space-y-2">
                                <Label htmlFor="receiverAddress">Recipient Address</Label>
                                <Input
                                  id="receiverAddress"
                                  name="receiverAddress"
                                  value={formData.receiverAddress}
                                  onChange={handleInputChange}
                                  placeholder="Enter wallet address"
                                  required
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="amount">Amount (SOL)</Label>
                                <Input
                                  id="amount"
                                  name="amount"
                                  type="number"
                                  step="0.01"
                                  value={formData.amount}
                                  onChange={handleInputChange}
                                  placeholder="0.00"
                                  required
                                  min="0"
                                  max={walletData.balance}
                                />
                              </div>
                              {error && <p className="text-sm text-red-500">{error}</p>}
                              <div className="flex justify-end gap-2">
                                <Button
                                  type="button"
                                  variant="outline"
                                  onClick={() => setIsSendModalOpen(false)}
                                  disabled={isLoading}
                                >
                                  Cancel
                                </Button>
                                <Button type="submit" disabled={isLoading}>
                                  {isLoading ? "Sending..." : "Send Transaction"}
                                </Button>
                              </div>
                            </form>
                          </DialogContent>
                        </Dialog>
                        <Button className="h-auto flex-col gap-2 p-4">
                          <ArrowDownLeft className="h-5 w-5" />
                          <span>Receive</span>
                        </Button>
                        <Button variant="outline" className="h-auto flex-col gap-2 p-4">
                          <CreditCard className="h-5 w-5" />
                          <span>Buy</span>
                        </Button>
                        <Button variant="outline" className="h-auto flex-col gap-2 p-4">
                          <Landmark className="h-5 w-5" />
                          <span>Swap</span>
                        </Button>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <div className="rounded-lg border border-dashed p-3 text-center text-sm text-muted-foreground w-full">
                        Need help? Check out our{" "}
                        <a href="#" className="text-primary underline">
                          wallet guide
                        </a>
                      </div>
                    </CardFooter>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Your latest transactions and wallet activity</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          type: "receive",
                          amount: "+0.5 SOL",
                          from: "University Grant",
                          date: "Today, 10:24 AM",
                          status: "confirmed",
                        },
                        {
                          type: "send",
                          amount: "-0.05 SOL",
                          to: "Document Verification",
                          date: "Yesterday, 3:15 PM",
                          status: "confirmed",
                        },
                        {
                          type: "receive",
                          amount: "+0.1 SOL",
                          from: "Academic Achievement Reward",
                          date: "Mar 5, 2023",
                          status: "confirmed",
                        },
                      ].map((transaction, i) => (
                        <div key={i} className="flex items-center justify-between rounded-lg border p-3">
                          <div className="flex items-center gap-3">
                            <div
                              className={`rounded-full p-2 ${
                                transaction.type === "receive"
                                  ? "bg-green-500/10 text-green-500"
                                  : "bg-blue-500/10 text-blue-500"
                              }`}
                            >
                              {transaction.type === "receive" ? (
                                <ArrowDownLeft className="h-4 w-4" />
                              ) : (
                                <ArrowUpRight className="h-4 w-4" />
                              )}
                            </div>
                            <div>
                              <div className="font-medium">
                                {transaction.type === "receive" ? transaction.from : transaction.to}
                              </div>
                              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                <Clock className="h-3 w-3" />
                                <span>{transaction.date}</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div
                              className={`font-medium ${
                                transaction.type === "receive" ? "text-green-500" : "text-blue-500"
                              }`}
                            >
                              {transaction.amount}
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {transaction.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full">
                      View All Transactions
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="transactions" className="space-y-4">
                <Card>
                  <CardHeader>
                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                      <div>
                        <CardTitle>Transaction History</CardTitle>
                        <CardDescription>Complete record of your wallet transactions</CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Export
                        </Button>
                        <Button variant="outline" size="sm">
                          Filter
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          type: "receive",
                          amount: "+0.5 SOL",
                          from: "University Grant",
                          date: "Mar 8, 2023 10:24 AM",
                          status: "confirmed",
                          hash: "3xR7...j9P2",
                        },
                        {
                          type: "send",
                          amount: "-0.05 SOL",
                          to: "Document Verification",
                          date: "Mar 7, 2023 3:15 PM",
                          status: "confirmed",
                          hash: "7tY2...k4L8",
                        },
                      ].map((transaction, i) => (
                        <div
                          key={i}
                          className="flex flex-col justify-between gap-4 rounded-lg border p-4 sm:flex-row sm:items-center"
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`rounded-full p-2 ${
                                transaction.type === "receive"
                                  ? "bg-green-500/10 text-green-500"
                                  : "bg-blue-500/10 text-blue-500"
                              }`}
                            >
                              {transaction.type === "receive" ? (
                                <ArrowDownLeft className="h-4 w-4" />
                              ) : (
                                <ArrowUpRight className="h-4 w-4" />
                              )}
                            </div>
                            <div>
                              <div className="font-medium">
                                {transaction.type === "receive" ? transaction.from : transaction.to}
                              </div>
                              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                <Clock className="h-3 w-3" />
                                <span>{transaction.date}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-right">
                              <div
                                className={`font-medium ${
                                  transaction.type === "receive" ? "text-green-500" : "text-blue-500"
                                }`}
                              >
                                {transaction.amount}
                              </div>
                              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                <span>Tx: {transaction.hash}</span>
                                <Button variant="ghost" size="icon" className="h-4 w-4 p-0">
                                  <Copy className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>
                            <Badge variant="outline" className="whitespace-nowrap">
                              {transaction.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Load More
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="assets" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Assets</CardTitle>
                    <CardDescription>Tokens and NFTs in your wallet</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h3 className="mb-3 text-sm font-medium">Tokens</h3>
                        <div className="space-y-3">
                          {[
                            {
                              name: "Solana",
                              symbol: "SOL",
                              balance: walletData.balance.toString(),
                              value: "N/A",
                              change: "N/A",
                            },
                          ].map((token, i) => (
                            <div key={i} className="flex items-center justify-between rounded-lg border p-3">
                              <div className="flex items-center gap-3">
                                <Avatar className="h-8 w-8">
                                  <AvatarFallback className="bg-primary/10 text-primary">
                                    {token.symbol.substring(0, 2)}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <div className="font-medium">{token.name}</div>
                                  <div className="text-xs text-muted-foreground">{token.symbol}</div>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="font-medium">
                                  {token.balance} {token.symbol}
                                </div>
                                <div className="flex items-center gap-1 text-xs">
                                  <span className="text-muted-foreground">{token.value}</span>
                                  <span className="text-muted-foreground">{token.change}</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <Separator />
                      <div>
                        <h3 className="mb-3 text-sm font-medium">Academic NFTs</h3>
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                          {[
                            {
                              name: "Computer Science Certificate",
                              issuer: "University CS Department",
                              date: "Mar 1, 2023",
                            },
                          ].map((nft, i) => (
                            <Card key={i} className="overflow-hidden">
                              <div className="aspect-square bg-muted">
                                <div className="flex h-full items-center justify-center bg-primary/10 text-primary">
                                  <GraduationCap className="h-12 w-12" />
                                </div>
                              </div>
                              <CardContent className="p-3">
                                <div className="font-medium">{nft.name}</div>
                                <div className="text-xs text-muted-foreground">Issued by: {nft.issuer}</div>
                                <div className="mt-1 text-xs text-muted-foreground">Date: {nft.date}</div>
                              </CardContent>
                              <CardFooter className="border-t p-3">
                                <Button variant="ghost" size="sm" className="w-full">
                                  View Details
                                </Button>
                              </CardFooter>
                            </Card>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Wallet Security</CardTitle>
                    <CardDescription>Manage your wallet security settings</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <div className="flex items-start gap-3">
                        <div className="rounded-full bg-primary/10 p-2">
                          <Shield className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium">Backup Recovery Phrase</div>
                          <p className="mt-1 text-sm text-muted-foreground">
                            Your recovery phrase is the only way to restore your wallet if you lose access. Keep it in a
                            safe place and never share it with anyone.
                          </p>
                          <Button className="mt-3" size="sm" onClick={() => setIsSeedModalOpen(true)}>
                            View Recovery Phrase
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between rounded-lg border p-3">
                        <div>
                          <div className="font-medium">Transaction Signing</div>
                          <div className="text-sm text-muted-foreground">Require password for all transactions</div>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between rounded-lg border p-3">
                        <div>
                          <div className="font-medium">Auto-Lock</div>
                          <div className="text-sm text-muted-foreground">Lock wallet after 15 minutes of inactivity</div>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between rounded-lg border p-3">
                        <div>
                          <div className="font-medium">Spending Limits</div>
                          <div className="text-sm text-muted-foreground">Set daily transaction limits</div>
                        </div>
                        <Switch />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Connected Applications</CardTitle>
                    <CardDescription>Manage apps and services connected to your wallet</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        name: "UniChain Academic Credentials",
                        permissions: ["View Balance", "Issue Credentials"],
                        lastUsed: "Today",
                      },
                    ].map((app, i) => (
                      <div key={i} className="flex items-center justify-between rounded-lg border p-4">
                        <div>
                          <div className="font-medium">{app.name}</div>
                          <div className="mt-1 flex flex-wrap gap-1">
                            {app.permissions.map((permission, j) => (
                              <Badge key={j} variant="secondary" className="text-xs">
                                {permission}
                              </Badge>
                            ))}
                          </div>
                          <div className="mt-1 text-xs text-muted-foreground">Last used: {app.lastUsed}</div>
                        </div>
                        <Button variant="outline" size="sm">
                          Disconnect
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div className="md:col-span-2">
            <div className="space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Portfolio Value</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[200px] rounded-md border border-dashed p-6 text-center">
                    <div className="flex h-full flex-col items-center justify-center">
                      <BarChart4 className="mb-2 h-8 w-8 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">Portfolio chart would appear here</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Wallet Health</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Security Score</span>
                      <span className="font-medium">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                    <div className="text-xs text-muted-foreground">Enable spending limits to improve your score</div>
                  </div>
                  <div className="rounded-lg bg-primary/10 p-3 text-sm">
                    <div className="flex items-center gap-2 font-medium text-primary">
                      <Shield className="h-4 w-4" />
                      Security Tip
                    </div>
                    <p className="mt-1 text-muted-foreground">
                      Never share your recovery phrase with anyone, even if they claim to be from UniChain support.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

function Switch({ defaultChecked }: { defaultChecked?: boolean }) {
  return (
    <div
      className={`relative inline-flex h-6 w-11 items-center rounded-full ${defaultChecked ? "bg-primary" : "bg-muted"}`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-background transition ${defaultChecked ? "translate-x-6" : "translate-x-1"}`}
      />
    </div>
  );
}

function GraduationCap(props: React.ComponentProps<"svg">) {
  return <Wallet {...props} />;
}