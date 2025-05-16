import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Upload, Download, FileText, Award, ExternalLink } from "lucide-react";

export default function AcademicCredentialsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Academic Credentials
          </h1>
          <p className="text-muted-foreground">
            Manage and verify your academic documents securely on the blockchain
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Upload className="h-4 w-4" />
            Upload Document
          </Button>
          <Button className="gap-2">
            <Download className="h-4 w-4" />
            Export All
          </Button>
        </div>
      </div>

      <Tabs defaultValue="documents" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="certificates">Certificates</TabsTrigger>
          <TabsTrigger value="verification">Verification</TabsTrigger>
        </TabsList>
        <TabsContent value="documents" className="space-y-4">
          {[1, 2, 3].map((item) => (
            <Card key={item}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Transcript {2023 + item}
                </CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">
                  Uploaded: {new Date().toLocaleDateString()}
                </div>
                <div className="mt-4 flex justify-between">
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                  <Button variant="ghost" size="sm">
                    Share
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        <TabsContent value="certificates" className="space-y-4">
          {[1, 2].map((item) => (
            <Card key={item}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Certificate of {item === 1 ? "Achievement" : "Completion"}
                </CardTitle>
                <Award className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">
                  Issued: {new Date().toLocaleDateString()}
                </div>
                <div className="mt-4 flex justify-between">
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                  <Button variant="ghost" size="sm">
                    Verify
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        <TabsContent value="verification" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Verify External Documents</CardTitle>
              <CardDescription>
                Check the authenticity of credentials issued on UniChain
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <Button variant="outline" className="gap-2">
                    <Upload className="h-4 w-4" />
                    Upload for Verification
                  </Button>
                  <span className="text-sm text-muted-foreground">or</span>
                  <Button variant="outline" className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Enter Document ID
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Verification is processed securely through our blockchain
                  network without storing your documents.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
