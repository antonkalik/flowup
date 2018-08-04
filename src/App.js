import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import * as routes from './routes/routes'
import { NotFoundPage, Navigation, HomePage, FlowPage, JsonPage, Footer } from './components'

 class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div className={'app'}>
      <Navigation />
      <div className={'page'}>
        <Switch>
          <Route exact path={routes.HOME} component={HomePage} />
          <Route exact path={routes.FLOW} component={FlowPage} />
          <Route exact path={routes.JSON} component={JsonPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
      <Footer />
    </div>
    )
  }
}

export default App