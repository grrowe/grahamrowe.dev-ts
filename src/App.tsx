import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState, useEffect } from "react";

import "./App.css";

import Home from "./ui/home/home.tsx";
import Header from "./ui/nav/nav.tsx";
import Contact from "./ui/contact/contact.tsx";
import Footer from "./ui/footer/footer.tsx";
import Resume from "./ui/resume/resume.tsx";
import About from "./ui/about/about.tsx";
import NotFound from "./ui/404/404.tsx";
import Projects from "./ui/projects/projects.tsx";

function App() {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) return storedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div id="container">
      <Header
        toggleTheme={toggleTheme}
        theme={theme}
        navLinks={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: "Resume", href: "/my-creds" },
          { label: "About", href: "/about" },
          { label: "Contact", href: "/contact" },
        ]}
      />
      <div id="content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/my-creds" element={<Resume />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>

      <Footer theme={theme} />
    </div>
  );
}

export default App;
