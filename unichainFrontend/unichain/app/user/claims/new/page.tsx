"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import api from "@/lib/axios";

interface NewClaimForm {
  title: string;
  description: string;
  location: string;
  category: string;
  proofDetails: string;
  message: string;
}

export default function NewClaimPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<NewClaimForm>({
    title: "",
    description: "",
    location: "",
    category: "",
    proofDetails: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleCategoryChange = (value: string) => {
    setFormData({
      ...formData,
      category: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        router.push("/login");
        return;
      }

      // First create a lost item
      const lostItemResponse = await api.post("/api/auth/lost-items", {
        ...formData,
        ownerId: userId,
      });

      // Then create a claim for the lost item
      await api.post("/api/auth/claims", {
        lostItemId: lostItemResponse.data.id,
        studentId: userId,
        message: formData.message,
        proofDetails: formData.proofDetails,
      });

      router.push("/user/claims");
    } catch (err) {
      console.error("Failed to submit claim:", err);
      // Don't show error message, just keep the form in editable state
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>Submit New Claim</CardTitle>
            <CardDescription>
              Provide details about your lost item to submit a claim
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">

            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                placeholder="Brief title of the lost item"
                onChange={handleChange}
                value={formData.title}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Detailed description of the lost item"
                onChange={handleChange}
                value={formData.description}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                placeholder="Where was the item lost?"
                onChange={handleChange}
                value={formData.location}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select onValueChange={handleCategoryChange} value={formData.category}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ELECTRONICS">Electronics</SelectItem>
                  <SelectItem value="DOCUMENTS">Documents</SelectItem>
                  <SelectItem value="ACCESSORIES">Accessories</SelectItem>
                  <SelectItem value="CLOTHING">Clothing</SelectItem>
                  <SelectItem value="OTHER">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="proofDetails">Proof of Ownership</Label>
              <Textarea
                id="proofDetails"
                placeholder="Provide details that prove your ownership"
                onChange={handleChange}
                value={formData.proofDetails}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message to Finder</Label>
              <Textarea
                id="message"
                placeholder="Write a message to the person who found your item"
                onChange={handleChange}
                value={formData.message}
                required
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end space-x-2">
            <Button 
              variant="outline" 
              type="button"
              onClick={() => router.back()}
            >
              Cancel
            </Button>
            <Button 
              type="submit"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Claim"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
