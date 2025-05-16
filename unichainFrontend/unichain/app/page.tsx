'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Brain, Search, ArrowRight, GraduationCap, Shield, Users, MapPin, ExternalLink, Coins } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center w-full px-4">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto py-4 px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8" />
            <span className="font-bold text-xl">UniChain</span>
          </div>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-sm font-medium hover:text-foreground/80 transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-sm font-medium hover:text-foreground/80 transition-colors">
                How It Works
              </a>
              <a href="#about" className="text-sm font-medium hover:text-foreground/80 transition-colors">
                About
              </a>
            </nav>
            <ModeToggle />
            <Link href="/login">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full">
        <div className="container mx-auto py-20 px-4 md:px-6 flex flex-col items-center text-center">
          <Badge className="mb-4" variant="outline">
            Powered by Solana
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            The Future of Campus Life on <span className="font-black">Solana</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-10">
            Mint NFT credentials, earn tokens for community contributions, and experience the power of Solana's fast, 
            secure blockchain technology in your university life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/login">
              <Button size="lg" className="gap-2 bg-foreground text-background hover:bg-foreground/90">
                Start Minting <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              Explore Features
            </Button>
          </div>

          <div className="mt-16 relative w-full max-w-5xl mx-auto">
            <div className="aspect-[16/9] rounded-xl overflow-hidden border bg-card shadow-xl">
              <img
                src="/solana.png"
                alt="Solana Blockchain Interface"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-xl bg-foreground/5"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full">
        <div className="container mx-auto py-24 px-4 md:px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <Badge className="mb-4" variant="outline">
              Powered by Solana
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Experience the Power of Web3
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Unlock the potential of Solana's blockchain with NFT credentials, token rewards, and decentralized services.
            </p>
          </div>

          <Tabs defaultValue="token-minting" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12">
              <TabsTrigger value="token-minting">Token Minting</TabsTrigger>
              <TabsTrigger value="nft-credentials">NFT Credentials</TabsTrigger>
              <TabsTrigger value="mental-health">Mental Health</TabsTrigger>
              <TabsTrigger value="lost-found">Lost & Found</TabsTrigger>
            </TabsList>

            <TabsContent value="token-minting" className="space-y-4">
              <div className="container grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto px-4">
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Coins className="h-6 w-6" />
                    Token Minting & Rewards
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Earn and mint tokens on Solana's lightning-fast blockchain. Get rewarded for your contributions to the university community.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Lightning-fast transactions on Solana",
                      "Earn tokens for community contributions",
                      "Low transaction fees",
                      "Instant token transfers between users",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="h-6 w-6 rounded-full bg-foreground/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <ArrowRight className="h-3 w-3" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden border bg-card shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=1200"
                      alt="Solana Token Minting"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-xl bg-foreground/5"></div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="nft-credentials" className="space-y-4">
              <div className="container grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto px-4">
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <GraduationCap className="h-6 w-6" />
                    NFT Academic Credentials
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Your academic achievements as unique NFTs on Solana. Instantly verifiable, forever immutable.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Mint degrees as unique NFTs",
                      "Instant credential verification",
                      "Tamper-proof on Solana blockchain",
                      "Share credentials with one click",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="h-6 w-6 rounded-full bg-foreground/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <ArrowRight className="h-3 w-3" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden border bg-card shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1200"
                      alt="NFT Academic Credentials"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-xl bg-foreground/5"></div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="mental-health" className="space-y-4">
              <div className="container grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto px-4">
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Brain className="h-6 w-6" />
                    Community-Driven Mental Health Support
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Students access anonymous peer support and earn tokens for contributing to the mental health
                    community.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Anonymous peer support groups",
                      "Token rewards for community contributions",
                      "AI-assisted initial support",
                      "Escalation to human volunteers when needed",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="h-6 w-6 rounded-full bg-foreground/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <ArrowRight className="h-3 w-3" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden border bg-card shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1200"
                      alt="Mental Health Support Interface"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-xl bg-foreground/5"></div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="lost-found" className="space-y-4">
              <div className="container grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto px-4">
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Search className="h-6 w-6" />
                    Campus Lost & Found Network
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    A system to report and recover lost items on campus with token incentives for finders.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Campus-specific lost item feeds",
                      "Location-based geo-tagging",
                      "Token rewards for returning items",
                      "Secure, anonymous messaging",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="h-6 w-6 rounded-full bg-foreground/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <ArrowRight className="h-3 w-3" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden border bg-card shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1200"
                      alt="Lost and Found Interface"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-xl bg-foreground/5"></div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full bg-foreground/5">
        <div className="container mx-auto py-16 px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Card className="bg-background/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-4xl font-bold">50K+</div>
                <div className="text-sm text-muted-foreground">Daily Transactions</div>
              </CardContent>
            </Card>
            <Card className="bg-background/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-4xl font-bold">10K+</div>
                <div className="text-sm text-muted-foreground">NFTs Minted</div>
              </CardContent>
            </Card>
            <Card className="bg-background/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-4xl font-bold">100K+</div>
                <div className="text-sm text-muted-foreground">Tokens Distributed</div>
              </CardContent>
            </Card>
            <Card className="bg-background/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-4xl font-bold">25+</div>
                <div className="text-sm text-muted-foreground">Universities</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="w-full bg-muted/50">
        <div className="container mx-auto py-24 px-4 md:px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">
              How It Works
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">The UniChain Ecosystem</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how our platform connects students, universities, and employers in a seamless blockchain experience.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-12">
            {[
              {
                title: "University Onboarding",
                icon: <Briefcase className="h-10 w-10" />,
                description:
                  "Universities register on UniChain, add student profiles, and mint NFT diplomas with grades and photos.",
              },
              {
                title: "Student Engagement",
                icon: <Users className="h-10 w-10" />,
                description:
                  "Students access their NFT credentials, join mental health groups, and earn tokens for helping peers.",
              },
              {
                title: "Community Action",
                icon: <MapPin className="h-10 w-10" />,
                description:
                  "Students report lost items or post found ones, connecting through encrypted messaging for returns.",
              },
              {
                title: "Verification",
                icon: <Shield className="h-10 w-10" />,
                description: "Employers scan QR codes to instantly verify student credentials on the public portal.",
              },
            ].map((step, i) => (
              <Card key={i} className="border bg-card">
                <CardHeader>
                  <div className="mb-4 h-14 w-14 rounded-full bg-foreground/10 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <CardTitle className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-foreground text-xs ">
                      {i + 1}
                    </span>
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{step.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full">
        <div className="container mx-auto py-24 px-4 md:px-6">
          <div className="rounded-2xl bg-foreground p-8 md:p-12 shadow-lg text-background">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-lg mb-8 text-background/80">
                  Join thousands of students already using UniChain.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/login">
                    <Button size="lg" variant="secondary" className="gap-2 bg-background text-foreground hover:bg-background/90">
                      Get Started <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-background text-background hover:bg-background/10"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&q=80&w=2000"
                    alt="UniChain Platform"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-xl bg-background/10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t">
        <div className="container mx-auto py-12 px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-6 w-6" />
                <span className="font-bold text-lg">UniChain</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Transforming university life with blockchain technology.
              </p>
            </div>
            {[
              {
                title: "Product",
                links: ["Features", "Security", "Team", "Enterprise"],
              },
              {
                title: "Resources",
                links: ["Documentation", "Guides", "API Reference", "Support"],
              },
              {
                title: "Company",
                links: ["About Us", "Blog", "Careers", "Press"],
              },
            ].map((column, i) => (
              <div key={i}>
                <h3 className="font-medium mb-4">{column.title}</h3>
                <ul className="space-y-2">
                  {column.links.map((link, j) => (
                    <li key={j}>
                      <Link href="#">
                        <span className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                          {link}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t pt-8 mt-8">
            <p className="text-sm text-muted-foreground"> 2023 UniChain. All rights reserved.</p>
            <div className="flex items-center gap-4">
              {["Twitter", "GitHub", "LinkedIn", "Discord"].map((social, i) => (
                <Link key={i} href="#">
                  <span className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {social}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
