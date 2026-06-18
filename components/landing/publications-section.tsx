"use client";

import { useEffect, useRef, useState } from "react";
import { BookOpen, Presentation, Calendar, Award } from "lucide-react";

const bookChapters = [
  {
    title: "Sustainability of Kerala Model of Development in Kerala",
    author: "Swathy Krishna S S",
    bookTitle: "Perspectives on Kerala Economy, Sustainable Development and Public Policy in the Post-Covid Recovery and Resilience",
    editor: "Dr. Binu Kumar B J",
    year: "2022",
    pages: "125-132",
    description: "An analytical study detailing the resilience and limitations of the widely recognized Kerala development model, proposing policy improvements for sustainable recovery post-pandemic.",
  },
  {
    title: "Indigenous People and SSEOEs: A Case Study of Snehapachcha in Pathanamthitta District",
    author: "Swathy Krishna S S and Gayatri Prem V",
    bookTitle: "Social and Solidarity Economy",
    editor: "Dr. Christabell P J",
    year: "2023",
    pages: "95-102",
    description: "A qualitative case study exploring the role of Social and Solidarity Economy Organizations (SSEOEs) in empowering indigenous communities, focusing on the Snehapachcha initiative.",
  },
];

const presentations = [
  {
    id: "pres-1",
    index: "01",
    shortTitle: "Union Budget Analysis",
    title: "Presentation on Union Budget in the Union Budget Analysis 2022-23",
    organizer: "Department of Economics, University of Kerala",
    scope: "University Level Analysis",
    year: "2022",
    description: "Conducted a detailed presentation parsing key sectors of the Indian Union Budget, examining allocations, fiscal deficits, policy shifts, and direct impact on regional growth rates.",
  },
  {
    id: "pres-2",
    index: "02",
    shortTitle: "Kerala Model Sustainability",
    title: "Sustainability of Kerala Model of Development in Kerala",
    organizer: "International Seminar, Department of Economics, Mahatma Gandhi College, Trivandrum",
    scope: "International Conference",
    year: "2022",
    description: "Presented research analyzing economic pillars, environmental sustainability, and demographic transitions of the 'Kerala Model,' addressing critical gaps in structural job opportunities and state revenues.",
  },
  {
    id: "pres-3",
    index: "03",
    shortTitle: "Indigenous People & SSEOEs",
    title: "Indigenous People and SSEOEs: A Case Study of Snehapachcha in Pathanamthitta District",
    organizer: "Third National Conference on Cooperatives, Mutual Aid and Solidarity Economies, Department of Economics, University of Kerala",
    scope: "National Conference",
    year: "2023",
    description: "Shared fieldwork findings regarding localized co-operative networks and mutual aid groups in Pathanamthitta district, detailing tribal resource mobilization and institutional frameworks.",
  },
  {
    id: "pres-4",
    index: "04",
    shortTitle: "Rural Development & Education",
    title: "Role of Education in India's Rural Development",
    organizer: "Three Day International Webinar on Unfurling Indian Economy: Growth, Transformation & Sustainability, Department of Economics, University of Kerala",
    scope: "International Webinar",
    year: "2023",
    description: "Addressed how human capital accumulation via rural educational networks serves as a multiplier for primary sector productivity, employment diversification, and poverty alleviation.",
  },
  {
    id: "pres-5",
    index: "05",
    shortTitle: "Interdisciplinary Studies",
    title: "Scope of Interdisciplinary Studies in the Modern World",
    organizer: "National Seminar, Research Union in association with IQAC, University of Kerala",
    scope: "National Seminar",
    year: "2023",
    description: "Delivered a paper advocating for bridging economics with environmental sciences, sociology, and data analysis to resolve complex systemic issues in modern research projects.",
  },
];

