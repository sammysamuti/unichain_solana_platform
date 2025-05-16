"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    location: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      console.error("Passwords do not match.");
      return;
    }

    try {
      console.log("Form data:", form);

      const response = await fetch(
        "https://added-flora-endubis-wallet-82a60b31.koyeb.app/api/universities",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            location: form.location,
            password: form.password,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("university", JSON.stringify(data));
        console.log("University registered successfully:", data);
        setForm({
          name: "",
          email: "",
          location: "",
          password: "",
          confirmPassword: "",
        });
      } else {
        console.error("Failed to register university. Status:", response.status);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-6 md:p-12">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>

      <div className="mb-8 flex items-center gap-2 text-3xl font-bold">
        <Sparkles className="h-10 w-10 text-primary" />
        <span>Register University</span>
      </div>

      <Card className="mx-auto w-full max-w-[95%] sm:max-w-xl shadow-lg">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl">Create a University</CardTitle>
          <CardDescription>
            Fill in the details to register a new university.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="universityName">University Name</Label>
              <Input
                id="universityName"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="University Name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="email@university.edu"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="City, Country"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={form.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <CardFooter className="flex flex-col space-y-4">
              <Button type="submit" className="w-full h-10 text-sm sm:text-base">
                Register University
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
