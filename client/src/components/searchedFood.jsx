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
//
// class SearchedFood extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//
//     }
//     this.graph = this.graph.bind(this)
//   }
//
//   componentDidMount() {
//     this.componentDidUpdate()
//   }
//
//   componentDidUpdate() {
//     this.graph(0),
//     this.graph(1),
//     this.graph(2),
//     this.graph(3),
//     this.graph(4)
//   }
//
//
//   graph(index) {
//     c3.generate({
//             bindto: '#class' + index,
//             data: {
//         columns: [
//             ['data1', 30],
//             ['data2', 120],
//         ],
//         type : 'donut',
//         onclick: function (d, i) { console.log("onclick", d, i); },
//         onmouseover: function (d, i) { console.log("onmouseover", d, i); },
//         onmouseout: function (d, i) { console.log("onmouseout", d, i); }
//     },
//     donut: {
//         title: "Iris Petal Width"
//     }
//           })}
//
//
//   render () {
//     return (
//       <div>
//         {this.props.foodResults.map((food, i) => {
//           return (
//             <div key={i}>
//               <label>{food.recipe.label}</label>
//               <img className="card-img-top" src={food.recipe.image} height="250" width="auto"></img>
//               <a href={food.recipe.url}>{food.recipe.source}</a>
//               <p>{food.recipe.dietLabels[0]}</p>
//
//               <div>
//                 {food.recipe.ingredientLines.map((ingredient, i) => {
//                   return (
//                     <p key={i}>{ingredient}</p>
//                   )
//                 })}
//               </div>
//
//               <p>Calories {Math.floor(food.recipe.calories/food.recipe.yield)}</p>
//               <div id={`class${i}`}></div>
//
//             </div>
//           )
//         })}
//
//       </div>
//     )
//   }
// }
//
// export default SearchedFood
