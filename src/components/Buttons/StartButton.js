import React from "react"
import "./StartButton.scss"

const StartButton = props => {
  return (
    <button 
      className="start-button"
      onMouseUp={props.function}
    >
      {props.buttonText}
    </button>
  )
}

export default StartButton 