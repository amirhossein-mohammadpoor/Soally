import React, { useState } from "react"
import Header from "../containers/layout/Header"
import Main from "../containers/layout/Main"
import Footer from "../containers/layout/Footer"
import Bg from "../components/Bg/Bg"
import questions from "../questions/questions.json"

const CRM = props => {
  const [slidePos, setSlidePos] = useState(0)
  const [output, setOutput] = useState([])
  
  const handleSlidePos = pos => {
    setSlidePos(pos)
  }

  const handleSetOutput = result => {
    output.push(result)
    setOutput([...output])
    if (slidePos === questions.questions.length)
      console.log("answers:", output)
  }

  return (
    <>
      <Bg backgroundUrl={questions.backgroundUrl} />
      <Header 
        questions={questions.questions}
        slidePos={slidePos}
      />
      <Main 
        questions={questions.questions}
        slidePos={handleSlidePos}
        setOutput={handleSetOutput}
        logoUrl={questions.logoUrl}
      />
      <Footer 
        slidePos={slidePos}
        slideNumber={questions.questions.length}
        logoUrl={questions.logoUrl}
      />
    </>
  )
}

export default CRM