import { Card } from "@/components/ui/card";
import { Award, Trophy, Users } from "lucide-react";

const achievements = [
  {
    title: "IIT PLAS INNOWHA Pre-Finalist",
    description: "Selected as pre-finalist in prestigious innovation challenge at IIT",
    icon: Trophy,
    color: "primary",
  },
  {
    title: "Smart India Hackathon Pre-Finalist",
    description: "Competed at national level hackathon with innovative IoT solution",
    icon: Award,
    color: "accent",
  },
  {
    title: "Vice President - Technovation Club",
    description: "Leading technical club activities and organizing tech events",
    icon: Users,
    color: "tertiary",
  },
];

const certifications = [
  "IoT Developer Certification",
  "Embedded Systems with C/C++",
  "AWS IoT Core (Simulated Environment)",
];

const languages = [
  { name: "English", level: "Fluent" },
  { name: "Tamil", level: "Native" },
  { name: "Kannada", level: "Conversational" },
];

export const Achievements = () => {
  return (
    <section id="achievements" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
          Achievements & More
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Recognition, certifications, and language proficiency
        </p>

        {/* Achievements */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {achievements.map((achievement, idx) => {
            const Icon = achievement.icon;
            return (
              <Card key={idx} className="glass p-6 hover-scale">
                <div className={`p-3 rounded-lg bg-${achievement.color}/10 w-fit mb-4`}>
                  <Icon className={`w-6 h-6 text-${achievement.color}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {achievement.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {achievement.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Certifications & Languages */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Certifications */}
          <Card className="glass p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Certifications
            </h3>
            <ul className="space-y-3">
              {certifications.map((cert, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span className="text-muted-foreground">{cert}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Languages */}
          <Card className="glass p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-accent" />
              Languages
            </h3>
            <ul className="space-y-3">
              {languages.map((lang, idx) => (
                <li key={idx} className="flex items-center justify-between">
                  <span className="text-muted-foreground">{lang.name}</span>
                  <span className="text-sm font-medium text-accent">
                    {lang.level}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};
