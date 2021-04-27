import React from 'react'
import './SquareButton.css'

export default function SquareButton (props){
    return(
        <div className="turn-button">
            {props.action}
        </div>
    )
}