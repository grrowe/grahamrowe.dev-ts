import React from "react";

import "./footer.css";
import { LinkedIn, Github, SourceCode } from "../components/footerSocials";
import DownloadResume from "../components/downloadResume";

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
          <p>
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

/*
In footer:
- wanna check the source code: Github link

- link to socials, linkedin, etc.

- my email and where I am working from

*/
