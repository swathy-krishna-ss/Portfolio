"use client";

import { useEffect, useState, useRef } from "react";
import { Award, Users, Calendar, Briefcase } from "lucide-react";

const activities = [
  {
    category: "Leadership & Coordination",
    quote: "Coordinated and took part in the organizing committee of the Departmental Fest 'PRODIGY' organized by the Department of Economics, University of Kerala.",
    title: "Fest Organizer & Coordinator",
    detail: "PRODIGY Departmental Fest",
    metric: "Kerala University Economics Dept",
    icon: Users,
  },
  {
    category: "GST & Tax Policy Workshops",
    quote: "Participated in the International Seminar on India's Experiences with Goods and Services Tax (GST), organized by the Gulati Institute of Finance and Taxation (GIFT), Thiruvananthapuram.",
    title: "GST Policy Seminar Participant",
    detail: "Gulati Institute of Finance & Taxation",
    metric: "Tax Reform & Public Finance",
    icon: Calendar,
  },
  {
    category: "Budget & Career Seminars",
    quote: "Participated in the Seminar on Union Budget 2020-21 organized by the Dept of Economics with Malayala Manorama, and the Seminar on Personality Development and Career Guidance.",
    title: "Macro-Economic Seminar Participant",
    detail: "Malayala Manorama Joint Seminars",
    metric: "Budget Analysis & Development",
    icon: Briefcase,
  },
  {
    category: "Public Speaking & Extempore Awards",
    quote: "Secured Second Prize in English Extempore (2017-18) and consecutive Third Prizes in Malayalam Declamation (2016-17, 2017-18) at the Youth Festivals.",
    title: "Extempore & Declamation Laureate",
    detail: "District Youth Festival Competitions",
    metric: "Eloquence & Interpersonal Skills",
    icon: Award,
  },
];

const interests = [
  "Creative Writing",
  "Sketching & Drawing",
  "Culinary Arts",
  "Music Lover",
  "Avid Reading",
  "Travelling & Exploration",
];

export function ExtraSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % activities.length);
        setIsAnimating(false);
      }, 300);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const activeActivity = activities[activeIndex];
  const Icon = activeActivity.icon;

  return (
    <section
      id="activities"
      ref={sectionRef}
      className="relative py-24 lg:py-32 border-t border-foreground/10 lg:pb-14 bg-background overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-sm font-semibold tracking-wider text-primary uppercase">
            Workshops & Extracurriculars
          </span>
          <div className="flex-1 h-px bg-foreground/10" />
          <span className="font-mono text-xs text-muted-foreground">
            {String(activeIndex + 1).padStart(2, "0")} / {String(activities.length).padStart(2, "0")}
          </span>
        </div>

        {/* Main Slider Content */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 min-h-[350px]">
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div
              className={`transition-all duration-300 ${
                isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              <span className="font-mono text-xs font-semibold tracking-wider text-primary uppercase bg-primary/5 px-2.5 py-1 rounded inline-block mb-6">
                {activeActivity.category}
              </span>
              
              <blockquote className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.15] tracking-tight text-foreground">
                "{activeActivity.quote}"
              </blockquote>
            </div>

            {/* Role detail */}
            <div
              className={`mt-8 flex items-center gap-4 transition-all duration-300 delay-100 ${
                isAnimating ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="w-12 h-12 rounded-full bg-primary/5 border border-primary/15 flex items-center justify-center text-primary shrink-0">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-base font-semibold text-foreground">{activeActivity.title}</p>
                <p className="text-sm text-muted-foreground">
                  {activeActivity.detail}
                </p>
              </div>
            </div>
          </div>

          {/* Metric Highlight Card */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <div
              className={`p-8 border border-foreground/10 bg-foreground/[0.01] transition-all duration-300 rounded-xl ${
                isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
            >
              <span className="font-mono text-xs tracking-wider text-muted-foreground uppercase block mb-4">
                Core Context
              </span>
              <p className="font-display text-2xl text-primary font-medium">
                {activeActivity.metric}
              </p>
            </div>

            {/* Navigation Dots */}
            <div className="flex gap-2 mt-8">
              {activities.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setIsAnimating(true);
                    setTimeout(() => {
                      setActiveIndex(idx);
                      setIsAnimating(false);
                    }, 300);
                  }}
                  className={`h-2 transition-all duration-300 rounded-full ${
                    idx === activeIndex
                      ? "w-8 bg-primary"
                      : "w-2 bg-foreground/20 hover:bg-foreground/40"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Interests Marquee Header */}
        <div className="mt-24 pt-12 border-t border-foreground/10">
          <p className="font-mono text-xs tracking-wider text-muted-foreground uppercase mb-8 text-center font-semibold">
            Areas of Personal Interest
          </p>
        </div>
      </div>
      
      {/* Full-width marquee showing interests */}
      <div className="w-full border-t border-foreground/10 pt-8 bg-foreground/[0.005]">
        <div className="flex gap-16 items-center marquee">
          {[...Array(2)].map((_, setIdx) => (
            <div key={setIdx} className="flex gap-16 items-center shrink-0">
              {interests.map((interest, i) => (
                <span
                  key={`${setIdx}-${interest}-${i}`}
                  className="font-display text-2xl md:text-3xl text-foreground/20 whitespace-nowrap hover:text-primary transition-colors duration-300"
                >
                  ✦ {interest}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
