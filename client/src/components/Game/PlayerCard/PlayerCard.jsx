import React from 'react'
import './PlayerCard.css'
import images from '../../../assets/images.js'
import ChatBubble from '../ChatBubble/ChatBubble'

function PlayerCard (props)
{
    const playerColors = {
        1: '#dc143c', //Red
        2: '#4169e1', //Blue
        3: '#daa520', //Gold
        4: '#008000'  //Green
    }
    let styles = {
        borderColor: playerColors[props.playerNumber]
    }

    function renderSpeech() {
        return (props.playerTurn === props.playerNumber)
        ? (
            <div className="Speech-container">
                <ChatBubble text="Minha vez !"/>
            </div>
        )
        : (<></>)
    }

    return(
        <div className="PlayerCard-container">
            {renderSpeech()}
            <div className="PlayerCard-top" style={styles}>
                <img className="PlayerCard-image" src={images.player_img_1} alt="" />
            </div>
            <div className="PlayerCard-bottom" style={styles}>
                {props.playerData.name}
                <p>{props.playerData.cards} cartas</p>
                <p>{props.playerData.points} pontos</p>
            </div>
        </div>
    )
}

export default PlayerCard;