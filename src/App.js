import React, {Component} from 'react';
import './App.scss';

class App extends Component {
  state = {

  }

  componentDidMount() {
    // console.log("componentDidMount called");
  }

  componentWillUnmount() {
    // console.log('componentWillUnMount called')
  }

  render() {

    return (
      <div className="App">
        <h2>Ready to GO.</h2>
      </div>
    );
  }
}

export default App;
