import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Blog from './components/routes/Blog';
import Home from './components/routes/Home';
import About from './components/routes/About';
import Resume from './components/routes/Resume';

import './styles/AppStyle.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/about" exact component={About} />
          <Route path="/resume" exact component={Resume} />
        </Switch>
      </Router>
    );
  }
}

export default App;
