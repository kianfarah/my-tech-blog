import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiGithub, SiLinkedin, SiInstagram, SiStrava } from "react-icons/si";
import { Code2, Activity, Coffee } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "Java developer and long-distance runner writing about systems.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[46rem] space-y-12 px-[var(--gutter)] py-8">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-48 relative shrink-0 overflow-hidden rounded-[10px] border-2 border-border bg-subtle">
          <Image
            src="/about-image.jpg"
            alt="Profile Picture"
            width={192} // This matches w-48
            height={256} // This allows it to be taller than it is wide
            className="w-full h-auto block"
            priority
          />
        </div>

        <div className="space-y-4 text-center md:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight text-fg">
            About Me
          </h1>
          <p className="text-xl text-hl font-mono">
            {">"} Java Developer & Long Distance Runner
          </p>

          <div className="flex justify-center md:justify-start gap-6 pt-2">
            <SocialLink
              href="https://github.com/kianfarah"
              icon={<SiGithub />}
              label="GitHub"
            />
            <SocialLink
              href="https://www.linkedin.com/in/isak-farah-5b86a5166/"
              icon={<SiLinkedin />}
              label="LinkedIn"
            />
            <SocialLink
              href="https://www.instagram.com/isak_isrunning/"
              icon={<SiInstagram />}
              label="Instagram"
            />
            <SocialLink
              href="https://www.strava.com/athletes/142589576"
              icon={<SiStrava />}
              label="Strava"
            />
          </div>
        </div>
      </header>

      {/* Intro & Skills Grid */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-fg">
          About — Unoptimized
        </h2>
        <p className="text-fg leading-relaxed">
          Unoptimized is a personal space for thinking out loud about systems —
          technical, physical, and societal. It’s written from the belief that
          most things worth building or understanding cannot be fully optimized
          without losing something important: context, resilience, or humanity.
          This applies as much to software and infrastructure as it does to
          bodies, communities, and nations.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-fg">Technology</h2>
        <p className="text-fg leading-relaxed mb-4">
          My professional background is rooted in the JVM ecosystem and modern
          backend systems. I primarily work with Java and Spring, building
          services that need to survive real-world conditions: latency, scale,
          failure, and human error. I&apos;m interested in how systems behave under
          load — not just benchmarks, but what happens over time when
          abstractions leak and assumptions break. On the platform side, I spend
          a lot of time around Kubernetes, containers, and DevOps practices.
          Less in pursuit of &ldquo;perfect architecture&rdquo; and more in understanding:
        </p>
        <ul className="list-disc list-inside text-fg space-y-2 mb-4 ml-4">
          <li>operational simplicity vs. theoretical elegance</li>
          <li>observability over premature optimization</li>
          <li>failure as a first-class design constraint</li>
        </ul>
        <p>
          This blog is where I explore JVM internals, distributed systems, and
          infrastructure choices — often focusing on trade-offs, not
          prescriptions.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-fg">Running</h2>
        <p className="text-fg leading-relaxed mb-4">
          Outside of code, I’m a long-distance runner. Running has shaped how I
          think about systems more than any book or framework. Long-distance
          training teaches lessons that transfer directly to engineering and
          life:
        </p>
        <ul className="list-disc list-inside text-fg space-y-2 mb-4 ml-4">
          <li>consistency beats intensity</li>
          <li> recovery is part of progress</li>
          <li>pushing everything to the limit is unsustainable</li>
        </ul>
        <p className="text-fg leading-relaxed mb-4">
          I train primarily for endurance — respecting pace, terrain, and time.
          The long run is where discipline, patience, and clarity are built.
          That mindset strongly influences how I approach both technical
          problems and personal growth.
        </p>
        <p className="text-fg leading-relaxed mb-4">
          Some posts here use running as metaphor; others are simply reflections
          from time spent moving slowly and thinking deeply.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-[10px] border border-border bg-subtle">
          <div className="flex items-center gap-3 mb-4 text-hl">
            <Code2 className="h-6 w-6" />
            <h2 className="text-xl font-bold text-fg">Technology</h2>
          </div>
          <ul className="space-y-2 text-muted text-sm font-mono">
            <li>• Java / Kotlin / Spring / Spring Boot</li>
            <li>• gRPC / REST </li>
            <li>• K8s / Docker / DevOps</li>
            <li>• Kafka / SQL / NoSQL</li>
          </ul>
        </div>

        <div className="p-6 rounded-[10px] border border-border bg-subtle">
          <div className="flex items-center gap-3 mb-4 text-hl">
            <Activity className="h-6 w-6" />
            <h2 className="text-xl font-bold text-fg">Running</h2>
          </div>
          <p className="text-muted text-sm leading-relaxed italic">
            Currently, training for a sub-35 min 10k. Running provides the
            discipline and mental clarity needed to solve complex architectural
            problems.
          </p>
        </div>
      </div>

      <section className="pt-6 border-t border-border">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-fg">
          <Coffee className="h-5 w-5 text-mdx" />
          The Mission
        </h2>
        <p className="text-muted leading-relaxed">
          The mission of{" "}
          <em className="bg-mdx px-1 text-black"> Unoptimized</em> is simple:
        </p>
        <ul className="list-disc list-inside text-fg space-y-1 mb-4 ml-4">
          <li>to think in public</li>
          <li>to resist shallow certainty</li>
          <li>to document ideas before they&apos;re polished</li>
        </ul>

        <p>
          This is not a productivity blog, a manifesto, or a feed for hot takes.
          It’s a long-term notebook — shaped by code, running, and the world as
          it is, not as it’s promised to be.
        </p>
      </section>
    </div>
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted hover:text-hl transition-all hover:scale-110"
      title={label}
    >
      <span className="text-xl block">{icon}</span>
    </Link>
  );
}
