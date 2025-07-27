import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Education } from "@/components/education"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Activities } from "@/components/activities"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Activities />
      <Contact />
    </main>
  )
}
