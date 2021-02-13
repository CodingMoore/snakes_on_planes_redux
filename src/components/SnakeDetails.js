import React from "react";
import PropTypes from "prop-types";

function SnakeDetails(props) {
  const { snake, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Snake Details</h1>
      <h3>{snake.species}</h3>
      <h3>{snake.origin}</h3>
      <h3>{snake.temperment}</h3>
      <h3>{snake.lethality}</h3>
      <button onClick = { props.onClickingEdit }>Update Snake Details</button>
      <button onClick = { () => onClickingDelete(snake.id) }>Delete Snake</button>
      <hr/>
    </React.Fragment>
  );
}

SnakeDetails.propTypes = {
  snake: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default SnakeDetails;