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
 })
}


export default { getBoardsByUid };