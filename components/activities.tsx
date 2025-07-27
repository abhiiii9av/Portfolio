import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Code } from "lucide-react"

export function Activities() {
  return (
    <section id="activities" className="py-20 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">Extra Curricular Activities</h2>
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl text-slate-900">
              <Users className="w-6 h-6 text-slate-600" />
              Frontend Developer, ACM VIT
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-slate-600">
              <p className="leading-relaxed">
                As an active member of the Association for Computing Machinery (ACM), I had the opportunity to immerse
                myself in a dynamic tech community where I worked with a diverse range of technology stacks.
              </p>
              <p className="leading-relaxed">
                This role allowed me to apply theoretical knowledge to practical projects, collaborate closely with
                peers on innovative solutions, and continuously refine my technical skills.
              </p>
              <div className="flex items-center gap-2 pt-2">
                <Code className="w-5 h-5 text-slate-500" />
                <span className="text-sm font-medium text-slate-700">
                  Frontend Development • Team Collaboration • Project Management
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
