import React from 'react'
import { Switch, Route } from 'react-router-dom'
import * as routes from './routes/routes'
import { NotFoundPage, Navigation, Tools, Footer } from './components'

const App = () =>
  <div className={'app'}>
    <Navigation />
    <Tools />
    <div className={'page'}>
      <Switch>
        <Route exact path={routes.HOME} component={() => <div>Home Page</div>} />
        <Route exact path={routes.FLOW} component={() => <div>Flow Screen</div>} />
        <Route exact path={routes.JSON} component={() => <div>JSON Screen</div>} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
    <Footer />
  </div>

export default App