import React, { Component } from "react";
import authData from "../../helpers/data/authData";
import boardManager from "../../helpers/data/boardManager";
import Board from "../board/Board";

class BoardContainer extends Component {
	state = {
		boards: []
	};

	getBoards = () => {
		boardManager.getBoardsByUid(authData.getUid()).then(boards => {
			this.setState({
				boards: boards
			});
		});
	};

	componentDidMount() {
		this.getBoards();
	}


 render() {
        return(
            <>
            <h2>Board container</h2>
            {this.state.boards.map((board =>
                <Board board={board} key={board.id} setSingleBoard={this.props.setSingleBoard}/>
            ))}
            </>
        )
    }
}

export default BoardContainer;
