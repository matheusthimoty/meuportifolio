import { FaReact, FaJs, FaCss3 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const skills = [
  { icon: FaReact, name: "React" },
  { icon: FaJs, name: "JavaScript" },
  { icon: FaCss3, name: "CSS" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container mx-auto text-center px-6">
        {/* Título da seção */}
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-12">
          Skills
        </h2>

        {/* Container das habilidades */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative p-8 bg-gray-900 rounded-xl border-2 border-transparent hover:border-purple-500 transition-all duration-300 transform hover:scale-105 overflow-hidden shadow-lg hover:shadow-xl"
            >
              {/* Efeito de brilho ao passar o mouse */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

              {/* Ícone da habilidade */}
              <div className="relative z-10">
                <skill.icon
                  className="text-purple-400 group-hover:text-pink-400 transition-colors duration-300 mx-auto transform group-hover:scale-125 ease-in-out"
                  size={64}
                />

                {/* Nome da habilidade */}
                <span className="mt-6 block text-white text-xl font-semibold opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
