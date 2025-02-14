import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./ui/home/home.tsx";
import Header from "./ui/nav/nav.tsx";
import Contact from "./ui/contact/contact.tsx";
import Footer from "./ui/footer/footer.tsx";
import Resume from "./ui/resume/resume.tsx";
import About from "./ui/about/about.tsx"
import NotFound from "./ui/404/404.tsx";

function App() {
  return (
    <div id='container'>
      <Header
        navLinks={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Resume", href: "/my-creds" },
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>

      <Footer />
    </div>
  );
}

export default App;
