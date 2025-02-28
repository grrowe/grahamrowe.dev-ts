import "./resume.css";

import DownloadResume from "../components/downloadResume.tsx";

const Resume = () => {
  return (
    <div id="resumeContent">
      {/* <DownloadResume /> */}
      <div id="leftWrapper">
        <div className="title">
          <h1>Graham Rowe</h1>
          <h2 className="darkColor">Full Stack Software Engineer</h2>
        </div>

        <div className="workExp">
          <h2>Work</h2>

          <ul>
            <div>
              <h3 className="negTab">
                Aptible, Remote - Customer Reliability Engineer
              </h3>
              <li className="tab">
                <p>
                  Investigated and resolved over 30 customer-reported incidents
                  and tickets per week, utilizing logs, monitoring tools, and
                  debugging techniques to ensure system reliability
                </p>
              </li>
              <li className="tab">
                <p>
                  Developed custom scripts/tools as needed to automate routine
                  tasks, increasing overall team productivity and efficiency.
                </p>
              </li>
              <li className="tab">
                <p>
                  Collaborated with cross-functional teams to develop, test, and
                  deploy scalable software solutions.
                </p>
              </li>
              <li className="tab">
                <p>
                  Advocate for customers by providing feedback to product and
                  engineering teams to enhance the user experience.
                </p>
              </li>
              <li className="tab">
                <p>
                  Analyze trends in customer issues to proactively drive
                  improvements in system design and reliability.
                </p>
              </li>
              <div className="darkColor negTab">
                Auguest 2022 - November 2024
              </div>
            </div>

            <div>
              <h3 className="negTab">
                IVM, Inc. Indianapolis, IN. - Front End Software Engineer
              </h3>
              <li className="tab">
                <p>
                  Develop, test, and maintain scalable front-end applications
                  using{" "}
                  <a href="https://vuejs.org/" target="_blank">
                    Vue.js.
                  </a>
                </p>
              </li>
              <li className="tab">
                <p>
                  Provided ongoing support for maintenance tasks such as bug
                  fixes or feature updates to deliver a consistently
                  high-quality product.
                </p>
              </li>
              <li className="tab">
                <p>
                  Developed and maintained productivity tools that streamlined
                  internal processes, reducing manual workload by 40%
                </p>
              </li>
              <li className="tab">
                <p>
                  Write reusable and maintainable Vue.js components while
                  following best practices in component-based architecture.
                </p>
              </li>
              <div className="darkColor negTab">March 2022 - Auguest 2022</div>
            </div>

            <div>
              <h3 className="negTab">Irving Materials Inc. Greenfield, IN. - Full Stack Software Engineer</h3>

              <li className="tab">
                <p>
                  Created user-friendly applications to support employees in
                  improving efficiency and task management.
                </p>
              </li>
              <li className="tab">
                <p>
                  Developed secure, scalable software solutions by utilizing
                  industry best practices for coding and architecture.
                </p>
              </li>
              <li className="tab">
                <p>
                  Integrated third-party APIs to enhance overall application
                  functionality and improve user experience.
                </p>
              </li>
              <li className="tab">
                <p>
                  Collaborated with cross-functional teams to deliver
                  high-quality products on time and within budget constraints.
                </p>
              </li>

              <div className="darkColor">March 2020 - March 2022</div>
            </div>
          </ul>
        </div>

        <div className="education">
          <h2>Education</h2>
          <h3 className="tab">
            Indiana University Purdue University Indianapolis (IUPUI)
          </h3>
          <div className="darkColor tab">Auguest 2018 - May 2021</div>
        </div>
      </div>

      <div id="rightWrapper">
        <div className="contactInfo">
          <h3>Contact</h3>
          <div className="skillWrapper">
            <h4>Email: </h4>
            <a href="mailto:grahamrowedev@gmail.com">grahamrowedev@gmail.com</a>
          </div>
          <div className="skillWrapper">
            <h4>LinkedIn: </h4>
            <a href="https://www.linkedin.com/in/gmrowewebdev/" target="_blank">
              https://www.linkedin.com/in/gmrowewebdev/
            </a>
          </div>
          <div className="skillWrapper">
            <h4>Github: </h4>
            <a href="https://github.com/grrowe" target="_blank">
              https://github.com/grrowe
            </a>
          </div>
        </div>

        <div className="skills">
          <h3>Skills</h3>
          <ul className="skillsList">
            <li>Incident management and Log analysis</li>
            <li>API design and integration</li>
            <li>React.js and Vue.js</li>
            <li>Node.js</li>
            <li>Ruby on Rails</li>
            <li>Typescript</li>
            <li>Software Development Lifecycle</li>
            <li>SQL and PostreSQL</li>
            <li>Strong debugging skills</li>
            <li>RESTful API</li>
          </ul>

          <DownloadResume />
        </div>
      </div>
    </div>
  );
};

export default Resume;
