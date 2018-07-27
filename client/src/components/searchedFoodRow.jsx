import React from 'react'
import c3 from '../../dist/c3.min.js'

class SearchedFoodRow extends React.Component {
  constructor(props) {
    super(props)
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
              title: "Nutrional Values"
          }
    })
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

           <p>Calories {Math.floor(food.recipe.calories/food.recipe.yield)}</p>

           <article className="media">
             <div className="media-content">
              <div className="field">
                <p className="control">
                  <textarea className="textarea" placeholder="Add a comment..."></textarea>
                </p>
              </div>
              <nav className="level">
                <div className="level-left">
                  <div className="level-item">
                    <a className="button is-info">Submit</a>
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
