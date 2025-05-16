"use client";
import Link from "next/link";
import { Sparkles, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/axios";
import { toast, Toaster } from "sonner";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

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
      // Check for admin credentials first
      if (
        formData.email === "admin@gmail.com" &&
        formData.password === "1234"
      ) {
        localStorage.setItem("isAdmin", "true");
        toast.success("Admin login successful");
        router.push("/admin");
        return;
      }

      // Regular user authentication
      const response = await api.post("api/auth/login", formData);
      const data = response.data;

      localStorage.setItem("userId", data.id.toString());
      localStorage.setItem("isAdmin", "false"); // Ensure admin flag is false for regular users
      toast.success("Login successful");
      router.push("/user");
    } catch (err: any) {
      setError(err.response?.data?.error || "Invalid email or password");
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted/40 p-4">
      <Toaster />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>

      <div className="mb-8 flex items-center gap-2 text-2xl font-bold">
        <Sparkles className="h-8 w-8 text-primary" />
        <span>UniChain</span>
      </div>

      <Card className="mx-auto w-full max-w-md">
        <form onSubmit={handleSubmit}>
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl">Sign in to your account</CardTitle>
            <CardDescription>
              Enter your email and password to access your account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}
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
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/forgot-password"
                  className="text-sm text-primary hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  onChange={handleChange}
                  value={formData.password}
                  required
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground"
                  tabIndex={-1}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember" className="text-sm">
                Remember me for 30 days
              </Label>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Signing in..." : "Sign in"}
            </Button>
            <div className="text-center text-sm">
              Don't have an account?{" "}
              <Link href="/signup" className="text-primary hover:underline">
                Sign up
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>

      {/* Demo credentials card */}
      <Card className="mx-auto w-full max-w-md mt-6 border-dashed border-2 border-primary/30 bg-muted/30">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Demo Credentials</CardTitle>
          <CardDescription>Use these to quickly try the app</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <div>
            <span className="font-semibold">Admin Login</span>
            <br />
            <span>Email:</span>{" "}
            <span className="select-all">admin@gmail.com</span>
            <br />
            <span>Password:</span> <span className="select-all">1234</span>
          </div>
          <div>
            <span className="font-semibold">Student Quick Login</span>
            <br />
            <span>Email:</span> <span className="select-all">ss@gmail.com</span>
            <br />
            <span>Password:</span> <span className="select-all">ssss</span>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8 text-center text-sm text-muted-foreground">
        By signing in, you agree to our{" "}
        <Link
          href="#"
          className="underline underline-offset-4 hover:text-primary"
        >
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link
          href="#"
          className="underline underline-offset-4 hover:text-primary"
        >
          Privacy Policy
        </Link>
        .
      </div>
    </div>
  );
}
