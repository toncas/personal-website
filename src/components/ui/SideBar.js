import React from 'react';

const SideBar = () => (
  <div className="ui vertical inverted sidebar menu">
    <a className="active item">Home</a>
    <a href="/blog" className="item">Blog</a>
    <a className="item not-active">Public Investments</a>
    <a href="/about" className="item not-active">About Me</a>
  </div>
);

export default SideBar;
