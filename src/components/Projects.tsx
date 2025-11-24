import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Sprout, Home } from "lucide-react";

const projects = [
  {
    title: "Smart Vibration Analyzer",
    description:
      "IoT-based system for real-time vibration monitoring and analysis in industrial machinery. Detects anomalies and predicts maintenance needs using sensor fusion.",
    icon: Zap,
    tags: ["IoT", "STM32", "Sensors", "Analytics"],
    color: "primary",
  },
  {
    title: "Smart Agriculture Monitoring System",
    description:
      "Automated irrigation and crop monitoring solution using soil moisture sensors, weather data, and IoT connectivity for precision farming.",
    icon: Sprout,
    tags: ["IoT", "ESP32", "Sensors", "Agriculture"],
    color: "accent",
  },
  {
    title: "Smart Home Automation System",
    description:
      "Voice-controlled home automation with mobile app integration. Controls lighting, temperature, and security systems using IoT protocols.",
    icon: Home,
    tags: ["IoT", "Arduino", "Blynk", "Automation"],
    color: "tertiary",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
          Projects
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Real-world IoT and embedded systems projects
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <Card
                key={idx}
                className="glass p-6 hover-scale flex flex-col h-full"
              >
                <div className={`p-4 rounded-lg bg-${project.color}/10 w-fit mb-4`}>
                  <Icon className={`w-8 h-8 text-${project.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="glass px-2 py-1 text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
