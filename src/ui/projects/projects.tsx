import "./projects.css";

const Projects = () => {
  return (
    <div>
      <h2>Projects</h2>
      <div className="thisWebsite project">
        <h3>Project Name: My Portfolio Site</h3>
        <div>
          <h4>Description:</h4>
          <p>
            An up-to-date portfolio website, detailing my resume, work, and
            myself. You can check out the{" "}
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
              source code
            </span>{" "}
            on the public Github repo.
          </p>
        </div>

        <div className="techStack feature">
          <h4>Tech Stack:</h4>
          <li>Frontend: Vite (React)</li>
          <li>Backend: Serverless</li>
          <li>Devops: AWS</li>
        </div>

        <div className="role feature">
          <h4>My Role:</h4>
          <li>I designed, engineered, and launched this portfolio site.</li>
        </div>
      </div>

      <div className="aptibleVite project">
        <h3>Project Name: Aptible's Dashboard</h3>
        <div>
          <h4>Description:</h4>
          <p>
            An updated version of Aptible's customer dashboard, written in a
            more understandable and modern language/framework
          </p>
        </div>

        <div className="techStack feature">
          <h4>Tech Stack:</h4>
          <li>Frontend: Vite (React)</li>
          <li>Backend: Ruby on Rails, PostgreSQL</li>
          <li>Devops: Aptible, AWS, Docker</li>
        </div>

        <div className="role feature">
          <h4>My Role:</h4>
          <li>
            I assisted migrating features from the legacy dashboard, added
            features, and implemented a support form for the customer success
            team.
          </li>
        </div>
      </div>

      <div className="aptibleEmberjs project">
        <h3>Project Name: Aptible's Customer Legacy Dashboard</h3>
        <div>
          <h4>Description:</h4>
          <p>Aptible's legacy customer dashboard</p>
        </div>

        <div className="techStack feature">
          <h4>Tech Stack:</h4>
          <li>Frontend: Ember.js</li>
          <li>Backend: Ruby on Rails, PostgreSQL</li>
          <li>Devops: Aptible, AWS, Docker</li>
        </div>

        <div>
          <h4>Challenges & Solutions:</h4>
          <p>
            Aptible's frontend dashboard was written in a older version of
            Ember.js, which was confusing and outdated. On top of this, the
            person who initally created the dashboard was no longer at the
            company. I took over making changes to this dashboard in addition to
            my duties as a CRE. I had to learn Ember.js quickly in order to be
            able to keep up with the changes that needed to be made.
          </p>
        </div>

        <div className="role feature">
          <h4>My Role:</h4>
          <li>
            I maintained and implemented changes to this legacy dashboard.
          </li>
        </div>
      </div>

      <div className="ivm project">
        <h3>
          Project Name: IVM Inc. dashboard, a customer and internal platform
        </h3>
        <div>
          <h4>Description:</h4>
          <p>
            A customer and internal dashboard where users were able to interact
            with their vending machines.
          </p>
        </div>
        <div className="keyFeatures feature">
          <h4>Key Features:</h4>
          <li>
            An inventory management appliction, for the vending machine assembly
            team to assist keeping track of parts
          </li>
        </div>

        <div className="techStack feature">
          <h4>Tech Stack:</h4>
          <li>Frontend: Vue.js, Vuex</li>
          <li>Backend: ASP.NET Core, MySQL</li>
          <li>Devops: Azure</li>
        </div>

        <div className="role feature">
          <h4>My Role:</h4>
          <li>
            I was the solo frontend developer on this project, I worked with the
            customer support team and the backend team to design and implement
            new features into the customer dashboard
          </li>
        </div>
      </div>

      <div className="imi project">
        <h3>
          Project Name: Irving Materials Inc. Internal Application Platform
        </h3>
        <div>
          <h4>Description:</h4>
          <p>Internal Applications platform</p>
        </div>
        <div className="keyFeatures feature">
          <h4>Key Features:</h4>
          <li>
            A concrete truck parts application. This assisted the maintenance
            team keep track of parts and order when necessary.
          </li>
          <li>
            A customer pricing application. This assisted the payable and
            receivable departments adjust pricing for customers who were
            eligible for discounts.
          </li>
        </div>

        <div className="techStack feature">
          <h4>Tech Stack:</h4>
          <li>Frontend: React, Redux</li>
          <li>Backend: Node.js, Express, MySQL</li>
          <li>Devops: AWS</li>
        </div>

        <div className="role feature">
          <h4>My Role:</h4>
          <li>
            I was part of a small development team, working on desiginng and implementing new
            applications for different departments across Irving Materials to
            help processes to work smoother.
          </li>
        </div>
      </div>
    </div>
  );
};

export default Projects;
