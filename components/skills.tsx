import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Code2,
  Database,
  Cloud,
  Shield,
  Server,
  Zap,
  GitBranch,
  BarChart3,
  FileSpreadsheet,
  CheckCircle2,
} from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: [
        { name: "Python (Pandas, PySpark)", level: 90 },
        { name: "SQL (Oracle, PostgreSQL, Redshift)", level: 95 },
        { name: "Apache Spark", level: 85 },
        { name: "PySpark", level: 88 },
      ],
    },
    {
      title: "Big Data & Cloud",
      icon: Cloud,
      skills: [
        { name: "AWS (S3, Lambda, Glue)", level: 85 },
        { name: "Databricks", level: 82 },
        { name: "Delta Lake", level: 78 },
        { name: "Step Functions", level: 80 },
      ],
    },
    {
      title: "Data Quality & Governance",
      icon: Shield,
      skills: [
        { name: "Data Validation", level: 92 },
        { name: "SOX Controls", level: 95 },
        { name: "Data Reconciliation", level: 90 },
        { name: "Auditability", level: 88 },
      ],
    },
  ]

  const technologies = [
    { name: "Python", icon: Code2, desc: "Data processing & automation" },
    { name: "PySpark", icon: Zap, desc: "Big data processing" },
    { name: "Apache Spark", icon: Server, desc: "Distributed computing" },
    { name: "SQL", icon: Database, desc: "Data querying & analysis" },
    { name: "AWS S3", icon: Cloud, desc: "Object storage" },
    { name: "AWS Lambda", icon: Zap, desc: "Serverless functions" },
    { name: "AWS Glue", icon: Server, desc: "ETL service" },
    { name: "Step Functions", icon: GitBranch, desc: "Workflow orchestration" },
    { name: "Redshift", icon: Database, desc: "Data warehouse" },
    { name: "Databricks", icon: BarChart3, desc: "Analytics platform" },
    { name: "Delta Lake", icon: Database, desc: "Data lake storage" },
    { name: "SNS", icon: Zap, desc: "Messaging service" },
    { name: "CloudWatch", icon: BarChart3, desc: "Monitoring & logging" },
    { name: "Oracle Apps R12", icon: Database, desc: "Enterprise software" },
    { name: "PostgreSQL", icon: Database, desc: "Relational database" },
    { name: "Git", icon: GitBranch, desc: "Version control" },
    { name: "GitHub", icon: GitBranch, desc: "Code collaboration" },
    { name: "Pandas", icon: Code2, desc: "Data manipulation" },
    { name: "Data Validation", icon: CheckCircle2, desc: "Quality assurance" },
    { name: "SOX Controls", icon: Shield, desc: "Compliance framework" },
    { name: "Excel", icon: FileSpreadsheet, desc: "Data analysis" },
    { name: "Parquet", icon: Database, desc: "Columnar storage" },
    { name: "ETL Pipelines", icon: Server, desc: "Data transformation" },
    { name: "Data Quality", icon: CheckCircle2, desc: "Data integrity" },
  ]

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-header mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here's an overview of my data engineering skills and the technologies I work with regularly.
          </p>
        </div>

        {/* Skill Categories with Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card key={index} className="card-elevated border-border">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground flex items-center gap-2">
                    <IconComponent className="h-5 w-5 text-primary" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div
                          className="skill-bar h-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Technologies Badge Cloud */}
        <div className="text-center space-y-8">
          <h3 className="text-2xl font-bold text-foreground">Technologies I Work With</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon
              return (
                <div
                  key={index}
                  className="tech-card flex items-center gap-3 p-4 rounded-lg bg-card hover:bg-muted/50 transition-colors"
                >
                  <IconComponent className="tech-icon h-5 w-5 text-primary flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-medium text-foreground text-sm">{tech.name}</div>
                    <div className="text-xs text-muted-foreground">{tech.desc}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <Card className="card-elevated max-w-2xl mx-auto border-border">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Always Learning</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm constantly exploring new technologies and improving my data engineering skills. Currently, I'm
                diving deeper into advanced PySpark optimizations, real-time streaming with Kafka, and MLOps practices.
                I believe in continuous learning and staying up-to-date with the latest big data and cloud technologies.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
