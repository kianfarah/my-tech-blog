"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Box, Activity, LayoutGrid, Globe } from "lucide-react";
import { cn } from "../../../lib/utils";
import { PostMetadata } from "../../../lib/mdx";

export function BlogList({ allPosts }: { allPosts: PostMetadata[] }) {
  const [filter, setFilter] = useState<"all" | "tech" | "running" | 'world'>("all");

  const filteredPosts = useMemo(() => {
    if (filter === "all") return allPosts;
    return allPosts.filter((post) => post.category === filter);
  }, [filter, allPosts]);

  return (
    <div className="space-y-8">
      {/* Filter-knappar */}
      <div className="flex flex-wrap gap-2 border-b border-slate-900 pb-6">
        <FilterButton
          active={filter === "all"}
          onClick={() => setFilter("all")}
          icon={<LayoutGrid className="h-4 w-4" />}
          label="Visa Allt"
        />
        <FilterButton
          active={filter === "tech"}
          onClick={() => setFilter("tech")}
          icon={<Box className="h-4 w-4" />}
          label="Technology"
        />
        <FilterButton
          active={filter === "running"}
          onClick={() => setFilter("running")}
          icon={<Activity className="h-4 w-4" />}
          label="Running"
        />

        <FilterButton
          active={filter === "world"}
          onClick={() => setFilter("world")}
          icon={<Globe className="h-4 w-4" />}
          label="World & Policy"
        />
      </div>

      {/* Inläggslistan */}
      <div className="grid gap-4">
        {filteredPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block p-5 border border-slate-800 rounded-xl bg-slate-900/50 hover:border-slate-600 transition-all"
          >
            <div className="flex justify-between items-center mb-2">
              <span
                className={cn(
                  "text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded",
                  post.category === "tech"
                    ? "bg-blue-500/10 text-blue-400"
                    : post.category === "running"
                    ? "bg-emerald-500/10 text-emerald-400"
                    : "bg-amber-500/10 text-amber-400" // Color for World/Policy
                )}
              >
                {post.category}
              </span>
              <span className="text-xs font-mono text-slate-500">
                {post.date}
              </span>
            </div>
            <h2 className="text-xl font-bold group-hover:text-blue-400 transition-colors">
              {post.title}
            </h2>
            <p className="mt-2 text-slate-400 text-sm italic">
              {post.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

function FilterButton({ active, onClick, icon, label }: any) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all",
        active
          ? "bg-blue-600 text-white"
          : "bg-slate-900 text-slate-400 hover:bg-slate-800"
      )}
    >
      {icon}
      {label}
    </button>
  );
}
