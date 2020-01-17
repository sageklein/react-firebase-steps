import React, {Component} from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import './App.scss';
import fbConnection from "./helpers/data/fbConnection";
import NavBar from './components/navBar/NavBar';

fbConnection();

class App extends Component {
  state = {
    authed: false,
  }

  authListener = () => firebase.auth().onAuthStateChanged((user) =>  {
    console.log("authListener called", user);
    if (user) {
		this.setState({ authed: true });
	} else {
		this.setState({ authed: false });
	}
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
        <NavBar />
        <h2>Sage Rules!</h2>
      </div>
    );
  }
}

export default App;