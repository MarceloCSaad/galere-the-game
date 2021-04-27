import React, { useState , useEffect } from 'react'
import socket from '../socket'
import { Link } from 'react-router-dom'

import './Join.css'



export default function Join() {
  
  const [userName, setUserName] = useState('');
  const [userRoom, setUserRoom] = useState('');



  const EnterRoom = (event) => {
    console.log("Trying to join a room!")
    if (!socket || !socket.connected) {
      event.preventDefault()
      alert("Socket not yet connected!")
      console.error("Socket not yet connected!")
      return
    }
    else if (!userName || !userRoom) {
      event.preventDefault()
      alert("You need to provide both a Room and a Name")
      console.log("Waiting for both Room and Name to be provided...")
    } else {
      console.log("Entering the Room!")
      CreateUser()
    }
  }

  const CreateUser = () => {
    socket.emit('join', { userName, userRoom });
    console.log(`The function createUser(), inside the Join component, emited the "join" event to the Server. Both ${userName} and ${userRoom} were sent to the server!`)
  }



  return (
    <div className="join-container">
      <h1>Seja mal vindo ao jogo do mimi!</h1>
      <div><input placeholder="Name" className="join-input" type="text" onChange={(event) => setUserName(event.target.value)}></input></div>
      <div><input placeholder="Room" className="join-input" type="text" onChange={(event) => setUserRoom(event.target.value)}></input></div>


      {/* TO DO: Only go to /Lobby after checking the server for [user + room]!!
          Right now the component just "enters" (routes to) the room, no logic or checks being run on the Server Layer */}
      <Link to={'/Lobby'} onClick={(event) => EnterRoom(event)}>
        <button className="join-button" type="submit">Join!</button>
      </Link>
    </div>
  )
}