import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";

const certifications = [
  {
    name: "Generative AI Mastermind",
    organization: "Certification",
    year: "2026",
  },
  {
    name: "Python Using AI",
    organization: "Certification",
    year: "2025",
  },
  {
    name: "Generate Images with AI",
    organization: "Certification",
    year: "2025",
  },
  {
    name: "OOPs in Java",
    organization: "Certification",
    year: "2024",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20 relative">
      {/* Background effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold sm:text-4xl">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and credentials I have earned
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert) => (
            <Card 
              key={cert.name} 
              className="glass border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 mb-4">
                  <Award className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 leading-tight">{cert.name}</h3>
                <p className="text-sm text-muted-foreground mb-1">{cert.organization}</p>
                <p className="text-sm text-indigo-400">{cert.year}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
