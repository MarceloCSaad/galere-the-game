import React, { useState , useEffect } from 'react'
import socket from '../socket'
import { Link } from 'react-router-dom'

import './Join.css'



export default function Join() {
  
  const [userName, setUserName] = useState('');
  const [userRoom, setUserRoom] = useState('');



  const EnterRoom = (event) => {
    console.log("Tentando entrar na sala!")
    if (!socket || !socket.connected) {
        event.preventDefault()
        alert("Pera um segundinho que estamos conectando no servidor!")
        console.error("Pera um segundinho que estamos conectando no servidor!")
        return
      }
      else if (!userName || !userRoom) {
        event.preventDefault()
        alert("Ei.. escreve um nome e uma sala!")
        console.log("Ainda falta nome ou sala.. esperando mais")
    } else {
        console.log("Entrando na sala!")
        CreateUser()
    }
  }

  const CreateUser = () => {
    socket.emit('join', { userName, userRoom });
    console.log('createUser() em Join.js disparou socket.emit("join")')
  }



  return (
    <div className="join-container">
      <h1>Seja mal vindo ao jogo do mimi!</h1>
      <div><input placeholder="Nome" className="join-input" type="text" onChange={(event) => setUserName(event.target.value)}></input></div>
      <div><input placeholder="Sala" className="join-input" type="text" onChange={(event) => setUserRoom(event.target.value)}></input></div>


      {/* TO DO: Only go to /Lobby once the [user + room] is registered with the server */}
      <Link to={'/Lobby'} onClick={(event) => EnterRoom(event)}>
        <button className="join-button" type="submit">Juntar-se à Sala!</button>
      </Link>
    </div>
  )
}