  
import openSocket from 'socket.io-client'
import React from "react";

const socket = openSocket(process.env.REACT_APP_API_URL);
export default socket;