import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";

const projects = {
  tab1: [
    {
      image:
        "https://cdn.dribbble.com/userupload/18476599/file/original-ce242d0b7a3622c5914494c141e87ef9.png?resize=752x&vertical=center",
      githubLink: "https://github.com/projeto1",
    },
    {
      image:
        "https://cdn.dribbble.com/userupload/11347500/file/original-d48a7caecdf72ff6c806aaebd1aba81f.png?resize=752x&vertical=center",
      githubLink: "https://github.com/projeto2",
    },
    {
      image:
        "https://cdn.dribbble.com/userupload/4052051/file/original-6e955c1f8126eb74aa906d1ef1b06056.png?resize=752x&vertical=center",
      githubLink: "https://github.com/projeto3",
    },
    {
      image:
        "https://cdn.dribbble.com/userupload/16842910/file/original-3b2e73140c996b6ed963e6af672fb779.png?resize=752x&vertical=center",
      githubLink: "https://github.com/projeto4",
    },
    {
      image:
        "https://cdn.dribbble.com/userupload/7810563/file/original-ca8270d633b00a96db71a1fa68c04723.png?resize=752x&vertical=center",
      githubLink: "https://github.com/projeto5",
    },
    {
      image: "",
      githubLink: "",
    },
  ],
  tab2: [
    {
      image: "",
      githubLink: "",
    },
  ],
  tab3: [
    {
      image: "",
      githubLink: "",
    },
  ],
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
          Projetos
        </h2>

        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
          Aqui você pode ver alguns dos meus projetos mais recentes. Cada um
          representa um desafio único e uma oportunidade de aprendizado. Explore
          e veja como transformei ideias em realidade!
        </p>

        <div className="flex justify-center bg-gray-800 rounded-xl p-2 border-2 border-gray-700 max-w-[1000px] mx-auto relative overflow-hidden mb-8">
          {["tab1", "tab2", "tab3"].map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 px-8 py-4 transition-all duration-300 bg-transparent text-gray-300 font-medium text-center text-base relative z-10 rounded-lg ${
                activeTab === tab
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white -m-2"
                  : "hover:bg-gray-700 hover:rounded-lg hover:-m-2"
              }`}
            >
              {`Tab ${index + 1}`}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 max-w-[1400px] mx-auto px-4">
          {projects[activeTab].map((project, index) => (
            <div
              key={index}
              className={`relative p-4 rounded-[3rem] shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 overflow-hidden h-[350px] group ${
                project.image
                  ? "bg-gray-800"
                  : "bg-gradient-to-r from-purple-500/20 to-pink-500/20"
              }`}
            >
              {project.image ? (
                <>
                  <img
                    src={project.image}
                    alt={`Projeto ${index + 1}`}
                    className="w-full h-full object-cover rounded-[3rem] absolute top-0 left-0 z-10 transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden rounded-[3rem] z-20">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500/80 to-pink-500/80 transform -translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out rounded-[3rem]"></div>
                    <div className="relative z-30 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                      <h3 className="text-2xl font-bold text-white">
                        Business Startup
                      </h3>
                      <p className="text-lg text-white">Design & Development</p>
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-block animate-pulse hover:animate-none"
                        >
                          <FaGithub className="text-4xl text-white hover:text-purple-300 transition-colors duration-300" />
                        </a>
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center rounded-[3rem] z-20">
                  <h3 className="text-2xl font-bold text-white">
                    Working on a new project
                  </h3>
                  <p className="text-lg text-gray-300">Stay Tuned!</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
