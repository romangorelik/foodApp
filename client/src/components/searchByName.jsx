import React from 'react'
import axios from 'axios'
import Slider from 'react-rangeslider'

// To include the default styles
// import 'react-rangeslider/lib/index.css'


class SearchByName extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      maxCalorie: 0,
      // ingredientCount: 10,
      foodSearch: ''
    }
    this.handleOnChange = this.handleOnChange.bind(this)
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

  render () {
    let { maxCalorie } = this.state
    let maxNumber = 2000
    let stepNumber = 100
    let toolTip = true

    return (
      <div>
        <form>
          <input type='text' placeholder='Search by dish' onChange={(e) => {this.onChange(e)}}></input>
          <button type='submit' onClick = {(e) => this.props.searchFood({food: this.state.foodSearch, maxCalorie: this.state.maxCalorie}, e)}><i className="fa fa-search"></i></button>
        </form>

        <div style={{width: 200}}>
          <Slider
            value={maxCalorie}
            max={maxNumber}
            step={stepNumber}
            orientation="horizontal"
            onChange={this.handleOnChange}
          />
        </div>
      </div>
    )
  }
}

export default SearchByName

// <Slider
//   min={Number}
//   max={Number}
//   step={Number}
//   value={Number}
//   orientation={String}
//   reverse={Boolean}
//   tooltip={Boolean}
//   labels={Object}
//   handleLabel={String}
//   format={Function}
//   onChangeStart={Function}
//   onChange={Function}
//   onChangeComplete={Function}
// />
