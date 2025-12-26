import { Code2, Database, Cloud, Users, Layers, GitBranch } from "lucide-react";

const expertiseItems = [
  {
    icon: Code2,
    title: "Enterprise Application Development",
    description: "Java & Spring Boot expertise for robust solutions",
  },
  {
    icon: Layers,
    title: "Microservices Architecture",
    description: "Scalable system design & distributed systems",
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Performance optimization & data modeling",
  },
  {
    icon: Cloud,
    title: "Cloud Platforms",
    description: "AWS, Azure, GCP deployment & management",
  },
  {
    icon: GitBranch,
    title: "DevOps & CI/CD",
    description: "Pipeline implementation & automation",
  },
  {
    icon: Users,
    title: "Team Leadership",
    description: "Mentoring & architectural discussions",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient">About Me</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm Raghuram Puranam — Building Scalable Enterprise Systems Since Day One.
            With over a decade of hands-on experience in enterprise software development,
            I've architected and delivered large-scale distributed systems that serve
            millions of transactions daily.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-muted-foreground leading-relaxed text-center">
            My journey spans full-stack development across Java, Python, C++, Node.js,
            and modern web frameworks. I'm passionate about system design, microservices
            architecture, and implementing best practices in code quality and DevOps.
            Beyond coding, I'm committed to mentoring junior developers and sharing
            knowledge through architectural discussions. When I'm not building systems,
            you'll find me exploring emerging technologies and contributing to open-source initiatives.
          </p>
        </div>

        <h3 className="text-xl font-semibold text-center mb-10">Key Expertise</h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseItems.map((item, index) => (
            <div
              key={item.title}
              className="group p-6 bg-card rounded-xl border border-border shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <item.icon className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
