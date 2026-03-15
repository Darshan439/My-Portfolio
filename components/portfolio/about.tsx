import { Card, CardContent } from "@/components/ui/card";
import { Code2, FolderGit2, Layers, User } from "lucide-react";

const stats = [
  {
    icon: FolderGit2,
    value: "10+",
    label: "Projects Built",
  },
  {
    icon: Layers,
    value: "12+",
    label: "Technologies",
  },
  {
    icon: Code2,
    value: "8+",
    label: "GitHub Repositories",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 relative">
      {/* Background effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold sm:text-4xl">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Get to know me and what drives my passion for development
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left - Image Card */}
          <div className="flex justify-center lg:justify-start">
            <Card className="glass border-indigo-500/20 p-2 max-w-sm">
              <CardContent className="p-0">
                <div className="relative aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                  {/* Placeholder for profile image */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-500/20 to-purple-500/20">
                    <User className="h-24 w-24 text-muted-foreground/50" />
                  </div>
                  {/* Replace with actual image:
                  <Image
                    src="/about-photo.jpg"
                    alt="About Me"
                    fill
                    className="object-cover"
                  />
                  */}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right - Text Content */}
          <div className="flex flex-col gap-6">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hello! I&apos;m Darshan N Gowda, an aspiring Full-Stack Developer with hands-on experience building web applications using Python, JavaScript, React.js, Flask, and MySQL.
              </p>
              <p>
                I enjoy solving real-world problems through software and developing clean, scalable, and efficient applications. My interests include backend systems, REST API development, and AI-powered applications.
              </p>
              <p>
                I am currently focused on improving my full-stack development skills and building impactful projects.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
              {stats.map((stat) => (
                <Card key={stat.label} className="glass border-indigo-500/20 hover:border-indigo-500/40 transition-colors">
                  <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                    <stat.icon className="h-8 w-8 text-indigo-400 mb-2" />
                    <span className="text-2xl font-bold text-foreground">{stat.value}</span>
                    <span className="text-sm text-muted-foreground">{stat.label}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
