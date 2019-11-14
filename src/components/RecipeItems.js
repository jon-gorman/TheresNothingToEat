import React, {Component} from 'react';
// const urlComponent = "https://lh3.googleusercontent.com/";
import {addToFavorite, removeFromFavorite} from "../actions";
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class RecipeItems extends Component {
    //create the constructor in order to have the favorites button
    constructor(props) {
        super(props);

        this.state = {
            favorited: false
        };
    }

    addToFavorite() {
        this.setState({favorited: !this.state.favorited});
        this.props.addToFavorite(this.props.recipes);
    }

    removeFromFavorite() {
        this.setState({favorited: !this.state.favorited});
        this.props.removeFromFavorite(this.props.recipes)
    }

    displayFav() {
        if (!this.state.favorited) {
            return <div><span className="glyphicon glyphicon-unchecked"
                              onClick={() => this.addToFavorite()}
            ></span>
            </div>

        } else {
            return <div>
                <li style={{display: "flex", justifyContent: "center", marginRight: "0%", fontSize: "18px"}} id="list">
                    <Link
                      style={{color: "#9A3014"}} to="/fav">Start Cooking</Link></li>
                {""} <br/>
                <span className="glyphicon glyphicon-check"
                      onClick={() => this.removeFromFavorite()}
                  // onClick={()=>this.setState({favorited: !this.state.favorited})}
                ></span>
            </div>
        }
    }

    render() {
        return (
          <div id="boxShade" style={{marginTop: "20px"}} className="col-md-12 col-md-4">
              <div className="thumbnail">
                  <img src={this.props.recipes.recipe.image} alt="..."/>
                  <div className="caption">
                      <h3 id="listSignIn">{this.props.recipes.recipe.label}</h3>
                      <a id="list" style={{fontSize: "18px"}} target="_blank"
                         href={this.props.recipes.recipe.url}>Recipe</a>
                      <br/>
                      <h4>{this.props.showButton ? this.displayFav() : null}</h4>
                  </div>
              </div>
          </div>

        )
    }
}

//all that is needed here is a function so the first parameter will be null as state properties is not needed
export default connect(null, {addToFavorite, removeFromFavorite})(RecipeItems);
