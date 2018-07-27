import React from 'react'
import c3 from '../../dist/c3.min.js'
import axios from 'axios'

class SearchedFoodRow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comment: '',
      image: '',
      link: '',
      calores: 0,
      label: '',
      dietLabel: ''
    }
    this.getData = this.getData.bind(this)
    this.saveToDatabase = this.saveToDatabase.bind(this)
  }

  componentDidMount() {
    this.componentDidUpdate()
  }

  componentDidUpdate() {
    c3.generate({
      bindto: this.element,
      data: {
              columns: [
                  ['FAT', this.props.food.recipe.totalNutrients.FAT.quantity || 0],
                  ['CARBS', this.props.food.recipe.totalNutrients.CHOCDF.quantity || 0],
                  ['SUGAR', this.props.food.recipe.totalNutrients.SUGAR.quantity|| 0],
                  ['PROTEIN', this.props.food.recipe.totalNutrients.PROCNT.quantity || 0]
              ],
              type : 'donut',
              onclick: function (d, i) { console.log("onclick", d, i); },
              onmouseover: function (d, i) { console.log("onmouseover", d, i); },
              onmouseout: function (d, i) { console.log("onmouseout", d, i); }
          },
          donut: {
              title: `Calories: ${Math.floor(this.props.food.recipe.calories/this.props.food.recipe.yield)}`
          }
    })
  }

  getData(food) {
    this.setState({
      image: food.recipe.image,
      link: food.recipe.url,
      calores: Math.floor(food.recipe.calories/food.recipe.yield),
      label: food.recipe.label,
      dietLabel: food.recipe.dietLabels[0]
    })
  }

  saveToDatabase(food) {
    axios.post('/foodsearch/commented', {
        image: food.recipe.image,
        label: food.recipe.label,
        dietLabel: food.recipe.dietLabels[0],
        calories: Math.floor(food.recipe.calories/food.recipe.yield),
        comment: this.state.comment
    })
  }

  onChange(e) {
    e.preventDefault()
    this.setState({comment: e.target.value})
  }

  render() {
    const { food } = this.props

    return (
      <div className="columns is-mobile">
        <div className="column is-four-fifths is-offset-one-quarter">



        <section className="section">
           <div className="container">
           <img src={food.recipe.image} height="250" width="auto" style={{display: "inline-block"}}></img>
           <div ref={ element => this.element = element } style={{display: "inline-block"}}/>

           <label>{food.recipe.label}</label>
           <a href={food.recipe.url} target="_blank">{food.recipe.source}</a>
           <p>{food.recipe.dietLabels[0]}</p>

           <div>
             {food.recipe.ingredientLines.map((ingredient, i) => {
               return (
                 <p key={i}>{ingredient}</p>
               )
             })}
           </div>

           <article className="media">
             <div className="media-content">
              <div className="field">
                <p className="control">
                  <textarea className="textarea" placeholder="Add a comment..." maxLength="350" onChange={(e) => {this.onChange(e)}}></textarea>
                </p>
              </div>
              <nav className="level">
                <div className="level-left">
                  <div className="level-item">
                    <button className="button is-info" onClick = {(e) => this.saveToDatabase(food)}>Submit</button>
                  </div>
                </div>
              </nav>
            </div>
           </article>

           </div>
         </section>





        </div>
      </div>
    )
  }
}
export default SearchedFoodRow
