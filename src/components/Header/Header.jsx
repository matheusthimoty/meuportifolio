import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";

// Constantes para URLs das redes sociais
const SOCIAL_LINKS = [
  {
    href: "https://www.linkedin.com/in/matheusthimoty/",
    icon: FaLinkedin,
    title: "LinkedIn",
  },
  {
    href: "https://github.com/matheusthimoty",
    icon: FaGithub,
    title: "GitHub",
  },
  {
    href: "https://www.instagram.com/matheusthimoty",
    icon: FaInstagram,
    title: "Instagram",
  },
];

// Constantes para os links de navegação
const NAV_LINKS = [
  { href: "#skills", text: "Skills" },
  { href: "#projects", text: "Projetos" },
  { href: "#about", text: "Sobre" },
  { href: "#contact", text: "Contato" },
];

// Componente para ícones de redes sociais
const SocialIcon = ({ href, icon: Icon, title }) => (
  <li>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-purple-500 transition duration-300 transform hover:scale-110"
      title={title}
      aria-label={title}
    >
      <Icon size={28} />
    </a>
  </li>
);

// Componente para o link do cabeçalho
const HeaderLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent hover:from-pink-500 hover:to-purple-500 transition-all duration-300"
  >
    {children}
  </Link>
);

// Componente para links de navegação
const NavLink = ({ href, text, isActive }) => {
  // Função para rolar suavemente até a seção
  const handleClick = (e) => {
    e.preventDefault(); // Previne o comportamento padrão do link
    const target = document.querySelector(href);
    target?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`text-lg font-medium transition duration-300 ${
        isActive ? "text-purple-500" : "text-white"
      } hover:text-purple-500`}
    >
      {text}
    </a>
  );
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Gerencia o estado do menu hambúrguer
  const [scrollingDown, setScrollingDown] = useState(false); // Para detectar rolagem
  const [lastScrollY, setLastScrollY] = useState(0); // Para comparar a posição da rolagem
  const [activeSection, setActiveSection] = useState(""); // Para marcar a seção ativa

  // Alterna o estado de aberto/fechado do menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Detectar o scroll para esconder/reaparecer o cabeçalho
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollingDown(true);
      } else {
        setScrollingDown(false);
      }
      setLastScrollY(window.scrollY);

      // Marcar a seção ativa com base na rolagem
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`bg-transparent/20 backdrop-blur-lg text-white p-6 fixed w-full top-0 z-50 shadow-md transition-all duration-300 ${
        scrollingDown ? "top-[-80px]" : "top-0"
      }`}
    >
      <nav
        className="container mx-auto flex justify-between items-center relative"
        role="navigation"
      >
        {/* Logo e Nome */}
        <HeaderLink to="/">Matheusthimoty</HeaderLink>

        {/* Menu Hambúrguer para telas pequenas */}
        <div className="lg:hidden flex items-center space-x-4">
          <button
            onClick={toggleMenu}
            className="text-white text-3xl focus:outline-none"
            aria-label="Menu"
          >
            <FaBars />
          </button>
        </div>

        {/* Links de Navegação para telas grandes */}
        <div className="hidden lg:flex space-x-6 items-center">
          {NAV_LINKS.map((link, index) => (
            <NavLink
              key={index}
              href={link.href}
              text={link.text}
              isActive={activeSection === link.href.slice(1)}
            />
          ))}
        </div>

        {/* Ícones de Redes Sociais para a barra de navegação em telas grandes */}
        <div className="hidden lg:flex space-x-6 items-center">
          <ul className="flex space-x-6 items-center">
            {SOCIAL_LINKS.map((link, index) => (
              <SocialIcon
                key={index}
                href={link.href}
                icon={link.icon}
                title={link.title}
              />
            ))}
          </ul>
        </div>
      </nav>

      {/* Menu Dropdown (Hamburguer) - Para dispositivos móveis */}
      <div
        className={`lg:hidden fixed top-0 right-0 w-2/3 h-full bg-black bg-opacity-90 transition-transform duration-300 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-6">
          <button onClick={toggleMenu} className="text-white text-3xl">
            <FaTimes />
          </button>
        </div>

        <div className="flex flex-col items-center space-y-6 mt-12">
          {NAV_LINKS.map((link, index) => (
            <NavLink
              key={index}
              href={link.href}
              text={link.text}
              isActive={activeSection === link.href.slice(1)}
            />
          ))}

          {/* Ícones de Redes Sociais para o menu hambúrguer (somente no submenu) */}
          <ul className="flex space-x-6 items-center mt-6">
            {SOCIAL_LINKS.map((link, index) => (
              <SocialIcon
                key={index}
                href={link.href}
                icon={link.icon}
                title={link.title}
              />
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
