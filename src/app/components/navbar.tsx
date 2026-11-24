"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Posts" },
  { href: "/tags", label: "Tags" },
  { href: "/archive", label: "Archive" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/" || pathname.startsWith("/blog")
      : pathname.startsWith(href);

  return (
    <header className="site-header">
      <Link href="/" className="brand">
        unoptimized<span className="cursor">_</span>
      </Link>
      <nav className="site-nav">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            aria-current={isActive(href) ? "page" : undefined}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
