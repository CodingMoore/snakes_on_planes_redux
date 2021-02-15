import React from "react";
import PropTypes from "prop-types";

function Snake(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenSnakeClicked(props.id)}>
        <h3>{props.species}</h3>
        <h3>{props.origin}</h3>
        <h3>{props.temperment}</h3>
        <h3>{props.lethality}</h3>
        <h3>{props.inventory}</h3>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Snake.propTypes = {
  species: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  temperment: PropTypes.string.isRequired,
  lethality: PropTypes.string.isRequired,
  inventory: PropTypes.number,
  id: PropTypes.string,
  whenSnakeClicked: PropTypes.func
};

export default Snake;
