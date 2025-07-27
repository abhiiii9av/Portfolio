import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Cryptic Hunt RSVP Website",
      description:
        "Developed a mobile-friendly RSVP website for Cryptic Hunt with event details and app downloads. Served as the central hub for participant engagement.",
      technologies: ["ReactJS"],
      link: "#", // Replace with actual website link
      type: "Website",
    },
    {
      title: "Cryptic Hunt App",
      description:
        "Contributed backend routes in Go for login and email whitelisting in a puzzle-solving mobile app, enhancing security and onboarding.",
      technologies: ["Golang"],
      link: "#", // Replace with actual Google Play Store link
      type: "Mobile App",
    },
    {
      title: "Reverse Coding Portal Website",
      description:
        "Built a platform for event registration and secure code challenge submissions with real-time leaderboard and RSVP support.",
      technologies: ["NextJS", "CockroachDB"],
      link: "#", // Replace with actual website link
      type: "Web Platform",
    },
    {
      title: "Organizing Committee Selection Portal",
      description:
        "Designed a desktop-like web portal for domain-specific committee selection with RSVP, form submissions, assessments, and smooth navigation.",
      technologies: ["NextJS"],
      link: "#", // Replace with actual website link
      type: "Web Portal",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl text-slate-900 mb-2">{project.title}</CardTitle>
                    <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-sm">{project.type}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Project
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
