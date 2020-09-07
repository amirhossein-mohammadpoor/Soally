import React, { useState } from "react"
import Header from "../containers/layout/Header"
import Main from "../containers/layout/Main"
import Footer from "../containers/layout/Footer"
import Bg from "../components/Bg/Bg"

const CRM = props => {
  const [slidePos, setSlidePos] = useState(0)
  const [output, setOutput] = useState([])
  
  const handleSlidePos = pos => {
    setSlidePos(pos)
  }

  const handleSetOutput = result => {
    output.push(result)
    setOutput([...output])
    if (slidePos === props.initialData.questions.length)
      console.log("answers:", output)
  }

  return (
    <>
      <Bg backgroundUrl={props.initialData.backgroundUrl} />
      <Header 
        questions={props.initialData.questions}
        slidePos={slidePos}
      />
      <Main 
        questions={props.initialData.questions}
        slidePos={handleSlidePos}
        setOutput={handleSetOutput}
        logoUrl={props.initialData.logoUrl}
      />
      <Footer 
        slidePos={slidePos}
        slideNumber={props.initialData.questions.length}
        logoUrl={props.initialData.logoUrl}
      />
    </>
  )
}

export default CRM