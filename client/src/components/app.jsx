import React from 'react'
import axios from 'axios'

import SearchByName from './searchByName.jsx'
import SearchedFood from './searchedFood.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      foodResults: []
    }
    this.searchFood = this.searchFood.bind(this)
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

  onChange(e) {
    this.setState({foodSearch: e.target.value})
  }

  render() {
    return (
      <div>
        <p>Hey There World</p>
        <hr style={{backgroundColor: 'teal'}}></hr>
        <div>
          <SearchByName searchFood={this.searchFood}/>
        </div>
        <div>
          <SearchedFood foodResults={this.state.foodResults}/>
        </div>
      </div>
    )
  }
}

export default App
