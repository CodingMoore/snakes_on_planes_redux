import React from "react";
import PropTypes from "prop-types";

function Snake(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenSnakeClicked(props.id)}>
        <h3>{props.species}</h3>
        <h3>{props.nativeTo}</h3>
        <h3>{props.description}</h3>
        <h3>{props.danger}</h3>
        <h3>{props.inventory}</h3>
      </div>
      <button onClick = { () => props.whenBuyIsClicked(props.id) }>Buy (Sold by the Dozen)</button>
      <hr/>
    </React.Fragment>
  );
}

Snake.propTypes = {
  species: PropTypes.string.isRequired,
  nativeTo: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  danger: PropTypes.string.isRequired,
  inventory: PropTypes.string,
  id: PropTypes.string,
  whenBuyIsClicked: PropTypes.func,
  whenSnakeClicked: PropTypes.func
};

export default Snake;
