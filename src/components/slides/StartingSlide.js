import React from "react"
import "./StartingSlide.scss"
import StartButton from "../Buttons/StartButton"
import { useHistory } from "react-router-dom"

const StartingSlide = props => {
  const history = useHistory()

  const handleGoToInstallPage = () => {
    history.push("/install_banner")
  }

  return (
    <div className="starting-slide">
      <h1>فرم نظرسنجی و ارتقا سطح خدمت رسانی</h1>
      <img src={props.logoUrl} alt="logo" className="logo" />
      <StartButton function={props.start} buttonText={"شروع"}/>
      <br />
      <StartButton function={handleGoToInstallPage} buttonText={"نصب نرم افزار"}/>
    </div>
  )
}

export default StartingSlide