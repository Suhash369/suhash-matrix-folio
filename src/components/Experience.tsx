import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Deep Sea Technology Intern",
    company: "NIOT (National Institute of Ocean Technology)",
    period: "2024",
    description:
      "Worked on advanced deep-sea technology projects, gaining hands-on experience with underwater communication systems and sensor integration.",
  },
  {
    title: "Network Engineering Intern",
    company: "BSNL",
    period: "2023",
    description:
      "Learned about network infrastructure, telecommunication protocols, and field operations in a real-world telecom environment.",
  },
  {
    title: "Embedded Systems Intern",
    company: "Lion Circuits",
    period: "2023",
    description:
      "Developed embedded solutions for industrial automation, working with microcontrollers, PCB design, and firmware development.",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
          Experience
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Practical industry experience in IoT and embedded systems
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-accent to-tertiary"></div>

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-8 ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Card */}
                <Card
                  className={`glass p-6 hover-scale flex-1 ${
                    idx % 2 === 0 ? "md:text-right" : ""
                  }`}
                >
                  <div className="flex items-start gap-3 mb-3">
                    {idx % 2 === 0 ? (
                      <>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-primary font-medium mb-1">
                            {exp.company}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {exp.period}
                          </p>
                        </div>
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Briefcase className="w-5 h-5 text-primary" />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Briefcase className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-primary font-medium mb-1">
                            {exp.company}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {exp.period}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </Card>

                {/* Spacer for timeline */}
                <div className="hidden md:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
