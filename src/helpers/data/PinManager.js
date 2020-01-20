import apiKeys from "./config";

const baseUrl = apiKeys.databaseURL;
const getPinsByBoardId = boardId => {
	return fetch(
		`${baseUrl}/pins.json?orderBy="boardId"&equalTo="${boardId}"`
	).then(response => response.json());
};

export default { getPinsByBoardId };
