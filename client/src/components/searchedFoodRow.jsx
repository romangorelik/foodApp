import React from 'react'
import c3 from '../../dist/c3.min.js'

class SearchedFoodRow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    c3.generate({
      bindto: this.element,
      data: {
              columns: [
                  ['FAT', this.props.food.recipe.totalNutrients.FAT.quantity || 0],
                  ['CARBS', this.props.food.recipe.totalNutrients.CHOCDF.quantity || 0],
                  ['FIBER', this.props.food.recipe.totalNutrients.FIBTG.quantity || 0],
                  ['SUGAR', this.props.food.recipe.totalNutrients.SUGAR.quantity|| 0],
                  ['PROTEIN', this.props.food.recipe.totalNutrients.PROCNT.quantity || 0]
              ],
              type : 'donut',
              onclick: function (d, i) { console.log("onclick", d, i); },
              onmouseover: function (d, i) { console.log("onmouseover", d, i); },
              onmouseout: function (d, i) { console.log("onmouseout", d, i); }
          },
          donut: {
              title: "Iris Petal Width"
          }
    })
  }

  render() {
    const { food } = this.props

    return (
      <div>
        <label>{food.recipe.label}</label>
        <img className="card-img-top" src={food.recipe.image} height="250" width="auto"></img>
        <a href={food.recipe.url}>{food.recipe.source}</a>
        <p>{food.recipe.dietLabels[0]}</p>

        <div>
          {food.recipe.ingredientLines.map((ingredient, i) => {
            return (
              <p key={i}>{ingredient}</p>
            )
          })}
        </div>

        <p>Calories {Math.floor(food.recipe.calories/food.recipe.yield)}</p>
        <div ref={ element => this.element = element } />
      </div>
    )
  }
}
export default SearchedFoodRow
