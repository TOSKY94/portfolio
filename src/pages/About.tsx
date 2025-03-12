import { FaGamepad, FaChessKing, FaPlane, FaUsers } from 'react-icons/fa';

function About() {
  const hobbies = [
    { icon: <FaGamepad className="w-6 h-6" />, label: "Video Games" },
    { icon: <FaChessKing className="w-6 h-6" />, label: "Chess" },
    { icon: <FaPlane className="w-6 h-6" />, label: "Travelling" },
    { icon: <FaUsers className="w-6 h-6" />, label: "Social Connections" }
  ];

  return (
    <section className="flex-grow bg-white pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto ">
        <h6 className="text-2xl font-semibold text-slate-800 mb-6">About</h6>
          <div className="bg-slate-50 p-8 rounded-xl shadow-sm hover-scale">
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Results-driven .NET Software Engineer with proven expertise in developing scalable cloud-native applications,
              microservices, and enterprise-level software solutions. Skilled in .NET Core, C#, and Azure, with hands-on
              experience implementing CI/CD pipelines, containerization, and Agile methodologies.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Adept at collaborating with cross-functional teams to deliver high-performance solutions, with a strong focus
              on system reliability, security, and optimization. Passionate about modern software engineering practices,
              including microservices architecture, Event-driven systems, test-driven development, and cloud infrastructure.
            </p>
          </div>
          <div className="border-t border-slate-200 pt-8">
              <h6 className="text-2xl font-semibold text-slate-800 mb-6">Hobbies & Interests</h6>
              <div className="flex flex-wrap items-center gap-6">
                {hobbies.map((hobby, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    <span className="text-blue-600">{hobby.icon}</span>
                    <span className="text-slate-700">{hobby.label}</span>
                  </div>
                ))}
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;