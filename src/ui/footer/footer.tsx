import React from "react";

import "./footer.css";
import { LinkedIn, Github, SourceCode } from "../components/footerSocials";

const Footer: React.FC<any> = ({}) => {
  return (
    <div id="footer">
      <div id="footerContent">
        <div>
          <LinkedIn
            link="https://www.linkedin.com/in/gmrowewebdev/"
            dark={false}
          />
          <Github link="https://github.com/grrowe" dark={false} />
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
            dark={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;