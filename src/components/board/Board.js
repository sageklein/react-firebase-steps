import React, { Component } from "react";
import {
	Card,
	CardImg,
    CardText,
    CardBody,
	CardTitle,
	Button
} from "reactstrap";


class Board extends Component {
    // this.props.setSingleBaord(this.props.board.id); 
    // }

	render() {
    const { board } = this.props;
    
	return (
		<div>
			<Card className="card_main">
				<CardTitle className="title">{board.name}</CardTitle>
				<CardImg
					top
					width="100%"
					className="board_img"
					src="https://cdn3.f-cdn.com/contestentries/1376995/30494909/5b566bc71d308_thumb900.jpg"
					alt="Board"
				/>
				<CardBody>
					<CardText>{board.discription}</CardText>
					<Button className="button" onClick={this.editBoard}>
						Edit
					</Button>
					<Button className="button" onClick={this.goToSingleBaord}>
						View
					</Button>
				</CardBody>
			</Card>
		</div>
	);
};
}

export default Board;
