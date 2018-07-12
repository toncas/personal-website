import React from 'react';

const BlogListEntry = props => (
  <div className="item">
    <a className="ui small image">
      <img alt="" src="https://loremflickr.com/240/240/dog" />
    </a>
    <div className="content">
      <a className="header">{props.blog.title}</a>
      <div className="description">
        <p>{props.blog.blurb}</p>
        <p>Many people also have their own barometers for what makes a cute dog.</p>
      </div>
    </div>
  </div>
);

export default BlogListEntry;
