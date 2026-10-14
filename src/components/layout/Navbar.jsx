import { useState, useEffect } from "react";
import "./navbar.css";
import { useTheme } from "../../hooks/useTheme";

const links = [
  { id: "home", label : "home"},
  { id: "about", label : "about"},
  { id: "skills", label : "skills"},
  { id: "experience", label : "experience"},
  { id: "projects", label : "projects"},
  { id: "contact", label : "contact"}
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const [theme, toggleTheme] = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    links.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    })

    return () => observer.disconnect();
  }, []);


  useEffect(() => {
    function handleEscapeKeydown(e) {
      if (e.key === "Escape") setIsOpen(false)
    }

    document.addEventListener("keydown", handleEscapeKeydown);

    return () => document.removeEventListener("keydown", handleEscapeKeydown);
  }, []);

  return (
    <header>
      <nav className={isOpen ? "open" : ""}>
        {links.map((link) => (
          <a 
            key={link.id} 
            href={`#${link.id}`}
            className={link.id === activeId ? "active" : ""}
            onClick={() => setIsOpen(false)}
          >
            {`// ${link.label}`}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <button 
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? "☀" : "☾" }
        </button>
        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>
    </header>
  )
}

export default Navbar