import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, FolderOpen } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "AI Answer Paper Evaluation System",
    description: "AI-based web application that automatically evaluates student answer sheets using natural language processing and a Flask backend.",
    image: "/project-1.jpg",
    technologies: ["Python", "Flask", "HTML", "CSS", "SQLite"],
    github: "https://github.com/Darshan439/AI-Answer-Evaluation-System",
    demo: null,
  },
  {
    title: "Smart Bookmark Manager",
    description: "Web application that allows users to save, organize, search, and manage bookmarks efficiently with a simple and user-friendly interface.",
    image: "/project-2.jpg",
    technologies: ["React.js", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/your-username/smart-bookmark-app",
    demo: "https://smart-bookmark-app-mu-ruddy.vercel.app",
  },
  {
    title: "Meeting Action Items Tracker",
    description: "Web application that extracts and manages action items from meeting transcripts and organizes them into a task tracking dashboard.",
    image: "/project-3.jpg",
    technologies: ["Python", "Flask", "JavaScript", "SQLite"],
    github: "https://github.com/Darshan439/meeting-action-items-tracker",
    demo: "https://meeting-action-items-tracker.onrender.com",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      {/* Background effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold sm:text-4xl">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Explore some of my recent work and personal projects
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card 
              key={project.title} 
              className="glass border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-2 group overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-500/20 to-purple-500/20 group-hover:from-indigo-500/30 group-hover:to-purple-500/30 transition-colors">
                  <FolderOpen className="h-16 w-16 text-muted-foreground/30 group-hover:text-muted-foreground/50 transition-colors" />
                </div>
                {/* Replace with actual image:
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                */}
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex gap-3">
                <Link href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button variant="outline" className="w-full border-indigo-500/50 text-foreground hover:bg-indigo-500/10">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </Link>
                {project.demo ? (
                  <Link href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </Link>
                ) : (
                  <Button disabled className="flex-1 opacity-50 cursor-not-allowed">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    No Demo
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
