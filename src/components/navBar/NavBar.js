import React, { Component } from 'react';
import { Navbar, Collapse, NavbarBrand, Nav, NavbarText, NavbarToggler, Button } from 'reactstrap';
import firebase from 'firebase';
import 'firebase/auth';

class NavBar extends Component {
	state = {
		isOpen: false
	};

	logMeOut = e => {
		e.preventDefault();
		firebase.auth().signOut();
	};

	toggle = () => this.setIsOpen(!this.state.isOpen);

	render() {
		const { authed } = this.props;
		return (
			<>
				<Navbar color="light" light expand="md">
					<NavbarBrand href="/">Pinnergy</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="mr-auto" navbar></Nav>
						<NavbarText>
							{authed ? (
								<Button color="danger" onClick={this.logMeOut}>
									Logout
								</Button>
							) : (
								"Login"
							)}
						</NavbarText>
					</Collapse>
				</Navbar>
			</>
		);
	}
}

export default NavBar; 