export function PublicationsSection() {
  const [activePres, setActivePres] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
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

  const handlePresSelect = (index: number) => {
    if (index === activePres) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActivePres(index);
      setIsAnimating(false);
    }, 250);
  };

  return (
    <section
      id="publications"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-primary text-primary-foreground overflow-hidden"
    >
      {/* Editorial grid texture overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 39px,
            currentColor 39px,
            currentColor 40px
          )`
        }} />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-primary-foreground/60 mb-6">
            <span className="w-8 h-px bg-primary-foreground/30" />
            Research & Publications
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Scholarly Contributions.
            <br />
            <span className="text-primary-foreground/50">Book chapters & paper presentations.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left Column: Book Chapters */}
          <div className="lg:col-span-6 space-y-10">
            <h3 className="text-2xl lg:text-3xl font-display font-medium border-b border-primary-foreground/20 pb-4 mb-6 flex items-center gap-3">
              <BookOpen className="w-6 h-6" /> Published Book Chapters
            </h3>

            <div className="space-y-8">
              {bookChapters.map((chapter) => (
                <div key={chapter.title} className="p-6 border border-primary-foreground/15 bg-primary-foreground/[0.02] hover:bg-primary-foreground/[0.05] transition-all rounded-lg">
                  <div className="flex justify-between items-center gap-2 mb-3">
                    <span className="font-mono text-xs font-semibold uppercase px-2 py-0.5 bg-primary-foreground/10 rounded">
                      Book Chapter
                    </span>
                    <span className="font-mono text-xs text-primary-foreground/60">
                      Pages: {chapter.pages}
                    </span>
                  </div>
                  <h4 className="text-xl font-display font-medium leading-tight mb-2">
                    "{chapter.title}"
                  </h4>
                  <p className="text-sm font-medium text-primary-foreground/70 mb-4 italic">
                    By {chapter.author} • Published in <span className="underline">{chapter.bookTitle}</span> ({chapter.year}), Ed. {chapter.editor}.
                  </p>
                  <p className="text-sm text-primary-foreground/80 leading-relaxed">
                    {chapter.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Paper Presentations Interactive Panel */}
          <div className="lg:col-span-6 space-y-8">
            <h3 className="text-2xl lg:text-3xl font-display font-medium border-b border-primary-foreground/20 pb-4 mb-6 flex items-center gap-3">
              <Presentation className="w-6 h-6" /> Paper Presentations
            </h3>

            <div className="grid sm:grid-cols-5 lg:grid-cols-1 gap-2">
              {/* Tabs selector */}
              <div className="flex flex-row lg:flex-col overflow-x-auto gap-2 pb-2 lg:pb-0 scrollbar-none border-b border-primary-foreground/10 lg:border-b-0">
                {presentations.map((pres, index) => (
                  <button
                    key={pres.id}
                    onClick={() => handlePresSelect(index)}
                    className={`text-left px-4 py-3 text-sm font-mono transition-all shrink-0 flex items-center gap-4 ${
                      activePres === index
                        ? "bg-primary-foreground text-primary rounded"
                        : "text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/5 rounded"
                    }`}
                  >
                    <span className="opacity-50 text-[10px]">{pres.index}</span>
                    <span className="font-sans font-medium text-sm">{pres.shortTitle}</span>
                  </button>
                ))}
              </div>

              {/* Display card */}
              <div className="mt-6 lg:mt-4">
                <div 
                  className={`border border-primary-foreground/10 bg-primary-foreground/[0.03] p-8 rounded-lg min-h-[300px] transition-all duration-300 ${
                    isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4 mb-4 border-b border-primary-foreground/10 pb-4">
                    <span className="font-mono text-xs text-primary-foreground/60 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" /> Presentation in {presentations[activePres].year}
                    </span>
                    <span className="font-mono text-xs bg-primary-foreground/10 text-primary-foreground px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      {presentations[activePres].scope}
                    </span>
                  </div>

                  <h4 className="text-2xl font-display font-medium mb-4 leading-snug">
                    "{presentations[activePres].title}"
                  </h4>

                  <div className="space-y-4 mb-6 text-sm">
                    <div>
                      <span className="font-mono text-xs text-primary-foreground/50 block">CONFERENCE / WEBINAR ORGANIZER:</span>
                      <span className="font-medium text-primary-foreground/90">{presentations[activePres].organizer}</span>
                    </div>
                  </div>

                  <div>
                    <span className="font-mono text-xs text-primary-foreground/50 block mb-1">RESEARCH SCOPE & SUMMARY:</span>
                    <p className="text-sm text-primary-foreground/85 leading-relaxed">
                      {presentations[activePres].description}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
