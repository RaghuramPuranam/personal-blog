const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "Python", "C++", "JavaScript", "TypeScript", "Node.js"],
  },
  {
    title: "Frameworks",
    skills: ["Spring Boot", "Angular", "React", "Express.js", "Hibernate"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Jenkins", "Git"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Oracle"],
  },
  {
    title: "Architecture",
    skills: ["Microservices", "REST APIs", "GraphQL", "Event-Driven", "SOLID"],
  },
  {
    title: "Tools & Practices",
    skills: ["Agile/Scrum", "TDD", "CI/CD", "Design Patterns", "System Design"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Technical Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built over 10+ years of enterprise software development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="p-6 rounded-xl bg-muted/30 border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="font-semibold text-lg text-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-card border border-border rounded-md text-foreground hover:border-primary hover:text-primary transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
