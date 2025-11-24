import { Card } from "@/components/ui/card";
import { GraduationCap, Trophy } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
          About Me
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Passionate about creating innovative solutions with IoT and embedded systems
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* About Card */}
          <Card className="glass p-8 hover-scale">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Introduction</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm an Electronics and Communication Engineering student with a
                  deep passion for IoT, embedded systems, and automation. I love
                  transforming ideas into functional prototypes using
                  microcontrollers, sensors, and wireless technologies.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  My goal is to design intelligent systems that solve real-world
                  problems efficiently and sustainably.
                </p>
              </div>
            </div>
          </Card>

          {/* Education Card */}
          <Card className="glass p-8 hover-scale" id="education">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-accent/10">
                <Trophy className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-3">Education</h3>
                <div className="space-y-2">
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <div>
                      <h4 className="font-semibold text-foreground">
                        B.E. in Electronics and Communication Engineering
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Jerusalem College of Engineering
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-accent">CGPA: 8.2/10</p>
                      <p className="text-sm text-muted-foreground">Expected 2026</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
