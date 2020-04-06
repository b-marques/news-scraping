import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HomePage from '_pages/home'
import ArticlePage from '_pages/article'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/article/:id/:slug" component={ArticlePage} />
      <Route path="/:subject" component={HomePage} />
      <Route path="*" component={HomePage} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(<App />, document.querySelector('#root'))
