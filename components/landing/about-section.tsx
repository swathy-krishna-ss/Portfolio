"use client";

import { useEffect, useRef, useState } from "react";
import { GraduationCap, Award, CheckCircle2, BookOpen } from "lucide-react";

const education = [
  {
    type: "exam",
    title: "UGC NET (Economics)",
    institution: "National Testing Agency (NTA)",
    year: "Qualified",
    description: "Qualified the National Eligibility Test for Assistant Professorship in Economics, proving subject mastery at a national level.",
    icon: Award,
  },
  {
    type: "degree",
    title: "Master of Arts (Economics)",
    institution: "University of Kerala, Karyavattom",
    year: "2021 - 2023",
    grade: "79.7%",
    description: "Specialized in Applied Economics, Econometrics, and Public Policy. Engaged in extensive seminar presentations and research projects.",
    icon: GraduationCap,
  },
  {
    type: "degree",
    title: "Bachelor of Arts (Economics)",
    institution: "Fatima Mata National College, Kollam",
    year: "2018 - 2021",
    grade: "89.7% (First Rank)",
    description: "Graduated with top honors. Awarded First Rank in BA Economics by the Department of Economics for outstanding academic performance.",
    icon: GraduationCap,
  },
  {
    type: "certification",
    title: "Cost and Economics in Pricing Strategy",
    institution: "University of Virginia & BCG",
    year: "Completed",
    description: "Successfully completed the specialized online course focusing on pricing tactics, economics-driven value capturing, and cost structures.",
    icon: BookOpen,
  },
];

const skills = [
  {
    name: "Applied Economics",
    description: "Applying economic theories and econometric models to address real-world governance, finance, and policy questions.",
  },
  {
    name: "Strong Decision Making",
    description: "Analyzing qualitative and quantitative variables to make strategic, data-informed choices under professional pressure.",
  },
  {
    name: "Negotiation & Eloquence",
    description: "Articulating complex socio-economic ideas with clarity, persuasion, and public speaking expertise.",
  },
  {
    name: "Interpersonal Relations",
    description: "Coordinating with diverse academic committees, leadership teams, and community project stakeholders.",
  },
];

export function AboutSection() {
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
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-background border-b border-foreground/10"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left: About Intro & Skills */}
          <div
            className={`lg:col-span-5 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-primary font-semibold tracking-wider uppercase mb-6">
              <span className="w-8 h-px bg-primary/30" />
              Profile & Core Competencies
            </span>
            
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-8">
              A Dedicated
              <br />
              Economics Scholar
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              My objective is to make the best use of my economic expertise, analytical skillsets, and professional dedication to contribute to policy research, academic excellence, and progressive governance replenishment.
            </p>

            {/* Skills List */}
            <div className="space-y-6">
              <h3 className="text-xl font-display font-medium text-foreground tracking-tight border-b border-foreground/10 pb-2">
                Core Strengths
              </h3>
              <div className="grid gap-6">
                {skills.map((skill) => (
                  <div key={skill.name} className="flex gap-4 group">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <h4 className="font-semibold text-foreground font-sans text-base mb-1">
                        {skill.name}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Academic Journey Timeline */}
          <div
            className={`lg:col-span-7 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-2xl lg:text-3xl font-display mb-12 tracking-tight flex items-center gap-3">
              <span className="text-primary font-mono text-lg">✦</span> Academic Journey
            </h3>

            <div className="relative border-l border-foreground/10 pl-6 lg:pl-10 ml-4 space-y-12">
              {education.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="relative group">
                    {/* Timeline dot */}
                    <div className="absolute -left-[37px] lg:-left-[53px] top-1.5 w-8 h-8 rounded-full bg-background border border-foreground/10 flex items-center justify-center group-hover:border-primary transition-colors duration-300">
                      <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>

                    {/* Timeline card */}
                    <div className="p-6 border border-foreground/5 bg-foreground/[0.01] hover:bg-foreground/[0.02] hover:border-foreground/10 transition-all duration-300 rounded-lg">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                        <span className="font-mono text-xs text-primary font-semibold tracking-wider uppercase bg-primary/5 px-2.5 py-1 rounded">
                          {item.year}
                        </span>
                        {"grade" in item && (
                          <span className="text-sm font-semibold font-mono text-muted-foreground">
                            Score: {item.grade}
                          </span>
                        )}
                      </div>
                      <h4 className="text-xl font-display font-medium text-foreground mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm font-medium text-muted-foreground mb-3 font-sans">
                        {item.institution}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
