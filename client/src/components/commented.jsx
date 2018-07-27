import React from 'react'
import axios from 'axios'

class Commented extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      results: []
    }
  }

  componentDidMount () {
    this.getSavedComments()
  }

  getSavedComments () {
    axios.get('/foodsearch/commented')
    .then(response => {
      this.setState({
        results: response.data
      })
    })
    .catch(err => console.error(err))
  }


  render() {
    return (
      <div>
        {this.state.results.map((food, i) => {
          return (
            <div>
              <img src={food.image} height="250" width="auto"></img>
            </div>
          )
        })}
      </div>
    )
  }

}

export default Commented
