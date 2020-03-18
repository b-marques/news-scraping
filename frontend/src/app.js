import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Homepage from '_pages/homepage'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Homepage} />
      <Route path="/:subject" component={Homepage} />
      <Route path="*" component={Homepage} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(<App />, document.querySelector('#root'))
