import React from 'react';
import TopBar from '../ui/TopBar';
import SideBar from '../ui/SideBar';
import SocialBar from '../ui/SocialBar';
import Copyright from '../ui/Copyright';

const Resume = props => (
  <div className="resume">
    <div className="ui inverted vertical masthead center aligned segment">
      <TopBar
        active=""
        history={props.history}
      />
      <SideBar
        active=""
        history={props.history}
      />
      <h1>Resumé goes here</h1>
    </div>
    <div className="ui container center aligned segment">
      <SocialBar />
    </div>
    <Copyright year={new Date().getFullYear()} />
  </div>
);

export default Resume;
