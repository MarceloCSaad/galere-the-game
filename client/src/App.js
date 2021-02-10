import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Join from './components/Join/Join';
import Lobby from './components/Lobby/Lobby';
import Game from './components/Game/Game';

import './App.css';



export default function App() {
  return (
    <div className="app">
      <div className="app-header">
        <h1>Galere Seleta, the Movie: The Game</h1>
      </div>
      <div className="app-container">
        <BrowserRouter>
          <Route path="/" exact component={Join} />
          <Route path="/Lobby" component={Lobby} />
          <Route path="/Game" component={Game} />
        </BrowserRouter>
      </div>
    </div>
  );
}