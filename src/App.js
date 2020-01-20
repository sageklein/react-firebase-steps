import React, { Component } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import fbConnection from "./helpers/data/fbConnection";
import "./App.scss";
import NavBar from "./components/navBar/NavBar";
import Auth from "./components/auth/Auth";
import BoardContainer from "./components/boardContainer/BoardContainer";
import SingleBoard from "./components/singleBoard/SingleBoard";
fbConnection();
class App extends Component {
	state = {
		authed: false,
		singleBoardId: ""
	};
	authListener = () =>
		firebase.auth().onAuthStateChanged(user => {
			console.log("authListener called", user);
			if (user) {
				this.setState({ authed: true });
			} else {
				this.setState({ authed: false });
			}
		});
	setSingleBoard = boardId => {
		this.setState({
			singleBoardId: boardId
		});
	};
	componentDidMount() {
		// console.log("componentDidMount called");
		this.authListener();
	}
	componentWillUnmount() {
		// console.log('componentWillUnMount called')
	}
	loadComponent = () => {
		//conditions to render correct
		let componentToLoad = "";
		if (this.state.authed && this.state.singleBoardId.length === 0) {
			console.log(
				"loadComponent board container",
				this.state.singleBoardId.length
			);
			componentToLoad = (
				<BoardContainer setSingleBoard={this.setSingleBoard} />
			);
		} else if (this.state.authed && this.state.singleBoardId.length > 0) {
			console.log(
				"loadComponent single container",
				this.state.singleBoardId.length
			);
			componentToLoad = (
				<SingleBoard
					setSingleBoard={this.setSingleBoard}
					boardId={this.state.singleBoardId}
				/>
			);
		} else {
			componentToLoad = <Auth />;
		}
		return componentToLoad;
	};
	render() {
		return (
			<div className="App">
				<NavBar authed={this.state.authed} />
				{this.loadComponent()}
				<h2>Ready to GO.</h2>
			</div>
		);
	}
}
export default App;
