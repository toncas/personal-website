import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/routes/About';
import Home from './components/routes/Home';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
        </Switch>
      </Router>
    );
  }
}

export default App;
