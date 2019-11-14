import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addReminder, deleteReminder, addNumber} from "../actions";
import "../App.css";
import {FormGroup, Checkbox} from 'react-bootstrap';

class AppList extends Component {
    //state needed so that we know what the user types in the text field
    constructor(props) {
        super(props);
        this.state = {
            text: [],
            className: "glyphicon glyphicon-unchecked"
        }
    }

    renderReminders() {
        let reminders = this.props.reminders.favorites[0];
        console.log('reminders', reminders);

        let reminderDivs = reminders.recipe.ingredients.map(reminder => {
            return (

              <li key={reminder.id} className="list-group-item" style={{fontSize: "17px"}}>

                  <div>{reminder.text
                  }</div>
                  <form>
                      <FormGroup id="list">
                          <Checkbox inline>Found</Checkbox>
                      </FormGroup>
                  </form>
              </li>
            )
        });
        console.log(reminderDivs);
        return (
          <ul id="phone" style={{
              // left: "34%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              verticalAlign: "middle",
              width: "300",
              text: "1em",
              color: "black",
              fontSize: "18"
          }}
            // className="list-group col-sm-4">
              className="list-group col-sm-4">
              {reminderDivs}

          </ul>

        )
    }

    render() {
        // console.log('this.props', this.props);
        return (
          <div className="App">
              <h1 className="phoneTitle" id="signUpSignIn" style={{fontSize: "33pt"}}>There's Nothing to Eat!</h1>

              <div className="title" id="listSignIn" style={{fontSize: "25px"}}>
                  Ingredients List!
                  {/*<div style={{ fontSize: "18px", left: "38%"}} id="list"><Link style={{color: "#9A3014"}} to="/">Home</Link></div>*/}
                  <div style={{fontSize: "18px", left: "38%"}} id="list"><a style={{color: "#9A3014"}}
                                                                            href="https://www.google.com/maps/search/grocery+store+near+me"
                                                                            target="_blank">Store</a></div>
                  <div style={{fontSize: "18px", left: "38%"}} id="list"><a style={{color: "#9A3014"}}
                                                                            href="https://www.google.com/maps/search/food+trailer+near+me"
                                                                            target="_blank">Just give me a Taco!</a>
                  </div>

              </div>
              <br/>
              {this.renderReminders()}
          </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addReminder, deleteReminder, addNumber}, dispatch);
}

function mapStateToProps(state) {
    // console.log('state', state);
    return {
        reminders: state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppList);
