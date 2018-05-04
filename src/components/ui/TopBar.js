import React from 'react';

const TopBar = () => (
  <div className="ui container">
    <div className="ui large secondary inverted pointing menu">
      <a className="toc item">
        <i className="sidebar icon"></i>
      </a>
      <a className="active item">Home</a>
      <a className="item">Blog</a>
      <a className="item">Public Investments</a>
      <a className="item">About Me</a>
    </div>
  </div>
);

export default TopBar;
