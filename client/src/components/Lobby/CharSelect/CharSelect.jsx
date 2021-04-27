import React, { useEffect, useState } from "react";
import socket from "../../socket";
import { Link } from 'react-router-dom'
import CharButton from "./CharButton";

import "./CharSelect.css"



export default function CharSelect () {
  
  const [ playerCharacter, setPlayerCharacter ] = useState(null);
  const [ playableCharacters, setPlayableCharacters ] = useState([])


  

  useEffect( () => { getPlayableChars() }, [])
  
  function getPlayableChars() {
    console.log("Emiting event 'getPlayableChars' to server")
    socket.emit('getPlayableChars', (payload) => {
      console.log('Received playable character list from server.')
      console.log('Returning payload', payload.charList)
      setPlayableCharacters( payload.charList )
    })
  }

  function renderCharList(){
    return playableCharacters.map((ele,id) => {
      return (
        <div key={id} onClick={()=> {if (ele.id !== playerCharacter) setPlayerCharacter(ele.id)}}>
          <CharButton payload={ele} selected={playerCharacter}/>
        </div>
      )
    })
  }


  function renderConfirmButton () {
    let buttonStyle = (playerCharacter === null) //preguiça, usando operador ternário
    ? {opacity: '0.3', cursor: 'default'}
    : {opacity: '1', cursor: 'pointer'}

    return (playerCharacter === null)
    ? (<button style={buttonStyle}>Escolha teu campeão</button>)
    : (
        <Link to={'/Game'} onClick={ () => {} }>
          <button style={buttonStyle} onClick={() => console.log('to do, update available character list for all users')} type="submit">
            Beber como {playableCharacters[playerCharacter-1].name}!
          </button>
        </Link>

        //This horrible hardcoded monster of a routing path above should instead just emit a "select character event".
        //Then, once all players had selected their characters the game would be ready to start.
        //for testing purposes I'm just straigh up routing the user to the /Game path... just as a way of visualizing the Game frontend.
        //TLDR: Project is still very incomplete, and I'm using routing to navigate for now.
      )
  }

  return(
    <div className="char-select-container">
      <div className="char-list">
        {renderCharList()}
        {console.log("Current character selected: " + playerCharacter)}
      </div>
      {renderConfirmButton()}
    </div>
  );
}