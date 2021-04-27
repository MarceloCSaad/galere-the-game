import React, {useState, useEffect} from 'react'
import './Game.css';
import PlayerCard from './PlayerCard/PlayerCard';
import DeckCard from './DeckCard/DeckCard';
import SquareButton from './SquareButton/SquareButton';

function Game() {
  const [currentTurn, setCurrentTurn] = useState(1)
  
  function passTurn(){
    if (currentTurn > 3) setCurrentTurn(1)
    else setCurrentTurn(currentTurn+1)
  }

  return (
    <>
      <div id="Tabletop-header">
        Turno do jogador {currentTurn}
      </div>
      <div id="Tabletop-container">
        <div id="Tabletop-area">
          <PlayerCard playerTurn={currentTurn} playerNumber={1} playerData={ {name:"Fulano", cards:0, points:0} } />
          <PlayerCard playerTurn={currentTurn} playerNumber={2} playerData={ {name:"Beltrano", cards:0, points:0} } />
          <PlayerCard playerTurn={currentTurn} playerNumber={3} playerData={ {name:"Cicrano", cards:0, points:0} } />
          <PlayerCard playerTurn={currentTurn} playerNumber={4} playerData={ {name:"Condoriano", cards:0, points:0} } />
        </div>
      </div>
      <div id="Tabletop-footer">
        <div id="footer-hand-zone">
          <div id="footer-hand">
            <DeckCard cardData={ {name: "Black Lotus", cost:0, description:"Ganhe 3 pontos"} } />
            <DeckCard cardData={ {name: "Benção de Anubis", cost:2, description:"Deidade egípsia clama por calma aos seus guerreiros"} } />
            <DeckCard cardData={ {name: "Brecha na Lei", cost:4, description:"Perca 5 pontos"} } />
            <DeckCard cardData={ {name: "Rodada de Cachaça", cost:1, description:"Todos ganham 3 pontos"} } />
            <DeckCard cardData={ {name: "Ideia Genial", cost:3, description:"Ganhe 1 ponto, outros perdem 1 ponto"} } />
          </div>
        </div>
        <div id="footer-action-zone">
          <div onClick={() => {passTurn()}} >
            <SquareButton action={"passar o turno"}/>
          </div>
          <div onClick={() => {passTurn()}} >
          <SquareButton action={"comprar"}/>
          </div>
        </div>
      </div>
    </>    
  );
}

export default Game;