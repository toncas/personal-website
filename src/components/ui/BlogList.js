import React from 'react';
import BlogListEntry from './BlogListEntry';

const BlogList = props => (
  <div className="ui container items">
    {props.blogs.map(blog => <BlogListEntry blog={blog} />)}
  </div>
);

export default BlogList;
