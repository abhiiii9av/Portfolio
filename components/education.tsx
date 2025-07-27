import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"

export function Education() {
  const education = [
    {
      institution: "Vellore Institute of Technology, Vellore",
      degree: "B.Tech in Computer Science",
      period: "July 2023 - July 2027",
      grade: "CGPA: 9.05",
      type: "University",
    },
    {
      institution: "Don Bosco Senior Secondary School Nerul",
      degree: "CBSE Class 12th",
      period: "March 2023",
      grade: "Percentage: 94.4%",
      type: "Higher Secondary",
    },
    {
      institution: "Don Bosco Senior Secondary School Nerul",
      degree: "CBSE Class 10th",
      period: "March 2021",
      grade: "Percentage: 94.0%",
      type: "Secondary",
    },
  ]

  return (
    <section id="education" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">Education</h2>
        <div className="grid gap-6 md:gap-8">
          {education.map((edu, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-6 h-6 text-slate-600" />
                    <div>
                      <CardTitle className="text-xl text-slate-900">{edu.institution}</CardTitle>
                      <p className="text-slate-600 font-medium">{edu.degree}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-slate-500 mb-1">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{edu.period}</span>
                    </div>
                    <p className="text-lg font-semibold text-green-600">{edu.grade}</p>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
