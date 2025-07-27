import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Calendar, MapPin } from "lucide-react"

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">Work Experience</h2>
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-slate-600" />
                <div>
                  <CardTitle className="text-xl text-slate-900">Software Engineering Intern</CardTitle>
                  <p className="text-lg font-medium text-slate-700">AI Core Solutions Pvt. Ltd.</p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2 text-slate-500 mb-1">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">May 2025 - July 2025</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Remote</span>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <p className="text-sm text-slate-600 mb-3">
                <strong>Technologies:</strong> Flask, MySQL
              </p>
            </div>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                <p>
                  Built and secured socket-based backend communication for real-time transcription updates and data
                  flow.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                <p>Contributed to frontend UI components to improve visual design and user experience.</p>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
