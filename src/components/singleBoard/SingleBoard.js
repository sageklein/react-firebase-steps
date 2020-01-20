import React, { Component } from 'react';
import BoardManager from '../../helpers/data/boardManager';
import PinManager from '../../helpers/data/PinManager'


class SingleBoard extends Component {
    state= {
        board: {},
        pins: [],
    }
    getData = () => {
        BoardManager.getSingleBoard(this.props.boardId)
        .then (boardResponse => {
            PinManager.getPinsByBoardId(this.props.boardId)
            .then(pinResponse => {
                this.setState({
                    board: boardResponse,
                    pins: pinResponse
                })
            })
        })
    }

    componentDidMount(){
        this.getData();
    }

    render() {
        console.log("what is state now?")
        return(
            <>
            {SingleBoard.id}
            </>
        )
    }
}
export default SingleBoard;