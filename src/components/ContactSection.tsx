import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient">Get in Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Interested in collaborating on enterprise solutions or discussing
            architecture? I'd love to hear from you.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="mailto:raghu@example.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5"
            >
              <Mail className="w-5 h-5" />
              Send Email
            </a>
            <a
              href="https://ca.linkedin.com/in/raghurampdev24"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-card hover:border-primary transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="https://github.com/raghurampuranam"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-card hover:border-primary transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>Available for remote opportunities </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
