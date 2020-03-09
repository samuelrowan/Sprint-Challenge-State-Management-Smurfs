import React from "react";
import { connect } from "react-redux";

import { addCitizen } from "../actions/smurfListActions";

class SmurfList extends React.Component {
  state = {
    newCitizen: ""
  };

  handleChanges = e => {
    this.setState({ newCitizen: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <div>
          {this.props.citizens.map((citizen, index) => (
            <h4 key={index}>
              {citizen.name}
              {citizen.smurfStatus && <i className="fas fa-smurf" />}
            </h4>
          ))}
        </div>
        <input
          type="text"
          value={this.state.newCitizen}
          onChange={this.handleChanges}
          placeholder="Add new citizen"
        />
        <button onClick={() => this.props.addCitizen(this.state.newCitizen)}>
          Add citizen
        </button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  console.log("mapStateToProps in SmurfList", state);
  return {
    citizens: state.smurfListReducer.citizens
  };
};

export default connect(
  mapStateToProps,
  { addCitizen }
)(SmurfList);