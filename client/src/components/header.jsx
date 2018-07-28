import React from 'react'
import axios from 'axios'

import SearchedFood from './searchedFood.jsx'
import SearchByName from './searchByName.jsx'

class Header extends React.Component {
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
        <div>
          <div>
            <SearchByName searchFood={this.searchFood}/>
          </div>
          <div className="mainAppDiv">
            <SearchedFood foodResults={this.state.foodResults}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
