import React from 'react';
import { List } from 'semantic-ui-react';

const BlogListEntry = props => (
  <List.Item>
    {props.blog}
  </List.Item>
);

export default BlogListEntry;
