"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, MapPin, Mail, Phone, Calendar, CheckCircle } from "lucide-react";
import { AnimatedTetrahedron } from "./animated-tetrahedron";

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    fetch("https://formsubmit.co/ajax/swathykrishna0507@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        subject: subject || "Portfolio Contact Form",
        message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setIsSubmitting(false);
        if (data.success === "false") {
          setErrors({ form: "Failed to send. Please try again." });
          return;
        }
        setIsSent(true);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setTimeout(() => setIsSent(false), 5000);
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        setIsSubmitting(false);
        setErrors({ form: "Network error. Please try again." });
      });
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden bg-background">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`relative border border-foreground/15 transition-all duration-1000 rounded-3xl bg-foreground/[0.005] overflow-hidden ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          onMouseMove={handleMouseMove}
        >
          {/* Spotlight effect */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(127,29,29,0.15), transparent 40%)`
            }}
          />
          
          <div className="relative z-10 px-8 lg:px-16 py-16 lg:py-24">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left content: Details & Contact form */}
              <div className="lg:col-span-8 flex flex-col md:flex-row gap-12">
                
                {/* Contact Information */}
                <div className="flex-1 space-y-8">
                  <div>
                    <span className="inline-flex items-center gap-3 text-sm font-mono text-primary font-semibold tracking-wider uppercase mb-4">
                      <span className="w-8 h-px bg-primary/30" />
                      Get In Touch
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-display tracking-tight text-foreground leading-[0.95] mb-6">
                      Let's Discuss
                      <br />
                      Research or Policy.
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Whether you have questions about my publications, interest in Kudumbasree governance systems research, or academic opportunities, feel free to reach out.
                    </p>
                  </div>

                  <div className="space-y-4 text-sm">
                    <div className="flex gap-4">
                      <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold block text-foreground">Address</span>
                        <span className="text-muted-foreground text-xs leading-normal">
                          Ambadi, Surabhi Nagar 96,
                          <br />
                          Pattathanam PO, Kollam, Kerala, 691021 India
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold block text-foreground">Email Address</span>
                        <a href="mailto:swathykrishna0507@gmail.com" className="text-primary hover:underline text-xs">
                          swathykrishna0507@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold block text-foreground">Cell Phone</span>
                        <a href="tel:+919746741972" className="text-muted-foreground hover:text-primary text-xs">
                          +91 9746741972
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Calendar className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold block text-foreground">Date of Birth</span>
                        <span className="text-muted-foreground text-xs">05.07.2000</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form Inputs */}
                <div className="flex-1 p-6 border border-foreground/10 bg-background rounded-2xl relative">
                  {isSent ? (
                    <div className="absolute inset-0 bg-background/95 flex flex-col items-center justify-center p-6 text-center rounded-2xl z-20">
                      <CheckCircle className="w-16 h-16 text-green-500 mb-4 animate-bounce" />
                      <h3 className="text-xl font-display font-medium text-foreground mb-2">Message Sent Successfully</h3>
                      <p className="text-sm text-muted-foreground">
                        Thank you for reaching out, Swathy will respond to your email as soon as possible.
                      </p>
                    </div>
                  ) : null}

                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="form-name" className="block text-xs font-mono tracking-wider uppercase text-muted-foreground mb-1.5 font-semibold">
                        Your Name
                      </label>
                      <input
                        id="form-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={`w-full px-4 py-2 text-sm border rounded bg-foreground/[0.01] focus:outline-none focus:ring-1 focus:ring-primary ${
                          errors.name ? "border-red-500" : "border-foreground/10"
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.name && <span className="text-[10px] text-red-500 mt-1 block">{errors.name}</span>}
                    </div>

                    <div>
                      <label htmlFor="form-email" className="block text-xs font-mono tracking-wider uppercase text-muted-foreground mb-1.5 font-semibold">
                        Email Address
                      </label>
                      <input
                        id="form-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`w-full px-4 py-2 text-sm border rounded bg-foreground/[0.01] focus:outline-none focus:ring-1 focus:ring-primary ${
                          errors.email ? "border-red-500" : "border-foreground/10"
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <span className="text-[10px] text-red-500 mt-1 block">{errors.email}</span>}
                    </div>

                    <div>
                      <label htmlFor="form-subject" className="block text-xs font-mono tracking-wider uppercase text-muted-foreground mb-1.5 font-semibold">
                        Subject (Optional)
                      </label>
                      <input
                        id="form-subject"
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full px-4 py-2 border border-foreground/10 rounded bg-foreground/[0.01] focus:outline-none focus:ring-1 focus:ring-primary text-sm"
                        placeholder="Research Inquiry"
                      />
                    </div>

                    <div>
                      <label htmlFor="form-message" className="block text-xs font-mono tracking-wider uppercase text-muted-foreground mb-1.5 font-semibold">
                        Your Message
                      </label>
                      <textarea
                        id="form-message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={4}
                        className={`w-full px-4 py-2 text-sm border rounded bg-foreground/[0.01] focus:outline-none focus:ring-1 focus:ring-primary ${
                          errors.message ? "border-red-500" : "border-foreground/10"
                        }`}
                        placeholder="Write your message here..."
                      />
                      {errors.message && <span className="text-[10px] text-red-500 mt-1 block">{errors.message}</span>}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/95 text-primary-foreground h-11 text-sm rounded-lg flex items-center justify-center gap-2 mt-2"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="w-3.5 h-3.5" />
                    </Button>
                    {errors.form && (
                      <p className="text-xs text-red-500 mt-2 text-center">{errors.form}</p>
                    )}
                  </form>
                </div>

              </div>

              {/* Right content: 3D Tetrahedron animation - Kept exactly as is */}
              <div className="hidden lg:col-span-4 lg:flex items-center justify-center w-[400px] h-[400px] -mr-8">
                <AnimatedTetrahedron />
              </div>

            </div>
          </div>

          {/* Decorative corners */}
          <div className="absolute top-0 right-0 w-32 h-32 border-b border-l border-foreground/10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-t border-r border-foreground/10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
