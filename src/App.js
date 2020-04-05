import React from 'react'
import { Main } from './pages'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css'

function App () {
  return (
    <Provider store={store}>
      <Router>
        <Main/>
      </Router>
    </Provider>
  )
}

export default App
