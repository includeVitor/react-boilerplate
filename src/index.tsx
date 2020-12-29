import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

//Store
import store from './store'

//App
import App from './pages/App'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);