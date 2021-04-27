import React from 'react'
import './ChatBubble.css'

export default function ChatBubble(props){
    return(
        <div className="ChatBubble">
            {props.text}
        </div>
    )
}