import React, { Component } from 'react';
import { HashRouter as Router} from 'react-router-dom';

import Main from './component/Main'


class App extends Component {
  render(){
    return (
      <Router>
        <Main />
      </Router>
    )
  }
}

export default App;
