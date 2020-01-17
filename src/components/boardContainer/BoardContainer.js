import React, { Component } from "react";
import authData from '../../helpers/data/authData'
import boardManager from '../../helpers/data/boardManager'



class BoardContainer extends Component {
    state = {
        boards:[],
    }

    getBoards = () => {
        boardManager.getBoardsByUid(authData.getUid())
        .then((boards) => {
            this.setState({ 
                boards: boards
            })
        })
    }

	componentDidMount() {
		this.getBoards();
    }

    
	render() {
		return <h2>Holy shit, Board Container!</h2>;
	}
}

export default BoardContainer;
