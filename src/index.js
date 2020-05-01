import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import reducer from './reducers'
import middleware from './middleware'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const store = createStore(reducer, middleware)


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

