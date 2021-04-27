import React from 'react'
import './DeckCard.css'
import images from '../../../assets/images.js'

function DeckCard (props)
{
    return(
        <div className="DeckCard-slot">
            <div className="DeckCard-container">
                <div className="DeckCard-cost">{props.cardData.cost}</div>
                <div className="DeckCard-name">{props.cardData.name}</div>

                <div className="DeckCard-top">
                    <img className="DeckCard-image" src={images.deck_card_1} alt="" />
                </div>
                <div className="DeckCard-bottom">
                    {props.cardData.description}
                </div>
            </div>
        </div>
    )
}

export default DeckCard;