import React from "react"
import "./InstallBanner.scss"
import Bg from "../../components/Bg/Bg"
import StartButton from "../../components/Buttons/StartButton"

const InstallBanner = () => {
  return(
    <div className="install-banner-view">
      <Bg />
      <h2>نصب اپلیکشن CRM در موبایل</h2>
      <StartButton 
        function={() => {}}
        buttonText={"نصب"}
      />
    </div>
  )
}

export default InstallBanner