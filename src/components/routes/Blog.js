import React from 'react';
import TopBar from '../ui/TopBar';
import SideBar from '../ui/SideBar';

const Blog = props => (
  <div className="blog">
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
    <div className="ui container center">
      <h1>The Blog</h1>
      <p className="massive">Hey! Thanks for stopping by. Below is a list of all the blogs I have written so far. The newest blogs are on top.</p>
    </div>
  </div>
);

export default Blog;
