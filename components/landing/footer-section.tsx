"use client";

import { ArrowUpRight } from "lucide-react";
import { AnimatedWave } from "./animated-wave";

const footerLinks = {
  Navigation: [
    { name: "About Me", href: "#about" },
    { name: "Research & Publications", href: "#publications" },
    { name: "Academic Projects", href: "#projects" },
    { name: "The Eco Desk Blog", href: "#blog" },
  ],
  Activities: [
    { name: "Workshops", href: "#activities" },
    { name: "Extracurriculars", href: "#activities" },
    { name: "Personal Interests", href: "#activities" },
  ],
  Contact: [
    { name: "Get in Touch", href: "#contact" },
    { name: "Email Swathy", href: "mailto:swathykrishna0507@gmail.com" },
  ],
};

const socialLinks = [
  { name: "Blogger Blog", href: "https://theecodesk.blogspot.com" },
  { name: "Email", href: "mailto:swathykrishna0507@gmail.com" },
];

export function FooterSection() {
  return (
    <footer className="relative border-t border-foreground/10 bg-background">
      {/* Animated wave background - Kept exactly as is */}
      <div className="absolute inset-0 h-64 opacity-20 pointer-events-none overflow-hidden">
        <AnimatedWave />
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="col-span-2">
              <a href="#" className="inline-flex items-center gap-2 mb-6">
                <span className="text-2xl font-display font-medium">Swathy Krishna S S</span>
              </a>

              <p className="text-muted-foreground leading-relaxed mb-8 max-w-xs text-sm">
                Applied Economics Scholar and Researcher. UGC NET Qualified in Economics. Specialized in public governance, micro-loans, and environmental auditing.
              </p>

              {/* Social Links */}
              <div className="flex gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            {/* Empty column for grid spacing */}
            <div className="hidden md:block" />

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-xs font-mono tracking-wider uppercase text-primary font-semibold mb-6">{title}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground font-mono text-xs">
            © 2026 Swathy Krishna S S. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Academic Portfolio Active
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
