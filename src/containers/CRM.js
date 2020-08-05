import React, { useState } from "react"
import Header from "./layout/Header"
import Main from "./layout/Main"
import Footer from "./layout/Footer"
import Bg from "../components/Bg"

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
    </>
  )
}

export default CRM