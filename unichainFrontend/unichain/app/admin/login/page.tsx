'use client';

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Toaster, toast } from "sonner";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent } from "react";

export default function AdminLogin() {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check admin credentials as per memory
    if (form.email === "admin@gmail.com" && form.password === "1234") {
      // Set admin flag in localStorage
      localStorage.setItem("isAdmin", "true");
      toast.success("Admin login successful");
      router.push("/admin"); // Redirect to admin route
    } else {
      toast.error("Invalid admin credentials");
    }
  };

  return (
    <>
      <Toaster />
      <div className="flex min-h-screen items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <h2 className="mb-6 text-2xl font-bold text-center">Admin Login</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
