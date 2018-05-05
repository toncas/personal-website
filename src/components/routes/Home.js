import React from 'react';
import TopBar from '../ui/TopBar';
import SideBar from '../ui/SideBar';
import JumboTitle from '../ui/JumboTitle';
import SocialBar from '../ui/SocialBar';

const Home = () => (
  <div className="home">
    <div className="ui inverted vertical masthead center aligned segment">
      <TopBar />
      <SideBar />
      <JumboTitle />
    </div>
    <div className="ui container center aligned segment">
      <SocialBar />
    </div>
  </div>
);

export default Home;
