import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm text-indigo-400 mx-auto lg:mx-0 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500"></span>
              </span>
              Available for opportunities
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-foreground">Hi, I&apos;m </span>
              <span className="gradient-text">Darshan N Gowda</span>
            </h1>

            <h2 className="text-2xl font-semibold text-indigo-400 sm:text-3xl">
              Aspiring Full-Stack Developer
            </h2>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Aspiring Full-Stack Developer passionate about building scalable web applications and AI-powered solutions. Skilled in React.js, Flask, Python, JavaScript, Java and MySQL with hands-on experience building real-world projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="#projects">
                <Button size="lg" className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 w-full sm:w-auto">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="#contact">
                <Button size="lg" variant="outline" className="border-indigo-500/50 text-foreground hover:bg-indigo-500/10 w-full sm:w-auto">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glowing border container */}
              <div className="relative rounded-full p-1 bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 shadow-[0_0_40px_rgba(99,102,241,0.4)]">
                <div className="relative h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96 rounded-full overflow-hidden">
                  <Image
                    src="/images/profile.jpg"
                    alt="Darshan N Gowda"
                    fill
                    sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 h-8 w-8 rounded-full bg-indigo-500 animate-float" style={{ animationDelay: '0s' }} />
              <div className="absolute -bottom-4 -left-4 h-6 w-6 rounded-full bg-purple-500 animate-float" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/2 -right-8 h-4 w-4 rounded-full bg-cyan-500 animate-float" style={{ animationDelay: '2s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
