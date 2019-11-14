import React, {Component} from 'react';
import Search from './Search';
import {connect} from 'react-redux';
import RecipeItems from './RecipeItems';

class RecipeResults extends Component {
    render() {
        return (
          <div>
              <div>
              </div>
              <Search/>
              <br/>
              <br/>
              {/*<li  style={{display: "flex", justifyContent: "center", marginRight: "0%", fontSize: "18px"}} id="list"><Link*/}
              {/*style={{color: "#9A3014"}} to="/fav">Start Cooking</Link></li>*/}
              {this.props.recipes.map(item => {
                  return <RecipeItems recipes={item} key={item.recipe.label} showButton={true}/>
              })}
          </div>
        )
    }
}

//access the data in the RECIPE
function mapStateToProps(state) {
    return {
        recipes: state.recipes
    }
}

export default connect(mapStateToProps, null)(RecipeResults);
