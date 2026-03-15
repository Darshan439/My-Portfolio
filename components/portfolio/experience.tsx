import { Briefcase, Code, Layout, Brain } from "lucide-react";

const experienceData = [
  {
    year: "2025",
    title: "Full-Stack Developer",
    type: "Personal Projects",
    icon: Code,
    description: [
      "Developed and deployed full-stack web applications using React.js, Flask, and MySQL.",
      "Built responsive user interfaces and backend REST APIs for project-based applications.",
    ],
  },
  {
    year: "2024",
    title: "AI Application Developer",
    type: "Academic Project",
    icon: Brain,
    description: [
      "Designed and implemented an AI-based answer evaluation system using Python, NLP techniques, and OCR.",
      "Worked with sentence transformers for semantic similarity scoring.",
    ],
  },
  {
    year: "2023",
    title: "Frontend Developer",
    type: "Web Development Projects",
    icon: Layout,
    description: [
      "Created responsive web interfaces using HTML, CSS, JavaScript, and React.js.",
      "Focused on clean UI design, component-based architecture, and usability.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey in software development
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-indigo-500/20 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">
            {experienceData.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex gap-6 md:gap-0 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot - Mobile */}
                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/25 md:hidden">
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  {/* Content Card */}
                  <div
                    className={`glass border-indigo-500/20 rounded-xl p-6 flex-1 hover:border-indigo-500/40 transition-colors md:w-[calc(50%-2rem)] ${
                      isEven ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-indigo-500/20 text-indigo-400">
                        {item.year}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {item.type}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <ul className="space-y-2">
                      {item.description.map((desc, descIndex) => (
                        <li
                          key={descIndex}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Timeline Dot - Desktop */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10 h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/25">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
