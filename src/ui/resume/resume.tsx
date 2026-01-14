import "./resume.css";

import DownloadResume from "../components/downloadResume.tsx";

const Resume = () => {
  return (
    <div id="resumeContent">
      {/* <DownloadResume /> */}
      <div id="leftWrapper">
        <div className="title">
          <h1>Graham Rowe</h1>
          <h2 className="darkColor">Senior Software Engineer</h2>
        </div>

        <div className="workExp">
          <h2>Work</h2>

          <ul>
<div>
  {/* Company Header */}
  <h3 className="negTab">
    Remodel Health · Indianapolis, IN (Hybrid)
  </h3>

  {/* Senior Role */}
  <h4 className="tab">
    Senior Software Engineer
  </h4>

  <li className="tab">
    <p>
      Developing and integrating third-party HR platforms into the company’s
      existing product to support benefits, payroll, and employee data
      workflows.
    </p>
  </li>
  <li className="tab">
    <p>
      Building and maintaining APIs and backend services to enable reliable,
      secure data exchange between internal systems and external HR providers.
    </p>
  </li>
  <li className="tab">
    <p>
      Implementing full-stack features from database schema design through
      frontend interfaces using modern JavaScript and TypeScript frameworks.
    </p>
  </li>
  <li className="tab">
    <p>
      Collaborating with product, design, and engineering teammates to translate
      business requirements into production-ready integrations.
    </p>
  </li>

  <div className="darkColor tab">January 2026 – Present</div>

  {/* Previous Role */}
  <h4 className="tab" style={{ marginTop: "0.5rem" }}>
    Full Stack Engineer
  </h4>

  <li className="tab">
    <p>
      Contributed to development of core application features and HR-related
      integrations within a production SaaS environment.
    </p>
  </li>
  <li className="tab">
    <p>
      Implemented RESTful APIs and data models to support third-party platform
      connections and internal workflows.
    </p>
  </li>
  <li className="tab">
    <p>
      Worked closely with team members to test, debug, and maintain integrations
      across multiple environments.
    </p>
  </li>

  <div className="darkColor tab">June 2025 – January 2026</div>
</div>
            
            <div>
              <h3 className="negTab">
                Aptible, Remote - Customer Reliability Engineer
              </h3>
              <li className="tab">
                <p>
                  Analyzed and resolved over 120 customer-reported incidents
                  weekly, employing advanced monitoring tools and debugging
                  techniques to enhance system reliability, achieving a 98%
                  satisfaction rate among users
                </p>
              </li>
              <li className="tab">
                <p>
                  Developed custom internal tools to automate routine tasks,
                  increasing overall team productivity and efficiency, using
                  React.js, Rails, and Postgres.
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
                August 2022 - November 2024
              </div>
            </div>

            <div>
              <h3 className="negTab">
                IVM, Inc. Indianapolis, IN. - Front End Software Engineer
              </h3>
              <li className="tab">
                <p>
                  Spearheaded the development of a cutting-edge front-end
                  application using Vue.js, achieving a 40% reduction in load
                  time and enhancing user engagement metrics by 35%.
                </p>
              </li>
              <li className="tab">
                <p>
                  Optimized and maintained the scalability of multiple front-end
                  applications and supported an increase in user concurrency
                  from 5,000 to 10,000 daily active users.
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
              <div className="darkColor negTab">March 2022 - August 2022</div>
            </div>

            <div>
              <h3 className="negTab">
                Irving Materials Inc. Greenfield, IN. - Full Stack Software
                Engineer
              </h3>

              <li className="tab">
                <p>
                  Created user-friendly applications to support employees in
                  improving efficiency and task management utilizing the SERN
                  stack. (SQL, Express, React.js and Node.js)
                </p>
              </li>
              <li className="tab">
                <p>
                  Developed secure, scalable software solutions by utilizing
                  industry best practices for coding and architecture, SERN
                  stack.
                </p>
              </li>
              <li className="tab">
                <p>
                  Integrated third-party APIs to enhance overall application
                  functionality and improve user experience. Integrations using
                  REST and GraphQL
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
          <div className="darkColor tab">August 2018 - May 2021</div>
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
