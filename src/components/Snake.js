import React from "react";
import PropTypes from "prop-types";

function Snake(props) {
  return (
    <React.Fragment>
      <h3>{props.species}</h3>
      <h3>{props.origin}</h3>
      <h3>{props}.temperment</h3>
      <h3>{props.lethality}</h3>
      <hr/>
    </React.Fragment>
  );
}

Snake.propTypes = {
  species: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  temperment: PropTypes.string.isRequired,
  lethality: PropTypes.string.isRequired,
  id: PropTypes.string
}

export default Snake;
