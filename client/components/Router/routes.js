import React from 'react'
import { Route } from 'react-router-dom'
import { Home } from '../../pages/home'

export default () => {
  return (
    [
      <Route component={Home} exact key="1" path="/home" />,
    ]
  )
}
