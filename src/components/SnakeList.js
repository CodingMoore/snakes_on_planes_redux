import React from "react";
import Snake from "./Snake";
import PropTypes from "prop-types";

function SnakeList(props) {
  
  return (
    <React.Fragment>
      <hr/>
      {props.snakeList.map((snake) => 
        <Snake
          whenSnakeClicked = { props.onSnakeSelection }
          whenBuyIsClicked = { props.onClickingBuy }
          species = {"Species - " + snake.species}
          nativeTo = {"Native To - " + snake.nativeTo}
          description = {"Description - " + snake.description}
          lethality = {"Lethality - " + snake.lethality}
          inventory = {"Inventory - " + snake.inventory}
          id = {snake.id}
          key = {snake.id} />
        )}
    </React.Fragment>
  );
}

SnakeList.propTypes = {
  snakelist: PropTypes.array,
  onSnakeSelection: PropTypes.func,
  onClickingBuy: PropTypes.func
};

export default SnakeList;