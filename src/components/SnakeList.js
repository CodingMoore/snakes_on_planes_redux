import React from "react";
import Snake from "./Snake";
import PropTypes from "prop-types";

function SnakeList(props) {
  // const { snake, onClickingRestock } = props;
  
  return (
    <React.Fragment>
      <hr/>
      {Object.values(props.snakeList).map((snake) => 
        <Snake
          whenSnakeClicked = { props.onSnakeSelection }
          whenBuyIsClicked = { props.onClickingBuy }
          species = {"Species - " + snake.species}
          nativeTo = {"Native To - " + snake.nativeTo}
          description = {"Description - " + snake.description}
          danger = {"Danger - " + snake.danger}
          inventory = {"Inventory - " + snake.inventory}
          id = {snake.id}
          key = {snake.id} />
        )}
      {/* <button onClick = { () => onClickingRestock(snake.id) }>Restock</button> */}
    </React.Fragment>
  );
}

SnakeList.propTypes = {
  snakelist: PropTypes.array,
  onSnakeSelection: PropTypes.func,
  // onClickingRestock: PropTypes.func,
  onClickingBuy: PropTypes.func
};

export default SnakeList;