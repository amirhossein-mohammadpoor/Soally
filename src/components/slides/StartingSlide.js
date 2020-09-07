import React from "react"
import "./StartingSlide.scss"
import StartButton from "../Buttons/StartButton"

const StartingSlide = props => {
  return (
    <div className="starting-slide">
      <h1>فرم نظرسنجی و ارتقا سطح خدمت رسانی</h1>
      <img src={props.logoUrl} alt="logo" className="logo" />
      <StartButton start={props.start} />
    </div>
  )
}

export default StartingSlide