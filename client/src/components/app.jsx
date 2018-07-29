import React from 'react'

import NavBar from './navBar.jsx'
import Main from './main.jsx'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <NavBar/>
        <Main />
      </div>
    )
  }
}

export default App
