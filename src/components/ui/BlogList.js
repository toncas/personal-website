import React from 'react';
import { List } from 'semantic-ui-react';
import BlogListEntry from './BlogListEntry';

const BlogList = props => (
  <List>
    {props.blogs.map(blog => <BlogListEntry blog={blog} />)}
  </List>
);

export default BlogList;
