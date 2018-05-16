import React from 'react';
import TopBar from '../ui/TopBar';
import SideBar from '../ui/SideBar';
import SocialBar from '../ui/SocialBar';
import Copyright from '../ui/Copyright';
import BlogList from '../ui/BlogList';

const testData = [
  { title: 'TestBlog 1', blurb: 'this is a test blurb of the blog. it contains a lot of words etc...' },
  { title: 'TestBlog 2', blurb: 'this is a test blurb of the blog. it contains a lot of words etc...' },
  { title: 'TestBlog 3', blurb: 'this is a test blurb of the blog. it contains a lot of words etc...' },
  { title: 'TestBlog 3', blurb: 'this is a test blurb of the blog. it contains a lot of words etc...' },
  { title: 'TestBlog 3', blurb: 'this is a test blurb of the blog. it contains a lot of words etc...' },
  { title: 'TestBlog 3', blurb: 'this is a test blurb of the blog. it contains a lot of words etc...' },
  { title: 'TestBlog 3', blurb: 'this is a test blurb of the blog. it contains a lot of words etc...' },
  { title: 'TestBlog 3', blurb: 'this is a test blurb of the blog. it contains a lot of words etc...' },
  { title: 'TestBlog 3', blurb: 'this is a test blurb of the blog. it contains a lot of words etc...' },
  { title: 'TestBlog 3', blurb: 'this is a test blurb of the blog. it contains a lot of words etc...' },
  { title: 'TestBlog 3', blurb: 'this is a test blurb of the blog. it contains a lot of words etc...' },
  { title: 'TestBlog 3', blurb: 'this is a test blurb of the blog. it contains a lot of words etc...' },
];

const Blog = props => (
  <div className="blog">
    <div className="ui inverted vertical center aligned segment">
      <TopBar
        active="blog"
        history={props.history}
      />
      <SideBar
        active="blog"
        history={props.history}
      />
    </div>
    <h2 className="ui horizontal divider header">
      <i className="coffee icon" />
      The Blog
    </h2>
    <div className="ui inverted blog-list">
      <BlogList blogs={testData} />
    </div>
    <div className="ui container center aligned segment">
      <SocialBar />
    </div>
    <Copyright year={new Date().getFullYear()} />
  </div>
);

export default Blog;
