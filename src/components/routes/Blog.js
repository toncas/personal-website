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
  </div>
);

export default Blog;
