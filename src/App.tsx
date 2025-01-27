import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./ui/home/home.tsx";
import Header from "./ui/nav/nav.tsx";
import Contact from "./ui/contact/contact.tsx";

function App() {
  return (
    <>
      <Header
        navLinks={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Contact", href: "/contact" },
        ]}
      />
      <div id='content'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/about" element={<About />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
