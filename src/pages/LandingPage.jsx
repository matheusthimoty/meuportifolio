import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Stats from "../components/Stats/Stats";
import "../pages/Stars.css";

import starsBackground from "../assets/stars.png";

// Componente Typewriter
const Typewriter = () => {
  const texts = React.useMemo(
    () => ["Web Developer", "Web Designer", "UX/UI Designer"],
    []
  );

  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentText = texts[loopNum % texts.length];

    const handleType = () => {
      setText((prev) =>
        isDeleting ? prev.slice(0, -1) : currentText.slice(0, prev.length + 1)
      );

      setTypingSpeed(isDeleting ? 75 : 150);

      if (!isDeleting && text === currentText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, texts]);

  return (
    <h1 className="text-6xl font-bold mb-6 text-white">
      Hi, I'm Matheus{" "}
      <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
        {text}
      </span>
      <span className="ml-2 animate-blink">|</span>
    </h1>
  );
};

// Componente Scroll Down
const ScrollDown = () => (
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 14l-7 7m0 0l-7-7m7 7V3"
      />
    </svg>
  </div>
);

// Componente LandingPage
const LandingPage = () => (
  <div className="bg-black min-h-screen relative">
    <Header />
    <main>
      {/* Seção Hero */}
      <section id="hero" className="text-white py-60 relative overflow-hidden">
        {/* Background animado de estrelas */}
        <div
          className="absolute inset-0 stars bg-cover bg-center opacity-70"
          style={{
            backgroundImage: `url(${starsBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
          }}
        ></div>
        <div className="container mx-auto text-center relative z-10 px-4">
          {/* Componente Typewriter */}
          <Typewriter />
          {/* Parágrafo inspirador */}
          <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-300 leading-relaxed">
            Com uma paixão por transformar ideias em experiências digitais
            incríveis, eu crio soluções web que não apenas funcionam, mas também
            encantam. Cada linha de código é uma oportunidade para inovar, e
            cada projeto é uma chance de contar uma nova história. Vamos
            construir algo extraordinário juntos?
          </p>
          {/* Botão de Call-to-Action */}
          <a
            href="#skills" // Aponte para a seção de habilidades
            className="bg-gradient-to-r from-purple-700 to-pink-500 text-white px-8 py-4 rounded-lg hover:opacity-80 transition duration-300 text-lg font-semibold shadow-lg hover:shadow-purple-500/50 hover:scale-105 transform"
          >
            Comece Agora
          </a>
        </div>
        {/* Scroll Down */}
        <ScrollDown />
      </section>

      {/* Seções do portfólio */}
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Stats />
    </main>
    <Footer className="text-white" />
  </div>
);

export default LandingPage;
