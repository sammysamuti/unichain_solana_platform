"use client";
import { ClaimsList } from "@/components/claims/claims-list";

export default function ClaimsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Claims</h1>
      <ClaimsList />
    </div>
  );
}
