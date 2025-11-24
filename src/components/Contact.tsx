import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
          Get In Touch
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Feel free to reach out for collaborations, projects, or just a chat about IoT!
        </p>

        <Card className="glass p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">Chennai, India</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">suhashsugi369@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-primary text-primary hover:bg-primary/10"
                    asChild
                  >
                    <a
                      href="https://www.linkedin.com/in/suhash-mahadeva-891130375"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-tertiary text-tertiary hover:bg-tertiary/10"
                    asChild
                  >
                    <a
                      href="https://github.com/Suhash369"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-accent text-accent hover:bg-accent/10"
                    asChild
                  >
                    <a href="mailto:suhashsugi369@gmail.com">
                      <Mail className="w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col justify-center items-center text-center p-6 rounded-lg bg-gradient-to-br from-primary/10 via-accent/10 to-tertiary/10">
              <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing!</h3>
              <p className="text-muted-foreground mb-6">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 glow-primary"
                asChild
              >
                <a href="mailto:suhashsugi369@gmail.com">
                  Send Message
                </a>
              </Button>
            </div>
          </div>
        </Card>

        {/* Footer */}
        <div className="mt-12 text-center text-muted-foreground text-sm">
          <p>© 2025 Suhash M. All rights reserved.</p>
          <p className="mt-2">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};
