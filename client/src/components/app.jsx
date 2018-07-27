import React from 'react'
import axios from 'axios'

import SearchByName from './searchByName.jsx'
import SearchedFood from './searchedFood.jsx'
import NavBar from './navBar.jsx'
import Commented from './commented.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      foodResults: [],
      viewComments: false
    }
    this.searchFood = this.searchFood.bind(this)
    this.showComments = this.showComments.bind(this)
  }

  searchFood (food, e) {
    e.preventDefault()
    axios.get('/foodsearch', {
      params: {
        maxCalorie: food.maxCalorie,
        ingredientCount: food.count,
        foodSearch: food.food
      }
    })
    .then(response => {
      this.setState({
        foodResults: response.data
      })
    })
  }

  showComments() {
    this.setState({
      viewComments: true
    })
  }

  showSearch() {
    this.setState({
      viewComments: false
    })
  }

  onChange(e) {
    this.setState({foodSearch: e.target.value})
  }

  render() {
    return (
      <div>
        <NavBar/>
        <button onClick={() => this.showComments()}>Show Comments</button>
        <button onClick={() => this.showSearch()}>Show Search</button>
        {this.state.viewComments === false ? (
          <div>
            <div>
              <SearchByName searchFood={this.searchFood}/>
            </div>
            <div className="mainAppDiv">
              <SearchedFood foodResults={this.state.foodResults}/>
            </div>
          </div>
        ) : (
          <div>
            <Commented/>
          </div>
        )}
      </div>
    )
  }
}

export default App
