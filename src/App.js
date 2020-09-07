import React from 'react'
import "./App.scss"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CRM from "./containers/CRM"
import questions from "./questions/questions.json"
import InstallBanner from "./components/InstallBanner/InstallBanner"

const App = () => {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={() => <CRM initialData={questions} />} />
          <Route exact path="/install_banner" compoenet={InstallBanner} />
          <Route render={() => <h1>!! Not Found</h1>} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
