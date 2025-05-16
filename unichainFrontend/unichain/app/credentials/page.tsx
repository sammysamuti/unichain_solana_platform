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
import { Award, Download, Eye, FileText, Share2 } from "lucide-react";
import { PageContainer } from "@/components/page-container";

export default function CredentialsPage() {
  return (
    <PageContainer>
      <div className="mb-6 flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">
          Academic Credentials
        </h1>
        <p className="text-muted-foreground">
          View and manage your academic credentials stored as NFTs on the Solana
          blockchain
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All Credentials</TabsTrigger>
          <TabsTrigger value="diplomas">Diplomas</TabsTrigger>
          <TabsTrigger value="certificates">Certificates</TabsTrigger>
          <TabsTrigger value="transcripts">Transcripts</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Diploma Card */}
            <Card className="overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <CardHeader className="pb-0">
                <div className="flex items-center justify-between">
                  <CardTitle>Bachelor of Science</CardTitle>
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <CardDescription>Computer Science</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="aspect-[3/4] rounded-md overflow-hidden gradient-border">
                  <img
                    src="/placeholder.svg?height=300&width=225"
                    alt="Diploma NFT"
                    className="h-full w-full object-cover"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  <Eye className="mr-2 h-4 w-4" />
                  View
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
                <Button size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </CardFooter>
            </Card>

            {/* Certificate Card */}
            <Card className="overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-pink-500 to-purple-500"></div>
              <CardHeader className="pb-0">
                <div className="flex items-center justify-between">
                  <CardTitle>Certificate</CardTitle>
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <CardDescription>Blockchain Development</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="aspect-[3/4] rounded-md overflow-hidden gradient-border">
                  <img
                    src="/placeholder.svg?height=300&width=225"
                    alt="Certificate NFT"
                    className="h-full w-full object-cover"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  <Eye className="mr-2 h-4 w-4" />
                  View
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
                <Button size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </CardFooter>
            </Card>

            {/* Transcript Card */}
            <Card className="overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <CardHeader className="pb-0">
                <div className="flex items-center justify-between">
                  <CardTitle>Transcript</CardTitle>
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <CardDescription>Academic Year 2023-2024</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="aspect-[3/4] rounded-md overflow-hidden gradient-border">
                  <img
                    src="/placeholder.svg?height=300&width=225"
                    alt="Transcript NFT"
                    className="h-full w-full object-cover"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  <Eye className="mr-2 h-4 w-4" />
                  View
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
                <Button size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="diplomas">
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Diploma Card */}
            <Card className="overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <CardHeader className="pb-0">
                <div className="flex items-center justify-between">
                  <CardTitle>Bachelor of Science</CardTitle>
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <CardDescription>Computer Science</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="aspect-[3/4] rounded-md overflow-hidden gradient-border">
                  <img
                    src="/placeholder.svg?height=300&width=225"
                    alt="Diploma NFT"
                    className="h-full w-full object-cover"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  <Eye className="mr-2 h-4 w-4" />
                  View
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
                <Button size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        {/* Other tabs would have similar content structure */}
        <TabsContent value="certificates">
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Certificate Card */}
            <Card className="overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-pink-500 to-purple-500"></div>
              <CardHeader className="pb-0">
                <div className="flex items-center justify-between">
                  <CardTitle>Certificate</CardTitle>
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <CardDescription>Blockchain Development</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="aspect-[3/4] rounded-md overflow-hidden gradient-border">
                  <img
                    src="/placeholder.svg?height=300&width=225"
                    alt="Certificate NFT"
                    className="h-full w-full object-cover"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  <Eye className="mr-2 h-4 w-4" />
                  View
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
                <Button size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="transcripts">
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Transcript Card */}
            <Card className="overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <CardHeader className="pb-0">
                <div className="flex items-center justify-between">
                  <CardTitle>Transcript</CardTitle>
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <CardDescription>Academic Year 2023-2024</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="aspect-[3/4] rounded-md overflow-hidden gradient-border">
                  <img
                    src="/placeholder.svg?height=300&width=225"
                    alt="Transcript NFT"
                    className="h-full w-full object-cover"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  <Eye className="mr-2 h-4 w-4" />
                  View
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
                <Button size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </PageContainer>
  );
}
