"use client";

import { useEffect, useRef, useState } from "react";
import { FolderGit2, CheckSquare, Sparkles, TrendingUp } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Effectiveness of Economic Governance in Kerala during the Pandemic",
    subtitle: "With special reference to Kudumbasree Interest Free Loans",
    category: "Microfinance & Local Governance",
    scope: "Fieldwork-based Qualitative & Quantitative Study",
    objectives: [
      "Analyze the role of Kudumbasree micro-finance networks in sustaining low-income household consumption during COVID-19.",
      "Assess the governance models of local self-government institutions in distributing interest-free loans.",
      "Evaluate financial recovery levels and repayment dynamics of pandemic-era debt programs."
    ],
    outcome: "Evaluated economic cushioning of interest-free loan distributions. Detailed how local community groups (Kudumbasree) served as fiscal safety nets, helping families bypass predatory informal lending networks.",
    color: "from-amber-500/10 to-red-500/10",
  },
  {
    number: "02",
    title: "A Study on Green Auditing in Higher Education",
    subtitle: "With special reference to Fatima Mata National College, Kollam",
    category: "Environmental Economics & Accountability",
    scope: "Institutional Ecological Survey & Auditing",
    objectives: [
      "Perform a structural audit of energy utility, water preservation, and carbon footprints across a collegiate campus.",
      "Investigate waste management protocols and evaluate students' ecological awareness indexes.",
      "Draft policy recommendations for green infrastructure investments and ecological syllabus integrations."
    ],
    outcome: "Formulated a detailed roadmap for campus resource conservation. Recommended solar installations, rainwater harvesting expansions, and campus composting models to achieve zero-waste milestones.",
    color: "from-green-500/10 to-emerald-500/10",
  },
];

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-background border-b border-foreground/10 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-primary font-semibold tracking-wider uppercase mb-6">
            <span className="w-8 h-px bg-primary/30" />
            Featured Projects
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Academic Research Projects.
            <br />
            <span className="text-muted-foreground">Investigating governance, microfinance, and sustainability.</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div
              key={project.number}
              className={`group relative flex flex-col p-8 lg:p-12 border border-foreground/10 bg-foreground/[0.01] hover:bg-foreground/[0.02] hover:border-foreground/25 hover:shadow-lg transition-all duration-500 rounded-2xl overflow-hidden ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Subtle background glow */}
              <div className={`absolute -right-24 -bottom-24 w-80 h-80 rounded-full bg-gradient-to-tr ${project.color} opacity-40 blur-3xl group-hover:scale-110 transition-all duration-500`} />

              {/* Number and Label */}
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-sm text-primary font-semibold tracking-wider bg-primary/5 px-3 py-1 rounded-full uppercase">
                  {project.category}
                </span>
                <span className="font-mono text-4xl text-foreground/10 select-none">
                  {project.number}
                </span>
              </div>

              {/* Content Title */}
              <div className="mb-8 flex-1">
                <h3 className="text-2xl lg:text-3xl font-display font-medium tracking-tight text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm font-semibold font-mono text-primary/80 mb-6 italic">
                  {project.subtitle}
                </p>
                
                <p className="text-xs font-mono tracking-wider uppercase text-muted-foreground mb-4">
                  SCOPE: {project.scope}
                </p>

                {/* Objectives */}
                <div className="space-y-3 mb-6">
                  <h4 className="text-sm font-semibold text-foreground tracking-tight flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-primary" /> Key Focus Areas:
                  </h4>
                  <ul className="space-y-2 pl-6 list-disc text-sm text-muted-foreground leading-relaxed">
                    {project.objectives.map((obj, i) => (
                      <li key={i}>{obj}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Outcome summary */}
              <div className="pt-6 border-t border-foreground/10 relative z-10">
                <span className="text-xs font-mono tracking-wider uppercase text-muted-foreground block mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-primary" /> Core Impact & Outcome:
                </span>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.outcome}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
