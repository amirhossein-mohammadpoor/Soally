import React from 'react'
import "./App.scss"
import CRM from "./containers/CRM"
import initialData from "./questions/questions"

const App = () => {

  return (
    <div className="App">      
      <CRM initialData={initialData} />
    </div>
  )
}

export default App
