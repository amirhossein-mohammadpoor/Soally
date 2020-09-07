import React from "react"
import "./StartButton.scss"

const StartButton = props => {
  return (
    <button className="start-button" onMouseUp={props.start}>شروع</button>
  )
}

export default StartButton 