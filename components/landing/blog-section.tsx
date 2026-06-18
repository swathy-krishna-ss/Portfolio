"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowUpRight, BookOpen, PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: "At the Helm",
    date: "May 2023",
    url: "https://theecodesk.blogspot.com/2023/05/at-helm.html",
    excerpt: "The nature had her skin drenched by the mist and kissed by the dew drops. The jasmines danced, roses smiled, and the Helios was there to ki...",
    summary: "A vivid and poetic observation of nature awakening, capturing the interplay between mist, flora, and sunlight. Evokes a sense of serene beauty and the delicate balance of the natural world.",
  },
  {
    title: "The Mask",
    date: "March 2023",
    url: "https://theecodesk.blogspot.com/2023/03/the-mask.html",
    excerpt: "The leaves giggled over the night, they were fragile. And the breeze was tranquil throughout. The moon had its grinning face shining with ec...",
    summary: "A reflective and philosophical write-up exploring identity, perception, and the social masks people wear in everyday life. Analyzes human behavior through evocative imagery and contemplative observations.",
  },
  {
    title: "Ado",
    date: "March 2024",
    url: "https://theecodesk.blogspot.com/2024/03/ado.html",
    excerpt: "Stars cried aloud but the sky was dumb. Rivers tumbled to damn death and the sea was insane. Breath was solely deep enough to feel the mournf...",
    summary: "A poetic prose entry capturing life's subtle rhythms, silent struggles, and emotional landscapes. Uses heavy natural metaphors (stars, rivers, seas) to explore resilience, silence, and human consciousness.",
  },
];

const keywordsLine1 = [
  "Applied Economics",
  "Economic Governance",
  "Grassroots Microfinance",
  "Kudumbasree Systems",
  "Green Auditing",
  "Sustainable Development",
  "Environmental Policy",
  "Pricing Strategy",
];

const keywordsLine2 = [
  "Public Finance",
  "Union Budget Analysis",
  "Social & Solidarity Economy",
  "SSEOEs Case Studies",
  "Rural Development",
  "Interdisciplinary Studies",
  "Goods & Services Tax (GST)",
  "Resource Stewardship",
];

export function BlogSection() {
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
    <section id="blog" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden bg-background">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-20">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 lg:mb-24 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-primary font-semibold tracking-wider uppercase mb-6">
            <span className="w-8 h-px bg-primary/30" />
            Writings & Reflections
            <span className="w-8 h-px bg-primary/30" />
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-6">
            The Eco Desk
          </h2>
          <p className="text-xl text-muted-foreground">
            A digital canvas of literary prose, essays, and observations on society and nature.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {blogPosts.map((post, index) => (
            <div
              key={post.title}
              className={`group flex flex-col justify-between p-8 border border-foreground/10 bg-foreground/[0.01] hover:bg-foreground/[0.02] hover:border-primary/25 hover:shadow-md transition-all duration-500 rounded-xl ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="font-mono text-xs text-primary font-semibold uppercase bg-primary/5 px-2.5 py-1 rounded">
                    {post.date}
                  </span>
                  <PenTool className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-display font-medium text-foreground group-hover:text-primary transition-colors mb-4">
                  {post.title}
                </h3>
                
                {/* Poetic quote */}
                <div className="border-l-2 border-primary/25 pl-4 mb-6 italic text-sm text-muted-foreground/80 font-serif leading-relaxed">
                  "{post.excerpt}"
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                  {post.summary}
                </p>
              </div>

              <div className="pt-6 border-t border-foreground/5">
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group/link"
                >
                  Read full post on Blogger
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Scroll Marquees for Research Interests */}
      <div className="border-y border-foreground/10 py-12 bg-foreground/[0.01] pointer-events-none">
        <div className="w-full mb-6">
          <div className="flex gap-8 marquee">
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-8 shrink-0">
                {keywordsLine1.map((kw, i) => (
                  <div
                    key={`${kw}-${setIndex}-${i}`}
                    className="shrink-0 px-6 py-3 border border-foreground/10 bg-background text-sm font-mono tracking-wider uppercase rounded"
                  >
                    ✦ {kw}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        
        <div className="w-full">
          <div className="flex gap-8 marquee-reverse">
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-8 shrink-0">
                {keywordsLine2.map((kw, i) => (
                  <div
                    key={`${kw}-reverse-${setIndex}-${i}`}
                    className="shrink-0 px-6 py-3 border border-foreground/10 bg-background text-sm font-mono tracking-wider uppercase rounded"
                  >
                    ✦ {kw}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
