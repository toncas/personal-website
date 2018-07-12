import React from 'react';
import TopBar from '../ui/TopBar';
import SideBar from '../ui/SideBar';
import SocialBar from '../ui/SocialBar';
import Copyright from '../ui/Copyright';

import '../../styles/ResumeStyles.css';

const Resume = props => (
  <div className="resume">
    <div className="ui inverted vertical masthead aligned segment">
      <TopBar
        active=""
        history={props.history}
      />
      <SideBar
        active=""
        history={props.history}
      />
      <br />
      <div className="ui container vertical resume-content">
        <h1>Software Engineer</h1>
        <div className="technical-skills">
          <h3>Technical Skills</h3>
          <p className="no-margin"><strong>Front End:</strong> JavaScript (ES5/ES6), HTML5, CSS3, React, Redux, Backbone.js</p>
          <p className="no-margin"><strong>Back End:</strong> Node.js, Express, Passport.js, PostgreSQL, MongoDB, Mongoose, Knex.js, RESTful API Development, Socket.IO</p>
          <p className="no-margin"><strong>Testing/Development:</strong> Jest, Mocha, Chai.js, Travis CI</p>
          <p className="no-margin"><strong>Dev Tools:</strong> Git, npm, Babel, Webpack</p>
          <p className="no-margin"><em>Knowledgeable: </em> C++, Java, VHDL, ROS, TestNG, Altium, FPGA design</p>
        </div>
        <div className="section">
          <h3>Projects</h3>
          <div className="project">
            <p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/ddiv739/InkIndex/"
              >InkIndex
              </a> - <em>Bringing tattoo artists and consumers together</em> <span className="ad">(Active development)</span>
            </p>
          </div>
          <div className="project">
            <p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/JawaScriptLA/eventay"
              >Eventé
              </a> - <em>Event Scheduling made easy</em> <span className="ret">(Retired)</span>
            </p>
          </div>
          <div className="project">
            <p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/instagreen/"
              >codesling.io
              </a> - <em>Live coding challenge app</em> <span className="ret">(Retired)</span>
            </p>
          </div>
          <div className="project">
            <p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/instagreen/instagreen"
              >Instagreen
              </a> - <em>A photo sharing platform (Instagram clone)</em> <span className="ret">(Retired)</span>
            </p>
          </div>
          <div className="section">
            <h3>Work Experience</h3>
            <p className="no-margin">
              <strong>EyeQXL</strong> - <em>Software Engineer</em> (Current)
            </p>
            <p className="no-margin">
              <strong>Uber</strong> - <em>Software QA analyst</em> from Jan - Oct 2017
            </p>
            <p className="no-margin">
              <strong>Tru-Test Group</strong> - <em>Embedded Software Engineer (Internship)</em> from Nov 2015 - Feb 2016
            </p>
          </div>
          <div className="section">
            <h3>Education</h3>
            <p className="no-margin">The University of Auckland, B.E(Honors) Computer Systems Engineering</p>
            <p className="no-margin">Hack Reactor, Advanced Software Engineering Immersive</p>
          </div>
        </div>
        <p className="fat">
          <em>
            For a full resumé, you can email me at <a href="mailto:toncas@windowslive.com">toncas@windowslive.com</a>
          </em>
        </p>
      </div>
    </div>
    <div className="ui container center aligned segment">
      <SocialBar />
    </div>
    <Copyright year={new Date().getFullYear()} />
  </div>
);

export default Resume;
