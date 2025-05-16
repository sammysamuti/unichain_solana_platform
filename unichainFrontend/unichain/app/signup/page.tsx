"use client";
import { CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/axios";

export default function SignupPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telegramId: "",
    universityId: "",
    department: "",
    Batch: "",
    university: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await api.post("api/students/register", formData);
      const data = response.data;

      // Store the ID in localStorage
      localStorage.setItem("userId", data.id.toString());
      router.push("/user");
    } catch (err: any) {
      if (err.response?.data?.error === "Failed to register student") {
        setError("Email is already registered");
      } else {
        setError(err.response?.data?.error || "An error occurred during registration");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-6 md:p-12">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>

      <div className="mb-8 flex items-center gap-2 text-3xl font-bold">
        <Sparkles className="h-10 w-10 text-primary" />
        <span>UniChain</span>
      </div>

      <Card className="mx-auto w-full max-w-[95%] sm:max-w-xl shadow-lg">
        <form onSubmit={handleSubmit}>
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl">Create an account</CardTitle>
            <CardDescription>
              Join UniChain to access blockchain-based campus services
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}

            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="Full Name"
                onChange={handleChange}
                value={formData.name}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@university.edu"
                onChange={handleChange}
                value={formData.email}
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="telegramId">Telegram ID</Label>
                <Input
                  id="telegramId"
                  placeholder="Your Telegram ID"
                  onChange={handleChange}
                  value={formData.telegramId}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="universityId">University ID</Label>
                <Input
                  id="universityId"
                  placeholder="Your University ID"
                  onChange={handleChange}
                  value={formData.universityId}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                <Input
                  id="department"
                  placeholder="Your Department"
                  onChange={handleChange}
                  value={formData.department}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="Batch">Batch</Label>
                <Input
                  id="Batch"
                  placeholder="Your Batch"
                  onChange={handleChange}
                  value={formData.Batch}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="university">University</Label>
              <Input
                id="university"
                placeholder="Your University"
                onChange={handleChange}
                value={formData.university}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                onChange={handleChange}
                value={formData.password}
                required
              />
            </div>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4">
            <Button 
              type="submit" 
              className="w-full h-10 text-sm sm:text-base"
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Create Account"}
            </Button>
            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-primary hover:underline font-medium"
              >
                Sign in
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
