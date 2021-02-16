import React from "react";
import PropTypes from "prop-types";

function SnakeDetails(props) {
  const { snake, onClickingDelete, onClickingEdit, onClickingRestock } = props;

  return (
    <React.Fragment>
      <h1>Snake Details</h1>
      <h3>{"Species - " + snake.species}</h3>
      <h3>{"Native To - " + snake.nativeTo}</h3>
      <h3>{"Description - " + snake.description}</h3>
      <h3>{"Danger - " + snake.danger}</h3>
      <h3>{"Inventory - " + snake.inventory}</h3>
      <button onClick = { () => onClickingRestock(snake.id) }>Restock</button>
      <button onClick = { () => onClickingEdit(snake.id) }>Update Snake Details</button>
      <button onClick = { () => onClickingDelete(snake.id) }>Delete Snake</button>
      <hr/>
    </React.Fragment>
  );
}

SnakeDetails.propTypes = {
  snake: PropTypes.object,
  onClickingRestock: PropTypes.func,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default SnakeDetails;