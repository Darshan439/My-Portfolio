import { GraduationCap } from "lucide-react";

const educationData = [
  {
    year: "2021 – 2025",
    degree: "B.E. in Computer Science Engineering",
    institution: "PES Institute of Technology and Management, Shivamogga",
  },
  {
    year: "2019 – 2021",
    degree: "Pre-University (PCMS – Science)",
    institution: "PACE PU College, Shivamogga",
  },
  {
    year: "2019",
    degree: "SSLC (10th Grade)",
    institution: "Swami Vivekananda School",
  },
];

export function Education() {
  return (
    <section id="education" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey and qualifications
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-indigo-500/20" />

          <div className="space-y-12">
            {educationData.map((item, index) => (
              <div key={index} className="relative flex gap-6">
                {/* Timeline Dot */}
                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/25">
                  <GraduationCap className="h-7 w-7 text-white" />
                </div>

                {/* Content Card */}
                <div className="glass border-indigo-500/20 rounded-xl p-6 flex-1 hover:border-indigo-500/40 transition-colors">
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-indigo-500/20 text-indigo-400 mb-3">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {item.degree}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.institution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
