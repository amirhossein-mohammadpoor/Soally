import React from "react"
import "./Bg.scss"

const Bg = props => {
  return (
    <div className="bg" style={{backgroundImage: `url(${props.backgroundUrl})`}}></div>
  )
}

export default Bg