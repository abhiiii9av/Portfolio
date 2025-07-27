import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database, Wrench } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["C++", "C", "Java", "Python", "JavaScript", "TypeScript", "HTML5", "CSS", "MySQL"],
    },
    {
      title: "Technologies & Frameworks",
      icon: Database,
      skills: ["MongoDB", "Express.js", "Node.js", "React.js", "Next.js", "Flask"],
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: ["Git", "GitHub", "Postman", "Beekeeper Studio", "CockroachDB"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">Skills & Technologies</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl text-slate-900">
                  <category.icon className="w-6 h-6 text-slate-600" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
