#!/usr/bin/node
const request = require('request');
const process = require('process');

const episodeID = process.argv[2];
const starwars_URL = `https://swapi-api.alx-tools.com/api/films/${episodeID}`;

request(starwars_URL, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const title = JSON.parse(body).title;
    console.log(title);
  }
});