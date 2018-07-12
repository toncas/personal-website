import React from 'react';
import TopBar from '../ui/TopBar';
import SideBar from '../ui/SideBar';
import SocialBar from '../ui/SocialBar';
import Copyright from '../ui/Copyright';

import '../../styles/ContentStyles.css';

const About = props => (
  <div className="about">
    <div className="ui inverted masthead vertical segment">
      <TopBar
        active="About"
        history={props.history}
      />
      <SideBar
        active="About"
        history={props.history}
      />
      <article>
        <div className="ui inverted very padded segment">
          <div className="ui grid sizer inverted container segment">
            <h2 className="ui horizontal divider header">
              <i className="coffee icon" />
              Antonio Castro
            </h2>
            <div className="ten wide column">
              <p>
                I lived in <a rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Auckland" target="_blank">Auckland</a>
              </p>
              <p>
                I now live in California
              </p>
              <p>
                I sometimes write <a href="/blog">blogs</a>
              </p>
              <p>
                I always write <a rel="noopener noreferrer" href="https://github.com/toncas" target="_blank">code</a>
              </p>
              <p>Sometimes with a <a rel="noopener noreferrer" href="https://toncdiv.netlify.com/" target="_blank">team</a></p>
              <p>
                I have a dog. His name is <a rel="noopener noreferrer" href="https://www.instagram.com/p/BbVDfz5Fay9/" target="_blank">Whiskey</a>
              </p>
              <p>
                I love Philz Coffee
              </p>
              <p>
                I love NZ coffee even more
              </p>
              <p>
                I have a <a href="/resume">resumé</a>
              </p>
              <p>
                I currently work at <a rel="noopener noreferrer" href="http://eyeqxl.com" target="_blank">EyeQXL</a>
              </p>
            </div>
            <div className="six wide column">
              <img className="ui medium centered circular bordered image" alt="" src="https://i.imgur.com/tiNhMc0.jpg" />
            </div>
          </div>
        </div>
      </article>
    </div>
    <div className="ui container center aligned segment">
      <SocialBar />
    </div>
    <Copyright year={new Date().getFullYear()} />
  </div>
);

export default About;
