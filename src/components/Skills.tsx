import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Cpu, Wrench, Network } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code2,
    color: "primary",
    skills: ["Python", "Embedded C", "C++", "MATLAB"],
  },
  {
    title: "IoT Platforms",
    icon: Network,
    color: "tertiary",
    skills: ["Thingspeak", "Blynk", "MQTT", "AWS IoT (Simulated)"],
  },
  {
    title: "Microcontrollers",
    icon: Cpu,
    color: "accent",
    skills: ["Arduino", "STM32", "Raspberry Pi", "ESP32"],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    color: "primary",
    skills: [
      "STM32CubeIDE",
      "KiCad",
      "Proteus",
      "GitHub",
      "GSM/GPRS",
      "LoRaWAN",
      "Wi-Fi",
      "Ethernet",
      "TCP/IP",
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
          Technical Skills
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Proficient in various technologies for building IoT and embedded solutions
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <Card key={idx} className="glass p-6 hover-scale">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`p-3 rounded-lg bg-${category.color}/10`}
                  >
                    <Icon className={`w-6 h-6 text-${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="glass px-3 py-1 text-sm"
                    >
                      {skill}
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
