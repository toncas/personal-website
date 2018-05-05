import React from 'react';

const TopBar = () => (
  <div className="ui container">
    <div className="ui large secondary inverted pointing menu">
      <a className="toc item">
        <i className="sidebar icon"></i>
      </a>
      <a className="active item">Home</a>
      <a className="item not-active" >Blog</a>
      <a className="item not-active" >Public Investments</a>
      <a className="item not-active" >About Me</a>
    </div>
  </div>
);

export default TopBar;
