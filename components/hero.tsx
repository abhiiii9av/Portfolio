import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone, Download } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-4">Abhinav Singh</h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-6">Full Stack Developer & Computer Science Student</p>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Passionate about building innovative web applications and solving complex problems. Currently pursuing
            B.Tech in Computer Science at VIT Vellore with a CGPA of 9.05.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button variant="outline" size="lg" asChild>
            <a href="mailto:abhisingh2344s@gmail.com" className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Email
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="tel:8928682596" className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Call
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://www.linkedin.com/in/abhinav-singh-405a932b6/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://github.com/abhiiii9av"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </Button>
        </div>

        <Button size="lg" className="bg-slate-900 hover:bg-slate-800">
          <Download className="w-5 h-5 mr-2" />
          Download Resume
        </Button>
      </div>
    </section>
  )
}
