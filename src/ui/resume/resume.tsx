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
                  Serve as a technical support to ensure customer success and
                  satisfaction by identifying and resolving issues related to
                  product performance and reliability
                </p>
              </li>
              <li className="tab">
                <p>
                  Designed, implemented, and optimized full-stack applications (
                  <a href="https://vite.dev/" target="_blank">
                    Vite
                  </a>
                  ,{" "}
                  <a href="https://emberjs.com/" target="_blank">
                    Ember.js
                  </a>
                  , and{" "}
                  <a href="https://www.ruby-lang.org/en/" target="_blank">
                    Ruby
                  </a>
                  ), ensuring robust functionality and seamless user
                  experiences.
                </p>
              </li>
              <div className="darkColor negTab">
                Auguest 2022 - November 2024
              </div>
            </div>

            <div>
              <h3 className="negTab">
                IVM, Inc. Indianapolis, IN. - Frontend Software Engineer
              </h3>
              <li className="tab">
                <p>
                  Implement and maintain interactive, customer-facing apps with{" "}
                  <a href="https://vuejs.org/" target="_blank">
                    Vue.js
                  </a>
                  , and{" "}
                  <a href="https://vuex.vuejs.org/" target="_blank">
                    Vuex
                  </a>{" "}
                  focusing on reliability and user experience.
                </p>
              </li>
              <div className="darkColor negTab">March 2022 - Auguest 2022</div>
            </div>

            <div>
              <h3 className="negTab">Irving Materials Inc. Greenfield, IN.</h3>

              <li className="tab">
                <p>
                  Engineered and deployed scalable internal applications
                  utilized across the organization, enhancing cross-departmental
                  functionality and streamlining workflows by leveraging{" "}
                  <a href="https://react.dev/" target="_blank">
                    React
                  </a>
                  ,{" "}
                  <a href="https://redux.js.org/" target="_blank">
                    Redux
                  </a>
                  ,{" "}
                  <a href="https://nodejs.org/en" target="_blank">
                    Node JS
                  </a>
                  , and{" "}
                  <a
                    href="https://aws.amazon.com/"
                    target="_
                  // blank"
                  >
                    AWS
                  </a>
                  .
                </p>
              </li>

              <h4 className="noMarginTop">Solutions Developer</h4>
              <div className="darkColor">May 2021 - March 2022</div>
              <h4 className="noMarginTop">Solutions Development Intern</h4>
              <div className="darkColor">March 2020 - May 2021</div>
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
            <li>
              Javascript (ES6, ReactJS + Redux, jQuery, Vue.JS, Angular, Node
              JS, Express.js, Ember.js)
            </li>
            <li>Databases (SQL, PostgresSQL, NoSQL DBs, MongoDB, Oracle)</li>
            <li>AWS and Azure for cloud computing platforms</li>
            <li>Web Design (SCSS, Animation, D3.js, Figma, Adobe XD)</li>
            <li>Version control (git)</li>
            <li>Package Management (yarn, npm)</li>
          </ul>

          <DownloadResume />
        </div>
      </div>
    </div>
  );
};

export default Resume;
