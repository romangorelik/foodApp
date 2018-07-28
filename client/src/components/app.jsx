import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import SearchByName from './searchByName.jsx'
import SearchedFood from './searchedFood.jsx'
import NavBar from './navBar.jsx'
import Commented from './commented.jsx'
import Main from './main.jsx'
import Header from './header.jsx'

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
//
// <div>
//   <NavBar/>
//   <button onClick={() => this.showComments()}>Show Comments</button>
//   <button onClick={() => this.showSearch()}>Show Search</button>
//   {this.state.viewComments === false ? (
    // <div>
    //   <div>
    //     <SearchByName searchFood={this.searchFood}/>
    //   </div>
    //   <div className="mainAppDiv">
    //     <SearchedFood foodResults={this.state.foodResults}/>
    //   </div>
    // </div>
//   ) : (
//     <div>
//       <Commented/>
//     </div>
//   )}
// </div>
