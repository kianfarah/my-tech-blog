import Image from "next/image";
import Link from "next/link";
import { FiMail } from "react-icons/fi";
import { SiGithub, SiLinkedin, SiInstagram, SiStrava } from "react-icons/si";
import { Code2, Activity, Coffee } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="space-y-12 py-4">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-48 relative shrink-0 overflow-hidden rounded-2xl border-2 border-slate-800 shadow-2xl bg-slate-900">
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
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-100">
            About Me
          </h1>
          <p className="text-xl text-blue-400 font-mono">
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
      <section>
        <h2 className="text-xl font-semibold text-slate-50">
          About — Unoptimized
        </h2>
        <p className="text-slate-300 leading-relaxed">
          Unoptimized is a personal space for thinking out loud about systems —
          technical, physical, and societal. It’s written from the belief that
          most things worth building or understanding cannot be fully optimized
          without losing something important: context, resilience, or humanity.
          This applies as much to software and infrastructure as it does to
          bodies, communities, and nations.
        </p>
      </section>

      <section className="prose prose-invert prose-slate max-w-none">
        <h2 className="text-xl font-semibold text-slate-50">Technology</h2>
        <p className="text-slate-300 leading-relaxed mb-4">
          My professional background is rooted in the JVM ecosystem and modern
          backend systems. I primarily work with Java and Spring, building
          services that need to survive real-world conditions: latency, scale,
          failure, and human error. I'm interested in how systems behave under
          load — not just benchmarks, but what happens over time when
          abstractions leak and assumptions break. On the platform side, I spend
          a lot of time around Kubernetes, containers, and DevOps practices.
          Less in pursuit of "perfect architecture" and more in understanding:
        </p>
        <ul className="list-disc list-inside text-slate-300 space-y-2 mb-4 ml-4">
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

      <section>
        <h2 className="text-xl font-semibold text-slate-50">Running</h2>
        <p className="text-slate-300 leading-relaxed mb-4">
          Outside of code, I’m a long-distance runner. Running has shaped how I
          think about systems more than any book or framework. Long-distance
          training teaches lessons that transfer directly to engineering and
          life:
        </p>
        <ul className="list-disc list-inside text-slate-300 space-y-2 mb-4 ml-4">
          <li>consistency beats intensity</li>
          <li> recovery is part of progress</li>
          <li>pushing everything to the limit is unsustainable</li>
        </ul>
        <p className="text-slate-300 leading-relaxed mb-4">
          I train primarily for endurance — respecting pace, terrain, and time.
          The long run is where discipline, patience, and clarity are built.
          That mindset strongly influences how I approach both technical
          problems and personal growth.
        </p>
        <p className="text-slate-300 leading-relaxed mb-4">
          Some posts here use running as metaphor; others are simply reflections
          from time spent moving slowly and thinking deeply.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/30">
          <div className="flex items-center gap-3 mb-4 text-blue-400">
            <Code2 className="h-6 w-6" />
            <h2 className="text-xl font-bold text-slate-100">Technology</h2>
          </div>
          <ul className="space-y-2 text-slate-400 text-sm font-mono">
            <li>• Java / Kotlin / Spring / Spring Boot</li>
            <li>• gRPC / REST </li>
            <li>• K8s / Docker / DevOps</li>
            <li>• Kafka / SQL / NoSQL</li>
          </ul>
        </div>

        <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/30">
          <div className="flex items-center gap-3 mb-4 text-emerald-400">
            <Activity className="h-6 w-6" />
            <h2 className="text-xl font-bold text-slate-100">Running</h2>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed italic">
            Currently, training for a sub-35 min 10k. Running provides the
            discipline and mental clarity needed to solve complex architectural
            problems.
          </p>
        </div>
      </div>

      <section className="pt-6 border-t border-slate-900">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-slate-100">
          <Coffee className="h-5 w-5 text-amber-400" />
          The Mission
        </h2>
        <p className="text-slate-400 leading-relaxed">
          The mission of{" "}
          <em className="bg-amber-400 text-black"> Unoptimized</em> is simple:
        </p>
        <ul className="list-disc list-inside text-slate-300 space-y-1 mb-4 ml-4">
          <li>to think in public</li>
          <li>to resist shallow certainty</li>
          <li>to document ideas before they're polished</li>
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
      className="text-slate-400 hover:text-blue-400 transition-all hover:scale-110"
      title={label}
    >
      <span className="text-xl block">{icon}</span>
    </Link>
  );
}
