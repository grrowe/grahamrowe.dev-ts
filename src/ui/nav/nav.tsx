import "./nav.css";

import { Moon, Sun } from "../components/footerSocials";

interface HeaderProps {
  title?: string;
  subtitle?: string;
  navLinks: { label: string; href: string }[];
  toggleTheme?: () => void;
  theme?: string;
}

const Header = ({
  title,
  subtitle,
  navLinks,
  toggleTheme,
  theme,
}: HeaderProps) => {
  return (
    <header id="nav">
      <div>
        {title && <h1>{title}</h1>}
        {subtitle && <p>{subtitle}</p>}
      </div>

      {navLinks && (
        <nav>
          <div id="navLinks">
            {navLinks.map((link) => (
              <span>
                <a className="navLink" href={link.href}>
                  {link.label}
                </a>
              </span>
            ))}
          </div>
          <br />
          <div className="darkModeButton">
            <button className="toggleDarkMode" onClick={toggleTheme}>
              {theme === "dark" ? (
                <Moon dark={theme !== "dark" ? true : false} />
              ) : (
                <Sun dark={theme !== "dark" ? true : false} />
              )}
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
