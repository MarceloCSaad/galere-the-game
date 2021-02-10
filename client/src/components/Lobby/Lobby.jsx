import React from 'react'
import CharSelect from './CharSelect/CharSelect'
import CurrentPlayers from './CurrentPlayers/CurrentPlayers';
import './Lobby.css';

export default function Lobby() {

  return (
    <div>
      <h2>Sexta feira a noite meu pajero, Pontes lotado. Escolhe quem chegou pra beber:</h2>
      <CurrentPlayers />
      <CharSelect />
    </div>
  )
}