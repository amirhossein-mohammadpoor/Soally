import React from 'react'
import "./App.scss"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from "./routes/routes"

const App = () => {
  
  return (
    <div className="App">
      <Router>
        <Switch>
          {
            routes.map(route => {
              return (
                <Route exact={route.exact} path={route.path} component={route.component} key={route} />
              )
            })
          }          
        </Switch>
      </Router>
    </div>
  )
}

export default App
