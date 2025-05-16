"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";

export function TokenBalance() {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(
      "8xft7UGgvfDB9yvMsWLFMQME4uoTvJsWH2RLjfLb9q7B"
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-xs font-bold text-white">UT</span>
          </div>
          <div>
            <div className="font-bold">120 UniTokens</div>
            <div className="text-xs text-muted-foreground">≈ 0.5 SOL</div>
          </div>
        </div>
        <div className="text-sm font-medium text-green-500">+15%</div>
      </div>

      <div className="rounded-md bg-muted p-2 text-xs">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Wallet Address</span>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6"
            onClick={copyAddress}
          >
            {copied ? (
              <Check className="h-3 w-3" />
            ) : (
              <Copy className="h-3 w-3" />
            )}
          </Button>
        </div>
        <div className="mt-1 font-mono truncate">
          8xft7UGgvfDB9yvMsWLFMQME4uoTvJsWH2RLjfLb9q7B
        </div>
      </div>
    </div>
  );
}
