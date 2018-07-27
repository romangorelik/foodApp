import React from 'react'
import c3 from '../../dist/c3.min.js'
import SearchedFoodRow from './searchedFoodRow.jsx'

class SearchedFood extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div>
        { this.props.foodResults.map((food, i) => {
          return (
            <SearchedFoodRow key={i} food={food} />)}
          )
        }
      </div>
    )
  }
}

export default SearchedFood
