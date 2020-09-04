import React from 'react'
import "./App.scss"
import CRM from "./containers/CRM"
import questions from "./questions/questions.json"

const App = () => {

  return (
    <div className="App">      
      <CRM initialData={questions} />
    </div>
  )
}

export default App
