import React from 'react'
import axios from 'axios'
import Slider from 'react-rangeslider'

class SearchByName extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      maxCalorie: 1000,
      ingredientCount: '#',
      foodSearch: ''
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  onChange(e) {
    e.preventDefault()
    this.setState({foodSearch: e.target.value})
  }

  handleOnChange (value) {
    this.setState({
      maxCalorie: value
    })
  }

  handleChange (e) {
    this.setState({
      ingredientCount: e.target.value
    })
  }

  render () {
    let { maxCalorie } = this.state
    let maxNumber = 2000
    let stepNumber = 100
    let toolTip = true
    let ingredientsNumber = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

    return (
      <div>
        <div style={{width: 200}}>
          Calories
          <Slider
            value={maxCalorie}
            max={maxNumber}
            step={stepNumber}
            orientation="horizontal"
            onChange={this.handleOnChange}
          />
        </div>

        <form>
          <input type='text' placeholder='Search by dish' onChange={(e) => {this.onChange(e)}}></input>
          <select value={this.state.ingredientCount}
            onChange={this.handleChange}>
            <option disabled="disabled">#</option>
              {ingredientsNumber.map((number, i) => { return ( <option key={i}>{number}</option> )})}
          </select>
          <button type='submit' onClick = {(e) => this.props.searchFood({food: this.state.foodSearch, maxCalorie: this.state.maxCalorie, count: this.state.ingredientCount}, e)}><i className="fa fa-search"></i></button>
        </form>
      </div>
    )
  }
}

export default SearchByName
