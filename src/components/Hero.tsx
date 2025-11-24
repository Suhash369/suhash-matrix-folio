import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Linkedin, Mail, Github } from "lucide-react";

const techTags = [
  "IoT",
  "Embedded Systems",
  "Arduino",
  "STM32",
  "Raspberry Pi",
  "ESP32",
  "Wireless Sensors",
];

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 gradient-bg"
    >
      <div className="container mx-auto max-w-5xl text-center fade-in">
        {/* Location */}
        <div className="flex items-center justify-center gap-2 text-muted-foreground mb-6">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">Chennai, India</span>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text">
          Suhash M
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
          IoT & Embedded Systems Engineer
        </h2>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Building real-world solutions using IoT, sensors, automation, and
          embedded systems.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 glow-primary"
            asChild
          >
            <a href="#contact">
              <Mail className="w-4 h-4 mr-2" />
              Contact Me
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
            asChild
          >
            <a
              href="https://www.linkedin.com/in/suhash-mahadeva-891130375"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-tertiary text-tertiary hover:bg-tertiary/10"
            asChild
          >
            <a
              href="https://github.com/Suhash369"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </a>
          </Button>
        </div>

        {/* Tech Tags */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {techTags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="glass px-4 py-2 text-sm font-medium hover-scale"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};
