import "./footer.css";
import {
  LinkedIn,
  Github,
  SourceCode,
  Moon,
  Sun,
} from "../components/footerSocials";

interface FooterProps {
  theme?: string;
}

const Footer = ({ theme }: FooterProps) => {
  return (
    <div id="footer">
      <div id="footerContent">
        <div>
          <LinkedIn
            link="https://www.linkedin.com/in/gmrowewebdev/"
            dark={theme === "dark" ? true : false}
          />
          <Github
            link="https://github.com/grrowe"
            dark={theme === "dark" ? true : false}
          />
        </div>
        <div>
          <p className="footerText">
            Wanna check out the{" "}
            <span
              style={{ cursor: "pointer", textDecoration: "underline" }}
              onClick={() => {
                window &&
                  window
                    .open(
                      "https://github.com/grrowe/grahamrowe.dev-ts",
                      "_blank"
                    )!
                    .focus();
              }}
            >
              source code?
            </span>
          </p>
          <SourceCode
            link="https://github.com/grrowe/grahamrowe.dev-ts"
            dark={theme === "dark" ? true : false}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
