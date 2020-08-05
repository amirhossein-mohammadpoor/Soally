import React from "react"
import "./StartingSlide.scss"

const StartingSlide = props => {
  return (
    <div className="starting-slide">
      <h1>فرم نظرسنجی و ارتقا سطح خدمت رسانی</h1>
      <img src={props.logoUrl} alt="logo" className="logo" />
      <button onMouseUp={props.start}>شروع</button>
    </div>
  )
}

export default StartingSlide