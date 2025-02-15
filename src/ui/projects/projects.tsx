import './projects.css'

const Projects = () => {
    return <div>

        <div className='thisWebsite project'>
            <h4>
                Project Name: Graham's Portfolio Site
            </h4>
            <div>
                Description:
                <p>
                    An up-to-date portfolio website, detailing my resume, work, and myself. You can check out the source code on the public Github repo.
                </p>
            </div>

            <div>
                Tech Stack:
                Frontend: Vite (React)
                Backend: Serverless
                Devops: AWS
            </div>
        </div>

        <br />

        <div className='aptibleVite project'>
            <h4>
                Project Name: Aptible's Dashboard
            </h4>
            <div>
                Description:
                <p>
                    better words for this
                </p>
            </div>
            <div>
                Key Features:

            </div>

            <div>
                Tech Stack:
                Frontend: Vite (React)
                Backend: Ruby on Rails, PostgreSQL
                Devops: Aptible, AWS
            </div>
        </div>

        <br />

        <div className='aptibleEmberjs project'>
            <h4>
                Project Name: Aptible Customer Legacy Dashboard
            </h4>
            <div>
                Description:
                <p>
                    Took over the legacy dashboard... need better words here...
                </p>
            </div>
            <div>
                Key Features:

            </div>

            <div>
                Tech Stack:
                Frontend: Ember.js
                Backend: Ruby on Rails, PostgreSQL
                Devops: Aptible, AWS
            </div>

            <div>
                Challenges & Solutions:
                <p>
                    Aptible's frontend dashboard was written in a older version of Ember.js, which was confusing and outdated. On top of this,
                    the person who initally created the dashboard was no longer at the company. I took over making changes to this dashboard in addition to my duties as a CRE. I had to
                    learn Ember.js quickly in order to be able to keep up with the changes that needed to be made.
                </p>
            </div>
        </div>

        <br />

        <div className='ivm project'>
            <h4>
                Project Name: IVM Inc. customer dashboard
            </h4>
            <div>
                Description:
                <p>
                    Implement and maintain interactive, customer-facing apps with Vue.js, and Vuex focusing on reliability and user experience.
                </p>
            </div>
            <div>
                Key Features:
            </div>

            <div>
                Tech Stack:
                Frontend: Vue, Vuex
                Backend: ASP.NET Core, MySQL
                Devops: Azure
            </div>
        </div>

        <br />

        <div className='imi project'>
            <h4>
                Project Name: Irving Materials Inc. Internal Application Dashboard
            </h4>
            <div>
                Description:
                <p>
                    Engineered and deployed scalable internal applications utilized across the organization, enhancing cross-departmental functionality and streamlining workflows.
                </p>
            </div>
            <div>
                Key Features:
            </div>

            <div>
                Tech Stack:
                Frontend: React, Redux
                Backend: Node.js, Express, MySQL
                Devops: AWS
            </div>
        </div>
    </div>
}

export default Projects