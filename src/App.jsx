import React from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import {Provider} from "react-redux"
import appStore from "./service/store/appStore"

const App = () => {
  return (
    <Provider store={appStore}>
      <Header />
      <Home />
    </Provider>
  )
}

export default App
