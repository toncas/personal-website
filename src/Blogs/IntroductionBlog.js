import React from 'react';
import TopBar from '../components/ui/TopBar';
import SideBar from '../components/ui/SideBar';
import SocialBar from '../components/ui/SocialBar';
import Copyright from '../components/ui/Copyright';

const IntroductionBlog = props => (
  <div className="blog-entry">
    <div className="ui inverted vertical center aligned segment">
      <TopBar
        active="Blog"
        history={props.history}
      />
      <SideBar
        active="Blog"
        history={props.history}
      />
    </div>
    <h2 className="ui horizontal divider header">
      <i className="coffee icon" />
      Introduction
    </h2>
    <div className="ui container">
      <p>Well hello there!</p>
    </div>
    <div className="ui container center aligned segment">
      <SocialBar />
    </div>
    <Copyright year={new Date().getFullYear()} />
  </div>
);

export default IntroductionBlog;
