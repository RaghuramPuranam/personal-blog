import developerIllustration from "@/assets/developer-illustration.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 md:pt-0"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <div
              className="animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2">
                <span className="text-gradient">Raghuram</span>
                <br />
                <span className="text-gradient">Puranam</span>
              </h1>
            </div>

            <div
              className="animate-fade-up opacity-0"
              style={{ animationDelay: "0.2s" }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mt-4 mb-6">
                Architecting Tomorrow's
                <br />
                Enterprise Solutions | 10+
                <br />
                Years of Full-Stack Excellence
              </h2>
            </div>

            <div
              className="animate-fade-up opacity-0"
              style={{ animationDelay: "0.3s" }}
            >
              <p className="text-muted-foreground text-lg max-w-xl mb-8">
                Seasoned Full-Stack Software Engineer with 10+ years of
                expertise in designing and building scalable enterprise
                applications. Passionate about clean code, modern architecture,
                and delivering high-quality solutions that drive business
                impact.
              </p>
            </div>

            <div
              className="animate-fade-up opacity-0 flex flex-wrap gap-4"
              style={{ animationDelay: "0.4s" }}
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5"
              >
                Get in Touch
              </a>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-muted transition-all duration-300"
              >
                Learn More
              </a>
            </div>

            {/* Tech Stack Pills */}
            <div
              className="animate-fade-up opacity-0 mt-10"
              style={{ animationDelay: "0.5s" }}
            >
              <p className="text-sm text-muted-foreground mb-3">
                Specialized in:
              </p>
              <div className="flex flex-wrap gap-2">
                {["Java", "Spring Boot", "Angular", "React", "AWS", "Azure", "GCP"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm font-medium bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div
            className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-up opacity-0"
            style={{ animationDelay: "0.3s" }}
          >
            <img
              src={developerIllustration}
              alt="Developer working at multi-monitor setup"
              className="w-full max-w-md lg:max-w-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
