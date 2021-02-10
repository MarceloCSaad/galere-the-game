const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const socketio = require('socket.io')
const http = require('http')
require('dotenv').config()



const PORT = process.env.PORT; // <<-- My server's port

const APP = express()
const SERVER = http.createServer(APP) // not sure why I can't just use socketio(APP), but node complains if I don't http.createServer(APP) first
const IO = socketio(SERVER, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

APP.use(cors({
  "origin": "*",
  "methods": "GET,POST,PUT,DELETE"
}))
.use(bodyParser.urlencoded({ extended: true }))  // <- Hides queries within the request body (wont show on your URL as query1, query2...)
.use(bodyParser.json()); // support json encoded bodies


const QUERY_LIST = {
  selectAllPlayers: "SELECT * FROM players",
  insertIntoPlayers: "INSERT INTO `testdb`.`players` ( player_id, room_id, character_id, points, rules, anger, cards) VALUES (?,?,?,?,?,?,?)"
}
//Confirmar explicação com o Pim, mas usando ? na querie dá pra fazer uma query via o corpo (body) da requisição.
//Isso quer dizer que a requisição não deixa rastros no PC, nem deixa informação importante no campo da URL da página

const MY_SQL_CREDENTIALS = {  // <<-- Cria connection, objeto com info para conexão
  host: process.env.MY_SQL_HOST,
  user: process.env.MY_SQL_USER,
  password: process.env.MY_SQL_PASSWORD,
  database: process.env.MY_SQL_DATABASE
}

module.exports = { PORT, APP, SERVER, IO, QUERY_LIST, MY_SQL_CREDENTIALS }