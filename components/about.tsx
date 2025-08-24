const skills = [
  { name: "JavaScript", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "React", level: 95 },
  { name: "Next.js", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "Python", level: 80 },
  { name: "UI/UX Design", level: 85 },
  { name: "Database Design", level: 80 },
]

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a love for creating innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8">
              <img src="/developer-workspace.png" alt="About me" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>

          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Hi there! I'm a Full-Stack Developer</h3>
              <p className="text-muted-foreground mb-4">
                With over 5 years of experience in web development, I specialize in creating modern, responsive, and
                user-friendly applications. I'm passionate about clean code, innovative solutions, and continuous
                learning.
              </p>
              <p className="text-muted-foreground mb-6">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing knowledge with the developer community.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-foreground mb-6">Skills & Technologies</h4>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
