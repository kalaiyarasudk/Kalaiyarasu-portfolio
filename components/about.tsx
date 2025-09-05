import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Database, Cloud, BarChart3, Shield, TrendingUp, Users } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: Database,
      title: "Data Pipeline Development",
      description:
        "Building scalable data pipelines using PySpark, SQL, and modern ETL frameworks for reliable data processing.",
    },
    {
      icon: Cloud,
      title: "Cloud Data Solutions",
      description:
        "Implementing cloud-based data architectures with Databricks, AWS, and other cloud platforms for enterprise-scale solutions.",
    },
    {
      icon: BarChart3,
      title: "Data Analytics & Insights",
      description:
        "Transforming raw data into meaningful insights that drive business value and informed decision-making.",
    },
    {
      icon: Shield,
      title: "Compliance & Risk Analysis",
      description:
        "Leveraging SOX compliance background to ensure data governance, security, and regulatory adherence.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            SOX Analyst transitioning into Data Engineering, passionate about building scalable data pipelines and
            cloud-based solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            {/* Career Transition Card */}
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">Career Journey</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm font-medium text-foreground">SOX Analyst</span>
                    <span className="text-sm text-muted-foreground">→ Compliance & Risk Expert</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm font-medium text-foreground">Data Engineer</span>
                    <span className="text-sm text-muted-foreground">→ Building Data Solutions</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Core Strengths */}
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">What I Bring</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Strong analytical thinking from compliance background</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Attention to detail and data governance expertise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Problem-solving mindset for complex data challenges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Focus on reliable, scalable data infrastructure</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Tech Focus */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Technology Focus</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">PySpark</Badge>
                <Badge variant="secondary">SQL</Badge>
                <Badge variant="secondary">Databricks</Badge>
                <Badge variant="secondary">Cloud Platforms</Badge>
                <Badge variant="secondary">ETL Pipelines</Badge>
                <Badge variant="secondary">Data Governance</Badge>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
