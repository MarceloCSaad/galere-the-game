const VARS = require('./connection/vars');
require('dotenv').config()
const mysql = require('mysql');
const charList = require('./lib/character') // Hard Coded ==> Should get from MySQL


const connection = mysql.createConnection(VARS.MY_SQL_CREDENTIALS) //Connection object used to communicate with MySQL
let started = false;
// [ False: Did not connect to MySQL ]   [ True: Did connect to MySQL ]


connection.connect(err =>
  // Using the connection object, let's connect to MySQL. We expect a possible error.
  // If we get an error back, this means that we didn't connect. Otherwise, we will have succcessfully connected to MySQL!
  (err)
  ? started = false
  : started = true
);

VARS.IO.on( 'connection', (socket) => {
  console.log( 'We have a new connection:', socket.id )
  // Let's create events now:
  socket.on('join', (data) => {
    console.log('got data back from "join" event:', data)
  })

  socket.on('getPlayableChars', (callback) => {
    payload = charList;
    console.log('Frontend request existing playable characters...')
    console.log('Sending payload back!')
    callback(payload) // This callback is socket.oi's res.send()
  })

  socket.on('disconnect', () => console.log('User disconnected!')) //Socket 'connect' and 'disconnect' are standard events
})



VARS.SERVER.listen( VARS.PORT, () => console.log(`Server started. Listening to port ${VARS.PORT}`));




/*import { Deck } from './helpers/deck.js';
const deck = new Deck();
deck.shuffle();
console.log("Fresh deck created and shuffled");
console.log(deck.cards);*/