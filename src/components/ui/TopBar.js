import React from 'react';

const TopBar = props => (
  <div className="ui container">
    <div className="ui large secondary inverted pointing menu">
      <a className="toc item">
        <i className="sidebar icon"></i>
      </a>
      <a href="/" className={`item ${props.active === 'Home' ? 'active': ''}`}>Home</a>
      <a href="/blog" className={`item ${props.active === 'Blog' ? 'active': ''}`} >Blog</a>
      <a className={`item ${props.active === 'Investments' ? 'active': ''}`} >Public Investments</a>
      <a className={`item ${props.active === 'Home' ? 'About': ''}`} >About Me</a>
    </div>
  </div>
);

export default TopBar;
