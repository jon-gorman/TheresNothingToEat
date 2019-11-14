import React, {Component} from 'react';
import {Form, FormControl, FormGroup, Button, DropdownButton, MenuItem} from 'react-bootstrap';
// import {API_KEY} from '../secrets';
// import {APP_ID} from '../secrets';
//add the action to the search
import {recipes, addIngredient} from '../actions';
import {connect} from 'react-redux';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            query: [],
            buttons: []
        };
    }

    search() {
        // console.log('search button clicked', this.state.query);
        let url = `https://api.edamam.com/search?_app_id=c25b1417&_app_key=b66ddcba681839a1d252f9822481af5b&to=50&q=${this.state.query}`
        fetch(url, {
            method: 'GET'
        }).then(response => response.json())
          .then(results => {
              this.props.recipes(results.hits)
          });
    }

    render() {
        return (
          <div>
              <h1 className="phoneTitle" id="signUpSignIn" style={{fontSize: "33pt"}}>There's Nothing to Eat!</h1>

              <Form inline className="col-md-6 col-md-offset-3">
                  <DropdownButton id="dropMenu" title="Diet" className="buttonColor"
                  >
                      <MenuItem id="listSignIn" styele={{color: "black"}}
                                onClick={() => this.state.buttons.push(", diabetic")}>Diabetic</MenuItem>
                      <MenuItem id="listSignIn" styele={{color: "black"}}
                                onClick={() => this.state.buttons.push(", gluten Free")}>Gluten-Free</MenuItem>
                      <MenuItem id="listSignIn" styele={{color: "black"}}
                                onClick={() => this.state.buttons.push(", Keto")}>Ketogentic</MenuItem>

                      <MenuItem id="listSignIn" styele={{color: "black"}}
                                onClick={() => this.state.buttons.push(", low-carb")}>Low-Carb</MenuItem>

                      <MenuItem id="listSignIn" styele={{color: "black"}}
                                onClick={() => this.state.buttons.push(", paleo")}>Paleo</MenuItem>

                      <MenuItem id="listSignIn" styele={{color: "black"}}
                                onClick={() => this.state.buttons.push(", Raw")}>Raw</MenuItem>

                      <MenuItem id="listSignIn" styele={{color: "black"}}
                                onClick={() => this.state.buttons.push(", sea-Food")}>Sea-Food</MenuItem>

                      <MenuItem id="listSignIn" styele={{color: "black"}}
                                onClick={() => this.state.buttons.push(", smoothy")}>Smoothy</MenuItem>

                      <MenuItem id="listSignIn" styele={{color: "black"}}
                                onClick={() => this.state.buttons.push(", Vegan")}>Vegan</MenuItem>

                      <MenuItem id="listSignIn" styele={{color: "black"}}
                                onClick={() => this.state.buttons.push(", Vegetarian")}>Vegetarian</MenuItem>

                  </DropdownButton>
                  {' '}
                  <DropdownButton id="dropMenu" title="Cuisine" className="buttonColor"
                  >
                      <MenuItem id="listSignIn" styele={{color: "black"}}
                                onClick={() => this.state.buttons.push("+ African")}>African</MenuItem>

                      <MenuItem id="listSignIn" styele={{color: "black"}}
                                onClick={() => this.state.buttons.push("+ American")}>American</MenuItem>

                      <MenuItem id="listSignIn" styele={{color: "black"}}
                                onClick={() => this.state.buttons.push("+ Asian")}>Asian</MenuItem>

                      <MenuItem id="listSignIn" styele={{color: "black"}}
                                onClick={() => this.state.buttons.push("+ French")}>French</MenuItem>

                      <MenuItem id="listSignIn" styele={{color: "black"}}
                                onClick={() => this.state.buttons.push("+ Indian")}>Indian</MenuItem>

                      <MenuItem id="listSignIn" styele={{color: "black"}}
                                onClick={() => this.state.buttons.push("+ Italian")}>Italian</MenuItem>

                      <MenuItem id="listSignIn" styele={{color: "black"}}
                                onClick={() => this.state.buttons.push("+ Mexican")}>Mexican</MenuItem>

                      <MenuItem id="listSignIn" styele={{color: "black"}}
                                onClick={() => this.state.buttons.push("+ Middle Eastern")}>Middle Eastern</MenuItem>

                  </DropdownButton>
                  {' '}
                  <FormGroup>
                      {' '}
                      <FormControl
                        className="phoneSearch"
                        id="listSignIn"
                        style={{color: "black"}}
                        type="text"
                        placeholder="Add each ingredient"
                        onChange={(event) => this.setState({query: event.target.value + this.state.buttons})}
                      />
                      {' '}
                      <Button id="searchButton" className="glyphicon glyphicon-cutlery" bsStyle="success"
                              onClick={() => this.search()}></Button>
                  </FormGroup>
              </Form>
          </div>)
    }
}

export default connect(null, {recipes, addIngredient})(Search);
