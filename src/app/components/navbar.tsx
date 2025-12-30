"use client";

import Link from "next/link";
import { Terminal, User } from "lucide-react";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto flex h-16 items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-1 font-mono font-bold text-slate-100"
        >
          <span className="text-blue-400">Un</span>
          <span>optimized</span>
          <span className="animate-pulse">_</span>
        </Link>

        <div className="flex gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors"
          >
            <Terminal className="h-4 w-4" />
            <span>Hem</span>
          </Link>
          <Link
            href="/about"
            className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors"
          >
            <User className="h-4 w-4" />
            <span>Om</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
