import React from 'react'
import './Player.css'
import CagarRegra from './CagarRegra'
import ShowRegras from './ShowRegras'

export function Player (props) {
  return (
    <div id="test-space">
      <h2>Snades chegou pra beber</h2>
      <CagarRegra />
      <ShowRegras />

      <button>Puxe uma Carta</button>
      <p>Você tem * cartas</p>
    </div>
  );
}