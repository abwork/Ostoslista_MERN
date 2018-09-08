import React, { Component } from 'react';
import Routes from './routes/Routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>Navigation bar</div>
        <Routes />
      </div>
    );
  }
}

export default App;
