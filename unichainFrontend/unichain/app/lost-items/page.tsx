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
import { MapPin, Upload, Camera } from "lucide-react";
import { PageContainer } from "@/components/page-container";

export default function LostItemsPage() {
  return (
    <PageContainer>
      <div className="mb-6 flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Report Lost Item</h1>
        <p className="text-muted-foreground">
          Report a lost item and get notified when it's found
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Item Details</CardTitle>
            <CardDescription>
              Provide details about the lost item to help others identify it
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="item-name">Item Name</Label>
                <Input id="item-name" placeholder="e.g., Student ID Card" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="item-category">Category</Label>
                <select
                  id="item-category"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Select a category</option>
                  <option value="id">ID Card</option>
                  <option value="electronics">Electronics</option>
                  <option value="books">Books</option>
                  <option value="clothing">Clothing</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="item-description">Description</Label>
                <Textarea
                  id="item-description"
                  placeholder="Describe the item in detail (color, brand, identifying marks, etc.)"
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="last-seen">Last Seen Location</Label>
                <div className="flex gap-2">
                  <Input
                    id="last-seen"
                    placeholder="e.g., Main Library, 2nd floor"
                  />
                  <Button variant="outline" size="icon">
                    <MapPin className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="date-lost">Date Lost</Label>
                <Input id="date-lost" type="date" />
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Upload Images</CardTitle>
              <CardDescription>
                Upload photos of your item to help with identification
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border p-12">
                  <div className="flex flex-col items-center justify-center space-y-2 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                      <Upload className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium">
                        Drag & drop files here
                      </p>
                      <p className="text-xs text-muted-foreground">
                        or click to browse files
                      </p>
                    </div>
                    <Input id="file-upload" type="file" className="hidden" />
                    <Button variant="outline" size="sm" asChild>
                      <label htmlFor="file-upload">Choose File</label>
                    </Button>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Camera className="mr-2 h-4 w-4" />
                    Take Photo
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                How can someone contact you if they find your item?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="contact-method">
                    Preferred Contact Method
                  </Label>
                  <select
                    id="contact-method"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select contact method</option>
                    <option value="wallet">Wallet Address (Anonymous)</option>
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-details">Contact Details</Label>
                  <Input
                    id="contact-details"
                    placeholder="Enter contact information"
                  />
                  <p className="text-xs text-muted-foreground">
                    This will only be shared with the finder after you confirm
                    it's your item
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Submit Report</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
}
