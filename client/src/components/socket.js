import openSocket from 'socket.io-client'
import React from "react";
require('dotenv').config()

//const socket = openSocket(process.env.API_URL); // For some reason this simply isn't working....
const socket = openSocket("http://localhost:8000");

export default socket;