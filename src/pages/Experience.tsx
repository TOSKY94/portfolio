import {  experiences } from '../datastore/experiences';

function ExperiencePage() {
  return (
    <section className="pt-16 min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in-up">
          Career Experience
        </h2>

        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={exp.company}
              className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row items-start gap-6">
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="w-20 h-20 object-contain bg-white rounded-lg p-2"
                />
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row justify-between">
                    <div>
                      <h3 className="text-2xl font-bold">{exp.company}</h3>
                      <p className="text-slate-300">{exp.location}</p>
                    </div>
                    <div className="mt-2 md:mt-0 md:text-right">
                      <p className="text-blue-300 font-medium">{exp.role}</p>
                      <p className="text-slate-400 text-sm">{exp.duration}</p>
                    </div>
                  </div>

                  <p className="mt-4 text-slate-300 italic">
                    {exp.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li 
                        key={i}
                        className="flex items-start before:content-['▹'] before:text-blue-400 before:mr-2"
                      >
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperiencePage;