import React from 'react';

const TopBar = props => (
  <div className="ui container">
    <div className="ui large secondary inverted pointing menu">
      <button className="toc item">
        <i className="sidebar icon" />
      </button>
      <button onClick={() => props.history.push('/')} className={`item ${props.active === 'Home' ? 'active' : ''}`}>Home</button>
      <button onClick={() => props.history.push('/blog')} className={`item ${props.active === 'Blog' ? 'active' : ''}`} >Blog</button>
      <button onClick={() => props.history.push('/')} className={`item ${props.active === 'Investments' ? 'active' : ''}`} >Public Investments</button>
      <button onClick={() => props.history.push('/about')} className={`item ${props.active === 'About' ? 'active' : ''}`} >About Me</button>
    </div>
  </div>
);

export default TopBar;
