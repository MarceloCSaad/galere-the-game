import React, { useEffect, useState } from "react";
import socket from "../../socket";
import CharButton from "./CharButton";
import "./CharSelect.css"



export default function CharSelect () {
  
  const [ playerCharacter, setPlayerCharacter ] = useState(null);
  const [ playableCharacters, setPlayableCharacters ] = useState([])


  

  useEffect( () => { getPlayableChars() }, [])
  
  function getPlayableChars() {
    console.log("Emiting event 'getPlayableChars' to backend")
    socket.emit('getPlayableChars', (payload) => {
      console.log('Received playable character list from backend.')
      console.log('Returning payload.list', payload.list)
      setPlayableCharacters( payload.list )
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
    let buttonStyle = (playerCharacter === null) //preguiça de fazer if, to usando operador ternário
    ? {opacity: '0.3', cursor: 'default'}
    : {opacity: '1', cursor: 'pointer'}

    return (playerCharacter === null)
    ? (<button style={buttonStyle}>Escolha teu campeão</button>)
    : (<button style={buttonStyle} onClick={() => console.log('to do, update available character list for all users', playableCharacters[playerCharacter-1].name)}>Beber como {playableCharacters[playerCharacter-1].name}!</button>);
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