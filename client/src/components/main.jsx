import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Comments from './commented.jsx'
import Home from './header.jsx'


const Main = () => (
  <main>
    <Switch>
      <Route path='/search' component={Home}/>
      <Route path='/comments' component={Comments}/>
    </Switch>
  </main>
)

export default Main
