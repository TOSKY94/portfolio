import { Project, projects } from '../datastore/projects';
import { ExternalLink } from 'lucide-react';

function Portfolio() {
  return (
    <section className="pt-24 py-20 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-slate-800 text-center">Portfolio</h2>
          <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project: Project) => (
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl text-white hover-scale">
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                <p className="text-slate-300 mb-6">{project.description}</p>
                <a href={project.link} target='_blanck' className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
                View Project <ExternalLink size={16} />
                </a>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;