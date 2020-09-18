import React, { Suspense } from 'react'
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
              if (route.lazy) {
                return (
                  <Route
                    exact={route.exact}
                    path={route.path}
                    key={route}
                    render={() => (
                      <Suspense fallback={<h1>Loading...</h1>}>
                        <route.component />
                      </Suspense>
                    )}
                  />
                )
              } else {
                return (
                  <Route
                    exact={route.exact}
                    path={route.path}
                    component={route.component}
                    key={route}
                  />
                )
              }
            })
          }
        </Switch>
      </Router>
    </div>
  )
}

export default App
