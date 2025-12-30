"use client";

import { useState } from "react";
import { Clipboard, Check } from "lucide-react";

export function CopyButton({ text }: { text: string }) {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <button
      onClick={copy}
      className="absolute right-4 top-4 p-2 rounded-md bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700"
      aria-label="Copy code"
    >
      {isCopied ? (
        <Check className="h-4 w-4 text-green-400" />
      ) : (
        <Clipboard className="h-4 w-4 text-slate-400" />
      )}
    </button>
  );
}
