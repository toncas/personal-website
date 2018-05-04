import React from 'react';

const SideBar = () => (
  <div className="ui vertical inverted sidebar menu">
    <a className="active item">Home</a>
    <a className="item">Blog</a>
    <a className="item">Public Investments</a>
    <a href="/about" className="item">About Me</a>
  </div>
);

export default SideBar;
