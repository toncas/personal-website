import React from 'react';
import TopBar from '../ui/TopBar';
import SideBar from '../ui/SideBar';
import JumboTitle from '../ui/JumboTitle';
import SocialBar from '../ui/SocialBar';
import Copyright from '../ui/Copyright';

const Home = props => (
  <div className="home">
    <div className="ui inverted vertical masthead center aligned segment">
      <TopBar
        active="Home"
        history={props.history}
      />
      <SideBar
        active="Home"
        history={props.history}
      />
      <JumboTitle />
    </div>
    <div className="ui container center aligned segment">
      <SocialBar />
    </div>
    <Copyright year={new Date().getFullYear()} />
  </div>
);

export default Home;
