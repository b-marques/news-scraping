import React from 'react'
import ReactDOM from 'react-dom'
import ExampleComponent from './components/example-component'

import './styles/base.css'

const App = () => (
  <div>
    <ExampleComponent />
  </div>
)

ReactDOM.render(<App />, document.querySelector('#root'))
