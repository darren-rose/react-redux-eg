import React, { Component } from 'react';

import { connect } from "react-redux";

import {TAKE, LEAVE} from '../actions';

class ChairComponent extends Component {

    constructor(props) {
        super(props);
        this.onTake = this.onTake.bind(this);
        this.onLeave = this.onLeave.bind(this);
    }

    onTake() {
        this.props.take('Dave');
    }

    onLeave() {
        this.props.leave();
    }

  render() {
    const occupied = (this.props.occupied) ? "yes" : "no";
    const person = (this.props.person) ? this.props.person : "";

    return (
      <div>
      Chair <br />
      Occupied {occupied} <br />
      By {person} <br />
      <button onClick={this.onTake}>take</button>
      <button onClick={this.onLeave}>leave</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    occupied: state.occupied,
    person: state.person
  };
};

const mapDispatchToProps = dispatch => {
  return {
    take: person => dispatch({ type : TAKE, payload: person }),
    leave: () => dispatch({ type : LEAVE })
  };

};

const Chair = connect(mapStateToProps, mapDispatchToProps)(ChairComponent);

export default Chair;
