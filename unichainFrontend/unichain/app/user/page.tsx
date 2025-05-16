"use client";
import Link from "next/link";
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
import {
  Award,
  Brain,
  Search,
  Wallet,
  Users,
  MessageSquare,
  MapPin,
  TrendingUp,
  Shield,
} from "lucide-react";
import { StatCard } from "@/components/stat-card";
import { RecentActivity } from "@/components/recent-activity";
import { TokenBalance } from "@/components/token-balance";
import { useEffect, useState } from "react";
import api from "@/lib/axios";

interface ClaimStats {
  sentCount: number;
  receivedCount: number;
  returnedCount: number;
}

export default function Dashboard() {
  const [claimStats, setClaimStats] = useState<ClaimStats>({
    sentCount: 0,
    receivedCount: 0,
    returnedCount: 0
  });
  const userId = typeof window !== 'undefined' ? localStorage.getItem("userId") : null;

  useEffect(() => {
    const fetchClaimStats = async () => {
      if (!userId) return;

      try {
        const [sentClaims, receivedClaims] = await Promise.all([
          api.get(`api/claims/sent/${userId}`),
          api.get(`api/claims/received/${userId}`)
        ]);

        const returnedClaims = [...(sentClaims.data || []), ...(receivedClaims.data || [])]
          .filter(claim => claim.returnedAt);

        setClaimStats({
          sentCount: sentClaims.data?.length || 0,
          receivedCount: receivedClaims.data?.length || 0,
          returnedCount: returnedClaims.length
        });
      } catch (err) {
        console.error("Failed to fetch claim stats:", err);
      }
    };

    fetchClaimStats();
  }, [userId]);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b bg-card w-full md:px-12">
        <div className="hero-glow left-1/4 top-1/4"></div>
        <div className="hero-glow right-1/4 bottom-1/4"></div>
        <div className="container mx-auto px-4 pb-20 pt-12 md:pb-24 max-w-full">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-block rounded-full bg-secondary px-3 py-1 text-sm">
                <span className="mr-2 inline-block rounded-full bg-primary px-2 py-0.5 text-xs text-white">
                  New
                </span>
                <span>Solana-powered campus ecosystem</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                <span className="gradient-text">UniChain</span> Campus Ecosystem
              </h1>
              <p className="text-muted-foreground md:text-xl">
                Manage your academic credentials, access mental health support,
                and find lost items - all in one decentralized platform.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/user/claims">
                    <Search className="mr-2 h-5 w-5" />
                    View Claims
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/user/credentials">
                    <Award className="mr-2 h-5 w-5" />
                    View Credentials
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[300px] w-[300px] animate-float">
                <img
                  src="/nft.png"
                  alt="NFT Credential"
                  className="h-full w-full rounded-lg object-cover shadow-xl gradient-border"
                />
                <div className="absolute -bottom-4 rounded-lg bg-card p-3 shadow-lg gradient-border">
                  <div className="flex items-center gap-2">
                    <Shield className="h-8 w-8 text-primary" />
                    <span>All in one campus ecosystem</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Content */}
      <div className="container mx-auto px-4 py-6 max-w-full">
        <div className="grid gap-4 md:gap-6 md:grid-cols-3">
          <StatCard
            title="Sent Claims"
            value={claimStats.sentCount.toString()}
            description="Claims you've submitted"
            icon={<Search className="h-4 w-4 text-primary" />}
          />
          <StatCard
            title="Received Claims"
            value={claimStats.receivedCount.toString()}
            description="Claims awaiting your review"
            icon={<MessageSquare className="h-4 w-4 text-primary" />}
          />
          <StatCard
            title="Returned Items"
            value={claimStats.returnedCount.toString()}
            description="Successfully returned items"
            icon={<Award className="h-4 w-4 text-primary" />}
          />
        </div>

        <div className="mt-6 w-full">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="w-full grid grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="claims">Claims</TabsTrigger>
              <TabsTrigger value="activity">Recent Activity</TabsTrigger>
            </TabsList>
            <div className="w-full overflow-hidden">
              <TabsContent value="overview" className="mt-6 w-full">
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
                  <Card className="w-full">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Quick Actions
                      </CardTitle>
                      <Search className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent className="grid gap-2">
                      <Button variant="outline" className="justify-start" asChild>
                        <Link href="/user/claims">
                          <Search className="mr-2 h-4 w-4" />
                          View Claims
                        </Link>
                      </Button>
                      <Button variant="outline" className="justify-start" asChild>
                        <Link href="/user/claims/new">
                          <MapPin className="mr-2 h-4 w-4" />
                          Submit New Claim
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="w-full md:col-span-2">
                    <CardHeader>
                      <CardTitle>Recent Claims</CardTitle>
                      <CardDescription>
                        Your latest claim activities
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <RecentActivity />
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="claims" className="mt-6 w-full">
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
                  <Card className="w-full">
                    <CardHeader>
                      <CardTitle>Claims Overview</CardTitle>
                      <CardDescription>
                        Summary of your claims activity
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span>Sent Claims</span>
                          <span className="font-bold">{claimStats.sentCount}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Received Claims</span>
                          <span className="font-bold">{claimStats.receivedCount}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Returned Items</span>
                          <span className="font-bold">{claimStats.returnedCount}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link href="/user/claims">View All Claims</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="activity" className="mt-6 w-full">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>
                      Your latest interactions on UniChain
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RecentActivity />
                  </CardContent>
                </Card>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
