import React from "react";
import './nav.css'

interface HeaderProps {
  title?: string;
  subtitle?: string;
  navLinks: { label: string; href: string }[];
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, navLinks }) => {
  return (
    <header id='nav'>
      <div>
        {title && <h1>{title}</h1>}
        {subtitle && <p>{subtitle}</p>}
      </div>
      {navLinks && (
        <nav>
          <div id='navLinks'>
            {navLinks.map((link) => (
              <span>
                <a className='navLink' href={link.href}>{link.label}</a>
              </span>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
