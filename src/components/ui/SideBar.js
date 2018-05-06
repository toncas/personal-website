import React from 'react';

const SideBar = props => (
  <div className="ui vertical inverted sidebar menu">
    <a href="/" className={`item ${props.active === 'Home' ? 'active' : ''}`}>Home</a>
    <a href="/blog" className={`item ${props.active === 'Blog' ? 'active' : ''}`}>Blog</a>
    <a href="/" className={`item ${props.active === 'Investments' ? 'active' : ''}`}>Public Investments</a>
    <a href="/" className={`item ${props.active === 'About' ? 'active' : ''}`}>About Me</a>
  </div>
);

export default SideBar;
