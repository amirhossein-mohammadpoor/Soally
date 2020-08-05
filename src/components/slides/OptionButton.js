import React from "react"
import "./OptionButton.scss"

const OptionButton = props => {
  return (
    <button onMouseUp={() => props.setOutput({key: props.questionId ,answer: props.buttonKey })}>{props.text}</button>
  )
}

export default OptionButton