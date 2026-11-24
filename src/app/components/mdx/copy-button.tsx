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
    <button type="button" onClick={copy} className="copy" aria-label="Copy code">
      {isCopied ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
    </button>
  );
}
