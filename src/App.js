import React, {Component} from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import './App.scss';
import fbConnection from "./helpers/data/fbConnection";

fbConnection();

class App extends Component {
  state = {

  }
  authListener = () => firebase.auth().onAuthStateChanged((user) =>  {
    console.log("authListener called", user);
  })

  componentDidMount() {
    // console.log("componentDidMount called");
    this.authListener();
  }

  componentWillUnmount() {
    // console.log('componentWillUnMount called')
  }

  render() {

    return (
      <div className="App">
        <h2>Sage Rules!</h2>
      </div>
    );
  }
}

export default App;