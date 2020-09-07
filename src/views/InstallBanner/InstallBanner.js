import React, { useState } from "react"
import "./InstallBanner.scss"
import Bg from "../../components/Bg/Bg"
import StartButton from "../../components/Buttons/StartButton"
import Footer from "../../containers/layout/Footer"
import { useHistory } from "react-router-dom"

const InstallBanner = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const history = useHistory()

  window.addEventListener('beforeinstallprompt', function (event) {
    console.log('beforeinstallprompt fired');
    event.preventDefault();
    setDeferredPrompt(event)
    return false;
  })

  const handelInstall = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();

      deferredPrompt.userChoice.then(function (choiceResult) {
        console.log(choiceResult.outcome);

        if (choiceResult.outcome === 'dismissed') {
          console.log('User cancelled installation');
        } else {
          console.log('User added to home screen');
        }
      })
      setDeferredPrompt(null)
    }
  }
  const handleGoBack = () => {
    history.push("/")
  }

  return (
    <div className="install-banner-view">
      <Bg />
      <div></div>
      <div className="center-section">
        <h2>نصب اپلیکشن CRM در موبایل</h2>
        <StartButton
          function={handleGoBack}
          buttonText={"باز گشت"}
        />
        <br />
        <StartButton
          function={handelInstall}
          buttonText={"نصب"}
        />
      </div>
      <Footer />
    </div>
  )
}

export default InstallBanner