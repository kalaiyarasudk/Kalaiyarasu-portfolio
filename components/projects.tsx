import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
const prefix = process.env.NODE_ENV === 'production' ? '/p-5' : ''

export function Projects() {

  // updated to use publicRuntimeConfig for basePath
    // const basePath = publicRuntimeConfig.basePath;
  const projects = [
    
    {
      title: "E-Commerce Data Pipeline",
      description:
        "Built an end-to-end ETL pipeline to process 10K+ daily order and customer records stored in Amazon S3. Applied PySpark transformations and designed a star schema in Amazon Redshift for business reporting.",
      // image: "/aws-data-pipeline-architecture-diagram.jpg", 
      image: `${prefix}/aws-data-pipeline-architecture-diagram.jpg`, 

      technologies: ["Python", "PySpark", "AWS S3", "Amazon Redshift", "Parquet", "ETL"],
      liveUrl: "#",
      githubUrl: "https://github.com/kalaiyarasudk/AWS-Movie-Data-Engineering-Pipeline",
      featured: true,
    },
    {
      title: "Credit Card Fraud Risk Detection",
      description:
        "Implemented fraud risk detection system using PySpark with Delta Lake on Databricks. Processed 50K+ simulated transactions with anomaly detection rules and real-time monitoring dashboards.",
      image: "/fraud-detection-dashboard-with-charts-and-alerts.jpg",
      technologies: ["PySpark", "Delta Lake", "Databricks", "Python Faker", "SQL", "Anomaly Detection"],
      liveUrl: "#",
      githubUrl: "https://github.com/johndoe/fraud-detection",
      featured: true,
    },
    {
      title: "AWS Movie Data Engineering Pipeline",
      description:
        "Designed and deployed a serverless data pipeline to process raw movie data. Used Step Functions to orchestrate Glue jobs with real-time SNS alerts for monitoring.",
      image: "/aws-serverless-architecture-with-lambda-and-glue.jpg",
      technologies: ["AWS Lambda", "AWS Glue", "Step Functions", "SNS", "PySpark", "Serverless"],
      liveUrl: "#",
      githubUrl: "https://github.com/johndoe/movie-pipeline",
      featured: false,
    },
    {
      title: "Real-time Streaming Analytics",
      description:
        "Built a streaming data pipeline for processing real-time events using Apache Kafka and Spark Streaming with monitoring dashboards.",
      image: "/real-time-streaming-data-architecture.jpg",
      technologies: ["Apache Kafka", "Spark Streaming", "Python", "Docker"],
      liveUrl: "#",
      githubUrl: "https://github.com/johndoe/streaming-analytics",
      featured: false,
    },
    {
      title: "Data Lake Architecture",
      description:
        "Implemented a scalable data lake solution on AWS with automated data cataloging and governance using AWS Glue Data Catalog.",
      image: "/data-lake-architecture-diagram.jpg",
      technologies: ["AWS S3", "AWS Glue", "Data Catalog", "Parquet", "Athena"],
      liveUrl: "#",
      githubUrl: "https://github.com/johndoe/data-lake",
      featured: false,
    },
    {
      title: "SOX Compliance Dashboard",
      description:
        "Developed automated compliance reporting dashboard for SOX controls with data validation and audit trail capabilities.",
      image: "/compliance-dashboard-with-charts-and-reports.jpg",
      technologies: ["Python", "SQL", "Tableau", "Data Validation", "Audit Trail"],
      liveUrl: "#",
      githubUrl: "https://github.com/johndoe/sox-dashboard",
      featured: false,
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Data Engineering Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent data engineering projects showcasing ETL pipelines, cloud architecture, and big
            data processing capabilities.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-border overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                  <Badge variant="secondary">Featured</Badge>
                </div>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-foreground text-center">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-foreground">{project.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild className="flex-1 bg-transparent">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild className="flex-1 bg-transparent">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3 mr-1" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
