import React, { Component, PropTypes } from 'react';
import Header from '../components/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <hr/>
        {this.props.children}
      </div>
    )
  }
}

export default App;
