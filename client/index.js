import ReactDOM from 'react-dom'
import React from 'react'
import Router from './components/Router'
import { Header } from './components/header'
import { Footer } from './components/footer'

import './style.scss'

ReactDOM.hydrate(
  <div>
    <Header />
    <Router />
    <Footer />
  </div>,
  document.getElementById('root'),
)
