import apiKeys from './config'
// import React, { Component } from "react";

const baseUrl = apiKeys.databaseURL;

const getBoardsByUid = (uid) => {
 return fetch(`${baseUrl}/boards.json?orderBy="uid"&=equalTo="${uid}"`)
 .then((response) => {
   if(response.ok){
       return response.json();

   }else {
       throw new Error('Whoops! Something went wrong!' + response.statusText)
   }  
 })
 .then((parsedResponse) => {
     console.log("parsed", parsedResponse);
     const allBoardsObject = parsedResponse;
		const boards = [];
		if (allBoardsObject != null) {
			Object.keys(allBoardsObject).forEach(boardId => {
				const newBoard = allBoardsObject[boardId];
				newBoard.id = boardId;
				boards.push(newBoard);
			});
        }
        console.log("boards", boards);
		return boards;
 })

}

 const getSingleBoard = (boardId) => {
     return fetch(`${baseUrl}/boards.json/${boardId}`)
     .then(response => response.json())
 };


export default { getBoardsByUid, getSingleBoard };