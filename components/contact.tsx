import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react"

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "abhisingh2344s@gmail.com",
      href: "mailto:abhisingh2344s@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8928682596",
      href: "tel:8928682596",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/abhinav-singh-405a932b6/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View my code",
      href: "https://github.com/abhiiii9av",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">Get In Touch</h2>
        <div className="text-center mb-12">
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about
            technology. Feel free to reach out through any of the channels below!
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {contactInfo.map((contact, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-slate-100 rounded-full">
                    <contact.icon className="w-6 h-6 text-slate-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900 mb-1">{contact.label}</h3>
                    <p className="text-slate-600">{contact.value}</p>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href={contact.href} target="_blank" rel="noopener noreferrer">
                      Connect
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <div className="flex items-center justify-center gap-2 text-slate-500 mb-4">
            <MapPin className="w-4 h-4" />
            <span>Based in India • Open to Remote Work</span>
          </div>
          <Button size="lg" className="bg-slate-900 hover:bg-slate-800">
            <Mail className="w-5 h-5 mr-2" />
            Let's Work Together
          </Button>
        </div>
      </div>
    </section>
  )
}
