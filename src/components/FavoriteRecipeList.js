import React, {Component} from 'react';
import {connect} from 'react-redux';
import RecipeItems from './RecipeItems'
import {Link} from 'react-router-dom';
import "../App.css";


class FavoriteRecipeList extends Component {
  render() {
    return (

      //map over the favorites and render the RecipeItems that are returned in a seperate div
      <div>
        <h1 className="phoneTitle" id="signUpSignIn" style={{fontSize: "33pt"}}>There's Nothing to Eat!</h1>

        <h4 id="listSignIn">My Latest Recipes</h4>

        <li style={{display: "flex", justifyContent: "center", marginRight: "0%", fontSize: "18px"}} id="list"><Link
          style={{color: "#9A3014"}} to="/">Home</Link></li>

        <li style={{display: "flex", justifyContent: "center", marginRight: "0%", fontSize: "18px"}} id="list"><Link
          style={{color: "#9A3014"}} to="/AppList">Shopping List</Link></li>
        <br/>

        {this.props.favorites.map(recipes => {
          return <RecipeItems style={{position: "fixed"}} recipes={recipes} key={recipes.recipe.image}
                              showButton={false}/>
        })}
      </div>


    )
  }
}

//wire to the store
function mapStateToProps(state) {
  return {
    //once we have favorites here we can access it in the render above
    favorites: state.favorites
  }
}

export default connect(mapStateToProps, null)(FavoriteRecipeList);
