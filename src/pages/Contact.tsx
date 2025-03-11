import { Mail, Linkedin, Github, Phone } from 'lucide-react';

function Contact() {
  return (
    <section className="pt-24 py-20 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-slate-800 text-center">Get in Touch</h2>
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-slate-800 text-white rounded-lg">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Email</h3>
                    <a href="mailto:patrick.oguaju@yahoo.com" className="text-slate-600 hover:text-slate-800 transition-colors">
                      patrick.oguaju@yahoo.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-slate-800 text-white rounded-lg">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Phone</h3>
                    <p className="text-slate-600 hover:text-slate-800 transition-colors">+44 7879102492</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-slate-800 text-white rounded-lg">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">LinkedIn</h3>
                    <a href="https://linkedin.com/in/patrick-oguaju/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-800 transition-colors">
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-slate-800 text-white rounded-lg">
                    <Github size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">GitHub</h3>
                    <a href="https://github.com/TOSKY94" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-800 transition-colors">
                      View Projects
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-slate-800">Location</h3>
                <p className="text-slate-600">Leicestershire, United Kingdom</p>
                <p className="text-slate-600 mt-2">Available for remote opportunities worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;